/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
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
    "cacheID": "f0f4378b361b17a0fe7e341ab1a18c4f",
    "id": null,
    "metadata": {},
    "name": "AppViewerQuery",
    "operationKind": "query",
    "text": "query AppViewerQuery {\n  viewer {\n    _id\n    name\n    id\n    email\n    phone\n    registered\n    strategy\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e98df492e385a35bcba120e130c10e0d';
export default node;
