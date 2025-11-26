import { Link } from 'react-router-dom';
import type { Category } from '../../types';

type Props = {
  category: Category;
};

const CategoryCard = ({ category }: Props) => (
  <Link
    to={`/products?category=${encodeURIComponent(category.name)}`}
    className="group overflow-hidden rounded-3xl border border-white/40 bg-white/50 shadow-soft-xl backdrop-blur"
  >
    <div className="relative h-60 overflow-hidden">
      <img
        src={category.heroImage}
        alt={category.name}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/20" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <p className="text-xs uppercase tracking-[0.3em] text-white/70">Collection</p>
        <h3 className="font-display text-2xl">{category.name}</h3>
        <p className="text-sm text-white/80">{category.description}</p>
      </div>
    </div>
  </Link>
);

export default CategoryCard;

