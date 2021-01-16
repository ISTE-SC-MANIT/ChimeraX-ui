/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PaymentStatus = "PAID" | "UNPAID" | "%future added value";
export type TeamStatus = "INDIVIDUAL" | "NOT_INITIALIZED" | "TEAM" | "%future added value";
export type SubmitQuizInput = {
    responses: Array<QuestionAnswer>;
};
export type QuestionAnswer = {
    questionId: string;
    answer: string;
    questionNumber: number;
    answer2?: string | null;
};
export type SubmitQuizMutationVariables = {
    input: SubmitQuizInput;
};
export type SubmitQuizMutationResponse = {
    readonly submitQuiz: {
        readonly _id: string | null;
        readonly id: string | null;
        readonly teamLeadersId: string;
        readonly invitationId: string;
        readonly teamHelpersId: string | null;
        readonly teamName: string | null;
        readonly city: string | null;
        readonly teamStatus: TeamStatus;
        readonly status: PaymentStatus;
    };
};
export type SubmitQuizMutation = {
    readonly response: SubmitQuizMutationResponse;
    readonly variables: SubmitQuizMutationVariables;
};



/*
mutation SubmitQuizMutation(
  $input: SubmitQuizInput!
) {
  submitQuiz(submitQuizInput: $input) {
    _id
    id
    teamLeadersId
    invitationId
    teamHelpersId
    teamName
    city
    teamStatus
    status
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "submitQuizInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Team",
    "kind": "LinkedField",
    "name": "submitQuiz",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
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
        "name": "teamLeadersId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "invitationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "teamHelpersId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "teamName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "city",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "teamStatus",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SubmitQuizMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SubmitQuizMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6a83b624aa1531915926b9c4adc2cc45",
    "id": null,
    "metadata": {},
    "name": "SubmitQuizMutation",
    "operationKind": "mutation",
    "text": "mutation SubmitQuizMutation(\n  $input: SubmitQuizInput!\n) {\n  submitQuiz(submitQuizInput: $input) {\n    _id\n    id\n    teamLeadersId\n    invitationId\n    teamHelpersId\n    teamName\n    city\n    teamStatus\n    status\n  }\n}\n"
  }
};
})();
(node as any).hash = '9094c6e25623211f3868bf6230fd09cb';
export default node;
