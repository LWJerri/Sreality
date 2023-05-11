import { FastifyReply } from "fastify";
import { prisma } from "../app";
import { ApartmentsRequestType } from "../types/ApartmentsRequest";

export async function apartmentsRequest(req: ApartmentsRequestType, res: FastifyReply) {
  const getApartmentsPage = parseInt(req.query?.page);
  const getApartmentsLimit = parseInt(req.query?.limit);

  if (!getApartmentsPage || isNaN(getApartmentsPage)) {
    return await res.status(403).send({ error: true, messages: "Add `page` in query" });
  }

  if (!getApartmentsLimit || isNaN(getApartmentsLimit)) {
    return await res.status(403).send({ error: true, messages: "Add `limit` in query" });
  }

  try {
    const getApartmentsList = await prisma.apartment.findMany({
      take: getApartmentsLimit,
      skip: getApartmentsLimit * getApartmentsPage - 1,
      include: { ApartmentImage: true },
    });

    return await res.status(200).send({ error: false, messages: "", data: getApartmentsList });
  } catch (err) {
    console.error("Can't send response! Error -", err);

    return await res.status(500).send({ error: true, messages: "Can't response with data" });
  }
}
