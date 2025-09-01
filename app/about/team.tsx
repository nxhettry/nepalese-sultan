import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "John Doe",
    role: "Delivery",
    image: "/team.jpg",
  },
  {
    name: "John Doe",
    role: "Delivery",
    image: "/team.jpg",
  },
  {
    name: "John Doe",
    role: "Delivery",
    image: "/team.jpg",
  },
  {
    name: "John Doe",
    role: "Delivery",
    image: "/team.jpg",
  },
  {
    name: "John Doe",
    role: "Delivery",
    image: "/team.jpg",
  },
  {
    name: "John Doe",
    role: "Delivery",
    image: "/team.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="w-full flex flex-col items-center gap-12 py-20 px-4">
      <div className="flex flex-col items-center gap-3 max-w-5xl text-green">
        <h2 className="text-3xl font-thin font-montse">
          MEET THE TEAM AT ....
        </h2>
        <h1 className="text-4xl font-bold font-serif">
          NEPALESE <span className="text-orange">SULTAN </span>BUTCHER
        </h1>
        <p className="text-base text-gray-500 text-center font-montse">
          The Nepalese Butcher Shop is a new business in the heart of Glenroy,
          and we{"'"}re ready to serve you. We are dedicated to providing a wide
          selection of quality meats with friendly and professional service. We
          look forward to becoming your go-to butcher shop.
        </p>
      </div>

      <div className="w-[90%] mx-auto bg-orange-50  rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TEAM_MEMBERS.map((member, idx) => (
          <div
            key={idx}
            className="relative border-orange-500 border-b-2 rounded-lg flex justify-center items-center"
          >
            <Image
              src={member.image}
              height={400}
              width={400}
              alt="Team Photo"
              className={`object-cover rounded-lg`}
            />
            <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl pointer-events-none" />
            <span className="absolute bottom-6 left-[50%] translate-x-[-50%] text-white text-lg font-bold drop-shadow">
              {member.name}
            </span>
            <span className="absolute bottom-2 left-[50%] translate-x-[-50%] text-white text-sm font-semibold drop-shadow">
              {"("}
              {member.role}
              {")"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
