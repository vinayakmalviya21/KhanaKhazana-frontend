import React from "react";

const RestaurantCard = ({ photo, name, rating, deliveryTime, popularDishes }) => {
  return (
    <div className="w-64 mx-auto bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105">
      <div className="flex flex-col">
        <div className="h-40">
          <img
            className="w-full h-full object-cover"
            src={photo}
            alt={name}
          />
        </div>
        <div className="p-4">
          <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
            {name}
          </div>
          <div className="flex flex-row mt-2 items-center">
            <div className="text-lg leading-tight font-medium text-black">
              <span>★</span> {rating}
            </div>
            <p className="text-gray-500 ml-2 font-bold">{deliveryTime}</p>
          </div>
          <p className="mt-2 text-gray-700">
            {popularDishes.map((dish, index) => (
              <span key={index}>
                {dish}
                {index < popularDishes.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
