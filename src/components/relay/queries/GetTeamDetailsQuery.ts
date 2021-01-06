import { graphql } from 'relay-runtime';

const GetTeamDetailsQuery = graphql`
  query GetTeamDetailsQuery {
    getTeamDetails {
      teamLeader {
        name
        email
        userId
      }
      teamHelper {
        name
        email
        userId
      }
      status
    }
  }
`;

export default GetTeamDetailsQuery;
