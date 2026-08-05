import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
  delay?: string;
  hideButton?: boolean;
  linkTo?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  features, 
  delay = "0s",
  hideButton = false,
  linkTo,
}) => {
  return (
    <Card className="overflow-hidden h-full shadow-md hover:shadow-lg transition-shadow animate-fade-in flex flex-col" style={{ animationDelay: delay }}>
      <div className="h-48 overflow-hidden">
        {linkTo ? (
          <Link to={linkTo} aria-label={`Learn more about ${title}`}>
            <img 
              src={imageSrc} 
              alt={title} 
              loading="lazy"
              decoding="async"
              width={400}
              height={192}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </Link>
        ) : (
          <img 
            src={imageSrc} 
            alt={title} 
            loading="lazy"
            decoding="async"
            width={400}
            height={192}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-2xl text-cleaner-blue-800">
          {linkTo ? (
            <Link to={linkTo} className="hover:underline">{title}</Link>
          ) : (
            title
          )}
        </CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-cleaner-green-500 flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      {linkTo ? (
        <CardFooter>
          <Button asChild className="w-full bg-cleaner-blue-700 hover:bg-cleaner-blue-800">
            <Link to={linkTo}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      ) : !hideButton ? (
        <CardFooter>
          <Button asChild className="w-full bg-cleaner-blue-700 hover:bg-cleaner-blue-800">
            <a href="#contact">Request Service</a>
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
};

export default ServiceCard;
