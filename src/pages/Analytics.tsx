
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BasicMetrics from '@/components/analytics/BasicMetrics';
import AdvancedMetrics from '@/components/analytics/AdvancedMetrics';
import UserBehavior from '@/components/analytics/UserBehavior';
import ConversionTracking from '@/components/analytics/ConversionTracking';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Website Analytics</h1>
          <p className="text-gray-600">Monitor and analyze your website's performance and user engagement</p>
        </div>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basic Metrics</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Analytics</TabsTrigger>
            <TabsTrigger value="behavior">User Behavior</TabsTrigger>
            <TabsTrigger value="conversion">Conversions</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <BasicMetrics />
          </TabsContent>

          <TabsContent value="advanced">
            <AdvancedMetrics />
          </TabsContent>

          <TabsContent value="behavior">
            <UserBehavior />
          </TabsContent>

          <TabsContent value="conversion">
            <ConversionTracking />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
