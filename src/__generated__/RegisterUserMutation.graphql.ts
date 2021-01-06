/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserInput = {
    name?: string | null;
    phone?: string | null;
    year?: number | null;
    city?: string | null;
    college?: string | null;
};
export type RegisterUserMutationVariables = {
    input: UserInput;
};
export type RegisterUserMutationResponse = {
    readonly registerUser: {
        readonly name: string;
        readonly id: string | null;
        readonly email: string;
        readonly phone: string;
        readonly college: string | null;
        readonly strategy: string;
    };
};
export type RegisterUserMutation = {
    readonly response: RegisterUserMutationResponse;
    readonly variables: RegisterUserMutationVariables;
};



/*
mutation RegisterUserMutation(
  $input: UserInput!
) {
  registerUser(userInfo: $input) {
    name
    id
    email
    phone
    college
    strategy
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
        "name": "userInfo",
        "variableName": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "registerUser",
    "plural": false,
    "selections": [
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
        "name": "college",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RegisterUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c5bc94386d81f016c21bd4659850ddef",
    "id": null,
    "metadata": {},
    "name": "RegisterUserMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterUserMutation(\n  $input: UserInput!\n) {\n  registerUser(userInfo: $input) {\n    name\n    id\n    email\n    phone\n    college\n    strategy\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd3dd6d5ccf9a0500295e7992a19ea1f8';
export default node;
