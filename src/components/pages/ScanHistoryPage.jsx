import React from 'react';
import { History, ChevronRight } from 'lucide-react';

const ScanHistoryPage = ({ onScanClick }) => {
  const scanHistory = [
    {
      id: 1,
      timestamp: '2h ago',
      itemCount: 12,
      previewItems: ['Chicken', 'Vegetables', 'Rice'],
      matchedRecipes: 8
    },
    {
      id: 2,
      timestamp: 'Yesterday',
      itemCount: 8,
      previewItems: ['Tofu', 'Noodles', 'Soy Sauce'],
      matchedRecipes: 5
    },
    // Add more history items
  ];

  return (
    <div className="px-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">Scan History</h1>
      <div className="space-y-4">
        {scanHistory.map(scan => (
          <div
            key={scan.id}
            onClick={() => onScanClick(scan)}
            className="bg-white rounded-xl p-4 cursor-pointer hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">Fridge Scan</h3>
                <p className="text-sm text-gray-500">{scan.timestamp}</p>
              </div>
              <div className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                {scan.matchedRecipes} Recipes
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {scan.itemCount} items found
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScanHistoryPage; 