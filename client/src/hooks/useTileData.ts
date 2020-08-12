import { useStaticQuery, graphql } from 'gatsby';

export type TileData = {
  id: string,
  title: string,
  description?: string,
  url: string,
  active: boolean,
  icon?: {
    childImageSharp: {
      original: {
        src: string,
      },
    },
  },
  bg?: {
    childImageSharp: {
      original: {
        src: string,
      },
    },
  },
  secondaryTitle?: string,
  secondaryUrl?: string,
};

type Query = {
  data: {
    allStrapiTile: {
      nodes: TileData[],
    },
  },
};

const query = graphql`
  query TilesQuery {
    allStrapiTile {
      nodes {
        ...StrapiTileFragment
      }
    }
  }
  fragment StrapiTileFragment on StrapiTile {
    id
    title
    active
    url
    description
    icon {
      childImageSharp {
        original {
          src
        }
      }
    }
    bg {
      childImageSharp {
        original {
          src
        }
      }
    }
    secondaryTitle
    secondaryUrl
  }
`;

export default (): TileData[] => {
  const data = useStaticQuery(query);

  return data.allStrapiTile.nodes;
};
