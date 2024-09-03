/**
 * @generated SignedSource<<aec2aa9cd269b849ef9e72ccedf6926c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type dashboardQuery$variables = {
  id: string;
};
export type dashboardQuery$data = {
  readonly user: {
    readonly id: string;
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
    readonly " $fragmentSpreads": FragmentRefs<"TransactionsList_user">;
  } | null | undefined;
};
export type dashboardQuery = {
  response: dashboardQuery$data;
  variables: dashboardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "balance",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Transaction",
  "kind": "LinkedField",
  "name": "transactions",
  "plural": true,
  "selections": [
    (v2/*: any*/),
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
      "selections": (v4/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "receiver",
      "plural": false,
      "selections": (v4/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "dashboardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TransactionsList_user"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Wallet",
            "kind": "LinkedField",
            "name": "wallet",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "dashboardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Wallet",
            "kind": "LinkedField",
            "name": "wallet",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b6c16b0e76b64d1dabfdddb94b5d4e4d",
    "id": null,
    "metadata": {},
    "name": "dashboardQuery",
    "operationKind": "query",
    "text": "query dashboardQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    ...TransactionsList_user\n    wallet {\n      id\n      balance\n      transactions {\n        id\n        fromWallet\n        toWallet\n        amount\n        date\n        sender {\n          id\n          name\n        }\n        receiver {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment TransactionsList_user on User {\n  wallet {\n    id\n    transactions {\n      id\n      fromWallet\n      toWallet\n      amount\n      date\n      sender {\n        id\n        name\n      }\n      receiver {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e79fce3ba80f3dfe80ae7ef22e64df6b";

export default node;
