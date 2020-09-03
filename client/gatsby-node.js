exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type StrapiTile implements Node {
      id: String!,
      title: String!,
      description: String,
      url: String,
      active: Boolean!,
      separator: Boolean!,
      position: Int!,
      icon: File,
      bg: File,
      secondaryTitle: String,
      secondaryUrl: String,
    }

    type Cta {
      title: String!,
      url: String!,
    }

    type StrapiBanner implements Node {
      id: String!,
      title: String!,
      description: String!,
      cta: Cta!,
      active: Boolean!,
      background: File,
    }
  `;
  createTypes(typeDefs);
}