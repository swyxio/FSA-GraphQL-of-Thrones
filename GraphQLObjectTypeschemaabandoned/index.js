var graphql = require("graphql");
var { GraphQLObjectType, GraphQLSchema } = graphql;
/**
 * The GraphQL type equivalent of the Root resource
 */
const rootType = new GraphQLObjectType({
  name: "Root",
  fields: {
    allHouses: type_allHouses
  }
});

export default new GraphQLSchema({ query: rootType });

/*

References

functions https://github.com/graphql/swapi-graphql/blob/9e0f753e221992e309b61af27010afcd3582f539/src/schema/index.js
simple https://github.com/graphql/graphiql

*/

// http://graphql.org/graphql-js/constructing-types/
