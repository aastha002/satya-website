import { FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Fixed Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="banner.png"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-80"
        />
      </div>

      {/* Overlay content */}
      <div className="bg-black/50 w-full py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              <span className="border-l-4 border-[#ff4a24] pl-4">
                Get in touch for any kind of information
              </span>
            </h2>

            <div className="space-y-10">
              {/* Corporate Office */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl" />
                <div>
                  <h3 className="font-bold text-xl">Corporate Office:</h3>
                  <p>
                    SATYA Tower, Plot No 7A, Sector 125, Noida, Uttar Pradesh -
                    201301
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-2xl" />
                <div>
                  <h3 className="font-bold text-xl">Call:</h3>
                  <p>0120-6534444</p>
                </div>
              </div>

              {/* Registered Office */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl" />
                <div>
                  <h3 className="font-bold text-xl">Registered Office:</h3>
                  <p>
                    519, 5th Floor, DLF Prime Tower, Block- F, Okhla Phase-1,
                    New Delhi - 110020
                  </p>
                </div>
              </div>

              {/* Call 2 */}
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-2xl" />
                <div>
                  <h3 className="font-bold text-xl">Call:</h3>
                  <p>011-49724000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <h2 className="text-4xl font-light mb-10 text-right">
              Leave us a message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="bg-transparent border border-white px-4 py-3 placeholder-white text-white w-full"
                />
                <input
                  type="email"
                  placeholder="Your Mail *"
                  className="bg-transparent border border-white px-4 py-3 placeholder-white text-white w-full"
                />
                <input
                  type="text"
                  placeholder="Phone Number *"
                  className="bg-transparent border border-white px-4 py-3 placeholder-white text-white w-full"
                />
                <input
                  type="text"
                  placeholder="Address *"
                  className="bg-transparent border border-white px-4 py-3 placeholder-white text-white w-full"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message..."
                className="bg-transparent border border-white px-4 py-3 placeholder-white text-white w-full"
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-[#e3512f] to-[#cb1c2c] text-white px-10 py-3 mt-4 flex items-center justify-center gap-2 text-lg font-semibold"
              >
                <FaPaperPlane />
                Send now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button className="fixed bottom-6 right-6 bg-gradient-to-r from-[#e3512f] to-[#cb1c2c] text-white p-4 rounded-full shadow-lg hover:scale-105 transition">
        ↑
      </button>
    </section>
  );
}
