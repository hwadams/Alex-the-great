// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const points = [
  {
    number: "Departure",
    title: "Launch of Campaign",
    sub: "Spring 334 BC · Pella, Macedonia (Greece)",
    desc: "Alexander the Great undertook a 12-year campaign to overthrow the Achaemenid Empire of Persia (550–330 BC). The empire united various Iranian tribes and conquered major powers. It was the largest empire the ancient world had seen, covering parts of modern-day Iran, Turkey, Egypt, Afghanistan, and Pakistan and incorporating an estimated 44% of the world's population at the time. The empire was multicultural, well organized and introduced a 'Royal Road' system and a standardized currency. Founded by Cyrus the Great, it was expanded by Darius I and Xerxes and was opposed by the Greek city states across multiple wars and famous battles, including the Battle of Marathon and the Battle of Thermopylae.",
    lat: 40.8886008, lon: 23.972168,
    color: "#4caf50", type: "departure"
  },
  {
    number: "1",
    title: "Battle of the Granicus",
    sub: "May 334 BC · Turkey",
    desc: "Alexander and his men had their first encounter with the Persian army at the Granicus River, now known as the Biga River. Although the Persians were a significant force and brought over 10,000 soldiers, Alexander and his army defeated them. From here, Alexander moved on to easily conquer the ancient cities of Sarnis, Miletus, and Halicarnassus. All of the conquered cities kept their original form of government but paid taxes to Alexander.",
    lat: 40.3350301, lon: 27.2721863,
    color: "#f5c842", type: "landing"
  },
  {
    number: "2",
    title: "The Gordian Knot",
    sub: "Winter 334–333 BC · Gordium, Turkey",
    desc: "After the defeat of the Persian army at Granicus, Alexander and his men traveled throughout Asia Minor easily conquering Persian and Greek cities. The next significant stopping point was at Gordium, the home of the legendary Gordian Knot. The ancient legend said that whoever was able to untie the knot was destined to rule the world. Rather than attempting to untie it, Alexander simply cut it loose with his sword.",
    lat: 39.6733704, lon: 31.9921875,
    color: "#f5c842", type: "landing"
  },
  {
    number: "3",
    title: "Battle of Issus",
    sub: "November 333 BC · Turkey",
    desc: "The Macedonian and Persian armies met for a second time at Issus in November of 333 BC. Historians estimate that the Persian forces were anywhere from 300,000 to 600,000 men, greatly outnumbering the Macedonians. Although they had many more soldiers, the Persians were defeated by Alexander and his men again. The massive defeat opened up a path for Alexander and his men to continue their conquest by moving south into Syria and Phoenicia.",
    lat: 36.8796206, lon: 36.1560059,
    color: "#f5c842", type: "landing"
  },
  {
    number: "4",
    title: "Siege of Tyre",
    sub: "July 332 BC · Lebanon",
    desc: "While moving down the Phoenician coast, cities simply submitted to Alexander. However, the island city of Tyre resisted. In July of 332, Alexander and his men began a seven-month siege of the city, attacking it from ships that surrounded the island. During the siege, King Darius sent Alexander a letter offering him part of the empire in exchange for peace. Alexander refused and continued to move south towards Egypt after successfully taking Tyre.",
    lat: 33.2731391, lon: 35.2029419,
    color: "#f5c842", type: "landing"
  },
  {
    number: "5",
    title: "Siege of Gaza",
    sub: "Summer 332 BC · Gaza",
    desc: "On the way to Egypt, Alexander and his men were stopped again when Gaza refused to submit. They put the city under siege for two months until it finally fell. The conquering of Gaza meant that the entire Mediterranean coastline now belonged to the Macedonian Empire.",
    lat: 31.5036293, lon: 34.453125,
    color: "#f5c842", type: "landing"
  },
  {
    number: "6",
    title: "Liberation of Egypt",
    sub: "Winter 332–331 BC · Egypt",
    desc: "Alexander entered Egypt in late 332 BC and was welcomed as a liberator from Persian rule. The Persian satrap (governor) of Egypt, Mazaces, surrendered peacefully because many troops had already been lost fighting Alexander at Issus. Alexander spent several months in Egypt, where he visited Memphis, consulted the Oracle of Amun-Ra, and founded the city of Alexandria before departing for Asia.",
    lat: 31.200762, lon: 29.9188614,
    color: "#f5c842", type: "landing"
  },
  {
    number: "7",
    title: "Battle of Gaugamela",
    sub: "October 331 BC · Iraq",
    desc: "After gaining reinforcements in Tyre, Alexander and his men marched into Mesopotamia, conquering small cities along the way. The Macedonian and Persian armies met again at the Battle of Gaugamela on October 1, 331 BC near present-day Erbil. Darius and his men waited here to stop Alexander from entering the Persian Empire. Again greatly outnumbered, the Macedonians used superior tactics to prevail. When the Persians were becoming overpowered, Darius and his men began to retreat but were pursued by Alexander's forces, who were ultimately unable to capture them. Alexander then turned south to take Babylon.",
    lat: 36.177791, lon: 43.9947916,
    color: "#f5c842", type: "landing"
  },
  {
    number: "8",
    title: "Babylon & Susa",
    sub: "October 331 BC · Iraq",
    desc: "Before entering Babylon, Alexander received a request from the people to surrender their city, citadel, and treasury. Susa also surrendered without contest in late 331 BC, and its inhabitants were treated respectfully. The city yielded a massive treasury, including 50,000 gold talents and vast amounts of silver and jewels. Alexander found treasures there that had been taken from Greece by Xerxes I — such as statues of Harmodius and Aristogeiton — and ordered them returned to Athens.",
    lat: 32.4680606, lon: 44.5495605,
    color: "#f5c842", type: "landing"
  },
  {
    number: "9",
    title: "Persepolis",
    sub: "Early 330 BC · Iran",
    desc: "Alexander forced his way through the mountainous Persian Gates and took Persepolis. He took possession of the enormous treasury, which held 120,000 talents of gold and silver — the largest concentration of wealth in the world at the time. He allowed his soldiers to plunder the city. After spending roughly four months there, Alexander ordered the palaces and the city itself burned in 330 BC. Sources indicate that Alexander regretted his decision the next morning, but the fire had already destroyed centuries of Zoroastrian religious texts and invaluable art.",
    lat: 29.9358952, lon: 52.8881836,
    color: "#f5c842", type: "landing"
  },
  {
    number: "10",
    title: "Media",
    sub: "Spring 330 BC · Iran",
    desc: "Alexander the Great occupied Media, a crucial Persian region, seizing its capital Ecbatana to cut off Darius III from his western territories. This conquest secured a significant administrative center, allowed him to seize vast treasures, and pushed his campaign deep into the heart of the Achaemenid Empire before pushing eastward towards India.",
    lat: 34.7957615, lon: 48.515625,
    color: "#f5c842", type: "landing"
  },
  {
    number: "11",
    title: "Death of Darius III",
    sub: "330 BC · Near Bactria, Afghanistan",
    desc: "Alexander discovered that King Darius III had been hiding in a remote area near Bactria. When he arrived, he found Darius stabbed by his own satrap Bessus and left dying in a cart. Alexander sent Darius's body back to the capital Persepolis and ordered him buried with full royal honors in what remained of the royal tombs. With no rival king remaining, Alexander declared himself King of Asia.",
    lat: 35.6929946, lon: 55.8105469,
    color: "#f5c842", type: "landing"
  },
  {
    number: "12",
    title: "Zadracarta",
    sub: "330 BC · Gorgan, Iran",
    desc: "After crossing the Elburz Mountains, Alexander and his men conquered Zadracarta, modern-day Gorgan in northern Iran. Afterwards, Alexander continued his conquest eastward into the heart of Central Asia.",
    lat: 37.1603777, lon: 54.6353057,
    color: "#f5c842", type: "landing"
  },
  {
    number: "13",
    title: "Alexandria of the Arians",
    sub: "330 BC · Herat, Afghanistan",
    desc: "Alexander founded Alexandria of the Arians at the site of modern-day Herat in western Afghanistan, one of several cities he would name after himself during the campaign. Strategically placed on the Hari River, the city became an important hub on what would later become the ancient Silk Road, connecting the Mediterranean world to Central and South Asia.",
    lat: 34.3529553, lon: 62.2038603,
    color: "#f5c842", type: "landing"
  },
  {
    number: "14",
    title: "Conspiracy of Philotas",
    sub: "330 BC · Farah, Afghanistan",
    desc: "At the city of Phrada in Drangiana, Alexander uncovered a plot against his life. His general Philotas, son of the powerful Parmenion, was accused of withholding knowledge of the conspiracy. Philotas was tried before the assembled army, tortured, and executed. Alexander then sent orders to have Parmenion — his most senior general and his father's most trusted commander — assassinated in Media, despite Parmenion having no proven involvement in the plot.",
    lat: 31.6645315, lon: 64.2664768,
    color: "#f5c842", type: "landing"
  },
  {
    number: "15",
    title: "Alexandria Eschate",
    sub: "329 BC · Khujand, Tajikistan",
    desc: "Pressing into Central Asia, Alexander founded Alexandria Eschate — 'Alexandria the Farthest' — on the banks of the Jaxartes River (modern Syr Darya), marking the northeastern limit of his empire. From here he crossed the river to repel Scythian raids, demonstrating his intent to secure even the outermost frontiers of his conquered territories.",
    lat: 40.2741598, lon: 69.6393299,
    color: "#f5c842", type: "landing"
  },
  {
    number: "16",
    title: "Bactra",
    sub: "327 BC · Balkh, Afghanistan",
    desc: "Alexander spent nearly two years in Bactria and Sogdia suppressing local resistance — the most sustained guerrilla warfare of his entire campaign. It was here that he married the Bactrian princess Roxane, a politically significant union intended to legitimize his rule over the region. After consolidating control, Alexander gathered fresh reinforcements at Bactra and reorganized his army before launching his invasion of India.",
    lat: 36.7552666, lon: 66.8975759,
    color: "#f5c842", type: "landing"
  },
  {
    number: "17",
    title: "Taxila",
    sub: "Spring 326 BC · Punjab, Pakistan",
    desc: "Alexander crossed the Hindu Kush and descended into the Punjab. At Taxila, the city's ruler Taxiles submitted willingly and provided Alexander with elephants, troops, and supplies. A major center of trade and learning, Taxila would go on to become one of the great cities of the ancient world. After resting and resupplying, Alexander prepared to push further east — but his army was approaching its breaking point.",
    lat: 33.5812652, lon: 73.0175625,
    color: "#f5c842", type: "landing"
  },
  {
    number: "Final",
    title: "River Hyphasis — End of Conquest",
    sub: "326 BC · Beas River, Punjab, India",
    desc: "At the Hyphasis (modern Beas River) in the Punjab, Alexander's troops finally refused to march any further east. After nearly a decade of continuous campaigning, they had heard reports of vast armies and war elephants beyond the river. Despite Alexander's personal pleas and appeals to glory, the soldiers stood firm — led by the general Coenus, who voiced the army's exhaustion. For the first time in his life, Alexander was forced to concede. He turned his forces south toward the sea, then west. Alexander died of a sudden fever in Babylon in June 323 BC, aged just 32, never having returned to Macedonia.",
    lat: 32.1069975, lon: 76.0199064,
    color: "#e53935", type: "final"
  }
];

