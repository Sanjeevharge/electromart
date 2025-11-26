import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/cards/ProductCard';
import { fetchCategories, fetchProducts } from '../lib/api';
import type { Category, Product } from '../types';

const sortOptions = [
  { label: 'Newest', value: 'new' },
  { label: 'Price • Low to High', value: 'price-asc' },
  { label: 'Price • High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
];

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useMemo(
    () => ({
      category: searchParams.get('category') || undefined,
      search: searchParams.get('search') || undefined,
      sort: searchParams.get('sort') || undefined,
      maxPrice: searchParams.get('maxPrice') || undefined,
    }),
    [searchParams]
  );

  const [priceUpperBound, setPriceUpperBound] = useState(() => Number(filters.maxPrice) || 4000);
  const [searchValue, setSearchValue] = useState(filters.search || '');

  useEffect(() => {
    setSearchValue(filters.search || '');
  }, [filters.search]);

  useEffect(() => {
    setPriceUpperBound(Number(filters.maxPrice) || 4000);
  }, [filters.maxPrice]);

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
  });

  const updateParam = (key: string, value?: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }
    setSearchParams(nextParams);
  };

  return (
    <div className="space-y-10">
      <section className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-soft-xl backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Showroom</p>
            <h1 className="font-display text-4xl text-midnight">All studio releases</h1>
          </div>
          <div className="flex flex-wrap gap-4">
            <input
              type="search"
              placeholder="Search catalog"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              onBlur={(event) => updateParam('search', event.target.value || undefined)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  updateParam('search', event.currentTarget.value || undefined);
                }
              }}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm"
            />
            <select
              className="rounded-full border border-slate-200 px-4 py-2 text-sm"
              value={filters.category || ''}
              onChange={(event) => updateParam('category', event.target.value || undefined)}
            >
              <option value="">All categories</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <select
              className="rounded-full border border-slate-200 px-4 py-2 text-sm"
              value={filters.sort || 'new'}
              onChange={(event) => updateParam('sort', event.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-500">
            Displaying <span className="font-semibold text-midnight">{products.length}</span> editions
          </div>
          <div className="flex items-center gap-4">
            <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Max price (₹)</label>
            <input
              type="range"
              min="5000"
              max="150000"
              step="5000"
              value={priceUpperBound}
              onChange={(event) => {
                const value = Number(event.target.value);
                setPriceUpperBound(value);
                updateParam('maxPrice', value.toString());
              }}
              className="w-64"
            />
            <span className="text-sm font-semibold text-midnight">₹{priceUpperBound.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </section>

      {isLoading ? (
        <p className="text-sm text-slate-500">Composing lineup...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;

