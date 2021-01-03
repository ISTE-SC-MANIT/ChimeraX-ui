/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Status = "ACCEPTED" | "PENDING" | "REJECTED" | "%future added value";
export type DeleteInvitationInput = {
    invitationId: string;
};
export type DeleteInvitationMutationVariables = {
    input: DeleteInvitationInput;
};
export type DeleteInvitationMutationResponse = {
    readonly deleteInvitation: {
        readonly _id: string | null;
        readonly id: string | null;
        readonly sendersId: string;
        readonly sendersName: string;
        readonly sendersEmail: string;
        readonly receiversName: string;
        readonly receiversEmail: string;
        readonly receiversId: string;
        readonly status: Status;
    };
};
export type DeleteInvitationMutation = {
    readonly response: DeleteInvitationMutationResponse;
    readonly variables: DeleteInvitationMutationVariables;
};



/*
mutation DeleteInvitationMutation(
  $input: DeleteInvitationInput!
) {
  deleteInvitation(deleteInvitationInput: $input) {
    _id
    id
    sendersId
    sendersName
    sendersEmail
    receiversName
    receiversEmail
    receiversId
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
        "name": "deleteInvitationInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Invitation",
    "kind": "LinkedField",
    "name": "deleteInvitation",
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
        "name": "sendersId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sendersName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sendersEmail",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "receiversName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "receiversEmail",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "receiversId",
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
    "name": "DeleteInvitationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteInvitationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6fe3f916887fe7a41f31f42432d78703",
    "id": null,
    "metadata": {},
    "name": "DeleteInvitationMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteInvitationMutation(\n  $input: DeleteInvitationInput!\n) {\n  deleteInvitation(deleteInvitationInput: $input) {\n    _id\n    id\n    sendersId\n    sendersName\n    sendersEmail\n    receiversName\n    receiversEmail\n    receiversId\n    status\n  }\n}\n"
  }
};
})();
(node as any).hash = '65e24ce5ccfa5d81835ad4b5fe223190';
export default node;
