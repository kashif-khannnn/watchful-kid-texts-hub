
export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  avatar?: string;
}

export interface Message {
  id: string;
  contactId: string;
  text: string;
  timestamp: Date;
  type: 'incoming' | 'outgoing';
}

export interface KeywordAlert {
  id: string;
  keyword: string;
  level: 'low' | 'medium' | 'high';
  description?: string;
}

export interface MonitoringSummary {
  totalMessages: number;
  incomingMessages: number;
  outgoingMessages: number;
  uniqueContacts: number;
  flaggedMessages: number;
}
