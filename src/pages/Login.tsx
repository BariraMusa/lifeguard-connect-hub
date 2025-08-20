import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, EyeOff, Users, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Welcome to LifeGuard Insurance Dashboard",
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Login Failed", 
        description: "Please enter valid credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dashboard flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8">
        
        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col justify-center space-y-8 p-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">LifeGuard</h1>
                <p className="text-muted-foreground">Insurance Management System</p>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-foreground leading-tight">
              Protecting Lives,<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Building Trust
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive insurance management for agents and administrators. 
              Monitor claims, manage users, and analyze performance in real-time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-card rounded-xl shadow-card">
              <div className="p-2 bg-success/10 rounded-lg">
                <Users className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">5,000+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-card rounded-xl shadow-card">
              <div className="p-2 bg-info/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-info" />
              </div>
              <div>
                <p className="font-semibold text-card-foreground">98.5%</p>
                <p className="text-sm text-muted-foreground">Claim Success</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-card-border shadow-card-hover">
            <CardHeader className="space-y-1 text-center">
              <div className="flex justify-center mb-4 lg:hidden">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <CardDescription>
                Enter your credentials to access the dashboard
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@lifeguard.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 transition-smooth focus:shadow-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 pr-12 transition-smooth focus:shadow-primary"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-primary hover:shadow-glow transition-smooth font-semibold"
                >
                  Sign In to Dashboard
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Forgot your password?{' '}
                  <button className="text-accent hover:text-accent-light transition-smooth font-medium">
                    Reset here
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;