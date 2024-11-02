import React from 'react';
import { 
  Camera, 
  History, 
  Timer, 
  Flame, 
  ChevronRight, 
  TrendingUp, 
  BookOpen, 
  ChefHat, 
  Search 
} from 'lucide-react';
import LoadingRecipes from '../LoadingRecipes';

const HomePage = ({ 
  onScanClick, 
  detectedItems, 
  setDetectedItems, 
  loading, 
  recipes,
  onRecipeClick,
  onScanHistoryClick
}) => {
  // Example recent scans with full data
  const recentScans = [
    {
      id: 1,
      timestamp: '2h ago',
      itemCount: 12,
      previewItems: ['Chicken', 'Vegetables', 'Rice', 'Soy Sauce', 'Garlic'],
      matchedRecipes: 8,
      items: [
        { name: 'Chicken', confidence: '98%', category: 'Protein' },
        { name: 'Vegetables', confidence: '95%', category: 'Produce' },
        { name: 'Rice', confidence: '97%', category: 'Grain' },
        { name: 'Soy Sauce', confidence: '96%', category: 'Condiment' },
        { name: 'Garlic', confidence: '94%', category: 'Produce' }
      ]
    },
    {
      id: 2,
      timestamp: 'Yesterday',
      itemCount: 8,
      previewItems: ['Tofu', 'Noodles', 'Soy Sauce', 'Vegetables'],
      matchedRecipes: 5,
      items: [
        { name: 'Tofu', confidence: '98%', category: 'Protein' },
        { name: 'Noodles', confidence: '95%', category: 'Grain' },
        { name: 'Soy Sauce', confidence: '97%', category: 'Condiment' },
        { name: 'Vegetables', confidence: '96%', category: 'Produce' }
      ]
    }
  ];

  return (
    <div className="px-4 pb-20">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Hello, Nick 👋</h1>
        <p className="text-gray-500">What's in your fridge today?</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={onScanClick}
          className="bg-blue-500 text-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
        >
          <Camera className="w-6 h-6" />
          <span>Scan Fridge</span>
        </button>
        <button className="bg-purple-500 text-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-purple-600 transition-colors">
          <BookOpen className="w-6 h-6" />
          <span>My Recipes</span>
        </button>
      </div>

      {/* Recent Scans */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Recent Scans</h2>
          <button className="text-blue-500 text-sm">View all</button>
        </div>
        <div className="space-y-3">
          {recentScans.map(scan => (
            <div
              key={scan.id}
              onClick={() => onScanHistoryClick(scan)}
              className="bg-white rounded-xl p-4 cursor-pointer hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-gray-900">Fridge Scan</h3>
                  <p className="text-sm text-gray-500">{scan.timestamp}</p>
                </div>
                <div className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                  {scan.matchedRecipes} Recipes
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Search className="w-4 h-4" />
                  <span>{scan.itemCount} items found</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="text-gray-500 truncate">
                  {scan.previewItems.join(', ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-gray-800">Weekly Meals</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">12</p>
          <p className="text-xs text-gray-500">+3 from last week</p>
        </div>
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <ChefHat className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium text-gray-800">Saved Recipes</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">28</p>
          <p className="text-xs text-gray-500">4 new this week</p>
        </div>
      </div>

      {/* Recipe Suggestions */}
      {detectedItems.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Recipe Suggestions</h2>
            <button className="text-blue-500 text-sm">See all</button>
          </div>
          {loading ? (
            <LoadingRecipes />
          ) : (
            recipes.map(recipe => (
              <div 
                key={recipe.id}
                onClick={() => onRecipeClick(recipe)}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
              >
                <div className="relative h-48">
                  <img 
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-white text-lg font-semibold">{recipe.name}</h3>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Timer className="w-4 h-4 text-blue-500 mr-1" />
                      <span className="text-sm">{recipe.cookTime} min</span>
                    </div>
                    <div className="flex items-center">
                      <Flame className="w-4 h-4 text-red-500 mr-1" />
                      <span className="text-sm">{recipe.calories} cal</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage; 