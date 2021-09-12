import {Location, Organization, UserEvent} from "./types";
import {findItemByIdAndDelete} from "../utility";
export let orgs: Organization[] = [
  {
    name: 'Germany',
    createdAt: new Date("1/21/2020"),
    updatedAt: new Date("1/21/2020"),
    id: 1
  },
  {
    name: 'Germany',
    createdAt: new Date("1/21/2020"),
    updatedAt: new Date("1/21/2020"),
    id: 2,
  },
];

export let events: UserEvent[] = [
  {
    id: 1,
    name: 'Germany',
    dateTime: new Date("1/21/2020"),
  },
  {
    id: 2,
    name: 'Italy',
    dateTime: new Date("1/21/2020"),
  },
];

export let locations: Location[] = [
  {
    id: 1,
    name: 'Germany',
    address: '1231 Main St, San Francisco, CA 94303',
    latitude: '122',
    longitude: '1231',
    createdAt: new Date("1/21/2020"),
    updatedAt: new Date("1/21/2020"),
  },
  {
    id: 2,
    name: 'Italy',
    address: '1231 Main St, San Francisco, CA 94303',
    latitude: '122',
    longitude: '1231',
    createdAt: new Date("1/21/2020"),
    updatedAt: new Date("1/21/2020"),
  },
  {
    id: 3,
    name: 'Dj Kaled',
    address: '1231 Main St, San Francisco, CA 94303',
    latitude: '122',
    longitude: '1231',
    createdAt: new Date("1/21/2020"),
    updatedAt: new Date("1/21/2020"),
  },
  {
    id: 4,
    name: 'JBieber',
    address: '1231 Main St, San Francisco, CA 94303',
    latitude: '122',
    longitude: '1231',
    createdAt: new Date("1/21/2020"),
    updatedAt: new Date("1/21/2020"),
  },
];

export const addLocation = (root, args, context) => {
  const { name, address, latitude, longitude } = args;
  const newLocation = {
    name: name,
    address,
    latitude,
    longitude,
    id: Number(new Date()),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  locations.push(newLocation);

  return newLocation;
}

export const addEvent = (root, args, context) => {
  const { name } = args;
  const newEvent = {
    name: name,
    id: Number(new Date()),
    dateTime: new Date(),
  }
  events.push(newEvent);

  return newEvent;
}

export const addOrg = (root, args, context) => {
  const { name } = args;
  const newOrg = {
    name: name,
    id: Number(new Date()),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  orgs.push(newOrg);

  return newOrg;
}

export const deleteOrg = (root, args, context) => {
  const { id } = args;
  orgs =  findItemByIdAndDelete(id.toString(), orgs);
  return orgs;
}

export const deleteEvent = (root, args, context) => {
  const { id } = args;
  events =  findItemByIdAndDelete(id.toString(), events);
  return events;
}

export const deleteLocation = (root, args, context) => {
  const { id } = args;
  locations =  findItemByIdAndDelete(id.toString(), locations);
  return locations;
}
