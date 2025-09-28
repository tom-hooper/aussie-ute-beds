import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import galleryImage1 from "@/assets/truck-bed-gallery-1.jpg";
import galleryImage2 from "@/assets/truck-bed-gallery-2.jpg";

const projects = [
  {
    id: 1,
    image: galleryImage1,
    title: "Heavy Duty Utility Bed",
    description: "Custom steel truck bed with integrated toolbox storage for mining operations",
    category: "Commercial",
    specs: ["2.4m x 1.8m bed", "Aluminum toolboxes", "Powder coated finish"]
  },
  {
    id: 2,
    image: galleryImage2,
    title: "Professional Service Bed",
    description: "Multi-compartment utility bed designed for electrical contractors",
    category: "Professional",
    specs: ["Modular storage", "LED lighting", "Weather sealing"]
  },
  {
    id: 3,
    image: galleryImage1,
    title: "Agricultural Utility Bed",
    description: "Robust steel construction designed for farm and agricultural use",
    category: "Agricultural",
    specs: ["Extra heavy duty", "Livestock friendly", "Corrosion resistant"]
  },
  {
    id: 4,
    image: galleryImage2,
    title: "Emergency Services Bed",
    description: "Specialized utility bed for emergency response vehicles",
    category: "Emergency",
    specs: ["Quick access design", "Medical equipment storage", "Safety compliant"]
  }
];

const Gallery = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-steel-blue mb-6">
            Our Work Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of custom truck bed solutions, showcasing the quality craftsmanship 
            and attention to detail that sets us apart.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-0 shadow-card hover:shadow-industrial transition-all duration-500 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-industrial-orange text-accent-foreground text-sm font-medium rounded-full mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="metallic" size="sm" className="h-8 w-8 p-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-steel-blue mb-2 group-hover:text-industrial-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-steel-gray uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.specs.map((spec, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-industrial-orange rounded-full mr-2"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto">
            <ImageIcon className="mx-auto h-12 w-12 text-industrial-orange mb-4" />
            <h3 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
              Ready to See More?
            </h3>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Browse our complete portfolio or schedule a consultation to discuss your custom truck bed requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                View Full Portfolio
              </Button>
              <Button variant="metallic" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;