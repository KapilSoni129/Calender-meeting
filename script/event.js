var event = {
  name: "Schedule a meeting",
  organizer: "Boldcap",
  duration: 30,
  description: "Our team will meet with you for an interview.",
  date: new Date(),
  time: "9:00",
  attendees: [],
};

sessionStorage.setItem("eventObj", JSON.stringify(event));
