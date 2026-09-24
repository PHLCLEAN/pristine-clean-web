import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { trackEvent } from '@/lib/analytics';
import { backupToSheets } from "@/lib/form-backup";
import { Phone, CheckCircle, Clock, DollarSign, GraduationCap, Calendar, Users } from 'lucide-react';

const Careers = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    availability: '',
    message: '',
  });

  const benefits = [
    {
      icon: <DollarSign className="h-7 w-7 text-phl-blue" />,
      title: "Competitive Pay",
      description: "Fair hourly rates that recognize experience and reliability. Raises tied to performance, not tenure."
    },
    {
      icon: <Calendar className="h-7 w-7 text-phl-blue" />,
      title: "Scheduled in Advance",
      description: "Floor work is booked ahead — you get the week's assignments in advance, not a text at four in the afternoon."
    },
    {
      icon: <Clock className="h-7 w-7 text-phl-blue" />,
      title: "Evenings and Weekends",
      description: "Most floor work happens after hours or over a closure. Good fit if you want daytime hours free, or a solid second job."
    },
    {
      icon: <GraduationCap className="h-7 w-7 text-phl-blue" />,
      title: "Paid Training",
      description: "Paid time learning extraction, encapsulation, tile and grout work, and VCT finish — on real equipment, not a video."
    },
    {
      icon: <Users className="h-7 w-7 text-phl-blue" />,
      title: "Respect on the Job",
      description: "We treat technicians the way we treat customers. No nickel-and-diming, and nobody is asked to rush a cure."
    },
    {
      icon: <CheckCircle className="h-7 w-7 text-phl-blue" />,
      title: "Room to Grow",
      description: "Crew leads and estimators here started as technicians. Learn the surfaces, show up, and the work follows."
    }
  ];

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
        headers: {"Content-Type": "application/json","Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "b93edd5d-c253-48c9-a4a4-db3500758648",
          cc: "josephf.mchugh@gmail.com",
          subject: `New Job Application from ${formData.name} (${formData.position || "open to roles"})`,
          from_name: "PHL Clean Careers Page",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          experience: formData.experience,
          availability: formData.availability,
          message: formData.message,
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        trackEvent("job_application", {
          position: formData.position || "unspecified",
          value: 1,
        });
        toast({
          title: "Application Received",
          description: "Thanks for your interest. We'll be in touch within a few business days.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          availability: '',
          message: '',
        });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again, or call us directly at (215) 550-1414.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-phl-ground">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-phl-surface overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-phl-blue/10 to-phl-blue/10"></div>
          </div>
          <div className="container-custom relative z-10 py-20 md:py-28">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-phl-ink mb-6">
                Floor work is a trade
              </h1>
              <p className="text-lg md:text-xl text-phl-ink-2 mb-8">
                We're hiring technicians for commercial carpet, tile and grout, and hard surface work across Philadelphia and Bucks. Paid training, work scheduled in advance, and equipment that isn't held together with tape.
              </p>
              <Button asChild size="lg" className="btn-primary px-8 py-6 text-lg">
                <a href="#apply">Apply Now</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-phl-ground">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-phl-ink mb-4">Why Work With Us</h2>
              <div className="h-1 w-24 bg-phl-blue mx-auto mb-6"></div>
              <p className="text-phl-ink-2 text-lg">
                Done properly, this is skilled work — knowing which method a floor needs is most of the job. We pay and train like that's true.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="bg-phl-surface p-6 rounded-lg ">
                  <div className="mb-4">{b.icon}</div>
                  <h3 className="text-lg font-bold text-phl-ink mb-2">{b.title}</h3>
                  <p className="text-phl-ink-2 text-sm">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open positions */}
        <section className="section-padding bg-phl-surface">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-phl-ink mb-4">Open Positions</h2>
              <div className="h-1 w-24 bg-phl-blue mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="border border-phl-rule rounded-lg p-6 hover:border-phl-rule transition-colors">
                <h3 className="text-xl font-bold text-phl-ink mb-2">Floor Care Technician</h3>
                <p className="text-sm text-phl-muted mb-3">Part-time / Full-time · Philadelphia, Bucks, Montgomery Counties</p>
                <p className="text-phl-ink-2 mb-4">Carpet extraction and encapsulation, tile and grout, and hard surface work. Evenings, weekends and closures. No experience needed — we train, and we pay for the training.</p>
                <a href="#apply" className="text-phl-blue font-medium hover:underline">Apply for this role &rarr;</a>
              </div>
              <div className="border border-phl-rule rounded-lg p-6 hover:border-phl-rule transition-colors">
                <h3 className="text-xl font-bold text-phl-ink mb-2">Experienced Technician</h3>
                <p className="text-sm text-phl-muted mb-3">Full-time · Evenings and weekends</p>
                <p className="text-phl-ink-2 mb-4">For someone who already knows truck-mount and portable extraction, VCT strip and finish, and burnishing. IICRC certification is a plus, not a requirement — we'll take demonstrated skill over a card.</p>
                <a href="#apply" className="text-phl-blue font-medium hover:underline">Apply for this role &rarr;</a>
              </div>
              <div className="border border-phl-rule rounded-lg p-6 hover:border-phl-rule transition-colors">
                <h3 className="text-xl font-bold text-phl-ink mb-2">Crew Lead</h3>
                <p className="text-sm text-phl-muted mb-3">Full-time · Evenings and weekends</p>
                <p className="text-phl-ink-2 mb-4">Run the job on site: brief the crew off the written scope, make the method calls, check the work against that scope before it's handed back, and be the name the client has for the night.</p>
                <a href="#apply" className="text-phl-blue font-medium hover:underline">Apply for this role &rarr;</a>
              </div>
              <div className="border border-phl-rule rounded-lg p-6 hover:border-phl-rule transition-colors">
                <h3 className="text-xl font-bold text-phl-ink mb-2">Don't see your role?</h3>
                <p className="text-sm text-phl-muted mb-3">All experience levels</p>
                <p className="text-phl-ink-2 mb-4">We're always interested in meeting reliable people who'd rather learn a trade than take a job. Send your details and we'll reach out when something matches.</p>
                <a href="#apply" className="text-phl-blue font-medium hover:underline">Tell us about yourself &rarr;</a>
              </div>
            </div>
          </div>
        </section>

        {/* Application form */}
        <section id="apply" className="section-padding bg-phl-ground">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-phl-ink mb-4">Apply Now</h2>
                <div className="h-1 w-24 bg-phl-blue mx-auto mb-6"></div>
                <p className="text-phl-ink-2 text-lg">
                  Fill out the form and we'll get back to you within a few business days. Or call us directly at <a href="tel:+12155501414" className="text-phl-blue font-medium">(215) 550-1414</a>.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-phl-surface rounded-lg  p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-phl-ink-2 mb-1">Full Name*</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-phl-ink-2 mb-1">Phone Number*</label>
                    <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(215) 555-0000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-phl-ink-2 mb-1">Email*</label>
                  <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@email.com" />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-phl-ink-2 mb-1">Position You're Interested In*</label>
                  <Select value={formData.position} onValueChange={(v) => setFormData(p => ({ ...p, position: v }))} required>
                    <SelectTrigger><SelectValue placeholder="Select a position" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="floor-care-technician">Floor Care Technician</SelectItem>
                      <SelectItem value="experienced-technician">Experienced Technician</SelectItem>
                      <SelectItem value="crew-lead">Crew Lead</SelectItem>
                      <SelectItem value="other">Other / Open to opportunities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-phl-ink-2 mb-1">Years of Cleaning Experience</label>
                    <Select value={formData.experience} onValueChange={(v) => setFormData(p => ({ ...p, experience: v }))}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None — willing to learn</SelectItem>
                        <SelectItem value="under-1">Under 1 year</SelectItem>
                        <SelectItem value="1-3">1–3 years</SelectItem>
                        <SelectItem value="3-5">3–5 years</SelectItem>
                        <SelectItem value="5-plus">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-phl-ink-2 mb-1">Availability</label>
                    <Select value={formData.availability} onValueChange={(v) => setFormData(p => ({ ...p, availability: v }))}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="evenings">Evenings (5pm–11pm)</SelectItem>
                        <SelectItem value="overnight">Overnight</SelectItem>
                        <SelectItem value="early-morning">Early morning</SelectItem>
                        <SelectItem value="days">Daytime</SelectItem>
                        <SelectItem value="flexible">Flexible / any shift</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-phl-ink-2 mb-1">Anything else we should know?</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} className="min-h-[100px]" placeholder="Past employers, special skills, transportation, certifications, etc." />
                </div>

                <Button type="submit" disabled={loading} className="btn-primary w-full py-6 text-lg">
                  {loading ? "Submitting..." : "Submit Application"}
                </Button>

                <p className="text-xs text-phl-muted text-center">
                  Or call us directly at <a href="tel:+12155501414" className="text-phl-blue">(215) 550-1414</a> — we're happy to talk.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
