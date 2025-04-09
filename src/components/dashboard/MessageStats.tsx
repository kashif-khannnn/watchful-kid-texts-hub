
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { MonitoringSummary } from '@/types/monitoring';

interface MessageStatsProps {
  summary: MonitoringSummary;
}

const MessageStats: React.FC<MessageStatsProps> = ({ summary }) => {
  const data = [
    { name: 'Incoming', value: summary.incomingMessages, color: '#4299E1' },
    { name: 'Outgoing', value: summary.outgoingMessages, color: '#2B6CB0' }
  ];
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Message Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Avg. Daily</p>
            <p className="text-2xl font-semibold">
              {Math.round(summary.totalMessages / 7)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Flagged %</p>
            <p className="text-2xl font-semibold">
              {Math.round((summary.flaggedMessages / summary.totalMessages) * 100)}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessageStats;
