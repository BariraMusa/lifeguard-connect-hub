import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      if (credentials.username && credentials.password) {
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
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-dashboard flex items-center justify-center p-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl shadow-glow mb-4">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-card-foreground mb-2">LifeGuard Insurance</h1>
          <p className="text-muted-foreground">Admin Dashboard Access</p>
        </div>

        {/* Login Card */}
        <Card className="bg-card/80 backdrop-blur-sm border-card-border shadow-card-hover">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl font-semibold text-card-foreground">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Enter your credentials to access the dashboard
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-card-foreground font-medium">
                  Username or Email
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="admin@lifeguard.com"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  className="bg-background-secondary border-0 focus:bg-card focus:shadow-primary transition-smooth"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-card-foreground font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    className="bg-background-secondary border-0 focus:bg-card focus:shadow-primary transition-smooth pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-card-hover"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="rounded border-card-border" />
                  <span>Remember me</span>
                </label>
                <Button variant="link" className="text-primary text-sm p-0 h-auto">
                  Forgot password?
                </Button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-primary-hover transition-smooth"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Need access? Contact your system administrator
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 LifeGuard Insurance. All rights reserved.</p>
          <p className="mt-1">Secure • Reliable • Professional</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
