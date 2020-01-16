const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = 3000;

const mongoose = require('mongoose');

const mongooseParams = {
  useUnifiedTopology : true,
  useNewUrlParser: true,
  useCreateIndex: true
}
mongoose.connect('mongodb://mongo/projet_notation_ipssi', mongooseParams); // docker (mongo = nom du container)

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json())

const userRoute = require('./api/routes/userRoute');
userRoute(app);

app.listen(port, hostname);
