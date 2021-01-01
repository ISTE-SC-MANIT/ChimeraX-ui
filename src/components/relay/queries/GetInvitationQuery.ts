import { graphql } from 'relay-runtime'

const GetInvitationQuery = graphql`
    query GetInvitationQuery {
        getInvitations {
           sentInvitations{
               sendersId
               sendersName
               sendersEmail
               receiversId
               receiversName
               receiversEmail
           }
           receivedInvitations{
            sendersId
               sendersName
               sendersEmail
               receiversId
               receiversName
               receiversEmail
           }

        }
    }
`

export default GetInvitationQuery
