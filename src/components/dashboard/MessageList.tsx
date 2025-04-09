
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Message, Contact, KeywordAlert } from '@/types/monitoring';
import MessageItem from './MessageItem';

interface MessageListProps {
  messages: Message[];
  contacts: Contact[];
  keywordAlerts: KeywordAlert[];
}

const MessageList: React.FC<MessageListProps> = ({ messages, contacts, keywordAlerts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState<string>('');
  const [showIncoming, setShowIncoming] = useState(true);
  const [showOutgoing, setShowOutgoing] = useState(true);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredMessages = messages.filter(message => {
    // Filter by message type
    if (!showIncoming && message.type === 'incoming') return false;
    if (!showOutgoing && message.type === 'outgoing') return false;
    
    // Filter by contact
    if (selectedContact && message.contactId !== selectedContact) return false;
    
    // Filter by search term
    if (searchTerm) {
      const contact = contacts.find(c => c.id === message.contactId);
      const contactName = contact?.name || '';
      const contactPhone = contact?.phoneNumber || '';
      
      return (
        message.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contactPhone.includes(searchTerm)
      );
    }
    
    return true;
  });
  
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold flex justify-between items-center">
          <span>Message Activity</span>
          <span className="text-sm text-gray-500 font-normal">
            {filteredMessages.length} messages
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-2 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search messages or contacts..."
              className="pl-8"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={showIncoming ? "default" : "outline"}
              size="sm"
              onClick={() => setShowIncoming(!showIncoming)}
              className={showIncoming ? "bg-monitoring-600" : ""}
            >
              Incoming
            </Button>
            <Button
              variant={showOutgoing ? "default" : "outline"}
              size="sm"
              onClick={() => setShowOutgoing(!showOutgoing)}
              className={showOutgoing ? "bg-monitoring-600" : ""}
            >
              Outgoing
            </Button>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="overflow-auto max-h-[600px] pr-2">
          {filteredMessages.length > 0 ? (
            filteredMessages.map(message => (
              <MessageItem 
                key={message.id}
                message={message}
                contact={contacts.find(c => c.id === message.contactId) || { id: '0', name: 'Unknown', phoneNumber: '' }}
                keywordAlerts={keywordAlerts}
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No messages match your filters
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MessageList;
