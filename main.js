const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
 );

 //Booking Form

 document.addEventListener('DOMContentLoaded', function() {
  const timeSlots = {
      'Thursday': ['4:15 PM', '5:30 PM', '6:45 PM'],
      'Friday': ['3:00 PM', '4:15 PM', '5:30 PM', '6:45 PM'],
      'Saturday': ['2:00 PM', '3:15 PM']
  };

  const dateInput = document.getElementById('date');
  const timeSelect = document.getElementById('time');

  dateInput.addEventListener('change', function() {
      const selectedDate = new Date(this.value);
      const dayName = selectedDate.toLocaleString('default', { weekday: 'long' });
      
      // Clear previous options
      timeSelect.innerHTML = '<option value="">--Select Time--</option>';

      if (timeSlots[dayName]) {
          timeSlots[dayName].forEach(slot => {
              const option = document.createElement('option');
              option.value = slot;
              option.textContent = slot;
              timeSelect.appendChild(option);
          });
      }
  });

  document.getElementById('bookingForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const date = dateInput.value;
      const time = timeSelect.value;
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (time) {
          // Here you would send this data to your server
          console.log(`Booking Details: Date: ${date}, Time: ${time}, Name: ${name}, Email: ${email}, Message: ${message}`);
          document.getElementById('messageDisplay').textContent = 'Your appointment has been booked! Leiko will contact you via the email address provided to confirm and arrange payment';

          // Optionally, you could also reset the form after submission
          this.reset();
          timeSelect.innerHTML = '<option value="">--Select Time--</option>';
      } else {
          document.getElementById('messageDisplay').textContent = 'Please select a time slot.';
      }
  });
});

