interface IBooking{
    book(): string;
}

class HotelBooking implements IBooking{
    book(): string {
        return "Hotel booked at Marriott";
    }

}

class FlightBooking implements IBooking{
    book(): string {
        return "Flight booked with Indigo";
    }

}

class TrainBooking implements IBooking{
    book(): string {
        return "Train booked with abc";
    }

}

class BookingFactory{
    static createBooking(type:string){
        switch(type.toLowerCase()){
            case "hotel":
                return new HotelBooking();
            case "flight":
                return new FlightBooking();
            case "train":
                return new TrainBooking();
            default:
                throw new Error("Invalid booking.")
        }
    }
}

let userInput="flight"
let booking=  BookingFactory.createBooking(userInput)

console.log(booking.book())