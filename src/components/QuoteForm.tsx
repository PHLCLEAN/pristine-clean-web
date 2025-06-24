
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  message: string;
}

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // TODO: Replace this mock implementation with actual email sending
      // To send emails to info@phlclean.com, you'll need to:
      // 1. Set up a backend service (like Supabase Edge Functions)
      // 2. Use an email service (like SendGrid, Mailgun, or Resend)
      // 3. Replace the setTimeout below with actual API call
      
      // Example API call structure:
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     to: 'info@phlclean.com',
      //     subject: `New Quote Request from ${formData.name}`,
      //     formData: formData
      //   })
      // });
      
      // Simulate form submission for now
      setTimeout(() => {
        setLoading(false);
        toast({
          title: "Quote Request Received",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours!",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceType: '',
          message: '',
        });
      }, 1000);

    } catch (error) {
      setLoading(false);
      toast({
        title: "Error",
        description: "Failed to send your request. Please try again or call us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
            placeholder="Your name"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full"
              placeholder="(215) 550-1414"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full"
            placeholder="Your company name"
          />
        </div>
        
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In*</label>
          <Select value={formData.serviceType} onValueChange={handleSelectChange} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="commercial">Commercial Cleaning</SelectItem>
              <SelectItem value="carpet">Carpet Cleaning</SelectItem>
              <SelectItem value="deep">Deep Cleaning</SelectItem>
              <SelectItem value="multiple">Multiple Services</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full min-h-[120px]"
            placeholder="Please share any specific requirements or questions"
          />
        </div>
        
        <Button 
          type="submit"
          disabled={loading}
          className="w-full bg-cleaner-blue-700 hover:bg-cleaner-blue-800 text-white py-6"
        >
          {loading ? "Submitting..." : "Get Your Free Quote"}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
};

export default QuoteForm;
