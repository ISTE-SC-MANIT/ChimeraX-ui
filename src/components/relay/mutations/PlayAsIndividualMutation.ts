import { graphql,  commitMutation } from "react-relay";
import { PlayAsIndividualMutationResponse } from "../../../__generated__/PlayAsIndividualMutation.graphql";

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

export default mutation