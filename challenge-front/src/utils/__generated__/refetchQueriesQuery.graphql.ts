/**
 * @generated SignedSource<<b84e79dcab58194f71a810ef586a8b18>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type refetchQueriesQuery$variables = {
  id: string;
};
export type refetchQueriesQuery$data = {
  readonly wallet: {
    readonly balance: string;
    readonly id: string;
    readonly transactions: ReadonlyArray<{
      readonly amount: string;
      readonly date: string;
      readonly fromWallet: string;
      readonly id: string;
      readonly receiver: {
        readonly id: string;
        readonly name: string;
      };
      readonly sender: {
        readonly id: string;
        readonly name: string;
      };
      readonly toWallet: string;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type refetchQueriesQuery = {
  response: refetchQueriesQuery$data;
  variables: refetchQueriesQuery$variables;
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
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Transaction",
        "kind": "LinkedField",
        "name": "transactions",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fromWallet",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "toWallet",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "amount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "date",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "sender",
            "plural": false,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "receiver",
            "plural": false,
            "selections": (v2/*: any*/),
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
    "name": "refetchQueriesQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "refetchQueriesQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "28f82f9f3cf1fd9a60a30e687e22eada",
    "id": null,
    "metadata": {},
    "name": "refetchQueriesQuery",
    "operationKind": "query",
    "text": "query refetchQueriesQuery(\n  $id: ID!\n) {\n  wallet(id: $id) {\n    id\n    balance\n    transactions {\n      id\n      fromWallet\n      toWallet\n      amount\n      date\n      sender {\n        id\n        name\n      }\n      receiver {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7c6d232f05b76a42d36a9e7b7aa19e6e";

export default node;
