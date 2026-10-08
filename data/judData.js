// JUDAISME — branches, histoire, figures, calendrier. cat: courants, histoire, figures, calendrier
const judData=[
 // ===== BRANCHES =====
 {nom:"Le judaïsme orthodoxe",dates:"tradition",role:"La fidélité à la Loi",cat:"courants",catLabel:"✡️ Branche",color:"#24406b",emoji:"✡️",img:"",
  resume:"Il maintient l'application stricte de la Loi juive (la Halakha) telle que transmise par la tradition.",
  detail:`<p>Le <strong>judaïsme orthodoxe</strong> considère la Torah comme d'origine divine et applique de façon stricte la <strong>Halakha</strong>, la Loi juive (cacherout, respect du Shabbat, prières). Le courant <em>hassidique</em>, né au XVIIIe siècle, en est une forme mystique et fervente.</p>`},
 {nom:"Le judaïsme réformé (libéral)",dates:"depuis le XIXe siècle",role:"Un judaïsme adapté à la modernité",cat:"courants",catLabel:"✡️ Branche",color:"#24406b",emoji:"✡️",img:"",
  resume:"Né au XIXe siècle, il adapte les pratiques à la vie moderne et met l'accent sur l'éthique.",
  detail:`<p>Le <strong>judaïsme réformé</strong> ou <strong>libéral</strong>, né en Allemagne au XIXe siècle, cherche à concilier la tradition juive avec la vie moderne. Il assouplit certaines règles rituelles, prie en partie dans la langue du pays et met l'accent sur les valeurs éthiques.</p>`},
 {nom:"Le judaïsme massorti (conservateur)",dates:"depuis le XIXe siècle",role:"Une voie intermédiaire",cat:"courants",catLabel:"✡️ Branche",color:"#24406b",emoji:"✡️",img:"",
  resume:"Voie médiane entre orthodoxie et réforme, attachée à la tradition mais ouverte à une évolution mesurée.",
  detail:`<p>Le judaïsme <strong>massorti</strong> (« conservateur ») se situe entre l'orthodoxie et le libéralisme. Il maintient l'attachement à la Loi et à la tradition tout en admettant une évolution mesurée et une lecture historique des textes. Il est très présent en Amérique du Nord.</p>`},

 // ===== HISTOIRE =====
 {nom:"Abraham et l'Alliance",dates:"v. 1800 av. J.-C.",role:"Le père des croyants",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"✡️",img:"",
  resume:"Abraham conclut une alliance avec un Dieu unique : c'est l'acte fondateur du monothéisme.",
  detail:`<p>Selon la Bible, <strong>Abraham</strong> quitte la Mésopotamie pour la terre de Canaan, répondant à l'appel d'un <strong>Dieu unique</strong> avec lequel il conclut une <strong>Alliance</strong>. Il est considéré comme le premier patriarche et le père des croyants.</p>
  <p>Cet épisode fonde le <strong>monothéisme</strong> dont hériteront aussi le christianisme et l'islam : ces trois religions sont dites « abrahamiques ».</p>`},
 {nom:"Moïse et l'Exode",dates:"v. 1250 av. J.-C.",role:"La sortie d'Égypte et la Torah",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📜",img:"",
  resume:"Moïse libère les Hébreux de l'esclavage en Égypte et reçoit la Loi (les Dix Commandements) au mont Sinaï.",
  detail:`<p><strong>Moïse</strong> est la figure centrale du judaïsme. Selon la Bible, il libère les <strong>Hébreux</strong> de l'esclavage en Égypte (l'<strong>Exode</strong>) et les conduit à travers le désert.</p>
  <p>Au <strong>mont Sinaï</strong>, il reçoit de Dieu la <strong>Torah</strong> et les <strong>Dix Commandements</strong>, fondement de la Loi juive. Cet événement scelle l'Alliance entre Dieu et le peuple d'Israël.</p>`},
 {nom:"David, Salomon et le Temple",dates:"v. 1000 av. J.-C.",role:"L'âge d'or du royaume d'Israël",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"👑",img:"",
  resume:"Le roi David fait de Jérusalem sa capitale ; son fils Salomon y bâtit le premier Temple.",
  detail:`<p>Le roi <strong>David</strong> unifie les tribus d'Israël et fait de <strong>Jérusalem</strong> sa capitale vers 1000 av. J.-C. Son fils <strong>Salomon</strong>, réputé pour sa sagesse, y construit le <strong>premier Temple</strong>, cœur du culte juif.</p>
  <p>C'est l'âge d'or du royaume, qui se divisera ensuite en deux (Israël et Juda).</p>`},
 {nom:"L'exil à Babylone",dates:"586 av. J.-C.",role:"La destruction du premier Temple",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"⛓️",img:"",
  resume:"Les Babyloniens détruisent le premier Temple et déportent les Juifs : l'épreuve fondatrice de l'exil.",
  detail:`<p>En <strong>586 av. J.-C.</strong>, le roi babylonien Nabuchodonosor prend Jérusalem, <strong>détruit le premier Temple</strong> et déporte une partie du peuple à Babylone.</p>
  <p>Cet <strong>exil</strong> est une épreuve fondatrice : loin du Temple, les Juifs développent la prière, l'étude des textes et la synagogue. Ils reviendront cinquante ans plus tard reconstruire un second Temple.</p>`},
 {nom:"La destruction du second Temple",dates:"70 ap. J.-C.",role:"Le début de la grande Diaspora",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"🧱",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Western_Wall_Dome_of_the_rock_Jerusalem.jpg/800px-Western_Wall_Dome_of_the_rock_Jerusalem.jpg",
  resume:"Les Romains détruisent le second Temple en 70. Il n'en reste que le mur des Lamentations.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Western_Wall_Dome_of_the_rock_Jerusalem.jpg/800px-Western_Wall_Dome_of_the_rock_Jerusalem.jpg" alt="Le mur des Lamentations à Jérusalem" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Le mur des Lamentations, vestige du second Temple</p></div>
  <p>En <strong>70 ap. J.-C.</strong>, les Romains écrasent une révolte juive et <strong>détruisent le second Temple</strong> de Jérusalem. Il n'en subsiste qu'un mur de soutènement, le <strong>mur des Lamentations</strong>, le lieu le plus sacré du judaïsme.</p>
  <p>Privés de Temple et bientôt chassés de Judée, les Juifs se dispersent : c'est le début de la grande <strong>Diaspora</strong>.</p>`},
 {nom:"La Diaspora et le Talmud",dates:"à partir du IIe siècle",role:"Un peuple sans terre, uni par le Livre",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📚",img:"",
  resume:"Dispersés dans le monde, les Juifs maintiennent leur identité par l'étude, autour du Talmud.",
  detail:`<p>Dispersés à travers l'Empire romain puis le monde entier, les Juifs de la <strong>Diaspora</strong> maintiennent leur unité non par un territoire, mais par la <strong>Loi</strong> et l'étude.</p>
  <p>Les rabbins compilent le <strong>Talmud</strong>, immense recueil de commentaires et de discussions sur la Loi, qui devient le pilier de la vie juive. Le peuple juif survit ainsi vingt siècles sans État.</p>`},
 {nom:"L'expulsion d'Espagne",dates:"1492",role:"La fin de l'âge d'or séfarade",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"⚓",img:"",
  resume:"Les rois catholiques expulsent les Juifs d'Espagne, dispersant la brillante communauté séfarade.",
  detail:`<p>En <strong>1492</strong>, la même année que la chute de Grenade et le voyage de Colomb, les Rois Catholiques <strong>expulsent les Juifs d'Espagne</strong>. Ceux qui refusent de se convertir doivent partir.</p>
  <p>Cette communauté brillante, dite <strong>séfarade</strong>, se disperse autour de la Méditerranée (Empire ottoman, Afrique du Nord), emportant sa langue (le judéo-espagnol) et sa culture.</p>`},
 {nom:"La Shoah",dates:"1941 – 1945",role:"Le génocide des Juifs d'Europe",cat:"histoire",catLabel:"🕯️ Histoire",color:"#475f8a",emoji:"🕯️",img:"",
  resume:"Le régime nazi extermine près de six millions de Juifs d'Europe, la plus grande tragédie de l'histoire juive.",
  detail:`<p>La <strong>Shoah</strong> désigne l'extermination systématique, par l'Allemagne nazie, de près de <strong>six millions de Juifs</strong> d'Europe pendant la Seconde Guerre mondiale.</p>
  <p>Persécutions, ghettos, déportations et camps d'extermination visent à anéantir tout un peuple. C'est la plus grande tragédie de l'histoire juive et l'un des plus grands crimes de l'humanité, dont la mémoire est aujourd'hui universellement transmise.</p>`},
 {nom:"La création d'Israël",dates:"1948",role:"Un État juif après deux mille ans",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"🇮🇱",img:"",
  resume:"Après la Shoah, l'État d'Israël est proclamé, réalisant le projet sioniste d'un foyer national juif.",
  detail:`<p>En <strong>1948</strong>, au lendemain de la Shoah, l'<strong>État d'Israël</strong> est proclamé sur une partie de la Palestine, sous l'égide de l'ONU. C'est l'aboutissement du <strong>sionisme</strong>, mouvement né au XIXe siècle qui voulait un foyer national pour le peuple juif.</p>
  <p>Pour les Juifs, c'est le retour sur la terre de leurs ancêtres après près de deux mille ans de Diaspora. Cet événement est aussi à l'origine d'un conflit durable avec les populations arabes de la région.</p>`},

 // ===== FIGURES =====
 {nom:"Abraham",dates:"v. 1800 av. J.-C.",role:"Le premier patriarche",cat:"figures",catLabel:"✡️ Figure",color:"#2563eb",emoji:"✡️",img:"",
  resume:"Père des trois monothéismes, il scelle l'Alliance avec Dieu.",
  detail:`<p><strong>Abraham</strong> est le premier des patriarches et le père du peuple juif. Sa foi et son Alliance avec le Dieu unique font de lui la figure fondatrice du <strong>monothéisme</strong>, vénérée aussi par les chrétiens et les musulmans.</p>`},
 {nom:"Moïse",dates:"v. XIIIe siècle av. J.-C.",role:"Le libérateur et le législateur",cat:"figures",catLabel:"📜 Figure",color:"#2563eb",emoji:"📜",img:"",
  resume:"Le plus grand prophète du judaïsme, qui reçut la Torah au Sinaï.",
  detail:`<p><strong>Moïse</strong> est le plus grand prophète du judaïsme. Libérateur des Hébreux hors d'Égypte et médiateur de l'Alliance, il reçoit la <strong>Torah</strong> au mont Sinaï. La tradition lui attribue la rédaction des cinq premiers livres de la Bible (le Pentateuque).</p>`},
 {nom:"Le roi David",dates:"v. 1000 av. J.-C.",role:"Roi d'Israël, auteur des Psaumes",cat:"figures",catLabel:"👑 Figure",color:"#2563eb",emoji:"👑",img:"",
  resume:"Berger devenu roi, vainqueur de Goliath, il fait de Jérusalem la ville sainte.",
  detail:`<p><strong>David</strong>, jeune berger qui terrasse le géant <strong>Goliath</strong>, devient le plus grand roi d'Israël. Il unifie le royaume et fait de <strong>Jérusalem</strong> sa capitale et la ville sainte. La tradition lui attribue les <strong>Psaumes</strong>. Le Messie attendu doit être un « fils de David ».</p>`},
 {nom:"Salomon",dates:"v. 970 – 931 av. J.-C.",role:"Le roi sage, bâtisseur du Temple",cat:"figures",catLabel:"👑 Figure",color:"#2563eb",emoji:"🏛️",img:"",
  resume:"Fils de David, réputé pour sa sagesse, il construit le premier Temple de Jérusalem.",
  detail:`<p><strong>Salomon</strong>, fils de David, est célèbre pour sa <strong>sagesse</strong> (le « jugement de Salomon »). Il fait construire le <strong>premier Temple</strong> de Jérusalem, apogée du royaume d'Israël. La tradition lui attribue plusieurs livres bibliques, dont le Cantique des cantiques.</p>`},
 {nom:"Maïmonide",dates:"1138 – 1204",role:"Le plus grand penseur juif médiéval",cat:"figures",catLabel:"📚 Figure",color:"#2563eb",emoji:"📚",img:"",
  resume:"Philosophe et médecin séfarade, il codifie la Loi juive et concilie foi et raison.",
  detail:`<p><strong>Maïmonide</strong> (Moïse ben Maïmon, dit Rambam), médecin et philosophe né à Cordoue, est le plus grand penseur juif du Moyen Âge. Son <em>Guide des égarés</em> concilie la foi juive et la philosophie d'Aristote.</p>
  <p>Il codifie l'ensemble de la Loi juive et formule les « treize principes de foi ». On disait : « De Moïse à Moïse, il n'y eut personne comme Moïse. »</p>`},
 {nom:"Rachi",dates:"1040 – 1105",role:"Le grand commentateur",cat:"figures",catLabel:"📚 Figure",color:"#2563eb",emoji:"📖",img:"",
  resume:"Rabbin de Troyes, ses commentaires de la Bible et du Talmud sont étudiés partout depuis mille ans.",
  detail:`<p><strong>Rachi</strong> (Rabbi Salomon ben Isaac), rabbin français de <strong>Troyes</strong>, est le plus célèbre commentateur de la Bible et du Talmud. Clairs et concis, ses commentaires accompagnent depuis près de mille ans l'étude de tous les Juifs du monde, et restent une référence incontournable.</p>`},
 {nom:"Theodor Herzl",dates:"1860 – 1904",role:"Le père du sionisme",cat:"figures",catLabel:"✡️ Figure",color:"#2563eb",emoji:"✡️",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Theodor_Herzl.jpg?width=800",
  resume:"Journaliste austro-hongrois, il lance le projet d'un État juif qui aboutira à la création d'Israël.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Theodor_Herzl.jpg?width=800" alt="Theodor Herzl" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Theodor Herzl, père du sionisme politique</p></div>
  <p><strong>Theodor Herzl</strong>, journaliste juif austro-hongrois, est bouleversé par l'antisémitisme (notamment l'affaire Dreyfus). Il publie <em>L'État des Juifs</em> (1896) et fonde le <strong>sionisme</strong> politique, mouvement pour un foyer national juif.</p>
  <p>Il organise le premier Congrès sioniste en 1897. Il meurt bien avant, mais son projet aboutira à la création de l'<strong>État d'Israël</strong> en 1948.</p>`},

 // ===== CALENDRIER =====
 {nom:"Le Shabbat",dates:"chaque semaine",role:"Le jour du repos",cat:"calendrier",catLabel:"🕯️ Fête",color:"#0ea5e9",emoji:"🕯️",img:"",
  resume:"Du vendredi soir au samedi soir, jour sacré de repos et de prière, cœur de la vie juive.",
  detail:`<p>Le <strong>Shabbat</strong>, du vendredi au coucher du soleil au samedi soir, est le jour sacré de <strong>repos</strong>, en mémoire du septième jour où Dieu se reposa après la Création. Tout travail y est interdit.</p>
  <p>C'est un temps de prière, d'étude et de retrouvailles familiales, marqué par l'allumage des bougies et le repas partagé. C'est le rythme fondamental de la vie juive.</p>`},
 {nom:"Roch Hachana",dates:"septembre/octobre",role:"Le Nouvel An juif",cat:"calendrier",catLabel:"🍎 Fête",color:"#0ea5e9",emoji:"🍎",img:"",
  resume:"Le Nouvel An juif, temps de bilan et de renouveau, annoncé par le son du chofar.",
  detail:`<p><strong>Roch Hachana</strong> est le <strong>Nouvel An juif</strong>. C'est un temps de bilan, de prière et de résolutions, où l'on demande à être inscrit dans le « livre de la vie ». Il est annoncé par le son du <strong>chofar</strong> (corne de bélier).</p>
  <p>On y mange des pommes trempées dans le miel, en signe d'une année douce.</p>`},
 {nom:"Yom Kippour",dates:"10 jours après Roch Hachana",role:"Le Grand Pardon",cat:"calendrier",catLabel:"🕯️ Fête",color:"#0ea5e9",emoji:"🙏",img:"",
  resume:"Le jour le plus sacré du judaïsme : jeûne, prière et demande de pardon.",
  detail:`<p><strong>Yom Kippour</strong>, le « jour du Grand Pardon », est le jour le plus solennel du calendrier juif. Pendant environ 25 heures, les fidèles <strong>jeûnent</strong> totalement et passent la journée en prière à la synagogue.</p>
  <p>C'est un temps de repentir où l'on demande pardon à Dieu et à ses proches pour les fautes de l'année écoulée.</p>`},
 {nom:"Souccot",dates:"automne",role:"La fête des cabanes",cat:"calendrier",catLabel:"🌿 Fête",color:"#0ea5e9",emoji:"🌿",img:"",
  resume:"Fête des cabanes, rappelant l'errance du peuple hébreu dans le désert après l'Exode.",
  detail:`<p><strong>Souccot</strong>, la « fête des cabanes », rappelle les quarante années d'errance des Hébreux dans le désert. Pendant une semaine, les familles prennent leurs repas (et parfois dorment) dans une <strong>cabane</strong> (<em>soucca</em>) au toit de branchages, symbole de fragilité et de confiance en Dieu.</p>`},
 {nom:"Hanoucca",dates:"décembre",role:"La fête des Lumières",cat:"calendrier",catLabel:"🕎 Fête",color:"#0ea5e9",emoji:"🕎",img:"",
  resume:"La fête des Lumières, célébrant un miracle et la reconquête du Temple ; on allume la ménorah huit soirs.",
  detail:`<p><strong>Hanoucca</strong>, la « fête des Lumières », commémore la reconquête et la purification du Temple par les Maccabées au IIe siècle av. J.-C. Selon la tradition, une fiole d'huile qui ne devait durer qu'un jour brûla <strong>huit jours</strong>.</p>
  <p>Pendant huit soirs, on allume une bougie supplémentaire du chandelier à huit branches, la <strong>Hanoukkia</strong>.</p>`},
 {nom:"Pourim",dates:"fin de l'hiver",role:"La fête joyeuse d'Esther",cat:"calendrier",catLabel:"🎭 Fête",color:"#0ea5e9",emoji:"🎭",img:"",
  resume:"Fête joyeuse et costumée célébrant le sauvetage des Juifs de Perse grâce à la reine Esther.",
  detail:`<p><strong>Pourim</strong> célèbre le sauvetage des Juifs de Perse, menacés d'extermination par le ministre Haman, grâce au courage de la reine <strong>Esther</strong>. C'est la fête la plus joyeuse du calendrier : on se déguise, on fait du bruit à la lecture du récit, on partage des douceurs.</p>`},
 {nom:"Pessah",dates:"printemps",role:"La Pâque juive",cat:"calendrier",catLabel:"🍷 Fête",color:"#0ea5e9",emoji:"🍷",img:"",
  resume:"La Pâque juive commémore la sortie d'Égypte ; on mange du pain sans levain (matza).",
  detail:`<p><strong>Pessah</strong>, la Pâque juive, commémore la <strong>sortie d'Égypte</strong> et la libération de l'esclavage. Pendant huit jours, on ne mange aucun aliment levé, mais du pain sans levain (la <strong>matza</strong>), en souvenir du départ précipité des Hébreux.</p>
  <p>La fête commence par le <strong>Séder</strong>, repas rituel où l'on raconte l'Exode. C'est de cette fête qu'est issue la Pâque chrétienne.</p>`},
 {nom:"Chavouot",dates:"50 jours après Pessah",role:"Le don de la Torah",cat:"calendrier",catLabel:"📜 Fête",color:"#0ea5e9",emoji:"📜",img:"",
  resume:"Elle célèbre le don de la Torah à Moïse au mont Sinaï, cinquante jours après Pessah.",
  detail:`<p><strong>Chavouot</strong>, cinquante jours après Pessah, célèbre le <strong>don de la Torah</strong> à Moïse au mont Sinaï. C'est l'une des trois grandes fêtes de pèlerinage. On y étudie traditionnellement la Torah toute la nuit et on consomme des produits laitiers. La Pentecôte chrétienne en dérive.</p>`}
];
