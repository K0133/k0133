const express = require('express');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const cors = require('cors');
const app = express();

const correctPin = process.env.PIN;
const payloadURL = process.env.PAYLOAD_URL;
const loggingURL = process.env.LOGGING_URL;

app.use(cors());
app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  res.redirect('http://k0133.xyz/');
});

app.get('/initium/code', (req, res) => {

  if (!req.query.pin) {
    res.status(403)
    return res.send("Pin not provided")
  }

  let enteredPin = req.query.pin;
  let ip = req.query.ip;
  let success = false;

  if (req.query.ip === 'undefined') {
    ip = "Blocked by client"
  }

  if (enteredPin === correctPin) {
    success = true;
    response = {
      success,
      payload_url: payloadURL
    };
  } else {
    response = {
      success,
      message: "Incorrect Pin"
    };
  }

  initiumCodeLog(ip, enteredPin, success);
  res.send(response);
  return;
});

app.get('/*', (req, res) => {
  let path = req.originalUrl;
  res.send(`<h3>Cannot GET ${path}</h3> K0133's API is crucial to allow K0133 web services to function properly.`);
});

app.listen(app.get('port'), () => {
  console.log('K0133 API Started');
});


// Log Initum Code Attempts to Google Sheet
function initiumCodeLog(ip, pin, success) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", loggingURL)
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ "value1": success, "value2": pin, "value3": ip }));
}