const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded(({ extended: true })));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

require('./routes')(app);



app.listen(9000, () => {
  console.log('Server Active port: 9000');
})