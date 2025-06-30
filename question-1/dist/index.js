"use strict";
// user roles
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["Editor"] = "Editor";
    Roles["Viewer"] = "Viewer";
})(Roles || (Roles = {}));
// User
class User {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    describe() {
        return `Name: ${this.name} | Email: ${this.email} | Role: ${this.role}`;
    }
}
// Premium User
class PremiumUser extends User {
    activatePremium() {
        return "Premium features activated";
    }
}
const user = new User("John", "john@example.com", Roles.Admin);
console.log(user.describe());
const premiumUser = new PremiumUser("Shatakshi", "shatakshi@example.com", Roles.Editor);
console.log(premiumUser.describe());
console.log(premiumUser.activatePremium());
