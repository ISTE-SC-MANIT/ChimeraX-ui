/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Status = "ACCEPTED" | "PENDING" | "REJECTED" | "%future added value";
export type InvitationInput = {
    receiverId: string;
    receiverName: string;
    receiverEmail: string;
};
export type SendInvitationMutationVariables = {
    input: InvitationInput;
};
export type SendInvitationMutationResponse = {
    readonly sendInvitation: {
        readonly _id: string | null;
        readonly sendersId: string;
        readonly sendersName: string;
        readonly sendersEmail: string;
        readonly receiversName: string;
        readonly receiversEmail: string;
        readonly receiversId: string;
        readonly status: Status;
    };
};
export type SendInvitationMutation = {
    readonly response: SendInvitationMutationResponse;
    readonly variables: SendInvitationMutationVariables;
};



/*
mutation SendInvitationMutation(
  $input: InvitationInput!
) {
  sendInvitation(invitationInput: $input) {
    _id
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
        "name": "invitationInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Invitation",
    "kind": "LinkedField",
    "name": "sendInvitation",
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
    "name": "SendInvitationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SendInvitationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "480226593b4a054f42ee914dbfa7490c",
    "id": null,
    "metadata": {},
    "name": "SendInvitationMutation",
    "operationKind": "mutation",
    "text": "mutation SendInvitationMutation(\n  $input: InvitationInput!\n) {\n  sendInvitation(invitationInput: $input) {\n    _id\n    sendersId\n    sendersName\n    sendersEmail\n    receiversName\n    receiversEmail\n    receiversId\n    status\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c59fdaca3bb02398e897cb9879b2bd55';
export default node;
