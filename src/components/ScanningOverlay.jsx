import React, { useState, useEffect } from 'react';
import { Loader2, Check, Search } from 'lucide-react';

const ScanningOverlay = ({ onScanComplete }) => {
  const [scanningStage, setScanningStage] = useState(0);
  const [detectedItems, setDetectedItems] = useState([]);

  const mockItems = [
    // Asian Ingredients
    { name: 'Tofu', confidence: '98%', category: 'Protein' },
    { name: 'Bok Choy', confidence: '97%', category: 'Vegetable' },
    { name: 'Soy Sauce', confidence: '96%', category: 'Condiment' },
    { name: 'Miso Paste', confidence: '95%', category: 'Condiment' },
    { name: 'Rice Vinegar', confidence: '94%', category: 'Condiment' },
    
    // Mediterranean/Middle Eastern
    { name: 'Chickpeas', confidence: '96%', category: 'Legume' },
    { name: 'Tahini', confidence: '93%', category: 'Condiment' },
    { name: 'Greek Yogurt', confidence: '97%', category: 'Dairy' },
    { name: 'Feta Cheese', confidence: '95%', category: 'Dairy' },
    
    // Mexican/Latin
    { name: 'Black Beans', confidence: '98%', category: 'Legume' },
    { name: 'Corn Tortillas', confidence: '96%', category: 'Bread' },
    { name: 'Cilantro', confidence: '92%', category: 'Herb' },
    { name: 'Lime', confidence: '94%', category: 'Citrus' },
    
    // Common Produce
    { name: 'Avocado', confidence: '97%', category: 'Fruit' },
    { name: 'Sweet Potato', confidence: '96%', category: 'Vegetable' },
    { name: 'Bell Peppers', confidence: '95%', category: 'Vegetable' },
    { name: 'Spinach', confidence: '94%', category: 'Vegetable' },
    
    // Proteins
    { name: 'Salmon', confidence: '98%', category: 'Protein' },
    { name: 'Chicken Thighs', confidence: '97%', category: 'Protein' },
    { name: 'Eggs', confidence: '99%', category: 'Protein' },
    
    // Pantry Items
    { name: 'Quinoa', confidence: '96%', category: 'Grain' },
    { name: 'Coconut Milk', confidence: '95%', category: 'Dairy Alternative' },
    { name: 'Sesame Oil', confidence: '94%', category: 'Oil' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scanningStage < mockItems.length) {
        setDetectedItems(prev => [...prev, mockItems[scanningStage]]);
        setScanningStage(prev => prev + 1);
      } else {
        setTimeout(() => {
          onScanComplete(mockItems);
        }, 500);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [scanningStage]);

  return (
    <div className="absolute inset-0 bg-white z-[200] flex flex-col">
      {/* Header */}
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Scanning Fridge</h2>
        <p className="text-gray-500">Detecting ingredients...</p>
      </div>

      {/* Scanning Animation */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Progress Bar */}
          <div className="h-2 bg-gray-100 rounded-full mb-8">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${(scanningStage / mockItems.length) * 100}%` }}
            />
          </div>

          {/* Detected Items List */}
          <div className="space-y-4">
            {detectedItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-between animate-fadeIn"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className="text-sm text-gray-500">{item.confidence}</span>
              </div>
            ))}
            {scanningStage < mockItems.length && (
              <div className="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                  </div>
                  <span className="text-gray-400">Scanning...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Status */}
      <div className="p-6 text-center text-sm text-gray-500">
        {scanningStage === mockItems.length ? (
          <div className="flex items-center justify-center gap-2">
            <Search className="w-4 h-4" />
            <span>Finding recipes...</span>
          </div>
        ) : (
          `Detected ${detectedItems.length} items`
        )}
      </div>
    </div>
  );
};

export default ScanningOverlay; 