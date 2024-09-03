/**
 * @generated SignedSource<<a8203442daa10fc6d79347c4afbd60f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type usersListQuery$variables = Record<PropertyKey, never>;
export type usersListQuery$data = {
  readonly users: ReadonlyArray<{
    readonly email: string;
    readonly id: string;
    readonly name: string;
    readonly wallet: {
      readonly balance: string;
      readonly id: string;
    } | null | undefined;
  } | null | undefined> | null | undefined;
};
export type usersListQuery = {
  response: usersListQuery$data;
  variables: usersListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      (v0/*: any*/),
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
        "concreteType": "Wallet",
        "kind": "LinkedField",
        "name": "wallet",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "balance",
            "storageKey": null
          }
        ],
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
    "name": "usersListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "usersListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1caf8ece55f86bfde3de384b3c5b0068",
    "id": null,
    "metadata": {},
    "name": "usersListQuery",
    "operationKind": "query",
    "text": "query usersListQuery {\n  users {\n    id\n    name\n    email\n    wallet {\n      id\n      balance\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "bfe091fa5513ec0a27b98671a216cf6b";

export default node;
