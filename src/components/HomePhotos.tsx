import React from 'react';

const SHOTS = [
  {
    src: '/images/jobs/lobby-hard-surface-process.webp',
    alt: 'Blue extractor, wet-floor sign and wand on wood-look commercial tile',
    caption: 'Lobby hard surface. Signs stay up for the cure window.',
  },
  {
    src: '/images/jobs/quarry-tile-process.webp',
    alt: 'Red quarry tile mid-clean with a squeegee',
    caption: 'Quarry tile. Grout takes the soil; the tile face is the easy part.',
  },
  {
    src: '/images/jobs/vct-strip-in-progress.webp',
    alt: 'Floor buffer on beige VCT with stripped finish coming off',
    caption: 'VCT mid-strip. The dull patch is old finish, not damage.',
  },
];

const HomePhotos = () => (
  <section className="section-padding bg-phl-ground border-b border-phl-rule">
    <div className="container-custom">
      <div className="rack-head">From the floor</div>
      <p className="text-[14px] text-phl-ink-2 leading-relaxed max-w-[58ch] mb-8">
        Commercial jobs. No stock library.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SHOTS.map(s => (
          <li key={s.src} className="bg-phl-surface border border-phl-rule rounded-sm overflow-hidden">
            <img src={s.src} alt={s.alt} width={800} height={600} loading="lazy" className="w-full aspect-[4/3] object-cover" />
            <p className="p-4 text-[13px] text-phl-ink-2 leading-relaxed">{s.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HomePhotos;
