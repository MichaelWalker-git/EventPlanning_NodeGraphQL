import {typeDefs} from "./graphql/types";
import {
  addEvent,
  addLocation,
  addOrg,
  deleteEvent,
  deleteLocation,
  deleteOrg,
  updateOrganization,
  updateEvent,
  updateLocation,
  getEvents,
  getOrganizations, getLocations
} from "./graphql/controllers";

const {ApolloServer} = require('apollo-server');

const resolvers = {
  Query: {
    organizations: getOrganizations,
    events: getEvents,
    locations: getLocations,
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

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
