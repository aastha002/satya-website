import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3d3d3d] text-white text-sm">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Address Section */}
        <div>
          <h3 className="font-semibold text-white">Corporate Office:</h3>
          <p className="mt-2 text-gray-300">
            SATYA Tower, Plot No 7A, Sector 125, Noida,
            <br />
            Uttar Pradesh–201301
            <br />
            0120–6534444
          </p>

          <h3 className="mt-6 font-semibold text-white">Registered Office:</h3>
          <p className="mt-2 text-gray-300">
            519, 5th Floor, DLF Prime Tower, Block–F,
            <br />
            Okhla Phase–1, New Delhi–110020
            <br />
            011–49724000
          </p>

          <h3 className="mt-6 font-semibold text-orange-400">Working Hours:</h3>
          <p className="mt-2 text-gray-300">
            Monday – Saturday: 9am – 6pm
            <br />
            Sunday: Closed
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="font-semibold text-white mb-2">Links</h3>
          <div className="grid grid-cols-2 text-gray-300 gap-y-2">
            <a href="#">› Home</a>
            <a href="#">› Products</a>
            <a href="#">› News & Updates</a>
            <a href="#">› Careers</a>
            <a href="#">› Life @ SATYA Capital</a>
            <a href="#">› SATYA Shakti Foundation</a>
            <a href="#">› Grievance Redressal</a>
            <a href="#">› SATYA Micro Housing Finance</a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold text-white mb-2">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Submit your mail ID to get update about SATYA
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your mail address"
              className="px-4 py-2 w-full bg-[#2f2f2f] text-white border-none outline-none"
            />
            <button className="bg-gradient-to-r from-orange-600 to-red-600 px-4">
              <ArrowUp className="text-white rotate-45" size={20} />
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Privacy Policy and Terms & Conditions
          </p>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-[#464c53] text-gray-300 px-6 py-6 text-xs text-center">
        Disclaimer: The company is having a valid certificate of registration
        dated February 02, 2018 issued by the Reserve Bank of India under
        section 45 IA of the Reserve Bank of India Act, 1934. However, the RBI
        does not accept any responsibility or guarantee about the present
        position as to the financial soundness of the company or for the
        correctness of any of the statements or representations made or opinions
        expressed by the company and for repayment of deposits/ discharge of
        liability by the company.
      </div>

      {/* Copyright */}
      <div className="bg-white text-center py-6 text-gray-800 text-sm relative">
        <p>CIN: U74899DL1995PLC068688</p>
        <p>© satyamicrocapital.com 2018. All rights reserved.</p>

        {/* Scroll to top button */}
        <button className="absolute bottom-6 right-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-105 transition">
          <ArrowUp />
        </button>
      </div>
    </footer>
  );
}
