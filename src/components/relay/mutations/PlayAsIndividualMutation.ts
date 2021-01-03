import { graphql,  commitMutation } from "react-relay";
import { PlayAsIndividualMutationResponse } from "../../../__generated__/PlayAsIndividualMutation.graphql";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";

interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: PlayAsIndividualMutationResponse ): void;
}
const mutation = graphql`
    mutation PlayAsIndividualMutation {
        playAsIndividual {
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

     { onCompleted, onError }: Callbacks
) => {

    
    return commitMutation(environment, {
        mutation,
        variables: {
           
        },

        onCompleted: (response, error) => {
            if (error) {console.log(error)}
            onCompleted(response as PlayAsIndividualMutationResponse);
        },
        onError,
       
    });
};

export default commit


