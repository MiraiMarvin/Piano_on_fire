const express = require('express');
const app = express();
const cors = require('cors');
const ip = require("ip");
const bodyParser = require('body-parser');
let notesend = '';



const port = 3000;
console.log(ip.address())
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.get('/notesend', (req, res) => {
    res.send({"data": notesend});
});

app.post('/', (req, res) => {

    res.send(req.body);
});

app.post('/play', (req, res) => {
  // Transmettre la note de piano à la Raspberry Pi Pico ici
  notesend = req.body.a;
  console.log(req.body.a);
  console.log("ok");
  res.send({});
});


app.get('/play', (req, res) => {
  
  res.send({"noteactive": data 
  });
  
});

app.listen(3000, () => {
console.log('Serveur en écoute sur le port 3000');
});

