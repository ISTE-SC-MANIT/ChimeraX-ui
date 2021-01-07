import { graphql, commitMutation } from 'react-relay';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';
import { StartQuizMutationResponse } from '../../../__generated__/StartQuizMutation.graphql';

interface Callbacks {
  onError(err: Error): void;
  onCompleted(response: StartQuizMutationResponse): void;
}
const mutation = graphql`
  mutation StartQuizMutation {
    startQuiz {
      quizStartTime
    }
  }
`;

const commit = (
  environment: RelayModernEnvironment,

  { onCompleted, onError }: Callbacks
) => {
  return commitMutation(environment, {
    mutation,
    variables: {},
    onCompleted: (response, error) => {
      if (error) {
        console.log(error);
      }
      onCompleted(response as StartQuizMutationResponse);
    },
    onError,
  });
};

export default commit;