// Full route waypoints per segment (from original KML data)
const segmentWaypoints = [
  // 0: Departure → LP1
  [[40.8886008,23.972168],[40.6190717,24.1698112],[40.4487655,24.5851594],[40.1045613,25.4422462],[40.0304994,25.9210965],[40.0200526,26.1575122],[40.0356837,26.2743852],[40.1043992,26.3602636],[40.1730488,26.4366841],[40.2450186,26.6458233],[40.2872728,26.8470688],[40.3291458,27.0526859],[40.3350301,27.2721863]],
  // 1: LP1 → LP2
  [[40.3350301,27.2721863],[40.0446839,27.244734],[39.9078633,27.2202907],[39.7708771,27.141258],[39.2741607,27.0559433],[38.7520911,27.0803839],[38.182069,27.1801757],[37.8549691,27.3624391],[37.6235432,27.351199],[37.4181633,27.5262451],[37.1734487,27.9492188],[36.7476878,29.130249],[36.4349174,29.4244],[36.4080207,29.899292],[36.5537752,30.3112793],[37.1690716,30.5419922],[37.7012073,30.904541],[38.7314122,31.3969231],[39.194256,31.6596007],[39.6733704,31.9921875]],
  // 2: LP2 → LP3
  [[39.6733704,31.9921875],[39.8556936,32.4680869],[39.9516099,32.9679338],[39.9304101,33.2015551],[39.8384071,33.4139539],[39.6954323,33.6036926],[39.4389039,33.8224262],[39.1245916,34.0692398],[38.8479115,34.2208415],[38.1999793,34.3668595],[37.1801524,34.8021477],[36.8577709,34.8706875],[36.7863461,35.0118615],[36.7410773,35.2077104],[36.7981397,35.5573802],[36.9512878,35.8566282],[36.9901739,36.0393464],[36.8796206,36.1560059]],
  // 3: LP3 → LP4
  [[36.8796206,36.1560059],[36.6872283,36.3151003],[36.3933443,36.0123167],[36.2651034,35.9462519],[36.128004,36.0120236],[35.8400805,36.0331693],[35.7692105,35.9257723],[35.6447868,35.8625299],[35.4227028,35.9886376],[35.151181,35.9992624],[34.9468383,35.9930356],[34.4913103,36.0409742],[34.2907854,35.7906033],[34.0537361,35.7168571],[33.6499864,35.5246517],[33.434166,35.3744335],[33.2731391,35.2029419]],
  // 4: LP4 → LP5
  [[33.2731391,35.2029419],[33.1646504,35.2071756],[33.051559,35.1565363],[32.8299503,35.0829668],[32.7636584,35.0195013],[32.6441847,34.9644155],[32.3819808,34.914998],[31.899959,34.730992],[31.6878478,34.6137344],[31.5036293,34.453125]],
  // 5: LP5 → LP6
  [[31.5036293,34.453125],[31.210574,34.2749952],[31.0341745,33.905878],[30.8648685,33.4723493],[30.694036,33.0235242],[30.3844549,31.7428874],[30.2441793,31.3998838],[30.1926467,31.2259063],[30.2215683,31.0409837],[30.3952474,30.8186879],[30.6824873,30.7880547],[31.0149484,30.7227487],[31.133968,30.6431385],[31.2058254,30.5166847],[31.2341776,30.3624816],[31.2294641,30.2082399],[31.200762,29.9188614]],
  // 6: LP6 → LP7
  [[31.200762,29.9188614],[31.0036924,29.6788022],[30.8814921,29.5481599],[30.7403827,29.5166173],[30.5431644,29.7053223],[30.4118124,29.9482279],[30.1390541,30.5742807],[30.0424261,30.993627],[30.0109953,31.42341],[30.1816617,32.2729063],[30.8086798,34.0053059],[32.2345279,36.4574873],[33.2954379,37.6104193],[34.6233722,38.4791644],[35.4937304,39.4379454],[35.975598,40.5346518],[36.4668775,41.7571649],[36.4514545,42.9649257],[36.177791,43.9947916]],
  // 7: LP7 → LP8
  [[36.177791,43.9947916],[35.2551064,43.9639082],[34.3413829,44.0640758],[33.4049581,44.2050654],[32.9274065,44.3287868],[32.4680606,44.5495605]],
  // 8: LP8 → LP9
  [[32.4680606,44.5495605],[31.3225861,45.0682677],[30.8840655,46.1446572],[31.0360189,47.6522216],[31.6254458,48.8187258],[31.3847131,49.9367689],[30.9474355,50.9592241],[30.48309,51.9946258],[30.2221171,52.4646196],[29.9358952,52.8881836]],
  // 9: LP9 → LP10
  [[29.9358952,52.8881836],[30.676984,52.6045431],[31.3413309,52.1175501],[32.514476,50.9914459],[33.7344102,49.8578386],[34.7957615,48.515625]],
  // 10: LP10 → LP11
  [[34.7957615,48.515625],[35.6784454,50.1778664],[36.0132756,52.0549883],[36.2148199,52.9979773],[36.2492048,53.9423076],[36.1436381,55.0202881],[35.6929946,55.8105469]],
  // 11: LP11 → LP12
  [[35.6929946,55.8105469],[37.1603777,54.6353057]],
  // 12: LP12 → LP13
  [[37.1603777,54.6353057],[36.9768807,56.9133514],[36.3310002,59.0357698],[35.3881446,60.7930207],[34.3529553,62.2038603]],
  // 13: LP13 → LP14
  [[34.3529553,62.2038603],[33.6238678,62.6156185],[32.9115867,63.0641235],[32.2523261,63.6474618],[31.6645315,64.2664768]],
  // 14: LP14 → LP15
  [[31.6645315,64.2664768],[31.6073639,64.8665454],[31.678495,65.600119],[32.4003284,66.6020712],[33.1013199,67.2795634],[34.5296752,68.2680732],[35.8034272,68.5858247],[40.2741598,69.6393299]],
  // 15: LP15 → LP16
  [[40.2741598,69.6393299],[39.5033153,68.7078623],[38.5914296,68.0591515],[37.6747719,67.3832864],[36.7552666,66.8975759]],
  // 16: LP16 → LP17
  [[36.7552666,66.8975759],[35.4188941,68.0161215],[34.1769912,69.4021261],[33.7828238,71.2161565],[33.5812652,73.0175625]],
  // 17: LP17 → Final
  [[33.5812652,73.0175625],[33.2797734,73.8874998],[32.8992273,74.6850142],[32.5048742,75.3993458],[32.1069975,76.0199064]]
];

