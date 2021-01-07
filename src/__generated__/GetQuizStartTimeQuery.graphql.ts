/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type GetQuizStartTimeQueryVariables = {};
export type GetQuizStartTimeQueryResponse = {
    readonly getQuizDetails: {
        readonly quizStartTime: string;
    };
};
export type GetQuizStartTimeQuery = {
    readonly response: GetQuizStartTimeQueryResponse;
    readonly variables: GetQuizStartTimeQueryVariables;
};



/*
query GetQuizStartTimeQuery {
  getQuizDetails {
    quizStartTime
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
    "name": "GetQuizStartTimeQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetQuizStartTimeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0196176c7f1779a1b437b4eba8d0979c",
    "id": null,
    "metadata": {},
    "name": "GetQuizStartTimeQuery",
    "operationKind": "query",
    "text": "query GetQuizStartTimeQuery {\n  getQuizDetails {\n    quizStartTime\n  }\n}\n"
  }
};
})();
(node as any).hash = '95adbb461599125c6e2b894b08102149';
export default node;
