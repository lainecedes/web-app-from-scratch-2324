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

for (var i = 0; i < profiles.length; i++) {
    var profile = profiles[i];
    console.log(profile.name + " is " + profile.age + " years old.");
  }
  