// ─────────────────────────────────────────────
// CUMULATIVE MILES & YEARS
// ─────────────────────────────────────────────

// Haversine distance in miles between two lat/lon points
function haversineMiles(lat1, lon1, lat2, lon2) {
  const R = 3958.8;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 +
    Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// Cumulative miles at each point index (index 0 = departure = 0 miles)
const cumulativeMiles = [0];
for (let seg = 0; seg < segmentWaypoints.length; seg++) {
  const wpts = segmentWaypoints[seg];
  let segDist = 0;
  for (let i = 1; i < wpts.length; i++) {
    segDist += haversineMiles(wpts[i-1][0], wpts[i-1][1], wpts[i][0], wpts[i][1]);
  }
  cumulativeMiles.push(cumulativeMiles[seg] + segDist);
}

// Cumulative years elapsed from Spring 334 BC at each point (rounded to nearest 0.25)
// 19 entries: Departure + 17 Landing Points + Final (11.25 = Spring 334 BC → June 323 BC death)
const pointYears = [0, 0.25, 0.75, 1.5, 2.25, 2.5, 2.75, 3.5, 3.75, 4.0, 4.25, 4.5, 4.75, 4.75, 5.0, 5.25, 7.0, 8.0, 11.25];

// Scale computed route miles so the final point matches the historically cited ~11,000 miles
const milesScale = 11000 / cumulativeMiles[cumulativeMiles.length - 1];

// ─────────────────────────────────────────────
// MAP INIT
// ─────────────────────────────────────────────
const map = L.map('map', { center: [36, 48], zoom: 4 });

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ',
  maxZoom: 16
}).addTo(map);

