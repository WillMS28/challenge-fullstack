import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";

const baseURL = import.meta.env.VITE_BASE_URL_API;

const ENDPOINT = `${baseURL}/graphql`;
console.log(baseURL);
//const ENDPOINT = "http://localhost:3000/graphql";

const fetchFn: FetchFunction = async (request, variables) => {
  const resp = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Accept:
        "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  return await resp.json();
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
