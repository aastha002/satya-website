export default function Facebookpost() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Facebook Image */}
        <div className="flex justify-center">
          <img
            src="img.png"
            alt="Facebook Connect Section"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>

        {/* m-swasth Logo */}
        <div className="flex justify-center">
          <img
            src="facebooklogo.png"
            alt="m-swasth Logo"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
