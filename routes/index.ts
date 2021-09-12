const express = require('express');
const router = express.Router();
const eventRoute = require('./events');
const locationRoute = require('./locations');
const organizationRoute = require('./organizations');

const defaultRoutes = [
  {
    path: '/event',
    route: eventRoute,
  },
  {
    path: '/locations',
    route: locationRoute,
  },
  {
    path: '/organization',
    route: organizationRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
