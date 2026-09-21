import React from 'react';
import { servicePhotos } from '@/data/service-photos';

const JobPhotos = ({ slug }: { slug: string }) => {
  const photos = servicePhotos[slug];
  if (!photos?.length) return null;

  return (
    <section className="section-padding border-b border-phl-rule">
      <div className="container-custom">
        <div className="rack-head">From the floor</div>
        <p className="text-[14px] text-phl-ink-2 leading-relaxed max-w-[62ch] mb-8">
          Commercial jobs. No stock library. Captions describe the surface and the step, not the building.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {photos.map(p => (
            <li key={p.src + p.caption} className="bg-phl-surface border border-phl-rule rounded-sm overflow-hidden">
              <img
                src={p.src}
                alt={p.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
              <p className="p-4 text-[13px] text-phl-ink-2 leading-relaxed">{p.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JobPhotos;
