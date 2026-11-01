const assert = require('node:assert/strict');
const fs = require('node:fs');
const locations = JSON.parse(fs.readFileSync('app/_data/locations.json', 'utf8'));
const base = process.env.CHECK_SITE_URL || 'http://127.0.0.1:3217';
const paths = ['/', '/care-plan', '/tm44-air-conditioning-inspections', '/air-conditioning-maintenance-york', '/air-conditioning-servicing-york', '/air-conditioning', '/facilities-management', ...locations.flatMap(l => [`/air-conditioning/${l.slug}`, `/facilities-management/${l.slug}`, `/tm44-air-conditioning-inspections/${l.slug}`])];
(async () => {
  assert.equal(locations.length, 67);
  assert.equal(new Set(locations.map(l => l.slug)).size, 67);
  const sitemap = await (await fetch(base + '/sitemap.xml')).text();
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  assert.equal(urls.length, paths.length);
  const expected = new Set(paths);
  let checked = 0;
  for (let i = 0; i < paths.length; i += 6) {
    await Promise.all(paths.slice(i, i + 6).map(async path => {
      const response = await fetch(base + path);
      assert.equal(response.status, 200, path);
      const html = await response.text();
      assert.equal((html.match(/<h1\b/g) || []).length, 1, path);
      const hero = html.match(/<section[^>]*class="[^"]*hero[^"]*"[^>]*>([\s\S]*?)<\/section>/);
      assert(hero && hero[1].includes('src="/air-care-uk-hero.svg"'), 'Missing hero logo ' + path);
      assert(urls.includes('https://www.aircareuk.co.uk' + path), 'Missing sitemap entry ' + path);
      if (/^\/(air-conditioning|facilities-management|tm44-air-conditioning-inspections)\//.test(path)) {
        assert(html.includes('href="https://www.aircareuk.co.uk' + path + '"'), 'Canonical ' + path);
        const slug = path.split('/')[2];
        const location = locations.find(l => l.slug === slug);
        assert(html.includes(location.name.replaceAll('&', '&amp;')), 'Location name ' + path);
        assert(html.includes('name="Enquiry page" value="' + path + '"'), 'Enquiry context ' + path);
        if (path.startsWith("/tm44-air-conditioning-inspections/")) {
          assert(html.includes('name="Service" value="TM44 air conditioning inspection"'), "TM44 enquiry " + path);
          assert(html.includes('name="Building type"') && html.includes('name="Approximate units"') && html.includes('name="Previous report"'), "TM44 quote fields " + path);
        } else assert(html.includes('Your site postcode'), 'Postcode placeholder ' + path);
        for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
      }
      for (const match of html.matchAll(/href="(\/(?:air-conditioning|facilities-management|tm44-air-conditioning-inspections)(?:\/[^"#?]*)?)(?:#[^"]*)?"/g)) {
        assert(expected.has(match[1]), 'Broken coverage link ' + match[1] + ' on ' + path);
      }
      checked++;
    }));
  }
  for (const invalid of ['/air-conditioning/not-a-covered-area', '/facilities-management/not-a-covered-area', '/tm44-air-conditioning-inspections/not-a-covered-area']) assert.equal((await fetch(base + invalid)).status, 404, invalid);
  console.log(`${checked} pages passed: HTTP status, H1, sitemap, location canonicals, structured data, enquiry context and coverage links. Unknown areas return 404.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
