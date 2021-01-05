/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type QuestionType = "IMAGE" | "TEXT" | "%future added value";
export type GetQuestionsQueryVariables = {};
export type GetQuestionsQueryResponse = {
    readonly getQuestions: ReadonlyArray<{
        readonly id: string | null;
        readonly question: string;
        readonly questionNo: number;
        readonly questionType: QuestionType;
    }>;
};
export type GetQuestionsQuery = {
    readonly response: GetQuestionsQueryResponse;
    readonly variables: GetQuestionsQueryVariables;
};



/*
query GetQuestionsQuery {
  getQuestions {
    id
    question
    questionNo
    questionType
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Question",
    "kind": "LinkedField",
    "name": "getQuestions",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "question",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "questionNo",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "questionType",
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
    "name": "GetQuestionsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetQuestionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6483395be11579bc6819d9e51b4b32b4",
    "id": null,
    "metadata": {},
    "name": "GetQuestionsQuery",
    "operationKind": "query",
    "text": "query GetQuestionsQuery {\n  getQuestions {\n    id\n    question\n    questionNo\n    questionType\n  }\n}\n"
  }
};
})();
(node as any).hash = '78b071e71c5c4ad53b96a7f65f79d681';
export default node;
