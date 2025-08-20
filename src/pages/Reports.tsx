import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Download,
  Calendar,
  Users,
  DollarSign,
  FileText,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

const Reports = () => {
  const [dateRange, setDateRange] = useState('last_30_days');
  const [reportType, setReportType] = useState('overview');

  const coverageData = [
    { area: 'Urban Areas', percentage: 65, count: 3412, color: 'bg-primary' },
    { area: 'Rural Areas', percentage: 35, count: 1835, color: 'bg-success' }
  ];

  const claimsByCategory = [
    { category: 'Medical', count: 145, percentage: 42, amount: '₦8.2M', color: 'bg-info' },
    { category: 'Accident', count: 89, percentage: 26, amount: '₦5.1M', color: 'bg-warning' },
    { category: 'Life Insurance', count: 76, percentage: 22, amount: '₦9.8M', color: 'bg-success' },
    { category: 'Property', count: 32, percentage: 10, amount: '₦1.7M', color: 'bg-destructive' }
  ];

  const monthlyTrends = [
    { month: 'Jan', claims: 45, payouts: 2.1, newUsers: 234 },
    { month: 'Feb', claims: 52, payouts: 2.8, newUsers: 189 },
    { month: 'Mar', claims: 67, payouts: 3.2, newUsers: 267 },
    { month: 'Apr', claims: 48, payouts: 2.5, newUsers: 198 },
    { month: 'May', claims: 71, payouts: 4.1, newUsers: 345 },
    { month: 'Jun', claims: 59, payouts: 3.6, newUsers: 289 }
  ];

  const topPerformers = [
    { name: 'Kaduna Central', claims: 89, satisfaction: 4.8, growth: '+12%' },
    { name: 'Kaduna South', claims: 76, satisfaction: 4.6, growth: '+8%' },
    { name: 'Kaduna North', claims: 65, satisfaction: 4.7, growth: '+15%' },
    { name: 'Chikun', claims: 54, satisfaction: 4.5, growth: '+6%' },
    { name: 'Igabi', claims: 43, satisfaction: 4.4, growth: '+10%' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Comprehensive insights into your insurance operations
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last_7_days">Last 7 Days</SelectItem>
              <SelectItem value="last_30_days">Last 30 Days</SelectItem>
              <SelectItem value="last_90_days">Last 90 Days</SelectItem>
              <SelectItem value="last_year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={reportType} onValueChange={setReportType}>
            <SelectTrigger className="w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="overview">Overview</SelectItem>
              <SelectItem value="claims">Claims Report</SelectItem>
              <SelectItem value="financial">Financial</SelectItem>
              <SelectItem value="regional">Regional</SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="bg-gradient-primary space-x-2">
            <Download className="h-4 w-4" />
            <span>Export PDF</span>
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-info text-white shadow-[0_8px_30px_rgb(59,130,246,0.2)]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Revenue</p>
                <p className="text-2xl font-bold">₦24.8M</p>
                <p className="text-xs opacity-75">+22.1% vs last period</p>
              </div>
              <div className="p-2 bg-white/20 rounded-lg">
                <DollarSign className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-success text-white shadow-[0_8px_30px_rgb(34,197,94,0.2)]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Claims Processed</p>
                <p className="text-2xl font-bold">342</p>
                <p className="text-xs opacity-75">98.5% success rate</p>
              </div>
              <div className="p-2 bg-white/20 rounded-lg">
                <CheckCircle className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-warning to-warning/80 text-white shadow-[0_8px_30px_rgb(245,158,11,0.2)]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Avg Processing Time</p>
                <p className="text-2xl font-bold">3.2 days</p>
                <p className="text-xs opacity-75">-15% improvement</p>
              </div>
              <div className="p-2 bg-white/20 rounded-lg">
                <Clock className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-primary text-white shadow-glow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Customer Satisfaction</p>
                <p className="text-2xl font-bold">4.7/5</p>
                <p className="text-xs opacity-75">Based on 1,234 reviews</p>
              </div>
              <div className="p-2 bg-white/20 rounded-lg">
                <Users className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Coverage Distribution */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="h-5 w-5 text-primary" />
              <span>Coverage Distribution</span>
            </CardTitle>
            <CardDescription>Urban vs Rural coverage breakdown</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {coverageData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-card-foreground">{item.area}</span>
                  <span className="text-sm text-muted-foreground">{item.count} users</span>
                </div>
                <div className="w-full bg-background-secondary rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${item.color} transition-all duration-500`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{item.percentage}%</span>
                  <span>Total Coverage</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Claims by Category */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Claims by Category</span>
            </CardTitle>
            <CardDescription>Breakdown of claims by insurance type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {claimsByCategory.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-background-secondary rounded-lg hover:bg-card-hover transition-smooth">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded ${item.color}`} />
                  <div>
                    <p className="font-medium text-card-foreground">{item.category}</p>
                    <p className="text-sm text-muted-foreground">{item.count} claims</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-card-foreground">{item.amount}</p>
                  <p className="text-sm text-muted-foreground">{item.percentage}%</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trends */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Monthly Performance Trends</span>
          </CardTitle>
          <CardDescription>Track key metrics over the past 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-6 gap-4">
            {monthlyTrends.map((month, index) => (
              <div key={index} className="text-center space-y-3 p-4 bg-background-secondary rounded-lg hover:bg-card-hover transition-smooth">
                <p className="text-sm font-medium text-muted-foreground">{month.month}</p>
                
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="w-full bg-card-border h-2 rounded-full">
                      <div 
                        className="h-2 bg-info rounded-full transition-all duration-500"
                        style={{ width: `${(month.claims / 80) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-card-foreground">{month.claims} Claims</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="w-full bg-card-border h-2 rounded-full">
                      <div 
                        className="h-2 bg-success rounded-full transition-all duration-500"
                        style={{ width: `${(month.payouts / 5) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-card-foreground">₦{month.payouts}M</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="w-full bg-card-border h-2 rounded-full">
                      <div 
                        className="h-2 bg-warning rounded-full transition-all duration-500"
                        style={{ width: `${(month.newUsers / 400) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-card-foreground">{month.newUsers} Users</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Regional Performance */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Top Performing Regions</span>
          </CardTitle>
          <CardDescription>Regional performance metrics for Kaduna State</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topPerformers.map((region, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-background-secondary rounded-lg hover:bg-card-hover transition-smooth">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-full text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">{region.name}</p>
                    <p className="text-sm text-muted-foreground">{region.claims} claims processed</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-card-foreground">{region.satisfaction}</p>
                    <p className="text-xs text-muted-foreground">Satisfaction</p>
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20">
                    {region.growth}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Export Reports</CardTitle>
          <CardDescription>Download detailed reports in various formats</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start space-x-2 h-12">
              <FileText className="h-4 w-4" />
              <span>Claims Report (CSV)</span>
            </Button>
            <Button variant="outline" className="justify-start space-x-2 h-12">
              <BarChart3 className="h-4 w-4" />
              <span>Analytics Report (PDF)</span>
            </Button>
            <Button variant="outline" className="justify-start space-x-2 h-12">
              <Users className="h-4 w-4" />
              <span>User Activity (Excel)</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;