const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require("morgan");
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const postRoute = require('./route/post.route');
const userRoutes = require("./route/user");
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true);
mongoose.connect( process.env.MONGODB_URI || config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev")); 
app.use('/posts', postRoute);
app.use("/user", userRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static( '/public/' ));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});