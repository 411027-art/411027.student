const fs = require('fs');
const html = fs.readFileSync('wiki.html', 'utf8');

const regex = /<th[^>]*class="navbox-group"[^>]*>.*?<a[^>]*>([^<]+)<\/a>.*?<td[^>]*class="navbox-list-with-group[\s\S]*?>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>\s*<\/td>/gi;
let m;
const out = {};
while ((m = regex.exec(html)) !== null) {
  const group = m[1].trim();
  const inner = m[2];
  // extract link texts
  const linkRegex = /<a[^>]*>([^<]+)<\/a>/gi;
  let lm;
  const stations = [];
  while ((lm = linkRegex.exec(inner)) !== null) {
    const raw = lm[1].trim();
    // skip greyed out (wrapped in span with style color:#717171) - those appear as separate spans in html, but our regex extracts text only
    // detect if the link has class="new" (redlink) or is within <span style="color:#717171"> by checking the surrounding html
    const startIdx = lm.index;
    const fullIdx = m.index + m[0].indexOf(inner) + startIdx;
    const snippet = html.slice(fullIdx - 80, fullIdx + 80);
    if (/class="new"/.test(snippet)) continue;
    if (/style="color:#717171"/.test(snippet)) continue;
    if (/^<s>/.test(snippet) || /<s>/.test(snippet)) continue;
    // skip if contains brackets [ or digits only
    if (/\[.*?\]/.test(raw)) continue;
    if (!raw) continue;
    stations.push(raw);
  }
  if (stations.length) out[group] = stations;
}
fs.writeFileSync('navbox_stations.json', JSON.stringify(out, null, 2));
console.log('Wrote navbox_stations.json with', Object.keys(out).length, 'groups');
