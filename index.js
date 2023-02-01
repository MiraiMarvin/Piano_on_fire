const express = require('express');
const app = express();
const cors = require('cors');
const ip = require("ip");
const bodyParser = require('body-parser');


const port = 3000;
console.log(ip.address())
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    console.log('get')
    res.send({ "message": 'Hello World!' });
})
app.post('/', (req, res) => {
    //console.log(req.body);
    res.json(req.body);
})


app.post('/play', (req, res) => {
  // Transmettre la note de piano à la Raspberry Pi Pico ici
  console.log(req.body);
  console.log("ok");
  res.send({"data":"ok"});
 
});

app.listen(3000, () => {
console.log('Serveur en écoute sur le port 3000');
});
