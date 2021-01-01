/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserInput = {
    name?: string | null;
    phone?: string | null;
    year?: number | null;
    country?: string | null;
    college?: string | null;
};
export type RegisterUserMutationVariables = {
    input: UserInput;
};
export type RegisterUserMutationResponse = {
    readonly registerUser: {
        readonly name: string | null;
        readonly email: string;
        readonly phone: string | null;
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
    "cacheID": "8e42d43b62ac32ff9d8b6fe8eacdee23",
    "id": null,
    "metadata": {},
    "name": "RegisterUserMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterUserMutation(\n  $input: UserInput!\n) {\n  registerUser(userInfo: $input) {\n    name\n    email\n    phone\n    college\n    strategy\n  }\n}\n"
  }
};
})();
(node as any).hash = '687e8641bf32039fe0246e238110afb5';
export default node;
