import { prisma } from "../app";
import { SrealityInterface } from "../interfaces/Sreality";

const API_URL = "https://www.sreality.cz/api/en/v2/estates";

export async function importData() {
  let isLastRequest = false;
  let page = 1;

  const currentApartmentsCount = await prisma.apartment.count();

  if (currentApartmentsCount >= 500) return;

  while (!isLastRequest) {
    console.log(`Loading apartments to database... Page ${page}`);

    let response: SrealityInterface;

    try {
      const request = await fetch(`${API_URL}?category_main_cb=1&category_type_cb=1&per_page=100&page=${page}`);
      response = await request.json();
    } catch (err) {
      console.error("Can't get info from website! Error -", err);
    }

    if (!response) return;

    try {
      const getAlreadyAddedApartments = await prisma.apartment.findMany({ select: { name: true } });
      const getNewApartmentsList = response._embedded.estates.filter(
        (estate) => !getAlreadyAddedApartments.some((record) => record.name === estate.name),
      );

      for (const apartment of getNewApartmentsList) {
        const { _links: apartmentLinks, name } = apartment;

        const getApartmentImagesList = apartmentLinks.images.map((img) => {
          return { photoURL: img.href };
        });

        try {
          await prisma.apartment.create({
            data: {
              name,
              ApartmentImage: { createMany: { data: getApartmentImagesList, skipDuplicates: true } },
            },
          });
        } catch (err) {
          console.error(`Can't add data from page ${page} to database! Error -`, err);
        }
      }

      const apartmentsSizeInDatabase = await prisma.apartment.count();

      if (apartmentsSizeInDatabase >= 500) {
        isLastRequest = true;
      } else {
        page++;
      }
    } catch (err) {
      console.error("Some error happens... Error -", err);
    }
  }
}
