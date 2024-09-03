/**
 * @generated SignedSource<<0c5d0121e04f5731521dbd4ad4a1a32c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type usersListToTransferQuery$variables = Record<PropertyKey, never>;
export type usersListToTransferQuery$data = {
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
export type usersListToTransferQuery = {
  response: usersListToTransferQuery$data;
  variables: usersListToTransferQuery$variables;
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
    "name": "usersListToTransferQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "usersListToTransferQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a3a85fabf68bc9d894774e31e6e95836",
    "id": null,
    "metadata": {},
    "name": "usersListToTransferQuery",
    "operationKind": "query",
    "text": "query usersListToTransferQuery {\n  users {\n    id\n    name\n    email\n    wallet {\n      id\n      balance\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e1aafa6124be64c7c9a10bf99efe3e53";

export default node;
