import { graphql,  commitMutation } from "react-relay";
import { RegisterUserMutationResponse, UserInput } from "../../../__generated__/RegisterUserMutation.graphql";
import {Environment}  from "relay-runtime"
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";

interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: RegisterUserMutationResponse): void;
}

const mutation = graphql`
    mutation RegisterUserMutation($input: UserInput!) {
        registerUser(userInfo: $input) {
            name
         id,
            email
            phone
            college
            strategy
            
        }
    }
`


const commit = (
    environment: RelayModernEnvironment,
   registerUserInput: UserInput,
     { onCompleted, onError }: Callbacks
) => {

    console.log(environment)

    console.log("hi")
    return commitMutation(environment, {
        mutation,
        variables: {
            input: registerUserInput
        },
        onCompleted: (response, error) => {
            if (error) {console.log(error)}
            onCompleted(response as RegisterUserMutationResponse);
        },
        onError,
       
    });
};

export default commit
