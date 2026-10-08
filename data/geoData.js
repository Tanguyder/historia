// GEOGRAPHIE — grands repères physiques. cat: fleuve, montagne, mer, ocean, detroit, desert
const geoData=[
 // ---------- FLEUVES ----------
 {nom:"Le Nil",lon:31.2,lat:30.0,dates:"≈ 6 650 km",role:"Afrique — le plus long fleuve du monde",cat:"fleuve",catLabel:"🏞️ Fleuve",color:"#2563eb",emoji:"🏞️",img:"",
  resume:"Berceau de la civilisation égyptienne, le Nil traverse le désert sur plus de 6 600 km jusqu'à la Méditerranée.",
  detail:`<p>Le <strong>Nil</strong> est, avec l'Amazone, le plus long fleuve du monde. Né en Afrique de l'Est (Nil Blanc) et en Éthiopie (Nil Bleu), il traverse le Soudan et l'Égypte pour se jeter dans la Méditerranée par un vaste delta.</p>
  <p>Ses crues annuelles déposaient un limon fertile qui permit la naissance de la <strong>civilisation égyptienne</strong> il y a 5 000 ans. Hérodote disait déjà que l'Égypte était « un don du Nil ».</p>
  <ul class="fact-list"><li>Longueur : environ 6 650 km</li><li>Pays traversés : 11, dont Égypte, Soudan, Ouganda</li><li>Régulé aujourd'hui par le haut barrage d'Assouan</li></ul>`},

 {nom:"L'Amazone",lon:-51.0,lat:-0.5,dates:"≈ 6 400 km",role:"Amérique du Sud — le plus puissant",cat:"fleuve",catLabel:"🏞️ Fleuve",color:"#2563eb",emoji:"🏞️",img:"",
  resume:"De loin le plus grand fleuve par son débit, il rejette à lui seul environ un cinquième de l'eau douce des fleuves.",
  detail:`<p>L'<strong>Amazone</strong> est le fleuve le plus puissant de la planète : son <strong>débit</strong> dépasse celui des sept fleuves suivants réunis. Il déverse dans l'Atlantique près de 20 % de toute l'eau douce apportée aux océans.</p>
  <p>Il draine la plus grande forêt tropicale du monde, l'<strong>Amazonie</strong>, réservoir de biodiversité essentiel à l'équilibre climatique planétaire.</p>
  <ul class="fact-list"><li>Débit moyen : environ 209 000 m³/s</li><li>Bassin : plus de 7 millions de km²</li><li>À son embouchure, il est si large qu'on ne voit plus les deux rives</li></ul>`},

 {nom:"Le Yangtsé",lon:121.5,lat:31.4,dates:"≈ 6 300 km",role:"Asie — le plus long d'Asie",cat:"fleuve",catLabel:"🏞️ Fleuve",color:"#2563eb",emoji:"🏞️",img:"",
  resume:"Colonne vertébrale de la Chine, le Yangtsé porte le plus grand barrage du monde, les Trois-Gorges.",
  detail:`<p>Le <strong>Yangtsé</strong> (Chang Jiang, « long fleuve ») est le plus long fleuve d'Asie et le troisième du monde. Il traverse la Chine d'ouest en est et concentre une part majeure de sa population et de son économie.</p>
  <p>Il accueille le <strong>barrage des Trois-Gorges</strong>, la plus grande centrale hydroélectrique du monde.</p>
  <ul class="fact-list"><li>Longueur : environ 6 300 km</li><li>Bassin : un tiers de la population chinoise</li><li>Métropoles : Chongqing, Wuhan, Shanghai</li></ul>`},

 {nom:"Le Gange",lon:88.0,lat:22.5,dates:"≈ 2 525 km",role:"Inde — le fleuve sacré",cat:"fleuve",catLabel:"🏞️ Fleuve",color:"#2563eb",emoji:"🕉️",img:"",
  resume:"Fleuve sacré de l'hindouisme, le Gange fait vivre des centaines de millions de personnes.",
  detail:`<p>Le <strong>Gange</strong> descend de l'Himalaya et traverse la plaine la plus peuplée du monde avant de rejoindre le golfe du Bengale. Il est vénéré comme une déesse dans l'<strong>hindouisme</strong>.</p>
  <p>Des millions de pèlerins se baignent dans ses eaux, notamment à <strong>Varanasi</strong>, pour se purifier. Son bassin nourrit plus de 400 millions de personnes.</p>
  <ul class="fact-list"><li>Longueur : environ 2 525 km</li><li>Lieu saint majeur : Varanasi (Bénarès)</li><li>Forme avec le Brahmapoutre le plus grand delta du monde</li></ul>`},

 {nom:"Le Danube",lon:29.6,lat:45.2,dates:"≈ 2 850 km",role:"Europe — le fleuve des capitales",cat:"fleuve",catLabel:"🏞️ Fleuve",color:"#2563eb",emoji:"🏞️",img:"",
  resume:"Deuxième fleuve d'Europe, il traverse dix pays et quatre capitales, de l'Allemagne à la mer Noire.",
  detail:`<p>Le <strong>Danube</strong> est le deuxième plus long fleuve d'Europe après la Volga. Il prend sa source en Allemagne (Forêt-Noire) et se jette dans la <strong>mer Noire</strong> par un vaste delta.</p>
  <p>Axe de circulation et de civilisation depuis l'Antiquité (il marquait une frontière de l'Empire romain), il arrose quatre capitales : Vienne, Bratislava, Budapest et Belgrade.</p>
  <ul class="fact-list"><li>Longueur : environ 2 850 km</li><li>Pays traversés : 10 (record mondial)</li><li>Relié au Rhin par un canal, donc à la mer du Nord</li></ul>`},

 {nom:"La Loire",lon:-2.1,lat:47.3,dates:"1 006 km",role:"France — le plus long fleuve français",cat:"fleuve",catLabel:"🏞️ Fleuve",color:"#2563eb",emoji:"🏰",img:"",
  resume:"Plus long fleuve de France, la Loire est célèbre pour ses châteaux et ses paysages classés à l'UNESCO.",
  detail:`<p>La <strong>Loire</strong> est le plus long fleuve de France. Née dans le Massif central, elle décrit une grande courbe vers l'ouest jusqu'à l'Atlantique, près de Nantes.</p>
  <p>Restée largement sauvage, elle est bordée de prestigieux <strong>châteaux de la Renaissance</strong> (Chambord, Chenonceau). Une partie de sa vallée est classée au patrimoine mondial de l'UNESCO.</p>
  <ul class="fact-list"><li>Longueur : 1 006 km</li><li>Villes : Orléans, Tours, Nantes</li><li>« Le dernier fleuve sauvage d'Europe »</li></ul>`},

 // ---------- MONTAGNES ----------
 {nom:"L'Everest",lon:86.9,lat:28.0,dates:"8 849 m",role:"Himalaya — le toit du monde",cat:"montagne",catLabel:"🏔️ Montagne",color:"#475f8a",emoji:"🏔️",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Everest_kalapatthar.jpg?width=800",
  resume:"Le plus haut sommet de la planète, à la frontière entre le Népal et le Tibet, culmine à 8 849 mètres.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Everest_kalapatthar.jpg?width=800" alt="Le mont Everest" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Le mont Everest, toit du monde</p></div>
  <p>L'<strong>Everest</strong> est le point culminant de la Terre, à <strong>8 849 mètres</strong>, dans la chaîne de l'Himalaya, entre le Népal et le Tibet (Chine). Les Tibétains l'appellent <em>Chomolungma</em>, « déesse mère du monde ».</p>
  <p>Son sommet fut atteint pour la première fois en <strong>1953</strong> par Edmund Hillary et le sherpa Tenzing Norgay. L'air y est si rare qu'on parle de « zone de la mort » au-dessus de 8 000 m.</p>
  <ul class="fact-list"><li>Altitude : 8 849 m (et grandit de quelques mm/an)</li><li>Première ascension : 1953</li><li>Chaîne : Himalaya, née de la collision Inde-Asie</li></ul>`},

 {nom:"Le K2",lon:76.5,lat:35.9,dates:"8 611 m",role:"Karakoram — la montagne sauvage",cat:"montagne",catLabel:"🏔️ Montagne",color:"#475f8a",emoji:"🏔️",img:"",
  resume:"Deuxième sommet du monde, plus difficile et plus dangereux à gravir que l'Everest.",
  detail:`<p>Le <strong>K2</strong>, à <strong>8 611 m</strong>, est le deuxième plus haut sommet du monde, à la frontière du Pakistan et de la Chine. Bien que moins élevé que l'Everest, il est réputé <strong>bien plus difficile et meurtrier</strong> à escalader.</p>
  <p>Surnommé « la montagne sauvage », il combine pentes raides, météo extrême et avalanches. Son taux de mortalité parmi les alpinistes est l'un des plus élevés au monde.</p>
  <ul class="fact-list"><li>Altitude : 8 611 m</li><li>Chaîne : Karakoram</li><li>Première ascension : 1954 (expédition italienne)</li></ul>`},

 {nom:"Le Mont Blanc",lon:6.86,lat:45.83,dates:"4 806 m",role:"Alpes — le toit de l'Europe occidentale",cat:"montagne",catLabel:"🏔️ Montagne",color:"#475f8a",emoji:"🏔️",img:"",
  resume:"Plus haut sommet des Alpes, le Mont Blanc domine la France, l'Italie et marque la naissance de l'alpinisme.",
  detail:`<p>Le <strong>Mont Blanc</strong> est le plus haut sommet des Alpes et d'Europe occidentale, à environ <strong>4 806 m</strong>, entre la France et l'Italie. Sa première ascension, en <strong>1786</strong>, marque la naissance de l'alpinisme moderne.</p>
  <p>Sa calotte glaciaire et ses glaciers (la Mer de Glace) sont des témoins très suivis du réchauffement climatique.</p>
  <ul class="fact-list"><li>Altitude : environ 4 806 m (varie selon l'enneigement)</li><li>Première ascension : 1786</li><li>Ville-porte : Chamonix</li></ul>`},

 {nom:"Le Kilimandjaro",lon:37.35,lat:-3.07,dates:"5 895 m",role:"Tanzanie — le toit de l'Afrique",cat:"montagne",catLabel:"🏔️ Montagne",color:"#475f8a",emoji:"🌋",img:"",
  resume:"Plus haut sommet d'Afrique, ce volcan endormi porte des neiges éternelles en pleine zone équatoriale.",
  detail:`<p>Le <strong>Kilimandjaro</strong>, en Tanzanie, est le plus haut sommet d'Afrique (<strong>5 895 m</strong>). C'est un volcan endormi qui s'élève seul au-dessus de la savane, spectacle saisissant.</p>
  <p>Bien que situé près de l'équateur, son sommet est coiffé de <strong>glaciers</strong>, qui fondent toutefois rapidement. On peut y monter sans matériel technique, mais l'altitude reste un défi.</p>
  <ul class="fact-list"><li>Altitude : 5 895 m</li><li>Plus haute montagne isolée du monde</li><li>Ses glaciers pourraient disparaître dans les décennies à venir</li></ul>`},

 {nom:"L'Aconcagua",lon:-70.0,lat:-32.65,dates:"6 961 m",role:"Andes — le toit des Amériques",cat:"montagne",catLabel:"🏔️ Montagne",color:"#475f8a",emoji:"🏔️",img:"",
  resume:"Point culminant de l'hémisphère sud et des Amériques, dans la cordillère des Andes en Argentine.",
  detail:`<p>L'<strong>Aconcagua</strong>, en Argentine, est le plus haut sommet des Amériques et de tout l'hémisphère sud, à <strong>6 961 m</strong>. Il se dresse dans la <strong>cordillère des Andes</strong>, la plus longue chaîne de montagnes du monde.</p>
  <p>C'est le plus haut sommet du monde en dehors de l'Asie. Sa voie normale est non technique, ce qui en fait un objectif prisé des alpinistes, malgré l'altitude et les vents violents.</p>
  <ul class="fact-list"><li>Altitude : 6 961 m</li><li>Chaîne : Andes (plus de 7 000 km de long)</li><li>Hémisphère sud : point culminant</li></ul>`},

 // ---------- MERS ----------
 {nom:"La mer Méditerranée",lon:18.0,lat:35.0,dates:"≈ 2,5 M km²",role:"Berceau des civilisations",cat:"mer",catLabel:"🌊 Mer",color:"#0ea5e9",emoji:"🌊",img:"",
  resume:"Mer presque fermée entre trois continents, elle fut le cœur des civilisations antiques.",
  detail:`<p>La <strong>Méditerranée</strong> (« mer au milieu des terres ») est une mer quasi fermée, reliée à l'Atlantique par le seul détroit de Gibraltar. Entourée par l'Europe, l'Afrique et l'Asie, elle fut le grand carrefour des civilisations antiques.</p>
  <p>Phéniciens, Grecs, Romains en firent un espace d'échanges, de colonisation et de conflits (les Romains l'appelaient <em>Mare Nostrum</em>, « notre mer »).</p>
  <ul class="fact-list"><li>Superficie : environ 2,5 millions de km²</li><li>Profondeur maximale : environ 5 100 m</li><li>Très peu de marées, forte salinité</li></ul>`},

 {nom:"La mer des Caraïbes",lon:-75,lat:15,dates:"≈ 2,75 M km²",role:"Amérique tropicale",cat:"mer",catLabel:"🌊 Mer",color:"#0ea5e9",emoji:"🏝️",img:"",
  resume:"Parsemée d'îles tropicales, elle fut le théâtre des grandes explorations et de la piraterie.",
  detail:`<p>La <strong>mer des Caraïbes</strong> baigne l'Amérique centrale et un chapelet d'îles (Grandes et Petites Antilles). Eaux chaudes, récifs coralliens et plages en font une région emblématique des tropiques.</p>
  <p>Après 1492, elle fut au cœur de la colonisation européenne, du commerce sucrier, de l'esclavage et de l'âge d'or de la <strong>piraterie</strong>.</p>
  <ul class="fact-list"><li>Superficie : environ 2,75 millions de km²</li><li>Zone de cyclones tropicaux puissants</li><li>Récifs coralliens parmi les plus riches du monde</li></ul>`},

 {nom:"La mer Rouge",lon:38.0,lat:20.0,dates:"≈ 438 000 km²",role:"Entre Afrique et Arabie",cat:"mer",catLabel:"🌊 Mer",color:"#0ea5e9",emoji:"🌊",img:"",
  resume:"Étroite mer entre l'Afrique et l'Arabie, elle relie la Méditerranée à l'océan Indien via Suez.",
  detail:`<p>La <strong>mer Rouge</strong> sépare l'Afrique de la péninsule Arabique. Au nord, le <strong>canal de Suez</strong> la relie à la Méditerranée ; au sud, le détroit de Bab-el-Mandeb la connecte à l'océan Indien.</p>
  <p>C'est l'une des routes maritimes les plus stratégiques du monde, par laquelle transite une grande partie du commerce entre l'Europe et l'Asie. Ses eaux chaudes abritent des récifs coralliens réputés.</p>
  <ul class="fact-list"><li>Superficie : environ 438 000 km²</li><li>Très salée et très chaude</li><li>Route clé du commerce mondial (Suez)</li></ul>`},

 {nom:"La mer Noire",lon:34.0,lat:43.0,dates:"≈ 436 000 km²",role:"Entre Europe et Asie",cat:"mer",catLabel:"🌊 Mer",color:"#0ea5e9",emoji:"🌊",img:"",
  resume:"Mer intérieure reliée à la Méditerranée par le Bosphore, aux profondeurs sans oxygène.",
  detail:`<p>La <strong>mer Noire</strong> est une mer intérieure entre l'Europe de l'Est, le Caucase et l'Anatolie. Elle communique avec la Méditerranée par le détroit du <strong>Bosphore</strong>, à Istanbul.</p>
  <p>Sa particularité : sous environ 150 m de profondeur, ses eaux sont <strong>dépourvues d'oxygène</strong> (anoxiques), ce qui y conserve remarquablement les épaves antiques.</p>
  <ul class="fact-list"><li>Superficie : environ 436 000 km²</li><li>Alimentée par le Danube, le Dniepr, le Don</li><li>Riverains : Turquie, Ukraine, Russie, Roumanie...</li></ul>`},

 {nom:"La mer Morte",lon:35.5,lat:31.5,dates:"− 430 m",role:"Le point le plus bas de la Terre",cat:"mer",catLabel:"🧂 Mer",color:"#0ea5e9",emoji:"🧂",img:"",
  resume:"Lac salé entre Israël et Jordanie, c'est le point émergé le plus bas du globe, où l'on flotte sans effort.",
  detail:`<p>La <strong>mer Morte</strong> est en réalité un lac salé, situé à la frontière entre Israël, la Cisjordanie et la Jordanie. Sa surface, à environ <strong>430 m sous le niveau de la mer</strong>, est le point émergé le plus bas de la planète.</p>
  <p>Sa salinité, près de dix fois celle des océans, rend toute vie aquatique impossible (d'où son nom) mais permet de <strong>flotter</strong> sans effort. Elle se rétrécit hélas rapidement.</p>
  <ul class="fact-list"><li>Altitude : environ − 430 m</li><li>Salinité : environ 34 % (≈ 10 × les océans)</li><li>Niveau en baisse d'environ 1 m par an</li></ul>`},

 // ---------- OCEANS ----------
 {nom:"L'océan Pacifique",lon:-150.0,lat:0.0,dates:"≈ 165 M km²",role:"Le plus vaste océan",cat:"ocean",catLabel:"🌐 Océan",color:"#1e3a6b",emoji:"🌐",img:"",
  resume:"Le plus grand et le plus profond des océans couvre à lui seul un tiers de la surface du globe.",
  detail:`<p>L'<strong>océan Pacifique</strong> est de loin le plus vaste : il couvre environ un tiers de la surface terrestre, soit plus que tous les continents réunis. Il s'étend de l'Asie aux Amériques.</p>
  <p>Il abrite la <strong>fosse des Mariannes</strong>, point le plus profond connu (près de 11 000 m), et la « ceinture de feu », zone de volcans et de séismes qui borde ses rives.</p>
  <ul class="fact-list"><li>Superficie : environ 165 millions de km²</li><li>Profondeur maximale : environ 10 994 m (fosse des Mariannes)</li><li>Baptisé « pacifique » par Magellan</li></ul>`},

 {nom:"L'océan Atlantique",lon:-30.0,lat:20.0,dates:"≈ 106 M km²",role:"L'océan des grandes traversées",cat:"ocean",catLabel:"🌐 Océan",color:"#1e3a6b",emoji:"🌐",img:"",
  resume:"Deuxième océan du monde, il sépare l'Ancien et le Nouveau Monde et s'élargit chaque année.",
  detail:`<p>L'<strong>océan Atlantique</strong> sépare l'Europe et l'Afrique des Amériques. C'est l'océan des grandes <strong>explorations</strong> et des liaisons entre l'Ancien et le Nouveau Monde.</p>
  <p>En son milieu, la <strong>dorsale médio-atlantique</strong> est une chaîne de volcans sous-marins où naît une croûte océanique nouvelle : l'océan s'élargit de quelques centimètres par an.</p>
  <ul class="fact-list"><li>Superficie : environ 106 millions de km²</li><li>Le Gulf Stream y réchauffe l'Europe</li><li>S'élargit d'environ 2-3 cm par an</li></ul>`},

 {nom:"L'océan Indien",lon:75.0,lat:-20.0,dates:"≈ 70 M km²",role:"L'océan des moussons",cat:"ocean",catLabel:"🌐 Océan",color:"#1e3a6b",emoji:"🌐",img:"",
  resume:"Troisième océan du monde, rythmé par les moussons, carrefour commercial depuis l'Antiquité.",
  detail:`<p>L'<strong>océan Indien</strong> baigne l'Afrique de l'Est, le Moyen-Orient, l'Asie du Sud et l'Australie. Ses vents saisonniers, les <strong>moussons</strong>, ont guidé depuis l'Antiquité les marchands arabes, indiens et chinois.</p>
  <p>C'est aujourd'hui un espace commercial majeur, traversé par les routes du pétrole et des conteneurs entre l'Asie, l'Europe et l'Afrique.</p>
  <ul class="fact-list"><li>Superficie : environ 70 millions de km²</li><li>Le plus chaud des océans</li><li>Routes des moussons connues depuis l'Antiquité</li></ul>`},

 {nom:"L'océan Arctique",lon:0,lat:84,dates:"≈ 14 M km²",role:"L'océan glacé du Nord",cat:"ocean",catLabel:"❄️ Océan",color:"#1e3a6b",emoji:"❄️",img:"",
  resume:"Le plus petit et le plus froid des océans, recouvert de banquise, au cœur des enjeux climatiques.",
  detail:`<p>L'<strong>océan Arctique</strong>, autour du pôle Nord, est le plus petit et le moins profond des océans. Il est en grande partie recouvert par la <strong>banquise</strong>, une couche de glace de mer qui s'étend l'hiver et fond l'été.</p>
  <p>Le réchauffement y est deux à trois fois plus rapide qu'ailleurs : la fonte de la banquise ouvre de nouvelles routes maritimes et attise les convoitises pour ses ressources.</p>
  <ul class="fact-list"><li>Superficie : environ 14 millions de km²</li><li>Recouvert de banquise (en recul rapide)</li><li>Riverains : Russie, Canada, Groenland, USA, Norvège</li></ul>`},

 {nom:"L'océan Austral",lon:0,lat:-62,dates:"≈ 20 M km²",role:"L'océan autour de l'Antarctique",cat:"ocean",catLabel:"❄️ Océan",color:"#1e3a6b",emoji:"🧊",img:"",
  resume:"Ceinture d'eau qui entoure l'Antarctique, il abrite le plus puissant courant marin de la planète.",
  detail:`<p>L'<strong>océan Austral</strong> (ou océan Antarctique), reconnu officiellement comme le cinquième océan, encercle le continent <strong>Antarctique</strong>. Il est balayé par le <strong>courant circumpolaire antarctique</strong>, le plus puissant courant océanique du monde.</p>
  <p>Ses eaux froides et riches en nutriments nourrissent une vie marine abondante (krill, baleines, manchots) et jouent un rôle clé dans le climat mondial.</p>
  <ul class="fact-list"><li>Superficie : environ 20 millions de km²</li><li>Courant circumpolaire : le plus fort du globe</li><li>Climat le plus rude des océans</li></ul>`},

 // ---------- DETROITS ----------
 {nom:"Le détroit de Gibraltar",lon:-5.6,lat:36.0,dates:"≈ 14 km de large",role:"Entre l'Atlantique et la Méditerranée",cat:"detroit",catLabel:"⚓ Détroit",color:"#3b82f6",emoji:"⚓",img:"",
  resume:"Unique porte entre l'Atlantique et la Méditerranée, il sépare l'Europe de l'Afrique de 14 km seulement.",
  detail:`<p>Le <strong>détroit de Gibraltar</strong> relie l'<strong>océan Atlantique</strong> à la <strong>Méditerranée</strong> et sépare l'Espagne (Europe) du Maroc (Afrique). En son point le plus étroit, à peine <strong>14 km</strong> séparent les deux continents.</p>
  <p>Les Anciens l'appelaient les « colonnes d'Hercule » et y voyaient la limite du monde connu. C'est aujourd'hui l'un des passages maritimes les plus fréquentés du globe.</p>
  <ul class="fact-list"><li>Largeur minimale : environ 14 km</li><li>Sépare l'Europe de l'Afrique</li><li>Verrou stratégique de la Méditerranée</li></ul>`},

 {nom:"Le détroit de Béring",lon:-169.0,lat:65.7,dates:"≈ 82 km de large",role:"Entre l'Asie et l'Amérique",cat:"detroit",catLabel:"⚓ Détroit",color:"#3b82f6",emoji:"⚓",img:"",
  resume:"Il sépare la Russie de l'Alaska ; jadis un pont terrestre par lequel l'homme peupla l'Amérique.",
  detail:`<p>Le <strong>détroit de Béring</strong> sépare la <strong>Sibérie</strong> (Russie) de l'<strong>Alaska</strong> (États-Unis), donc l'Asie de l'Amérique, par environ 82 km d'eau froide.</p>
  <p>Pendant les glaciations, le niveau des mers plus bas y formait un <strong>pont terrestre</strong> (la Béringie). C'est par là que les premiers humains seraient passés d'Asie en Amérique, il y a plus de 15 000 ans.</p>
  <ul class="fact-list"><li>Largeur : environ 82 km</li><li>Sépare deux continents et deux pays</li><li>Voie du premier peuplement de l'Amérique</li></ul>`},

 {nom:"Le détroit d'Ormuz",lon:56.5,lat:26.6,dates:"≈ 39 km de large",role:"Le verrou du pétrole",cat:"detroit",catLabel:"⚓ Détroit",color:"#3b82f6",emoji:"🛢️",img:"",
  resume:"Par ce goulet du golfe Persique transite près d'un cinquième du pétrole mondial.",
  detail:`<p>Le <strong>détroit d'Ormuz</strong> relie le <strong>golfe Persique</strong> à l'océan Indien, entre l'Iran et la péninsule Arabique. C'est l'un des points les plus stratégiques de la planète.</p>
  <p>Près d'un <strong>cinquième du pétrole mondial</strong> y transite par tankers. La moindre tension dans la région y fait aussitôt grimper le prix du brut.</p>
  <ul class="fact-list"><li>Largeur minimale : environ 39 km</li><li>Passage vital du pétrole du Golfe</li><li>Point de friction géopolitique majeur</li></ul>`},

 {nom:"Le détroit de Malacca",lon:100.5,lat:2.5,dates:"≈ 2,8 km au plus étroit",role:"Le carrefour de l'Asie",cat:"detroit",catLabel:"⚓ Détroit",color:"#3b82f6",emoji:"🚢",img:"",
  resume:"Entre la Malaisie et Sumatra, c'est l'une des routes maritimes les plus fréquentées du monde.",
  detail:`<p>Le <strong>détroit de Malacca</strong> sépare la péninsule malaise de l'île indonésienne de <strong>Sumatra</strong>. Il relie l'océan Indien à la mer de Chine méridionale et au Pacifique.</p>
  <p>C'est le raccourci entre l'Europe, le Moyen-Orient et l'Asie de l'Est : un quart du commerce maritime mondial y passe, ce qui en fait un point de passage vital, mais aussi exposé à la piraterie.</p>
  <ul class="fact-list"><li>Longueur : environ 800 km</li><li>Relie l'océan Indien au Pacifique</li><li>Une des routes les plus fréquentées du monde</li></ul>`},

 {nom:"Le Bosphore",lon:29.0,lat:41.1,dates:"≈ 700 m au plus étroit",role:"Entre l'Europe et l'Asie",cat:"detroit",catLabel:"⚓ Détroit",color:"#3b82f6",emoji:"🌉",img:"",
  resume:"Au cœur d'Istanbul, ce détroit sépare l'Europe de l'Asie et relie la mer Noire à la Méditerranée.",
  detail:`<p>Le <strong>Bosphore</strong> traverse la ville d'<strong>Istanbul</strong> et sépare la partie européenne de la partie asiatique de la Turquie. Il relie la <strong>mer Noire</strong> à la mer de Marmara, puis à la Méditerranée.</p>
  <p>Verrou commercial et militaire depuis l'Antiquité, c'est le seul accès maritime de la Russie et de l'Ukraine vers les mers chaudes. Des ponts y relient aujourd'hui les deux continents.</p>
  <ul class="fact-list"><li>Largeur minimale : environ 700 m</li><li>Sépare l'Europe de l'Asie dans une même ville</li><li>Passage unique depuis la mer Noire</li></ul>`},

 // ---------- DESERTS ----------
 {nom:"Le Sahara",lon:12.0,lat:23.0,dates:"≈ 9,2 M km²",role:"Le plus grand désert chaud",cat:"desert",catLabel:"🏜️ Désert",color:"#5b6f95",emoji:"🏜️",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Sahara_satellite_hires.jpg?width=800",
  resume:"Vaste comme les États-Unis, le Sahara est le plus grand désert chaud de la planète.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Sahara_satellite_hires.jpg?width=800" alt="Le Sahara vu de l'espace" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Le Sahara, vue satellite</p></div>
  <p>Le <strong>Sahara</strong> couvre une grande partie de l'Afrique du Nord, soit une superficie comparable à celle des États-Unis ou de la Chine. C'est le plus grand <strong>désert chaud</strong> du monde.</p>
  <p>Dunes, plateaux rocheux et massifs montagneux s'y succèdent. Il y a quelques milliers d'années, il était vert et habité, comme en témoignent ses peintures rupestres.</p>
  <ul class="fact-list"><li>Superficie : environ 9,2 millions de km²</li><li>Températures dépassant 50 °C</li><li>Traversé jadis par les caravanes transsahariennes</li></ul>`},

 {nom:"Le désert de Gobi",lon:105.0,lat:42.0,dates:"≈ 1,3 M km²",role:"Asie centrale",cat:"desert",catLabel:"🏜️ Désert",color:"#5b6f95",emoji:"🏜️",img:"",
  resume:"Grand désert froid d'Asie, entre Mongolie et Chine, sur l'antique route de la soie.",
  detail:`<p>Le <strong>désert de Gobi</strong> s'étend sur le sud de la Mongolie et le nord de la Chine. Contrairement au Sahara, c'est un <strong>désert froid</strong> : les hivers y sont glaciaux et il peut y neiger.</p>
  <p>Traversé autrefois par la <strong>route de la soie</strong>, il est célèbre pour ses paysages austères et ses gisements de fossiles de dinosaures, parmi les plus riches du monde.</p>
  <ul class="fact-list"><li>Superficie : environ 1,3 million de km²</li><li>Désert froid (gel et neige possibles)</li><li>Riche en fossiles de dinosaures</li></ul>`},

 {nom:"Le désert d'Atacama",lon:-69.3,lat:-24.0,dates:"≈ 105 000 km²",role:"Le lieu le plus aride du monde",cat:"desert",catLabel:"🏜️ Désert",color:"#5b6f95",emoji:"🌵",img:"",
  resume:"Au Chili, certaines zones n'auraient jamais reçu de pluie : c'est le désert le plus sec du globe.",
  detail:`<p>Le <strong>désert d'Atacama</strong>, au nord du Chili, est le <strong>lieu le plus aride de la planète</strong> (hors pôles). Coincé entre la cordillère des Andes et l'océan, il reçoit des précipitations quasi nulles ; certaines stations n'ont jamais enregistré de pluie.</p>
  <p>Son ciel d'une pureté exceptionnelle en fait l'un des meilleurs sites d'<strong>observation astronomique</strong> au monde. Ses paysages servent même à simuler la planète Mars.</p>
  <ul class="fact-list"><li>Superficie : environ 105 000 km²</li><li>Endroit le plus sec du monde</li><li>Grands observatoires astronomiques</li></ul>`},

 {nom:"L'Antarctique",lon:0,lat:-78,dates:"≈ 14 M km²",role:"Le plus grand désert du monde",cat:"desert",catLabel:"❄️ Désert",color:"#5b6f95",emoji:"🐧",img:"",
  resume:"Continent glacé, c'est en réalité le plus vaste désert de la Terre, car il n'y pleut presque jamais.",
  detail:`<p>L'<strong>Antarctique</strong> est, contre toute attente, le <strong>plus grand désert du monde</strong> : un désert est défini par ses faibles précipitations, et il n'y neige presque pas. C'est aussi le continent le plus froid, le plus sec et le plus venteux.</p>
  <p>Recouvert d'une calotte glaciaire qui contient environ <strong>70 % de l'eau douce</strong> de la planète, il est protégé par un traité international qui le réserve à la science et à la paix.</p>
  <ul class="fact-list"><li>Superficie : environ 14 millions de km²</li><li>Record de froid : environ − 89 °C</li><li>Contient 70 % de l'eau douce mondiale</li></ul>`},
{nom:"Le Mississippi",lon:-89.3,lat:29.2,dates:"≈ 3 770 km",role:"Amérique du Nord — l'artère des États-Unis",cat:"fleuve",catLabel:"🏞️ Fleuve",color:"#2563eb",emoji:"🏞️",img:"",
  resume:"Avec le Missouri, il forme l'un des plus longs réseaux fluviaux du monde et draine le cœur des États-Unis.",
  detail:`<p>Le <strong>Mississippi</strong> traverse les États-Unis du nord au sud jusqu'au golfe du Mexique. Associé à son affluent le Missouri, il constitue l'un des plus longs systèmes fluviaux du monde (plus de 6 000 km).</p>
  <p>Axe vital de transport et d'agriculture, il a façonné l'histoire et l'imaginaire américains, du commerce du coton aux romans de Mark Twain.</p>
  <ul class="fact-list"><li>Bassin : 40 % du territoire des États-Unis contigus</li><li>Delta en Louisiane (La Nouvelle-Orléans)</li></ul>`},
 {nom:"Le Congo",lon:12.4,lat:-6.0,dates:"≈ 4 700 km",role:"Afrique — le fleuve le plus profond",cat:"fleuve",catLabel:"🏞️ Fleuve",color:"#2563eb",emoji:"🏞️",img:"",
  resume:"Deuxième fleuve d'Afrique et du monde par son débit, il traverse la deuxième plus grande forêt tropicale.",
  detail:`<p>Le <strong>Congo</strong> est le deuxième fleuve du monde par son débit, après l'Amazone, et le plus profond de la planète (jusqu'à 220 m). Il traverse le bassin du Congo, deuxième massif de forêt tropicale après l'Amazonie.</p>
  <p>Il franchit l'équateur deux fois, ce qui lui assure un débit régulier toute l'année, et constitue une voie de circulation essentielle en Afrique centrale.</p>`},
 {nom:"Les Andes",lon:-70.0,lat:-20.0,dates:"≈ 7 000 km",role:"Amérique du Sud — la plus longue chaîne",cat:"montagne",catLabel:"🏔️ Montagne",color:"#475f8a",emoji:"🏔️",img:"",
  resume:"La plus longue chaîne de montagnes émergée du monde, épine dorsale de l'Amérique du Sud.",
  detail:`<p>La <strong>cordillère des Andes</strong> longe toute la façade ouest de l'Amérique du Sud sur près de 7 000 km, du Venezuela à la Patagonie. C'est la plus longue chaîne de montagnes émergée de la planète.</p>
  <p>Elle culmine à l'<strong>Aconcagua</strong> (6 961 m), abrite de hauts plateaux peuplés (l'Altiplano), des volcans actifs et fut le berceau de la civilisation inca.</p>`},
 {nom:"La mer du Nord",lon:3.0,lat:56.0,dates:"≈ 575 000 km²",role:"Europe du Nord-Ouest",cat:"mer",catLabel:"🌊 Mer",color:"#0ea5e9",emoji:"🌊",img:"",
  resume:"Mer riche en pêche et en hydrocarbures, carrefour commercial du nord de l'Europe.",
  detail:`<p>La <strong>mer du Nord</strong> baigne les côtes du Royaume-Uni, de la Scandinavie et du Benelux. Peu profonde, elle est l'une des zones de pêche et de trafic maritime les plus actives du monde.</p>
  <p>La découverte de gisements de <strong>pétrole et de gaz</strong> dans les années 1960 en a fait une région énergétique majeure pour l'Europe.</p>`},
 {nom:"Le détroit de Magellan",lon:-70.5,lat:-53.5,dates:"≈ 600 km",role:"Pointe de l'Amérique du Sud",cat:"detroit",catLabel:"⚓ Détroit",color:"#3b82f6",emoji:"⚓",img:"",
  resume:"Passage entre Atlantique et Pacifique au sud du continent, emprunté par Magellan en 1520.",
  detail:`<p>Le <strong>détroit de Magellan</strong> sépare le continent sud-américain de la Terre de Feu et relie l'<strong>Atlantique</strong> au <strong>Pacifique</strong>. Sinueux et balayé par les tempêtes, il offrait néanmoins une route plus sûre que le cap Horn.</p>
  <p>Il porte le nom du navigateur <strong>Magellan</strong>, qui l'emprunta en 1520 lors du premier tour du monde. Le canal de Panama lui a depuis ôté l'essentiel de son importance commerciale.</p>`},
 {nom:"Le désert d'Arabie",lon:45.0,lat:22.0,dates:"≈ 2,3 M km²",role:"Péninsule arabique",cat:"desert",catLabel:"🏜️ Désert",color:"#5b6f95",emoji:"🏜️",img:"",
  resume:"Vaste désert de la péninsule arabique, abritant l'une des plus grandes étendues de sable du monde.",
  detail:`<p>Le <strong>désert d'Arabie</strong> couvre la majeure partie de la péninsule arabique. Il renferme le <strong>Rub al-Khali</strong> (« le quart vide »), l'une des plus vastes étendues de sable continu de la planète.</p>
  <p>Aride et brûlant, il recouvre d'immenses réserves de <strong>pétrole</strong> qui ont transformé la région au XXe siècle.</p>`}
];
