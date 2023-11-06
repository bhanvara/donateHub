import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Array "mo:base/Array";

actor donateHub {
  public type Info = {
    id : Nat;
    raisedAmount : Float;
    goalAmount : Float;
  };

  stable var donations : [Info] = [
    { id = 0; raisedAmount = 22.0; goalAmount = 55.0 },
    { id = 1; raisedAmount = 15.0; goalAmount = 36.0 },
    { id = 2; raisedAmount = 18.0; goalAmount = 25.0 },
    { id = 3; raisedAmount = 30.0; goalAmount = 40.0 },
    { id = 4; raisedAmount = 43.0; goalAmount = 70.0 },
    { id = 5; raisedAmount = 26.0; goalAmount = 30.0 },
  ];

  public query func getDonationById(id : Nat) : async ?Info {
    for (i in Iter.range(0, Array.size(donations) -1)) {
      let donation = donations[i];
      if (donation.id == id) {
        Debug.print("Donation ID: " # Nat.toText(donation.id));
        Debug.print("Raised Amount: " # Float.toText(donation.raisedAmount));
        Debug.print("Goal Amount: " # Float.toText(donation.goalAmount));
        return ?donation;
      };
    };
    return null;
  };

  // public query func getDonations(id : Nat) : async [Info] {
  //   for (i in Iter.range(0, Array.size(donations) -1)) {
  //     let donation = donations[i];
  //     if (donation.id == id) {
  //       Debug.print("Donation ID: " # Nat.toText(donation.id));
  //       Debug.print("Raised Amount: " # Float.toText(donation.raisedAmount));
  //       Debug.print("Goal Amount: " # Float.toText(donation.goalAmount));
  //       return ?donation;
  //     };
  //   };
  //   return null;
  // };

  public func topUpDonation(id : Nat, amountToAdd : Float) : () {
    var updatedDonations : [Info] = [];

    for (i in Iter.range(0, Array.size(donations) -1)) {
      let donation = donations[i];
      if (donation.id == id) {
        let updatedDonation = {
          id = donation.id;
          raisedAmount = donation.raisedAmount + amountToAdd;
          goalAmount = donation.goalAmount;
        };
        updatedDonations := Array.append(updatedDonations, [updatedDonation]);
      } else {
        updatedDonations := Array.append(updatedDonations, [donation]);
      };
    };

    donations := updatedDonations;
  };

};
