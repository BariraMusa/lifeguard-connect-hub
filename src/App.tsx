import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import ClaimsManagement from "./pages/ClaimsManagement";
import Reports from "./pages/Reports";
import Communications from "./pages/Communications";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/users" element={<DashboardLayout />}>
            <Route index element={<UserManagement />} />
          </Route>
          <Route path="/claims" element={<DashboardLayout />}>
            <Route index element={<ClaimsManagement />} />
          </Route>
          <Route path="/reports" element={<DashboardLayout />}>
            <Route index element={<Reports />} />
          </Route>
          <Route path="/communications" element={<DashboardLayout />}>
            <Route index element={<Communications />} />
          </Route>
          
          {/* Fallback routes */}
          <Route path="/old-home" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
