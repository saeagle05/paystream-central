
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  CreditCard, 
  Lock, 
  CheckCircle, 
  Globe, 
  ArrowRight 
} from "lucide-react";

const PricingSection = () => {
  const pricingTiers = [
    {
      name: "Basic",
      price: "Free",
      description: "Essential banking services for individuals",
      features: [
        "Personal checking account",
        "Debit card",
        "Online & mobile banking",
        "Direct deposit",
        "ATM access",
      ],
      button: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "$9.99/month",
      description: "Advanced features for active users",
      features: [
        "Everything in Basic",
        "Multiple accounts",
        "No foreign transaction fees",
        "Premium customer support",
        "Financial planning tools",
        "Investment options",
      ],
      button: "Start Free Trial",
      popular: true,
    },
    {
      name: "Business",
      price: "$24.99/month",
      description: "Comprehensive solutions for businesses",
      features: [
        "Business checking & savings",
        "Multiple user accounts",
        "Payroll services",
        "Invoice management",
        "Business credit cards",
        "Dedicated account manager",
        "API access",
      ],
      button: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-banking-muted px-3 py-1 text-sm">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Banking Plans for Everyone
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect banking plan that fits your needs. All plans include our core security features.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {pricingTiers.map((tier, i) => (
            <div 
              key={i} 
              className={`flex flex-col p-6 bg-white rounded-xl shadow-lg border ${
                tier.popular ? 'border-banking-accent relative' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-banking-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold mb-2">{tier.price}</div>
                <p className="text-gray-500">{tier.description}</p>
              </div>
              <ul className="flex-1 space-y-2 mb-6">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-banking-accent mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={tier.popular ? "button-gradient" : ""}
                variant={tier.popular ? "default" : "outline"}
              >
                {tier.button}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "PayStream has completely transformed how I manage my finances. The app is intuitive and the security features give me peace of mind.",
      author: "Sarah Johnson",
      title: "Small Business Owner"
    },
    {
      quote: "As someone who travels frequently, having a banking app that works seamlessly across borders has been invaluable. Highly recommend!",
      author: "Michael Chen",
      title: "International Consultant"
    },
    {
      quote: "The customer service is exceptional. Any issues I've had have been resolved quickly and professionally. Best banking experience I've had.",
      author: "Priya Patel",
      title: "Freelance Designer"
    }
  ];

  return (
    <section className="py-16 bg-banking-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-banking-secondary/50 p-6 rounded-xl">
              <div className="text-4xl text-banking-accent mb-4">"</div>
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-banking-muted">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="rounded-xl bg-gradient-to-r from-banking-primary to-banking-accent p-8 md:p-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Ready to Experience Modern Banking?
              </h2>
              <p className="text-white/80 md:text-xl/relaxed">
                Join thousands of satisfied customers who are already enjoying our secure and 
                feature-rich banking platform. Get started in minutes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-white text-banking-primary hover:bg-white/90">
                  <Link to="/register">Open an Account</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                  <Link to="/contact">
                    Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2 bg-white/20 p-4 rounded-lg text-white">
                  <DollarSign className="h-8 w-8" />
                  <span className="text-sm text-center">Competitive Rates</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 bg-white/20 p-4 rounded-lg text-white">
                  <CreditCard className="h-8 w-8" />
                  <span className="text-sm text-center">Free Cards</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 bg-white/20 p-4 rounded-lg text-white">
                  <Lock className="h-8 w-8" />
                  <span className="text-sm text-center">Secure</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 bg-white/20 p-4 rounded-lg text-white">
                  <CheckCircle className="h-8 w-8" />
                  <span className="text-sm text-center">Easy Setup</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 bg-white/20 p-4 rounded-lg text-white">
                  <Globe className="h-8 w-8" />
                  <span className="text-sm text-center">Global Access</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 bg-white/20 p-4 rounded-lg text-white">
                  <ArrowRight className="h-8 w-8" />
                  <span className="text-sm text-center">Get Started</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <PricingSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
