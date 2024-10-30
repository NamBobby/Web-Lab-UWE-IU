//Le Thanh Phuong Nam_ITITWE19025

function displayClock() {
  const now = new Date();

  // Format time with AM/PM
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format and handle midnight (0 hour)

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  const dateString = now.toDateString();

  // Update elements with IDs 'time' and 'date'
  document.getElementById("time").textContent = timeString;
  document.getElementById("date").textContent = dateString;
}

// Call displayClock every second
setInterval(displayClock, 1000);
displayClock();
