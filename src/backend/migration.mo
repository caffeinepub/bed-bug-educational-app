import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Storage "blob-storage/Storage";

module {
  type OldTechnician = {
    id : Text;
    businessName : Text;
    address : Text;
    city : Text;
    phoneNumber : Text;
    serviceArea : [Nat];
    specialties : Text;
  };

  type OldActor = {
    contentSections : Map.Map<Text, ContentSection>;
    printableGuides : Map.Map<Text, PrintableGuide>;
    technicians : Map.Map<Text, OldTechnician>;
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

  type ContentType = {
    #bedBugs;
    #scorpion;
    #mouse;
    #venomousSnake;
    #cockroach;
    #hornetWasp;
    #mosquito;
  };

  type NewTechnician = {
    id : Text;
    businessName : Text;
    address : Text;
    city : Text;
    phoneNumber : Text;
    serviceArea : [Nat];
    specialties : Text;
    zipCode : Nat;
    state : Text;
  };

  type NewActor = {
    contentSections : Map.Map<Text, ContentSection>;
    printableGuides : Map.Map<Text, PrintableGuide>;
    technicians : Map.Map<Text, NewTechnician>;
  };

  public func run(old : OldActor) : NewActor {
    let newTechnicians = old.technicians.map<Text, OldTechnician, NewTechnician>(
      func(_id, oldTechnician) {
        {
          oldTechnician with
          zipCode = 0;
          state = "Unknown";
        };
      }
    );
    {
      old with technicians = newTechnicians;
    };
  };
};
