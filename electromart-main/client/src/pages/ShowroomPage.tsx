import React from "react";

const showrooms = [
  {
    name: "Mumbai",
    address: "123, Main Street, Mumbai, Maharashtra",
    image:
      "https://images.pexels.com/photos/1428277/pexels-photo-1428277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Delhi",
    address: "456, Park Avenue, Delhi, Delhi",
    image:
      "https://images.pexels.com/photos/226589/pexels-photo-226589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Bangalore",
    address: "789, Tech Park, Bangalore, Karnataka",
    image:
      "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ShowroomPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Showrooms</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Visit our showrooms to get a hands-on experience with our products.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {showrooms.map((showroom) => (
          <div
            key={showroom.name}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={showroom.image}
              alt={showroom.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{showroom.name}</h2>
              <p className="text-gray-600 mb-4">{showroom.address}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book a Visit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowroomPage;
