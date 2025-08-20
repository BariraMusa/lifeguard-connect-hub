import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
  Search, 
  Filter, 
  FileText, 
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Download,
  AlertTriangle,
  DollarSign,
  Calendar,
  User
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ClaimsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedClaim, setSelectedClaim] = useState<any>(null);
  const { toast } = useToast();

  const claims = [
    {
      id: 'CLM-001',
      user: 'Mohammed Audu',
      userEmail: 'mohammed.audu@email.com',
      type: 'Medical',
      amount: 125000,
      status: 'pending',
      submittedDate: '2024-03-15',
      description: 'Emergency medical treatment for severe injury',
      documents: ['medical_report.pdf', 'hospital_bill.pdf'],
      priority: 'high',
      assignedTo: 'Dr. Sarah Johnson',
      estimatedProcessing: '2-3 days'
    },
    {
      id: 'CLM-002',
      user: 'Fatima Hassan',
      userEmail: 'fatima.hassan@email.com',
      type: 'Accident',
      amount: 89500,
      status: 'reviewing',
      submittedDate: '2024-03-14',
      description: 'Vehicle accident compensation claim',
      documents: ['police_report.pdf', 'vehicle_damage.pdf'],
      priority: 'medium',
      assignedTo: 'Agent Mike Wilson',
      estimatedProcessing: '5-7 days'
    },
    {
      id: 'CLM-003',
      user: 'Ibrahim Sani',
      userEmail: 'ibrahim.sani@email.com',
      type: 'Life',
      amount: 450000,
      status: 'approved',
      submittedDate: '2024-03-10',
      description: 'Life insurance claim for deceased family member',
      documents: ['death_certificate.pdf', 'policy_document.pdf'],
      priority: 'high',
      assignedTo: 'Senior Agent Lisa Brown',
      estimatedProcessing: 'Completed'
    },
    {
      id: 'CLM-004',
      user: 'Aisha Musa',
      userEmail: 'aisha.musa@email.com',
      type: 'Medical',
      amount: 67200,
      status: 'rejected',
      submittedDate: '2024-03-12',
      description: 'Dental treatment claim',
      documents: ['dental_receipt.pdf'],
      priority: 'low',
      assignedTo: 'Agent Tom Davis',
      estimatedProcessing: 'Rejected - Insufficient documentation'
    },
    {
      id: 'CLM-005',
      user: 'Yusuf Danjuma',
      userEmail: 'yusuf.danjuma@email.com',
      type: 'Property',
      amount: 234000,
      status: 'pending',
      submittedDate: '2024-03-16',
      description: 'Property damage due to flooding',
      documents: ['property_photos.pdf', 'damage_assessment.pdf'],
      priority: 'medium',
      assignedTo: 'Agent Rachel Green',
      estimatedProcessing: '3-5 days'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-success/10 text-success border-success/20">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
      case 'reviewing':
        return <Badge className="bg-info/10 text-info border-info/20">Reviewing</Badge>;
      case 'rejected':
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">High</Badge>;
      case 'medium':
        return <Badge className="bg-warning/10 text-warning border-warning/20">Medium</Badge>;
      case 'low':
        return <Badge className="bg-success/10 text-success border-success/20">Low</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  const handleApprove = (claimId: string) => {
    toast({
      title: "Claim Approved",
      description: `Claim ${claimId} has been approved successfully.`,
    });
  };

  const handleReject = (claimId: string) => {
    toast({
      title: "Claim Rejected",
      description: `Claim ${claimId} has been rejected.`,
      variant: "destructive",
    });
  };

  const filteredClaims = claims.filter(claim => {
    const matchesSearch = claim.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || claim.status === statusFilter;
    const matchesType = typeFilter === 'all' || claim.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Claims Management</h1>
          <p className="text-muted-foreground mt-1">
            Review and process insurance claims efficiently
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Claims</span>
          </Button>
          <Button className="bg-gradient-primary space-x-2">
            <FileText className="h-4 w-4" />
            <span>Generate Report</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Claims</p>
                <p className="text-2xl font-bold text-card-foreground">342</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Review</p>
                <p className="text-2xl font-bold text-warning">89</p>
              </div>
              <div className="p-2 bg-warning/10 rounded-lg">
                <Clock className="h-5 w-5 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Approved</p>
                <p className="text-2xl font-bold text-success">234</p>
              </div>
              <div className="p-2 bg-success/10 rounded-lg">
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Payouts</p>
                <p className="text-2xl font-bold text-info">₦24.8M</p>
              </div>
              <div className="p-2 bg-info/10 rounded-lg">
                <DollarSign className="h-5 w-5 text-info" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Claims Table */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Claims Queue</CardTitle>
          <CardDescription>Review and process submitted insurance claims</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search claims by ID, user, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewing">Reviewing</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Medical">Medical</SelectItem>
                <SelectItem value="Accident">Accident</SelectItem>
                <SelectItem value="Life">Life</SelectItem>
                <SelectItem value="Property">Property</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-lg border border-card-border overflow-hidden">
            <Table>
              <TableHeader className="bg-background-secondary">
                <TableRow>
                  <TableHead>Claim ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClaims.map((claim) => (
                  <TableRow key={claim.id} className="hover:bg-card-hover transition-smooth">
                    <TableCell>
                      <span className="font-medium text-primary">{claim.id}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">
                            {claim.user.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-card-foreground">{claim.user}</p>
                          <p className="text-xs text-muted-foreground">{claim.userEmail}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{claim.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">₦{claim.amount.toLocaleString()}</span>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(claim.status)}
                    </TableCell>
                    <TableCell>
                      {getPriorityBadge(claim.priority)}
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">{claim.submittedDate}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => setSelectedClaim(claim)}
                              className="h-8 w-8 p-0"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Claim Details - {selectedClaim?.id}</DialogTitle>
                              <DialogDescription>
                                Review claim information and take action
                              </DialogDescription>
                            </DialogHeader>
                            {selectedClaim && (
                              <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <p className="text-sm font-medium text-muted-foreground">Claimant</p>
                                    <p className="text-card-foreground">{selectedClaim.user}</p>
                                  </div>
                                  <div className="space-y-2">
                                    <p className="text-sm font-medium text-muted-foreground">Amount</p>
                                    <p className="text-card-foreground font-medium">₦{selectedClaim.amount.toLocaleString()}</p>
                                  </div>
                                  <div className="space-y-2">
                                    <p className="text-sm font-medium text-muted-foreground">Type</p>
                                    <Badge variant="outline">{selectedClaim.type}</Badge>
                                  </div>
                                  <div className="space-y-2">
                                    <p className="text-sm font-medium text-muted-foreground">Priority</p>
                                    {getPriorityBadge(selectedClaim.priority)}
                                  </div>
                                </div>
                                
                                <div className="space-y-2">
                                  <p className="text-sm font-medium text-muted-foreground">Description</p>
                                  <p className="text-card-foreground">{selectedClaim.description}</p>
                                </div>
                                
                                <div className="space-y-2">
                                  <p className="text-sm font-medium text-muted-foreground">Documents</p>
                                  <div className="flex flex-wrap gap-2">
                                    {selectedClaim.documents.map((doc: string, index: number) => (
                                      <Button key={index} variant="outline" size="sm" className="space-x-2">
                                        <FileText className="h-3 w-3" />
                                        <span>{doc}</span>
                                      </Button>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="flex justify-end space-x-3 pt-4 border-t">
                                  <Button 
                                    variant="destructive" 
                                    onClick={() => handleReject(selectedClaim.id)}
                                    className="space-x-2"
                                  >
                                    <XCircle className="h-4 w-4" />
                                    <span>Reject</span>
                                  </Button>
                                  <Button 
                                    className="bg-gradient-success space-x-2"
                                    onClick={() => handleApprove(selectedClaim.id)}
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                    <span>Approve</span>
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        
                        {claim.status === 'pending' && (
                          <>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleApprove(claim.id)}
                              className="h-8 w-8 p-0 text-success hover:bg-success/10"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleReject(claim.id)}
                              className="h-8 w-8 p-0 text-destructive hover:bg-destructive/10"
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {filteredClaims.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No claims found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ClaimsManagement;