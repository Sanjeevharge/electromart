import { useQuery } from '@tanstack/react-query';
import Hero from '../components/sections/Hero';
import FeaturedRail from '../components/sections/FeaturedRail';
import CategoryCard from '../components/cards/CategoryCard';
import { fetchCategories, fetchFeaturedProducts } from '../lib/api';
import type { Category, Product } from '../types';

const experiences = [
  {
    title: 'Midnight Studio Session',
    description: 'Private demonstrations with acoustic staging and cinematic projection.',
    accent: '#0f172a',
  },
  {
    title: 'Concierge Delivery',
    description: 'White-glove arrival within 24h in 30+ cities worldwide.',
    accent: '#2f4bff',
  },
  {
    title: 'Bespoke Upgrades',
    description: 'Personal engravings, tuned sound signatures, curated accessories.',
    accent: '#f59e0b',
  },
];

const HomePage = () => {
  const { data: categories = [], isLoading: loadingCategories } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const { data: featuredData, isLoading: loadingFeatured } = useQuery<{ featured: Product[]; newArrivals: Product[] }>(
    {
    queryKey: ['featured'],
    queryFn: fetchFeaturedProducts,
    }
  );

  return (
    <div className="space-y-16">
      <Hero />

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Collections</p>
            <h2 className="font-display text-3xl text-midnight">Curated worlds of tech</h2>
          </div>
        </div>
        {loadingCategories ? (
          <p className="text-sm text-slate-500">Styling categories...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        )}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {experiences.map((experience) => (
          <article
            key={experience.title}
            className="rounded-3xl border bg-white/70 p-6 shadow-soft-xl"
            style={{ borderColor: `${experience.accent}33` }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Experience</p>
            <h3 className="font-display text-2xl text-midnight">{experience.title}</h3>
            <p className="text-sm text-slate-500">{experience.description}</p>
          </article>
        ))}
      </section>

      <section>
        {loadingFeatured ? (
          <p className="text-sm text-slate-500">Polishing showcases...</p>
        ) : (
          <FeaturedRail featured={featuredData?.featured} newArrivals={featuredData?.newArrivals} />
        )}
      </section>
    </div>
  );
};

export default HomePage;

