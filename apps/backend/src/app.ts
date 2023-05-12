import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import Fastify, { FastifyInstance } from "fastify";
import { importData } from "./helpers/importData";
import { anotherRequest } from "./routes/another";
import { apartmentsRequest } from "./routes/apartments";
import { ApartmentsRequestType } from "./types/ApartmentsRequest";

const { PORT } = process.env;

export const server: FastifyInstance = Fastify({ logger: true });
export const prisma = new PrismaClient({ log: ["error", "warn"] });

server.register(cors);

server.get("/apartments", async (req: ApartmentsRequestType, res) => await apartmentsRequest(req, res));
server.get("*", async (req, res) => await anotherRequest(req, res));

const boot = async () => {
  try {
    await importData();
    await server.listen({ port: parseInt(PORT), host: "0.0.0.0" });

    console.log(`Backend started on ${PORT} port!`);
  } catch (err) {
    console.error("Can't boot backend! Error -", err);
  }
};

boot();
