import { useQuery } from "@tanstack/react-query";
import Hero from "../components/sections/Hero";
import FeaturedRail from "../components/sections/FeaturedRail";
import CategoryCard from "../components/cards/CategoryCard";
import { fetchCategories, fetchFeaturedProducts } from "../lib/api";
import type { Category, Product } from "../types";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "Showroom",
    description:
      "Visit our showrooms to get a hands-on experience with our products.",
    accent: "#0f172a",
  },
  {
    title: "Experiences",
    description:
      "Join our workshops and events to learn more about our products.",
    accent: "#2f4bff",
  },
];

const HomePage = () => {
  const { data: categories = [], isLoading: loadingCategories } = useQuery<
    Category[]
  >({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { data: featuredData, isLoading: loadingFeatured } = useQuery<{
    featured: Product[];
    newArrivals: Product[];
  }>({
    queryKey: ["featured"],
    queryFn: fetchFeaturedProducts,
  });

  return (
    <div className="space-y-16">
      <Hero />

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Collections
            </p>
            <h2 className="font-display text-3xl text-midnight">
              Curated worlds of tech
            </h2>
          </div>
        </div>
        {loadingCategories ? (
          <p className="text-sm text-slate-500">Styling categories...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        )}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {experiences.map((experience) => (
          <article
            key={experience.title}
            className="rounded-3xl border bg-white/70 p-6 shadow-soft-xl"
            style={{ borderColor: `${experience.accent}33` }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Experience
            </p>
            <h3 className="font-display text-2xl text-midnight">
              {experience.title}
            </h3>
            <p className="text-sm text-slate-500">{experience.description}</p>
          </article>
        ))}
      </section>

      <section>
        {loadingFeatured ? (
          <p className="text-sm text-slate-500">Polishing showcases...</p>
        ) : (
          <FeaturedRail
            featured={featuredData?.featured}
            newArrivals={featuredData?.newArrivals}
          />
        )}
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Deals
            </p>
            <h2 className="font-display text-3xl text-midnight">
              Today's Deals
            </h2>
          </div>
          <Link
            to="/products?sort=discount"
            className="text-sm font-semibold text-blue-600"
          >
            View all
          </Link>
        </div>
        {loadingFeatured ? (
          <p className="text-sm text-slate-500">Fetching deals...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredData?.featured?.slice(0, 4).map((product) => (
              <div
                key={product._id}
                className="rounded-3xl border border-slate-100 bg-white/80 p-4 shadow-sm backdrop-blur"
              >
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className="h-48 w-full object-cover rounded-2xl"
                />
                <div className="p-3">
                  <h3 className="text-lg font-semibold text-midnight">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {product.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-display text-midnight">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                    <Link
                      to={`/products/${product.slug}`}
                      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-midnight transition hover:border-midnight hover:bg-midnight hover:text-white"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Shopping
            </p>
            <h2 className="font-display text-3xl text-midnight">Buy Again</h2>
          </div>
          <Link to="/orders" className="text-sm font-semibold text-blue-600">
            View all
          </Link>
        </div>
        {/* Add logic to display previously ordered items */}
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Accessories
            </p>
            <h2 className="font-display text-3xl text-midnight">
              Accessorize Your Tech
            </h2>
          </div>
          <Link
            to="/products?category=accessories"
            className="text-sm font-semibold text-blue-600"
          >
            View all
          </Link>
        </div>
        {/* Add logic to display accessories */}
      </section>
    </div>
  );
};

export default HomePage;
