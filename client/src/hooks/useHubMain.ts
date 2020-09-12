import { useStaticQuery, graphql } from 'gatsby';

export type HubMain = {
  appsTitle: string,
  articlesTitle: string,
  readMore: string,
  viewAll: string,
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
  }
`;

export default (): HubMain => {
  const data = useStaticQuery<Query>(query);

  return data.strapiHubMain;
};
