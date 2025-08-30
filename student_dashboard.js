        // Show logged-in student name from localStorage
        const loggedInUser = localStorage.getItem("loggedInUser");
        document.getElementById("welcome").innerText = "Welcome, " + loggedInUser;

        // to Handle admission form submission
        const form = document.getElementById("applicationForm");
        const statusBox = document.getElementById("statusBox");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const course = document.getElementById("course").value;
            const year = document.getElementById("year").value;

            if (course && year) {
                statusBox.innerHTML = `Application submitted for <b>${course}</b>. Status: <span class="pending">Pending</span>`;
                
            }
        });