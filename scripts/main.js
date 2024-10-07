var myImg = document.querySelector("img");

myImg.onclick = function() {
    if (myImg.getAttribute("src") === "images/logo-firefox.png") {
        myImg.setAttribute ("src", "images/logo-firefox2.webp")
    } else {
        myImg.setAttribute ("src", "images/logo-firefox.png")
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h3");

function setUserName() {
    var myName = prompt("Please enter your name:");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozzilla is cool, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}