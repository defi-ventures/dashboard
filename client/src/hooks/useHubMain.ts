import { useStaticQuery, graphql } from 'gatsby';
import { BannerData } from './useBannerData';

export type HubMain = {
  appsTitle: string,
  articlesTitle: string,
  readMore: string,
  viewAll: string,
  banner: BannerData,
};

type Query = {
  strapiHubMain: HubMain,
};

const query = graphql`
  query HubMainQuery {
    strapiHubMain {
      ...StrapiHubMainFragment
    }
  }
  fragment StrapiHubMainFragment on StrapiHubMain {
    appsTitle
    articlesTitle
    viewAll
    readMore
    banner {
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
  }
`;

export default (): HubMain => {
  const data = useStaticQuery<Query>(query);

  return data.strapiHubMain;
};
