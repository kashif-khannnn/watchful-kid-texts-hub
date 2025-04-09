
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Eye, Lock, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-monitoring-800 text-white">
        <div className="container mx-auto px-6 py-16 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-12 w-12 text-monitoring-400" />
            <h1 className="text-4xl font-bold">KidSafe Monitor</h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl text-center max-w-3xl mb-6">
            Safely monitor your child's messages for their protection and your peace of mind
          </h2>
          
          <p className="text-monitoring-200 text-center max-w-2xl mb-10">
            KidSafe provides parents with a secure way to monitor text messages, helping you stay informed 
            while respecting your child's growing independence.
          </p>
          
          <Button
            className="bg-monitoring-500 hover:bg-monitoring-600 text-white px-8 py-6 text-lg"
            onClick={() => navigate('/dashboard')}
          >
            Enter Dashboard
          </Button>
        </div>
      </header>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-monitoring-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-monitoring-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Message Monitoring</h3>
              <p className="text-gray-600">
                View incoming and outgoing text messages with timestamps and contact information.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-monitoring-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="h-8 w-8 text-monitoring-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Keyword Alerts</h3>
              <p className="text-gray-600">
                Create custom alerts for specific keywords or phrases to stay informed about potential concerns.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-monitoring-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-monitoring-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Private & Secure</h3>
              <p className="text-gray-600">
                All monitoring data is kept private and secure, with robust encryption and privacy controls.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-monitoring-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Monitoring?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Take the first step towards responsible digital parenting and help keep your child safe online.
          </p>
          <Button
            className="bg-monitoring-600 hover:bg-monitoring-700 text-white px-8 py-6 text-lg"
            onClick={() => navigate('/dashboard')}
          >
            Enter Dashboard
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-monitoring-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-monitoring-200">
            © 2025 KidSafe Monitor. All rights reserved. | This is a demo app for educational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
