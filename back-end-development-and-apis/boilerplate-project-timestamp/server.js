// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api', (req, res) => {

    let date = new Date()

    let json = {unix: date.getTime(), utc:date.toUTCString()}

    res.send(json)
})

app.get('/api/:date_string', (req, res)=> {
    let date_string = req.params.date_string;
    let json;

    let date;

    if(/-/g.test(date_string)){
        date = new Date(date_string)
    } else if (/ /g.test(date_string)) {
        date = new Date(date_string)
    } else {
        date = new Date(Number(date_string))
    }
    
    if(date.getTime() === null || date.toUTCString() === "Invalid Date") {
         json = { error : "Invalid Date" }
    } else {
        json = {unix: Number(date.getTime()), utc:date.toUTCString()}
    }

    res.json(json)
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
