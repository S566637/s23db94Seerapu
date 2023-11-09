var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dogsRouter = require('./routes/dogs');
var chooseRouter = require('./routes/choose');
var boardRouter = require('./routes/board');
var dogs = require("./models/dogs");
var resourceRouter = require("./routes/resource");

var app = express();
var db = mongoose.connection;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dogs', dogsRouter)
app.use('/choose', choose);
app.use('/board',boardRouter);
app.use('/resource',resourceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  });
  app.get('/dogs', (req, res) => {
    // Fetch dogs data from a database or a predefined list
    const dogs = [
      { breed: 'Labrador', age: 3, name: 'Buddy' },
      { breed: 'German Shepherd', age: 2, name: 'Max' },
      // Add more dog objects as needed
    ];
  
    res.render('dogs', {
      title: 'Search Results - Dogs',
      dogs: dogs,
    });
  });

  async function recreateDB(){
    // Delete everything
    await dogs.deleteMany();
    let instance1 = new dogs({dogs_type:"ghost", size:'large', cost:15.4});
    instance1.save().then(
      doc=>{console.log("First object saved")}
      ).catch(err=>{
      console.error(err)
      });
let instance2 = new dogs({dogs_type:"ghost", size:'smlal', cost:15.0});
    instance2.save().then(
        doc=>{console.log("second object saved")}
        ).catch(err=>{
        console.error(err)
        }); 
let instance3 = new dogs({dogs_type:"ghost", size:'medium', cost:1.4});
        instance3.save().then(
          doc=>{console.log("Third object saved")}
          ).catch(err=>{
          console.error(err)
          });             
    }
    let reseed = true;
    if (reseed) {recreateDB();}
  


module.exports = app;
