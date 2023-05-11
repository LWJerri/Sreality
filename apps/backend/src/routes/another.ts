import { FastifyReply, FastifyRequest } from "fastify";

export async function anotherRequest(req: FastifyRequest, res: FastifyReply) {
  return await res.status(200).send({ time: new Date().toISOString(), host: req.hostname });
}
