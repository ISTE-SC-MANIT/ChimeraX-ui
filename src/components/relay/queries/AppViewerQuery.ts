import { graphql } from 'relay-runtime'

const AppViewerQuery = graphql`
    query AppViewerQuery {
        viewer {
            _id
            name
 email
            phone
            registered
            strategy

        }
    }
`

export default AppViewerQuery
