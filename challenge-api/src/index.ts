import Koa from "koa";
import bodyParser from "koa-bodyparser";
import Router from "koa-router";
import { graphql } from "graphql";
import { schema, root } from "./schema";
import connectDB from "./db";
import cors from "koa2-cors";
import "dotenv/config";

interface GraphQLRequestBody {
  query: string;
  variables?: { [key: string]: any };
}

const OriginPath = process.env.ORIGIN_PATH;

const app = new Koa();
const router = new Router();

connectDB();

app.use(
  cors({
    origin: OriginPath,
    credentials: true,
  })
);

app.use(bodyParser());

// Simulated list of users with a boleto
const usersWithBoletos = [
  {
    id: "1",
    name: "Alice",
    cpf: "12345678901",
    data: "20/12/2024",
    valor: "12.147,12",
    boleto: "https://eppg.fgv.br/sites/default/files/teste.pdf",
    parcelas: 3
  },
  {
    id: "2",
    name: "Bob",
    cpf: "98765432100",
    valor: "12.147,12",
    data: "20/12/2024",
    boleto: "https://eppg.fgv.br/sites/default/files/teste.pdf",
    parcelas: 1
  },
  {
    id: "3",
    name: "Charlie",
    valor: "12.147,12",
    cpf: "11122233344",
    data: "20/12/2024",
    boleto: "https://eppg.fgv.br/sites/default/files/teste.pdf",
    parcelas: 2
  },
  {
    id: "4",
    name: "David",
    cpf: "44455566677",
    valor: "12.147,12",
    data: "20/12/2024",
    boleto: "https://eppg.fgv.br/sites/default/files/teste.pdf",
    parcelas: 4
  },
  {
    id: "5",
    name: "Eva",
    cpf: "88899977766",
    valor: "12.147,12",
    data: "20/12/2024",
    boleto: "https://eppg.fgv.br/sites/default/files/teste.pdf",
    parcelas: 5
  },
];

// New route to check the CPF
router.get("/check-cpf", async (ctx) => {
  const cpf = ctx.query.cpf;

  if (!cpf) {
    ctx.status = 400;
    ctx.body = { error: "CPF is required" };
    return;
  }

  const user = usersWithBoletos.find((u) => u.cpf === cpf);

  if (user) {
    ctx.body = {
      name: user.name,
      parcelas: user.parcelas,
      cpf: user.cpf,
      boleto: user.boleto,
      data: user.data,
      valor: user.valor,
      enable: true,
    };
  } else {
    ctx.body = {
      enable: false,
    };
  }
});

router.post("/graphql", async (ctx) => {
  const body = ctx.request.body as GraphQLRequestBody;
  const { query, variables } = body;
  const result = await graphql({
    schema: schema,
    source: query,
    rootValue: root,
    variableValues: variables,
  });
  ctx.body = result;
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3030;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
