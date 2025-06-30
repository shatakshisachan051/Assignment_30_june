// user roles
enum Roles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

// interface IUser with a describe() method
interface IUser {
  describe(): string;
}

// User
class User implements IUser {
  name: string;
  email: string;
  role: Roles;
  constructor(name: string, email: string, role: Roles) {
    this.name = name;
    this.email = email;
    this.role = role;
  }
  describe(): string {
    return `Name: ${this.name} | Email: ${this.email} | Role: ${this.role}`;
  }
}

// Premium User
class PremiumUser extends User{
    activatePremium():string{
        return "Premium features activated";
    }
}



const user = new User("John", "john@example.com", Roles.Admin);
console.log(user.describe());


const premiumUser= new PremiumUser("Shatakshi","shatakshi@example.com", Roles.Editor)
console.log(premiumUser.describe())
console.log(premiumUser.activatePremium())