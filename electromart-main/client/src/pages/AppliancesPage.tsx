import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../lib/api';
import type { Category } from '../types';
import CategoryCard from '../components/cards/CategoryCard';

const AppliancesPage = () => {
  const { data: categories = [], isLoading: loadingCategories } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Appliances</h1>
      <p className="text-lg text-gray-600 mb-8">
        Browse our wide range of appliances.
      </p>
      {loadingCategories ? (
        <p className="text-sm text-slate-500">Loading categories...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliancesPage;
