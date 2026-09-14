import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/analytics";
import { backupToSheets } from "@/lib/form-backup";

const WEB3FORMS_ACCESS_KEY = "b93edd5d-c253-48c9-a4a4-db3500758648";

const SERVICE_OPTIONS = [
  { value: "carpet-cleaning", label: "Carpet Cleaning" },
  { value: "carpet-maintenance", label: "Carpet Maintenance Program" },
  { value: "tile-grout", label: "Tile & Grout Cleaning" },
  { value: "grout-restoration", label: "Grout Restoration / Re-Grout" },
  { value: "hard-surface", label: "Hard Surface / VCT Floor Care" },
  { value: "multiple", label: "More than one of these" },
  { value: "not-sure", label: "Not sure — I need advice" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  areaSqFt: string;
  message: string;
}

const EMPTY: FormData = {
  name: '', email: '', phone: '', company: '',
  serviceType: '', areaSqFt: '', message: '',
};

const fieldClass =
  "w-full bg-phl-ground border-phl-rule text-phl-ink placeholder:text-phl-muted focus-visible:ring-phl-blue";

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          cc: "josephf.mchugh@gmail.com",
          subject: `Walkthrough Request — ${formData.name} (${formData.company || "no company"})`,
          from_name: "PHL Clean Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service_type: formData.serviceType,
          approximate_area_sqft: formData.areaSqFt,
          message: formData.message,
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        backupToSheets({
          form: "walkthrough_request",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service_type: formData.serviceType,
          approximate_area_sqft: formData.areaSqFt,
          message: formData.message,
        });
        trackEvent("generate_lead", {
          form_name: "walkthrough_request",
          service_type: formData.serviceType || "unspecified",
          value: 1,
        });
        toast({
          title: "Got it",
          description: "We'll be in touch within one business day to book the walkthrough.",
        });
        setFormData(EMPTY);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      toast({
        title: "That didn't send",
        description: "Please try again, or call us directly at (215) 550-1414.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-phl-surface border border-phl-rule rounded-sm p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block spec-label mb-1.5">Full name *</label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange}
            required className={fieldClass} placeholder="Your name" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block spec-label mb-1.5">Email *</label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
              required className={fieldClass} placeholder="you@company.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block spec-label mb-1.5">Phone *</label>
            <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
              required className={fieldClass} placeholder="(215) 555-0100" />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block spec-label mb-1.5">Company / building</label>
          <Input id="company" name="company" value={formData.company} onChange={handleChange}
            className={fieldClass} placeholder="Where the floor is" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="serviceType" className="block spec-label mb-1.5">What do you need? *</label>
            <Select
              value={formData.serviceType}
              onValueChange={v => setFormData(p => ({ ...p, serviceType: v }))}
              required
            >
              <SelectTrigger id="serviceType" className={fieldClass}>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_OPTIONS.map(o => (
                  <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="areaSqFt" className="block spec-label mb-1.5">Approx. area (sq ft)</label>
            <Input id="areaSqFt" name="areaSqFt" value={formData.areaSqFt} onChange={handleChange}
              className={fieldClass} placeholder="Rough guess is fine" inputMode="numeric" />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block spec-label mb-1.5">Anything else</label>
          <Textarea id="message" name="message" value={formData.message} onChange={handleChange}
            className={`${fieldClass} min-h-[110px]`}
            placeholder="Surface type, how old the floor is, what's gone wrong with it" />
        </div>

        {/* Honeypot — hidden from real users, traps bots */}
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

        <Button type="submit" disabled={loading} className="btn-primary w-full py-6 text-[15px]">
          {loading ? "Sending…" : "Request a Walkthrough"}
        </Button>

        <p className="text-[12px] text-phl-muted text-center leading-relaxed">
          One business day, usually sooner. Or call{' '}
          <a href="tel:+12155501414" className="font-mono text-phl-blue hover:text-phl-blue-soft">
            (215) 550-1414
          </a>.
        </p>
      </form>
    </div>
  );
};

export default QuoteForm;
