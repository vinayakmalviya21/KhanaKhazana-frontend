import React from "react";
import { useParams } from "react-router-dom";
import DishCard from "./DishCard";

const restaurants = [
  {
    id: 1,
    name: "Delicious Eats",
    photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    popularDishes: ["Pasta Carbonara", "Margherita Pizza", "Caesar Salad"],
    description: "A place to enjoy delightful meals.",
    dishes: [
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Pasta Carbonara",
        price: 12.99,
        description: "A classic pasta dish with a creamy sauce and bacon.",
        rating: 4.5,
      },
      {
        photo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        name: "Margherita Pizza",
        price: 10.99,
        description:
          "A simple yet delicious pizza topped with fresh tomatoes and mozzarella.",
        rating: 4.2,
      },
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Caesar Salad",
        price: 8.99,
        description:
          "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        rating: 4.0,
      },
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Pasta Carbonara",
        price: 12.99,
        description: "A classic pasta dish with a creamy sauce and bacon.",
        rating: 4.5,
      },
      {
        photo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        name: "Margherita Pizza",
        price: 10.99,
        description:
          "A simple yet delicious pizza topped with fresh tomatoes and mozzarella.",
        rating: 4.2,
      },
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Caesar Salad",
        price: 8.99,
        description:
          "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        rating: 4.0,
      },
    ],
  },
  {
    id: 2,
    name: "Khao Piyo",
    photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    rating: 4.5,
    deliveryTime: "20-25 mins",
    popularDishes: ["Pasta Carbonara", "Margherita Pizza", "Caesar Salad"],
    description: "A place to enjoy delightful meals.",
    dishes: [
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Khaaasdba Carbonara",
        price: 12.99,
        description: "A classic pasta dish with a creamy sauce and bacon.",
        rating: 4.5,
      },
      {
        photo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        name: "Margherita Pizza",
        price: 10.99,
        description:
          "A simple yet delicious pizza topped with fresh tomatoes and mozzarella.",
        rating: 4.2,
      },
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Caesar Salad",
        price: 8.99,
        description:
          "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        rating: 4.0,
      },
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Pasta Carbonara",
        price: 12.99,
        description: "A classic pasta dish with a creamy sauce and bacon.",
        rating: 4.5,
      },
      {
        photo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        name: "Margherita Pizza",
        price: 10.99,
        description:
          "A simple yet delicious pizza topped with fresh tomatoes and mozzarella.",
        rating: 4.2,
      },
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Caesar Salad",
        price: 8.99,
        description:
          "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        rating: 4.0,
      },
    ],
  },
  {
    id: 3,
    name: "Foodie Eats",
    photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    rating: 4,
    deliveryTime: "20-25 mins",
    popularDishes: ["Pasta Carbonara", "Margherita Pizza", "Caesar Salad"],
    description: "A place to enjoy delightful meals.",
    dishes: [
      {
        photo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        name: "Noodles Carbonara",
        price: 12.99,
        description: "A classic pasta dish with a creamy sauce and bacon.",
        rating: 4.5,
      },
      {
        photo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        name: "Margherita Pizza",
        price: 10.99,
        description:
          "A simple yet delicious pizza topped with fresh tomatoes and mozzarella.",
        rating: 4.2,
      },
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Caesar Salad",
        price: 8.99,
        description:
          "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        rating: 4.0,
      },
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Pasta Carbonara",
        price: 12.99,
        description: "A classic pasta dish with a creamy sauce and bacon.",
        rating: 4.5,
      },
      {
        photo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        name: "Margherita Pizza",
        price: 10.99,
        description:
          "A simple yet delicious pizza topped with fresh tomatoes and mozzarella.",
        rating: 4.2,
      },
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Caesar Salad",
        price: 8.99,
        description:
          "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        rating: 4.0,
      },
    ],
  },
  {
    id: 4,
    name: "Khana Khao",
    photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    rating: 4,
    deliveryTime: "20-25 mins",
    popularDishes: ["Pasta Carbonara", "Margherita Pizza", "Caesar Salad"],
    description: "A place to enjoy delightful meals.",
    dishes: [
      {
        photo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        name: "Burger Carbonara",
        price: 12.99,
        description: "A classic pasta dish with a creamy sauce and bacon.",
        rating: 4.5,
      },
      {
        photo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        name: "Margherita Pizza",
        price: 10.99,
        description:
          "A simple yet delicious pizza topped with fresh tomatoes and mozzarella.",
        rating: 4.2,
      },
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Caesar Salad",
        price: 8.99,
        description:
          "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        rating: 4.0,
      },
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Pasta Carbonara",
        price: 12.99,
        description: "A classic pasta dish with a creamy sauce and bacon.",
        rating: 4.5,
      },
      {
        photo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        name: "Margherita Pizza",
        price: 10.99,
        description:
          "A simple yet delicious pizza topped with fresh tomatoes and mozzarella.",
        rating: 4.2,
      },
      {
        photo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Caesar Salad",
        price: 8.99,
        description:
          "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        rating: 4.0,
      },
    ],
  },
];

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>
      <p className="mt-2 text-gray-700">{restaurant.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {restaurant.dishes.map((dish, index) => (
          <DishCard key={index} {...dish} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;
