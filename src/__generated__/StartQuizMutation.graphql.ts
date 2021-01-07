/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type StartQuizMutationVariables = {};
export type StartQuizMutationResponse = {
    readonly startQuiz: {
        readonly quizStartTime: string;
    };
};
export type StartQuizMutation = {
    readonly response: StartQuizMutationResponse;
    readonly variables: StartQuizMutationVariables;
};



/*
mutation StartQuizMutation {
  startQuiz {
    quizStartTime
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "StartQuizResponse",
    "kind": "LinkedField",
    "name": "startQuiz",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "quizStartTime",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "StartQuizMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "StartQuizMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "629d56c2f2f204f34d4fb5f5b4b1fc2c",
    "id": null,
    "metadata": {},
    "name": "StartQuizMutation",
    "operationKind": "mutation",
    "text": "mutation StartQuizMutation {\n  startQuiz {\n    quizStartTime\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f280fa6f7bdab06e880c77da04b7b434';
export default node;
