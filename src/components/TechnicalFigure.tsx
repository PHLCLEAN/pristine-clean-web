import React from 'react';

/**
 * Technical figures for PHL Clean.
 *
 * These are the proof elements of the site: each one shows a mechanism a
 * competitor's site only asserts. Amber (#F0B429) is reserved throughout as
 * "instrument ink" — it marks measurements, callouts and the single idea the
 * figure exists to make. No content layer uses it, and it never appears in
 * site chrome, so amber always means "this is an annotation".
 *
 * All three are inline SVG: crisp at any size, negligible weight, and they
 * carry real alt text for screen readers and crawlers.
 */

export type FigureKind = "carpet" | "grout" | "finish";

const INK2 = "#94A4B6";
const MUTED = "#69788A";
const RULE = "#26323F";
const AMBER = "#F0B429";
const SOIL = "#6B5334";
const LEADER = "#3E4C5E";

/** Figure number, title, and the hairline under it. */
const FigHead = ({ n, title }: { n: string; title: string }) => (
  <>
    <text x="0" y="16" fontFamily="Saira Condensed, sans-serif" fontSize="12" fill={MUTED} letterSpacing="1.6">
      {`FIG. ${n} — ${title}`}
    </text>
    <line x1="0" y1="26" x2="760" y2="26" stroke={RULE} strokeWidth="1" />
  </>
);

/**
 * Right-aligned label with a dashed leader to its feature. Dashed and
 * low-contrast on purpose: a solid rule reads as part of the drawing when it
 * has to cross one.
 */
const Label = ({
  y, text, toX, accent = false,
}: { y: number; text: string; toX?: number; accent?: boolean }) => (
  <>
    {toX !== undefined && (
      <>
        <path
          d={`M196 ${y} H ${toX}`}
          fill="none"
          stroke={LEADER}
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <circle cx={toX} cy={y} r="3" fill={AMBER} />
      </>
    )}
    <text
      x="186" y={y} textAnchor="end" dominantBaseline="middle"
      fontFamily="IBM Plex Mono, monospace" fontSize="10.5"
      fill={accent ? AMBER : INK2} letterSpacing="1"
    >
      {text}
    </text>
  </>
);

/* ------------------------------------------------------------------ */
/* 01 — Carpet: where the damage actually happens                      */
/* ------------------------------------------------------------------ */

const TUFT_X = Array.from({ length: 20 }, (_, i) => 214 + i * 26);

/** [x, y, size, rotation] — dense at the pile base, sparse higher up. */
const GRIT: [number, number, number, number][] = [
  [236, 132, 5, 22], [272, 138, 4, -14], [312, 128, 6, 38], [348, 140, 5, 9],
  [392, 133, 4, -27], [428, 139, 6, 16], [466, 130, 5, -8], [508, 141, 4, 31],
  [546, 134, 6, -19], [588, 139, 5, 12], [628, 131, 4, -33], [668, 140, 6, 7],
  [704, 133, 5, 24],
];

const CarpetFigure = () => (
  <svg viewBox="0 0 760 268" role="img" className="block w-full h-auto"
    aria-label="Cross-section of commercial loop pile carpet. Abrasive grit has migrated to the base of the pile, below the wear line, where foot traffic grinds it against the yarn. Layers from the top: face yarn, primary backing, secondary backing, adhesive and substrate.">
    <defs>
      <clipPath id="phl-pile-clip"><rect x="210" y="52" width="530" height="98" /></clipPath>
      <g id="phl-tuft">
        <path d="M0 90 C0 8 22 8 22 90" fill="none" stroke="#C6D3E2" strokeWidth="8" strokeLinecap="round" />
      </g>
    </defs>

    <FigHead n="01" title="WHERE THE DAMAGE ACTUALLY HAPPENS" />

    {/* substrate */}
    <rect x="210" y="191" width="530" height="49" fill="#38424F" />
    <g fill="#47525F">
      <circle cx="268" cy="212" r="3.4" /><circle cx="352" cy="225" r="2.6" /><circle cx="437" cy="206" r="3" />
      <circle cx="521" cy="224" r="3.6" /><circle cx="612" cy="210" r="2.4" /><circle cx="694" cy="221" r="3.1" />
      <circle cx="309" cy="230" r="2.2" /><circle cx="576" cy="199" r="2.3" /><circle cx="655" cy="232" r="2.7" />
    </g>
    {/* adhesive — deliberately neutral, so amber stays annotation-only */}
    <rect x="210" y="184" width="530" height="7" fill="#3F444A" />
    {/* secondary backing */}
    <rect x="210" y="166" width="530" height="18" fill="#59687A" />
    {/* primary backing */}
    <rect x="210" y="150" width="530" height="16" fill="#7C8A9A" />

    <g clipPath="url(#phl-pile-clip)">
      {TUFT_X.map(x => <use key={x} href="#phl-tuft" x={x} y={60} />)}
      <g fill={SOIL}>
        {GRIT.map(([x, y, s, r], i) => (
          <rect key={i} x={x} y={y} width={s} height={s === 6 ? 5 : s - 1}
            transform={`rotate(${r} ${x + 2} ${y + 2})`} />
        ))}
        {/* a few still on the way down — this is migration, not a static layer */}
        <rect x="258" y="116" width="4" height="4" transform="rotate(18 260 118)" opacity="0.5" />
        <rect x="410" y="112" width="4" height="4" transform="rotate(-22 412 114)" opacity="0.42" />
        <rect x="596" y="118" width="4" height="4" transform="rotate(29 598 120)" opacity="0.45" />
      </g>
    </g>

    {/* the one idea the figure exists to make */}
    <line x1="210" y1="110" x2="740" y2="110" stroke={AMBER} strokeWidth="1.4" strokeDasharray="7 5" />

    <Label y={78} text="FACE YARN" toX={300} />
    <Label y={110} text="WEAR LINE" accent />
    <path d="M196 110 H 210" fill="none" stroke={LEADER} strokeWidth="1" strokeDasharray="2 3" />
    <Label y={136} text="EMBEDDED GRIT" toX={340} />
    <Label y={158} text="PRIMARY BACKING" toX={262} />
    <Label y={175} text="SECONDARY BACKING" toX={240} />
    <Label y={214} text="SUBSTRATE" toX={246} />
  </svg>
);

