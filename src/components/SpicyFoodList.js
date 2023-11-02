import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
  }

  // !remove element from arrays in state/based on id
  const handleRemoveFood = (id) => {
    return foods.filter((food) => {
      return food.id !== id;
    });
  };

  // !update elements in arrays in state/based on id
  const handleUpdateFood = (id) => {
    return foods.map((food) => {
      if (food.id === id) {
        return { ...food, heatLevel: food.heatLevel + 1 };
      } else {
        return food;
      }
    });
  };
  const foodList = foods.map((food) => (
    <li
      key={food.id}
      // onClick={() => {
      //   handleRemoveFood(food.id);
      // }}
      onClick={() => {
        handleUpdateFood(food.id);
      }}
    >
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
