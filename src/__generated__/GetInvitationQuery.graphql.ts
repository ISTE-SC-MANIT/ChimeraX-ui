/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type GetInvitationQueryVariables = {};
export type GetInvitationQueryResponse = {
    readonly getInvitations: {
        readonly sentInvitations: ReadonlyArray<{
            readonly _id: string | null;
            readonly id: string | null;
            readonly sendersId: string;
            readonly sendersName: string;
            readonly sendersEmail: string;
            readonly receiversId: string;
            readonly receiversName: string;
            readonly receiversEmail: string;
        }>;
        readonly receivedInvitations: ReadonlyArray<{
            readonly _id: string | null;
            readonly id: string | null;
            readonly sendersId: string;
            readonly sendersName: string;
            readonly sendersEmail: string;
            readonly receiversId: string;
            readonly receiversName: string;
            readonly receiversEmail: string;
        }>;
    };
};
export type GetInvitationQuery = {
    readonly response: GetInvitationQueryResponse;
    readonly variables: GetInvitationQueryVariables;
};



/*
query GetInvitationQuery {
  getInvitations {
    sentInvitations {
      _id
      id
      sendersId
      sendersName
      sendersEmail
      receiversId
      receiversName
      receiversEmail
    }
    receivedInvitations {
      _id
      id
      sendersId
      sendersName
      sendersEmail
      receiversId
      receiversName
      receiversEmail
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
    "name": "receiversId",
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
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "InvitationResponse",
    "kind": "LinkedField",
    "name": "getInvitations",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Invitation",
        "kind": "LinkedField",
        "name": "sentInvitations",
        "plural": true,
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Invitation",
        "kind": "LinkedField",
        "name": "receivedInvitations",
        "plural": true,
        "selections": (v0/*: any*/),
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
    "name": "GetInvitationQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetInvitationQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2a3c3ed8348922faf38ca2fb91d74e21",
    "id": null,
    "metadata": {},
    "name": "GetInvitationQuery",
    "operationKind": "query",
    "text": "query GetInvitationQuery {\n  getInvitations {\n    sentInvitations {\n      _id\n      id\n      sendersId\n      sendersName\n      sendersEmail\n      receiversId\n      receiversName\n      receiversEmail\n    }\n    receivedInvitations {\n      _id\n      id\n      sendersId\n      sendersName\n      sendersEmail\n      receiversId\n      receiversName\n      receiversEmail\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3c66142cbc8d617025a611f7a31da3f0';
export default node;
