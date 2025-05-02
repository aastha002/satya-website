"use client";
import { useState } from "react";

export default function Aim() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-[#f7f4f4] py-12 px-6 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Vision Card */}
        <div className="bg-white text-center p-10 shadow-xl relative rounded">
          <img src="aim.png" alt="Vision Icon" className="mx-auto mb-6 w-16" />
          <h3 className="text-2xl font-bold mb-2">Vision</h3>
          <div className="w-10 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto my-2" />
          <p className="text-gray-700 mt-4">
            “To be a catalyst for the socio-economic upliftment & economic
            empowerment of 10 million households by the year 2030.”
          </p>
          <img
            src="aim.png"
            alt=""
            className="absolute bottom-4 right-4 opacity-10 w-20"
          />
        </div>

        {/* Mission Card  */}
        <div
          className="relative shadow-xl rounded overflow-hidden cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src="aim.png"
            alt="Mission"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out flex items-center justify-center px-4 ${
              hovered ? "bg-black bg-opacity-80 text-white" : "bg-transparent"
            }`}
          >
            {hovered && (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Mission</h3>
                <p className="text-lg leading-relaxed">
                  “सीमित सुविधा प्राप्त लोगों की आजीविका एवं उद्यम-विकास हेतु,
                  बहुद्दृष्टिकोण के साथ, एक प्राथमिक विकल्प होना।”
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Motto Card */}
        <div className="bg-white text-center p-10 shadow-xl relative rounded">
          <img src="/img.png" alt="Motto Icon" className="mx-auto mb-6 w-16" />
          <h3 className="text-2xl font-bold mb-2">Motto</h3>
          <div className="w-10 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto my-2" />
          <p className="text-gray-700 mt-4">“May All Be Happy.”</p>
          <img
            src="aim.png"
            alt=""
            className="absolute bottom-4 right-4 opacity-10 w-20"
          />
        </div>
      </div>
    </div>
  );
}
