import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, Truck, Settings, Award, Clock } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Custom Truck Beds",
    description: "Tailored solutions for utility vehicles, utes, and commercial trucks with precision steel fabrication.",
    features: ["Heavy-duty steel construction", "Custom dimensions", "Professional installation"]
  },
  {
    icon: Settings,
    title: "Toolbox Integration",
    description: "Seamlessly integrated storage solutions with aluminum toolboxes and compartments.",
    features: ["Aluminum toolboxes", "Secure locking systems", "Weather-resistant seals"]
  },
  {
    icon: Shield,
    title: "Protective Coatings",
    description: "Advanced coating systems for maximum durability against Australian conditions.",
    features: ["Powder coating options", "Galvanized finishes", "UV protection"]
  },
  {
    icon: Wrench,
    title: "Installation & Service",
    description: "Professional nationwide installation and ongoing maintenance services.",
    features: ["Certified technicians", "Warranty coverage", "After-sales support"]
  }
];

const features = [
  {
    icon: Award,
    title: "Australian Made",
    description: "Proudly manufactured in Australia using local materials and craftsmanship"
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick delivery times without compromising on quality or precision"
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Engineered for harsh Australian conditions with premium materials"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-steel-blue mb-6">
            Professional Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom fabrication to professional installation, we deliver complete utility vehicle solutions 
            tailored to your specific requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-industrial transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-steel-blue">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-4">
                  {service.description}
                </CardDescription>
                <ul className="text-sm text-steel-gray space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-industrial-orange rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-metallic rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-charcoal mb-4">
              Why Choose Our Solutions?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-12 h-12 bg-steel-blue rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-charcoal mb-2">
                  {feature.title}
                </h4>
                <p className="text-steel-gray">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="industrial" size="lg" className="px-8 py-6">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;