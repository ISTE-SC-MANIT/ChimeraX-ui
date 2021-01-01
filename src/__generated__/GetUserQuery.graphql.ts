/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type GetUserQueryVariables = {};
export type GetUserQueryResponse = {
    readonly getSingleUsers: ReadonlyArray<{
        readonly _id: string | null;
        readonly name: string;
        readonly email: string;
        readonly phone: string;
        readonly registered: boolean;
        readonly strategy: string;
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
    phone
    registered
    strategy
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
    "cacheID": "f5b04406c0f1c11fab89220db8f7c8f3",
    "id": null,
    "metadata": {},
    "name": "GetUserQuery",
    "operationKind": "query",
    "text": "query GetUserQuery {\n  getSingleUsers {\n    _id\n    name\n    email\n    phone\n    registered\n    strategy\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f039fa2000f0f83371b1ff7c851c3566';
export default node;