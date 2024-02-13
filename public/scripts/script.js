//  avatar klik en krijg bio informatie in letter tevoorschijn + menu close
var openButton = document.querySelector("section:nth-of-type(1) button");
var closeButton = document.querySelector("section:nth-of-type(3) button");

openButton.addEventListener("click", openLetter);
closeButton.addEventListener("click", closeLetter);

function openLetter() {
    var openClick = document.querySelector("section:nth-of-type(3)");
    openClick.classList.add("buttonOpen");
}

function closeLetter() {
    var openClick = document.querySelector("section:nth-of-type(3)");
    openClick.classList.remove("buttonOpen");
}


function userInfo() {
    var userSection = document.getElementById("user");
    var bioSection = document.getElementById("bio");
    var user;

    fetch("./data/data.json")
	.then((response) => response.json())
	.then((data) => {
		user = data;
		console.log(user);

        // haal hier de id op van elke element in user section en laat JSON data zien
        document.getElementById("userName").innerHTML = user.name;
        document.getElementById("userAge").innerHTML = user.age;
        document.getElementById("userUsername").innerHTML = user.username;

        // zelfde voor bio section
        document.getElementById("userBio").innerHTML = user.bio;
    })

    .catch((error) => {
        console.error('Error fetching data:', error);
    });

    // misschien switch code erbij in de bio? kijk ff later
}

userInfo();


//   Tijd op NookPhone laten zien

function currentPhoneTime() {
    // haal actuele tijd op
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();

    // als minuten en uren minder zijn dan 10 dan 0 ervoor
    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    
    const currentTime = hour + ":" + minute;

    console.log(currentTime);

    document.getElementById("container");
    document.getElementById("screenTime").innerHTML = currentTime;
}

currentPhoneTime();

// data fetch API

document.getElementById('villagerButton').addEventListener('click', fetchData);



function fetchData() {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => displayData(data))
      .catch(error => console.error('Error fetching data:', error));
  }
