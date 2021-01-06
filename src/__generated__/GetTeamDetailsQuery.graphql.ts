/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TeamStatus = "INDIVIDUAL" | "NOT_INITIALIZED" | "TEAM" | "%future added value";
export type GetTeamDetailsQueryVariables = {};
export type GetTeamDetailsQueryResponse = {
    readonly getTeamDetails: {
        readonly teamLeader: {
            readonly name: string;
            readonly email: string;
            readonly userId: string;
        };
        readonly teamHelper: {
            readonly name: string;
            readonly email: string;
            readonly userId: string;
        } | null;
        readonly status: TeamStatus;
    };
};
export type GetTeamDetailsQuery = {
    readonly response: GetTeamDetailsQueryResponse;
    readonly variables: GetTeamDetailsQueryVariables;
};



/*
query GetTeamDetailsQuery {
  getTeamDetails {
    teamLeader {
      name
      email
      userId
    }
    teamHelper {
      name
      email
      userId
    }
    status
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
    "name": "userId",
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TeamResponse",
    "kind": "LinkedField",
    "name": "getTeamDetails",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Member",
        "kind": "LinkedField",
        "name": "teamLeader",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Member",
        "kind": "LinkedField",
        "name": "teamHelper",
        "plural": false,
        "selections": (v0/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetTeamDetailsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetTeamDetailsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0c443316cf981cf28b250571d51bab46",
    "id": null,
    "metadata": {},
    "name": "GetTeamDetailsQuery",
    "operationKind": "query",
    "text": "query GetTeamDetailsQuery {\n  getTeamDetails {\n    teamLeader {\n      name\n      email\n      userId\n    }\n    teamHelper {\n      name\n      email\n      userId\n    }\n    status\n  }\n}\n"
  }
};
})();
(node as any).hash = '4f8392ca9a8b11583215ae7f91599eac';
export default node;
