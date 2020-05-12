const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const morgan = require("morgan");
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const postRoute = require('./route/post.route');

mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true);
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev")); 

app.use('/posts', postRoute);

const userRoutes = require("./route/user");
app.use("/user", userRoutes);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});