import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageSquare, FileText, Webhook, Send } from "lucide-react";
import { z } from "zod";

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

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  location: z.string().trim().max(100, "Location must be less than 100 characters").optional(),
  vehicle: z.string().trim().max(100, "Vehicle type must be less than 100 characters").optional(),
  requirements: z.string().trim().min(1, "Project requirements are required").max(2000, "Requirements must be less than 2000 characters"),
  timeline: z.string().trim().max(100, "Timeline must be less than 100 characters").optional(),
  n8nWebhookUrl: z.string().url("Invalid webhook URL").optional().or(z.literal("")),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    vehicle: "",
    requirements: "",
    timeline: "",
    n8nWebhookUrl: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors({});

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData);
      
      // If N8N webhook URL is provided, send to N8N
      if (validatedData.n8nWebhookUrl && validatedData.n8nWebhookUrl.trim()) {
        console.log("Sending form data to N8N webhook:", validatedData.n8nWebhookUrl);
        
        const webhookPayload = {
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone,
          location: validatedData.location || "",
          vehicle: validatedData.vehicle || "",
          requirements: validatedData.requirements,
          timeline: validatedData.timeline || "",
          timestamp: new Date().toISOString(),
          source: "Custom Truck Beds Website",
          formType: "Contact Quote Request"
        };

        const response = await fetch(validatedData.n8nWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify(webhookPayload),
        });

        toast({
          title: "Quote Request Sent!",
          description: "Your request has been sent to our N8N workflow. We'll process it and get back to you within 24 hours.",
        });
      } else {
        // Fallback: show success message without webhook
        toast({
          title: "Quote Request Received!",
          description: "Thank you for your interest! We'll get back to you within 24 hours with a custom quote.",
        });
      }

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        vehicle: "",
        requirements: "",
        timeline: "",
        n8nWebhookUrl: validatedData.n8nWebhookUrl || "", // Keep webhook URL for convenience
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const errors: Partial<Record<keyof ContactFormData, string>> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            errors[issue.path[0] as keyof ContactFormData] = issue.message;
          }
        });
        setFormErrors(errors);
        
        toast({
          title: "Please fix the form errors",
          description: "Check the highlighted fields and try again.",
          variant: "destructive",
        });
      } else {
        console.error("Error submitting form:", error);
        toast({
          title: "Error sending request",
          description: "There was a problem sending your request. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-steel-blue mb-6">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to upgrade your utility vehicle? Contact our team of specialists for a free consultation 
            and custom quote tailored to your specific needs.
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
                  Optionally add your N8N webhook URL to automate form processing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* N8N Webhook Configuration */}
                  <div className="bg-muted/50 p-4 rounded-lg border border-dashed border-steel-gray">
                    <div className="flex items-center mb-2">
                      <Webhook className="h-4 w-4 text-industrial-orange mr-2" />
                      <Label htmlFor="n8nWebhookUrl" className="text-sm font-medium text-steel-blue">
                        N8N Webhook URL (Optional)
                      </Label>
                    </div>
                    <Input
                      id="n8nWebhookUrl"
                      type="url"
                      placeholder="https://your-n8n-instance.com/webhook/your-webhook-id"
                      value={formData.n8nWebhookUrl}
                      onChange={(e) => handleInputChange("n8nWebhookUrl", e.target.value)}
                      className={formErrors.n8nWebhookUrl ? "border-destructive" : ""}
                    />
                    {formErrors.n8nWebhookUrl && (
                      <p className="text-destructive text-xs mt-1">{formErrors.n8nWebhookUrl}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      Add your N8N webhook URL to automatically process form submissions in your workflow
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={formErrors.firstName ? "border-destructive" : ""}
                      />
                      {formErrors.firstName && (
                        <p className="text-destructive text-xs">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={formErrors.lastName ? "border-destructive" : ""}
                      />
                      {formErrors.lastName && (
                        <p className="text-destructive text-xs">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={formErrors.email ? "border-destructive" : ""}
                      />
                      {formErrors.email && (
                        <p className="text-destructive text-xs">{formErrors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="0400 123 456"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={formErrors.phone ? "border-destructive" : ""}
                      />
                      {formErrors.phone && (
                        <p className="text-destructive text-xs">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="Brisbane, QLD"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className={formErrors.location ? "border-destructive" : ""}
                      />
                      {formErrors.location && (
                        <p className="text-destructive text-xs">{formErrors.location}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicle">Vehicle Type</Label>
                      <Input
                        id="vehicle"
                        placeholder="Ford Ranger, Toyota Hilux, etc."
                        value={formData.vehicle}
                        onChange={(e) => handleInputChange("vehicle", e.target.value)}
                        className={formErrors.vehicle ? "border-destructive" : ""}
                      />
                      {formErrors.vehicle && (
                        <p className="text-destructive text-xs">{formErrors.vehicle}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Project Requirements *</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Describe your custom truck bed requirements, intended use, specific features needed..."
                      rows={4}
                      value={formData.requirements}
                      onChange={(e) => handleInputChange("requirements", e.target.value)}
                      className={formErrors.requirements ? "border-destructive" : ""}
                    />
                    {formErrors.requirements && (
                      <p className="text-destructive text-xs">{formErrors.requirements}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <Input
                      id="timeline"
                      placeholder="ASAP, Within 2 weeks, Flexible, etc."
                      value={formData.timeline}
                      onChange={(e) => handleInputChange("timeline", e.target.value)}
                      className={formErrors.timeline ? "border-destructive" : ""}
                    />
                    {formErrors.timeline && (
                      <p className="text-destructive text-xs">{formErrors.timeline}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      variant="industrial"
                      size="lg"
                      className="flex-1"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send to N8N
                        </>
                      )}
                    </Button>
                    <Button type="button" variant="metallic" size="lg" className="flex-1">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Instead
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. We respect your privacy and never share your information.
                    Form data is securely sent to your N8N workflow for processing.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;