// Fallback tile
const osmFallback = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 });

// ─────────────────────────────────────────────
// MARKERS (all placed upfront, dimmed)
// ─────────────────────────────────────────────
const markers = points.map((p, i) => {
  const isDep   = p.type === 'departure';
  const isFinal = p.type === 'final';
  const m = L.circleMarker([p.lat, p.lon], {
    radius: isDep || isFinal ? 10 : 8,
    fillColor: '#555',
    color: '#333',
    weight: 2,
    opacity: 0.5,
    fillOpacity: 0.4
  }).addTo(map);

  m.bindPopup(`
    <div class="popup-title">${p.number === 'Departure' || p.number === 'Final' ? p.number : 'Landing Point ' + p.number} — ${p.title}</div>
    <div style="font-size:11px;color:#c8a84a;margin-bottom:6px;">${p.sub}</div>
    <div style="font-size:11px;color:#aaa;max-width:240px;">${p.desc.substring(0,140)}…</div>
    <div class="popup-coords">${p.lat.toFixed(4)}°N, ${p.lon.toFixed(4)}°E</div>
  `, { maxWidth: 280 });

  return m;
});

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let currentStep  = -1;       // -1 = not started
let animating    = false;
let drawnLines   = [];        // completed polylines
let animLine     = null;      // currently-animating polyline

