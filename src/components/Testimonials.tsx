
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Jennifer Thompson",
      position: "Office Manager",
      company: "Apex Solutions",
      content: "PristineClean Pro has transformed our office environment. Their attention to detail and consistency has been remarkable. Our employees have noticed the difference, and visitors always comment on how clean our space is.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      position: "Facilities Director",
      company: "Trident Medical Center",
      content: "In the healthcare industry, cleanliness isn't just important - it's essential. PristineClean Pro understands this and delivers exceptional results. Their deep cleaning services are thorough and their staff is professional and reliable.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      position: "Property Manager",
      company: "Westside Properties",
      content: "We manage multiple commercial properties and PristineClean Pro has become our go-to cleaning service. Their flexibility, responsiveness, and quality of work make them a valuable partner in maintaining our buildings.",
      rating: 5
    },
    {
      name: "David Chen",
      position: "Restaurant Owner",
      company: "Fusion Bites",
      content: "The cleanliness of our restaurant is paramount to our success. PristineClean Pro provides consistent, thorough cleaning that meets health department standards with ease. Their carpet cleaning services have extended the life of our flooring significantly.",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cleaner-blue-800 mb-4">Client Testimonials</h2>
          <div className="h-1 w-24 bg-cleaner-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="shadow-md hover:shadow-lg transition-shadow h-full border-t-4 border-cleaner-blue-700">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-6 h-6 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      <blockquote className="text-gray-700 text-lg italic mb-6">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="text-center">
                        <p className="font-bold text-cleaner-blue-800">{testimonial.name}</p>
                        <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-cleaner-blue-700 hover:bg-cleaner-blue-50 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-cleaner-blue-700 hover:bg-cleaner-blue-50 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-cleaner-blue-700' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
