import Image from "next/image";

const sideImages = [
  "/award.png",
  "/award.png",
  "/award.png",
  "/award.png",
  "/award.png",
  "/award.png",
];

export default function AwardsShowcase() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          {sideImages.slice(0, 3).map((src, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-md"
            >
              <Image
                src={src}
                alt={`award-${idx}`}
                width={400}
                height={300}
                className="w-full h-auto transition duration-300 ease-in-out group-hover:brightness-75"
              />
            </div>
          ))}
        </div>

        {/* Center Content */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center py-12 px-6 bg-black text-white text-center overflow-hidden rounded-md">
          <Image
            src="/award.png"
            alt="Trophy background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-40 -z-10"
          />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="border-l-4 border-[#ff4a24] pl-4">
                Where Vision meets Excellence….
              </span>
            </h2>
            <p className="italic text-xl mt-6">Since</p>
            <h1 className="text-[100px] md:text-[140px] font-bold tracking-wide bg-clip-text text-transparent bg-[url('/highlight-text.png')] bg-cover">
              2017
            </h1>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          {sideImages.slice(3, 6).map((src, idx) => (
            <div
              key={idx + 3}
              className="group relative overflow-hidden rounded-md"
            >
              <Image
                src={src}
                alt={`award-${idx + 3}`}
                width={400}
                height={300}
                className="w-full h-auto transition duration-300 ease-in-out group-hover:brightness-75"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
