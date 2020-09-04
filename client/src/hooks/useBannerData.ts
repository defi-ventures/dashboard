import { useStaticQuery, graphql } from 'gatsby';

export type BannerData = {
  id: string,
  title: string,
  description?: string,
  cta: {
    title: string,
    url: string,
  }
  active: boolean,
  hero: {
    childImageSharp: {
      original: {
        src: string,
      },
    },
  },
};

type Query = {
  allStrapiBanner: {
    nodes: BannerData[],
  },
};

const query = graphql`
  query BannersQuery {
    allStrapiBanner {
      nodes {
        ...StrapiBannerFragment
      }
    }
  }
  fragment StrapiBannerFragment on StrapiBanner {
    id
    title
    description
    cta {
      title
      url
    }
    active
    hero {
      childImageSharp {
        original {
          src
        }
      }
    }
  }
`;

export default (): BannerData | undefined => {
  const data = useStaticQuery<Query>(query);

  return data.allStrapiBanner.nodes.find(({ active }) => active);
};
