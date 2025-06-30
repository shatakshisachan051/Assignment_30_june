"use strict";
// 1
class CourseSubscription {
}
// 2 
class BasicSubscription extends CourseSubscription {
    getDescription() {
        return "Basic Subscription";
    }
    getCost() {
        return 499;
    }
}
// 3
class SubscriptionAddon extends CourseSubscription {
    constructor(subscription) {
        super();
        this.subscription = subscription;
    }
}
// 4 
class CertificateAddon extends SubscriptionAddon {
    getDescription() {
        return this.subscription.getDescription() + " + Certificates";
    }
    getCost() {
        return this.subscription.getCost() + 200;
    }
}
// 5
class DoubtSupportAddon extends SubscriptionAddon {
    getDescription() {
        return this.subscription.getDescription() + " + Doubt Support";
    }
    getCost() {
        return this.subscription.getCost() + 300;
    }
}
// 6
class MentorAccessAddon extends SubscriptionAddon {
    getDescription() {
        return this.subscription.getDescription() + " + Mentor Access Support";
    }
    getCost() {
        return this.subscription.getCost() + 500;
    }
}
///////
// basic SUbscription
let mySub = new BasicSubscription();
console.log(mySub.getDescription());
console.log(mySub.getCost());
// 
let mySub2 = new CertificateAddon(mySub);
console.log(mySub2.getDescription());
console.log(mySub2.getCost());
// my 
let mySub3 = new DoubtSupportAddon(mySub);
console.log(mySub3.getDescription());
console.log(mySub3.getCost());
//
let mySub4 = new MentorAccessAddon(mySub3);
console.log(mySub4.getDescription());
console.log(mySub4.getCost());
