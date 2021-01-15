import { graphql } from 'relay-runtime'

const GetQuestionsQuery = graphql`
    query GetQuestionsQuery {
        getQuestions{
            id
            question
            questionNo
            questionAssets
            questionType
        }
    }
`

export default GetQuestionsQuery
