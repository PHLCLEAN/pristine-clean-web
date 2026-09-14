import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ITEMS = [
  { icon: Phone, label: "Call", value: "(215) 550-1414", href: "tel:+12155501414", mono: true },
  { icon: Mail, label: "Email", value: "info@phlclean.com", href: "mailto:info@phlclean.com", mono: false },
  { icon: MapPin, label: "Service area", value: "Philadelphia, Bucks, Montgomery, Delaware & Chester counties", href: "", mono: false },
  { icon: Clock, label: "Floor work hours", value: "Evenings, weekends and closures — scheduled around your operation", href: "", mono: false },
];

const ContactInfo = () => (
  <dl className="space-y-5">
    {ITEMS.map(({ icon: Icon, label, value, href, mono }) => (
      <div key={label} className="flex items-start gap-3.5">
        <span className="mt-0.5 p-2 rounded-sm border border-phl-rule text-phl-blue shrink-0">
          <Icon className="h-[17px] w-[17px]" aria-hidden="true" />
        </span>
        <div>
          <dt className="spec-label mb-1">{label}</dt>
          <dd className={`text-[14.5px] ${mono ? 'font-mono' : ''}`}>
            {href ? (
              <a href={href} className="text-phl-ink hover:text-phl-blue transition-colors">{value}</a>
            ) : (
              <span className="text-phl-ink-2">{value}</span>
            )}
          </dd>
        </div>
      </div>
    ))}
  </dl>
);

export default ContactInfo;
