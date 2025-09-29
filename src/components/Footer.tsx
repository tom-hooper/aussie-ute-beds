import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-industrial-orange">
              Custom Truck Beds
            </h3>
            <p className="text-primary-foreground/80">
              Built by tradies for tradies. Quality truck beds at Australia's lowest guaranteed prices. 
              We'll beat any quote or your money back.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-industrial-orange p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-industrial-orange p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/60 hover:text-industrial-orange p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-industrial-orange transition-colors">Custom Truck Beds</a></li>
              <li><a href="#" className="hover:text-industrial-orange transition-colors">Toolbox Integration</a></li>
              <li><a href="#" className="hover:text-industrial-orange transition-colors">Protective Coatings</a></li>
              <li><a href="#" className="hover:text-industrial-orange transition-colors">Installation Service</a></li>
              <li><a href="#" className="hover:text-industrial-orange transition-colors">Maintenance</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Industries</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-industrial-orange transition-colors">Mining & Construction</a></li>
              <li><a href="#" className="hover:text-industrial-orange transition-colors">Agriculture</a></li>
              <li><a href="#" className="hover:text-industrial-orange transition-colors">Emergency Services</a></li>
              <li><a href="#" className="hover:text-industrial-orange transition-colors">Trades & Contractors</a></li>
              <li><a href="#" className="hover:text-industrial-orange transition-colors">Government Fleet</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-industrial-orange" />
                <span>1300 TRUCK BED</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="h-4 w-4 text-industrial-orange" />
                <span>info@customtruckbeds.com.au</span>
              </div>
              <div className="flex items-start space-x-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-industrial-orange mt-1" />
                <span>123 Industrial Drive<br />Brisbane QLD 4000</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/60 text-sm">
            © 2024 Custom Truck Beds Australia. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-industrial-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-industrial-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-industrial-orange transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;