
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 md:flex">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 bg-banking-primary rounded-sm"></div>
            <span className="hidden font-bold sm:inline-block text-xl">PayStream</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-foreground/80">Home</Link>
            <Link to="/#features" className="transition-colors hover:text-foreground/80">Features</Link>
            <Link to="/#pricing" className="transition-colors hover:text-foreground/80">Pricing</Link>
            <Link to="/contact" className="transition-colors hover:text-foreground/80">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>

          <button 
            className="inline-flex items-center justify-center md:hidden" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="container flex flex-col space-y-3 py-4">
            <Link to="/" className="py-2 text-lg" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/#features" className="py-2 text-lg" onClick={toggleMobileMenu}>Features</Link>
            <Link to="/#pricing" className="py-2 text-lg" onClick={toggleMobileMenu}>Pricing</Link>
            <Link to="/contact" className="py-2 text-lg" onClick={toggleMobileMenu}>Contact</Link>
            <hr className="my-2" />
            <div className="flex flex-col space-y-3">
              <Button asChild variant="outline">
                <Link to="/login" onClick={toggleMobileMenu}>Login</Link>
              </Button>
              <Button asChild>
                <Link to="/register" onClick={toggleMobileMenu}>Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
