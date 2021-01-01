import { graphql } from 'relay-runtime'

const AppViewerQuery = graphql`
    query AppViewerQuery {
        viewer {
            name
            userName
            email
            phone
            registered
            strategy

        }
    }
`

export default AppViewerQuery
