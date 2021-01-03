/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PaymentStatus = "PAID" | "UNPAID" | "%future added value";
export type TeamStatus = "INDIVIDUAL" | "NOT_INITIALIZED" | "TEAM" | "%future added value";
export type AcceptInvitationInput = {
    invitationId: string;
    receiverId: string;
};
export type AcceptInvitationMutationVariables = {
    input: AcceptInvitationInput;
};
export type AcceptInvitationMutationResponse = {
    readonly acceptInvitation: {
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
export type AcceptInvitationMutation = {
    readonly response: AcceptInvitationMutationResponse;
    readonly variables: AcceptInvitationMutationVariables;
};



/*
mutation AcceptInvitationMutation(
  $input: AcceptInvitationInput!
) {
  acceptInvitation(acceptInvitationInput: $input) {
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
        "name": "acceptInvitationInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Team",
    "kind": "LinkedField",
    "name": "acceptInvitation",
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
    "name": "AcceptInvitationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AcceptInvitationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a53b68c57505d4a5251cec1a6814bd7f",
    "id": null,
    "metadata": {},
    "name": "AcceptInvitationMutation",
    "operationKind": "mutation",
    "text": "mutation AcceptInvitationMutation(\n  $input: AcceptInvitationInput!\n) {\n  acceptInvitation(acceptInvitationInput: $input) {\n    _id\n    id\n    teamLeadersId\n    invitationId\n    teamHelpersId\n    teamName\n    city\n    teamStatus\n    status\n  }\n}\n"
  }
};
})();
(node as any).hash = 'aeda3a32a5a475d4a78fb1e824719495';
export default node;
