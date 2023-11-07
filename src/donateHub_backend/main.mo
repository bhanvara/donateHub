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

  var donations : [Info] = [
    { id = 0; raisedAmount = 1600000.0; goalAmount = 5500000.0 },
    { id = 1; raisedAmount = 1500000.0; goalAmount = 3600000.0 },
    { id = 2; raisedAmount = 1800000.0; goalAmount = 2500000.0 },
    { id = 3; raisedAmount = 3000000.0; goalAmount = 4000000.0 },
    { id = 4; raisedAmount = 4300000.0; goalAmount = 7000000.0 },
    { id = 5; raisedAmount = 2600000.0; goalAmount = 3000000.0 },
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

  public func topUpDonation(id : Nat, amountToAdd : Float) : async Nat {
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
    return 1;
  };

};
