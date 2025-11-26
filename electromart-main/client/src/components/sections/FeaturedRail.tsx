import type { Product } from '../../types';
import ProductCard from '../cards/ProductCard';

type Props = {
  featured?: Product[];
  newArrivals?: Product[];
};

const FeaturedRail = ({ featured = [], newArrivals = [] }: Props) => (
  <section className="space-y-10">
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Featured capsules</p>
          <h2 className="font-display text-3xl text-midnight">Bespoke flagship edit</h2>
        </div>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>

    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">New ateliers</p>
          <h2 className="font-display text-3xl text-midnight">Avant-garde arrivals</h2>
        </div>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newArrivals.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedRail;

