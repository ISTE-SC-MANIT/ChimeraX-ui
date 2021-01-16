/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateOrderInput = {
    teamName: string;
    referralCode?: string | null;
};
export type CreateOrderMutationVariables = {
    input: CreateOrderInput;
};
export type CreateOrderMutationResponse = {
    readonly createOrder: {
        readonly id: string;
        readonly amount: number;
        readonly currency: string;
    };
};
export type CreateOrderMutation = {
    readonly response: CreateOrderMutationResponse;
    readonly variables: CreateOrderMutationVariables;
};



/*
mutation CreateOrderMutation(
  $input: CreateOrderInput!
) {
  createOrder(createOrderInput: $input) {
    id
    amount
    currency
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
        "name": "createOrderInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Order",
    "kind": "LinkedField",
    "name": "createOrder",
    "plural": false,
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
        "name": "amount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "currency",
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
    "name": "CreateOrderMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateOrderMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6ab1879e5e1609f9a9e0f18073814e7a",
    "id": null,
    "metadata": {},
    "name": "CreateOrderMutation",
    "operationKind": "mutation",
    "text": "mutation CreateOrderMutation(\n  $input: CreateOrderInput!\n) {\n  createOrder(createOrderInput: $input) {\n    id\n    amount\n    currency\n  }\n}\n"
  }
};
})();
(node as any).hash = '148d514cd1cfb528aa7603754212b247';
export default node;
