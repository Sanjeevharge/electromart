import React from "react";

const experiences = [
  {
    name: "Photography Workshop",
    description: "Learn how to take stunning photos with your new camera.",
    image:
      "https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Smart Home Setup",
    description: "Get help setting up your smart home devices.",
    image:
      "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Gaming Tournament",
    description: "Compete against other gamers in our annual tournament.",
    image:
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ExperiencesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Experiences</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Join our workshops and events to learn more about our products.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience) => (
          <div
            key={experience.name}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={experience.image}
              alt={experience.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{experience.name}</h2>
              <p className="text-gray-600 mb-4">{experience.description}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesPage;
