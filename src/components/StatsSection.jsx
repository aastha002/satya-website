import React from "react";

const stats = [
  { number: "26", label: "No. of States" },
  { number: "361", label: "No. of Districts" },
  {
    number: "1,451,077",
    label: "No. of Clients (Excluding sale of portfolio to ARC)",
  },
  { number: "67,539", label: "No. of Villages" },
  { number: "194,495", label: "No. of Centers" },
  { number: "857", label: "No. of Branches (excluding HO)" },
];

export default function StatsSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Key Monthly Highlights March 31<sup>st</sup>, 2025
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-48 h-48 flex flex-col items-center justify-center rounded-full bg-white text-orange-600 font-bold text-2xl text-center px-4 transition-all duration-300 hover:bg-orange-600 hover:text-white cursor-pointer"
            >
              <div className="text-3xl">{stat.number}</div>
              <div className="text-sm font-medium mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
