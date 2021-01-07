import { graphql } from 'relay-runtime'

const AppViewerQuery = graphql`
    query AppViewerQuery {
        viewer {
            _id
            name
            id,
         
 email
            phone
            registered
            strategy
            role
            step
            city

        }
    }
`

export default AppViewerQuery
