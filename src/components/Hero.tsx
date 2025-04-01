
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-banking-muted px-3 py-1 text-sm">
              Secure Banking for Everyone
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Banking Made <span className="gradient-text">Simple</span> and <span className="gradient-text">Secure</span>
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience seamless online banking with powerful tools to manage your finances,
              make transfers, and secure your future. All in one place.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="button-gradient">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[600px] relative">
            <div className="bg-gradient-to-r from-banking-primary to-banking-accent rounded-xl p-1">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="bg-white rounded-lg p-6 h-full">
                  <div className="space-y-8">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Current Balance</p>
                        <p className="text-3xl font-bold">$24,589.50</p>
                      </div>
                      <div className="bg-banking-light p-3 rounded-full">
                        <div className="h-6 w-6 bg-banking-primary rounded-sm"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Recent Transactions</p>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex justify-between items-center p-3 bg-banking-light rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                              <div className="h-4 w-4 bg-banking-accent rounded-sm"></div>
                            </div>
                            <div>
                              <p className="font-medium">Amazon</p>
                              <p className="text-xs text-gray-500">Online Shopping</p>
                            </div>
                          </div>
                          <p className="font-medium">-$24.99</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-banking-accent/20 -z-10"></div>
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-banking-primary/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
