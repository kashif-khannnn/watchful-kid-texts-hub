
import React from 'react';
import { Activity, MessageSquare, Users, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { MonitoringSummary } from '@/types/monitoring';

interface StatusSummaryProps {
  summary: MonitoringSummary;
}

const StatusSummary: React.FC<StatusSummaryProps> = ({ summary }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardContent className="flex items-center p-6">
          <div className="bg-monitoring-100 p-3 rounded-full mr-4">
            <MessageSquare className="h-6 w-6 text-monitoring-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Messages</p>
            <h3 className="text-2xl font-bold">{summary.totalMessages}</h3>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="flex items-center p-6">
          <div className="bg-monitoring-100 p-3 rounded-full mr-4">
            <Activity className="h-6 w-6 text-monitoring-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">New Today</p>
            <h3 className="text-2xl font-bold">{Math.floor(summary.totalMessages * 0.2)}</h3>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="flex items-center p-6">
          <div className="bg-monitoring-100 p-3 rounded-full mr-4">
            <Users className="h-6 w-6 text-monitoring-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Contacts</p>
            <h3 className="text-2xl font-bold">{summary.uniqueContacts}</h3>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="flex items-center p-6">
          <div className="bg-monitoring-100 p-3 rounded-full mr-4">
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Flagged</p>
            <h3 className="text-2xl font-bold">{summary.flaggedMessages}</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusSummary;
