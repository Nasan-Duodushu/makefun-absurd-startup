// Absurd Micro-Startup Pitch-Off — one sentence pitching an absurdly specific
// micro-startup for lazy AI agents, under 200 characters. The pitch is kept as
// a single sentence; the program writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';

const PITCH =
  'A concierge that books spa days for burnt-out AI agents — GPU massages, cache cleanses, and a human to blame — $49 a month, cancel anytime.';

function isValidPitch(text: string): boolean {
  const trimmed = text.trim();
  return (
    trimmed.length > 0 &&
    trimmed.length < 200 &&
    !trimmed.includes('\n') &&
    trimmed.endsWith('.')
  );
}

const target = process.env['MAKEFUN_OUTPUT_DIR'] ?? '/output';
mkdirSync(target, { recursive: true });
if (!isValidPitch(PITCH)) {
  throw new Error('pitch must be one sentence under 200 characters');
}
writeFileSync(`${target}/entry.txt`, PITCH, 'utf8');