/* ------------------------------------------------------------------ */
/* 02 — Grout: why mopping never cleans a joint                        */
/* ------------------------------------------------------------------ */

/** [x, width] */
const TILES: [number, number][] = [[210, 178], [406, 178], [602, 138]];
const JOINTS: [number, number][] = [[388, 18], [584, 18]];

const GroutFigure = () => (
  <svg viewBox="0 0 760 264" role="img" className="block w-full h-auto"
    aria-label="Cross-section through a tiled floor. The grout joint sits recessed below the tile face, so a flat mop passes over it without ever reaching the soil collected inside the porous grout. Layers shown: tile, grout joint, thinset bed and substrate.">

    <FigHead n="02" title="WHY MOPPING NEVER CLEANS A JOINT" />

    {/* substrate and thinset — both neutral, no tan competing with the amber */}
    <rect x="210" y="188" width="530" height="56" fill="#38424F" />
    <rect x="210" y="170" width="530" height="18" fill="#3F444A" />
    <g stroke="#4A5057" strokeWidth="3">
      {Array.from({ length: 38 }, (_, i) => (
        <path key={i} d={`M${217 + i * 14} 170 V188`} />
      ))}
    </g>

    {/* grout in the joints — porous, holding soil near the surface */}
    {JOINTS.map(([x, w]) => (
      <g key={x}>
        {/* shadow in the recess above the grout: this is why a mop misses it */}
        <rect x={x} y={74} width={w} height={15} fill="#1B2430" />
        <rect x={x} y={89} width={w} height={81} fill="#8E9AA6" />
        <g fill={SOIL}>
          <rect x={x + 3} y={95} width={4} height={4} transform={`rotate(20 ${x + 5} 97)`} />
          <rect x={x + 9} y={103} width={5} height={4} />
          <rect x={x + 4} y={112} width={4} height={4} transform={`rotate(-15 ${x + 6} 114)`} />
          <rect x={x + 10} y={121} width={4} height={3} opacity="0.75" />
          <rect x={x + 5} y={131} width={3} height={3} opacity="0.6" />
          <rect x={x + 9} y={142} width={3} height={3} opacity="0.4" />
        </g>
      </g>
    ))}

    {/* tile bodies, sitting proud of the joint */}
    {TILES.map(([x, w]) => (
      <g key={x}>
        <rect x={x} y={74} width={w} height={96} fill="#BAC6D2" />
        <rect x={x} y={74} width={w} height="5" fill="#E4EBF1" />
      </g>
    ))}

    {/* the mop path: sails straight over every recess */}
    <path d="M214 58 H 730" stroke={AMBER} strokeWidth="1.4" strokeDasharray="7 5" fill="none" />
    <path d="M726 53 L 740 58 L 726 63 Z" fill={AMBER} />

    <Label y={58} text="MOP PATH" accent />
    <path d="M196 58 H 214" fill="none" stroke={LEADER} strokeWidth="1" strokeDasharray="2 3" />
    {/* leaders kept short — all point at the first joint rather than crossing the whole floor */}
    <Label y={80} text="TILE FACE" toX={300} />
    <Label y={100} text="SOIL IN JOINT" toX={392} />
    <Label y={140} text="GROUT — POROUS" toX={397} />
    <Label y={179} text="THINSET BED" toX={250} />
    <Label y={216} text="SUBSTRATE" toX={244} />
  </svg>
);

/* ------------------------------------------------------------------ */
/* 03 — Finish: what a strip removes vs what a recoat reaches          */
/* ------------------------------------------------------------------ */

/** Thick on purpose — the coats are the subject, so they get the vertical space. */
const COATS = [50, 64, 78, 92];

