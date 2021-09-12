import {NextFunction, Request, Response} from "express";

const express = require('express');
const router = express.Router();

interface Organization {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const getOrganizations = (request: Request, response: Response, next: NextFunction) => {
  let locations: Organization[] = [
    {
      name: 'Germany',
      createdAt: new Date("1/21/2020"),
      updatedAt: new Date("1/21/2020"),
    },
    {
      name: 'Germany',
      createdAt: new Date("1/21/2020"),
      updatedAt: new Date("1/21/2020"),
    },
  ];

  response.status(200).json(locations);
};

router.get('/organizations', getOrganizations);

function postOrganization() {

}

router.post('/organizations', postOrganization);

function updateOrganization() {

}

router.put('/organizations', updateOrganization);

function deleteOrganization() {

}

router.delete('/organizations', deleteOrganization);

module.exports = router;
