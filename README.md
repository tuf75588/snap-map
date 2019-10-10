# SnapGarden

Realtime ephemeral image sharing + maps.

## Features

- [x] Login with Google
- [x] View Map with your current location
- [ ] Upload an image from your current location.
  - [ ] Set the radius at which the image can be viewed
  - [ ] Set when the image will expire / disappear:
    - [ ] After X amount of views
    - [ ] After X amount of time
- [ ] Users can see image markers on the map
  - [ ] Can choose to view images IF within the specified image radius

## Config

#### Client

- Create a mapbox token [here](https://www.mapbox.com)
- Update client/.env with your mapbox token

#### Server

- Create a google client id and secret [here](https://console.developers.google.com/)
- Update server/.env with your google client id and secret

## Setup / Run

#### Client

```sh
cd client
npm install
npm start
```

#### Server

```sh
cd server
npm install
npm run dev
```

## Stack

#### Front-end

- [React](https://reactjs.org/)
- [@feathersjs](https://docs.feathersjs.com/api/client.html) client
  - A framework for real-time applications and REST APIs
- [socket.io-client](https://github.com/socketio/socket.io-client)
  - Realtime client
- [reactn](https://github.com/CharlesStover/reactn)
  - React, but with built-in global state management.
- [figbird](https://humaans.github.io/figbird/)
  - Declarative data fetching for Feathers and React
- [react-map-gl](https://uber.github.io/react-map-gl/#/)
  - React components for Mapbox GL JS
- [react-bootstrap](https://react-bootstrap.github.io) with [bootswatch](https://bootswatch.com/) [lux theme](https://bootswatch.com/lux/)

#### Back-end

- [Node.js](https://nodejs.org/en/)
- [FeathersJS](https://docs.feathersjs.com/)
  - A framework for real-time applications and REST APIs
- [Express](http://expressjs.com/)
- [Mongoose](https://mongoosejs.com)
  - elegant mongodb object modeling for node.js
- [socket.io](https://socket.io/)
  - Realtime server events
- [grant](https://github.com/simov/grant) with github oauth
  - OAuth Middleware for Express, Koa and Hapi

### Image Filter APIs

- https://uploadfilter.io/#pricingSection
- https://cloud.google.com/blog/products/gcp/filtering-inappropriate-content-with-the-cloud-vision-api
- https://cloud.google.com/vision/docs/detecting-properties
