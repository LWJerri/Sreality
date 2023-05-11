import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../app";

export async function apartmentsRequest(req: FastifyRequest & { query: { page: string } }, res: FastifyReply) {
  const getApartmentsPage = parseInt(req.query?.page);

  if (!getApartmentsPage || isNaN(getApartmentsPage)) {
    return await res
      .status(403)
      .send({ error: true, messages: "Please, provide ?page query in number format!", data: [] });
  }

  const getApartmentsList = await prisma.apartment.findMany({
    take: 50,
    skip: 50 * getApartmentsPage - 1,
    include: { ApartmentImage: true },
  });

  return await res.status(200).send({ error: false, messages: "Ok.", data: getApartmentsList });
}
