import React from "react";

const products = [
  {
    title: "Limited Liability Loans (LLG)",
    description:
      "The LLG loan product is designed for rural women who wish to start or increase their existing micro entrepreneurial activities.",
  },
  {
    title: "Water & Sanitation Loans (WSL)",
    description:
      "The Water & Sanitation Loan product is designed for the people at the bottom of the pyramid to access affordable financing to get into safe drinking and sanitation facilities.",
  },
  {
    title: "MSME (Micro, Small and Medium Enterprises) Business Loan",
    description:
      "SATYA introduced MSME Business Loan (Secured & Unsecured) which is provided to self-employed individuals & people who have been operating small & medium businesses for more than three years in a similar line of business. These loans provide the necessary funds for business expansion, working capital, and other financial needs.",
  },
];

export default function OurProducts() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: "url('/products-bg.png')" }}
    >
      <div className="bg-black bg-opacity-60 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-1 bg-red-500 -ml-12"></span>
            Our Products
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto font-light">
            "Our loan products are specially designed with the aim to fulfill
            the credit requirements for those at the bottom of the pyramid, who
            are looking for working capital, thereby successfully engaging in an
            atmosphere wherein they are empowered financially as well as
            socially."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-xl p-6 shadow-lg transition duration-300 transform hover:bg-red-600 hover:text-white hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-sm transition-colors duration-300">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
