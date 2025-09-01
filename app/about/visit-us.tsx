import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VisitUs = () => {
  return (
    <section
      className="py-20 bg-black text-white"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        COME <span className="text-orange-500">VISIT</span> US
      </h2>
      <div className="max-w-4xl mx-auto text-center px-6">
        <MapPin className="w-10 h-10 text-green-600 mx-auto mb-4" />
        <p className="text-lg mb-2">📍 Located in the heart of Glenroy</p>
        <p className="text-gray-400 mb-6">
          <strong>Opening Hours:</strong> <br />
          Mon–Sat: 8 AM – 7 PM <br />
          Sun: 9 AM – 5 PM
        </p>
        <div className="w-full h-72 rounded-xl overflow-hidden border border-neutral-800 shadow-lg mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.123456789!2d144.9123456!3d-37.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s777%20Pascoe%20Vale%20Road%2C%20Glenroy%20VIC%203046!5e0!3m2!1sen!2sau!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <Button
          className="w-64 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-6 mt-6"
          asChild
        >
          <a
            href="https://maps.google.com/?q=777+Pascoe+Vale+Road,+Glenroy+VIC+3046"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
        </Button>
      </div>
    </section>
  );
};
