import { graphql,  commitMutation } from "react-relay";
import { AcceptInvitationMutationResponse, AcceptInvitationInput } from "../../../__generated__/AcceptInvitationMutation.graphql";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";


interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: AcceptInvitationMutationResponse ): void;
}


const mutation = graphql`
    mutation AcceptInvitationMutation($input: AcceptInvitationInput!) {
        acceptInvitation(acceptInvitationInput: $input) {
            _id,
       id,
            teamLeadersId,
            invitationId,
            teamHelpersId,
            teamName,
            city,
            teamStatus,
            status
            
        }
    }
`

const commit = (
    environment: RelayModernEnvironment,
   acceptInvitationInput: AcceptInvitationInput,
     { onCompleted, onError }: Callbacks
) => {

    
    return commitMutation(environment, {
        mutation,
        variables: {
            input: acceptInvitationInput
        },
        onCompleted: (response, error) => {
            if (error) {console.log(error)}
            onCompleted(response as AcceptInvitationMutationResponse);
        },
        onError,
       
    });
};

export default commit

