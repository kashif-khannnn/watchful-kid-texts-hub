
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Message, Contact, KeywordAlert } from '@/types/monitoring';

interface MessageItemProps {
  message: Message;
  contact: Contact;
  keywordAlerts: KeywordAlert[];
}

const MessageItem: React.FC<MessageItemProps> = ({ message, contact, keywordAlerts }) => {
  // Format the timestamp
  const timeAgo = formatDistanceToNow(new Date(message.timestamp), { addSuffix: true });
  
  // Highlight keywords in the message
  const highlightKeywords = (text: string) => {
    let highlightedText = text;
    
    keywordAlerts.forEach(alert => {
      const keyword = alert.keyword;
      const regex = new RegExp(`(${keyword})`, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="keyword-highlight">$1</span>`);
    });
    
    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };
  
  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100">
      <Avatar className="h-10 w-10">
        <AvatarImage src={contact.avatar} alt={contact.name} />
        <AvatarFallback>
          {contact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <div className="font-medium text-sm">{contact.name}</div>
          <div className="text-xs text-gray-500">{timeAgo}</div>
        </div>
        
        <div className={message.type === 'incoming' ? 'message-incoming' : 'message-outgoing'}>
          {highlightKeywords(message.text)}
        </div>
        
        <div className="mt-1 text-xs text-gray-500">
          {message.type === 'incoming' ? 'From' : 'To'}: {contact.phoneNumber}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
