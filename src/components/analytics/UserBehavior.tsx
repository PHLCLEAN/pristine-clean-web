
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { MousePointer, Navigation, Clock, ArrowRight } from 'lucide-react';

const UserBehavior = () => {
  const userFlowData = [
    { step: 1, page: 'Homepage', users: 10000, dropOff: 15 },
    { step: 2, page: 'Services', users: 8500, dropOff: 22 },
    { step: 3, page: 'Contact Form', users: 6630, dropOff: 35 },
    { step: 4, page: 'Form Submission', users: 4310, dropOff: 8 },
    { step: 5, page: 'Thank You', users: 3965, dropOff: 0 },
  ];

  const heatmapData = [
    { element: 'Navigation Menu', clicks: 8540, percentage: 45 },
    { element: 'Contact Button', clicks: 6230, percentage: 33 },
    { element: 'Services Cards', clicks: 4780, percentage: 25 },
    { element: 'Testimonials', clicks: 3420, percentage: 18 },
    { element: 'Footer Links', clicks: 2180, percentage: 11 },
  ];

  const exitPagesData = [
    { page: '/contact', exits: 1240, rate: '34.2%' },
    { page: '/', exits: 980, rate: '12.1%' },
    { page: '/services', exits: 760, rate: '18.5%' },
    { page: '/about', exits: 420, rate: '22.3%' },
    { page: '/testimonials', exits: 380, rate: '24.4%' },
  ];

  const sessionData = [
    { duration: '0-30s', sessions: 2840, percentage: 28.4 },
    { duration: '30s-1m', sessions: 2150, percentage: 21.5 },
    { duration: '1-3m', sessions: 3420, percentage: 34.2 },
    { duration: '3-5m', sessions: 980, percentage: 9.8 },
    { duration: '5m+', sessions: 610, percentage: 6.1 },
  ];

  return (
    <div className="space-y-6">
      {/* Behavior Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pages per Session</CardTitle>
            <Navigation className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time on Page</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2m 15s</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Click-through Rate</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.4%</div>
            <p className="text-xs text-muted-foreground">
              +3.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Return Visitors</CardTitle>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23.1%</div>
            <p className="text-xs text-muted-foreground">
              +5.4% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* User Flow */}
      <Card>
        <CardHeader>
          <CardTitle>User Flow Analysis</CardTitle>
          <CardDescription>How users navigate through your site</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userFlowData.map((step, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-medium">{step.page}</h4>
                    <p className="text-sm text-muted-foreground">{step.users.toLocaleString()} users</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{step.dropOff}% drop-off</div>
                  <Progress value={100 - step.dropOff} className="w-24 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Click Heatmap Data */}
        <Card>
          <CardHeader>
            <CardTitle>Most Clicked Elements</CardTitle>
            <CardDescription>Popular interaction points on your site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {heatmapData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{item.element}</div>
                    <div className="text-sm text-muted-foreground">{item.clicks.toLocaleString()} clicks</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={item.percentage} className="w-20" />
                    <span className="text-sm font-medium w-12">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Session Duration */}
        <Card>
          <CardHeader>
            <CardTitle>Session Duration</CardTitle>
            <CardDescription>How long users spend on your site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sessionData.map((session, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{session.duration}</div>
                    <div className="text-sm text-muted-foreground">{session.sessions.toLocaleString()} sessions</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={session.percentage} className="w-20" />
                    <span className="text-sm font-medium w-12">{session.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Exit Pages */}
      <Card>
        <CardHeader>
          <CardTitle>Exit Pages</CardTitle>
          <CardDescription>Pages where users most commonly leave your site</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page</TableHead>
                <TableHead>Exits</TableHead>
                <TableHead>Exit Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exitPagesData.map((page, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{page.page}</TableCell>
                  <TableCell>{page.exits.toLocaleString()}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      parseFloat(page.rate) > 30 ? 'bg-red-100 text-red-800' : 
                      parseFloat(page.rate) > 20 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {page.rate}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserBehavior;
