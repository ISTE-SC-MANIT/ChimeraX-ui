import { graphql } from 'relay-runtime'

const GetInvitationQuery = graphql`
    query GetInvitationQuery {
        getInvitations {
           sentInvitations{
               _id
               id,
               sendersId
               sendersName
               sendersEmail
               receiversId
               receiversName
               receiversEmail
             
           }
           receivedInvitations{
               _id
               id
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
