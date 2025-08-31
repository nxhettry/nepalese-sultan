import React from "react";

const TeamSection = () => {
  return (
    <section className="w-full flex flex-col items-center gap-12 py-20 px-4">
      <div className="flex flex-col items-center gap-3 max-w-5xl text-green">
        <h2 className="text-3xl font-thin font-montse">MEET THE TEAM AT ....</h2>
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

      <div className="w-[90%] mx-auto bg-orange min-h-[35rem] rounded-xl p-4"></div>
    </section>
  );
};

export default TeamSection;
