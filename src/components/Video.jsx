export default function Video() {
  return (
    <section className="relative bg-white py-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">
          Witness our journey through the years...
        </h2>
        <p className="text-lg text-gray-600 mb-8">Together Towards Tomorrow!</p>
      </div>

      {/* Video Section */}
      <div className="relative max-w-5xl mx-auto">
        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="video.mp4"
            title="Journey Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <img
            src="/satya-logo.png"
            alt="Satya Logo"
            className="absolute top-4 right-4 w-28 bg-white bg-opacity-70 p-1 rounded"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-4 bg-orange-600 flex items-center">
          <div className="w-full h-1 bg-orange-700 relative">
            <div className="absolute top-0 left-1/2 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer -translate-x-1/2 -translate-y-1/2">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
