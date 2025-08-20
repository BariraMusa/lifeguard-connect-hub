import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  MessageSquare, 
  Send, 
  Users, 
  Calendar,
  CheckCircle,
  Clock,
  AlertTriangle,
  Plus,
  FileText,
  Filter,
  Download
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Communications = () => {
  const [newMessage, setNewMessage] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [targetAudience, setTargetAudience] = useState('all');
  const [messageTitle, setMessageTitle] = useState('');
  const { toast } = useToast();

  const templates = [
    {
      id: 'approval',
      title: 'Claim Approved',
      content: 'Good news! Your insurance claim #{CLAIM_ID} has been approved. The payout of {AMOUNT} will be processed within 3-5 business days.',
      category: 'Claims'
    },
    {
      id: 'rejection',
      title: 'Claim Under Review',
      content: 'Your claim #{CLAIM_ID} requires additional documentation. Please submit the requested documents within 7 days to proceed.',
      category: 'Claims'
    },
    {
      id: 'safety',
      title: 'Safety Reminder',
      content: 'Stay safe this festive season! Remember to follow safety guidelines and contact us immediately in case of any incidents.',
      category: 'General'
    },
    {
      id: 'renewal',
      title: 'Policy Renewal',
      content: 'Your insurance policy expires on {DATE}. Renew now to continue your coverage without interruption.',
      category: 'Policy'
    },
    {
      id: 'welcome',
      title: 'Welcome to LifeGuard',
      content: 'Welcome to LifeGuard Insurance! Your policy is now active. Download the mobile app to easily manage your coverage.',
      category: 'Onboarding'
    }
  ];

  const sentMessages = [
    {
      id: 'MSG-001',
      title: 'Monthly Safety Reminder',
      content: 'Stay safe this festive season! Remember to follow safety guidelines...',
      recipients: 5247,
      sentDate: '2024-03-15 10:30 AM',
      status: 'delivered',
      deliveryRate: 98.5,
      openRate: 76.2
    },
    {
      id: 'MSG-002',
      title: 'Claim Approval Notifications',
      content: 'Good news! Your insurance claim has been approved...',
      recipients: 23,
      sentDate: '2024-03-14 2:15 PM',
      status: 'delivered',
      deliveryRate: 100,
      openRate: 95.7
    },
    {
      id: 'MSG-003',
      title: 'Policy Renewal Reminders',
      content: 'Your insurance policy expires soon. Renew now to continue...',
      recipients: 156,
      sentDate: '2024-03-13 9:00 AM',
      status: 'sending',
      deliveryRate: 87.2,
      openRate: 0
    },
    {
      id: 'MSG-004',
      title: 'Welcome New Members',
      content: 'Welcome to LifeGuard Insurance! Your policy is now active...',
      recipients: 89,
      sentDate: '2024-03-12 4:45 PM',
      status: 'delivered',
      deliveryRate: 96.6,
      openRate: 82.0
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return <Badge className="bg-success/10 text-success border-success/20">Delivered</Badge>;
      case 'sending':
        return <Badge className="bg-info/10 text-info border-info/20">Sending</Badge>;
      case 'failed':
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleSendMessage = () => {
    if (!messageTitle || !newMessage) {
      toast({
        title: "Missing Information",
        description: "Please fill in both title and message content.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent Successfully",
      description: `Your message has been sent to ${targetAudience === 'all' ? 'all users' : targetAudience}.`,
    });

    setMessageTitle('');
    setNewMessage('');
    setSelectedTemplate('');
  };

  const handleTemplateSelect = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setMessageTitle(template.title);
      setNewMessage(template.content);
      setSelectedTemplate(templateId);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Communications Center</h1>
          <p className="text-muted-foreground mt-1">
            Send notifications and manage communications with users
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Reports</span>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-primary space-x-2">
                <Plus className="h-4 w-4" />
                <span>New Message</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Send New Message</DialogTitle>
                <DialogDescription>
                  Create and send a message to your users via Africa's Talking SMS API
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Template Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Use Template (Optional)
                  </label>
                  <Select value={selectedTemplate} onValueChange={handleTemplateSelect}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a template or create custom message" />
                    </SelectTrigger>
                    <SelectContent>
                      {templates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          <div className="flex items-center justify-between w-full">
                            <span>{template.title}</span>
                            <Badge variant="outline" className="ml-2">{template.category}</Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Target Audience */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Target Audience
                  </label>
                  <Select value={targetAudience} onValueChange={setTargetAudience}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users (5,247)</SelectItem>
                      <SelectItem value="active">Active Users (4,891)</SelectItem>
                      <SelectItem value="pending">Pending Users (156)</SelectItem>
                      <SelectItem value="claims">Users with Claims (200)</SelectItem>
                      <SelectItem value="kaduna_central">Kaduna Central (1,245)</SelectItem>
                      <SelectItem value="kaduna_south">Kaduna South (1,089)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message Title */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Message Title
                  </label>
                  <Input
                    placeholder="Enter message title..."
                    value={messageTitle}
                    onChange={(e) => setMessageTitle(e.target.value)}
                  />
                </div>

                {/* Message Content */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Message Content
                  </label>
                  <Textarea
                    placeholder="Type your message here..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="min-h-[120px]"
                  />
                  <p className="text-xs text-muted-foreground">
                    Use {"{CLAIM_ID}"}, {"{AMOUNT}"}, {"{DATE}"} for dynamic content
                  </p>
                </div>

                {/* Actions */}
                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <Button variant="outline">
                    Preview
                  </Button>
                  <Button onClick={handleSendMessage} className="bg-gradient-primary space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Communication Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-info text-white shadow-[0_8px_30px_rgb(59,130,246,0.2)]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Messages Sent</p>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-xs opacity-75">This month</p>
              </div>
              <div className="p-2 bg-white/20 rounded-lg">
                <MessageSquare className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-success text-white shadow-[0_8px_30px_rgb(34,197,94,0.2)]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Delivery Rate</p>
                <p className="text-2xl font-bold">98.2%</p>
                <p className="text-xs opacity-75">Excellent performance</p>
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
                <p className="text-sm opacity-90">Open Rate</p>
                <p className="text-2xl font-bold">76.5%</p>
                <p className="text-xs opacity-75">Above average</p>
              </div>
              <div className="p-2 bg-white/20 rounded-lg">
                <Users className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-primary text-white shadow-glow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Active Templates</p>
                <p className="text-2xl font-bold">5</p>
                <p className="text-xs opacity-75">Ready to use</p>
              </div>
              <div className="p-2 bg-white/20 rounded-lg">
                <FileText className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Message Templates */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-primary" />
            <span>Message Templates</span>
          </CardTitle>
          <CardDescription>Pre-built templates for common communications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template) => (
              <div key={template.id} className="p-4 bg-background-secondary rounded-lg hover:bg-card-hover transition-smooth cursor-pointer border border-card-border">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-medium text-card-foreground">{template.title}</h4>
                  <Badge variant="outline" className="text-xs">{template.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {template.content}
                </p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleTemplateSelect(template.id)}
                >
                  Use Template
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Message History */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <span>Message History</span>
          </CardTitle>
          <CardDescription>Track sent messages and their performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Select defaultValue="all">
                <SelectTrigger className="w-[160px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Messages</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="sending">Sending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-lg border border-card-border overflow-hidden">
            <Table>
              <TableHeader className="bg-background-secondary">
                <TableRow>
                  <TableHead>Message</TableHead>
                  <TableHead>Recipients</TableHead>
                  <TableHead>Sent Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Delivery Rate</TableHead>
                  <TableHead>Open Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sentMessages.map((message) => (
                  <TableRow key={message.id} className="hover:bg-card-hover transition-smooth">
                    <TableCell>
                      <div>
                        <p className="font-medium text-card-foreground">{message.title}</p>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {message.content}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{message.recipients.toLocaleString()}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{message.sentDate}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(message.status)}
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${
                        message.deliveryRate >= 95 ? 'text-success' : 
                        message.deliveryRate >= 80 ? 'text-warning' : 'text-destructive'
                      }`}>
                        {message.deliveryRate}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${
                        message.openRate >= 70 ? 'text-success' : 
                        message.openRate >= 50 ? 'text-warning' : 
                        message.openRate > 0 ? 'text-destructive' : 'text-muted-foreground'
                      }`}>
                        {message.openRate > 0 ? `${message.openRate}%` : '-'}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Communications;