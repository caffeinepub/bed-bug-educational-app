import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  type OldTechnician = {
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

  type OldActor = {
    technicians : Map.Map<Text, OldTechnician>;
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
    latitude : Float;
    longitude : Float;
  };

  type NewActor = {
    technicians : Map.Map<Text, NewTechnician>;
  };

  public func run(old : OldActor) : NewActor {
    let newTechnicians = old.technicians.map<Text, OldTechnician, NewTechnician>(
      func(_id, oldTech) {
        { oldTech with latitude = 0.0; longitude = 0.0 };
      }
    );
    { technicians = newTechnicians };
  };
};
