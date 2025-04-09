
import { Contact, Message, KeywordAlert, MonitoringSummary } from '../types/monitoring';

// Mock contacts
export const contacts: Contact[] = [
  {
    id: '1',
    name: 'James Wilson',
    phoneNumber: '(555) 123-4567',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: '2',
    name: 'Lucy Smith',
    phoneNumber: '(555) 234-5678',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: '3',
    name: 'David Johnson',
    phoneNumber: '(555) 345-6789',
    avatar: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: '4',
    name: 'Emily Brown',
    phoneNumber: '(555) 456-7890',
    avatar: 'https://i.pravatar.cc/150?img=9'
  },
  {
    id: '5',
    name: 'Unknown',
    phoneNumber: '(555) 567-8901'
  }
];

// Create a function to generate a date within the last week
const getRandomRecentDate = () => {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 7);
  const hoursAgo = Math.floor(Math.random() * 24);
  const minutesAgo = Math.floor(Math.random() * 60);
  
  return new Date(now.getTime() - (daysAgo * 24 * 60 * 60 * 1000) - (hoursAgo * 60 * 60 * 1000) - (minutesAgo * 60 * 1000));
};

// Mock messages
export const generateMessages = (): Message[] => {
  const messages: Message[] = [];
  
  // Common phrases used by teenagers
  const teenPhrases = [
    "Hey, what's up?",
    "Can you come over?",
    "I'm bored lol",
    "Did you finish the homework?",
    "That's so cool!",
    "I can't wait for the weekend",
    "My parents are being so strict",
    "Have you seen the new movie?",
    "We should hang out sometime",
    "I got a new game",
    "Party this weekend?",
    "Don't tell anyone, but...",
    "I'm not feeling great today",
    "School was so boring today",
    "Did you see what they posted?",
    "I need help with math",
    "Are you going to be there?",
    "Sorry, I can't talk right now",
    "Where are you?",
    "I'll be home late",
    "Can you pick me up?",
    "I forgot to tell you",
    "Do you want to get food?",
    "I'm staying at friend's house",
    "My phone's about to die",
    "Have you done the project?",
    "I'm grounded ugh",
    "Need to talk to you about something",
    "What time does it start?",
    "I passed the test!"
  ];
  
  // Generate 40-50 messages
  const messageCount = 40 + Math.floor(Math.random() * 10);
  
  for (let i = 0; i < messageCount; i++) {
    const contactId = contacts[Math.floor(Math.random() * contacts.length)].id;
    const type = Math.random() > 0.5 ? 'incoming' : 'outgoing';
    const text = teenPhrases[Math.floor(Math.random() * teenPhrases.length)];
    
    messages.push({
      id: `msg-${i}`,
      contactId,
      text,
      timestamp: getRandomRecentDate(),
      type
    });
  }
  
  // Sort messages by timestamp (newest first)
  return messages.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

// Mock keyword alerts
export const keywordAlerts: KeywordAlert[] = [
  {
    id: 'kw1',
    keyword: 'party',
    level: 'medium',
    description: 'Potential social gathering'
  },
  {
    id: 'kw2',
    keyword: 'homework',
    level: 'low',
    description: 'School related'
  },
  {
    id: 'kw3',
    keyword: 'don\'t tell',
    level: 'high',
    description: 'Possible secretive behavior'
  },
  {
    id: 'kw4',
    keyword: 'late',
    level: 'medium',
    description: 'Schedule changes'
  }
];

// Generate monitoring summary
export const generateSummary = (messages: Message[]): MonitoringSummary => {
  const incomingMessages = messages.filter(msg => msg.type === 'incoming').length;
  const outgoingMessages = messages.filter(msg => msg.type === 'outgoing').length;
  
  // Count unique contacts
  const uniqueContactIds = [...new Set(messages.map(msg => msg.contactId))];
  
  // Count flagged messages (messages containing any of the keywords)
  const flaggedMessages = messages.filter(msg => 
    keywordAlerts.some(alert => 
      msg.text.toLowerCase().includes(alert.keyword.toLowerCase())
    )
  ).length;
  
  return {
    totalMessages: messages.length,
    incomingMessages,
    outgoingMessages,
    uniqueContacts: uniqueContactIds.length,
    flaggedMessages
  };
};
