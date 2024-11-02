import React from 'react';
import { BarChart2, TrendingUp, Clock } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <div className="h-full pt-20 pb-24 overflow-y-auto">
      <div className="px-6 space-y-6">
        <h2 className="text-lg font-semibold">Analytics</h2>
        
        {/* Dummy Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="font-medium">Weekly Meals</span>
            </div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-gray-500">Last 7 days</p>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Avg. Cook Time</span>
            </div>
            <p className="text-2xl font-bold">25m</p>
            <p className="text-sm text-gray-500">Per meal</p>
          </div>
        </div>

        {/* Dummy Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-medium mb-4">Monthly Activity</h3>
          <div className="h-48 flex items-end space-x-2">
            {[40, 60, 30, 80, 50, 70].map((height, i) => (
              <div key={i} className="flex-1 bg-blue-100 rounded-t-lg" style={{ height: `${height}%` }}>
                <div 
                  className="bg-blue-500 rounded-t-lg w-full transition-all duration-500" 
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage; 