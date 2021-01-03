import { graphql,  commitMutation } from "react-relay";
import { DeleteInvitationMutationResponse, DeleteInvitationInput } from "../../../__generated__/DeleteInvitationMutation.graphql";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";
import { RecordSourceSelectorProxy } from "relay-runtime";


interface Callbacks {
    onError(err: Error): void;
    onCompleted(response: DeleteInvitationMutationResponse ): void;
}


const mutation = graphql`
    mutation DeleteInvitationMutation($input: DeleteInvitationInput!) {
        deleteInvitation(deleteInvitationInput: $input) {
            _id,
         id,
            sendersId,
            sendersName,
            sendersEmail,
            receiversName,
            receiversEmail,
            receiversId,
            status
            status
            
        }
    }
`
const sharedUpdater = (store: RecordSourceSelectorProxy, id: string) => {
    store.delete(id)
}

const commit = (
    environment: RelayModernEnvironment,
   deleteInvitationInput: DeleteInvitationInput,
   id:string,
     { onCompleted, onError }: Callbacks
) => {

    
    return commitMutation(environment, {
        mutation,
        variables: {
            input: deleteInvitationInput
        },
        updater: (store: RecordSourceSelectorProxy) => sharedUpdater(store, id),
        onCompleted: (response, error) => {
            if (error) {console.log(error)}
            onCompleted(response as DeleteInvitationMutationResponse);
        },
        onError,
       
    });
};

export default commit


