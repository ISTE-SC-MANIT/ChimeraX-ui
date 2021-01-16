/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type QuestionAnswerType = "DOUBLE" | "SINGLE" | "%future added value";
export type QuestionType = "AUDIO" | "IMAGE" | "TEXT" | "VIDEO" | "%future added value";
export type GetQuestionsQueryVariables = {};
export type GetQuestionsQueryResponse = {
    readonly getQuestions: ReadonlyArray<{
        readonly id: string | null;
        readonly question: string;
        readonly questionAssets: string | null;
        readonly firstAnswerLabel: string;
        readonly secondAnswerLabel: string | null;
        readonly questionNo: number;
        readonly questionType: QuestionType;
        readonly questionAnswerType: QuestionAnswerType;
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
    questionAssets
    firstAnswerLabel
    secondAnswerLabel
    questionNo
    questionType
    questionAnswerType
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
        "name": "questionAssets",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstAnswerLabel",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "secondAnswerLabel",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "questionAnswerType",
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
    "cacheID": "0ad6c9a84da49dc9544dccde4484e42c",
    "id": null,
    "metadata": {},
    "name": "GetQuestionsQuery",
    "operationKind": "query",
    "text": "query GetQuestionsQuery {\n  getQuestions {\n    id\n    question\n    questionAssets\n    firstAnswerLabel\n    secondAnswerLabel\n    questionNo\n    questionType\n    questionAnswerType\n  }\n}\n"
  }
};
})();
(node as any).hash = '060a032e80df54d3467d498ebf4b5b66';
export default node;
