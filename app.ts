/**
 *

This is what the schema of the the (persistent) database should look like:
Organization- Name- CreatedAt- UpdatedAt
Locations (belongs to Organization):- Name- Address- Latitude- Longitude- CreatedAt- UpdatedAt
Events (belongs to Organization):- Name- Date / Time (can modify these columns to fit your needs better.
 - Doesn’t have to be exactly one column)- Description- CreatedAt- UpdatedAt

Bonus: When a user submits a location with an address, the latitude & longitude is gathered via the Google Places API.
 */
import {UserEvent, Location, Organization, typeDefs} from "./graphql/types";

const orgs: Organization[] = [
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

const events: UserEvent[] = [
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

const locations: Location[] = [
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

const { ApolloServer, gql } = require('apollo-server');

const addLocation = (root, args, context) => {
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

const addEvent = (root, args, context) => {
  const { name } = args;
  const newEvent = {
    name: name,
    id: Number(new Date()),
    dateTime: new Date(),
  }
  events.push(newEvent);

  return newEvent;
}

const addOrg = (root, args, context) => {
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

const resolvers = {
  Query: {
    organizations: () => orgs,
    events: () => events,
    locations: () => locations,
  },
  Mutation: {
    addOrganization: addOrg,
    addEvent: addEvent,
    addLocation: addLocation,


  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
