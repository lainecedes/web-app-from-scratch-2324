const express = require('express'); // express
const dotenv = require('dotenv'); // dotenv
const port = process.env.PORT || 3000; // port
const app = express();
const apiKey = process.env.API_KEY; // retrieve API key from .env file

// dotenv configuration
require("dotenv").config({ path: ".env" });

// de static files met express.static
app.use('/static', checkApiKey, express.static('/docs'));

// middleware voor nookipedia api key
const checkApiKey = (req, res, next) => {
  const providedKey = req.query.apiKey || req.headers['x-api-key'];

  if (!providedKey || providedKey !== apiKey) {
    return res.status(403).json({ error: 'Invalid API key' });
  }
  next();
};


// index.html + Your API key-protected endpoint
app.get('/', checkApiKey, (req, res) => {
  let options = {
    method: "GET",
    headers: { "x-api-key": process.env.API_KEY },
  };

    // nookipedia villagers
  let url = "https://api.nookipedia.com/villagers";

    fetch(url, options) // fetch is async but api is await, fixed issue where data wasn't seen in view (source: Ivo Nijhuis, lainecedes/PT2023)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
        
        });
    })
    .catch((err) => {
        console.log(`error ${err}`);
    });

});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
