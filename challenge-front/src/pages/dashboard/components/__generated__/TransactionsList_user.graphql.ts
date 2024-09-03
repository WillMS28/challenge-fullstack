/**
 * @generated SignedSource<<e0f7190e6e826adf67152c15704bbea0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TransactionsList_user$data = {
  readonly wallet: {
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
  readonly " $fragmentType": "TransactionsList_user";
};
export type TransactionsList_user$key = {
  wallet: any;
  readonly " $data"?: TransactionsList_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"TransactionsList_user">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TransactionsList_user",
  "selections": [
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
          "concreteType": "Transaction",
          "kind": "LinkedField",
          "name": "transactions",
          "plural": true,
          "selections": [
            (v0/*: any*/),
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
              "selections": (v1/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "User",
              "kind": "LinkedField",
              "name": "receiver",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "52a539b64b56f798f7c2128a5e24c4b0";

export default node;
