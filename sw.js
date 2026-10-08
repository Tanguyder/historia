/* Historia — service worker (mode hors ligne + installation)
   Pense a incrementer CACHE_VERSION a chaque mise a jour du contenu. */
const CACHE_VERSION = 'historia-v33';
const IMG_CACHE = 'historia-images-v23';

const CORE_ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './data/francePeriodes.js',
  './data/friseFrData.js',
  './data/guerresData.js',
  './data/relData.js',
  './data/antiqData.js',
  './data/figuresData.js',
  './data/mondePeriodes.js',
  './data/friseMondeData.js',
  './data/artData.js',
  './data/artistesData.js',
  './data/faitsDiversData.js',
  './data/presidentsData.js',
  './data/partisData.js',
  './data/dossiersData.js',
  './data/littData.js',
  './data/politiqueData.js',
  './data/evenementsData.js',
  './data/christData.js',
  './data/islamData.js',
  './data/judData.js',
  './data/boudData.js',
  './data/hindData.js',
  './data/figFrData.js',
  './data/geoData.js',
  './data/geoFranceData.js',
  './data/geoRegionsData.js',
  './data/regionsGeo.js',
  './data/worldTopo.js',
  'https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js',
  'https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js'
];

// Vignettes Wikimedia directes (prechargees en arriere-plan, tolerant aux echecs).
// Les images en Special:FilePath sont mises en cache a la volee lors de la navigation.
const IMG_ASSETS = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/400px-Nelson_Mandela_1994.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/800px-Nelson_Mandela_1994.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Alexander_Dumas_père_par_Nadar_-_Google_Art_Project.jpg/400px-Alexander_Dumas_père_par_Nadar_-_Google_Art_Project.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Baptism_of_Clovis.jpg/800px-Baptism_of_Clovis.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Robespierre.jpg/400px-Robespierre.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Battle_of_bouvines.jpg/800px-Battle_of_bouvines.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Danse_macabre_by_Michael_Wolgemut.jpg/400px-Danse_macabre_by_Michael_Wolgemut.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Julius_Caesar_Coustou_Louvre_MR1798.jpg/400px-Julius_Caesar_Coustou_Louvre_MR1798.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lascaux_painting.jpg/800px-Lascaux_painting.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Francois_I_Clouet.jpg/800px-Francois_I_Clouet.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/800px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/De_Gaulle-OWI.jpg/400px-De_Gaulle-OWI.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pont-du-Gard-septembre-2009.jpg/800px-Pont-du-Gard-septembre-2009.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Western_Wall_Dome_of_the_rock_Jerusalem.jpg/800px-Western_Wall_Dome_of_the_rock_Jerusalem.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/400px-GodfreyKneller-IsaacNewton-1689.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/800px-GodfreyKneller-IsaacNewton-1689.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Charlemagne_by_Albrecht_D%C3%BCrer.jpg/800px-Charlemagne_by_Albrecht_D%C3%BCrer.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Joan_of_Arc_miniature_graded.jpg/800px-Joan_of_Arc_miniature_graded.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Pergamonmuseum_-_Ishtar-Tor.jpg/800px-Pergamonmuseum_-_Ishtar-Tor.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kleopatra-VII.-Altes-Museum-Berlin1.jpg/400px-Kleopatra-VII.-Altes-Museum-Berlin1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Battle_of_Issus_mosaic_-_Museo_Archeologico_Nazionale_-_Naples_BW.jpg/800px-Battle_of_Issus_mosaic_-_Museo_Archeologico_Nazionale_-_Naples_BW.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Louis_Pasteur.jpg/400px-Louis_Pasteur.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Invasions_of_the_Roman_Empire_1.png/800px-Invasions_of_the_Roman_Empire_1.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Claude_Debussy_ca_1908%2C_foto_av_Félix_Nadar.jpg/400px-Claude_Debussy_ca_1908%2C_foto_av_Félix_Nadar.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/David_-_Portrait_of_Monsieur_Lavoisier_and_His_Wife.jpg/400px-David_-_Portrait_of_Monsieur_Lavoisier_and_His_Wife.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Glacier_National_Park_Annual_Snowpack.jpg/400px-Glacier_National_Park_Annual_Snowpack.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Anonymous_-_Prise_de_la_Bastille.jpg/800px-Anonymous_-_Prise_de_la_Bastille.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Ellora_cave_16_Kailash_temple_overview.jpg/800px-Ellora_cave_16_Kailash_temple_overview.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Treaty_of_Verdun.jpg/800px-Treaty_of_Verdun.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/400px-Louis_XIV_of_France.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/800px-Louis_XIV_of_France.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Cranach-luther-1528.jpg/800px-Cranach-luther-1528.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Masjid_Al_Haram%2C_Mecca%2C_Saudi_Arabia.jpg/800px-Masjid_Al_Haram%2C_Mecca%2C_Saudi_Arabia.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Stonehenge_Total.jpg/800px-Stonehenge_Total.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bundesarchiv_Bild_183-R05148%2C_Westfront%2C_Grabenkampf.jpg/800px-Bundesarchiv_Bild_183-R05148%2C_Westfront%2C_Grabenkampf.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hannibal_traverse_le_Rh%C3%B4ne%2C_H._Motte%2C_1878.jpg/800px-Hannibal_traverse_le_Rh%C3%B4ne%2C_H._Motte%2C_1878.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hannibal_traverse_le_Rhône%2C_H._Motte%2C_1878.jpg/800px-Hannibal_traverse_le_Rhône%2C_H._Motte%2C_1878.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Francis1-1.jpg/400px-Francis1-1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Blaise_pascal.jpg/400px-Blaise_pascal.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/YuanEmperorAlbumGenghisPortrait.jpg/400px-YuanEmperorAlbumGenghisPortrait.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Henri4_crop.jpg/800px-Henri4_crop.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Dore_crusades_Godfrey.jpg/800px-Dore_crusades_Godfrey.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Maometto_Cristofano_dell%27Altissimo.jpg/400px-Maometto_Cristofano_dell%27Altissimo.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg/800px-Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Carta_Marina.jpeg/800px-Carta_Marina.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/West_and_East_at_Checkpoint_Charlie.jpg/800px-West_and_East_at_Checkpoint_Charlie.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/De_Gaulle-OWI.jpg/400px-De_Gaulle-OWI.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tour_Eiffel_Wikimedia_Commons.jpg/400px-Tour_Eiffel_Wikimedia_Commons.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Vercingetorix.jpg/800px-Vercingetorix.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Charlemagne-by-Durer.jpg/400px-Charlemagne-by-Durer.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/400px-Claude_Monet_1899_Nadar_crop.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Socrates_Louvre.jpg/800px-Socrates_Louvre.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Into_the_Jaws_of_Death_23-0455M_edit.jpg/800px-Into_the_Jaws_of_Death_23-0455M_edit.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Madinah_Saudia_Arabia.jpg/800px-Madinah_Saudia_Arabia.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/800px-All_Gizah_Pyramids.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Napoleon_Bonaparte.jpg/800px-Napoleon_Bonaparte.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Berlinwall.jpg/800px-Berlinwall.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_1812.jpg/400px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_1812.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Vercingetorix_throws_down_his_arms_at_the_feet_of_Julius_Caesar.jpg/800px-Vercingetorix_throws_down_his_arms_at_the_feet_of_Julius_Caesar.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Slaveshiptransportation.jpg/800px-Slaveshiptransportation.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/400px-Leonardo_self.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self_portrait_Louvre.jpg/800px-Leonardo_self_portrait_Louvre.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Socrate_du_Louvre.jpg/400px-Socrate_du_Louvre.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Battle_of_Austerlitz_by_Francois_Gerard.jpg/800px-Battle_of_Austerlitz_by_Francois_Gerard.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/D%27après_Maurice_Quentin_de_La_Tour%2C_Portrait_de_Voltaire%2C_détail_du_visage_%28château_de_Ferney%29.jpg/400px-D%27après_Maurice_Quentin_de_La_Tour%2C_Portrait_de_Voltaire%2C_détail_du_visage_%28château_de_Ferney%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Eugene_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/400px-Eugene_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tilly_at_the_battle_of_Leipzig.jpg/800px-Tilly_at_the_battle_of_Leipzig.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/400px-Marie_Curie_c._1920s.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ishtar_gate_Pergamon_Museum.JPG/800px-Ishtar_gate_Pergamon_Museum.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/800px-The_Parthenon_in_Athens.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Aleksandr_Macedonski.jpg/400px-Aleksandr_Macedonski.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mahomet_Habichtsburg.jpg/800px-Mahomet_Habichtsburg.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Louis_xvi_1786.jpg/800px-Louis_xvi_1786.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/800px-Kheops-Pyramid.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Victor_Hugo_by_Étienne_Carjat_1876_-_full.jpg/400px-Victor_Hugo_by_Étienne_Carjat_1876_-_full.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Apadana_Persepolis_Iran.JPG/800px-Apadana_Persepolis_Iran.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mycenae_ruins_2013.jpg/800px-Mycenae_ruins_2013.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Crystal_Palace_Interior_1851.jpg/800px-Crystal_Palace_Interior_1851.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Christ_Pantocrator_Deesis_mosaic_Hagia_Sophia.jpg/800px-Christ_Pantocrator_Deesis_mosaic_Hagia_Sophia.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Gautam_buddha_-_painting.jpg/400px-Gautam_buddha_-_painting.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Gautam_buddha_-_painting.jpg/800px-Gautam_buddha_-_painting.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg/400px-Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Molière_-_Nicolas_Mignard_(1658).jpg/400px-Molière_-_Nicolas_Mignard_(1658).jpg"
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then((c) => c.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter((k) => k !== CACHE_VERSION && k !== IMG_CACHE).map((k) => caches.delete(k))
    );
    await self.clients.claim();
    const ic = await caches.open(IMG_CACHE);
    Promise.allSettled(IMG_ASSETS.map(async (u) => {
      try {
        const m = await ic.match(u);
        if (m) return;
        const r = await fetch(u, { mode: 'no-cors' });
        if (r) await ic.put(u, r);
      } catch (_) {}
    }));
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Fichiers du site (pages, scripts, styles, données) : réseau d'abord, pour voir
  // immédiatement chaque nouvelle version ; copie en cache pour le mode hors ligne.
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => caches.match(req, { ignoreSearch: false }).then((m) => m || caches.match(req, { ignoreSearch: true })))
    );
    return;
  }
  // Images, polices, bibliothèques : cache d'abord (elles ne changent pas).
  const isImg = url.hostname.includes('wikimedia.org');
  const cacheName = isImg ? IMG_CACHE : CACHE_VERSION;
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        const cacheable = res && (res.status === 200 || res.type === 'opaque') &&
          (url.hostname.includes('fonts.googleapis.com') ||
           url.hostname.includes('fonts.gstatic.com') ||
           url.hostname.includes('cdn.jsdelivr.net') ||
           url.hostname.includes('wikimedia.org'));
        if (cacheable) {
          const copy = res.clone();
          caches.open(cacheName).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
