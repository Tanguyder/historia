// HINDOUISME — cat: courants, histoire, figures (dieux & figures), calendrier (concepts & fêtes)
const hindData=[
 // ===== COURANTS =====
 {nom:"Le vishnouisme",dates:"tradition",role:"Les dévots de Vishnou",cat:"courants",catLabel:"🕉️ Courant",color:"#24406b",emoji:"🕉️",img:"",
  resume:"Le plus grand courant de l'hindouisme, centré sur le culte de Vishnou et de ses avatars, Krishna et Rama.",
  detail:`<p>Le <strong>vishnouisme</strong> est le courant le plus répandu de l'hindouisme. Il place au centre le dieu <strong>Vishnou</strong>, le « préservateur » de l'univers, et surtout ses <strong>avatars</strong> (incarnations) que sont <strong>Krishna</strong> et <strong>Rama</strong>.</p>
  <p>C'est une spiritualité de la dévotion aimante (<em>bhakti</em>) envers un dieu personnel.</p>`},
 {nom:"Le shivaïsme",dates:"tradition",role:"Les dévots de Shiva",cat:"courants",catLabel:"🔱 Courant",color:"#24406b",emoji:"🔱",img:"",
  resume:"Grand courant centré sur Shiva, dieu de la destruction et de la transformation, de l'ascèse et de la danse cosmique.",
  detail:`<p>Le <strong>shivaïsme</strong> voue son culte à <strong>Shiva</strong>, dieu à la fois destructeur et régénérateur, maître des ascètes (yogis) et de la danse cosmique. On le vénère souvent sous la forme du <em>lingam</em>.</p>
  <p>Ce courant valorise la méditation, l'ascèse et le yoga comme voies vers la libération.</p>`},
 {nom:"Le shaktisme",dates:"tradition",role:"Le culte de la Déesse",cat:"courants",catLabel:"🌺 Courant",color:"#24406b",emoji:"🌺",img:"",
  resume:"Courant vouant son culte à la Déesse (Shakti, Durga, Kali), énergie féminine du divin.",
  detail:`<p>Le <strong>shaktisme</strong> adore le divin sous sa forme féminine, la <strong>Shakti</strong>, énergie créatrice de l'univers, vénérée sous de multiples visages : la douce <strong>Parvati</strong>, la guerrière <strong>Durga</strong>, la terrible <strong>Kali</strong>.</p>
  <p>Très présent au Bengale, il célèbre la puissance maternelle et protectrice de la Déesse-Mère.</p>`},

 // ===== HISTOIRE =====
 {nom:"La civilisation de l'Indus et les Védas",dates:"v. 1500 av. J.-C.",role:"Les origines",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📜",img:"",
  resume:"L'hindouisme plonge ses racines dans la civilisation de l'Indus et les hymnes sacrés des Védas.",
  detail:`<p>L'hindouisme est la plus ancienne des grandes religions encore vivantes, sans fondateur unique. Ses racines plongent dans la brillante <strong>civilisation de l'Indus</strong> et dans l'arrivée des peuples indo-aryens, vers 1500 av. J.-C.</p>
  <p>Ces derniers apportent les <strong>Védas</strong>, recueils d'hymnes sacrés en sanskrit qui sont les plus anciens textes de l'hindouisme et le fondement du <em>brahmanisme</em>.</p>`},
 {nom:"Les grandes épopées",dates:"v. 400 av. – 400 ap. J.-C.",role:"Mahabharata, Ramayana, Bhagavad-Gita",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📖",img:"",
  resume:"Deux immenses épopées, le Mahabharata et le Ramayana, façonnent l'imaginaire et la morale hindous.",
  detail:`<p>Deux <strong>épopées</strong> monumentales structurent la culture hindoue. Le <strong>Mahabharata</strong> (le plus long poème du monde) raconte une guerre entre cousins et contient la <strong>Bhagavad-Gita</strong>, dialogue spirituel majeur entre le prince Arjuna et Krishna.</p>
  <p>Le <strong>Ramayana</strong> relate les aventures du prince <strong>Rama</strong> pour délivrer son épouse Sita. Ces récits transmettent les grandes valeurs morales et religieuses.</p>`},
 {nom:"Les temples et l'hindouisme classique",dates:"Ve – XIIIe siècle",role:"L'âge d'or des temples",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"🛕",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Ellora_cave_16_Kailash_temple_overview.jpg/800px-Ellora_cave_16_Kailash_temple_overview.jpg",
  resume:"L'hindouisme classique couvre l'Inde de temples somptueux, chefs-d'œuvre d'architecture et de sculpture.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Ellora_cave_16_Kailash_temple_overview.jpg/800px-Ellora_cave_16_Kailash_temple_overview.jpg" alt="Temple du Kailash, Ellora" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Le temple du Kailash à Ellora, taillé dans la roche</p></div>
  <p>Au Moyen Âge, l'hindouisme connaît un âge d'or. De grandes dynasties couvrent l'Inde de <strong>temples</strong> somptueux, véritables montagnes sculptées dédiées aux dieux, comme le temple du <strong>Kailash</strong> à Ellora, entièrement taillé dans la roche.</p>
  <p>La dévotion personnelle (<em>bhakti</em>) se développe, rendant la religion plus accessible au-delà des rites des prêtres.</p>`},
 {nom:"La renaissance hindoue moderne",dates:"XIXe – XXe siècle",role:"Réformes et renouveau",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"🪔",img:"",
  resume:"Face à la colonisation, des penseurs réforment l'hindouisme et le font connaître au monde.",
  detail:`<p>Sous la colonisation britannique, des réformateurs modernisent l'hindouisme : abolition de pratiques contestées, retour aux textes, dialogue avec la modernité.</p>
  <p><strong>Vivekananda</strong> le fait connaître en Occident à la fin du XIXe siècle, et <strong>Gandhi</strong> en tire une éthique de non-violence (<em>ahimsa</em>) qui inspirera le monde entier. Le yoga et la méditation se diffusent largement.</p>`},

 // ===== DIEUX & FIGURES =====
 {nom:"La Trimurti : Brahma, Vishnou, Shiva",dates:"panthéon",role:"La triade divine",cat:"figures",catLabel:"🕉️ Dieux",color:"#2563eb",emoji:"🕉️",img:"",
  resume:"Les trois grandes fonctions du divin : Brahma crée, Vishnou préserve, Shiva détruit et régénère.",
  detail:`<p>L'hindouisme est souvent présenté comme polythéiste, mais ses multiples dieux sont vus comme les visages d'une même réalité ultime (le <em>Brahman</em>). La <strong>Trimurti</strong> en exprime les trois grandes fonctions :</p>
  <ul class="fact-list"><li><strong>Brahma</strong> : le créateur de l'univers</li><li><strong>Vishnou</strong> : le préservateur, qui s'incarne pour sauver le monde</li><li><strong>Shiva</strong> : le destructeur et régénérateur, qui permet le renouvellement</li></ul>`},
 {nom:"Krishna",dates:"avatar de Vishnou",role:"Le dieu bien-aimé",cat:"figures",catLabel:"🪈 Dieu",color:"#2563eb",emoji:"🪈",img:"",
  resume:"Avatar de Vishnou, dieu très populaire, héros de la Bhagavad-Gita et symbole de l'amour divin.",
  detail:`<p><strong>Krishna</strong>, l'un des avatars de Vishnou, est l'une des divinités les plus aimées de l'Inde. Enfant espiègle, jeune homme charmeur jouant de la flûte, il est aussi le sage conseiller du prince Arjuna dans la <strong>Bhagavad-Gita</strong>.</p>
  <p>Il y enseigne l'accomplissement du devoir et la dévotion à Dieu comme voie de libération. Il incarne l'amour divin.</p>`},
 {nom:"Ganesh",dates:"panthéon",role:"Le dieu à tête d'éléphant",cat:"figures",catLabel:"🐘 Dieu",color:"#2563eb",emoji:"🐘",img:"",
  resume:"Dieu à tête d'éléphant, fils de Shiva, très populaire, invoqué pour écarter les obstacles.",
  detail:`<p><strong>Ganesh</strong>, le dieu à tête d'éléphant, fils de Shiva et Parvati, est l'une des divinités les plus populaires et les plus aimées de l'hindouisme. Il est le « <strong>seigneur des obstacles</strong> », celui qu'on invoque avant toute entreprise pour qu'il écarte les difficultés.</p>
  <p>Sage et bienveillant, patron des arts et des sciences, on le trouve à l'entrée des maisons et des temples.</p>`},

 // ===== CONCEPTS & FÊTES =====
 {nom:"Dharma, karma et moksha",dates:"principes fondamentaux",role:"Les lois de l'existence",cat:"calendrier",catLabel:"🕉️ Concept",color:"#0ea5e9",emoji:"🕉️",img:"",
  resume:"Le devoir (dharma), la loi des actes (karma) et la libération ultime (moksha) structurent la vie hindoue.",
  detail:`<p>Trois notions clés structurent la pensée hindoue :</p>
  <ul class="fact-list"><li>Le <strong>dharma</strong> : l'ordre du monde et le devoir propre à chacun selon sa place</li><li>Le <strong>karma</strong> : la loi des actes, qui détermine les renaissances</li><li>Le <strong>samsara</strong> : le cycle des réincarnations, dont le but est de sortir</li><li>La <strong>moksha</strong> : la libération finale, l'union de l'âme individuelle avec l'absolu</li></ul>`},
 {nom:"Le yoga",dates:"tradition millénaire",role:"La voie de l'union",cat:"calendrier",catLabel:"🧘 Concept",color:"#0ea5e9",emoji:"🧘",img:"",
  resume:"Ensemble de disciplines du corps et de l'esprit visant l'union avec le divin ; diffusé dans le monde entier.",
  detail:`<p>Le <strong>yoga</strong> (« union ») désigne un ensemble de disciplines spirituelles, mentales et physiques visant à maîtriser le corps et l'esprit pour s'unir au divin et atteindre la libération.</p>
  <p>Des postures (<em>asanas</em>) au contrôle du souffle et à la méditation, il a été adopté dans le monde entier, souvent sous une forme centrée sur le bien-être.</p>`},
 {nom:"Diwali",dates:"automne",role:"La fête des Lumières",cat:"calendrier",catLabel:"🪔 Fête",color:"#0ea5e9",emoji:"🪔",img:"",
  resume:"La plus grande fête hindoue, célébrant la victoire de la lumière sur les ténèbres par des milliers de lampes.",
  detail:`<p><strong>Diwali</strong>, la « fête des Lumières », est la plus grande fête de l'Inde. Pendant cinq jours, maisons et rues s'illuminent de milliers de petites lampes (<em>diyas</em>), symboles de la <strong>victoire de la lumière sur les ténèbres</strong>, du bien sur le mal.</p>
  <p>On y honore notamment la déesse de la prospérité Lakshmi, on échange cadeaux et douceurs, et on tire des feux d'artifice.</p>`},
 {nom:"Holi",dates:"printemps",role:"La fête des couleurs",cat:"calendrier",catLabel:"🎨 Fête",color:"#0ea5e9",emoji:"🎨",img:"",
  resume:"Fête joyeuse du printemps où l'on se jette des poudres colorées, célébrant l'amour et le renouveau.",
  detail:`<p><strong>Holi</strong>, la « fête des couleurs », célèbre l'arrivée du printemps et la victoire du bien sur le mal. Petits et grands se jettent joyeusement des <strong>poudres colorées</strong> et de l'eau, abolissant le temps d'une journée les barrières sociales.</p>
  <p>C'est l'une des fêtes les plus exubérantes et populaires de l'Inde, désormais connue dans le monde entier.</p>`},
 {nom:"La Kumbh Mela",dates:"tous les 12 ans (grand cycle)",role:"Le plus grand pèlerinage du monde",cat:"calendrier",catLabel:"🕉️ Fête",color:"#0ea5e9",emoji:"🌊",img:"",
  resume:"Pèlerinage géant au bord des fleuves sacrés, rassemblant des dizaines de millions de pèlerins.",
  detail:`<p>La <strong>Kumbh Mela</strong> est le plus grand rassemblement humain de la planète. Ce pèlerinage hindou réunit, au confluent de fleuves sacrés comme le <strong>Gange</strong>, des <strong>dizaines de millions de pèlerins</strong> venus se baigner pour se purifier.</p>
  <p>Les grands sages et ascètes (<em>sadhus</em>) y descendent de leurs retraites. C'est un spectacle de ferveur unique au monde.</p>`}
];
