const typeDefs = require('./types');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(typeDefs);
}