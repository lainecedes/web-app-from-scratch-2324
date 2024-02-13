const express = require('express'); // express
const dotenv = require('dotenv'); // dotenv
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); // node-fetch, can't use require
const port = process.env.PORT || 3000; // port
const app = express();


// dotenv configuration
// require("dotenv").config({ path: "/.env" });
dotenv.config({ path: "./.env" });

const apiKey = process.env.API_KEY; // retrieve API key from .env file


app.set('view engine', 'ejs'); // ejs view engine


// de static files met express.static
app.use(express.static('public'));


app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));


// index.html + Your API key-protected endpoint
app.get('/', async (req, res) => {
        let url = `https://api.nookipedia.com/villagers?species=rabbit&api_key=${apiKey}`;
        // let villagers;
        let options = {
        method: "GET",
    };
    // let fetch wait to avoid not defined error
        await fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            villagers = data;
        })
        .catch((err) => {
            console.log(`error ${err}`);
    });
    res.render("index", { villagers }); 
});



// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export the Express app