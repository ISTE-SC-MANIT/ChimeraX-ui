import { graphql,  commitMutation } from "react-relay";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";
import { InvitationInput, SendInvitationMutationResponse } from "../../../__generated__/SendInvitationMutation.graphql";

interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: SendInvitationMutationResponse ): void;
}

const mutation = graphql`
    mutation SendInvitationMutation($input: InvitationInput!) {
        sendInvitation(invitationInput: $input) {
            _id,
            sendersId,
            sendersName,
            sendersEmail,
            receiversName,
            receiversEmail,
            receiversId,
            status
            
        }
    }
`


const commit = (
    environment: RelayModernEnvironment,
   sendInvitationInput: InvitationInput,
     { onCompleted, onError }: Callbacks
) => {

    
    return commitMutation(environment, {
        mutation,
        variables: {
            input: sendInvitationInput
        },
        onCompleted: (response, error) => {
            if (error) {console.log(error)}
            onCompleted(response as SendInvitationMutationResponse);
        },
        onError,
       
    });
};

export default commit
