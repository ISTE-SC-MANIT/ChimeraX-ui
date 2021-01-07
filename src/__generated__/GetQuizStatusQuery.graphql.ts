/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserQuizStatus = "ENDED" | "NOT_STARTED" | "STARTED" | "%future added value";
export type GetQuizStatusQueryVariables = {};
export type GetQuizStatusQueryResponse = {
    readonly getQuizDetails: {
        readonly quizStartTime: string;
        readonly userQuizStatus: UserQuizStatus;
    };
};
export type GetQuizStatusQuery = {
    readonly response: GetQuizStatusQueryResponse;
    readonly variables: GetQuizStatusQueryVariables;
};



/*
query GetQuizStatusQuery {
  getQuizDetails {
    quizStartTime
    userQuizStatus
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "QuizDetailsResponse",
    "kind": "LinkedField",
    "name": "getQuizDetails",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "quizStartTime",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userQuizStatus",
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
    "name": "GetQuizStatusQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetQuizStatusQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "404770004c846ac5462c6a088f704e49",
    "id": null,
    "metadata": {},
    "name": "GetQuizStatusQuery",
    "operationKind": "query",
    "text": "query GetQuizStatusQuery {\n  getQuizDetails {\n    quizStartTime\n    userQuizStatus\n  }\n}\n"
  }
};
})();
(node as any).hash = '229ed76edc42579ff9ec9954650b9313';
export default node;
