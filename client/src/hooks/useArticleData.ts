import { useStaticQuery, graphql } from 'gatsby';

export type ArticleData = {
  id: string,
  title: string,
  createdAt: string,
  virtuals: {
    subtitle: string,
    previewImage: {
      imageId: string,
    },
    readingTime,
  },
  author: {
    name: string,
    imageId: string,
  },
  medium_id: string,
  slug: string,
};

type Query = {
  allMediumPost: {
    edges: [{
      node: ArticleData,
    }]
  },
};

const query = graphql`
  query ArticlesQuery {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          createdAt
          virtuals {
            subtitle
            previewImage {
              imageId
            }
            readingTime
          }
          author {
            name
            imageId
          }
          medium_id
          slug
        }
      }
    }
  }
`;

export default (): ArticleData[] => {
  const data = useStaticQuery<Query>(query);

  return data.allMediumPost.edges.map(edge => edge.node);
};
