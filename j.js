document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = this[0].value;
    const destination = this[1].value;
    const mode = this[2].value;
    const date = this[3].value;
  
    document.getElementById("confirmation").textContent =
      `✅ ${name}, your trip to ${destination} by ${mode} on ${date} has been successfully booked!`;
  });
  