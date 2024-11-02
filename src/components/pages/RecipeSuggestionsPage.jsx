import React, { useState } from 'react';
import { ChevronLeft, Timer, Flame, ChefHat, ShoppingCart, Clock, Check, ChevronDown, ChevronUp, Home, History, BookOpen, Settings } from 'lucide-react';

const RecipeSuggestionsPage = ({ 
  detectedItems,
  recipes,
  onBackClick,
  onRecipeClick
}) => {
  const [showAllIngredients, setShowAllIngredients] = useState(false);

  // Example recipes with different images
  const perfectMatches = [
    {
      id: 'buddha-bowl',
      name: 'Tofu Buddha Bowl',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      cookTime: 25,
      calories: 450,
      difficulty: 'Easy',
      cuisine: 'Asian Fusion',
      matchPercentage: 100
    },
    {
      id: 'mediterranean-bowl',
      name: 'Mediterranean Chickpea Bowl',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      cookTime: 20,
      calories: 380,
      difficulty: 'Easy',
      cuisine: 'Mediterranean',
      matchPercentage: 100
    },
    {
      id: 'tacos',
      name: 'Black Bean Tacos',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b',
      cookTime: 30,
      calories: 420,
      difficulty: 'Easy',
      cuisine: 'Mexican',
      matchPercentage: 100
    },
    {
      id: 'salmon-bowl',
      name: 'Miso Glazed Salmon Bowl',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
      cookTime: 25,
      calories: 520,
      difficulty: 'Medium',
      cuisine: 'Japanese Fusion',
      matchPercentage: 100
    }
  ];

  // Add partial matches data
  const partialMatches = [
    {
      id: 'pad-thai',
      name: 'Tofu Pad Thai',
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
      cookTime: 30,
      cuisine: 'Thai',
      missingIngredients: ['Rice Noodles', 'Tamarind Paste'],
      matchPercentage: 85
    },
    {
      id: 'curry',
      name: 'Coconut Chickpea Curry',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641',
      cookTime: 35,
      cuisine: 'Indian Fusion',
      missingIngredients: ['Curry Powder', 'Garam Masala'],
      matchPercentage: 88
    },
    {
      id: 'bibimbap',
      name: 'Korean Bibimbap',
      image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733',
      cookTime: 40,
      cuisine: 'Korean',
      missingIngredients: ['Gochujang', 'Sesame Seeds'],
      matchPercentage: 82
    }
  ];

  return (
    <div className="h-full bg-[#F5F5F7] relative pb-[76px]">
      {/* Header */}
      <div className="sticky top-0 bg-[#F5F5F7] z-10 px-4 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={onBackClick} className="p-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Recipe Suggestions</h1>
        </div>
      </div>

      <div className="px-4 pb-20">
        {/* Scan Summary */}
        <div className="bg-white rounded-xl p-4 mb-6 mt-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Found {detectedItems.length} Ingredients</h2>
            <button 
              onClick={() => setShowAllIngredients(!showAllIngredients)}
              className="text-blue-500 flex items-center gap-1 text-sm"
            >
              {showAllIngredients ? 'Show Less' : 'Show All'}
              {showAllIngredients ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          <div className="space-y-2">
            {detectedItems
              .slice(0, showAllIngredients ? detectedItems.length : 6)
              .map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-sm">{item.name}</span>
                  <span className="text-xs text-gray-500 ml-auto">{item.category}</span>
                </div>
            ))}
          </div>
        </div>

        {/* Recipe Matches - Updated with Left-side Images */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold">Perfect Matches</h2>
              <p className="text-sm text-gray-500">Recipes you can make right now</p>
            </div>
          </div>
          <div className="space-y-3">
            {perfectMatches.map(recipe => (
              <div 
                key={recipe.id}
                onClick={() => onRecipeClick(recipe)}
                className="bg-white rounded-xl p-3 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Left Image */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Right Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{recipe.name}</h3>
                        <p className="text-sm text-gray-500">{recipe.cuisine}</p>
                      </div>
                      <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        {recipe.matchPercentage}% Match
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Timer className="w-4 h-4" />
                        <span>{recipe.cookTime} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        <span>{recipe.calories} cal</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ChefHat className="w-4 h-4" />
                        <span>{recipe.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partial Matches - Also with Left-side Images */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold">Almost There</h2>
              <p className="text-sm text-gray-500">Just missing a few ingredients</p>
            </div>
          </div>
          <div className="space-y-3">
            {partialMatches.map(recipe => (
              <div 
                key={recipe.id}
                className="bg-white rounded-xl p-3"
              >
                <div className="flex items-center gap-4">
                  {/* Left Image */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{recipe.name}</h3>
                        <p className="text-sm text-gray-500">{recipe.cuisine}</p>
                      </div>
                      <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        {recipe.matchPercentage}% Match
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <Timer className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{recipe.cookTime} min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-orange-500">
                        Missing: {recipe.missingIngredients.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSuggestionsPage;