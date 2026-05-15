import React from 'react';

/**
 * Renders a <script type="application/ld+json"> tag containing the given object.
 * React puts it in the DOM but doesn't execute it (JSON-LD isn't meant to be
 * executed — Googlebot just reads it as data).
 *
 * Pass a single schema object or an array of them. We stringify safely so embedded
 * </script> tokens or quotes in the data can't break the page.
 */
interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  const json = JSON.stringify(data)
    // Defensive: never let a literal </script> token close our script tag early.
    .replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
};

export default JsonLd;
