var express = require('express');
var cors = require('cors');
require('dotenv').config()
let fileUpload = require('express-fileupload')

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(fileUpload())

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', (req, res)=> {

    let newFile = req.files.upfile


    res.json({"name": newFile.name, "type": newFile.mimetype, "size":newFile.size})
    
})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
