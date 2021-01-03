/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PaymentStatus = "PAID" | "UNPAID" | "%future added value";
export type TeamStatus = "INDIVIDUAL" | "NOT_INITIALIZED" | "TEAM" | "%future added value";
export type PlayAsIndividualMutationVariables = {};
export type PlayAsIndividualMutationResponse = {
    readonly playAsIndividual: {
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
export type PlayAsIndividualMutation = {
    readonly response: PlayAsIndividualMutationResponse;
    readonly variables: PlayAsIndividualMutationVariables;
};



/*
mutation PlayAsIndividualMutation {
  playAsIndividual {
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
    "alias": null,
    "args": null,
    "concreteType": "Team",
    "kind": "LinkedField",
    "name": "playAsIndividual",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PlayAsIndividualMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PlayAsIndividualMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "55aefae8468d8018654479d2da29bd6d",
    "id": null,
    "metadata": {},
    "name": "PlayAsIndividualMutation",
    "operationKind": "mutation",
    "text": "mutation PlayAsIndividualMutation {\n  playAsIndividual {\n    _id\n    id\n    teamLeadersId\n    invitationId\n    teamHelpersId\n    teamName\n    city\n    teamStatus\n    status\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd75f75fa6ef3f2548d2a39d99f44561f';
export default node;
