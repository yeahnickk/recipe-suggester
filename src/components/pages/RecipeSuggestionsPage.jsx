import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Spinner from '../Spinner';

const RecipeSuggestionsPage = ({ 
  detectedItems, 
  recipes, 
  onBackClick,
  onRecipeClick,
  isLoading
}) => {
  return (
    <div className="h-full bg-[#F5F5F7] flex flex-col">
      {/* Header - Fixed at top */}
      <div className="bg-white px-4 py-6 flex items-center gap-4 sticky top-0 z-10">
        <button onClick={onBackClick}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">Recipe Suggestions</h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Ingredients Section */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span>Found {detectedItems.length} Ingredients</span>
            <button className="text-blue-500 text-sm">Show All</button>
          </div>
        </div>

        {/* Perfect Matches Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Perfect Matches</h2>
          <p className="text-gray-500 text-sm mb-4">Recipes you can make right now</p>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl">
              <Spinner size="large" />
              <p className="mt-4 text-gray-500">Finding the perfect recipes...</p>
            </div>
          ) : (
            <div className="space-y-4 pb-20">
              {recipes.map((recipe) => (
                <button
                  key={recipe.id}
                  onClick={() => onRecipeClick(recipe)}
                  className="w-full bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1 text-left">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold mb-1">{recipe.name}</h3>
                      <span className="text-sm text-green-500 bg-green-50 px-2 py-1 rounded-full whitespace-nowrap">
                        100% Match
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-2">{recipe.cuisine}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{recipe.cookTime} min</span>
                      <span>{recipe.calories} cal</span>
                      <span>{recipe.difficulty}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeSuggestionsPage;