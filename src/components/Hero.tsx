import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-truck-bed.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Custom truck bed installation in professional workshop"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Custom Truck Beds
          <span className="block text-industrial-orange">Built for Australia</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Premium utility vehicle solutions crafted with precision steel fabrication. 
          Engineered for durability, designed for performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="accent" size="lg" className="text-lg px-8 py-6">
            <Phone className="mr-2 h-5 w-5" />
            Get Free Quote
          </Button>
          <Button variant="metallic" size="lg" className="text-lg px-8 py-6">
            View Gallery
          </Button>
        </div>

        {/* Quick Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-primary-foreground/80">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>1300 TRUCK BED</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>info@customtruckbeds.com.au</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Nationwide Installation</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-industrial-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;