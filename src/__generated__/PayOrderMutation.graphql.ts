/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PaymentStatus = "PAID" | "UNPAID" | "%future added value";
export type TeamStatus = "INDIVIDUAL" | "NOT_INITIALIZED" | "TEAM" | "%future added value";
export type PayOrderInput = {
    paymentId: string;
};
export type PayOrderMutationVariables = {
    input: PayOrderInput;
};
export type PayOrderMutationResponse = {
    readonly payOrder: {
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
export type PayOrderMutation = {
    readonly response: PayOrderMutationResponse;
    readonly variables: PayOrderMutationVariables;
};



/*
mutation PayOrderMutation(
  $input: PayOrderInput!
) {
  payOrder(payOrderInput: $input) {
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
        "name": "payOrderInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Team",
    "kind": "LinkedField",
    "name": "payOrder",
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
    "name": "PayOrderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PayOrderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c9664957f9af53c7e78d6be88f80fbda",
    "id": null,
    "metadata": {},
    "name": "PayOrderMutation",
    "operationKind": "mutation",
    "text": "mutation PayOrderMutation(\n  $input: PayOrderInput!\n) {\n  payOrder(payOrderInput: $input) {\n    _id\n    id\n    teamLeadersId\n    invitationId\n    teamHelpersId\n    teamName\n    city\n    teamStatus\n    status\n  }\n}\n"
  }
};
})();
(node as any).hash = '3a05294f0c5d8161dc7a4a336054f2a0';
export default node;
