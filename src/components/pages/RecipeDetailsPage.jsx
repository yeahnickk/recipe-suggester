import React from 'react';
import { ChevronLeft, Timer, Flame, ChefHat, Users, Clock } from 'lucide-react';

const RecipeDetailsPage = ({ recipe, onBackClick }) => {
  const ingredients = [
    { name: 'Chicken Breast', amount: '2', unit: 'pieces' },
    { name: 'Soy Sauce', amount: '3', unit: 'tbsp' },
    { name: 'Sesame Oil', amount: '1', unit: 'tbsp' },
    { name: 'Garlic', amount: '3', unit: 'cloves' },
    { name: 'Ginger', amount: '1', unit: 'inch' },
    { name: 'Rice', amount: '1', unit: 'cup' },
    { name: 'Vegetables', amount: '2', unit: 'cups' }
  ];

  const instructions = [
    {
      step: 1,
      text: 'Slice chicken breast into thin strips and marinate with soy sauce and sesame oil for 15 minutes.',
      time: '15 min'
    },
    {
      step: 2,
      text: 'Cook rice according to package instructions.',
      time: '20 min'
    },
    {
      step: 3,
      text: 'Heat oil in a large pan over medium-high heat. Add garlic and ginger.',
      time: '2 min'
    },
    {
      step: 4,
      text: 'Add chicken and cook until golden brown.',
      time: '8 min'
    },
    {
      step: 5,
      text: 'Add vegetables and stir-fry until tender-crisp.',
      time: '5 min'
    }
  ];

  return (
    <div className="h-full bg-[#F5F5F7] overflow-y-auto pb-20">
      {/* Header with Image */}
      <div className="relative h-64">
        <img 
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
        <button 
          onClick={onBackClick}
          className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Recipe Info */}
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">{recipe.name}</h1>
        <p className="text-gray-500 mb-4">{recipe.cuisine}</p>
        
        {/* Quick Stats */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-gray-400" />
            <span className="text-sm">{recipe.cookTime} min</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-gray-400" />
            <span className="text-sm">{recipe.calories} cal</span>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat className="w-5 h-5 text-gray-400" />
            <span className="text-sm">{recipe.difficulty}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-400" />
            <span className="text-sm">4 servings</span>
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Ingredients</h2>
          <div className="bg-white rounded-xl p-4">
            <div className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{ingredient.name}</span>
                  <span className="text-gray-500">
                    {ingredient.amount} {ingredient.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions - Updated styling */}
        <div className="mb-6 px-4">
          <h2 className="text-lg font-semibold mb-4">Instructions</h2>
          <div className="space-y-4">
            {instructions.map((instruction) => (
              <div 
                key={instruction.step} 
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-500 font-medium">{instruction.step}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-2 leading-relaxed">{instruction.text}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{instruction.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add bottom padding to ensure last item is visible */}
        <div className="h-20" />
      </div>
    </div>
  );
};

export default RecipeDetailsPage; 