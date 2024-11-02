import * as React from 'react';
import { useState, useEffect } from 'react';
import { 
  Home, 
  History, 
  BookOpen, 
  Settings,
  ChevronRight, 
  Bell,
  User,
  Clock,
  Scale,
  Heart,
  HelpCircle,
  LogOut
} from 'lucide-react';

// Import pages
import HomePage from './pages/HomePage';
import ScanHistoryPage from './pages/ScanHistoryPage';
import SavedRecipesPage from './pages/SavedRecipesPage';
import SettingsPage from './pages/SettingsPage';
import RecipeSuggestionsPage from './pages/RecipeSuggestionsPage';
import ScanningOverlay from './ScanningOverlay';
import RecipeDetailsPage from './pages/RecipeDetailsPage';

function RecipeSuggester() {
  const [activeTab, setActiveTab] = useState('home');
  const [showRecipeSuggestions, setShowRecipeSuggestions] = useState(false);
  const [detectedItems, setDetectedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sample recipe data
  const sampleRecipes = [
    {
      id: 1,
      name: 'Tofu Buddha Bowl',
      cuisine: 'Asian Fusion',
      cookTime: 25,
      calories: 450,
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      matchPercentage: '100% Match'
    },
    {
      id: 2,
      name: 'Mediterranean Chickpea Bowl',
      cuisine: 'Mediterranean',
      cookTime: 20,
      calories: 380,
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      matchPercentage: '100% Match'
    },
    {
      id: 3,
      name: 'Black Bean Tacos',
      cuisine: 'Mexican',
      cookTime: 30,
      calories: 420,
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b',
      matchPercentage: '100% Match'
    },
    {
      id: 4,
      name: 'Miso Glazed Salmon Bowl',
      cuisine: 'Japanese Fusion',
      cookTime: 25,
      calories: 520,
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
      matchPercentage: '100% Match'
    }
  ];

  // Add useEffect to load recipes when showing suggestions
  useEffect(() => {
    if (showRecipeSuggestions) {
      setIsLoading(true);
      // Simulate API delay
      setTimeout(() => {
        setRecipes(sampleRecipes);
        setIsLoading(false);
      }, 1500);
    }
  }, [showRecipeSuggestions]);

  const handleScanFridge = () => {
    setIsScanning(true);
  };

  const handleScanComplete = async (items) => {
    setIsScanning(false);
    setDetectedItems(items);
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setRecipes(sampleRecipes);
    } catch (error) {
      console.error('Failed to fetch recipes:', error);
    } finally {
      setIsLoading(false);
    }
    
    setShowRecipeSuggestions(true);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleScanHistoryClick = (scan) => {
    setDetectedItems(scan.items || []);
    setIsLoading(true);
    
    // Load recipes with a loading state
    setTimeout(() => {
      setRecipes(sampleRecipes);
      setIsLoading(false);
      setShowRecipeSuggestions(true);
    }, 1500);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowRecipeSuggestions(false);
  };

  return (
    <div className="mx-auto h-[844px] w-[390px] bg-[#F5F5F7] rounded-[50px] overflow-hidden shadow-2xl relative">
      <div className="mt-8 h-full overflow-y-auto pb-[76px]">
        {isScanning && (
          <ScanningOverlay onScanComplete={handleScanComplete} />
        )}
        {!isScanning && (
          <>
            {selectedRecipe ? (
              <RecipeDetailsPage 
                recipe={selectedRecipe}
                onBackClick={() => setSelectedRecipe(null)}
              />
            ) : showRecipeSuggestions ? (
              <RecipeSuggestionsPage 
                detectedItems={detectedItems || []}
                recipes={recipes || []}
                onBackClick={() => setShowRecipeSuggestions(false)}
                onRecipeClick={handleRecipeClick}
                isLoading={isLoading}
              />
            ) : (
              activeTab === 'home' ? (
                <HomePage 
                  onScanClick={handleScanFridge}
                  detectedItems={detectedItems || []}
                  setDetectedItems={setDetectedItems}
                  loading={loading}
                  recipes={recipes || []}
                  onRecipeClick={handleRecipeClick}
                  onScanHistoryClick={handleScanHistoryClick}
                />
              ) : activeTab === 'history' ? (
                <ScanHistoryPage onScanClick={handleScanHistoryClick} />
              ) : activeTab === 'recipes' ? (
                <SavedRecipesPage onRecipeClick={handleRecipeClick} />
              ) : (
                <SettingsPage />
              )
            )}
          </>
        )}
      </div>

      {/* Navigation Bar - Only show when no recipe is selected */}
      {!selectedRecipe && (
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="flex justify-around items-center px-6 py-4">
            <button 
              onClick={() => handleTabChange('home')}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'home' ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </button>
            
            <button 
              onClick={() => handleTabChange('history')}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'history' ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              <History className="w-6 h-6" />
              <span className="text-xs">History</span>
            </button>
            
            <button 
              onClick={() => handleTabChange('recipes')}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'recipes' ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              <BookOpen className="w-6 h-6" />
              <span className="text-xs">Recipes</span>
            </button>
            
            <button 
              onClick={() => handleTabChange('settings')}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'settings' ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              <Settings className="w-6 h-6" />
              <span className="text-xs">Settings</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeSuggester;