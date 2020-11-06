module.exports = `
  type Cta {
    title: String!,
    url: String!,
  }

  type StrapiBanner implements Node {
    id: String!,
    title: String!,
    description: String!,
    cta: Cta!,
    secondaryCta: Cta,
    active: Boolean!,
    hero: File,
  }
`;