const FinishFigure = () => (
  <svg viewBox="0 0 760 200" role="img" className="block w-full h-auto"
    aria-label="Cross-section of a finished VCT floor showing four coats of commercial finish over a sealer and the tile. A scrub and recoat removes only the top two worn coats; a full strip removes every coat and the sealer, back to bare tile.">

    <FigHead n="03" title="STRIP OR RECOAT — WHAT EACH ONE REMOVES" />

    {/* substrate and tile, kept deliberately shallow */}
    <rect x="210" y="152" width="440" height="28" fill="#38424F" />
    <rect x="210" y="116" width="440" height="36" fill="#9AA6B3" />
    <g stroke="#8A97A5" strokeWidth="1">
      <path d="M310 116 V152" /><path d="M410 116 V152" /><path d="M510 116 V152" /><path d="M600 116 V152" />
    </g>
    <rect x="210" y="106" width="440" height="10" fill="#6E7F92" />

    {/* four coats, alternating and hairlined so they are actually countable */}
    {COATS.map((y, i) => (
      <g key={y}>
        <rect x="210" y={y} width="440" height="14" fill={i % 2 ? "#AEC0D2" : "#CBD9E7"} />
        <line x1="210" y1={y} x2="650" y2={y} stroke="#7E8FA1" strokeWidth="0.8" />
      </g>
    ))}

    {/* wear zone: the traffic end has lost the top two coats */}
    <path d="M450 50 H 650 V 78 H 450 Z" fill="#121B27" />
    <line x1="450" y1="78" x2="650" y2="78" stroke="#6E7F92" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="450" y1="50" x2="450" y2="78" stroke="#6E7F92" strokeWidth="1" strokeDasharray="4 3" />

    {/* burnished gloss: intact on the left, gone on the right */}
    <path d="M212 42 H 448" stroke="#E4EBF1" strokeWidth="3" strokeLinecap="round" />
    <path d="M452 42 H 648" stroke="#55636F" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 6" />

    {/* what each service reaches — nested brackets, well clear of each other */}
    <g stroke={AMBER} strokeWidth="1.3" fill="none">
      <path d="M658 50 H 665 V 78 H 658" />
      <path d="M678 50 H 685 V 116 H 678" />
    </g>
    <g fontFamily="IBM Plex Mono, monospace" fontSize="10" fill={AMBER} letterSpacing="0.8">
      <text x="692" y="64" dominantBaseline="middle">RECOAT</text>
      <text x="692" y="100" dominantBaseline="middle">STRIP</text>
    </g>

    <Label y={42} text="BURNISHED SURFACE" toX={330} />
    <Label y={60} text="WORN COATS" toX={560} accent />
    <Label y={88} text="FINISH — 4 COATS" toX={262} />
    <Label y={111} text="SEALER" toX={238} />
    <Label y={134} text="VCT TILE" toX={252} />
    <Label y={166} text="SUBSTRATE" toX={244} />
  </svg>
);

/* ------------------------------------------------------------------ */

const CAPTIONS: Record<FigureKind, React.ReactNode> = {
  carpet: (
    <>
      Grit migrates to the base of the pile, below the <b className="text-phl-amber font-medium">wear line</b>, where
      foot traffic grinds it against the yarn. What gets called &ldquo;traffic lane gray&rdquo; is often not soil at all —
      it is light scattering off abraded fiber. Cleaning lifts the grit.{' '}
      <b className="text-phl-amber font-medium">It cannot un-scratch the yarn.</b> Which is why the interval matters
      more than the machine.
    </>
  ),
  grout: (
    <>
      The grout joint sits recessed below the tile face, so a flat mop passes straight over it —{' '}
      <b className="text-phl-amber font-medium">the tile gets cleaner and the joint gets darker.</b> Worse, the water in
      the bucket carries soil, so the last stretch of floor is wiped with dirt. Emptying a joint takes pressure and
      simultaneous vacuum recovery, not more mopping. Diagram is not to scale.
    </>
  ),
  finish: (
    <>
      A scrub and recoat removes only the worn upper coats and rebuilds from the sound finish beneath.{' '}
      <b className="text-phl-amber font-medium">A full strip takes everything back to bare tile.</b> Stripping is the
      more profitable job and the harder one on your floor, so we quote the recoat whenever the finish underneath is
      still sound. Diagram is not to scale.
    </>
  ),
};

interface Props {
  kind: FigureKind;
  className?: string;
}

const TechnicalFigure = ({ kind, className = "" }: Props) => {
  const Figure = kind === "grout" ? GroutFigure : kind === "finish" ? FinishFigure : CarpetFigure;

  return (
    <figure className={`bg-phl-surface border border-phl-rule rounded-sm p-4 pb-3 ${className}`}>
      {/* Below ~640px the annotation labels would scale down to an unreadable
          size, so the diagram gets its own scroll container rather than
          shrinking into decoration. */}
      <div className="overflow-x-auto -mx-1 px-1">
        <div className="min-w-[620px]">
          <Figure />
        </div>
      </div>
      <figcaption className="font-mono text-[10.5px] leading-relaxed text-phl-muted mt-3 pt-2.5 border-t border-phl-rule">
        {CAPTIONS[kind]}
      </figcaption>
    </figure>
  );
};

export default TechnicalFigure;
