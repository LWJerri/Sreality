import { FastifyRequest } from "fastify";

export type ApartmentsRequestType = FastifyRequest & { query: { page: string; limit: string } };
