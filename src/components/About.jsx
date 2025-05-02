import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white text-gray-800 px-6 py-12 md:px-16 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
            <span className="block w-10 h-1 bg-red-600"></span>
            <span>We are SATYA MicroCapital Limited</span>
          </h2>
          <p className="text-lg leading-8 tracking-wide">
            <span className="text-4xl font-serif leading-none align-top">
              “
            </span>
            Sales go&nbsp; up and down, but Service lasts forever. We, at SATYA,
            have always believed in taking a ‘double bottom line approach’. This
            forms the core of all our processes and acts as a great motivator
            for our employees. SATYA’s resolute focus on welfare of its clients,
            adding human touch and technology in its operational workflow,
            maintaining complete transparency in dealing has been an integral
            part of organizational infrastructure. Through our efforts here at
            SATYA, we aim to provide{" "}
            <span className="underline decoration-red-500">sustainable</span>{" "}
            and effective digitally-sound solutions to promote entrepreneurship
            among the deprived masses, thereby empowering women, men, and
            children to make a difference in the society. SATYA is and will
            always be regardful of the entitlement and responsibility that comes
            with financing dreams of those associated.
            <span className="text-2xl font-serif">”</span>
          </p>
        </div>

        {/* Image Section */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/ceo.png"
            alt="CEO of SATYA"
            className="rounded-lg shadow-lg"
            width={400}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}
