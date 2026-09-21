export type JobPhoto = {
  src: string;
  alt: string;
  caption: string;
};

/** Job photos keyed to service slugs. Files live in public/images/jobs/. */
export const servicePhotos: Record<string, JobPhoto[]> = {
  'tile-grout-cleaning': [
    {
      src: '/images/jobs/quarry-tile-process.webp',
      alt: 'Red quarry tile floor mid-clean with a floor squeegee at the wall',
      caption: 'Quarry tile. Grout takes the soil; the face of the tile is the easy part.',
    },
    {
      src: '/images/jobs/speckle-tile-after.webp',
      alt: 'Dark speckled commercial tile after cleaning, grout lines visible',
      caption: 'Speckled commercial tile after extraction. Shine is residue-free rinse, not a topical coating.',
    },
    {
      src: '/images/jobs/speckle-tile-before.webp',
      alt: 'Same speckled tile floor with a dark stain in a commercial doorway',
      caption: 'Same surface before the walk-off stain came out. If it is in the joint, mopping will not move it.',
    },
  ],
  'grout-restoration': [
    {
      src: '/images/jobs/quarry-tile-process.webp',
      alt: 'Red quarry tile with soiled grout during cleaning',
      caption: 'If the joint is still dark after a proper extraction, that is a restoration conversation — color seal or cut-out — not another mop.',
    },
  ],
  'floor-maintenance': [
    {
      src: '/images/jobs/lobby-hard-surface-process.webp',
      alt: 'Blue extractor, wet-floor sign and wand on wood-look commercial tile in a lobby',
      caption: 'Hard-surface work in a commercial lobby. Equipment and chemistry are ours. Signs stay up for the cure window.',
    },
    {
      src: '/images/jobs/vct-strip-in-progress.webp',
      alt: 'Floor buffer on beige VCT with yellow cord and stripped finish coming off',
      caption: 'VCT mid-strip. The dull patch is old finish coming off, not damage.',
    },
    {
      src: '/images/jobs/vct-waiting-room-finished.webp',
      alt: 'Finished shiny beige VCT in a commercial waiting room with sofa and table',
      caption: 'Same class of floor after strip and finish. Waiting-room VCT.',
    },
  ],
};
