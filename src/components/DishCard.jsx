import React from "react";

const DishCard = ({ photo, name, price, description, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img className="w-full h-32 object-cover" src={photo} alt={name} />
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 mt-1">₹{price.toFixed(2)}</p>
        <p className="text-gray-700 mt-2 flex-1">{description}</p>
        <div className="text-lg leading-tight font-medium text-black">
          <span>★</span> {rating}
        </div>
        <button className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DishCard;
