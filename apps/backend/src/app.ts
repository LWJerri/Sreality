import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import Fastify, { FastifyInstance, FastifyRequest } from "fastify";
import { importData } from "./helpers/importData";
import { anotherRequest } from "./routes/another";
import { apartmentsRequest } from "./routes/apartments";

const { PORT } = process.env;

export const server: FastifyInstance = Fastify({ logger: true });
export const prisma = new PrismaClient({ log: ["error", "warn"] });

server.get(
  "/apartments",
  async (req: FastifyRequest & { query: { page: string } }, res) => await apartmentsRequest(req, res),
);
server.get("*", async (req, res) => await anotherRequest(req, res));

const boot = async () => {
  try {
    await importData();
    await server.listen({ port: parseInt(PORT), host: "0.0.0.0" });

    server.log.info(`Backend started on ${PORT} port!`);
  } catch (err) {
    server.log.error("Can't boot backend! Error -", err);
  }
};

boot();
