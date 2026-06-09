const fs = require('fs');
const child_process = require('child_process');

const pages = {
  '縱貫線': '/wiki/%E7%B8%B1%E8%B2%AB%E7%B7%9A',
  '海岸線': '/wiki/%E6%B5%B7%E5%B2%B8%E7%B7%9A_(%E8%87%BA%E9%90%B5)',
  '臺中線': '/wiki/%E8%87%BA%E4%B8%AD%E7%B7%9A',
  '南迴線': '/wiki/%E5%8D%97%E8%BF%B4%E7%B7%9A',
  '宜蘭線': '/wiki/%E5%AE%9C%E8%98%AD%E7%B7%9A',
  '北迴線': '/wiki/%E5%8C%97%E8%BF%B4%E7%B7%9A',
  '臺東線': '/wiki/%E8%87%BA%E6%9D%B1%E7%B7%9A',
  '平溪線': '/wiki/%E5%B9%B3%E6%BA%AA%E7%B7%9A'
};

function fetch(path, out) {
  child_process.execSync(`curl -s -L "https://zh.wikipedia.org${path}" -o ${out}`);
}

function parseFile(file) {
  const html = fs.readFileSync(file, 'utf8');
  const rows = [];
  // extract wikitable rows
  const tableRegex = /<table[^>]*class="[^"]*wikitable[^"]*"[\s\S]*?<\/table>/gi;
  let tm;
  while ((tm = tableRegex.exec(html)) !== null) {
    const table = tm[0];
    const trRegex = /<tr[\s\S]*?<\/tr>/gi;
    let tr;
    while ((tr = trRegex.exec(table)) !== null) {
      const row = tr[0];
      if (/<th/i.test(row)) continue;
      if (/已更名|廢止|規劃中|規劃|停用|已停用/.test(row)) continue;
      const aMatch = row.match(/<a[^>]*>([^<]+)<\/a>/i);
      if (aMatch) {
        let name = aMatch[1].trim();
        name = name.replace(/\[.*?\]/g, '').trim();
        if (name && !/^\d+$/.test(name)) rows.push(name);
      }
    }
  }
  // fallback: look for navbox-like link sequences
  if (!rows.length) {
    const navRegex = /<div[^>]*>\s*<a[^>]*>([^<]+)<\/a>(?:[\s\S]*?<a[^>]*>([^<]+)<\/a>)+[\s\S]*?<\/div>/gi;
    let nm;
    while ((nm = navRegex.exec(html)) !== null) {
      const block = nm[0];
      const linkRegex = /<a[^>]*>([^<]+)<\/a>/gi;
      let lm;
      while ((lm = linkRegex.exec(block)) !== null) {
        const txt = lm[1].trim();
        if (/style=\"color:#717171\"/.test(block)) continue;
        if (!/\[/.test(txt)) rows.push(txt);
      }
    }
  }
  // unique and clean
  return Array.from(new Set(rows)).filter(x => x.length<40);
}

const out = {};
for (const k in pages) {
  const fname = `page_${k}.html`.replace(/\//g,'_');
  try {
    fetch(pages[k], fname);
    out[k] = parseFile(fname);
    fs.writeFileSync(`stations_${k}.json`, JSON.stringify(out[k], null, 2));
    console.log('Parsed', k, out[k].length, 'stations');
  } catch (e) {
    console.error('error', k, e.message);
  }
}
fs.writeFileSync('stations_all.json', JSON.stringify(out, null, 2));
console.log('Wrote stations_all.json');
