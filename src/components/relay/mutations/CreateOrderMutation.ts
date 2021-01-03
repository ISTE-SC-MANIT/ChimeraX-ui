import { graphql, commitMutation } from "react-relay";
import { CreateOrderMutationResponse, CreateOrderInput } from "../../../__generated__/CreateOrderMutation.graphql";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";

const mutation = graphql`
    mutation CreateOrderMutation($input: CreateOrderInput!) {
        createOrder(createOrderInput: $input) {
            
         id,
         amount,
         currency
            
            
        }
    }


`

interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: CreateOrderMutationResponse ): void;
}

const commit = (
    environment: RelayModernEnvironment,
   createOrderInput: CreateOrderInput,
     { onCompleted, onError }: Callbacks
) => {

    
    return commitMutation(environment, {
        mutation,
        variables: {
            input: createOrderInput
        },
        onCompleted: (response, error) => {
            if (error) {console.log(error)}
            onCompleted(response as CreateOrderMutationResponse);
        },
        onError,
       
    });
};

export default commit

