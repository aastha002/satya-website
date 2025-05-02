import React from "react";
import { PlusCircle } from "lucide-react";

const clients = [
  {
    name: "Ms. Binti Devi",
    location: "Bamheta - Ghaziabad",
    image: "client.png",
  },
  {
    name: "",
    location: "",
    image: "client.png",
  },
  {
    name: "",
    location: "",
    image: "client.png",
  },
  {
    name: "",
    location: "",
    image: "client.png",
  },
];

export default function ClientsSpeak() {
  return (
    <section className="py-16 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">
        <span className="inline-block w-12 h-1 bg-orange-600 mr-2 -mb-1 align-middle"></span>
        Client's Speak
      </h2>
      <p className="text-gray-600 mb-10">What our Clients say about us</p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {clients.map((client, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer"
          >
            <img
              src={client.image}
              alt={client.name || `Client ${index + 1}`}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay on hover */}
            {client.name && (
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left text-white">
                <h3 className="font-bold text-lg">{client.name}</h3>
                <p className="text-sm">{client.location}</p>
                <div className="mt-3">
                  <div className="bg-orange-600 w-8 h-8 rounded-full flex items-center justify-center">
                    <PlusCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-10">
        <button className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-orange-700 transition">
          <svg
            className="w-5 h-5 animate-spin"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 4v5h.582m15.59 2A8.003 8.003 0 004.582 9M20 20v-5h-.581m-15.59-2a8.003 8.003 0 0015.589 3" />
          </svg>
          Load more
        </button>
      </div>
    </section>
  );
}
