import React from 'react';
import { ChevronRight, User, Bell, Lock, HelpCircle, LogOut } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="h-full pt-20 pb-24 overflow-y-auto">
      <div className="px-6 space-y-6">
        <h2 className="text-lg font-semibold">Settings</h2>
        
        {/* Settings List */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="divide-y">
            <SettingsItem icon={User} text="Account" />
            <SettingsItem icon={Bell} text="Notifications" />
            <SettingsItem icon={Lock} text="Privacy" />
            <SettingsItem icon={HelpCircle} text="Help & Support" />
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-full bg-red-50 text-red-500 rounded-2xl p-4 flex items-center justify-center space-x-2">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

const SettingsItem = ({ icon: Icon, text }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
    <div className="flex items-center space-x-3">
      <Icon className="w-5 h-5 text-gray-500" />
      <span className="font-medium">{text}</span>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-400" />
  </div>
);

export default SettingsPage; 