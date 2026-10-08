// ISLAM — branches, histoire, figures, calendrier. cat: courants, histoire, figures, calendrier
const islamData=[
 // ===== BRANCHES =====
 {nom:"Le sunnisme",dates:"depuis le VIIe siècle",role:"La majorité des musulmans",cat:"courants",catLabel:"🕌 Branche",color:"#24406b",emoji:"🕌",img:"",
  resume:"Environ 85 % des musulmans. Les sunnites reconnaissent les quatre premiers califes comme successeurs légitimes du Prophète.",
  detail:`<p>Le <strong>sunnisme</strong> rassemble la grande majorité des musulmans (environ 85 %). Son nom vient de la <em>Sunna</em>, la tradition des paroles et actes du Prophète, qui complète le Coran.</p>
  <p>Les sunnites reconnaissent la légitimité des <strong>quatre premiers califes</strong> (« bien guidés ») et s'organisent autour de quatre grandes écoles juridiques. Ils n'ont pas de clergé hiérarchisé.</p>`},
 {nom:"Le chiisme",dates:"depuis le VIIe siècle",role:"Les partisans d'Ali",cat:"courants",catLabel:"🕌 Branche",color:"#24406b",emoji:"🕌",img:"",
  resume:"Deuxième branche de l'islam, née d'une querelle de succession. Les chiites suivent Ali et ses descendants, les imams.",
  detail:`<p>Le <strong>chiisme</strong> (environ 10-15 % des musulmans) naît d'une querelle sur la succession du Prophète. Les chiites (« chiat Ali », le parti d'Ali) estiment que seul <strong>Ali</strong>, cousin et gendre de Mahomet, et ses descendants, les <strong>imams</strong>, étaient les successeurs légitimes.</p>
  <p>Ils sont majoritaires en Iran et en Irak. Le martyre de l'imam Hussein à Kerbala (680) est au cœur de leur mémoire, commémoré lors de l'Achoura.</p>`},
 {nom:"Le soufisme",dates:"depuis le VIIIe siècle",role:"La mystique de l'islam",cat:"courants",catLabel:"🌙 Branche",color:"#24406b",emoji:"🌙",img:"",
  resume:"Courant mystique et spirituel de l'islam, cherchant l'union intime avec Dieu par la prière et l'ascèse.",
  detail:`<p>Le <strong>soufisme</strong> est la dimension mystique et intérieure de l'islam. Les soufis recherchent une expérience directe et intime de <strong>Dieu</strong>, par la répétition de ses noms (le <em>dhikr</em>), la méditation, la poésie et parfois la danse (les derviches tourneurs).</p>
  <p>Organisé en confréries autour de maîtres spirituels, il a produit de grands poètes comme <strong>Rumi</strong> et joué un grand rôle dans la diffusion de l'islam.</p>`},

 // ===== HISTOIRE =====
 {nom:"La naissance de l'islam",dates:"VIIe siècle",role:"La révélation à Mahomet",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📖",img:"",
  resume:"Vers 610, le marchand Mahomet reçoit à La Mecque des révélations qui formeront le Coran et fondent l'islam.",
  detail:`<p>Vers <strong>610</strong>, à <strong>La Mecque</strong>, un marchand nommé <strong>Mahomet</strong> reçoit, selon la tradition, des révélations de l'ange Gabriel. Ces messages, transmis pendant vingt-deux ans, formeront le <strong>Coran</strong>.</p>
  <p>Il prêche l'existence d'un Dieu unique (<em>Allah</em>) et la soumission à sa volonté (<em>islam</em>). D'abord persécuté, il jette les bases d'une nouvelle religion monothéiste, la troisième après le judaïsme et le christianisme.</p>`},
 {nom:"L'Hégire",dates:"622",role:"Le début du calendrier musulman",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"🐫",img:"",
  resume:"L'émigration de Mahomet de La Mecque à Médine marque l'an 1 du calendrier musulman.",
  detail:`<p>En <strong>622</strong>, face à l'hostilité des Mecquois, Mahomet et ses fidèles émigrent vers la ville de <strong>Médine</strong> : c'est l'<strong>Hégire</strong>. Là, il fonde la première communauté musulmane (la <em>oumma</em>) et devient un chef politique et religieux.</p>
  <p>Cet événement est si important qu'il marque l'<strong>an 1 du calendrier musulman</strong>. À la mort du Prophète en 632, presque toute l'Arabie est unifiée sous l'islam.</p>`},
 {nom:"Les grandes conquêtes",dates:"VIIe – VIIIe siècle",role:"L'expansion fulgurante de l'islam",cat:"histoire",catLabel:"⚔️ Histoire",color:"#475f8a",emoji:"⚔️",img:"",
  resume:"En un siècle, l'islam s'étend de l'Espagne à l'Inde, formant l'un des plus vastes empires de l'histoire.",
  detail:`<p>Après la mort de Mahomet, les armées arabes se lancent dans des <strong>conquêtes fulgurantes</strong>. En moins d'un siècle, l'islam s'étend de l'<strong>Espagne</strong> (711) à l'<strong>Inde</strong>, en passant par la Perse, la Syrie, l'Égypte et l'Afrique du Nord.</p>
  <p>C'est l'un des plus vastes empires jamais constitués. Leur avancée en Europe est stoppée à <strong>Poitiers</strong> (732) par Charles Martel.</p>`},
 {nom:"Le schisme sunnites-chiites",dates:"656 – 680",role:"La division de l'islam",cat:"histoire",catLabel:"✂️ Histoire",color:"#475f8a",emoji:"✂️",img:"",
  resume:"La querelle sur la succession du Prophète divise durablement les musulmans en sunnites et chiites.",
  detail:`<p>Le grand schisme de l'islam naît d'une <strong>querelle de succession</strong>. Après l'assassinat du calife Ali (661), le pouvoir passe à la dynastie omeyyade. Les partisans d'Ali refusent cette légitimité.</p>
  <p>Le drame fondateur du chiisme est le massacre de <strong>Kerbala</strong> (680), où Hussein, petit-fils du Prophète, est tué. La division entre <strong>sunnites</strong> et <strong>chiites</strong> perdure jusqu'à nos jours.</p>`},
 {nom:"L'âge d'or de Bagdad",dates:"VIIIe – XIIIe siècle",role:"La splendeur de la civilisation islamique",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📚",img:"",
  resume:"Sous les Abbassides, Bagdad devient un foyer mondial de savoir : sciences, médecine, mathématiques, philosophie.",
  detail:`<p>Sous la dynastie <strong>abbasside</strong>, <strong>Bagdad</strong> devient au IXe siècle la plus grande ville du monde et un foyer intellectuel sans égal. Dans la « Maison de la sagesse », on traduit les savoirs grecs, indiens et perses.</p>
  <p>Les savants musulmans font progresser l'<strong>algèbre</strong>, la médecine, l'astronomie, la chimie et la philosophie, transmettant plus tard ce savoir à l'Europe. C'est un véritable âge d'or.</p>`},
 {nom:"Al-Andalus",dates:"711 – 1492",role:"L'Espagne musulmane",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"🕌",img:"",
  resume:"Pendant près de huit siècles, l'Espagne musulmane est un brillant foyer de culture et de cohabitation.",
  detail:`<p><strong>Al-Andalus</strong> désigne l'Espagne sous domination musulmane, de la conquête de 711 à la chute de <strong>Grenade</strong> en 1492. Cordoue devient l'une des plus grandes villes du monde, avec sa Grande Mosquée et ses bibliothèques.</p>
  <p>Musulmans, juifs et chrétiens y cohabitent (avec des périodes de tolérance et d'autres de tensions). La <strong>Reconquista</strong> chrétienne y met fin peu à peu, achevée en 1492.</p>`},
 {nom:"L'Empire ottoman",dates:"1299 – 1922",role:"Le grand empire islamique",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"🕌",img:"",
  resume:"Pendant six siècles, les Ottomans dominent un vaste empire et portent le titre de calife de l'islam.",
  detail:`<p>L'<strong>Empire ottoman</strong>, fondé par des Turcs, domine pendant six siècles le Proche-Orient, les Balkans et l'Afrique du Nord. La prise de <strong>Constantinople</strong> (1453) en fait la grande puissance de l'islam.</p>
  <p>Les sultans portent le titre de <strong>calife</strong>, chef spirituel des musulmans sunnites. L'empire s'effondre après la Première Guerre mondiale ; le califat est aboli en 1924.</p>`},

 // ===== FIGURES =====
 {nom:"Mahomet",dates:"v. 570 – 632",role:"Le prophète de l'islam",cat:"figures",catLabel:"☪️ Figure",color:"#2563eb",emoji:"☪️",img:"",
  resume:"Fondateur de l'islam, considéré par les musulmans comme le dernier des prophètes, transmetteur du Coran.",
  detail:`<p><strong>Mahomet</strong> (Muhammad), né à La Mecque, est pour les musulmans le <strong>dernier et le plus grand des prophètes</strong>, après Abraham, Moïse et Jésus. Il transmet le message de Dieu recueilli dans le <strong>Coran</strong>.</p>
  <p>Marchand devenu chef religieux et politique, il unifie l'Arabie sous l'islam. Sa vie et ses paroles (la <em>Sunna</em>) servent de modèle aux croyants. Par respect, l'islam évite généralement de le représenter.</p>`},
 {nom:"Abou Bakr",dates:"573 – 634",role:"Le premier calife",cat:"figures",catLabel:"☪️ Figure",color:"#2563eb",emoji:"🕌",img:"",
  resume:"Compagnon et beau-père du Prophète, il devient le premier calife à la mort de Mahomet.",
  detail:`<p><strong>Abou Bakr</strong>, proche compagnon et beau-père de Mahomet, est le <strong>premier calife</strong> (successeur) à la mort du Prophète en 632. Il consolide l'unité de la jeune communauté musulmane face aux révoltes.</p>
  <p>Il lance les premières conquêtes et fait rassembler les révélations du Coran. Il est le premier des quatre califes « bien guidés » vénérés par les sunnites.</p>`},
 {nom:"Ali ibn Abi Talib",dates:"v. 600 – 661",role:"Cousin du Prophète, figure du chiisme",cat:"figures",catLabel:"☪️ Figure",color:"#2563eb",emoji:"🕌",img:"",
  resume:"Cousin et gendre de Mahomet, quatrième calife, figure centrale et vénérée du chiisme.",
  detail:`<p><strong>Ali</strong>, cousin et gendre de Mahomet (époux de sa fille Fatima), est l'une des figures les plus vénérées de l'islam. Quatrième calife, il est pour les <strong>chiites</strong> le seul successeur légitime du Prophète.</p>
  <p>Réputé pour sa piété, son courage et sa sagesse, il est assassiné en 661. La querelle autour de sa succession fonde la division entre sunnites et chiites.</p>`},
 {nom:"Averroès",dates:"1126 – 1198",role:"Philosophe et médecin d'Al-Andalus",cat:"figures",catLabel:"📚 Figure",color:"#2563eb",emoji:"📚",img:"",
  resume:"Grand philosophe de Cordoue, commentateur d'Aristote qui influença profondément la pensée européenne.",
  detail:`<p><strong>Averroès</strong> (Ibn Rushd), philosophe, médecin et juriste de <strong>Cordoue</strong>, est l'un des plus grands penseurs du monde musulman. Ses commentaires d'<strong>Aristote</strong> furent si célèbres qu'en Europe on l'appelait simplement « le Commentateur ».</p>
  <p>Défenseur de l'accord entre la raison et la foi, il influença profondément la philosophie médiévale chrétienne et juive.</p>`},
 {nom:"Avicenne",dates:"980 – 1037",role:"Médecin et philosophe persan",cat:"figures",catLabel:"📚 Figure",color:"#2563eb",emoji:"⚕️",img:"",
  resume:"Génie universel, son Canon de la médecine fut la référence médicale en Europe pendant des siècles.",
  detail:`<p><strong>Avicenne</strong> (Ibn Sina), savant persan, est l'un des plus grands esprits de l'âge d'or islamique. Médecin, philosophe, astronome, il rédige le <strong>Canon de la médecine</strong>, encyclopédie qui restera la référence médicale en Orient et en Europe pendant cinq siècles.</p>
  <p>Sa philosophie, mêlant Aristote et néoplatonisme, marqua toute la pensée médiévale.</p>`},
 {nom:"Al-Khwarizmi",dates:"v. 780 – 850",role:"Le père de l'algèbre",cat:"figures",catLabel:"📚 Figure",color:"#2563eb",emoji:"🔢",img:"",
  resume:"Mathématicien de Bagdad dont le nom a donné « algorithme » et l'œuvre le mot « algèbre ».",
  detail:`<p><strong>Al-Khwarizmi</strong>, mathématicien de la Maison de la sagesse de Bagdad, est considéré comme le <strong>père de l'algèbre</strong> (mot tiré du titre de son traité, <em>al-jabr</em>).</p>
  <p>Il popularise les chiffres « arabes » (venus d'Inde) et le zéro. Le mot <strong>algorithme</strong> vient de la latinisation de son nom. Son influence sur les mathématiques mondiales est immense.</p>`},
 {nom:"Rumi",dates:"1207 – 1273",role:"Le grand poète mystique",cat:"figures",catLabel:"🌙 Figure",color:"#2563eb",emoji:"🌙",img:"",
  resume:"Poète soufi persan, l'un des plus lus au monde, à l'origine des derviches tourneurs.",
  detail:`<p><strong>Rumi</strong> (Djalâl ad-Dîn Rûmî), poète et mystique persan, est l'une des plus grandes voix du <strong>soufisme</strong>. Son œuvre, célébrant l'amour divin, est parmi les poésies les plus lues au monde.</p>
  <p>Il inspire la confrérie des <strong>derviches tourneurs</strong>, dont la danse giratoire est une forme de prière et d'union à Dieu.</p>`},

 // ===== CALENDRIER / PRATIQUES =====
 {nom:"Les cinq piliers de l'islam",dates:"pratique fondamentale",role:"Les devoirs du musulman",cat:"calendrier",catLabel:"🕌 Pratique",color:"#0ea5e9",emoji:"🕌",img:"",
  resume:"Les cinq obligations qui structurent la vie du croyant : profession de foi, prière, aumône, jeûne, pèlerinage.",
  detail:`<p>Les <strong>cinq piliers</strong> sont les devoirs fondamentaux de tout musulman :</p>
  <ul class="fact-list"><li>La <strong>chahada</strong> : la profession de foi (« il n'y a de dieu que Dieu, et Mahomet est son prophète »)</li><li>La <strong>salat</strong> : les cinq prières quotidiennes, tournées vers La Mecque</li><li>La <strong>zakat</strong> : l'aumône aux plus pauvres</li><li>Le <strong>sawm</strong> : le jeûne du mois de Ramadan</li><li>Le <strong>hajj</strong> : le pèlerinage à La Mecque, au moins une fois dans sa vie</li></ul>`},
 {nom:"Le Ramadan",dates:"9e mois du calendrier musulman",role:"Le mois du jeûne",cat:"calendrier",catLabel:"🌙 Fête",color:"#0ea5e9",emoji:"🌙",img:"",
  resume:"Mois sacré du jeûne : du lever au coucher du soleil, les musulmans s'abstiennent de manger et de boire.",
  detail:`<p>Le <strong>Ramadan</strong> est le mois sacré du <strong>jeûne</strong>, l'un des cinq piliers. Du lever au coucher du soleil, les croyants s'abstiennent de manger, de boire et de fumer, et intensifient prière et partage.</p>
  <p>C'est durant ce mois que le Coran aurait commencé à être révélé. Le jeûne est rompu chaque soir par un repas (l'<em>iftar</em>), souvent en famille.</p>`},
 {nom:"L'Aïd el-Fitr",dates:"fin du Ramadan",role:"La fête de la rupture du jeûne",cat:"calendrier",catLabel:"🎉 Fête",color:"#0ea5e9",emoji:"🎉",img:"",
  resume:"Grande fête joyeuse qui célèbre la fin du mois de jeûne du Ramadan.",
  detail:`<p>L'<strong>Aïd el-Fitr</strong> (« fête de la rupture ») célèbre la fin du Ramadan. C'est l'une des deux grandes fêtes de l'islam, un moment de joie, de prières collectives, de repas festifs, de cadeaux et de dons aux pauvres.</p>`},
 {nom:"L'Aïd al-Adha",dates:"pendant le pèlerinage",role:"La fête du sacrifice",cat:"calendrier",catLabel:"🐑 Fête",color:"#0ea5e9",emoji:"🐑",img:"",
  resume:"La « grande fête » commémore le sacrifice d'Abraham, prêt à offrir son fils à Dieu.",
  detail:`<p>L'<strong>Aïd al-Adha</strong> (« fête du sacrifice ») est la plus grande fête de l'islam. Elle commémore le geste d'<strong>Abraham</strong> (Ibrahim), prêt à sacrifier son fils par obéissance à Dieu, avant que Dieu ne le remplace par un bélier.</p>
  <p>Elle a lieu pendant le pèlerinage de La Mecque ; les familles sacrifient traditionnellement un mouton et en partagent la viande avec les pauvres.</p>`},
 {nom:"Le Hajj (pèlerinage)",dates:"12e mois du calendrier",role:"Le pèlerinage à La Mecque",cat:"calendrier",catLabel:"🕋 Pratique",color:"#0ea5e9",emoji:"🕋",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Masjid_Al_Haram%2C_Mecca%2C_Saudi_Arabia.jpg/800px-Masjid_Al_Haram%2C_Mecca%2C_Saudi_Arabia.jpg",
  resume:"Le grand pèlerinage à La Mecque, cinquième pilier, rassemble chaque année des millions de fidèles.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Masjid_Al_Haram%2C_Mecca%2C_Saudi_Arabia.jpg/800px-Masjid_Al_Haram%2C_Mecca%2C_Saudi_Arabia.jpg" alt="La Grande Mosquée de La Mecque" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">La Grande Mosquée de La Mecque et la Kaaba</p></div>
  <p>Le <strong>Hajj</strong> est le grand pèlerinage à <strong>La Mecque</strong>, que tout musulman doit accomplir au moins une fois dans sa vie s'il le peut. Il rassemble chaque année des <strong>millions de fidèles</strong> du monde entier.</p>
  <p>Les pèlerins, vêtus de blanc, tournent autour de la <strong>Kaaba</strong>, cube sacré vers lequel tous les musulmans se tournent pour prier. C'est l'un des plus grands rassemblements humains de la planète.</p>`},
 {nom:"L'Achoura",dates:"10e jour de Muharram",role:"Deuil chiite, jeûne sunnite",cat:"calendrier",catLabel:"🌙 Fête",color:"#0ea5e9",emoji:"🕯️",img:"",
  resume:"Jour de jeûne pour les sunnites, grande commémoration de deuil pour les chiites (martyre de Hussein).",
  detail:`<p>L'<strong>Achoura</strong> a des sens différents selon les branches. Pour les <strong>sunnites</strong>, c'est un jour de jeûne recommandé. Pour les <strong>chiites</strong>, c'est le grand jour de deuil commémorant le martyre de l'imam <strong>Hussein</strong>, petit-fils du Prophète, tué à Kerbala en 680.</p>`}
];
