"use client";

import { useEffect, useState } from "react";

interface APIResponse {
  error: boolean;
  messages: string;
  data: Array<{
    id: string;
    name: string;
    ApartmentImage: Array<{ id: string; photoURL: string; apartmentId: string }>;
  }>;
}

export default function Apartments() {
  const [currentPage, setCurrentPage] = useState(1);
  const [responseData, setResponseData] = useState<APIResponse>();

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(`http://localhost:8081/apartments?page=${currentPage}&limit=50`);
      const response: APIResponse = await request.json();

      setResponseData(response);
    };

    fetchData();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className="w-full py-1 px-2 flex justify-between">
        <a
          className="group relative inline-flex overflow-hidden rounded border border-current px-8 py-3 text-black hover:bg-black duration-200"
          href="/"
        >
          <span className="text-sm font-medium transition-all group-hover:text-white">Home</span>
        </a>

        <div className="space-x-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="group relative inline-flex overflow-hidden rounded border border-current px-6 py-2 text-black hover:bg-black duration-200"
          >
            <span className="group-hover:text-white">Previous</span>
          </button>

          <button
            onClick={handleNextPage}
            disabled={(responseData?.data?.length ?? 0) < 50}
            className="group relative inline-flex overflow-hidden rounded border border-current px-6 py-2 text-black hover:bg-black duration-200"
          >
            <span className="group-hover:text-white">Next</span>
          </button>
        </div>
      </div>
      {responseData?.error && <div className="text-center">Can't load data, because API return error!</div>}

      {!responseData?.error &&
        responseData?.data.map((apartment) => (
          <div className="duration-500 hover:bg-gray-300 w-auto rounded p-2 md:m-2 shadow-2x">
            <h2 className="font-bold text-2xl text-black">{apartment.name}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2">
              {apartment.ApartmentImage.map((image) => (
                <div>
                  <a href={image.photoURL} target="_blank">
                    <img src={image.photoURL} className="rounded hover:scale-95 duration-200" alt={image.id}></img>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
