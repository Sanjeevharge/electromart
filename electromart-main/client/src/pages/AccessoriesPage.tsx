import React from 'react';

const AccessoriesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Accessories</h1>
      <p className="text-lg text-gray-600 mb-8">
        Find the perfect accessories for your devices.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Home Appliances</h2>
          {/* Placeholder for home appliance accessories */}
        </div>
        <div className="border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Phones</h2>
          {/* Placeholder for phone accessories */}
        </div>
        <div className="border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Laptops</h2>
          {/* Placeholder for laptop accessories */}
        </div>
        <div className="border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">TVs</h2>
          {/* Placeholder for TV accessories */}
        </div>
        <div className="border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Watches</h2>
          {/* Placeholder for watch accessories */}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;
