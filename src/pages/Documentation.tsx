import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Code, 
  BookOpen, 
  GitBranch,
  Download,
  Terminal,
  Laptop,
  ShieldCheck,
  ArrowRight,
  ExternalLink 
} from "lucide-react";

/**
 * Documentation Page Component
 * Provides comprehensive documentation for users and developers
 */
const Documentation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-banking-muted/50 to-white py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
                PayStream Documentation
              </h1>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                Comprehensive guides, tutorials, and API documentation for PayStream banking platform.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="user-guides" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                  <TabsTrigger value="user-guides" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>User Guides</span>
                  </TabsTrigger>
                  <TabsTrigger value="developer" className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    <span>Developer</span>
                  </TabsTrigger>
                  <TabsTrigger value="api" className="flex items-center gap-2">
                    <Terminal className="h-4 w-4" />
                    <span>API Reference</span>
                  </TabsTrigger>
                  <TabsTrigger value="security" className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Security</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="user-guides" className="border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4">
                      <div className="sticky top-24">
                        <h3 className="font-semibold mb-3">Contents</h3>
                        <ul className="space-y-2">
                          <li><a href="#getting-started" className="text-banking-primary hover:underline">Getting Started</a></li>
                          <li><a href="#account-management" className="text-banking-primary hover:underline">Account Management</a></li>
                          <li><a href="#payments" className="text-banking-primary hover:underline">Payments & Transfers</a></li>
                          <li><a href="#security-features" className="text-banking-primary hover:underline">Security Features</a></li>
                          <li><a href="#mobile-banking" className="text-banking-primary hover:underline">Mobile Banking</a></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4 space-y-10">
                      <div id="getting-started" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">Getting Started with PayStream</h2>
                        <p className="mb-4">Welcome to PayStream! This guide will help you get started with your new banking account.</p>
                        
                        <div className="space-y-4 mb-6">
                          <h3 className="text-xl font-semibold">Creating Your Account</h3>
                          <p>To create a new PayStream account:</p>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li>Click the "Register" button in the top-right corner</li>
                            <li>Fill in your personal information</li>
                            <li>Verify your email address</li>
                            <li>Complete the identity verification process</li>
                            <li>Set up security preferences</li>
                          </ol>
                        </div>

                        <div className="bg-banking-muted/30 p-4 rounded-lg border border-banking-muted">
                          <h4 className="font-semibold">Important Note</h4>
                          <p>For security purposes, account activation may take up to 24 hours after identity verification is complete.</p>
                        </div>
                      </div>

                      <Separator />

                      <div id="account-management" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">Account Management</h2>
                        <p className="mb-4">Learn how to manage your PayStream accounts effectively.</p>
                        
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">Viewing Account Details</h3>
                          <p>Access your account dashboard to view:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Current balance and available funds</li>
                            <li>Recent transactions</li>
                            <li>Pending payments</li>
                            <li>Account statements</li>
                          </ul>
                        </div>

                        {/* Additional content would go here */}
                      </div>

                      <Separator />
                      
                      <div id="payments" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">Payments & Transfers</h2>
                        <p>Learn how to make payments, set up transfers, and manage recurring transactions.</p>
                        
                        {/* Content would go here */}
                      </div>

                      <Separator />
                      
                      <div id="security-features" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">Security Features</h2>
                        <p>Discover how PayStream protects your accounts and personal information.</p>
                        
                        {/* Content would go here */}
                      </div>

                      <Separator />
                      
                      <div id="mobile-banking" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">Mobile Banking</h2>
                        <p>Learn how to use PayStream's mobile banking features for banking on the go.</p>
                        
                        {/* Content would go here */}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="developer" className="border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4">
                      <div className="sticky top-24">
                        <h3 className="font-semibold mb-3">Developer Guide</h3>
                        <ul className="space-y-2">
                          <li><a href="#installation" className="text-banking-primary hover:underline">Installation</a></li>
                          <li><a href="#architecture" className="text-banking-primary hover:underline">Architecture</a></li>
                          <li><a href="#customization" className="text-banking-primary hover:underline">Customization</a></li>
                          <li><a href="#contributing" className="text-banking-primary hover:underline">Contributing</a></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4 space-y-10">
                      <div id="installation" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">Installation</h2>
                        <p className="mb-4">Follow these steps to set up the PayStream project locally.</p>
                        
                        <div className="bg-gray-950 text-gray-300 p-4 rounded-md font-mono text-sm overflow-x-auto mb-6">
                          <div># Clone the repository</div>
                          <div>git clone https://github.com/your-org/paystream.git</div>
                          <div>&nbsp;</div>
                          <div># Navigate to the project directory</div>
                          <div>cd paystream</div>
                          <div>&nbsp;</div>
                          <div># Install dependencies</div>
                          <div>npm install</div>
                          <div>&nbsp;</div>
                          <div># Start the development server</div>
                          <div>npm run dev</div>
                        </div>

                        <h3 className="text-xl font-semibold">Prerequisites</h3>
                        <ul className="list-disc pl-5 space-y-2 my-4">
                          <li>Node.js (v14.0 or higher)</li>
                          <li>npm or yarn</li>
                          <li>Git</li>
                        </ul>
                      </div>

                      <Separator />

                      <div id="architecture" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">Architecture</h2>
                        <p className="mb-4">Understanding the PayStream architecture.</p>
                        
                        <h3 className="text-xl font-semibold">Project Structure</h3>
                        <div className="bg-gray-950 text-gray-300 p-4 rounded-md font-mono text-sm overflow-x-auto my-4">
                          <div>src/</div>
                          <div>├── components/       # UI components</div>
                          <div>├── hooks/           # Custom React hooks</div>
                          <div>├── lib/             # Utility functions</div>
                          <div>├── pages/           # Application pages</div>
                          <div>└── main.tsx         # Entry point</div>
                        </div>

                        <h3 className="text-xl font-semibold mt-6">Key Technologies</h3>
                        <ul className="list-disc pl-5 space-y-2 my-4">
                          <li><strong>React:</strong> UI library</li>
                          <li><strong>TypeScript:</strong> Type-safe JavaScript</li>
                          <li><strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
                          <li><strong>Shadcn UI:</strong> Component library</li>
                          <li><strong>React Router:</strong> Routing solution</li>
                          <li><strong>TanStack Query:</strong> Data fetching and caching</li>
                        </ul>
                      </div>

                      <Separator />

                      <div id="customization" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">Customization</h2>
                        <p>Learn how to customize PayStream for your specific needs.</p>
                        
                        {/* Content would go here */}
                      </div>

                      <Separator />

                      <div id="contributing" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">Contributing</h2>
                        <p className="mb-4">We welcome contributions to PayStream! Please follow these guidelines when contributing.</p>
                        
                        <Button asChild variant="outline" className="mb-6">
                          <a href="https://github.com/your-org/paystream" className="flex items-center gap-2">
                            <GitBranch className="h-4 w-4" />
                            <span>View on GitHub</span>
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </Button>
                        
                        <p>For more details, please refer to our <a href="/CONTRIBUTING.md" className="text-banking-primary hover:underline">Contributing Guidelines</a>.</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="api" className="border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4">
                      <div className="sticky top-24">
                        <h3 className="font-semibold mb-3">API Reference</h3>
                        <ul className="space-y-2">
                          <li><a href="#authentication" className="text-banking-primary hover:underline">Authentication</a></li>
                          <li><a href="#accounts" className="text-banking-primary hover:underline">Accounts</a></li>
                          <li><a href="#transactions" className="text-banking-primary hover:underline">Transactions</a></li>
                          <li><a href="#payments" className="text-banking-primary hover:underline">Payments</a></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4 space-y-10">
                      <div id="authentication" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">Authentication API</h2>
                        <p className="mb-4">Learn how to authenticate with the PayStream API.</p>
                        
                        {/* API documentation content would go here */}
                        <div className="bg-banking-muted/30 p-4 rounded-lg border border-banking-muted">
                          <h4 className="font-semibold">API Credentials</h4>
                          <p>To access the PayStream API, you'll need to request API credentials from our developer portal.</p>
                        </div>
                      </div>

                      {/* Additional API sections would go here */}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="security" className="border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4">
                      <div className="sticky top-24">
                        <h3 className="font-semibold mb-3">Security</h3>
                        <ul className="space-y-2">
                          <li><a href="#security-practices" className="text-banking-primary hover:underline">Security Practices</a></li>
                          <li><a href="#data-protection" className="text-banking-primary hover:underline">Data Protection</a></li>
                          <li><a href="#compliance" className="text-banking-primary hover:underline">Compliance</a></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4 space-y-10">
                      <div id="security-practices" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">Security Practices</h2>
                        <p className="mb-4">PayStream employs industry-leading security practices to protect your data and transactions.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="p-4 border rounded-lg">
                            <h3 className="font-semibold mb-2">Encryption</h3>
                            <p>All data is encrypted in transit and at rest using industry-standard protocols.</p>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <h3 className="font-semibold mb-2">Authentication</h3>
                            <p>Multi-factor authentication and strict password policies protect account access.</p>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <h3 className="font-semibold mb-2">Monitoring</h3>
                            <p>24/7 system monitoring for suspicious activities and potential threats.</p>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <h3 className="font-semibold mb-2">Regular Audits</h3>
                            <p>Comprehensive security audits and penetration testing by third-party experts.</p>
                          </div>
                        </div>
                      </div>

                      {/* Additional security sections would go here */}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Documentation Resources CTA */}
        <section className="py-12 bg-gradient-to-r from-banking-primary to-banking-accent text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Download Our Resources</h2>
                <p className="text-white/90 max-w-xl">
                  Get access to additional documentation, guides, and resources to help you make the most of your PayStream experience.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="secondary" className="flex items-center gap-2">
                  <a href="#" download>
                    <Download className="h-4 w-4" />
                    <span>User Guide PDF</span>
                  </a>
                </Button>
                <Button asChild variant="secondary" className="flex items-center gap-2">
                  <a href="#" download>
                    <Download className="h-4 w-4" />
                    <span>Developer Guide</span>
                  </a>
                </Button>
                <Button asChild variant="secondary" className="flex items-center gap-2">
                  <a href="#" download>
                    <Download className="h-4 w-4" />
                    <span>API Reference</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
