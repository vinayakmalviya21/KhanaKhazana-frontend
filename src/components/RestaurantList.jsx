import React from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
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

  return (
    <div className="overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {restaurants.map((restaurant) => (
          <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
            <RestaurantCard {...restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
