function scrollToBottom() {
    const target = document.querySelector('#bottom');
    target.scrollIntoView({ behavior: 'smooth' });
}

function scrollToNemesis() {
    const target = document.querySelector('#nemesis');
    target.scrollIntoView({ behavior: 'smooth' });
}

function scrollToHero() {
    const target = document.querySelector('#hero');
    target.scrollIntoView({ behavior: 'smooth' });
}

const myButton = document.getElementById("myButton");
const myPopup = document.getElementById("myPopup");
const closeBtn = myPopup.querySelector(".close-btn");

myButton.addEventListener("click", function(event) {
    event.preventDefault(); // prevent default behavior of button click
    myPopup.style.display = "block"; // display the popup
});

closeBtn.addEventListener("click", function(event) {
    myPopup.style.display = "none";
});