/**
 * Fire-and-forget backup: logs form submissions to a Google Sheet
 * via a deployed Google Apps Script web app.
 *
 * This is a safety net — if Web3Forms is down, leads still land in a
 * spreadsheet Joe can check. Failures are silently swallowed so they
 * never block the primary form submission.
 */

const SHEETS_ENDPOINT = ""; // Populated after Joe deploys the Apps Script

export function backupToSheets(data: Record<string, string>) {
  if (!SHEETS_ENDPOINT) return; // Skip until endpoint is configured

  try {
    // navigator.sendBeacon is fire-and-forget — it doesn't block page
    // unload and doesn't need a response. Perfect for backup logging.
    const payload = new Blob(
      [JSON.stringify({ ...data, timestamp: new Date().toISOString(), source: "phlclean.com" })],
      { type: "application/json" }
    );
    if (navigator.sendBeacon) {
      navigator.sendBeacon(SHEETS_ENDPOINT, payload);
    } else {
      // Fallback for older browsers
      fetch(SHEETS_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({ ...data, timestamp: new Date().toISOString(), source: "phlclean.com" }),
        headers: { "Content-Type": "application/json" },
        keepalive: true,
      }).catch(() => {}); // Swallow errors — this is a backup
    }
  } catch {
    // Never let backup logging break the primary flow
  }
}
