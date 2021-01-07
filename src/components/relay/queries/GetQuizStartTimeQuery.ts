import { graphql } from 'relay-runtime';

const GetQuizStartTimeQuery = graphql`
  query GetQuizStartTimeQuery {
    getQuizDetails {
      quizStartTime
    }
  }
`;

export default GetQuizStartTimeQuery;
