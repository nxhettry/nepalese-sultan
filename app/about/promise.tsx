export const OurPromise = () => {
  return (
    <section
      className="py-20 bg-black/90 text-white "
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif">
        OUR <span className="text-orange-500">PROMISE</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        <div className="p-8 bg-orange-50 rounded-xl border border-neutral-800 text-center">
          <h3 className="text-xl font-semibold text-green mb-3">Fresh Daily</h3>
          <p className="text-gray-500">
            Only the freshest cuts, prepared every morning for your family.
          </p>
        </div>
        <div className="p-8 bg-orange-50 rounded-xl border border-neutral-800 text-center">
          <h3 className="text-xl font-semibold text-green mb-3">
            Authentic Cuts
          </h3>
          <p className="text-gray-500">
            Traditional Nepalese style, perfect for curries and grills.
          </p>
        </div>
        <div className="p-8 bg-orange-50 rounded-xl border border-neutral-800 text-center">
          <h3 className="text-xl font-semibold text-green mb-3">
            Friendly Service
          </h3>
          <p className="text-gray-500">
            A welcoming local butcher, always here with a smile.
          </p>
        </div>
      </div>
    </section>
  );
};
