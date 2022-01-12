class Hotel {
    constructor(name, rooms, booked) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
        this.checkAvailability = function () {
            return this.rooms = this.booked;
        };
    }
}

let hotel1 = new Hotel("Quay", 40, 25);
let hotel2 = new Hotel("Park", 120, 77);

let elName = document.getElementById('hotelName');
var elRooms = document.getElementById('rooms');

elName.textContent = hotel2["name"];
elRooms.textContent = hotel2["rooms"];
