
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountOverview from "@/components/dashboard/AccountOverview";
import UserProfile from "@/components/dashboard/UserProfile";
import { 
  Bell, 
  CreditCard, 
  LogOut, 
  Menu, 
  Settings, 
  User,
  Home,
  ArrowRight,
  X,
  ChevronDown,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  
  const handleNotificationClick = () => {
    toast({
      title: "No new notifications",
      description: "You're all caught up!",
    });
  };
  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for tablet and desktop */}
      <div className={`bg-sidebar border-r border-sidebar-border text-sidebar-foreground hidden md:flex md:w-64 md:flex-col`}>
        <div className="flex h-20 items-center px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-6 w-6 bg-banking-primary rounded-sm"></div>
            <span className="font-bold text-xl">PayStream</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Button 
              variant="ghost" 
              className="justify-start gap-3 h-12"
              asChild
            >
              <Link to="/dashboard">
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start gap-3 h-12"
              asChild
            >
              <Link to="/dashboard">
                <CreditCard className="h-5 w-5" />
                Accounts
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start gap-3 h-12"
              asChild
            >
              <Link to="/dashboard">
                <User className="h-5 w-5" />
                Profile
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start gap-3 h-12"
              asChild
            >
              <Link to="/dashboard">
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </Button>
          </nav>
        </div>
        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3 mb-6">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm">Alex Johnson</p>
              <p className="text-xs text-sidebar-foreground/60">Premium Account</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3"
            asChild
          >
            <Link to="/login">
              <LogOut className="h-5 w-5" />
              Logout
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-3/4 bg-sidebar border-r border-sidebar-border text-sidebar-foreground flex flex-col">
            <div className="flex items-center justify-between h-16 px-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="h-6 w-6 bg-banking-primary rounded-sm"></div>
                <span className="font-bold text-xl">PayStream</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid gap-1 px-2">
                <Button 
                  variant="ghost" 
                  className="justify-start gap-3 h-12"
                  asChild
                  onClick={() => setSidebarOpen(false)}
                >
                  <Link to="/dashboard">
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start gap-3 h-12"
                  asChild
                  onClick={() => setSidebarOpen(false)}
                >
                  <Link to="/dashboard">
                    <CreditCard className="h-5 w-5" />
                    Accounts
                  </Link>
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start gap-3 h-12"
                  asChild
                  onClick={() => setSidebarOpen(false)}
                >
                  <Link to="/dashboard">
                    <User className="h-5 w-5" />
                    Profile
                  </Link>
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start gap-3 h-12"
                  asChild
                  onClick={() => setSidebarOpen(false)}
                >
                  <Link to="/dashboard">
                    <Settings className="h-5 w-5" />
                    Settings
                  </Link>
                </Button>
              </nav>
            </div>
            <div className="border-t border-sidebar-border p-4">
              <div className="flex items-center gap-3 mb-6">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">Alex Johnson</p>
                  <p className="text-xs text-sidebar-foreground/60">Premium Account</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full justify-start gap-3"
                asChild
              >
                <Link to="/login">
                  <LogOut className="h-5 w-5" />
                  Logout
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b">
          <div className="h-16 flex items-center justify-between px-4">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden mr-2"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-lg font-medium">Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleNotificationClick}
              >
                <Bell className="h-5 w-5" />
              </Button>
              <div className="md:hidden">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          <Tabs defaultValue="overview">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>
              
              <div className="hidden md:flex items-center gap-2">
                <Button variant="outline">
                  <ArrowRight className="mr-2 h-4 w-4" /> Make a Payment
                </Button>
                <Button>
                  <CreditCard className="mr-2 h-4 w-4" /> New Transaction
                </Button>
              </div>
            </div>
            
            <TabsContent value="overview" className="space-y-4">
              <AccountOverview />
            </TabsContent>
            
            <TabsContent value="profile">
              <UserProfile />
            </TabsContent>
          </Tabs>
          
          <div className="flex md:hidden justify-between mt-6">
            <Button variant="outline" className="flex-1 mr-2">
              <ArrowRight className="mr-2 h-4 w-4" /> Make a Payment
            </Button>
            <Button className="flex-1">
              <CreditCard className="mr-2 h-4 w-4" /> New Transaction
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
