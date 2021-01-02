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
               id
           }
           receivedInvitations{
            sendersId
               sendersName
               sendersEmail
               receiversId
               receiversName
               receiversEmail
               id
           }

        }
    }
`

export default GetInvitationQuery
