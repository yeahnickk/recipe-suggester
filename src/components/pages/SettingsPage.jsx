import React, { useState } from 'react';
import { 
  Bell, 
  Camera, 
  Info, 
  ChefHat, 
  Timer, 
  BarChart2,
  User,
  Lock,
  LogOut,
  ChevronRight,
  Clock,
  Scale,
  Heart,
  HelpCircle
} from 'lucide-react';

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <button
      onClick={() => onChange?.(!checked)}
      className={`${
        checked ? 'bg-blue-500' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
    >
      <span
        className={`${
          checked ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
    </button>
  );
};

const SettingsPage = () => {
  return (
    <div className="px-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      {/* Profile Section */}
      <div className="bg-white rounded-xl p-4 mb-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-gray-400" />
          </div>
          <div>
            <h2 className="font-semibold">Nick Davenport</h2>
            <p className="text-sm text-gray-500">nick@example.com</p>
          </div>
        </div>
      </div>

      {/* General Settings */}
      <div className="bg-white rounded-xl p-4 mb-4">
        <h2 className="font-semibold mb-4">General</h2>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-400" />
              <span>Notifications</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-400" />
              <span>Time Zone</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Scale className="w-5 h-5 text-gray-400" />
              <span>Measurement Units</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-xl p-4 mb-4">
        <h2 className="font-semibold mb-4">Preferences</h2>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-gray-400" />
              <span>Dietary Restrictions</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Support */}
      <div className="bg-white rounded-xl p-4 mb-4">
        <h2 className="font-semibold mb-4">Support</h2>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-gray-400" />
              <span>Help Center</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Logout Button */}
      <button className="w-full flex items-center justify-center gap-2 p-4 text-red-500 hover:bg-red-50 rounded-xl">
        <LogOut className="w-5 h-5" />
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default SettingsPage;