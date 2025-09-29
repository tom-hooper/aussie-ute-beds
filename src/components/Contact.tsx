import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our specialists",
    contact: "1300 TRUCK BED",
    subtext: "(1300 878 252)"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your requirements",
    contact: "info@customtruckbeds.com.au",
    subtext: "We respond within 2 hours"
  },
  {
    icon: MapPin,
    title: "Visit Our Workshop",
    description: "See our craftsmanship firsthand",
    contact: "123 Industrial Drive, Brisbane QLD",
    subtext: "By appointment only"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-steel-blue mb-6">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span className="font-bold text-industrial-orange">Lowest price guaranteed.</span> Got a quote from someone else? 
            Send it through and we'll beat it or give you $200 cash. Fair dinkum promise from one tradie to another.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-steel-blue mb-6">
              Contact Methods
            </h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-accent transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-steel-blue mb-1">
                        {method.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {method.description}
                      </p>
                      <p className="text-steel-blue font-medium">
                        {method.contact}
                      </p>
                      <p className="text-xs text-steel-gray">
                        {method.subtext}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Business Hours */}
            <Card className="border-0 shadow-card bg-gradient-metallic">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-steel-blue rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal mb-2">
                      Business Hours
                    </h4>
                    <div className="space-y-1 text-sm text-steel-gray">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>7:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>8:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-industrial">
              <CardHeader>
                <CardTitle className="flex items-center text-steel-blue">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Request a Quote
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you with a custom quote within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  src="https://n8n.prismera.com.au/form/ce91d8a4-eb40-4069-b51f-9e379a20a34c"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  className="w-full min-h-[800px] rounded-lg"
                  title="Custom Truck Bed Quote Request Form"
                  key="n8n-form"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;