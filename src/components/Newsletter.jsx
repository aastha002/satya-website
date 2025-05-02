import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";

export default function NewsletterSection() {
  return (
    <section className="bg-[#fcfbfa] py-20 px-6 md:px-20 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column - Subscription */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff4a24] leading-snug">
            Subscribe to our <br /> Newsletter
          </h2>

          <div className="mt-8 flex shadow-md">
            <input
              type="email"
              placeholder="Your mail address"
              className="w-full px-4 py-3 bg-[#3b3b3b] text-white placeholder-white focus:outline-none"
            />
            <button className="bg-gradient-to-r from-[#e3512f] to-[#cb1c2c] px-6 flex items-center justify-center text-white">
              <FaPaperPlane className="text-lg" />
            </button>
          </div>
        </div>

        {/* Right Column - Newsletter Image */}
        <div className="flex-1 flex justify-center relative">
          <Image
            src="news.png"
            alt="Newsletter Preview"
            width={500}
            height={500}
            className="object-contain"
          />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 border border-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-20 text-center">
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-[2px] bg-[#ff4a24]" />
          <h3 className="text-3xl md:text-4xl font-extrabold text-black">
            Witness our journey through the years…
          </h3>
        </div>
        <p className="mt-4 text-lg text-gray-700">Together Towards Tomorrow!</p>
      </div>

      {/* Scroll to top button */}
      <button className="fixed bottom-6 right-6 bg-[#cb1c2c] text-white p-3 rounded-full shadow-lg hover:bg-[#a51923] transition">
        ↑
      </button>
    </section>
  );
}
