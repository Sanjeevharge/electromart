import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '../lib/api';
import { useCart } from '../store/CartContext';
import ProductCard from '../components/cards/ProductCard';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedStorage, setSelectedStorage] = useState<string | undefined>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => fetchProduct(slug!),
    enabled: Boolean(slug),
  });

  const product = data?.data;
  const related = data?.related ?? [];

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0]);
      setSelectedStorage(product.storageOptions?.[0]);
    }
  }, [product]);

  const canAddToCart = useMemo(() => Boolean(product && product.stock > 0), [product]);

  if (isLoading) {
    return <p className="text-sm text-slate-500">Curating presentation...</p>;
  }

  if (isError || !product) {
    return <p className="text-sm text-red-600">Product unavailable.</p>;
  }

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({
      id: `${product._id}-${selectedColor}-${selectedStorage}`,
      productId: product._id,
      name: product.name,
      price: product.price,
      image: product.heroImage,
      quantity: 1,
      slug: product.slug,
      color: selectedColor,
      storage: selectedStorage,
    });
  };

  return (
    <div className="space-y-16">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-soft-xl backdrop-blur">
          <img src={product.heroImage} alt={product.name} className="w-full rounded-3xl object-cover" />
          <div className="grid gap-4 sm:grid-cols-3">
            {product.gallery?.map((image) => (
              <img
                key={image.url}
                src={image.url}
                alt={image.alt}
                className="h-32 w-full rounded-2xl object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="space-y-6 rounded-[32px] border border-white/60 bg-white/90 p-8 shadow-soft-xl">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{product.brand}</p>
            <h1 className="font-display text-4xl text-midnight">{product.name}</h1>
            <p className="mt-2 text-sm text-slate-500">{product.shortDescription}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-500">Price in India</p>
            <div className="flex items-end gap-2">
              <p className="text-4xl font-display text-midnight">₹{product.price.toLocaleString('en-IN')}</p>
              {product.originalPrice && (
                <p className="text-sm text-slate-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </p>
              )}
            </div>
          </div>

          {product.colors?.length ? (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Finish</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full border px-4 py-2 text-sm ${
                      color === selectedColor
                        ? 'border-midnight bg-midnight text-white'
                        : 'border-slate-200 text-midnight'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {product.storageOptions?.length ? (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Capacity</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.storageOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedStorage(option)}
                    className={`rounded-full border px-4 py-2 text-sm ${
                      option === selectedStorage
                        ? 'border-midnight bg-midnight text-white'
                        : 'border-slate-200 text-midnight'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <button
            onClick={handleAddToCart}
            disabled={!canAddToCart}
            className="w-full rounded-full bg-midnight py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {canAddToCart ? 'Add to capsule' : 'Temporarily unavailable'}
          </button>

          <div className="space-y-3 rounded-2xl bg-slate-50 p-4">
            {product.highlights?.map((highlight) => (
              <p key={highlight} className="text-sm text-slate-600">
                • {highlight}
              </p>
            ))}
          </div>
        </div>
      </div>

      <section className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-soft-xl">
        <h2 className="font-display text-3xl text-midnight">Specifications</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {product.specs?.map((spec) => (
            <div key={spec.label} className="rounded-2xl border border-slate-100 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{spec.label}</p>
              <p className="text-lg text-midnight">{spec.value}</p>
            </div>
          ))}
        </div>
      </section>

      {related.length ? (
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-midnight">Kindred pieces</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default ProductDetailPage;

