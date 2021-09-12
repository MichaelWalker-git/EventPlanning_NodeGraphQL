import express from 'express';
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes');
const locationRouter = require('./routes');
const organizationRouter = require('./routes');
const eventRouter = require('./routes');

const { graphql, buildSchema } = require('graphql');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

/**
 *
Please implement a Node.JS server with a GraphQL based API that has the abilities to
 Create Locations
 Read Locations
 Update Locations
 Delete Locations
 Create Events
 Read Events
 Update Events
 Delete Events

 query and find all the locations & events belonging to an organization
 query a location(s) / event(s) and having the ability to find the organization it belongs to.

This is what the schema of the the (persistent) database should look like:
Organization- Name- CreatedAt- UpdatedAt
Locations (belongs to Organization):- Name- Address- Latitude- Longitude- CreatedAt- UpdatedAt
Events (belongs to Organization):- Name- Date / Time (can modify these columns to fit your needs better.
 - Doesn’t have to be exactly one column)- Description- CreatedAt- UpdatedAt

Bonus: When a user submits a location with an address, the latitude & longitude is gathered via the Google Places API.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/event', eventRouter);
app.use('/organization', organizationRouter);
app.use('/location', locationRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
