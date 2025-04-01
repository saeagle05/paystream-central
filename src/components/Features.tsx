
import { 
  CreditCard, 
  Lock, 
  Smartphone, 
  Wallet, 
  Globe, 
  Shield, 
  Clock, 
  RefreshCw 
} from "lucide-react";

const featuresData = [
  {
    icon: <Wallet className="h-10 w-10 text-banking-primary" />,
    title: "Account Management",
    description: "Easily manage all your accounts in one place with real-time updates and detailed transaction history."
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-banking-primary" />,
    title: "Money Transfers",
    description: "Send money locally or internationally with competitive rates and fast processing times."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-banking-primary" />,
    title: "Online Payments",
    description: "Pay bills, make purchases, and manage subscriptions with our secure payment system."
  },
  {
    icon: <Shield className="h-10 w-10 text-banking-primary" />,
    title: "Advanced Security",
    description: "Rest easy with industry-leading security features including biometric authentication and encryption."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-banking-primary" />,
    title: "Mobile Banking",
    description: "Bank on the go with our fully-featured mobile app available for iOS and Android."
  },
  {
    icon: <Clock className="h-10 w-10 text-banking-primary" />,
    title: "24/7 Support",
    description: "Get help whenever you need it with our round-the-clock customer support team."
  },
  {
    icon: <Globe className="h-10 w-10 text-banking-primary" />,
    title: "Global Access",
    description: "Access your accounts from anywhere in the world with our international banking network."
  },
  {
    icon: <Lock className="h-10 w-10 text-banking-primary" />,
    title: "Data Privacy",
    description: "Your data privacy is our top priority with transparent policies and user control."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-banking-light">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-banking-muted px-3 py-1 text-sm">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need in One Place
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our banking platform offers a comprehensive suite of features designed to make 
              your financial life easier, more secure, and more efficient.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm border transition-all duration-200 hover:shadow-md"
            >
              <div className="p-2 bg-banking-muted rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
