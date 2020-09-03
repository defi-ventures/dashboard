module.exports = `
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
`;