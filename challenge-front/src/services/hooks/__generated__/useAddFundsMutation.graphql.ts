/**
 * @generated SignedSource<<f1b1ef669e81e558d89b686a8b46e2d4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useAddFundsMutation$variables = {
  amount: string;
  walletId: string;
};
export type useAddFundsMutation$data = {
  readonly addFundsToWallet: {
    readonly balance: string;
    readonly id: string;
  } | null | undefined;
};
export type useAddFundsMutation = {
  response: useAddFundsMutation$data;
  variables: useAddFundsMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "amount"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "walletId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "amount",
        "variableName": "amount"
      },
      {
        "kind": "Variable",
        "name": "walletId",
        "variableName": "walletId"
      }
    ],
    "concreteType": "Wallet",
    "kind": "LinkedField",
    "name": "addFundsToWallet",
    "plural": false,
    "selections": [
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
        "name": "balance",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useAddFundsMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useAddFundsMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "1c283ad7d8f831f7372c805ba7676cd7",
    "id": null,
    "metadata": {},
    "name": "useAddFundsMutation",
    "operationKind": "mutation",
    "text": "mutation useAddFundsMutation(\n  $walletId: ID!\n  $amount: String!\n) {\n  addFundsToWallet(walletId: $walletId, amount: $amount) {\n    id\n    balance\n  }\n}\n"
  }
};
})();

(node as any).hash = "8ac15134a08541a177543fc7640fd666";

export default node;