// ─────────────────────────────────────────────
// UI HELPERS
// ─────────────────────────────────────────────
function showPointInfo(idx) {
  const p = points[idx];
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('point-info').style.display = 'block';
  const yrs   = pointYears[idx];
  const miles = Math.round(cumulativeMiles[idx] * milesScale);
  document.getElementById('point-number').textContent =
    `Years: ${yrs} · Miles: ${miles.toLocaleString()}`;
  document.getElementById('point-title').textContent = p.title;
  document.getElementById('point-sub').textContent   = p.sub;
  document.getElementById('point-desc').textContent  = p.desc;
  // scroll to top
  document.getElementById('info-panel').scrollTop = 0;
  // auto-narrate
  speak(`${p.title}. ${p.sub}. ${p.desc}`);
}

function updateProgress() {
  // currentStep = index into points[] that we've just revealed
  // 0 = departure, 18 = final
  const pct = currentStep < 0 ? 0 : Math.round((currentStep / (points.length - 1)) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';

  const total = points.length - 1; // 18 legs
  if (currentStep < 0) {
    document.getElementById('step-counter').textContent = '— Press Start to begin —';
  } else if (currentStep === 0) {
    document.getElementById('step-counter').textContent = 'Departure • 18 legs to go';
  } else if (currentStep === points.length - 1) {
    document.getElementById('step-counter').textContent = '✓ Campaign complete — 12 years, 11,000 miles';
  } else {
    document.getElementById('step-counter').textContent =
      `Leg ${currentStep} of ${total} complete`;
  }
}

function lightUpMarker(idx) {
  const p = points[idx];
  markers[idx].setStyle({
    fillColor: p.color,
    color: '#fff',
    weight: 2.5,
    opacity: 1,
    fillOpacity: 0.95,
    radius: p.type === 'departure' || p.type === 'final' ? 11 : 9
  });
}

// ─────────────────────────────────────────────
// ANIMATION: draw a segment progressively
// ─────────────────────────────────────────────
function animateSegment(segIdx, onComplete) {
  const waypoints = segmentWaypoints[segIdx];
  const STEPS_PER_SEGMENT = 60; // total animation frames
  const interval = 18;          // ms per frame

  // interpolate the waypoints into STEPS_PER_SEGMENT evenly-spaced points
  function interpolate(pts, n) {
    // compute cumulative distances
    const dists = [0];
    for (let i = 1; i < pts.length; i++) {
      const dy = pts[i][0] - pts[i-1][0];
      const dx = pts[i][1] - pts[i-1][1];
      dists.push(dists[i-1] + Math.sqrt(dx*dx + dy*dy));
    }
    const total = dists[dists.length - 1];
    const result = [pts[0]];
    for (let s = 1; s < n; s++) {
      const target = (s / (n - 1)) * total;
      let j = 1;
      while (j < dists.length - 1 && dists[j] < target) j++;
      const t = (target - dists[j-1]) / (dists[j] - dists[j-1]);
      result.push([
        pts[j-1][0] + t * (pts[j][0] - pts[j-1][0]),
        pts[j-1][1] + t * (pts[j][1] - pts[j-1][1])
      ]);
    }
    result.push(pts[pts.length - 1]);
    return result;
  }

  const interp = interpolate(waypoints, STEPS_PER_SEGMENT);
  let frame = 1;

  if (animLine) { map.removeLayer(animLine); animLine = null; }

  animLine = L.polyline([interp[0]], {
    color: '#8B0000', weight: 3, opacity: 0.9,
    lineJoin: 'round'
  }).addTo(map);

  const timer = setInterval(() => {
    frame++;
    animLine.addLatLng(interp[frame]);
    if (frame >= interp.length - 1) {
      clearInterval(timer);
      // Freeze into drawnLines
      drawnLines.push(animLine);
      animLine = null;
      onComplete();
    }
  }, interval);
}

// ─────────────────────────────────────────────
// STEP LOGIC
// ─────────────────────────────────────────────
function advance() {
  if (animating) return;

  const btnStart = document.getElementById('btn-start');
  const btnNext  = document.getElementById('btn-next');

  // First call: reveal departure, enable Next
  if (currentStep === -1) {
    currentStep = 0;
    lightUpMarker(0);
    showPointInfo(0);
    updateProgress();
    map.flyTo([points[0].lat, points[0].lon], 5, { duration: 1 });
    btnStart.disabled = true;
    btnNext.disabled  = false;
    return;
  }

  // Animate next segment
  const segIdx = currentStep; // segment from currentStep → currentStep+1
  if (segIdx >= segmentWaypoints.length) return;

  animating = true;
  btnNext.disabled = true;
  btnNext.textContent = 'Travelling…';

  animateSegment(segIdx, () => {
    currentStep++;
    lightUpMarker(currentStep);
    showPointInfo(currentStep);
    updateProgress();

    // Fly to new point
    map.flyTo([points[currentStep].lat, points[currentStep].lon], 5, { duration: 1.2 });

    animating = false;

    if (currentStep < points.length - 1) {
      btnNext.disabled  = false;
      btnNext.textContent = 'Next ▶';
    } else {
      btnNext.disabled  = true;
      btnNext.textContent = '— Complete —';
    }
  });
}

// ─────────────────────────────────────────────
// NARRATION
// ─────────────────────────────────────────────
let narrationMuted = false;

function speak(text) {
  if (!window.speechSynthesis || narrationMuted) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.rate = 0.95;
  utt.pitch = 1;
  window.speechSynthesis.speak(utt);
}

function stopSpeech() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

document.getElementById('btn-mute').addEventListener('click', () => {
  narrationMuted = !narrationMuted;
  document.getElementById('btn-mute').textContent = narrationMuted ? '🔇' : '🔊';
  if (narrationMuted) stopSpeech();
});

// ─────────────────────────────────────────────
// BUTTON EVENTS
// ─────────────────────────────────────────────
document.getElementById('btn-start').addEventListener('click', advance);
document.getElementById('btn-next').addEventListener('click', () => { stopSpeech(); advance(); });

// ─────────────────────────────────────────────
// LEGEND
// ─────────────────────────────────────────────
const legend = L.control({ position: 'bottomright' });
legend.onAdd = function() {
  const div = L.DomUtil.create('div', 'legend');
  div.innerHTML = `
    <h4>Legend</h4>
    <div class="legend-item"><div class="legend-dot" style="background:#4caf50;border-color:#fff;"></div><span>Departure (Macedonia)</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:#f5c842;border-color:#fff;"></div><span>Landing Points (×17)</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:#e53935;border-color:#fff;"></div><span>Final Point (India)</span></div>
    <div class="legend-item" style="margin-top:6px;">
      <div style="width:26px;height:3px;background:#8B0000;border-radius:2px;flex-shrink:0;"></div>
      <span>Animated Route</span>
    </div>`;
  return div;
};
legend.addTo(map);
