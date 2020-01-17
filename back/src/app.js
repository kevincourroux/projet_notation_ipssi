const express = require('express');
const cors = require('cors');
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
app.use(cors());

const sessionsRoute = require('./api/routes/sessionsRoute');
const modulesRoute = require('./api/routes/modulesRoute');
const userRoute = require('./api/routes/userRoute');
const notesRoute = require('./api/routes/notesRoute');
sessionsRoute(app);
modulesRoute(app);
userRoute(app);
notesRoute(app);

app.listen(port, hostname);
