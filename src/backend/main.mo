import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import Outcall "http-outcalls/outcall";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  include MixinStorage();

  type ContentType = {
    #bedBugs;
    #scorpion;
    #mouse;
    #venomousSnake;
    #cockroach;
    #hornetWasp;
    #mosquito;
  };

  type ContentSection = {
    id : Text;
    title : Text;
    content : Text;
    contentType : ContentType;
    images : [Storage.ExternalBlob];
  };

  type PrintableGuide = {
    id : Text;
    title : Text;
    content : Text;
    contentType : ContentType;
    file : Storage.ExternalBlob;
  };

  type Technician = {
    id : Text;
    businessName : Text;
    address : Text;
    city : Text;
    phoneNumber : Text;
    serviceArea : [Nat];
    specialties : Text;
    zipCode : Nat;
    state : Text;
    latitude : Float;
    longitude : Float;
  };

  type BoundaryCoordinate = {
    latitude : Float;
    longitude : Float;
  };

  type ZipBoundaryResponse = {
    zipCode : Text;
    stateAbbr : Text;
    boundaryCoordinates : [BoundaryCoordinate];
  };

  type ChatMessage = {
    id : Nat;
    senderId : Principal;
    isTechnician : Bool;
    content : Text;
    timestamp : Int;
    threadId : Text;
  };

  public type UserProfile = {
    name : Text;
    isTechnician : Bool;
    technicianId : ?Text;
  };

  public type AppointmentStatus = {
    #pendingConfirmation;
    #confirmed;
    #completed;
  };

  public type Appointment = {
    caller : Principal;
    appointmentTimestamp : Int;
    submissionTimestamp : Int;
    status : AppointmentStatus;
    homeAddress : Text;
  };

  let contentSections = Map.empty<Text, ContentSection>();
  let printableGuides = Map.empty<Text, PrintableGuide>();
  let technicians = Map.empty<Text, Technician>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  var messageCounter = 0;
  let messages = Map.empty<Nat, ChatMessage>();
  let appointments = Map.empty<Principal, Appointment>();

  // User profile management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Public content access (educational material)
  public query ({ caller }) func getSection(id : Text) : async ?ContentSection {
    contentSections.get(id);
  };

  public query ({ caller }) func getAllSections() : async [ContentSection] {
    contentSections.values().toArray();
  };

  public query ({ caller }) func getSectionsByContentType(contentType : ContentType) : async [ContentSection] {
    contentSections.values().toArray()
      .filter(func(section) { section.contentType == contentType });
  };

  public query ({ caller }) func getGuide(id : Text) : async ?PrintableGuide {
    printableGuides.get(id);
  };

  public query ({ caller }) func getGuidesByContentType(contentType : ContentType) : async [PrintableGuide] {
    printableGuides.values().toArray()
      .filter(func(guide) { guide.contentType == contentType });
  };

  public query ({ caller }) func getAllGuides() : async [PrintableGuide] {
    printableGuides.values().toArray();
  };

  // Admin-only: Add technician
  public shared ({ caller }) func addTechnician(
    id : Text,
    businessName : Text,
    address : Text,
    city : Text,
    phoneNumber : Text,
    serviceArea : [Nat],
    specialties : Text,
    zipCode : Nat,
    state : Text,
    latitude : Float,
    longitude : Float,
  ) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can add technicians");
    };

    let technician : Technician = {
      id;
      businessName;
      address;
      city;
      phoneNumber;
      serviceArea;
      specialties;
      zipCode;
      state;
      latitude;
      longitude;
    };
    technicians.add(id, technician);
  };

  // Public: Find technicians (discovery feature)
  public query ({ caller }) func getTechniciansByZip(zipCode : Nat) : async [Technician] {
    technicians.values().toArray().filter(
      func(tech) {
        tech.serviceArea.find(func(zip) { zip == zipCode }) != null;
      }
    );
  };

  public query ({ caller }) func transform(input : Outcall.TransformationInput) : async Outcall.TransformationOutput {
    Outcall.transform(input);
  };

  // Restricted to authenticated users to prevent cycle drain from anonymous callers
  public shared ({ caller }) func fetchZipCodeBoundary(zipCode : Nat, stateAbbr : Text) : async Text {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only authenticated users can fetch zip code boundary data");
    };

    let url = "https://us-central1-zip-zone-classifier.cloudfunctions.net/getBoundaryCoordinates?zip=" # zipCode.toText() # "&state=" # stateAbbr;
    let response = await Outcall.httpGetRequest(url, [], transform);

    if (response == "null" or response.size() == 0) {
      Runtime.trap("No boundary data returned for zip code " # zipCode.toText());
    };

    response;
  };

  // Chat functionality with public thread support
  // Any authenticated user can initiate a chat thread with any technician
  // without requiring a pre-existing relationship or a saved profile.
  public shared ({ caller }) func sendMessage(isTechnician : Bool, content : Text, threadId : Text) : async () {
    // Allow anonymous (guest) callers to send messages.
    // Anonymous guests cannot have a technician profile.
    let isCallerAnonymous = caller.toText() == "2vxsx-fae";

    // If the caller is anonymous, only allow non-technician messages.
    if (isCallerAnonymous and isTechnician) {
      Runtime.trap("Unauthorized: Anonymous guests cannot send messages as technician");
    };

    // For any non-anonymous authenticated caller, verify their profile matches the claimed role.
    if (not isCallerAnonymous) {
      switch (userProfiles.get(caller)) {
        case (?p) {
          if (p.isTechnician != isTechnician) {
            Runtime.trap("Unauthorized: Technician status mismatch");
          };
        };
        case (null) {
          // No profile yet allows any authenticated user to start a thread with a technician.
        };
      };
    };

    let message : ChatMessage = {
      id = messageCounter;
      senderId = caller;
      isTechnician;
      content;
      timestamp = Time.now();
      threadId;
    };
    messages.add(messageCounter, message);
    messageCounter += 1;
  };

  public query ({ caller }) func getMessagesForThread(threadId : Text) : async [ChatMessage] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can view messages");
    };

    // Public threads (open access to all authenticated users)
    if (threadId.startsWith(#text "public_")) {
      return messages.values().toArray().filter(func(msg) { msg.threadId == threadId });
    };

    // Verify caller is part of this thread
    let threadMessages = messages.values().toArray().filter(func(msg) { msg.threadId == threadId });

    let isParticipant = threadMessages.find(func(msg) { msg.senderId == caller }) != null;
    let isAdmin = AccessControl.isAdmin(accessControlState, caller);

    if (not isParticipant and not isAdmin) {
      Runtime.trap("Unauthorized: You are not a participant in this conversation");
    };

    threadMessages;
  };

  public query ({ caller }) func getThreadList() : async [Text] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can view thread lists");
    };

    let threads : [Text] = messages.values().toArray()
      .filter(func(msg) { msg.senderId == caller })
      .map(func(msg) { msg.threadId });

    cleanThreads(threads);
  };

  func cleanThreads(threads : [Text]) : [Text] {
    let threadSet = Map.empty<Text, ()>();

    for (thread in threads.values()) {
      if (threadSet.get(thread) == null) {
        threadSet.add(thread, ());
      };
    };

    threadSet.keys().toArray();
  };

  // Public: List available technicians for chat discovery
  public query ({ caller }) func getActiveTechniciansForChat() : async [Text] {
    technicians.values().toArray().map(func(tech) { tech.businessName });
  };

  // Appointment booking (restricted to authenticated users)
  public shared ({ caller }) func submitAppointment(appointmentTimestamp : Int, homeAddress : Text) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only authenticated users can book appointments");
    };

    let now = Time.now();
    let oneDayNanos = 24 * 60 * 60 * 1_000_000_000;

    let timestampDifference = appointmentTimestamp - now;
    let daysDifference = timestampDifference / oneDayNanos;

    if (daysDifference < 7) {
      Runtime.trap("Appointment date must be at least 7 days from now");
    };

    if (daysDifference > 14) {
      Runtime.trap("Appointment date must be at most 14 days from now");
    };

    let newAppointment : Appointment = {
      caller;
      appointmentTimestamp;
      submissionTimestamp = now;
      status = #pendingConfirmation;
      homeAddress;
    };

    appointments.add(caller, newAppointment);
  };

  public shared ({ caller }) func confirmAppointment(appointmentCaller : Principal) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only authenticated users can confirm appointments");
    };

    let profile = userProfiles.get(caller);
    switch (profile) {
      case (null) {
        Runtime.trap("Unauthorized: Must have a technician profile to confirm appointments");
      };
      case (?p) {
        if (not p.isTechnician) {
          Runtime.trap("Unauthorized: Only technicians can confirm appointments");
        };
      };
    };

    let appointment = appointments.get(appointmentCaller);
    switch (appointment) {
      case (null) {
        Runtime.trap("Appointment not found for the given user");
      };
      case (?a) {
        if (a.status != #pendingConfirmation) {
          Runtime.trap("Only pending appointments can be confirmed");
        };

        let updatedAppointment = {
          a with status = #confirmed;
        };

        appointments.add(appointmentCaller, updatedAppointment);
      };
    };
  };

  public query ({ caller }) func getAppointments() : async [Appointment] {
    let isAdmin = AccessControl.isAdmin(accessControlState, caller);

    if (isAdmin) {
      return appointments.values().toArray();
    };

    if (AccessControl.hasPermission(accessControlState, caller, #user)) {
      let profile = userProfiles.get(caller);
      switch (profile) {
        case (?p) {
          if (p.isTechnician) {
            return appointments.values().toArray();
          };
        };
        case null {};
      };
    };

    Runtime.trap("Unauthorized: Only admins and technicians can view appointments");
  };
};
