const fs = require('fs');
const html = fs.readFileSync('wiki.html', 'utf8');

function extract() {
  const results = {};
  const headingRegex = /<span class="mw-headline"[^>]*>([^<]+)<\/span>/g;
  let match;
  const headings = [];
  while ((match = headingRegex.exec(html)) !== null) {
    headings.push({name: match[1], index: match.index});
  }

  for (let i = 0; i < headings.length; i++) {
    const start = headings[i].index;
    const end = i + 1 < headings.length ? headings[i + 1].index : html.length;
    const block = html.slice(start, end);
    // find wikitable in block
    const tableMatch = block.match(/<table[\s\S]*?<\/table>/i);
    if (!tableMatch) continue;
    const table = tableMatch[0];
    // extract rows
    const rowRegex = /<tr[\s\S]*?<\/tr>/gi;
    let row;
    const stations = [];
    while ((row = rowRegex.exec(table)) !== null) {
      const rowText = row[0];
      // skip header rows
      if (/<th/i.test(rowText)) continue;
      // skip if contains 註 or 已更名|廢止|規劃
      if (/已更名|廢止|規劃中|規劃|停用|已停用/.test(rowText)) continue;
      // try to extract first link text in the row
      const tdMatch = rowText.match(/<td[\s\S]*?<a[^>]*>([^<]+)<\/a>/i);
      if (tdMatch) {
        let name = tdMatch[1].trim();
        // remove footnote markers like [1]
        name = name.replace(/\[.*?\]/g, '').trim();
        if (name && !/^[0-9]+$/.test(name)) stations.push(name);
      }
    }
    if (stations.length) results[headings[i].name] = stations;
  }
  return results;
}

const grouped = extract();
console.log(JSON.stringify(grouped, null, 2));
fs.writeFileSync('wiki_stations.json', JSON.stringify(grouped, null, 2), 'utf8');
console.log('Wrote wiki_stations.json');
