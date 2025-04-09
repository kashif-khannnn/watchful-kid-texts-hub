
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { KeywordAlert } from '@/types/monitoring';

interface AlertsPanelProps {
  keywordAlerts: KeywordAlert[];
}

const AlertsPanel: React.FC<AlertsPanelProps> = ({ keywordAlerts }) => {
  const getAlertBadgeClass = (level: string) => {
    switch (level) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Alert Keywords</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {keywordAlerts.map(alert => (
            <div key={alert.id} className="p-3 border border-gray-100 rounded-md">
              <div className="flex justify-between items-start">
                <div className="font-medium">{alert.keyword}</div>
                <div className={`px-2 py-1 rounded-full text-xs ${getAlertBadgeClass(alert.level)}`}>
                  {alert.level}
                </div>
              </div>
              {alert.description && (
                <div className="text-sm text-gray-600 mt-1">
                  {alert.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
