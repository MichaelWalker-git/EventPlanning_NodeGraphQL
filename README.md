### Description

Please implement a Node.JS server with a GraphQL based API that has the abilities to Create, Read, Update, & Delete
Locations & Events. We would also like to be able to query and find all the locations & events belonging to an
organization, as well as the reverse: being able to query a location(s) / event(s) and having the ability to find the
organization it belongs to. No front end is required here.

This is what the schema of the (persistent) database should look like:

## Assumptions:

One - Many Relations:

- One Org : Many Events
- One Org : Many Locations

## Queries

- Create Locations
- Read Locations
- Update Locations
- Delete Locations

- Create Events
- Read Events
- Update Events
- Delete Events

- Query and find all the locations & events belonging to an organization
- Query a location(s) / event(s) and having the ability to find the organization it belongs to.

### Getting Started

- Run ``yarn run serve``
- Navigate in your browser to ``http://localhost:4000/`` which will navigate you to a

### Sample Queries:

1.)

```query QueryAll($locationByOrganizationIdId: ID) {
locations {
  name
  id
  organization {
    name  
  }
} 
```

2.)

```query QueryAll($locationByOrganizationIdId: ID) {
organizations {
  name
  event {
    name
    id
  }
  location {
    name
    id
  }
}
} 
```

3.) 
```mutation Mutation($updateOrganizationId: ID, $name: String) {
        updateOrganization(id: $updateOrganizationId, name: $name) {
            code
              org {
                 name
              }
        }
}
```

4.) 

```mutation Mutation($deleteOrganizationId: ID) {
 deleteOrganization (id: $deleteOrganizationId){
   code
 }
}
```

### Necessary Variables:
```
"updateOrganizationId": "1",
"name": "newNAME",
"deleteLocationId": 1,
```
