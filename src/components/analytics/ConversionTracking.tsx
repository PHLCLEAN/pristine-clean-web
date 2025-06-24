
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, FunnelChart, Funnel, Cell } from 'recharts';
import { Target, TrendingUp, Mail, Phone } from 'lucide-react';

const ConversionTracking = () => {
  const conversionData = [
    { date: '2024-01-01', conversions: 45, rate: 3.8 },
    { date: '2024-01-02', conversions: 52, rate: 4.1 },
    { date: '2024-01-03', conversions: 38, rate: 3.2 },
    { date: '2024-01-04', conversions: 67, rate: 4.8 },
    { date: '2024-01-05', conversions: 58, rate: 4.2 },
    { date: '2024-01-06', conversions: 71, rate: 5.1 },
    { date: '2024-01-07', conversions: 84, rate: 5.8 },
  ];

  const funnelData = [
    { name: 'Website Visitors', value: 10000, fill: '#2563eb' },
    { name: 'Service Page Views', value: 6500, fill: '#3b82f6' },
    { name: 'Contact Form Views', value: 2800, fill: '#60a5fa' },
    { name: 'Form Submissions', value: 950, fill: '#93c5fd' },
    { name: 'Qualified Leads', value: 420, fill: '#dbeafe' },
  ];

  const goalData = [
    { goal: 'Contact Form Submissions', completions: 950, rate: '3.4%', trend: '+12%' },
    { goal: 'Phone Calls', completions: 287, rate: '1.0%', trend: '+8%' },
    { goal: 'Email Inquiries', completions: 156, rate: '0.6%', trend: '+15%' },
    { goal: 'Quote Requests', completions: 423, rate: '1.5%', trend: '+6%' },
  ];

  const sourceConversions = [
    { source: 'Organic Search', conversions: 342, rate: '4.2%', value: '$18,540' },
    { source: 'Direct Traffic', conversions: 198, rate: '3.8%', value: '$12,340' },
    { source: 'Social Media', conversions: 89, rate: '2.1%', value: '$5,670' },
    { source: 'Referral', conversions: 67, rate: '3.5%', value: '$4,280' },
    { source: 'Email Campaign', conversions: 45, rate: '6.8%', value: '$3,890' },
  ];

  return (
    <div className="space-y-6">
      {/* Conversion Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              +18.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2%</div>
            <p className="text-xs text-muted-foreground">
              +0.8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lead Quality Score</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7/10</div>
            <p className="text-xs text-muted-foreground">
              +0.3 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Deal Value</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,340</div>
            <p className="text-xs text-muted-foreground">
              +15.4% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Conversion Trends</CardTitle>
          <CardDescription>Daily conversions and conversion rate over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="conversions" stroke="#2563eb" strokeWidth={2} name="Conversions" />
              <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={2} name="Rate %" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Funnel */}
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
            <CardDescription>User journey from visitor to customer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {funnelData.map((step, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: step.fill }}
                    ></div>
                    <span className="font-medium">{step.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{step.value.toLocaleString()}</div>
                    {index > 0 && (
                      <div className="text-sm text-muted-foreground">
                        {((step.value / funnelData[index - 1].value) * 100).toFixed(1)}% conversion
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Goal Completions */}
        <Card>
          <CardHeader>
            <CardTitle>Goal Completions</CardTitle>
            <CardDescription>Performance of key conversion goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {goalData.map((goal, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{goal.goal}</div>
                    <div className="text-sm text-muted-foreground">{goal.completions} completions</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{goal.rate}</div>
                    <div className="text-sm text-green-600">{goal.trend}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversion by Source */}
      <Card>
        <CardHeader>
          <CardTitle>Conversions by Traffic Source</CardTitle>
          <CardDescription>Performance of different traffic sources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sourceConversions.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{source.source}</div>
                  <div className="text-sm text-muted-foreground">{source.conversions} conversions</div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Rate</div>
                    <div className="font-semibold">{source.rate}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Value</div>
                    <div className="font-semibold text-green-600">{source.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConversionTracking;
