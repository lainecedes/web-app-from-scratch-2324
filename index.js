const express = require('express'); // express
const dotenv = require('dotenv'); // dotenv
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); // node-fetch, can't use require
const port = process.env.PORT || 3000; // port
const app = express();
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

// dotenv configuration
// require("dotenv").config({ path: "/.env" });
dotenv.config({ path: "./.env" });

const apiKey = process.env.API_KEY; // retrieve API key from .env file



// middleware voor nookipedia api key
// const checkApiKey = (req, res, next) => {
// const providedKey = req.query.apiKey;

//   if (!providedKey || providedKey !== apiKey) {
//     return res.status(403).json({ error: 'Invalid API key'});
    
//   }
//   next();
// };

// de static files met express.static
app.use(express.static('docs'));
app.use(bodyParser);


// index.html + Your API key-protected endpoint
app.get('/', (req, res) => {
        let url = `https://api.nookipedia.com/villagers?name=ace&api_key=${apiKey}`;
        let options = {
        method: "GET",
        // headers: { "x-api-key": apiKey },
    };
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(`error ${err}`);
    });
    res.render("/docs/index.html")
});



// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// module.exports = app; // Export the Express app
module.exports.handler = serverless(app);