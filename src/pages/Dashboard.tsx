
import React, { useState, useEffect } from 'react';
import Header from '@/components/dashboard/Header';
import StatusSummary from '@/components/dashboard/StatusSummary';
import MessageList from '@/components/dashboard/MessageList';
import ContactsPanel from '@/components/dashboard/ContactsPanel';
import AlertsPanel from '@/components/dashboard/AlertsPanel';
import MessageStats from '@/components/dashboard/MessageStats';
import { Message, MonitoringSummary } from '@/types/monitoring';
import { contacts, generateMessages, keywordAlerts, generateSummary } from '@/services/mockData';

const Dashboard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [summary, setSummary] = useState<MonitoringSummary>({
    totalMessages: 0,
    incomingMessages: 0,
    outgoingMessages: 0,
    uniqueContacts: 0,
    flaggedMessages: 0
  });
  
  useEffect(() => {
    // Load mock data
    const mockMessages = generateMessages();
    setMessages(mockMessages);
    
    // Generate summary
    const mockSummary = generateSummary(mockMessages);
    setSummary(mockSummary);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        
        <StatusSummary summary={summary} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <MessageList 
            messages={messages} 
            contacts={contacts}
            keywordAlerts={keywordAlerts}
          />
          
          <div className="space-y-6">
            <ContactsPanel contacts={contacts} />
            <AlertsPanel keywordAlerts={keywordAlerts} />
            <MessageStats summary={summary} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
