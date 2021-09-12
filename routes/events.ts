import {NextFunction, Request, Response} from "express";

const express = require('express');
const router = express.Router();

/**
 * Events (belongs to Organization):-
 * Name-
 * Date/Time (can modify these columns to fit your needs better.
 */

interface Event {
  name: string;
  dateTime: Date;
}

const getEvents = (request: Request, response: Response, next: NextFunction) => {
  let locations: Event[] = [
    {
      name: 'Germany',
      dateTime: new Date("1/21/2020"),
    },
    {
      name: 'Germany',
      dateTime: new Date("1/21/2020"),
    },
  ];

  response.status(200).json(locations);
};


function createEvent() {

}


function updateEvent() {

}


function deleteEvent() {

}
router.get('/events', getEvents);
router.post('/events', createEvent);
router.put('/events', updateEvent);
router.delete('/events', deleteEvent);

module.exports = router;
