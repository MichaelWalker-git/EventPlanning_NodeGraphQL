/**
 *

This is what the schema of the the (persistent) database should look like:
Organization- Name- CreatedAt- UpdatedAt
Locations (belongs to Organization):- Name- Address- Latitude- Longitude- CreatedAt- UpdatedAt
Events (belongs to Organization):- Name- Date / Time (can modify these columns to fit your needs better.
 - Doesn’t have to be exactly one column)- Description- CreatedAt- UpdatedAt

Bonus: When a user submits a location with an address, the latitude & longitude is gathered via the Google Places API.
 */
import {typeDefs} from "./graphql/types";
import {
  addEvent,
  addLocation,
  addOrg,
  deleteEvent,
  deleteLocation,
  deleteOrg,
  locations,
  orgs,
  events, updateOrganization, updateEvent, updateLocation
} from "./graphql/controllers";

const { ApolloServer, gql } = require('apollo-server');


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
    deleteOrganization: deleteOrg,
    deleteEvent: deleteEvent,
    deleteLocation: deleteLocation,
    updateOrganization: updateOrganization,
    updateEvent: updateEvent,
    updateLocation: updateLocation,
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
