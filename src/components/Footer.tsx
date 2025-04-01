
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-banking-primary text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-white rounded-sm"></div>
              <span className="font-bold text-xl">PayStream</span>
            </div>
            <p className="text-banking-muted">
              Providing secure, modern banking solutions for individuals and businesses since 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-banking-muted hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-banking-muted hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-banking-muted hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-banking-muted hover:text-white">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-banking-muted hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-banking-muted hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/#features" className="text-banking-muted hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-banking-muted hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="text-banking-muted hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Banking Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/personal" className="text-banking-muted hover:text-white transition-colors">Personal Banking</Link>
              </li>
              <li>
                <Link to="/business" className="text-banking-muted hover:text-white transition-colors">Business Banking</Link>
              </li>
              <li>
                <Link to="/loans" className="text-banking-muted hover:text-white transition-colors">Loans</Link>
              </li>
              <li>
                <Link to="/investments" className="text-banking-muted hover:text-white transition-colors">Investments</Link>
              </li>
              <li>
                <Link to="/cards" className="text-banking-muted hover:text-white transition-colors">Credit Cards</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-banking-muted" />
              <p className="text-banking-muted">123 Banking Street, Finance District, NY 10001</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-banking-muted" />
              <p className="text-banking-muted">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-banking-muted" />
              <p className="text-banking-muted">support@paystream.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-banking-secondary/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-banking-muted text-sm">
            &copy; {new Date().getFullYear()} PayStream. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-banking-muted hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-banking-muted hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/security" className="text-banking-muted hover:text-white text-sm transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
