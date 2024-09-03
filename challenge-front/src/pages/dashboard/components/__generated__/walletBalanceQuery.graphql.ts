/**
 * @generated SignedSource<<f58968627d5a0b2102c41db97d113e81>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type walletBalanceQuery$variables = {
  id: string;
};
export type walletBalanceQuery$data = {
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
export type walletBalanceQuery = {
  response: walletBalanceQuery$data;
  variables: walletBalanceQuery$variables;
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
    "name": "walletBalanceQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "walletBalanceQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "fcb6716338b16e36d2ae69b65fd613a2",
    "id": null,
    "metadata": {},
    "name": "walletBalanceQuery",
    "operationKind": "query",
    "text": "query walletBalanceQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    name\n    email\n    wallet {\n      id\n      balance\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "833877aa14d77dcb267dcd893f030797";

export default node;
