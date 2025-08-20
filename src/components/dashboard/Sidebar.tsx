import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  LayoutDashboard, 
  Users, 
  FileText, 
  BarChart3, 
  MessageSquare,
  ChevronLeft,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
      description: 'Overview & Analytics'
    },
    {
      title: 'User Management',
      icon: Users,
      path: '/users',
      description: 'Manage Members'
    },
    {
      title: 'Claims Management',
      icon: FileText,
      path: '/claims',
      description: 'Process Claims'
    },
    {
      title: 'Reports & Analytics',
      icon: BarChart3,
      path: '/reports',
      description: 'Data Insights'
    },
    {
      title: 'Communications',
      icon: MessageSquare,
      path: '/communications',
      description: 'Notifications'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={cn(
      "flex flex-col bg-card border-r border-card-border shadow-card transition-all duration-300",
      collapsed ? "w-20" : "w-64"
    )}>
      {/* Header */}
      <div className="p-6 border-b border-card-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-card-foreground">LifeGuard</h1>
                <p className="text-xs text-muted-foreground">Admin Dashboard</p>
              </div>
            </div>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              "h-8 w-8 p-0 hover:bg-card-hover transition-smooth",
              collapsed && "mx-auto"
            )}
          >
            <ChevronLeft className={cn(
              "h-4 w-4 transition-transform",
              collapsed && "rotate-180"
            )} />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-3 py-3 rounded-xl transition-smooth group relative",
                "hover:bg-card-hover hover:shadow-card",
                active ? "bg-gradient-primary text-primary-foreground shadow-primary" : "text-card-foreground"
              )}
            >
              <Icon className={cn(
                "h-5 w-5 transition-colors",
                active ? "text-primary-foreground" : "text-muted-foreground group-hover:text-card-foreground"
              )} />
              
              {!collapsed && (
                <div className="flex-1">
                  <p className={cn(
                    "font-medium text-sm",
                    active ? "text-primary-foreground" : "text-card-foreground"
                  )}>
                    {item.title}
                  </p>
                  <p className={cn(
                    "text-xs opacity-75",
                    active ? "text-primary-foreground" : "text-muted-foreground"
                  )}>
                    {item.description}
                  </p>
                </div>
              )}

              {/* Tooltip for collapsed state */}
              {collapsed && (
                <div className="absolute left-16 bg-popover text-popover-foreground px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-card">
                  {item.title}
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-card-border space-y-2">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start space-x-3 text-card-foreground hover:bg-card-hover transition-smooth",
            collapsed && "px-3"
          )}
        >
          <Settings className="h-5 w-5" />
          {!collapsed && <span>Settings</span>}
        </Button>
        
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start space-x-3 text-destructive hover:bg-destructive/10 transition-smooth",
            collapsed && "px-3"
          )}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span>Sign Out</span>}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;