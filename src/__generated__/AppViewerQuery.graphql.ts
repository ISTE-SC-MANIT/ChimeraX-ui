/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Role = "ADMIN" | "NOT_INITIALIZED" | "TEAM_HELPER" | "TEAM_LEADER" | "%future added value";
export type Step = "CHOOSE_TEAM" | "PAYMENT" | "REGISTER" | "TEST" | "%future added value";
export type AppViewerQueryVariables = {};
export type AppViewerQueryResponse = {
    readonly viewer: {
        readonly _id: string | null;
        readonly name: string;
        readonly id: string | null;
        readonly email: string;
        readonly phone: string;
        readonly registered: boolean;
        readonly strategy: string;
        readonly role: Role;
        readonly step: Step;
        readonly city: string;
    };
};
export type AppViewerQuery = {
    readonly response: AppViewerQueryResponse;
    readonly variables: AppViewerQueryVariables;
};



/*
query AppViewerQuery {
  viewer {
    _id
    name
    id
    email
    phone
    registered
    strategy
    role
    step
    city
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "viewer",
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
        "name": "name",
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
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phone",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "registered",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "strategy",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "role",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "step",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "city",
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
    "name": "AppViewerQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppViewerQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e0e58a83dae7e1e5d34e998cdafd8a9e",
    "id": null,
    "metadata": {},
    "name": "AppViewerQuery",
    "operationKind": "query",
    "text": "query AppViewerQuery {\n  viewer {\n    _id\n    name\n    id\n    email\n    phone\n    registered\n    strategy\n    role\n    step\n    city\n  }\n}\n"
  }
};
})();
(node as any).hash = '7be5cb1d9d55b49824ab835715576aa2';
export default node;
