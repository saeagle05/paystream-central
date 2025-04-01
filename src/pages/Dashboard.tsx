
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  DollarSign,
  Users,
  Activity,
  Wallet,
  PiggyBank,
  RefreshCw,
  BellRing
} from "lucide-react";

const AccountCard = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span>Main Account</span>
          <span className="text-xs bg-banking-light px-2 py-1 rounded-full">Active</span>
        </CardTitle>
        <CardDescription className="flex items-center">
          <span>**** **** **** 5678</span>
          <CreditCard className="h-4 w-4 ml-2 text-banking-accent" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="text-2xl font-bold">$24,589.50</div>
          <p className="text-xs text-muted-foreground">Available Balance</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
            <span className="flex items-center gap-1 text-green-600">
              <ArrowUpRight className="h-3 w-3" />
              <span>Income: $3,245.00</span>
            </span>
            <span className="flex items-center gap-1 text-red-600">
              <ArrowDownRight className="h-3 w-3" />
              <span>Expenses: $1,550.25</span>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SavingsCard = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span>Savings Account</span>
          <span className="text-xs bg-banking-light px-2 py-1 rounded-full">3.5% APY</span>
        </CardTitle>
        <CardDescription className="flex items-center">
          <span>**** **** **** 9012</span>
          <PiggyBank className="h-4 w-4 ml-2 text-banking-accent" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="text-2xl font-bold">$12,750.80</div>
          <p className="text-xs text-muted-foreground">Savings Balance</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
            <span className="flex items-center gap-1 text-green-600">
              <ArrowUpRight className="h-3 w-3" />
              <span>Interest: $37.25 this month</span>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TransactionItem = ({ 
  merchant, 
  category, 
  amount, 
  date, 
  type 
}: { 
  merchant: string; 
  category: string; 
  amount: string; 
  date: string; 
  type: "credit" | "debit"; 
}) => {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0">
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          type === "credit" ? "bg-green-100" : "bg-red-100"
        }`}>
          {type === "credit" ? (
            <ArrowUpRight className="h-5 w-5 text-green-600" />
          ) : (
            <ArrowDownRight className="h-5 w-5 text-red-600" />
          )}
        </div>
        <div>
          <div className="font-medium">{merchant}</div>
          <div className="text-sm text-muted-foreground">{category}</div>
        </div>
      </div>
      <div className="text-right">
        <div className={`font-medium ${
          type === "credit" ? "text-green-600" : "text-red-600"
        }`}>
          {type === "credit" ? "+" : "-"}{amount}
        </div>
        <div className="text-sm text-muted-foreground">{date}</div>
      </div>
    </div>
  );
};

const QuickActions = () => {
  const actions = [
    { icon: <RefreshCw className="h-5 w-5" />, name: "Transfer" },
    { icon: <CreditCard className="h-5 w-5" />, name: "Pay Bill" },
    { icon: <DollarSign className="h-5 w-5" />, name: "Deposit" },
    { icon: <Users className="h-5 w-5" />, name: "Send Money" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4">
          {actions.map((action, i) => (
            <Button key={i} variant="outline" className="flex flex-col h-auto p-4 gap-2">
              <div className="bg-banking-light p-2 rounded-full">
                {action.icon}
              </div>
              <span className="text-sm">{action.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const transactions = [
    { merchant: "Amazon", category: "Shopping", amount: "$49.99", date: "Today", type: "debit" as const },
    { merchant: "Netflix", category: "Subscription", amount: "$12.99", date: "Yesterday", type: "debit" as const },
    { merchant: "Salary", category: "Income", amount: "$3,500.00", date: "Jul 1", type: "credit" as const },
    { merchant: "Starbucks", category: "Food & Drink", amount: "$5.75", date: "Jun 30", type: "debit" as const },
    { merchant: "Transfer", category: "Savings", amount: "$500.00", date: "Jun 28", type: "debit" as const },
    { merchant: "Freelance", category: "Income", amount: "$750.00", date: "Jun 25", type: "credit" as const }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Alex</h1>
              <p className="text-muted-foreground">Here's a summary of your accounts</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AccountCard />
              <SavingsCard />
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Notifications</span>
                    <span className="bg-banking-primary text-white text-xs px-2 py-1 rounded-full">3</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-banking-light/50 p-3 rounded-lg flex items-start gap-3">
                    <BellRing className="h-5 w-5 text-banking-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Payment Received</p>
                      <p className="text-sm text-muted-foreground">You received $750.00 from Client XYZ</p>
                    </div>
                  </div>
                  <div className="bg-banking-light/50 p-3 rounded-lg flex items-start gap-3">
                    <BellRing className="h-5 w-5 text-banking-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Bill Due Soon</p>
                      <p className="text-sm text-muted-foreground">Electric bill of $85.50 due in 3 days</p>
                    </div>
                  </div>
                  <div className="bg-banking-light/50 p-3 rounded-lg flex items-start gap-3">
                    <BellRing className="h-5 w-5 text-banking-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Security Alert</p>
                      <p className="text-sm text-muted-foreground">New login detected from Chicago, IL</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <QuickActions />

            <Tabs defaultValue="all" className="w-full">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Recent Transactions</h2>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="income">Income</TabsTrigger>
                  <TabsTrigger value="expenses">Expenses</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-1">
                      {transactions.map((transaction, i) => (
                        <TransactionItem key={i} {...transaction} />
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-4">
                      View All Transactions
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="income" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-1">
                      {transactions
                        .filter(t => t.type === "credit")
                        .map((transaction, i) => (
                          <TransactionItem key={i} {...transaction} />
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="expenses" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-1">
                      {transactions
                        .filter(t => t.type === "debit")
                        .map((transaction, i) => (
                          <TransactionItem key={i} {...transaction} />
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
