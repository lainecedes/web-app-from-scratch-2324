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

// JSON algemene data 

var profiles = [
    {
        "name": "Elaine",
        "age": "22",
        "username": "lainecedes",
        "bio": "Hey en welkom op mijn pagina! Ik ben Elaine en mijn favoriete videogames zijn Stardew Valley, Animal Crossing en Mario Kart.",
        "switchCode": "SW-0538-7208-9985",
        "favoriteGames": [
                            {"game": "Stardew Valley"}, 
                            {"game": "Animal Crossing"}, 
                            {"game": "Mario Kart"}
        ]
    },
]

function userInfo() {
    var userSection = document.getElementById("user");
    var bioSection = document.getElementById("bio");
    var user = profiles[0];

    // haal hier de id op van elke element in user section en laat JSON data zien
    document.getElementById("userName").innerHTML = user.name;
    document.getElementById("userAge").innerHTML = user.age;
    document.getElementById("userUsername").innerHTML = user.username;

    // zelfde voor bio section
    document.getElementById("userBio").innerHTML = user.bio;

    // misschien switch code erbij in de bio? kijk ff later
}
userInfo();


// test om te zien of mn data werkt
for (var i = 0; i < profiles.length; i++) {
    var profile = profiles[i];
    console.log(profile.name + " is " + profile.age + " years old.");
  }
  