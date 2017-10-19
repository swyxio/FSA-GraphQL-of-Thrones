const path = require("path");
const compression = require("compression");
const session = require("express-session");
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const sessionStore = new SequelizeStore({ db });
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");

const schema = require("../schema");

const server = require("swyx")();
const app = server.app;

module.exports = app;

const createApp = () => {
  /**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */
  if (process.env.NODE_ENV !== "production") require("../secrets");

  // auth and api routes
  app.use("/graphql", graphqlExpress({ schema }));
  app.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql"
    })
  );
  // app.use("/auth", require("./auth"));
  // app.use("/api", require("./api"));
  // compression middleware
  app.use(compression());

  // session middleware with passport
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "my best friend is Cody",
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  );

  app.use(server.finalHandler);
};

const startListening = () => {
  server.start();
};

const syncDb = () => db.sync();

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  sessionStore.sync().then(syncDb).then(createApp).then(startListening);
} else {
  createApp();
}
