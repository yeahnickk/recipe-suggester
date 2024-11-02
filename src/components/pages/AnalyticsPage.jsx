import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const AnalyticsPage = () => {
  // Sample data for analytics
  const weeklyScans = [
    { day: 'Mon', scans: 3 },
    { day: 'Tue', scans: 5 },
    { day: 'Wed', scans: 2 },
    { day: 'Thu', scans: 4 },
    { day: 'Fri', scans: 6 },
    { day: 'Sat', scans: 3 },
    { day: 'Sun', scans: 4 }
  ];

  const ingredientStats = [
    { name: 'Vegetables', value: 35 },
    { name: 'Proteins', value: 25 },
    { name: 'Dairy', value: 20 },
    { name: 'Grains', value: 15 },
    { name: 'Others', value: 5 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="px-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>

      {/* Weekly Activity */}
      <div className="bg-white rounded-xl p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Weekly Scan Activity</h2>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyScans}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="scans" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ingredient Distribution */}
      <div className="bg-white rounded-xl p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Ingredient Distribution</h2>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ingredientStats}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {ingredientStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {weeklyScans.slice(0, 5).map((scan, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600">Fridge Scan</span>
              <span className="text-sm text-gray-400">{scan.day} - {scan.scans} items</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage; 