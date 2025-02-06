// Yes button event listener
document.getElementById("yesbutton").addEventListener("click", function() {
    // Display the message inside the modal instead of using alert()
    document.getElementById("yesModal").style.display = "flex";

    // Change the image to a happy one
    document.querySelector("img").src = "thank.gif"; // Ensure the correct image path

    // Update modal text dynamically (optional)
    document.getElementById("yesModalText").textContent = "I love youuu honeyy❤️! See you soon!";
});

// No button moves on hover
document.getElementById("nobutton").addEventListener("mouseover", function() {
    var button = this;
    var moveX = Math.random() * 40 - 20; // Moves left/right randomly
    var moveY = Math.random() * 40 - 20; // Moves up/down randomly
    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// No button funny messages and image change on click
const funnyResponses = [
    { text: "Are you sure? 🥺", img: "Sad.gif" },
    { text: "Sure ka na?🥹", img: "sad2.gif" },
    { text: "iyak ako sigi ka 😭", img: "sad6.gif" },
    { text: "ako na to hon oh 😚", img: "sad3.gif" },
    { text: "Yes mo na tas check in😌", img: "sad4.gif" },
    { text: "Yes ka na please🥲", img: "sad5.gif" }
];

document.getElementById("nobutton").addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * funnyResponses.length);
    var randomResponse = funnyResponses[randomIndex];

    // Show the "No" modal
    document.getElementById("noModal").style.display = "flex";

    // Change modal content dynamically
    document.getElementById("noModalText").textContent = randomResponse.text;
    document.getElementById("noModalImg").src = randomResponse.img;
});

// Close the modals when clicking the close button
document.querySelectorAll(".close").forEach(function(closeBtn) {
    closeBtn.addEventListener("click", function() {
        this.closest(".modal").style.display = "none";
    });
});

// Close the modals when clicking outside the content
window.addEventListener("click", function(event) {
    document.querySelectorAll(".modal").forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
