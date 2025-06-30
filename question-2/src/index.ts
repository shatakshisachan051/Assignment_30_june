// 1

abstract class CourseSubscription {
    abstract getDescription(): string;
    abstract getCost(): number
}


// 2 
class BasicSubscription extends CourseSubscription{
    getDescription(): string {
        return "Basic Subscription"
    }
    getCost(): number {
        return 499;
    }

}

// 3
abstract class SubscriptionAddon extends CourseSubscription{
    subscription: CourseSubscription;

    constructor(subscription: CourseSubscription){
        super()
        this.subscription=subscription
    }

}

// 4 

class CertificateAddon extends SubscriptionAddon{
    getDescription(): string {
        return this.subscription.getDescription()+ " + Certificates";
    }
    getCost(): number {
        return this.subscription.getCost() + 200; 
    }

}

// 5
class DoubtSupportAddon extends SubscriptionAddon{
    getDescription(): string {
        return this.subscription.getDescription()+ " + Doubt Support";
    }
    getCost(): number {
        return this.subscription.getCost() + 300; 
    }

}

// 6
 class MentorAccessAddon extends SubscriptionAddon{
    getDescription(): string {
        return this.subscription.getDescription()+ " + Mentor Access Support";
    }
    getCost(): number {
        return this.subscription.getCost() + 500; 
    }

 }


 ///////
 // basic SUbscription
  let mySub = new BasicSubscription();
  console.log(mySub.getDescription())
  console.log(mySub.getCost())

  // 
  let mySub2 = new CertificateAddon(mySub)
  console.log(mySub2.getDescription())
  console.log(mySub2.getCost())

  // my 
  let mySub3 = new DoubtSupportAddon(mySub)
  console.log(mySub3.getDescription())
  console.log(mySub3.getCost())


  //
  let mySub4 = new MentorAccessAddon(mySub3)
  console.log(mySub4.getDescription())
  console.log(mySub4.getCost())

