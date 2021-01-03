import { graphql, commitMutation } from "react-relay";
import { PayOrderMutationResponse, PayOrderInput } from "../../../__generated__/PayOrderMutation.graphql";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";


interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: PayOrderMutationResponse ): void;
}

const mutation = graphql`
    mutation PayOrderMutation($input: PayOrderInput!) {
        payOrder(payOrderInput: $input) {
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
   payOrderInput: PayOrderInput,
     { onCompleted, onError }: Callbacks
) => {

    
    return commitMutation(environment, {
        mutation,
        variables: {
            input: payOrderInput
        },
        onCompleted: (response, error) => {
            if (error) {console.log(error)}
            onCompleted(response as PayOrderMutationResponse);
        },
        onError,
       
    });
};

export default commit