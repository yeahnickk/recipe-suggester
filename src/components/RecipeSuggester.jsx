import * as React from 'react';
import { useState } from 'react';
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

  const handleScanFridge = () => {
    setIsScanning(true);
  };

  const handleScanComplete = (items) => {
    setIsScanning(false);
    setDetectedItems(items);
    setShowRecipeSuggestions(true);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleScanHistoryClick = (scan) => {
    setDetectedItems(scan.items || []);
    setShowRecipeSuggestions(true);
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