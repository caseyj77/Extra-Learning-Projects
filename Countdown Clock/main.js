// What is needed?
//  function to get the date-time from the user input and perform the following
//          - calculate the difference from the date picked until the current time
//          - write this time into the DOM in the proper div


(function() {
    const inputElement = document.getElementById('date-time');
    let intervalId; // Variable to hold the reference to the interval

    function handleDateChange(event) {
        if (intervalId) {
            clearInterval(intervalId); // Clear the existing interval if any
        }

        function updateCountdown() {
            let futureDate = new Date(event.target.value);
            let currentDate = new Date();

            let diff = futureDate - currentDate;
            if (diff <= 0) {
                clearInterval(intervalId);
                document.querySelector('.digit').textContent = "Time's up!";
                return;
            }

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);

            let displayString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            document.querySelector('.digit').textContent = displayString;
        }

        intervalId = setInterval(updateCountdown, 1000); // Set the interval to update every second
    }

    inputElement.addEventListener('change', handleDateChange);
})();

