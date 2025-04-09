
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Contact } from '@/types/monitoring';

interface ContactsPanelProps {
  contacts: Contact[];
}

const ContactsPanel: React.FC<ContactsPanelProps> = ({ contacts }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Recent Contacts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contacts.map(contact => (
            <div key={contact.id} className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={contact.avatar} alt={contact.name} />
                <AvatarFallback>
                  {contact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{contact.name}</div>
                <div className="text-xs text-gray-500">{contact.phoneNumber}</div>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactsPanel;
