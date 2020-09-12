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
    iconFull: File,
    primaryLink: Cta,
    secondaryLink: Cta,
  }
`;