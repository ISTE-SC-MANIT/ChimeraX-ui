import { graphql } from 'relay-runtime';

const GetQuestionsQuery = graphql`
  query GetQuestionsQuery {
    getQuestions {
      id
      question
      questionAssets
      firstAnswerLabel
      secondAnswerLabel
      questionNo
      questionType
      questionAnswerType
    }
  }
`;

export default GetQuestionsQuery;
