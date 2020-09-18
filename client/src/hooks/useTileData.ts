import { useStaticQuery, graphql } from 'gatsby';

export type TileData = {
  id: string,
  title: string,
  description?: string,
  position: number,
  separator?: boolean,
  url: string,
  active: boolean,
  icon?: {
    childImageSharp: {
      original: {
        src: string,
      },
    },
    publicURL: string,
  },
  iconFull?: {
    childImageSharp: {
      original: {
        src: string,
      },
    },
    publicURL: string,
  },
  primaryLink: {
    title: string,
    url: string,
  },
  secondaryLink: {
    title: string,
    url: string,
  },
};

type Query = {
  allStrapiTile: {
    nodes: TileData[],
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
    position
    separator
    icon {
      childImageSharp {
        original {
          src
        }
      }
      publicURL
    }
    iconFull {
      childImageSharp {
        original {
          src
        }
      }
      publicURL
    }
    primaryLink {
      title
      url
    }
    secondaryLink {
      title
      url
    }
  }
`;

export default (): TileData[] => {
  const data = useStaticQuery<Query>(query);

  return data.allStrapiTile.nodes.filter(({ separator }) => !separator);
};
