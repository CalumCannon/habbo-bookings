use habboHotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Mad calum",
    email: "weecal@gmail.com",
    checkedIn: true
  },
  {
    name: "Mad hugh",
    email: "weehugh@gmail.com",
    checkedIn: false
  },
  {
    name: "Mad atyha",
    email: "weeatyha@gmail.com",
    checkedIn: true
  }
]);
