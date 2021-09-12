import {Location, Organization, UserEvent} from "./types";
import {findItemByIdAndDelete, findItemByIdAndUpdate} from "../utility";
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

const successObj = {
  code: 200,
  success: true,
  message: "Successfully deleted."
};

const errorObj = {
  code: 500,
  success: false,
  message: "Error in the graphql controller."
}
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
  const resp =  findItemByIdAndDelete(id.toString(), orgs);
  if(!resp.error){
    orgs = resp.newObject;
    return successObj;
  }
}

export const deleteEvent = (root, args, context) => {
  const { id } = args;
  const resp =  findItemByIdAndDelete(id.toString(), events);
  if(!resp.error){
    events = resp.newObject;
    return successObj;
  }
}

export const deleteLocation = (root, args, context) => {
  const { id } = args;
  const resp =  findItemByIdAndDelete(id.toString(), locations);
  if(!resp.error){
    locations = resp.newObject;
    return successObj;
  }
}

export const updateOrganization = (root, args, context) => {
  const { id, } = args;
  const resp =  findItemByIdAndUpdate(id, orgs, args);
  if(!resp.error){
    orgs = resp.newObject;
    return successObj;
  }
  return errorObj;
}

export const updateLocation = (root, args, context) => {
  const { id } = args;
  const resp =  findItemByIdAndUpdate(id, locations, args);
  if(!resp.error){
    locations = resp.newObject;
    return successObj;
  }
  return errorObj;

}

export const updateEvent = (root, args, context) => {
  const { id } = args;
  const resp =  findItemByIdAndUpdate(id, events, args);
  if(!resp.error){
    events = resp.newObject;
    return successObj;
  }
  return errorObj;
}
