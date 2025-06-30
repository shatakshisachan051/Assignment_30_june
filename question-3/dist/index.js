"use strict";
class HotelBooking {
    book() {
        return "Hotel booked at Marriott";
    }
}
class FlightBooking {
    book() {
        return "Flight booked with Indigo";
    }
}
class TrainBooking {
    book() {
        return "Train booked with abc";
    }
}
class BookingFactory {
    static createBooking(type) {
        switch (type.toLowerCase()) {
            case "hotel":
                return new HotelBooking();
            case "flight":
                return new FlightBooking();
            case "train":
                return new TrainBooking();
            default:
                throw new Error("Invalid booking.");
        }
    }
}
let userInput = "flight";
let booking = BookingFactory.createBooking(userInput);
console.log(booking.book());
