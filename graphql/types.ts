const {ApolloServer, gql} = require('apollo-server')

export interface UserEvent {
    name: string;
    dateTime: Date;
    id: number;
}

export interface Location {
    name: string;
    address: string;
    latitude: string;
    longitude: string;
    createdAt: Date;
    updatedAt: Date;
    id: number;
}

export interface Organization {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    id: number;
}

export const typeDefs = gql`
    interface BaseDetails {
        name: String
        createdAt: String
        updatedAt: String
    }

    type Event {
        id: ID
        name: String
        dateTime: String
    }

    type Location {
        id: ID
        address: String
        latitude: String
        longitude: String
        name: String
        createdAt: String
        updatedAt: String
    }

    type Organization {
        id: ID
        name: String
        createdAt: String
        updatedAt: String
    }

    interface MutationResponse {
        code: String!
        success: Boolean!
        message: String!
    }

    type Query {
        organizations: [Organization],
        events: [Event],
        locations: [Location],
    }

    type UpdateOrgMutationResponse implements MutationResponse {
        code: String!
        success: Boolean!
        message: String!
        org: Organization
    }

    type UpdateEventMutationResponse implements MutationResponse {
        code: String!
        success: Boolean!
        message: String!
        event: Event
    }

    type UpdateLocationMutationResponse implements MutationResponse {
        code: String!
        success: Boolean!
        message: String!
        location: Location
    }
    
    type DeleteResponse implements MutationResponse {
        code: String!
        success: Boolean!
        message: String!
    }
    
    type Mutation {
        addOrganization(name: String): Organization,
        addEvent(name: String): Event,
        addLocation(name: String, address: String, latitude: String, longitude: String,): Location,
        deleteOrganization(id: ID): DeleteResponse,
        deleteEvent(id: ID): DeleteResponse,
        deleteLocation(id: ID): DeleteResponse,
        updateOrganization(id: ID, name: String): UpdateOrgMutationResponse,
        updateEvent(id: ID, name: String): UpdateEventMutationResponse,
        updateLocation(
            id: ID, 
            name: String,
            address: String,
            latitude: String,
            longitude: String,
        ): UpdateLocationMutationResponse,
    }
`

