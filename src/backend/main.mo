import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import Migration "migration";

(with migration = Migration.run)
actor {
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

  let contentSections = Map.empty<Text, ContentSection>();
  let printableGuides = Map.empty<Text, PrintableGuide>();
  let technicians = Map.empty<Text, Technician>();

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

  public query ({ caller }) func getTechniciansByZip(zipCode : Nat) : async [Technician] {
    technicians.values().toArray().filter(
      func(tech) {
        tech.serviceArea.find(func(zip) { zip == zipCode }) != null;
      }
    );
  };
};
