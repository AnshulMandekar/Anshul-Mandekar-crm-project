import React from "react";
import Navbar from "./property_listing/Navbar";
import PropertyCard from "./property_listing/PropertyCard";
// import Footer from "./property_listing/Footer";

const properties = [
  {
    title: "Modern Luxury Apartment",
    location: "Downtown, New York",
    stage: 1,
    beds: 3,
    baths: 2,
    sqft: "1,500",
    amenities: ["Pool", "Gym", "Parking"],
    hotLeads: 12,
    warmLeads: 8,
    image:
      "https://creatie.ai/ai/api/search-image?query=A modern luxury apartment interior with an open concept living room, floor-to-ceiling windows, and contemporary furniture. The space features high-end finishes, neutral color palette, and natural light flooding in. Clean and minimalist design with white walls and wooden accents.",
  },
  {
    title: "Luxury Villa",
    location: "Beverly Hills, LA",
    stage: 2,
    beds: 5,
    baths: 4,
    sqft: "4,200",
    amenities: ["Pool", "Garden", "Garage"],
    hotLeads: 15,
    warmLeads: 10,
    image:
      "https://creatie.ai/ai/api/search-image?query=A spacious modern villa exterior with Mediterranean architecture, featuring a large swimming pool, manicured garden, and elegant outdoor lighting. White stucco walls, terracotta roof tiles, and palm trees create a luxurious resort-like atmosphere.",
  },
  {
    title: "City View Penthouse",
    location: "Manhattan, New York",
    stage: 1,
    beds: 4,
    baths: 3,
    sqft: "2,800",
    amenities: ["Gym", "Lounge", "Parking"],
    hotLeads: 8,
    warmLeads: 6,
    image:
      "https://creatie.ai/ai/api/search-image?query=A penthouse apartment with stunning city views through floor-to-ceiling windows. Modern kitchen with marble countertops, sleek appliances, and an open floor plan. High-end finishes throughout with a contemporary design aesthetic.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Property Listings
          </h1>
          <p className="mt-2 text-gray-600">
            Showing {properties.length} available properties
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <i className="fas fa-search text-gray-400"></i>
              </span>
              <input
                type="text"
                className="!rounded-button pl-10 w-full border-gray-300"
                placeholder="Search by location, property name..."
              />
            </div>
            <div className="relative">
              <select className="rounded-md w-full border border-gray-300 hover:border-gray-400 px-3 py-2">
                <option>Price Range</option>
                <option>$100k - $200k</option>
                <option>$200k - $500k</option>
                <option>$500k+</option>
              </select>
            </div>
            <div className="relative">
              <select className="rounded-md w-full border border-gray-300 hover:border-gray-400 px-3 py-2">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Villa</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>

        <div className="flex justify-center">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <i className="fas fa-chevron-left"></i>
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-custom text-sm font-medium text-white"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              3
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </nav>
        </div>
      </main>

    </div>
  );
}

export default App;
