/**
 * @generated SignedSource<<7e40799602c83706a7450a55fc2e1b5f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useSendFundsMutation$variables = {
  amount: string;
  fromWalletId: string;
  toWalletId: string;
};
export type useSendFundsMutation$data = {
  readonly sendFunds: {
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
  } | null | undefined;
};
export type useSendFundsMutation = {
  response: useSendFundsMutation$data;
  variables: useSendFundsMutation$variables;
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
  "name": "fromWalletId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "toWalletId"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v5 = [
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
        "name": "fromWalletId",
        "variableName": "fromWalletId"
      },
      {
        "kind": "Variable",
        "name": "toWalletId",
        "variableName": "toWalletId"
      }
    ],
    "concreteType": "Transaction",
    "kind": "LinkedField",
    "name": "sendFunds",
    "plural": false,
    "selections": [
      (v3/*: any*/),
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSendFundsMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useSendFundsMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "e8037b7b310814c36b396be1390105a4",
    "id": null,
    "metadata": {},
    "name": "useSendFundsMutation",
    "operationKind": "mutation",
    "text": "mutation useSendFundsMutation(\n  $fromWalletId: ID!\n  $toWalletId: ID!\n  $amount: String!\n) {\n  sendFunds(fromWalletId: $fromWalletId, toWalletId: $toWalletId, amount: $amount) {\n    id\n    fromWallet\n    toWallet\n    amount\n    date\n    sender {\n      id\n      name\n    }\n    receiver {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "37ae4a1c8b9bcae67504799146a114d0";

export default node;
