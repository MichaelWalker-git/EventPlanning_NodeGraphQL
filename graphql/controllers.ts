import {Location, Organization, UserEvent} from "./types";
import {findItemByIdAndDelete, findItemByIdAndUpdate} from "../utility";

export let orgs: Organization[] = [
  {
    name: 'Ger Party',
    createdAt: new Date("1/21/2020"),
    updatedAt: new Date("1/21/2020"),
    id: 1
  },
  {
    name: 'Eatily Party',
    createdAt: new Date("1/21/2020"),
    updatedAt: new Date("1/21/2020"),
    id: 2,
  },
];

export let events: UserEvent[] = [
  {
    id: 1,
    name: 'OctoberFest',
    dateTime: new Date("1/21/2020"),
    orgId: 1,
  },
  {
    id: 2,
    name: 'Meatball Galore',
    dateTime: new Date("1/21/2020"),
    orgId: 2,
  },
  {
    id: 3,
    name: 'Gucci day',
    dateTime: new Date("1/24/2020"),
    orgId: 2
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
    orgId: 1
  },
  {
    id: 2,
    name: 'Italy',
    address: '1231 Main St, San Francisco, CA 94303',
    latitude: '122',
    longitude: '1231',
    createdAt: new Date("1/21/2020"),
    updatedAt: new Date("1/21/2020"),
    orgId: 2
  },
  {
    id: 3,
    name: 'Dj Kaled',
    address: '1231 Main St, San Francisco, CA 94303',
    latitude: '122',
    longitude: '1231',
    createdAt: new Date("1/21/2020"),
    updatedAt: new Date("1/21/2020"),
    orgId: 2
  },
  {
    id: 4,
    name: 'JBieber',
    address: '1231 Main St, San Francisco, CA 94303',
    latitude: '122',
    longitude: '1231',
    createdAt: new Date("1/21/2020"),
    updatedAt: new Date("1/21/2020"),
    orgId: 2
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

const findOrgById = (targetId: string) => {
  return orgs.filter((org) => (org.id).toString() === targetId)[0];
}

export const addLocation = (root, args, context) => {
  const {name, address, latitude, longitude} = args;
  const newLocation = {
    name: name,
    address,
    latitude,
    longitude,
    id: Number(new Date()),
    createdAt: new Date(),
    updatedAt: new Date(),
    organization: findOrgById("2"),
  }
  locations.push(newLocation);

  return newLocation;
}

export const addEvent = (root, args, context) => {
  const {name} = args;
  const newEvent = {
    name: name,
    id: Number(new Date()),
    dateTime: new Date(),
    organization: findOrgById("2"),
  }
  events.push(newEvent);

  return newEvent;
}

export const addOrg = (root, args, context) => {
  const {name} = args;
  const newOrg = {
    name: name,
    id: Number(new Date()),
    createdAt: new Date(),
    updatedAt: new Date(),
    event: [],
    location: [],
  }
  orgs.push(newOrg);

  return newOrg;
}

export const deleteOrg = (root, args, context) => {
  const {id} = args;
  const resp = findItemByIdAndDelete(id.toString(), orgs);
  if (!resp.error) {
    orgs = resp.newObject;
    return successObj;
  }
}

export const deleteEvent = (root, args, context) => {
  const {id} = args;
  const resp = findItemByIdAndDelete(id.toString(), events);
  if (!resp.error) {
    events = resp.newObject;
    return successObj;
  }
}

export const deleteLocation = (root, args, context) => {
  const {id} = args;
  const resp = findItemByIdAndDelete(id.toString(), locations);
  if (!resp.error) {
    locations = resp.newObject;
    return successObj;
  }
}

export const updateOrganization = (root, args, context) => {
  const {id,} = args;
  const resp = findItemByIdAndUpdate(id, orgs, args);
  if (!resp.error) {
    orgs = resp.newObject;
    return successObj;
  }
  return errorObj;
}

export const updateLocation = (root, args, context) => {
  const {id} = args;
  const resp = findItemByIdAndUpdate(id, locations, args);
  if (!resp.error) {
    locations = resp.newObject;
    return successObj;
  }
  return errorObj;
}

export const updateEvent = (root, args, context) => {
  const {id} = args;
  const resp = findItemByIdAndUpdate(id, events, args);
  if (!resp.error) {
    events = resp.newObject;
    return successObj;
  }
  return errorObj;
}

const findLocationsById = (targetId: string) => {
  return locations.filter((loc: Location) => (loc.id).toString() === targetId);
}

const findEventsById = (targetId: string) => {
  return events.filter((events: UserEvent) => (events.id).toString() === targetId);
}

export const getOrganizations = (root, args, context) => {
  const result = orgs.map((org: Organization) => {
    return {
      ...org,
      event: findEventsById(org.id.toString()) || [],
      location: findLocationsById(org.id.toString()) || []
    };
  });

  return result;
}

export const getEvents = (root, args, context) => {
  return events.map((evt) => {
    console.log(findOrgById(evt.orgId.toString()), "!??!")
    return {
      ...evt,
      organization: findOrgById(evt.orgId.toString())
    };
  })
}

export const getLocations = (root, args, context) => {
  return locations.map((loc) => {
    return {
      ...loc,
      organization: findOrgById(loc.orgId.toString())
    };
  })
}
