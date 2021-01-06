/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Role = "ADMIN" | "NOT_INITIALIZED" | "TEAM_HELPER" | "TEAM_LEADER" | "%future added value";
export type GetUserQueryVariables = {};
export type GetUserQueryResponse = {
    readonly getSingleUsers: ReadonlyArray<{
        readonly _id: string | null;
        readonly name: string;
        readonly email: string;
        readonly id: string | null;
        readonly phone: string;
        readonly registered: boolean;
        readonly strategy: string;
        readonly role: Role;
    }>;
};
export type GetUserQuery = {
    readonly response: GetUserQueryResponse;
    readonly variables: GetUserQueryVariables;
};



/*
query GetUserQuery {
  getSingleUsers {
    _id
    name
    email
    id
    phone
    registered
    strategy
    role
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
    "name": "getSingleUsers",
    "plural": true,
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
        "name": "email",
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
    "name": "GetUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9a4609f32ad4157eb6bacee87cf837ee",
    "id": null,
    "metadata": {},
    "name": "GetUserQuery",
    "operationKind": "query",
    "text": "query GetUserQuery {\n  getSingleUsers {\n    _id\n    name\n    email\n    id\n    phone\n    registered\n    strategy\n    role\n  }\n}\n"
  }
};
})();
(node as any).hash = '40e316423a3666927c7c0cd78fb23c81';
export default node;
