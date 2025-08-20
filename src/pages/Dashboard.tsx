import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import KPICard from '@/components/dashboard/KPICard';
import { 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  DollarSign,
  TrendingUp,
  MapPin,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react';

const Dashboard = () => {
  const kpiData = [
    {
      title: 'Active Users',
      value: 5247,
      change: '+12.5% from last month',
      changeType: 'positive' as const,
      icon: Users,
      variant: 'info' as const
    },
    {
      title: 'Reported Incidents',
      value: 342,
      change: '+8.2% from last week',
      changeType: 'neutral' as const,
      icon: AlertTriangle,
      variant: 'warning' as const
    },
    {
      title: 'Claims Approved',
      value: 298,
      change: '+15.3% approval rate',
      changeType: 'positive' as const,
      icon: CheckCircle,
      variant: 'success' as const
    },
    {
      title: 'Total Payouts',
      value: '₦24.8M',
      change: '+22.1% this quarter',
      changeType: 'positive' as const,
      icon: DollarSign,
      variant: 'primary' as const
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">
            Monitor your insurance operations in real-time
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="space-x-2">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button className="bg-gradient-primary space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Claims Trend Chart */}
        <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-smooth">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Claims Submitted Per Month</span>
            </CardTitle>
            <CardDescription>
              Track claim submission trends over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-background-secondary rounded-lg p-4 flex items-center justify-center">
              <div className="text-center space-y-2">
                <TrendingUp className="h-8 w-8 text-muted-foreground mx-auto" />
                <p className="text-sm text-muted-foreground">
                  Interactive chart will be displayed here
                </p>
                <p className="text-xs text-muted-foreground">
                  Showing claims data from the last 12 months
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-smooth">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Incident Heatmap - Kaduna State</span>
            </CardTitle>
            <CardDescription>
              Geographic distribution of reported incidents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-background-secondary rounded-lg p-4 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-8 w-8 text-muted-foreground mx-auto" />
                <p className="text-sm text-muted-foreground">
                  Interactive map will be displayed here
                </p>
                <p className="text-xs text-muted-foreground">
                  Focusing on Kaduna State regions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-success hover:bg-success/90 text-success-foreground">
              <CheckCircle className="h-4 w-4 mr-2" />
              Approve Pending Claims
            </Button>
            <Button className="w-full justify-start bg-info hover:bg-info/90 text-info-foreground">
              <Users className="h-4 w-4 mr-2" />
              Add New User
            </Button>
            <Button className="w-full justify-start bg-warning hover:bg-warning/90 text-warning-foreground">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Review Incidents
            </Button>
          </CardContent>
        </Card>

        {/* Recent Claims */}
        <Card className="lg:col-span-2 bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Recent Claims Activity</CardTitle>
            <CardDescription>Latest claim submissions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 'CLM-001', user: 'Mohammed Audu', type: 'Medical', status: 'approved', amount: '₦125,000' },
                { id: 'CLM-002', user: 'Fatima Hassan', type: 'Accident', status: 'pending', amount: '₦89,500' },
                { id: 'CLM-003', user: 'Ibrahim Sani', type: 'Life', status: 'reviewing', amount: '₦450,000' },
                { id: 'CLM-004', user: 'Aisha Musa', type: 'Medical', status: 'approved', amount: '₦67,200' }
              ].map((claim) => (
                <div key={claim.id} className="flex items-center justify-between p-3 bg-background-secondary rounded-lg hover:bg-card-hover transition-smooth">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      claim.status === 'approved' ? 'bg-success' :
                      claim.status === 'pending' ? 'bg-warning' :
                      'bg-info'
                    }`} />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{claim.id}</p>
                      <p className="text-xs text-muted-foreground">{claim.user} • {claim.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-card-foreground">{claim.amount}</p>
                    <p className={`text-xs capitalize ${
                      claim.status === 'approved' ? 'text-success' :
                      claim.status === 'pending' ? 'text-warning' :
                      'text-info'
                    }`}>
                      {claim.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;