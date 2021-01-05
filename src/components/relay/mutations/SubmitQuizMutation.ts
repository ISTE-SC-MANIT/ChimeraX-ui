import { graphql,  commitMutation } from "react-relay";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";
import { SubmitQuizMutationResponse, SubmitQuizInput } from "../../../__generated__/SubmitQuizMutation.graphql";


interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: SubmitQuizMutationResponse ): void;
}


const mutation = graphql`
    mutation SubmitQuizMutation($input: SubmitQuizInput!) {
        submitQuiz(submitQuizInput: $input) {
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
   submitQuizInput: SubmitQuizInput,
     { onCompleted, onError }: Callbacks
) => {

    
    return commitMutation(environment, {
        mutation,
        variables: {
            input: submitQuizInput
        },
        onCompleted: (response, error) => {
            if (error) {console.log(error)}
            onCompleted(response as SubmitQuizMutationResponse);
        },
        onError,
       
    });
};

export default commit

