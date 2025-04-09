
import React from 'react';
import { Bell, Settings, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Shield className="h-6 w-6 text-monitoring-600" />
        <h1 className="text-xl font-bold text-gray-800">KidSafe Monitor</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-gray-600" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
