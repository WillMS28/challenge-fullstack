/**
 * @generated SignedSource<<1cb37217aafe15db2e1cac8810d5f1c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getUserRelayQuery$variables = {
  id: string;
};
export type getUserRelayQuery$data = {
  readonly user: {
    readonly email: string;
    readonly id: string;
    readonly name: string;
    readonly wallet: {
      readonly balance: string;
      readonly id: string;
    } | null | undefined;
  } | null | undefined;
};
export type getUserRelayQuery = {
  response: getUserRelayQuery$data;
  variables: getUserRelayQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
          (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "getUserRelayQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getUserRelayQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "c11da109e1f15483a6988e0412a4258b",
    "id": null,
    "metadata": {},
    "name": "getUserRelayQuery",
    "operationKind": "query",
    "text": "query getUserRelayQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    name\n    email\n    wallet {\n      id\n      balance\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "323511b9a8cffaef090bfa09801d347e";

export default node;
