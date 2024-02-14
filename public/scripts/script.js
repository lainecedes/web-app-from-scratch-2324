//  avatar acts like a button to open the dialog
const dialog = document.querySelector("section:nth-of-type(3) dialog");
const openButton = document.querySelector("section:nth-of-type(1) button");
const closeButton = document.querySelector("section:nth-of-type(3) dialog button");

openButton.onclick="dialog.showModal()"

// show bio on screen
openButton.addEventListener("click", () => {
    dialog.showModal();
});
  
// close bio
closeButton.addEventListener("click", () => {
    dialog.close();
});


const openNookPhone = document.querySelector("section:nth-of-type(1) ul li button");
const closeNookPhone = document.querySelector("section:nth-of-type(4) #NookPhone #container button");

openNookPhone.addEventListener("click", openPhone);
closeNookPhone.addEventListener("click", closePhone);

function openPhone() {
    var openClick = document.querySelector("section:nth-of-type(4) #NookPhone");
    openClick.classList.add("buttonOpen");
}

function closePhone() {
    var closeClick = document.querySelector("section:nth-of-type(4) #NookPhone");
    closeClick.classList.remove("buttonOpen");
}


// fetch JSON data from data.json and render this in HTML
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

    // maybe add switch code later
}

userInfo();


//   show real time on NookPhone
function currentPhoneTime() {
    // get the real time
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();

    // if minutes and hours number are less than 10, then add 0 in front
    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    
    const currentTime = hour + ":" + minute;

    console.log(currentTime);

    document.getElementById("container");
    document.getElementById("screenTime").innerHTML = currentTime;
}

currentPhoneTime();


