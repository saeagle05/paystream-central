
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ShieldCheck, CreditCard, Users, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/**
 * FAQ Page Component
 * Displays frequently asked questions organized by category
 */
const FAQ = () => {
  // FAQ data organized by categories
  const faqCategories = [
    {
      title: "Account Management",
      icon: <Users className="h-6 w-6 text-banking-primary" />,
      items: [
        {
          question: "How do I create a new PayStream account?",
          answer: "To create a new account, click on the 'Register' button in the top navigation bar. Fill in your personal information, verify your email address, and complete any required identification steps. Once approved, you'll be able to access your new account."
        },
        {
          question: "Is there a minimum balance requirement?",
          answer: "PayStream Basic accounts have no minimum balance requirements. Premium and Business accounts may require minimum balances to avoid monthly service fees. Please refer to our pricing page for specific details based on your account type."
        },
        {
          question: "How do I reset my password?",
          answer: "Click on the 'Login' button and select 'Forgot Password'. Enter the email address associated with your account, and we'll send you a secure link to reset your password. For security reasons, password reset links expire after 30 minutes."
        }
      ]
    },
    {
      title: "Security",
      icon: <ShieldCheck className="h-6 w-6 text-banking-primary" />,
      items: [
        {
          question: "How does PayStream protect my personal information?",
          answer: "PayStream employs industry-leading security measures including 256-bit encryption, multi-factor authentication, and continuous security monitoring. We never share your personal information with third parties without your explicit consent, and we comply with all relevant data protection regulations."
        },
        {
          question: "What should I do if I notice suspicious activity on my account?",
          answer: "If you notice any suspicious activity, contact our security team immediately at 1-800-PAYSTREAM or through the secure messaging system in your account dashboard. We recommend changing your password immediately and enabling additional security features like two-factor authentication."
        },
        {
          question: "Does PayStream offer two-factor authentication?",
          answer: "Yes, PayStream offers multiple two-factor authentication options including SMS verification, email codes, authenticator apps, and hardware security keys. We strongly recommend enabling at least one form of two-factor authentication for enhanced account security."
        }
      ]
    },
    {
      title: "Payments and Transfers",
      icon: <CreditCard className="h-6 w-6 text-banking-primary" />,
      items: [
        {
          question: "How long do transfers between PayStream accounts take?",
          answer: "Transfers between PayStream accounts are typically instant. In rare cases, large transfers may be subject to security verification which can take up to 24 hours to complete."
        },
        {
          question: "What are the fees for international transfers?",
          answer: "International transfer fees vary depending on your account type, destination country, and transfer amount. Basic accounts have a 1.5% fee (minimum $5), while Premium and Business accounts enjoy reduced fees. All fees are clearly displayed before you confirm any transaction."
        },
        {
          question: "How do I set up recurring payments?",
          answer: "To set up recurring payments, log into your dashboard and select 'Payments' > 'Recurring Payments'. Choose the recipient, amount, frequency, and duration of the recurring payment. You can modify or cancel recurring payments at any time before the next scheduled payment."
        }
      ]
    },
    {
      title: "International Services",
      icon: <Globe className="h-6 w-6 text-banking-primary" />,
      items: [
        {
          question: "Can I use my PayStream account while traveling abroad?",
          answer: "Yes, PayStream accounts can be accessed globally. We recommend notifying us of your travel plans through your account settings to prevent any security flags. Premium and Business accounts include free international ATM withdrawals and reduced foreign transaction fees."
        },
        {
          question: "Does PayStream support multiple currencies?",
          answer: "Yes, PayStream supports over 40 currencies. Premium and Business accounts can hold balances in multiple currencies simultaneously. Currency exchange rates are updated in real-time and clearly displayed before any currency conversion transaction."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-banking-muted/50 to-white py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                Find answers to common questions about PayStream banking services. If you can't find what you're looking for, our support team is ready to help.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {faqCategories.map((category, index) => (
                <a 
                  key={index} 
                  href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  {category.icon}
                  <span>{category.title}</span>
                </a>
              ))}
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex} 
                  id={category.title.toLowerCase().replace(/\s+/g, '-')}
                  className="scroll-mt-24"
                >
                  <div className="flex items-center gap-3 mb-6">
                    {category.icon}
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} value={`${categoryIndex}-${itemIndex}`}>
                        <AccordionTrigger className="text-left text-lg font-medium">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-12 bg-banking-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-xl mb-8">Our support team is here to help you with any questions you may have.</p>
              <Button asChild size="lg" className="bg-white text-banking-primary hover:bg-white/90">
                <Link to="/contact">
                  Contact Support <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
