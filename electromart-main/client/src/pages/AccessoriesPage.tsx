import AccessoryCategoryCard from "../components/cards/AccessoryCategoryCard";

const accessoryCategories = [
  {
    title: "Phone Accessories",
    link: "/products?category=accessories&tag=case",
  },
  {
    title: "Laptop Accessories",
    link: "/products?category=accessories&tag=mouse",
  },
  {
    title: "Chargers",
    link: "/products?category=accessories&tag=charger",
  },
  {
    title: "TV Accessories",
    link: "/products?category=accessories&tag=tv",
  },
  {
    title: "Watch Accessories",
    link: "/products?category=accessories&tag=watch",
  },
];

const AccessoriesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Accessories</h1>
      <p className="text-lg text-gray-600 mb-8">
        Find the perfect accessories for your devices.
      </p>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {accessoryCategories.map((category) => (
          <AccessoryCategoryCard
            key={category.title}
            title={category.title}
            link={category.link}
          />
        ))}
      </div>
    </div>
  );
};

export default AccessoriesPage;
