// CHRISTIANISME — branches, histoire & schismes, papes, saints, calendrier
// cat: courants, histoire, papes, saints, calendrier
const christData=[
 // ================= BRANCHES =================
 {nom:"Le catholicisme",dates:"depuis le Ier siècle",role:"La plus grande Église chrétienne",cat:"courants",catLabel:"⛪ Branche",color:"#24406b",emoji:"⛪",img:"",
  resume:"Avec ~1,4 milliard de fidèles, l'Église catholique romaine reconnaît l'autorité du pape, successeur de saint Pierre.",
  detail:`<p>L'<strong>Église catholique romaine</strong> est la plus grande des confessions chrétiennes (environ 1,4 milliard de baptisés). Elle se considère comme l'Église fondée par le Christ sur l'apôtre <strong>Pierre</strong>, dont le <strong>pape</strong>, évêque de Rome, est le successeur.</p>
  <p>Elle se distingue par la primauté et l'infaillibilité (en matière de foi) du pape, le culte de la Vierge Marie et des saints, les sept sacrements et une riche tradition liturgique. Son centre est le <strong>Vatican</strong>, à Rome.</p>
  <ul class="fact-list"><li>Chef : le pape (aujourd'hui Léon XIV)</li><li>Sacrements : baptême, eucharistie, confirmation, réconciliation, mariage, ordre, onction des malades</li><li>Texte de référence : la Bible et la Tradition</li></ul>`},
 {nom:"L'orthodoxie",dates:"séparée en 1054",role:"Les Églises chrétiennes d'Orient",cat:"courants",catLabel:"☦️ Branche",color:"#24406b",emoji:"☦️",img:"",
  resume:"Issues du monde byzantin, les Églises orthodoxes se séparent de Rome en 1054. Elles n'ont pas de pape unique.",
  detail:`<p>Les <strong>Églises orthodoxes</strong> (environ 220 millions de fidèles) rassemblent les chrétiens d'Orient héritiers de l'Empire byzantin : grecs, russes, serbes, roumains... Elles se sont séparées de Rome lors du <strong>Grand Schisme de 1054</strong>.</p>
  <p>Contrairement aux catholiques, elles ne reconnaissent pas l'autorité universelle du pape : chaque Église nationale est autonome, présidée par un patriarche, celui de Constantinople étant « premier parmi ses égaux ». Elles sont réputées pour leurs icônes, leur liturgie somptueuse et leur fidélité aux traditions des premiers conciles.</p>`},
 {nom:"Le protestantisme (luthéranisme)",dates:"depuis 1517",role:"Né de la Réforme de Luther",cat:"courants",catLabel:"✝️ Branche",color:"#24406b",emoji:"✝️",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Cranach-luther-1528.jpg/800px-Cranach-luther-1528.jpg",
  resume:"Issu de la Réforme de Martin Luther, il affirme le salut par la foi seule et l'autorité de la seule Écriture.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Cranach-luther-1528.jpg/800px-Cranach-luther-1528.jpg" alt="Martin Luther" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Martin Luther, par Lucas Cranach</p></div>
  <p>Le <strong>protestantisme</strong> naît en 1517 de la <strong>Réforme</strong> de <strong>Martin Luther</strong>. Il rejette l'autorité du pape et plusieurs traditions catholiques au profit de trois grands principes : le salut par la <strong>foi seule</strong>, la grâce seule, et l'<strong>Écriture seule</strong> comme autorité.</p>
  <p>Les protestants ne reconnaissent que deux sacrements (baptême et cène), refusent le culte des saints et le célibat des prêtres, et lisent la Bible dans les langues nationales. Le luthéranisme domine en Allemagne et en Scandinavie.</p>`},
 {nom:"Le calvinisme (Églises réformées)",dates:"depuis 1536",role:"La Réforme selon Jean Calvin",cat:"courants",catLabel:"✝️ Branche",color:"#24406b",emoji:"✝️",img:"",
  resume:"Branche de la Réforme fondée par Jean Calvin à Genève, marquée par la doctrine de la prédestination.",
  detail:`<p>Le <strong>calvinisme</strong>, développé par <strong>Jean Calvin</strong> à Genève à partir de 1536, est l'autre grande branche de la Réforme. Il insiste sur la souveraineté absolue de Dieu et la <strong>prédestination</strong> (Dieu a d'avance choisi les élus).</p>
  <p>Austère et rigoureux, il donne naissance aux Églises <strong>réformées</strong> et <strong>presbytériennes</strong> (Suisse, Pays-Bas, Écosse, huguenots français, puritains). Il a profondément marqué la culture, l'éthique du travail et la démocratie dans le monde anglo-saxon.</p>`},
 {nom:"L'anglicanisme",dates:"depuis 1534",role:"L'Église d'Angleterre",cat:"courants",catLabel:"⛪ Branche",color:"#24406b",emoji:"⛪",img:"",
  resume:"Née de la rupture d'Henri VIII avec Rome, l'Église anglicane mêle héritage catholique et réforme protestante.",
  detail:`<p>L'<strong>anglicanisme</strong> naît en 1534 quand le roi <strong>Henri VIII</strong>, à qui le pape refuse l'annulation de son mariage, rompt avec Rome et se proclame chef de l'<strong>Église d'Angleterre</strong>.</p>
  <p>Cette Église occupe une position intermédiaire (<em>via media</em>) : elle conserve des évêques, une liturgie proche du catholicisme, mais adopte des principes protestants. Le souverain britannique en est le gouverneur suprême ; la Communion anglicane compte environ 85 millions de fidèles dans le monde.</p>`},
 {nom:"Les Églises orientales",dates:"depuis l'Antiquité",role:"Coptes, arméniens, syriaques...",cat:"courants",catLabel:"✝️ Branche",color:"#24406b",emoji:"✝️",img:"",
  resume:"Parmi les plus anciennes du monde, ces Églises se séparent dès les Ve siècle, avant même le schisme de 1054.",
  detail:`<p>Les <strong>Églises des trois conciles</strong> (ou « préchalcédoniennes ») sont parmi les plus anciennes de la chrétienté. Elles se sont séparées dès le <strong>concile de Chalcédoine (451)</strong>, à propos de la nature du Christ, bien avant le schisme de 1054.</p>
  <p>On y trouve l'<strong>Église copte</strong> d'Égypte, l'<strong>Église apostolique arménienne</strong> (l'Arménie fut le premier État chrétien, en 301), les Églises syriaque et éthiopienne. Souvent minoritaires et parfois persécutées, elles ont préservé des traditions et des langues liturgiques très anciennes.</p>`},

 // ================= HISTOIRE & SCHISMES =================
 {nom:"La naissance du christianisme",dates:"Ier siècle",role:"Jésus de Nazareth",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"✝️",img:"",
  resume:"Le christianisme naît de la prédication de Jésus de Nazareth, crucifié vers 30, que ses disciples proclament ressuscité.",
  detail:`<p>Le christianisme naît en <strong>Judée</strong>, province de l'Empire romain, de la vie et de la prédication de <strong>Jésus de Nazareth</strong> (vers 4 av. J.-C. – vers 30 ap. J.-C.). Prêchant l'amour de Dieu et du prochain, le pardon et le Royaume des Cieux, il est suivi d'un groupe de disciples, les <strong>apôtres</strong>.</p>
  <p>Condamné et <strong>crucifié</strong> à Jérusalem sous Ponce Pilate, il est, selon ses disciples, <strong>ressuscité</strong> le troisième jour. Cette foi en la résurrection est le cœur du christianisme. Une nouvelle religion se détache alors peu à peu du judaïsme.</p>`},
 {nom:"La Pentecôte et les apôtres",dates:"v. 30",role:"La naissance de l'Église",cat:"histoire",catLabel:"🕊️ Histoire",color:"#475f8a",emoji:"🕊️",img:"",
  resume:"Cinquante jours après Pâques, l'Esprit Saint descend sur les apôtres, qui partent annoncer l'Évangile : c'est la naissance de l'Église.",
  detail:`<p>Selon les Actes des Apôtres, cinquante jours après la résurrection, l'<strong>Esprit Saint</strong> descend sur les apôtres réunis à Jérusalem sous forme de langues de feu : c'est la <strong>Pentecôte</strong>, considérée comme la naissance de l'Église.</p>
  <p>Les apôtres, notamment <strong>Pierre</strong> et bientôt <strong>Paul</strong>, partent alors prêcher l'Évangile dans tout le bassin méditerranéen. En quelques décennies, des communautés chrétiennes se forment à Antioche, Corinthe, Éphèse, Rome... malgré les persécutions.</p>`},
 {nom:"Les persécutions romaines",dates:"Ier – IIIe siècle",role:"L'âge des martyrs",cat:"histoire",catLabel:"⚔️ Histoire",color:"#475f8a",emoji:"⚔️",img:"",
  resume:"Refusant le culte impérial, les chrétiens sont persécutés par Rome pendant près de trois siècles, faisant de nombreux martyrs.",
  detail:`<p>Pendant près de trois siècles, les chrétiens sont périodiquement <strong>persécutés</strong> dans l'Empire romain. Refusant d'adorer l'empereur et les dieux, ils sont accusés d'athéisme et de troubler l'ordre public.</p>
  <p>Les persécutions les plus violentes ont lieu sous Néron (qui les accuse de l'incendie de Rome en 64), Dèce et Dioclétien. Beaucoup meurent en <strong>martyrs</strong> dans les arènes. Mais loin d'éteindre la foi, le sang des martyrs nourrit l'expansion du christianisme.</p>`},
 {nom:"L'édit de Milan",dates:"313",role:"La liberté de culte",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📜",img:"",
  resume:"L'empereur Constantin accorde la liberté de culte aux chrétiens, mettant fin aux persécutions.",
  detail:`<p>En <strong>313</strong>, l'empereur <strong>Constantin</strong>, après sa conversion, promulgue avec Licinius l'<strong>édit de Milan</strong> qui accorde la <strong>liberté de culte</strong> à tous, et notamment aux chrétiens.</p>
  <p>C'est un tournant décisif : les persécutions cessent, les biens confisqués sont rendus, l'Église peut s'organiser au grand jour. Le christianisme, de religion persécutée, devient une religion favorisée par le pouvoir impérial.</p>`},
 {nom:"Le concile de Nicée",dates:"325",role:"Le premier concile œcuménique",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📜",img:"",
  resume:"Le premier grand concile fixe le dogme de la Trinité et rédige le Credo, face à l'hérésie arienne.",
  detail:`<p>Convoqué par Constantin en <strong>325</strong>, le <strong>concile de Nicée</strong> est le premier concile œcuménique (rassemblant les évêques du monde entier). Il tranche une controverse majeure : le Christ est-il de même nature que Dieu le Père ?</p>
  <p>Contre l'<strong>arianisme</strong> (qui faisait du Christ une créature), le concile affirme qu'il est « de même substance » que le Père. Il rédige le <strong>Credo</strong> (« Je crois en un seul Dieu... »), profession de foi encore récitée aujourd'hui, et pose les bases du dogme de la <strong>Trinité</strong>.</p>`},
 {nom:"Le christianisme, religion d'État",dates:"380",role:"L'édit de Thessalonique",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"👑",img:"",
  resume:"L'empereur Théodose fait du christianisme la religion officielle et unique de l'Empire romain.",
  detail:`<p>En <strong>380</strong>, l'empereur <strong>Théodose</strong> promulgue l'édit de Thessalonique qui fait du christianisme nicéen la <strong>religion officielle</strong> de l'Empire romain. En quelques années, les cultes païens sont interdits et leurs temples fermés.</p>
  <p>En moins d'un siècle, le christianisme est passé de religion persécutée à religion d'État exclusive. L'Église et l'Empire nouent une alliance qui structurera toute l'histoire de l'Occident.</p>`},
 {nom:"Le Grand Schisme d'Orient",dates:"1054",role:"La rupture catholiques / orthodoxes",cat:"histoire",catLabel:"✂️ Schisme",color:"#475f8a",emoji:"✂️",img:"",
  resume:"En 1054, Rome et Constantinople s'excommunient mutuellement : c'est la séparation durable entre catholiques et orthodoxes.",
  detail:`<p>Le <strong>Grand Schisme de 1054</strong> consacre la séparation entre l'Église d'Occident (Rome, catholique) et l'Église d'Orient (Constantinople, orthodoxe). Les causes sont anciennes : rivalité entre Rome et Constantinople, différences de langue (latin/grec), de rites et de théologie.</p>
  <p>Le point de rupture symbolique : les légats du pape et le patriarche de Constantinople s'<strong>excommunient mutuellement</strong>. La querelle porte notamment sur la primauté du pape et sur le <em>Filioque</em> (une phrase du Credo). La chrétienté se divise durablement en deux.</p>
  <div class="anec-box"><div class="anec-label">Réconciliation tardive</div><p>Les excommunications de 1054 ne furent levées qu'en <strong>1965</strong>, par le pape Paul VI et le patriarche Athénagoras, plus de neuf siècles plus tard.</p></div>`},
 {nom:"Les croisades",dates:"1095 – 1291",role:"La reconquête de la Terre sainte",cat:"histoire",catLabel:"⚔️ Histoire",color:"#475f8a",emoji:"⚔️",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Dore_crusades_Godfrey.jpg/800px-Dore_crusades_Godfrey.jpg",
  resume:"Appelées par les papes, les croisades sont des expéditions militaires chrétiennes pour reprendre Jérusalem aux musulmans.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Dore_crusades_Godfrey.jpg/800px-Dore_crusades_Godfrey.jpg" alt="Les croisades" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Godefroy de Bouillon, gravure de Gustave Doré</p></div>
  <p>En <strong>1095</strong>, le pape <strong>Urbain II</strong> appelle les chrétiens d'Occident à délivrer <strong>Jérusalem</strong> et les Lieux saints, aux mains des musulmans. C'est le début des <strong>croisades</strong>.</p>
  <p>La première croisade prend Jérusalem en 1099 et fonde des États latins d'Orient. Suivront huit croisades majeures sur deux siècles, mêlant ferveur religieuse, ambitions politiques et violences. Avec la chute de Saint-Jean-d'Acre en 1291, l'aventure prend fin.</p>`},
 {nom:"Le Grand Schisme d'Occident",dates:"1378 – 1417",role:"Plusieurs papes rivaux",cat:"histoire",catLabel:"⛪ Histoire",color:"#475f8a",emoji:"⛪",img:"",
  resume:"Pendant près de 40 ans, deux puis trois papes rivaux se disputent la chrétienté, plongeant l'Église dans la crise.",
  detail:`<p>À ne pas confondre avec le schisme de 1054, le <strong>Grand Schisme d'Occident</strong> déchire l'Église catholique elle-même de 1378 à 1417. À la suite d'une double élection, deux <strong>papes rivaux</strong> règnent en même temps : l'un à <strong>Rome</strong>, l'autre à <strong>Avignon</strong>.</p>
  <p>Les royaumes d'Europe se divisent entre les deux obédiences. Un troisième pape apparaît même un temps. La crise, désastreuse pour le prestige de la papauté, n'est résolue qu'au <strong>concile de Constance (1417)</strong>, qui dépose les rivaux et élit un pape unique.</p>`},
 {nom:"La Réforme protestante",dates:"1517",role:"Luther et la rupture",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📜",img:"",
  resume:"Les 95 thèses de Luther brisent l'unité de l'Église d'Occident et donnent naissance au protestantisme.",
  detail:`<p>En <strong>1517</strong>, le moine allemand <strong>Martin Luther</strong> publie ses <strong>95 thèses</strong> contre le commerce des indulgences. La querelle, amplifiée par l'imprimerie, devient une rupture irréversible.</p>
  <p>Luther, excommunié, refuse de se rétracter. Avec Calvin et d'autres, il fonde les Églises <strong>protestantes</strong>. En quelques décennies, la moitié nord de l'Europe bascule. L'unité religieuse de l'Occident, vieille de mille ans, est brisée.</p>`},
 {nom:"Le concile de Trente",dates:"1545 – 1563",role:"La Contre-Réforme catholique",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📜",img:"",
  resume:"Face au protestantisme, l'Église catholique se réforme en profondeur et réaffirme sa doctrine.",
  detail:`<p>Pour répondre à la Réforme, l'Église catholique lance la <strong>Contre-Réforme</strong>, dont le cœur est le <strong>concile de Trente</strong> (1545-1563). Il réaffirme la doctrine catholique (les sept sacrements, le rôle des œuvres, l'autorité de la Tradition) contre les thèses protestantes.</p>
  <p>Le concile réforme aussi les mœurs du clergé, crée les séminaires pour former les prêtres et relance la vie spirituelle. De nouveaux ordres, comme les <strong>jésuites</strong> d'Ignace de Loyola, deviennent les fers de lance de la reconquête catholique.</p>`},
 {nom:"Les guerres de religion",dates:"1562 – 1598",role:"Catholiques contre protestants en France",cat:"histoire",catLabel:"⚔️ Histoire",color:"#475f8a",emoji:"⚔️",img:"",
  resume:"La France est déchirée par huit guerres entre catholiques et protestants, dont le massacre de la Saint-Barthélemy.",
  detail:`<p>Au XVIe siècle, la France est ravagée par les <strong>guerres de religion</strong> opposant catholiques et protestants (les <strong>huguenots</strong>). Huit guerres se succèdent, marquées par des atrocités des deux camps.</p>
  <p>Le point le plus sombre est le <strong>massacre de la Saint-Barthélemy</strong> (24 août 1572), où des milliers de protestants sont tués à Paris et en province. La paix ne revient qu'avec l'<strong>édit de Nantes</strong> (1598), par lequel Henri IV accorde une tolérance religieuse aux protestants.</p>`},
 {nom:"Le concile Vatican I",dates:"1869 – 1870",role:"L'infaillibilité pontificale",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📜",img:"",
  resume:"Convoqué par Pie IX, il proclame le dogme de l'infaillibilité du pape en matière de foi.",
  detail:`<p>Le concile <strong>Vatican I</strong>, convoqué par le pape <strong>Pie IX</strong>, proclame en 1870 le dogme de l'<strong>infaillibilité pontificale</strong> : lorsqu'il s'exprime solennellement (<em>ex cathedra</em>) sur la foi ou la morale, le pape ne peut se tromper.</p>
  <p>Le concile est interrompu par la prise de Rome par les troupes italiennes, qui met fin aux États pontificaux. Le pape se considère alors comme « prisonnier au Vatican », situation qui ne sera réglée qu'en 1929 par les accords du Latran.</p>`},
 {nom:"La séparation de l'Église et de l'État",dates:"1905",role:"La laïcité en France",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"⚖️",img:"",
  resume:"La loi de 1905 sépare les Églises et l'État en France, fondant la laïcité républicaine.",
  detail:`<p>Le 9 décembre <strong>1905</strong>, la France vote la <strong>loi de séparation des Églises et de l'État</strong>. L'État ne reconnaît, ne salarie ni ne subventionne plus aucun culte, mais en garantit le libre exercice.</p>
  <p>Cette loi met fin au Concordat de 1801 et fonde la <strong>laïcité</strong> à la française. D'abord vécue comme une rupture douloureuse par les catholiques, elle est aujourd'hui un pilier de la République.</p>`},
 {nom:"Le concile Vatican II",dates:"1962 – 1965",role:"L'Église face au monde moderne",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📜",img:"",
  resume:"Le grand concile du XXe siècle modernise l'Église catholique : messe en langue courante, ouverture au dialogue.",
  detail:`<p>Convoqué par le pape <strong>Jean XXIII</strong>, le concile <strong>Vatican II</strong> (1962-1965) est le grand tournant de l'Église catholique au XXe siècle. Son but : l'<em>aggiornamento</em>, la « mise à jour » de l'Église face au monde moderne.</p>
  <p>Il autorise la <strong>messe en langue courante</strong> (et non plus seulement en latin), le prêtre face aux fidèles, encourage le <strong>dialogue</strong> avec les autres religions et les autres chrétiens (œcuménisme), et redéfinit le rôle des laïcs. Un aggiornamento majeur, encore débattu aujourd'hui.</p>`},
 // ================= GRANDS PAPES =================
 {nom:"Saint Pierre",dates:"† v. 64/67",role:"Le premier pape",cat:"papes",catLabel:"🔑 Pape",color:"#2563eb",emoji:"🔑",img:"",
  resume:"Apôtre choisi par Jésus comme « pierre » de son Église, il est considéré comme le premier évêque de Rome et le premier pape.",
  detail:`<p><strong>Simon-Pierre</strong>, pêcheur de Galilée, est le premier des apôtres. Jésus lui dit : « Tu es Pierre, et sur cette pierre je bâtirai mon Église », lui confiant les « clés du Royaume ». C'est le fondement de la primauté papale.</p>
  <p>Après la Pentecôte, il dirige la première communauté chrétienne puis se rend à <strong>Rome</strong>, dont il est considéré comme le premier évêque. Il y est martyrisé sous Néron, <strong>crucifié la tête en bas</strong> par humilité, selon la tradition. La basilique Saint-Pierre du Vatican est bâtie sur son tombeau supposé.</p>`},
 {nom:"Léon Iᵉʳ le Grand",dates:"440 – 461",role:"Le pape qui arrêta Attila",cat:"papes",catLabel:"👑 Pape",color:"#2563eb",emoji:"👑",img:"",
  resume:"Grand théologien, il affirme l'autorité de Rome et, selon la légende, détourne Attila et ses Huns de la ville.",
  detail:`<p><strong>Léon Iᵉʳ</strong>, l'un des rares papes surnommés « le Grand », affirme avec force la <strong>primauté de l'évêque de Rome</strong> sur toute l'Église. Son intervention théologique est décisive au concile de Chalcédoine (451) sur la double nature du Christ.</p>
  <p>La tradition lui attribue un exploit fameux : en 452, il aurait rencontré <strong>Attila</strong>, roi des Huns, et l'aurait convaincu de renoncer à marcher sur Rome.</p>`},
 {nom:"Grégoire Iᵉʳ le Grand",dates:"590 – 604",role:"Fondateur de la papauté médiévale",cat:"papes",catLabel:"👑 Pape",color:"#2563eb",emoji:"👑",img:"",
  resume:"Réformateur, il organise l'Église, lance l'évangélisation de l'Angleterre et donne son nom au chant grégorien.",
  detail:`<p><strong>Grégoire le Grand</strong>, ancien moine, réorganise profondément l'Église et l'administration de Rome à une époque de chaos. Il pose les bases de la <strong>papauté médiévale</strong> et de son pouvoir temporel.</p>
  <p>Il envoie des missionnaires évangéliser l'<strong>Angleterre</strong>, développe la liturgie et laisse son nom au <strong>chant grégorien</strong>. Docteur de l'Église, il est l'une des figures majeures du passage de l'Antiquité au Moyen Âge.</p>`},
 {nom:"Urbain II",dates:"1088 – 1099",role:"Le pape de la première croisade",cat:"papes",catLabel:"⚔️ Pape",color:"#2563eb",emoji:"⚔️",img:"",
  resume:"En 1095, au concile de Clermont, il lance l'appel à la première croisade pour délivrer Jérusalem.",
  detail:`<p><strong>Urbain II</strong> marque l'histoire par un discours retentissant au <strong>concile de Clermont</strong> en 1095. Il appelle les chevaliers d'Occident à délivrer les Lieux saints et Jérusalem, promettant le pardon des péchés à ceux qui partiront.</p>
  <p>La foule aurait répondu par le cri « <em>Dieu le veut !</em> ». C'est le déclenchement de la <strong>première croisade</strong>, qui aboutira à la prise de Jérusalem en 1099, quelques jours avant la mort du pape.</p>`},
 {nom:"Innocent III",dates:"1198 – 1216",role:"L'apogée de la papauté",cat:"papes",catLabel:"👑 Pape",color:"#2563eb",emoji:"👑",img:"",
  resume:"Sous son pontificat, la papauté atteint son sommet de puissance, dominant les rois et l'Europe entière.",
  detail:`<p>Avec <strong>Innocent III</strong>, la papauté médiévale atteint son <strong>apogée</strong>. Se voulant l'arbitre suprême de la chrétienté, il impose sa volonté aux plus grands rois d'Europe, qu'il n'hésite pas à excommunier.</p>
  <p>Il approuve les ordres nouveaux de <strong>François d'Assise</strong> et de <strong>Dominique</strong>, lance la quatrième croisade et la croisade contre les Albigeois, et réunit le grand concile de Latran IV (1215). Jamais un pape n'aura autant dominé l'Occident.</p>`},
 {nom:"Léon X",dates:"1513 – 1521",role:"Le pape face à Luther",cat:"papes",catLabel:"👑 Pape",color:"#2563eb",emoji:"👑",img:"",
  resume:"Prince mécène de la Renaissance, c'est sous son pontificat qu'éclate la Réforme de Luther.",
  detail:`<p><strong>Léon X</strong>, fils de Laurent de Médicis, est un pape fastueux et mécène, protecteur de Raphaël et bâtisseur de la nouvelle basilique Saint-Pierre. Pour la financer, il relance le commerce des <strong>indulgences</strong>.</p>
  <p>C'est précisément ce commerce qui provoque, en 1517, la révolte de <strong>Martin Luther</strong>. Léon X excommunie Luther en 1521, mais échoue à mesurer l'ampleur de la <strong>Réforme</strong> qui va déchirer la chrétienté.</p>`},
 {nom:"Pie IX",dates:"1846 – 1878",role:"Le plus long pontificat",cat:"papes",catLabel:"👑 Pape",color:"#2563eb",emoji:"👑",img:"",
  resume:"Il proclame l'Immaculée Conception et l'infaillibilité pontificale, et perd les États pontificaux.",
  detail:`<p><strong>Pie IX</strong> détient le plus long pontificat de l'histoire (près de 32 ans). Il proclame le dogme de l'<strong>Immaculée Conception</strong> de Marie (1854) et fait définir l'<strong>infaillibilité pontificale</strong> au concile Vatican I (1870).</p>
  <p>Son règne voit aussi la fin des <strong>États pontificaux</strong>, annexés par l'Italie unifiée en 1870. Le pape se déclare alors « prisonnier au Vatican ».</p>`},
 {nom:"Léon XIII",dates:"1878 – 1903",role:"Le pape de la doctrine sociale",cat:"papes",catLabel:"⚖️ Pape",color:"#2563eb",emoji:"⚖️",img:"",
  resume:"Avec l'encyclique Rerum Novarum (1891), il fonde la doctrine sociale de l'Église face à la question ouvrière.",
  detail:`<p><strong>Léon XIII</strong> ouvre l'Église aux réalités du monde industriel. Son encyclique <strong>Rerum Novarum</strong> (1891) est le texte fondateur de la <strong>doctrine sociale</strong> de l'Église.</p>
  <p>Face à la misère ouvrière, elle condamne à la fois les excès du capitalisme et le socialisme athée, défend le juste salaire, le droit de propriété et le droit d'association. Elle inspirera durablement le catholicisme social et la démocratie chrétienne.</p>`},
 {nom:"Pie XII",dates:"1939 – 1958",role:"Le pape de la Seconde Guerre mondiale",cat:"papes",catLabel:"🕊️ Pape",color:"#2563eb",emoji:"🕊️",img:"",
  resume:"Pape pendant la guerre et la Shoah, figure diplomatique dont l'attitude face au nazisme reste débattue.",
  detail:`<p><strong>Pie XII</strong> dirige l'Église pendant la <strong>Seconde Guerre mondiale</strong> et la Shoah. Diplomate prudent, il œuvre en coulisses pour sauver des Juifs (notamment à Rome), mais son silence public relatif face à l'extermination nazie reste l'objet de vifs débats historiques.</p>
  <p>Après-guerre, farouchement anticommuniste, il proclame le dogme de l'<strong>Assomption</strong> de Marie (1950).</p>`},
 {nom:"Jean XXIII",dates:"1958 – 1963",role:"Le « bon pape Jean »",cat:"papes",catLabel:"🕊️ Pape",color:"#2563eb",emoji:"🕊️",img:"",
  resume:"Surnommé « le bon pape », il surprend le monde en convoquant le concile Vatican II.",
  detail:`<p>Élu à 77 ans, on attendait de <strong>Jean XXIII</strong> un pape de transition. Il crée la surprise en convoquant le <strong>concile Vatican II</strong> pour moderniser l'Église (l'<em>aggiornamento</em>).</p>
  <p>Chaleureux et proche des gens, surnommé « le bon pape Jean », il publie l'encyclique <em>Pacem in Terris</em> en pleine Guerre froide. Il meurt avant la fin du concile et est canonisé en 2014.</p>`},
 {nom:"Paul VI",dates:"1963 – 1978",role:"Le pape qui acheva Vatican II",cat:"papes",catLabel:"🕊️ Pape",color:"#2563eb",emoji:"🕊️",img:"",
  resume:"Il mène à son terme le concile Vatican II et lève les excommunications de 1054 avec les orthodoxes.",
  detail:`<p><strong>Paul VI</strong> conduit à son achèvement le concile <strong>Vatican II</strong> et met en œuvre ses réformes, dont la messe en langue vivante. Premier pape à voyager largement (Terre sainte, ONU, Inde...), il œuvre pour la paix et le <strong>dialogue</strong>.</p>
  <p>En 1965, avec le patriarche Athénagoras, il <strong>lève les excommunications</strong> réciproques de 1054, un geste historique de réconciliation avec les orthodoxes. Son encyclique <em>Humanae Vitae</em> (1968), contre la contraception, fait débat.</p>`},
 {nom:"Saint Jean-Paul II",dates:"1978 – 2005",role:"Le pape voyageur venu de Pologne",cat:"papes",catLabel:"🕊️ Pape",color:"#2563eb",emoji:"🕊️",img:"",
  resume:"Premier pape non italien depuis des siècles, figure de la chute du communisme, il survit à un attentat en 1981.",
  detail:`<p><strong>Jean-Paul II</strong> (Karol Wojtyła), premier pape <strong>polonais</strong> et premier non italien depuis 1523, marque profondément le monde. Charismatique et infatigable, il effectue plus de 100 voyages et attire des foules immenses, notamment aux Journées mondiales de la jeunesse.</p>
  <p>Son rôle est majeur dans la <strong>chute du communisme</strong> en Europe de l'Est, en soutenant le syndicat Solidarność dans sa Pologne natale.</p>
  <ul class="fact-list"><li><strong>Attentat du 13 mai 1981</strong> : il est grièvement blessé par balles place Saint-Pierre par Mehmet Ali Ağca ; il ira ensuite pardonner à son agresseur en prison</li><li>Grandes venues en France : Paris en 1980, et surtout les <strong>JMJ de Paris en 1997</strong>, avec une messe géante à Longchamp devant plus d'un million de jeunes</li><li>Canonisé en 2014</li></ul>`},
 {nom:"Benoît XVI",dates:"2005 – 2013",role:"Le pape théologien",cat:"papes",catLabel:"📖 Pape",color:"#2563eb",emoji:"📖",img:"",
  resume:"Grand théologien allemand, il crée la surprise en renonçant à sa charge, une première depuis six siècles.",
  detail:`<p><strong>Benoît XVI</strong> (Joseph Ratzinger), théologien allemand réputé, succède à Jean-Paul II. Intellectuel rigoureux, défenseur d'une foi exigeante face au « relativisme », il vient en France en 2008 (Paris, Lourdes).</p>
  <p>En 2013, il crée un événement mondial en <strong>renonçant</strong> à sa charge pour raisons d'âge, une décision qu'aucun pape n'avait prise depuis près de six siècles. Il devient « pape émérite » jusqu'à sa mort en 2022.</p>`},
 {nom:"François",dates:"2013 – 2025",role:"Le premier pape jésuite et latino-américain",cat:"papes",catLabel:"🕊️ Pape",color:"#2563eb",emoji:"🕊️",img:"",
  resume:"Argentin, premier pape jésuite, il prône une Église pauvre, proche des exclus et attentive à l'écologie.",
  detail:`<p><strong>François</strong> (Jorge Mario Bergoglio), archevêque de Buenos Aires, est le <strong>premier pape jésuite</strong>, le premier venu d'<strong>Amérique latine</strong> et le premier à prendre le nom de François, en hommage à saint François d'Assise.</p>
  <p>Il prône une « Église pauvre pour les pauvres », un style simple, l'accueil des migrants et des exclus. Son encyclique <em>Laudato si'</em> (2015) fait de l'<strong>écologie</strong> un enjeu majeur. Réformateur, il suscite l'enthousiasme comme les résistances. Il meurt en avril 2025.</p>`},
 {nom:"Léon XIV",dates:"depuis 2025",role:"Le premier pape américain",cat:"papes",catLabel:"🕊️ Pape",color:"#2563eb",emoji:"🕊️",img:"",
  resume:"Élu en mai 2025, Robert Francis Prevost est le premier pape né aux États-Unis.",
  detail:`<p><strong>Léon XIV</strong> (Robert Francis Prevost), né à Chicago, est élu pape le <strong>8 mai 2025</strong>, succédant à François. Il est le <strong>premier pape originaire des États-Unis</strong> de l'histoire.</p>
  <p>Longtemps missionnaire au Pérou puis responsable des évêques au Vatican, il choisit le nom de Léon en référence à Léon XIII, le pape de la doctrine sociale. Ses premiers messages insistent sur la paix, l'attention aux migrants et les défis posés par l'intelligence artificielle.</p>`},
 // ================= SAINTS MAJEURS =================
 {nom:"Saint Paul",dates:"v. 5 – v. 67",role:"L'apôtre des nations",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"✝️",img:"",
  resume:"Persécuteur des chrétiens converti sur le chemin de Damas, il devient le grand missionnaire et théologien du christianisme.",
  detail:`<p><strong>Paul de Tarse</strong>, d'abord persécuteur des chrétiens sous le nom de Saul, est foudroyé par une vision du Christ sur le <strong>chemin de Damas</strong>. Converti, il devient le plus grand missionnaire de l'Église naissante, l'« <strong>apôtre des nations</strong> ».</p>
  <p>Au fil de trois grands voyages, il fonde des communautés dans tout le monde gréco-romain et leur écrit des <strong>épîtres</strong> qui forment une part majeure du Nouveau Testament. C'est lui qui ouvre le christianisme aux non-Juifs. Il est décapité à Rome, martyr sous Néron.</p>`},
 {nom:"La Vierge Marie",dates:"Ier siècle",role:"Mère de Jésus",cat:"saints",catLabel:"✨ Sainte",color:"#d4a72c",emoji:"🙏",img:"",
  resume:"Mère de Jésus, elle occupe une place unique dans la foi catholique, objet d'une vénération et de nombreux dogmes.",
  detail:`<p><strong>Marie</strong>, mère de Jésus, tient une place centrale dans le catholicisme et l'orthodoxie. L'Évangile la présente comme une jeune femme de Nazareth qui accueille par son « oui » (l'Annonciation) le projet de Dieu.</p>
  <p>Le catholicisme lui attribue plusieurs dogmes : sa maternité divine, sa virginité, son <strong>Immaculée Conception</strong> (conçue sans péché) et son <strong>Assomption</strong> (élevée au ciel). Elle est l'objet d'innombrables prières (le « Je vous salue Marie »), pèlerinages (Lourdes, Fátima) et représentations dans l'art.</p>`},
 {nom:"Saint Jean-Baptiste",dates:"Ier siècle",role:"Le précurseur",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"💧",img:"",
  resume:"Prophète qui annonce la venue du Christ et le baptise dans le Jourdain, avant d'être décapité.",
  detail:`<p><strong>Jean-Baptiste</strong> est le « précurseur » qui prépare la venue du Christ. Prêchant dans le désert la conversion, il <strong>baptise</strong> ceux qui viennent à lui dans le Jourdain, dont Jésus lui-même.</p>
  <p>Il désigne Jésus comme l'« Agneau de Dieu ». Emprisonné pour avoir reproché sa conduite au roi Hérode, il est <strong>décapité</strong> à la demande de Salomé. Il fait le lien entre les prophètes de l'Ancien Testament et le Nouveau.</p>`},
 {nom:"Saint Étienne",dates:"† v. 34",role:"Le premier martyr",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"✨",img:"",
  resume:"Premier des diacres, il est le premier chrétien mis à mort pour sa foi, lapidé à Jérusalem.",
  detail:`<p><strong>Étienne</strong> est l'un des sept premiers <strong>diacres</strong> de l'Église naissante. Accusé de blasphème devant le Sanhédrin, il proclame sa foi avec courage et est <strong>lapidé</strong> à Jérusalem.</p>
  <p>Il est ainsi le <strong>premier martyr</strong> chrétien (le « protomartyr »). Fait notable : Saul (le futur saint Paul) assiste à son supplice avant sa propre conversion. Sa fête est célébrée le 26 décembre, au lendemain de Noël.</p>`},
 {nom:"Saint Augustin",dates:"354 – 430",role:"Père de l'Église, docteur",cat:"saints",catLabel:"📖 Saint",color:"#d4a72c",emoji:"📖",img:"",
  resume:"L'un des plus grands penseurs chrétiens, auteur des Confessions et de La Cité de Dieu.",
  detail:`<p><strong>Augustin d'Hippone</strong> est l'un des plus grands théologiens de toute l'histoire chrétienne. Après une jeunesse dissipée, ce brillant rhéteur d'Afrique du Nord se convertit à 33 ans, poussé par sa mère sainte Monique, et devient évêque d'Hippone.</p>
  <p>Ses <strong>Confessions</strong>, récit de sa conversion, sont l'une des premières autobiographies de la littérature. Sa <em>Cité de Dieu</em> et sa réflexion sur la grâce, le péché et le temps ont façonné toute la pensée occidentale, catholique comme protestante.</p>`},
 {nom:"Saint Jérôme",dates:"v. 347 – 420",role:"Traducteur de la Bible",cat:"saints",catLabel:"📖 Saint",color:"#d4a72c",emoji:"📖",img:"",
  resume:"Il traduit la Bible en latin (la Vulgate), version de référence de l'Église pendant plus de mille ans.",
  detail:`<p><strong>Jérôme</strong>, immense érudit, réalise l'œuvre de sa vie : la traduction de la <strong>Bible en latin</strong> à partir de l'hébreu et du grec. Cette version, la <strong>Vulgate</strong>, deviendra le texte officiel de l'Église catholique pour plus de mille ans.</p>
  <p>Retiré à Bethléem, souvent représenté avec un lion et un crâne, il est l'un des quatre grands Pères de l'Église latine et le saint patron des traducteurs.</p>`},
 {nom:"Saint Benoît de Nursie",dates:"v. 480 – 547",role:"Père du monachisme occidental",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"⛪",img:"",
  resume:"Fondateur de l'ordre bénédictin, sa Règle (« prie et travaille ») structure la vie monastique de l'Occident.",
  detail:`<p><strong>Benoît de Nursie</strong> fonde le monastère du Mont-Cassin et rédige une <strong>Règle</strong> qui deviendra le modèle de toute la vie monastique occidentale. Son principe : <em>ora et labora</em> (« prie et travaille »), équilibre entre prière, travail manuel et étude.</p>
  <p>Les <strong>monastères bénédictins</strong> deviennent, tout au long du Moyen Âge, des foyers de prière, d'agriculture, de savoir et de copie des manuscrits qui sauvent la culture antique. Benoît est proclamé <strong>patron de l'Europe</strong>.</p>`},
 {nom:"Saint François d'Assise",dates:"1181 – 1226",role:"Le poverello, ami des pauvres et de la nature",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"🕊️",img:"",
  resume:"Riche héritier devenu mendiant par amour du Christ, fondateur des franciscains, patron de l'écologie.",
  detail:`<p><strong>François d'Assise</strong>, fils d'un riche marchand, renonce à tout pour épouser « Dame Pauvreté » et vivre comme le Christ, au service des pauvres et des lépreux. Il fonde l'ordre des <strong>franciscains</strong>.</p>
  <p>Célèbre pour son amour de la <strong>nature</strong> (le <em>Cantique des créatures</em>, « frère Soleil, sœur Lune »), il aurait prêché aux oiseaux et reçu les <strong>stigmates</strong> (les plaies du Christ). Il installe la première crèche de Noël. Il est le saint patron de l'écologie ; le pape François a pris son nom.</p>`},
 {nom:"Saint Dominique",dates:"1170 – 1221",role:"Fondateur des dominicains",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"📿",img:"",
  resume:"Fondateur de l'ordre des Prêcheurs (dominicains), voué à la prédication et à l'étude.",
  detail:`<p><strong>Dominique de Guzmán</strong>, prêtre espagnol, fonde l'<strong>ordre des Prêcheurs</strong> (les <strong>dominicains</strong>) pour combattre l'hérésie par la prédication et l'exemple de la pauvreté. Contrairement aux moines, ses frères vivent parmi les gens, dans les villes et les universités.</p>
  <p>L'ordre devient un grand foyer intellectuel (Thomas d'Aquin en sera). La tradition attribue à Dominique la diffusion du <strong>Rosaire</strong>, la prière du chapelet.</p>`},
 {nom:"Saint Thomas d'Aquin",dates:"1225 – 1274",role:"Le docteur angélique",cat:"saints",catLabel:"📖 Saint",color:"#d4a72c",emoji:"📖",img:"",
  resume:"Le plus grand théologien du Moyen Âge, il concilie la foi chrétienne et la philosophie d'Aristote.",
  detail:`<p><strong>Thomas d'Aquin</strong>, dominicain, est le plus grand théologien et philosophe du Moyen Âge. Dans sa monumentale <strong>Somme théologique</strong>, il réalise la synthèse entre la <strong>foi chrétienne</strong> et la philosophie d'<strong>Aristote</strong>, montrant que raison et foi ne s'opposent pas.</p>
  <p>Surnommé le « docteur angélique », sa pensée (le <em>thomisme</em>) reste une référence majeure de la théologie catholique. Il est proclamé docteur de l'Église.</p>`},
 {nom:"Sainte Claire d'Assise",dates:"1194 – 1253",role:"Fondatrice des Clarisses",cat:"saints",catLabel:"✨ Sainte",color:"#d4a72c",emoji:"✨",img:"",
  resume:"Disciple de François d'Assise, elle fonde l'ordre contemplatif des Clarisses, voué à la pauvreté.",
  detail:`<p><strong>Claire d'Assise</strong>, jeune noble, s'enfuit de chez elle pour suivre <strong>François d'Assise</strong> et vivre dans la pauvreté totale. Elle fonde l'ordre contemplatif des <strong>Clarisses</strong>, branche féminine des franciscains.</p>
  <p>Recluse dans son monastère, elle défend farouchement le « privilège de pauvreté » de ses sœurs. Elle est la sainte patronne de la télévision, car, malade, elle aurait « vu » à distance une messe sur le mur de sa cellule.</p>`},
 {nom:"Sainte Catherine de Sienne",dates:"1347 – 1380",role:"Mystique et docteur de l'Église",cat:"saints",catLabel:"✨ Sainte",color:"#d4a72c",emoji:"✨",img:"",
  resume:"Mystique italienne, elle joue un rôle politique majeur en ramenant la papauté d'Avignon à Rome.",
  detail:`<p><strong>Catherine de Sienne</strong>, dominicaine, est l'une des grandes mystiques de l'histoire. Malgré son jeune âge et son absence d'instruction, elle acquiert une immense autorité morale et une influence politique.</p>
  <p>Par la force de ses lettres, elle contribue à convaincre le pape <strong>Grégoire XI</strong> de ramener la papauté d'Avignon à <strong>Rome</strong> en 1377. Docteur de l'Église et co-patronne de l'Europe, elle meurt à seulement 33 ans.</p>`},
 {nom:"Sainte Jeanne d'Arc",dates:"1412 – 1431",role:"La Pucelle d'Orléans",cat:"saints",catLabel:"⚔️ Sainte",color:"#d4a72c",emoji:"⚔️",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Joan_of_Arc_miniature_graded.jpg/800px-Joan_of_Arc_miniature_graded.jpg",
  resume:"Jeune paysanne guidée par des voix, elle sauve la France, est brûlée pour hérésie, puis canonisée.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Joan_of_Arc_miniature_graded.jpg/800px-Joan_of_Arc_miniature_graded.jpg" alt="Jeanne d'Arc" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Jeanne d'Arc, seule représentation contemporaine (miniature)</p></div>
  <p><strong>Jeanne d'Arc</strong>, jeune paysanne de Lorraine, dit entendre des <strong>voix</strong> (saint Michel, sainte Catherine, sainte Marguerite) lui ordonnant de bouter les Anglais hors de France. Elle délivre <strong>Orléans</strong> (1429) et fait sacrer Charles VII à Reims.</p>
  <p>Capturée, livrée aux Anglais, elle est jugée et <strong>brûlée vive à Rouen</strong> en 1431 pour hérésie, à 19 ans. Réhabilitée en 1456, elle est <strong>canonisée en 1920</strong> et devient l'une des saintes patronnes de la France.</p>`},
 {nom:"Saint Ignace de Loyola",dates:"1491 – 1556",role:"Fondateur des jésuites",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"✝️",img:"",
  resume:"Ancien soldat converti, il fonde la Compagnie de Jésus, fer de lance de la Contre-Réforme.",
  detail:`<p><strong>Ignace de Loyola</strong>, gentilhomme basque et soldat, se convertit pendant une longue convalescence après une blessure. Il rédige les <strong>Exercices spirituels</strong>, méthode de prière et de discernement toujours utilisée.</p>
  <p>Il fonde en 1540 la <strong>Compagnie de Jésus</strong> (les <strong>jésuites</strong>), ordre voué à l'éducation, aux missions lointaines et au service du pape. Les jésuites deviennent le fer de lance de la <strong>Contre-Réforme</strong> et de grands éducateurs. Le pape François est jésuite.</p>`},
 {nom:"Sainte Thérèse d'Ávila",dates:"1515 – 1582",role:"Réformatrice et mystique",cat:"saints",catLabel:"📖 Sainte",color:"#d4a72c",emoji:"✨",img:"",
  resume:"Grande mystique espagnole, elle réforme l'ordre du Carmel et devient docteur de l'Église.",
  detail:`<p><strong>Thérèse d'Ávila</strong>, carmélite espagnole, est l'une des plus grandes figures mystiques du christianisme. Elle réforme l'ordre du <strong>Carmel</strong> en revenant à une règle stricte (les carmélites « déchaussées »).</p>
  <p>Ses écrits sur la vie intérieure et l'union à Dieu (le <em>Château intérieur</em>) sont des sommets de la littérature spirituelle. Première femme proclamée <strong>docteur de l'Église</strong> (en 1970), elle influença notamment sainte Thérèse de Lisieux.</p>`},
 {nom:"Saint Vincent de Paul",dates:"1581 – 1660",role:"Le saint de la charité",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"🤝",img:"",
  resume:"Prêtre français voué au service des pauvres, fondateur d'œuvres de charité toujours actives.",
  detail:`<p><strong>Vincent de Paul</strong> consacre sa vie au <strong>service des pauvres</strong>, des malades, des enfants abandonnés et des galériens dans la France du Grand Siècle. Organisateur de génie de la charité, il crée les <strong>Filles de la Charité</strong> (avec Louise de Marillac) et les prêtres de la Mission (lazaristes).</p>
  <p>Son nom reste attaché à d'innombrables œuvres caritatives, dont la Société Saint-Vincent-de-Paul, toujours active dans le monde entier. Il est le patron des œuvres de charité.</p>`},
 {nom:"Sainte Bernadette Soubirous",dates:"1844 – 1879",role:"La voyante de Lourdes",cat:"saints",catLabel:"✨ Sainte",color:"#d4a72c",emoji:"💧",img:"",
  resume:"Jeune fille à qui la Vierge Marie serait apparue à Lourdes en 1858, faisant du lieu un grand pèlerinage.",
  detail:`<p><strong>Bernadette Soubirous</strong>, humble fille d'un meunier de Lourdes, dit voir en 1858 une « belle dame » lui apparaître dix-huit fois dans une grotte. La dame se présente comme l'<strong>Immaculée Conception</strong>.</p>
  <p>Une source jaillit, à laquelle on attribue des guérisons. <strong>Lourdes</strong> devient l'un des plus grands lieux de <strong>pèlerinage</strong> catholiques au monde. Bernadette, devenue religieuse, meurt jeune ; son corps est retrouvé intact et exposé à Nevers.</p>`},
 {nom:"Sainte Thérèse de Lisieux",dates:"1873 – 1897",role:"La petite Thérèse, docteur de l'Église",cat:"saints",catLabel:"🌹 Sainte",color:"#d4a72c",emoji:"🌹",img:"",
  resume:"Carmélite morte à 24 ans, sa « petite voie » de confiance et d'amour en a fait l'une des saintes les plus aimées.",
  detail:`<p><strong>Thérèse Martin</strong>, dite « la petite Thérèse », entre au carmel de Lisieux à 15 ans et y meurt de tuberculose à seulement <strong>24 ans</strong>. Sa vie, en apparence sans éclat, cache une profondeur spirituelle immense.</p>
  <p>Dans son autobiographie, <em>Histoire d'une âme</em>, elle décrit sa « <strong>petite voie</strong> » : atteindre la sainteté non par de grands exploits, mais par la confiance et l'amour dans les petites choses du quotidien. Immensément populaire, patronne des missions, elle est proclamée <strong>docteur de l'Église</strong> en 1997.</p>`},
 {nom:"Saint Padre Pio",dates:"1887 – 1968",role:"Le moine aux stigmates",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"🙏",img:"",
  resume:"Capucin italien portant les stigmates du Christ pendant 50 ans, figure très populaire du XXe siècle.",
  detail:`<p><strong>Padre Pio</strong>, moine capucin italien, est l'une des figures spirituelles les plus populaires du XXe siècle. Il aurait porté les <strong>stigmates</strong> (les plaies du Christ) pendant un demi-siècle, et on lui attribue de nombreux dons (guérisons, lecture des âmes).</p>
  <p>Confesseur infatigable, il fonde un grand hôpital. D'abord regardé avec méfiance par le Vatican, il est finalement canonisé en 2002 ; son sanctuaire de San Giovanni Rotondo attire des millions de pèlerins.</p>`},
 {nom:"Sainte Teresa de Calcutta",dates:"1910 – 1997",role:"Mère Teresa, au service des plus pauvres",cat:"saints",catLabel:"✨ Sainte",color:"#d4a72c",emoji:"🤍",img:"https://commons.wikimedia.org/wiki/Special:FilePath/MotherTeresa_090.jpg?width=800",
  resume:"Religieuse au service des mourants de Calcutta, prix Nobel de la paix, canonisée en 2016.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/MotherTeresa_090.jpg?width=800" alt="Mère Teresa" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Mère Teresa de Calcutta</p></div>
  <p><strong>Mère Teresa</strong>, religieuse d'origine albanaise, consacre sa vie aux plus pauvres des pauvres dans les bidonvilles de <strong>Calcutta</strong>. Elle fonde les <strong>Missionnaires de la Charité</strong>, qui recueillent les mourants, les lépreux et les abandonnés.</p>
  <p>Devenue un symbole mondial de la charité, elle reçoit le <strong>prix Nobel de la paix</strong> en 1979. Canonisée en 2016, elle est l'une des saintes les plus connues de l'époque contemporaine.</p>`},
 // ================= CALENDRIER =================
 {nom:"L'Avent",dates:"4 semaines avant Noël",role:"L'attente de Noël",cat:"calendrier",catLabel:"📅 Fête",color:"#0ea5e9",emoji:"🕯️",img:"",
  resume:"Temps de préparation et d'attente qui ouvre l'année liturgique, quatre dimanches avant Noël.",
  detail:`<p>L'<strong>Avent</strong> (du latin <em>adventus</em>, « venue ») ouvre l'année liturgique catholique. Ce temps de <strong>préparation</strong> à Noël commence quatre dimanches avant le 25 décembre.</p>
  <p>C'est un temps d'attente et d'espérance de la venue du Christ. On y allume progressivement les quatre bougies de la <strong>couronne de l'Avent</strong>, et les enfants ouvrent chaque jour une case du calendrier de l'Avent.</p>`},
 {nom:"Noël",dates:"25 décembre",role:"La naissance du Christ",cat:"calendrier",catLabel:"⭐ Fête",color:"#0ea5e9",emoji:"⭐",img:"",
  resume:"La fête de la Nativité célèbre la naissance de Jésus à Bethléem, l'une des deux plus grandes fêtes chrétiennes.",
  detail:`<p><strong>Noël</strong> célèbre la <strong>naissance de Jésus</strong> à Bethléem. C'est, avec Pâques, la plus grande fête du christianisme, marquée par la messe de minuit et la crèche.</p>
  <p>La date du 25 décembre, fixée au IVe siècle, se superpose aux anciennes fêtes romaines du solstice d'hiver et du « soleil invaincu ». Au-delà de sa dimension religieuse, Noël est devenue une grande fête familiale et culturelle dans le monde entier.</p>`},
 {nom:"L'Épiphanie",dates:"6 janvier",role:"La visite des Rois mages",cat:"calendrier",catLabel:"👑 Fête",color:"#0ea5e9",emoji:"👑",img:"",
  resume:"Elle célèbre la visite des Rois mages à l'Enfant Jésus, manifestation du Christ aux nations.",
  detail:`<p>L'<strong>Épiphanie</strong> (« manifestation ») célèbre la venue des <strong>Rois mages</strong> — Melchior, Gaspard et Balthazar — guidés par une étoile jusqu'à l'Enfant Jésus, à qui ils offrent l'or, l'encens et la myrrhe.</p>
  <p>Elle signifie que le Christ se manifeste à tous les peuples, et pas seulement au peuple juif. En France, on la fête en partageant la <strong>galette des rois</strong> et sa fève.</p>`},
 {nom:"La Chandeleur",dates:"2 février",role:"La présentation au Temple",cat:"calendrier",catLabel:"🕯️ Fête",color:"#0ea5e9",emoji:"🕯️",img:"",
  resume:"Quarante jours après Noël, elle célèbre la présentation de Jésus au Temple ; jour des crêpes.",
  detail:`<p>La <strong>Chandeleur</strong>, quarante jours après Noël, célèbre la <strong>présentation de Jésus au Temple</strong> de Jérusalem. Son nom vient des processions aux chandelles (« fête des chandelles »), le Christ étant « lumière des nations ».</p>
  <p>La tradition populaire y associe la confection des <strong>crêpes</strong>, dont la forme ronde et dorée évoque le soleil et le retour de la lumière après l'hiver.</p>`},
 {nom:"Le Carême",dates:"40 jours avant Pâques",role:"Temps de pénitence",cat:"calendrier",catLabel:"📅 Fête",color:"#0ea5e9",emoji:"🌿",img:"",
  resume:"Période de 40 jours de jeûne, de prière et de partage qui prépare à Pâques.",
  detail:`<p>Le <strong>Carême</strong> est un temps de <strong>40 jours</strong> de préparation à Pâques, en mémoire des quarante jours de jeûne du Christ au désert. Il commence le mercredi des Cendres et s'achève à Pâques.</p>
  <p>C'est un temps de <strong>pénitence</strong> marqué par trois pratiques : le jeûne (se priver), la prière et l'aumône (le partage). Le carnaval (« Mardi gras ») précède ce temps austère, dernière fête avant les privations.</p>`},
 {nom:"Le Mercredi des Cendres",dates:"début du Carême",role:"L'entrée en Carême",cat:"calendrier",catLabel:"📅 Fête",color:"#0ea5e9",emoji:"🌿",img:"",
  resume:"Jour d'ouverture du Carême, où le prêtre marque le front des fidèles d'une croix de cendres.",
  detail:`<p>Le <strong>mercredi des Cendres</strong> ouvre le Carême. Au cours de la messe, le prêtre trace une croix de <strong>cendres</strong> sur le front des fidèles en disant : « Souviens-toi que tu es poussière et que tu retourneras à la poussière. »</p>
  <p>Ces cendres, obtenues en brûlant les rameaux de l'année précédente, symbolisent la fragilité humaine, le deuil du péché et l'appel à la conversion.</p>`},
 {nom:"Les Rameaux",dates:"dimanche avant Pâques",role:"L'entrée du Christ à Jérusalem",cat:"calendrier",catLabel:"🌿 Fête",color:"#0ea5e9",emoji:"🌿",img:"",
  resume:"Ils célèbrent l'entrée triomphale de Jésus à Jérusalem et ouvrent la Semaine sainte.",
  detail:`<p>Le <strong>dimanche des Rameaux</strong> célèbre l'entrée triomphale de <strong>Jésus à Jérusalem</strong>, acclamé par la foule qui agite des rameaux et étend des manteaux sur son passage.</p>
  <p>Les fidèles portent des rameaux (buis, olivier, palmes) que le prêtre bénit. Ce dimanche ouvre la <strong>Semaine sainte</strong>, la plus importante de l'année, qui mène de la gloire à la Passion.</p>`},
 {nom:"La Semaine sainte",dates:"semaine avant Pâques",role:"La Passion du Christ",cat:"calendrier",catLabel:"✝️ Fête",color:"#0ea5e9",emoji:"✝️",img:"",
  resume:"La semaine la plus solennelle, qui va de la Cène à la mort du Christ, avant la joie de Pâques.",
  detail:`<p>La <strong>Semaine sainte</strong> est le sommet de l'année liturgique. Elle revit les derniers jours du Christ. Le <strong>Jeudi saint</strong> commémore la <strong>Cène</strong> (le dernier repas, institution de l'eucharistie) et le lavement des pieds.</p>
  <p>Le <strong>Vendredi saint</strong> rappelle la crucifixion, le <strong>Samedi saint</strong> est un jour de silence, et la <strong>veillée pascale</strong> annonce la Résurrection. C'est le « Triduum pascal », cœur de la foi chrétienne.</p>`},
 {nom:"Le Vendredi saint",dates:"vendredi avant Pâques",role:"La crucifixion",cat:"calendrier",catLabel:"✝️ Fête",color:"#0ea5e9",emoji:"✝️",img:"",
  resume:"Jour de deuil qui commémore la Passion et la mort de Jésus sur la croix.",
  detail:`<p>Le <strong>Vendredi saint</strong> commémore la <strong>Passion</strong> et la <strong>mort du Christ</strong> sur la croix, au Golgotha. C'est un jour de deuil, de jeûne et de silence : aucune messe n'est célébrée, les cloches se taisent.</p>
  <p>Les fidèles suivent le <strong>chemin de croix</strong>, méditant les quatorze stations de la souffrance du Christ, et vénèrent la croix. C'est le jour le plus sombre avant la lumière de Pâques.</p>`},
 {nom:"Pâques",dates:"mars/avril",role:"La Résurrection du Christ",cat:"calendrier",catLabel:"🌅 Fête",color:"#0ea5e9",emoji:"🌅",img:"",
  resume:"La plus grande fête chrétienne : la résurrection de Jésus, victoire de la vie sur la mort.",
  detail:`<p><strong>Pâques</strong> est la <strong>plus grande fête</strong> du christianisme : elle célèbre la <strong>résurrection de Jésus</strong> le troisième jour après sa mort. C'est le cœur de la foi chrétienne, la victoire de la vie sur la mort.</p>
  <p>Sa date est mobile (premier dimanche après la première pleine lune du printemps), ce qui règle tout le calendrier liturgique. Héritée de la Pâque juive, elle est associée à des symboles de vie nouvelle : l'agneau, l'œuf, les cloches.</p>
  <div class="anec-box"><div class="anec-label">Les cloches de Pâques</div><p>En France, on dit aux enfants que les cloches, silencieuses depuis le Vendredi saint, sont « parties à Rome » et reviennent le matin de Pâques en semant des œufs en chocolat.</p></div>`},
 {nom:"L'Ascension",dates:"40 jours après Pâques",role:"La montée du Christ au ciel",cat:"calendrier",catLabel:"☁️ Fête",color:"#0ea5e9",emoji:"☁️",img:"",
  resume:"Quarante jours après Pâques, elle célèbre la montée de Jésus ressuscité vers le Père.",
  detail:`<p>L'<strong>Ascension</strong>, quarante jours après Pâques, célèbre la montée de <strong>Jésus ressuscité au ciel</strong>, auprès de Dieu le Père, en présence de ses apôtres.</p>
  <p>Le Christ confie alors à ses disciples la mission d'annoncer l'Évangile au monde entier. Toujours célébrée un jeudi, l'Ascension est un jour férié dans de nombreux pays.</p>`},
 {nom:"La Pentecôte",dates:"50 jours après Pâques",role:"Le don de l'Esprit Saint",cat:"calendrier",catLabel:"🕊️ Fête",color:"#0ea5e9",emoji:"🕊️",img:"",
  resume:"Cinquante jours après Pâques, elle célèbre la venue de l'Esprit Saint sur les apôtres, naissance de l'Église.",
  detail:`<p>La <strong>Pentecôte</strong>, cinquante jours après Pâques, célèbre la descente de l'<strong>Esprit Saint</strong> sur les apôtres sous forme de langues de feu. Remplis de courage, ils se mettent à parler toutes les langues et partent annoncer l'Évangile.</p>
  <p>Elle est considérée comme la <strong>naissance de l'Église</strong> et clôt le temps pascal. C'est l'une des trois grandes fêtes chrétiennes avec Noël et Pâques.</p>`},
 {nom:"L'Assomption",dates:"15 août",role:"Marie élevée au ciel",cat:"calendrier",catLabel:"🙏 Fête",color:"#0ea5e9",emoji:"🙏",img:"",
  resume:"Elle célèbre l'élévation de la Vierge Marie au ciel ; grande fête mariale et jour férié en France.",
  detail:`<p>L'<strong>Assomption</strong>, le 15 août, célèbre la croyance selon laquelle la <strong>Vierge Marie</strong>, au terme de sa vie, fut élevée au ciel en corps et en âme. Ce dogme a été proclamé par le pape Pie XII en 1950.</p>
  <p>C'est la plus grande <strong>fête mariale</strong> de l'année, marquée par de nombreuses processions. En France, le 15 août est un jour férié, la Vierge étant patronne du royaume depuis un vœu de Louis XIII en 1638.</p>`},
 {nom:"La Toussaint",dates:"1er novembre",role:"La fête de tous les saints",cat:"calendrier",catLabel:"✨ Fête",color:"#0ea5e9",emoji:"✨",img:"",
  resume:"Elle honore tous les saints ; elle précède le jour des Morts, où l'on prie pour les défunts.",
  detail:`<p>La <strong>Toussaint</strong>, le 1er novembre, honore <strong>tous les saints</strong> du ciel, connus ou inconnus. C'est une célébration joyeuse de ceux qui ont atteint la sainteté.</p>
  <p>Elle est suivie, le 2 novembre, du <strong>jour des Morts</strong>, où l'on prie pour les défunts. Dans la pratique, les deux se confondent souvent : les familles fleurissent les tombes de <strong>chrysanthèmes</strong> et se recueillent dans les cimetières.</p>`},
 {nom:"L'Immaculée Conception",dates:"8 décembre",role:"Marie conçue sans péché",cat:"calendrier",catLabel:"🙏 Fête",color:"#0ea5e9",emoji:"🙏",img:"",
  resume:"Elle célèbre le dogme selon lequel Marie fut conçue sans le péché originel. Fête des lumières à Lyon.",
  detail:`<p>L'<strong>Immaculée Conception</strong>, le 8 décembre, célèbre le dogme (proclamé en 1854) selon lequel la <strong>Vierge Marie</strong> fut, dès sa conception, préservée du péché originel, en vue de sa mission de mère du Christ.</p>
  <p>C'est à Lourdes que la « belle dame » se présenta à Bernadette sous ce nom. À <strong>Lyon</strong>, la date coïncide avec la célèbre <strong>Fête des Lumières</strong>, où les habitants illuminent leurs fenêtres en l'honneur de la Vierge.</p>`},
{nom:"Sainte Marie-Madeleine",dates:"Ier siècle",role:"L'apôtre des apôtres",cat:"saints",catLabel:"✨ Sainte",color:"#d4a72c",emoji:"🌸",
  resume:"Disciple fidèle de Jésus, elle est la première témoin de la Résurrection.",
  detail:`<p><strong>Marie-Madeleine</strong> est l'une des disciples les plus proches de Jésus. Présente au pied de la croix, elle est, selon les Évangiles, la <strong>première à voir le Christ ressuscité</strong> au matin de Pâques et à l'annoncer aux apôtres, ce qui lui vaut le titre d'« apôtre des apôtres ».</p>
  <p>La tradition provençale la fait finir sa vie en ermite à la Sainte-Baume. Elle est l'une des saintes les plus populaires et les plus représentées dans l'art.</p>`},
 {nom:"Saint Bernard de Clairvaux",dates:"1090 – 1153",role:"Le grand moine cistercien",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"⛪",
  resume:"Moine réformateur au rayonnement immense, prédicateur de la deuxième croisade et docteur de l'Église.",
  detail:`<p><strong>Bernard de Clairvaux</strong> est la figure spirituelle dominante du XIIe siècle. Moine cistercien, il fonde l'abbaye de Clairvaux et donne un essor immense à son ordre.</p>
  <p>Conseiller des papes et des rois, prédicateur enflammé de la <strong>deuxième croisade</strong>, mystique et théologien, il est proclamé docteur de l'Église. On l'appelle le « docteur melliflue ».</p>`},
 {nom:"Sainte Hildegarde de Bingen",dates:"1098 – 1179",role:"Abbesse, mystique et savante",cat:"saints",catLabel:"📖 Sainte",color:"#d4a72c",emoji:"🎶",
  resume:"Génie universel du Moyen Âge : mystique, compositrice, botaniste et médecin, docteur de l'Église.",
  detail:`<p><strong>Hildegarde de Bingen</strong>, abbesse allemande, est l'une des femmes les plus remarquables du Moyen Âge. Mystique aux visions célèbres, elle est aussi <strong>compositrice</strong> de musique, poétesse, botaniste et médecin.</p>
  <p>Son savoir encyclopédique et son autorité morale étaient reconnus dans toute l'Europe. Elle a été proclamée <strong>docteur de l'Église</strong> en 2012.</p>`},
 {nom:"Saint Louis (Louis IX)",dates:"1214 – 1270",role:"Le roi de France canonisé",cat:"saints",catLabel:"👑 Saint",color:"#d4a72c",emoji:"👑",
  resume:"Roi de France réputé pour sa justice et sa piété, croisé, seul roi de France canonisé.",
  detail:`<p><strong>Louis IX</strong>, roi de France, est le modèle du roi chrétien. Réputé pour sa <strong>justice</strong> (il rendait la justice sous un chêne à Vincennes) et sa piété, il fait construire la <strong>Sainte-Chapelle</strong> pour abriter la couronne d'épines.</p>
  <p>Il part deux fois en <strong>croisade</strong> et meurt de la peste devant Tunis. Canonisé en 1297, il est le seul roi de France déclaré saint.</p>`},
 {nom:"Saint Antoine de Padoue",dates:"1195 – 1231",role:"Le franciscain, patron des objets perdus",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"📿",
  resume:"Prédicateur franciscain célèbre, très populaire, invoqué pour retrouver les objets perdus.",
  detail:`<p><strong>Antoine de Padoue</strong>, franciscain d'origine portugaise, est l'un des plus grands prédicateurs de son temps, réputé pour sa science et son éloquence. Proclamé docteur de l'Église, il est l'un des saints les plus populaires au monde.</p>
  <p>La tradition l'invoque volontiers pour <strong>retrouver les objets perdus</strong>. On le représente souvent portant l'Enfant Jésus.</p>`},
 {nom:"Saint Jean de la Croix",dates:"1542 – 1591",role:"Mystique et poète du Carmel",cat:"saints",catLabel:"📖 Saint",color:"#d4a72c",emoji:"✨",
  resume:"Réformateur du Carmel avec Thérèse d'Ávila, il est l'un des plus grands poètes mystiques.",
  detail:`<p><strong>Jean de la Croix</strong>, carme espagnol, réforme son ordre avec sainte <strong>Thérèse d'Ávila</strong>. Emprisonné pour cela, il compose en prison certains de ses plus beaux poèmes.</p>
  <p>Sa <em>Nuit obscure de l'âme</em> et son <em>Cantique spirituel</em> comptent parmi les sommets de la poésie mystique et de la langue espagnole. Il est docteur de l'Église.</p>`},
 {nom:"Sainte Monique",dates:"331 – 387",role:"La mère de saint Augustin",cat:"saints",catLabel:"✨ Sainte",color:"#d4a72c",emoji:"🙏",
  resume:"Par ses prières et sa persévérance, elle obtient la conversion de son fils Augustin.",
  detail:`<p><strong>Monique</strong>, chrétienne d'Afrique du Nord, est la mère de saint <strong>Augustin</strong>. Pendant des années, elle prie et pleure pour la conversion de son fils, alors dissipé et éloigné de la foi.</p>
  <p>Sa persévérance est finalement récompensée : Augustin se convertit peu avant la mort de sa mère. Elle est devenue le modèle et la patronne des mères chrétiennes.</p>`},
 {nom:"Saint Jean-Marie Vianney",dates:"1786 – 1859",role:"Le curé d'Ars",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"⛪",
  resume:"Humble curé de campagne devenu confesseur célèbre dans toute la France, patron des prêtres.",
  detail:`<p><strong>Jean-Marie Vianney</strong>, le « <strong>curé d'Ars</strong> », est un humble prêtre de campagne aux études difficiles. Mais sa sainteté, sa charité et son don pour la confession attirent bientôt des dizaines de milliers de pèlerins dans son petit village.</p>
  <p>Il passait jusqu'à seize heures par jour au confessionnal. Il est le saint patron des prêtres de paroisse.</p>`},
 {nom:"Saint Maximilien Kolbe",dates:"1894 – 1941",role:"Le martyr d'Auschwitz",cat:"saints",catLabel:"🕯️ Saint",color:"#d4a72c",emoji:"🕯️",
  resume:"Prêtre franciscain polonais qui donna sa vie à Auschwitz pour sauver un père de famille.",
  detail:`<p><strong>Maximilien Kolbe</strong>, prêtre franciscain polonais, est déporté à <strong>Auschwitz</strong>. Lorsqu'un prisonnier est condamné à mourir de faim en représailles, Kolbe <strong>se propose de mourir à sa place</strong>, car l'homme était père de famille.</p>
  <p>Il meurt après deux semaines d'agonie. Canonisé en 1982, il est un symbole de charité héroïque face à la barbarie. L'homme qu'il sauva assista à sa canonisation.</p>`},
 {nom:"Saint Charles de Foucauld",dates:"1858 – 1916",role:"L'ermite du Sahara",cat:"saints",catLabel:"✨ Saint",color:"#d4a72c",emoji:"🏜️",
  resume:"Officier mondain devenu ermite au Sahara, vivant au milieu des Touaregs dans la pauvreté et l'amitié.",
  detail:`<p><strong>Charles de Foucauld</strong>, ancien officier et explorateur menant une vie dissipée, se convertit radicalement et devient prêtre puis <strong>ermite au Sahara</strong>. Il s'installe à Tamanrasset, au milieu des <strong>Touaregs</strong>, dont il partage la vie et dont il étudie la langue.</p>
  <p>Voulant être un « frère universel », il est tué en 1916. Canonisé en 2022, il inspire de nombreuses fraternités.</p>`}
];
