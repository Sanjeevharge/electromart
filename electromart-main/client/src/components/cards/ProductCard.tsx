import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '../../types';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-3xl border border-slate-100 bg-white/80 p-4 shadow-sm backdrop-blur"
    >
      <Link to={`/products/${product.slug}`} className="relative block overflow-hidden rounded-2xl">
        <img
          src={product.heroImage}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {product.badges?.length ? (
          <div className="absolute left-4 top-4 flex gap-2">
            {product.badges.map((badge) => (
              <span key={badge} className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-midnight">
                {badge}
              </span>
            ))}
          </div>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{product.brand}</p>
          <h3 className="text-lg font-semibold text-midnight">{product.name}</h3>
          <p className="text-sm text-slate-500">{product.shortDescription}</p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">From</p>
            <p className="text-xl font-display text-midnight">₹{product.price.toLocaleString('en-IN')}</p>
          </div>
          <Link
            to={`/products/${product.slug}`}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-midnight transition hover:border-midnight hover:bg-midnight hover:text-white"
          >
            View
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;

