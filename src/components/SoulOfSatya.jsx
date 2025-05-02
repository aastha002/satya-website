import Image from "next/image";

const values = [
  {
    icon: "soul.png",
    title: "Trust",
    description:
      "To develop a relationship of Trust and Truthfulness within the ecosystem of SATYA",
  },
  {
    icon: "soul.png",
    title: "Transparency",
    description:
      "Aiming to develop a transparent culture across the organization",
  },
  {
    icon: "soul.png",
    title: "Team",
    description:
      "To follow the values of “Team Strength” along with promoting “Coordination and Cooperation” across all verticals",
  },
  {
    icon: "soul.png",
    title: "Technology",
    description:
      "Leveraging modern and digital innovations to enhance operational efficiency and customer outreach",
  },
  {
    icon: "soul.png",
    title: "Training",
    description:
      "To continuously upgrade the knowledge and skills of employees and clients to ensure sustainable growth",
  },
];

export default function SoulOfSatya() {
  return (
    <section className="bg-white px-6 py-16 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="inline-block w-10 h-1 bg-red-600 mr-2 align-middle"></span>
          Soul of SATYA
        </h2>
        <p className="text-gray-700 text-lg mb-12">
          SATYA’s Soul is represented by 5T’s, which are as follows:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center transition hover:shadow-lg"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
