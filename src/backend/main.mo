import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import Array "mo:core/Array";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  public type Inquiry = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Int;
    submitter : Principal;
  };

  var inquiries : [Inquiry] = [];
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (not Principal.equal(caller, user) and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact form functions
  public shared ({ caller }) func submitInquiry(name : Text, email : Text, subject : Text, message : Text) : async () {
    // No authorization check - anyone including guests can submit inquiries
    let inquiry : Inquiry = {
      name;
      email;
      subject;
      message;
      timestamp = Time.now();
      submitter = caller;
    };
    inquiries := inquiries.concat([inquiry]);
  };

  public query ({ caller }) func getInquiries() : async [Inquiry] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };
    inquiries;
  };
};
