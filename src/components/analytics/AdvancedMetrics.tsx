
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Monitor, Smartphone, Tablet, Globe } from 'lucide-react';

const AdvancedMetrics = () => {
  const deviceData = [
    { name: 'Desktop', value: 65, color: '#2563eb' },
    { name: 'Mobile', value: 28, color: '#10b981' },
    { name: 'Tablet', value: 7, color: '#f59e0b' },
  ];

  const trafficSourceData = [
    { name: 'Organic Search', value: 45, color: '#8b5cf6' },
    { name: 'Direct', value: 25, color: '#06b6d4' },
    { name: 'Social Media', value: 15, color: '#f97316' },
    { name: 'Referral', value: 10, color: '#84cc16' },
    { name: 'Email', value: 5, color: '#ec4899' },
  ];

  const performanceData = [
    { time: '00:00', loadTime: 1.2, bounceRate: 35 },
    { time: '04:00', loadTime: 1.1, bounceRate: 32 },
    { time: '08:00', loadTime: 1.5, bounceRate: 38 },
    { time: '12:00', loadTime: 1.8, bounceRate: 42 },
    { time: '16:00', loadTime: 1.6, bounceRate: 36 },
    { time: '20:00', loadTime: 1.3, bounceRate: 33 },
  ];

  const locationData = [
    { country: 'United States', visitors: 8520, percentage: 45.2 },
    { country: 'Canada', visitors: 2180, percentage: 11.6 },
    { country: 'United Kingdom', visitors: 1940, percentage: 10.3 },
    { country: 'Australia', visitors: 1560, percentage: 8.3 },
    { country: 'Germany', visitors: 1320, percentage: 7.0 },
  ];

  return (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Page Load Speed</CardTitle>
            <CardDescription>Average load time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">1.4s</div>
            <p className="text-sm text-muted-foreground">Excellent performance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Core Web Vitals</CardTitle>
            <CardDescription>LCP / FID / CLS</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">LCP</span>
                <span className="text-sm font-medium text-green-600">1.2s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">FID</span>
                <span className="text-sm font-medium text-green-600">85ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">CLS</span>
                <span className="text-sm font-medium text-yellow-600">0.12</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">SEO Score</CardTitle>
            <CardDescription>Overall optimization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">87/100</div>
            <p className="text-sm text-muted-foreground">Good optimization</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Device Breakdown</CardTitle>
            <CardDescription>Visitor distribution by device type</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors come from</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trafficSourceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {trafficSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Over Time */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics Over Time</CardTitle>
          <CardDescription>Load time and bounce rate throughout the day</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Area yAxisId="left" type="monotone" dataKey="loadTime" stackId="1" stroke="#2563eb" fill="#2563eb" fillOpacity={0.3} />
              <Area yAxisId="right" type="monotone" dataKey="bounceRate" stackId="2" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Geographic Data */}
      <Card>
        <CardHeader>
          <CardTitle>Top Countries</CardTitle>
          <CardDescription>Visitor distribution by country</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {locationData.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{country.country}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${country.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground w-16">{country.visitors.toLocaleString()}</span>
                  <span className="text-sm font-medium w-12">{country.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedMetrics;
