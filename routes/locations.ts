import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

interface Location {
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  createdAt: Date;
  updatedAt: Date;
}

const getLocations = (request: Request, response: Response, next: NextFunction) => {
  let locations: Location[] = [
    {
      name: 'Germany',
      address: '1231 Main St, San Francisco, CA 94303',
      latitude: '122',
      longitude: '1231',
      createdAt: new Date("1/21/2020"),
      updatedAt: new Date("1/21/2020"),
    },
    {
      name: 'Italy',
      address: '1231 Main St, San Francisco, CA 94303',
      latitude: '122',
      longitude: '1231',
      createdAt: new Date("1/21/2020"),
      updatedAt: new Date("1/21/2020"),
    },
    {
      name: 'Dj Kaled',
      address: '1231 Main St, San Francisco, CA 94303',
      latitude: '122',
      longitude: '1231',
      createdAt: new Date("1/21/2020"),
      updatedAt: new Date("1/21/2020"),
    },
    {
      name: 'JBieber',
      address: '1231 Main St, San Francisco, CA 94303',
      latitude: '122',
      longitude: '1231',
      createdAt: new Date("1/21/2020"),
      updatedAt: new Date("1/21/2020"),
    },
  ];

  response.status(200).json(locations);
};

router.get("/locations", getLocations);

function createLocation() {

}

router.post("/locations", createLocation);

function updateLocation() {

}

router.put("/locations", updateLocation);

function deleteLocation() {

}

router.delete("/locations", deleteLocation);


module.exports = router;
