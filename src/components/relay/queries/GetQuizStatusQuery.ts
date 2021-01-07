import { graphql } from 'relay-runtime';

const GetQuizStatusQuery = graphql`
  query GetQuizStatusQuery {
    getQuizDetails {
      quizStartTime
      userQuizStatus
    }
  }
`;

export default GetQuizStatusQuery;
