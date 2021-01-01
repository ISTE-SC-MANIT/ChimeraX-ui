import { graphql } from 'relay-runtime'

const GetUserQuery = graphql`
    query GetUserQuery {
        getSingleUsers {
            _id
            name
 email
            phone
            registered
            strategy

        }
    }
`

export default GetUserQuery
