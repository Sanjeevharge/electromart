import React from 'react';

const BuyAgainPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Buy Again</h1>
      <p className="text-lg text-gray-600 mb-8">
        This is where you can see a list of items you've previously ordered.
      </p>
      {/* Placeholder for order history */}
      <div className="border border-gray-200 rounded-lg p-8 text-center">
        <p className="text-gray-500">You have no previous orders.</p>
      </div>
    </div>
  );
};

export default BuyAgainPage;
