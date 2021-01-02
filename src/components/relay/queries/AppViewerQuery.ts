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

        }
    }
`

export default AppViewerQuery
