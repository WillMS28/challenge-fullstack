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
  { id: '1', name: 'Alice', cpf: '12345678901', boleto: 'Boleto123' },
  { id: '2', name: 'Bob', cpf: '98765432100', boleto: 'Boleto456' },
  { id: '3', name: 'Charlie', cpf: '11122233344', boleto: 'Boleto789' },
  { id: '4', name: 'David', cpf: '44455566677', boleto: 'Boleto012' },
  { id: '5', name: 'Eva', cpf: '88899977766', boleto: 'Boleto345' },
];

// New route to check the CPF
router.get("/check-cpf", async (ctx) => {
  const cpf = ctx.query.cpf;
  
  if (!cpf) {
    ctx.status = 400;
    ctx.body = { error: "CPF is required" };
    return;
  }

  const user = usersWithBoletos.find(u => u.cpf === cpf);

  if (user) {
    ctx.body = {
      name: user.name,
      cpf: user.cpf,
      boleto: user.boleto,
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
