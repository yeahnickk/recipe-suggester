import React from 'react';
import { BookOpen, Timer, Flame, ChefHat } from 'lucide-react';

const SavedRecipesPage = ({ onRecipeClick }) => {
  const savedRecipes = [
    {
      id: 'stir-fry',
      name: 'Asian Chicken Stir Fry',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
      cookTime: 25,
      calories: 450,
      difficulty: 'Easy',
      cuisine: 'Asian Fusion'
    },
    // Add more saved recipes
  ];

  return (
    <div className="px-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">Saved Recipes</h1>
      <div className="space-y-4">
        {savedRecipes.map(recipe => (
          <div
            key={recipe.id}
            onClick={() => onRecipeClick(recipe)}
            className="bg-white rounded-xl p-4 cursor-pointer hover:shadow-md transition-all"
          >
            <div className="flex gap-4">
              <img 
                src={recipe.image} 
                alt={recipe.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{recipe.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{recipe.cuisine}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{recipe.cookTime} min</span>
                  <span>{recipe.calories} cal</span>
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedRecipesPage; 