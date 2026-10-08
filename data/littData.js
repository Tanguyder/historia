// LITTERATURE — grands écrivains. cat: antiquite, medieval, classique, xixe, moderne
const littData=[
 {nom:"Homère",dates:"VIIIe siècle av. J.-C.",role:"Poète grec, père de l'épopée",cat:"antiquite",catLabel:"🏛️ Antiquité",color:"#24406b",emoji:"📜",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Homer_British_Museum.jpg?width=800",
  resume:"Auteur supposé de l'Iliade et de l'Odyssée, les deux poèmes fondateurs de toute la littérature occidentale.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Homer_British_Museum.jpg?width=800" alt="Buste d'Homère" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Buste idéalisé d'Homère (British Museum)</p></div>
  <p><strong>Homère</strong> est la figure fondatrice de la littérature occidentale. On lui attribue l'<strong>Iliade</strong> (la colère d'Achille pendant la guerre de Troie) et l'<strong>Odyssée</strong> (le retour mouvementé d'Ulysse), composées vers le VIIIe siècle av. J.-C.</p>
  <p>Ces épopées, d'abord transmises oralement par des aèdes, ont structuré l'imaginaire grec puis européen : héroïsme, destin, ruse, hospitalité. On ignore si Homère a réellement existé, ou s'il personnifie une tradition de poètes.</p>
  <div class="anec-box"><div class="anec-label">La question homérique</div><p>Depuis l'Antiquité, on débat : un seul auteur génial, ou la mise par écrit de chants populaires accumulés sur des siècles ? Le mystère reste entier.</p></div>`},

 {nom:"Virgile",dates:"70 – 19 av. J.-C.",role:"Poète latin de l'Énéide",cat:"antiquite",catLabel:"🏛️ Antiquité",color:"#24406b",emoji:"📜",img:"",
  resume:"Le plus grand poète de Rome, auteur de l'Énéide, l'épopée nationale qui relie Rome au héros troyen Énée.",
  detail:`<p><strong>Virgile</strong> est le poète national de Rome sous l'empereur Auguste. Son chef-d'œuvre, l'<strong>Énéide</strong>, raconte le voyage du Troyen <strong>Énée</strong> jusqu'en Italie, où ses descendants fonderont Rome. C'est une réponse latine aux épopées d'Homère.</p>
  <p>L'œuvre légitime le pouvoir d'Auguste en lui donnant une généalogie héroïque et divine. Virgile écrivit aussi les <em>Bucoliques</em> et les <em>Géorgiques</em>, célébrant la nature et la vie rurale.</p>
  <div class="anec-box"><div class="anec-label">Guide de Dante</div><p>Mille trois cents ans plus tard, Dante choisit Virgile comme guide pour traverser l'Enfer et le Purgatoire dans la Divine Comédie : l'hommage suprême d'un poète à un autre.</p></div>`},

 {nom:"Dante Alighieri",dates:"1265 – 1321",role:"Père de la langue italienne",cat:"medieval",catLabel:"⛪ Moyen Âge",color:"#475f8a",emoji:"📖",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Sandro_Botticelli_-_Portrait_of_Dante.jpg?width=800",
  resume:"Auteur de la Divine Comédie, voyage poétique à travers l'Enfer, le Purgatoire et le Paradis, fondateur de l'italien littéraire.",
  detail:`<p><strong>Dante</strong>, poète florentin, écrit au début du XIVe siècle la <strong>Divine Comédie</strong>, immense poème en trois parties (Enfer, Purgatoire, Paradis) où il voyage dans l'au-delà, guidé par Virgile puis par sa bien-aimée Béatrice.</p>
  <p>En choisissant d'écrire en <strong>italien</strong> (le toscan) plutôt qu'en latin, Dante fonde la langue littéraire italienne. Son œuvre est une synthèse de toute la pensée médiévale, théologique, politique et morale.</p>
  <ul class="fact-list">
    <li>Exilé de Florence pour raisons politiques, il n'y reviendra jamais</li>
    <li>L'Enfer, avec ses neuf cercles, a façonné l'imaginaire occidental</li>
  </ul>`},

 {nom:"William Shakespeare",dates:"1564 – 1616",role:"Dramaturge anglais",cat:"classique",catLabel:"🎭 Classique",color:"#2563eb",emoji:"🎭",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Shakespeare.jpg?width=800",
  resume:"Le plus grand dramaturge de langue anglaise : Hamlet, Roméo et Juliette, Macbeth, le Roi Lear...",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Shakespeare.jpg?width=800" alt="William Shakespeare" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Le portrait Chandos, présumé de Shakespeare</p></div>
  <p><strong>William Shakespeare</strong>, dramaturge et poète anglais de l'époque élisabéthaine, a écrit environ 38 pièces et 154 sonnets. Tragédies, comédies, drames historiques : il explore toute la gamme des passions humaines avec une profondeur inégalée.</p>
  <p>Son génie de la langue (il aurait forgé des centaines de mots) et de la psychologie a marqué tout le théâtre mondial. <em>Hamlet</em>, <em>Macbeth</em>, <em>Othello</em>, <em>Roméo et Juliette</em> sont joués partout, sans cesse réinterprétés.</p>
  <div class="anec-box"><div class="anec-label">« To be, or not to be »</div><p>La tirade d'Hamlet est sans doute la réplique la plus célèbre de toute la littérature. Shakespeare reste l'auteur le plus joué et le plus traduit au monde.</p></div>`},

 {nom:"Miguel de Cervantès",dates:"1547 – 1616",role:"Père du roman moderne",cat:"classique",catLabel:"🛡️ Classique",color:"#2563eb",emoji:"🛡️",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Cervantes_J%C3%A1uregui.jpg?width=800",
  resume:"Auteur de Don Quichotte, souvent considéré comme le premier roman moderne et l'un des sommets de la littérature.",
  detail:`<p><strong>Miguel de Cervantès</strong>, écrivain espagnol du Siècle d'or, publie <strong>Don Quichotte</strong> en deux parties (1605 et 1615). Un hidalgo, ayant trop lu de romans de chevalerie, perd la raison et part redresser les torts du monde, accompagné du paysan Sancho Panza.</p>
  <p>Mêlant comédie, satire et profondeur humaine, l'œuvre invente la modernité romanesque : un héros complexe, une ironie permanente, un jeu vertigineux entre fiction et réalité.</p>
  <div class="anec-box"><div class="anec-label">Se battre contre des moulins</div><p>L'épisode où Don Quichotte charge des moulins à vent qu'il prend pour des géants est devenu une expression universelle pour désigner un combat illusoire.</p></div>`},

 {nom:"Molière",dates:"1622 – 1673",role:"Maître de la comédie française",cat:"classique",catLabel:"🎭 Classique",color:"#2563eb",emoji:"🎭",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Moli%C3%A8re_-_Nicolas_Mignard_(1658).jpg?width=800",
  resume:"Comédien et auteur, il porte la comédie au rang d'art majeur en peignant les travers de son époque.",
  detail:`<p><strong>Molière</strong> (Jean-Baptiste Poquelin) est le plus grand auteur comique français. Sous Louis XIV, il transforme la comédie, jugée mineure, en un art qui peint les vices et les ridicules humains avec une justesse intemporelle.</p>
  <p>L'avare, l'hypocrite, le faux dévot, le malade imaginaire, le bourgeois prétentieux : ses personnages sont devenus des types universels. Il fut aussi un acteur et un chef de troupe.</p>
  <ul class="fact-list">
    <li>Chefs-d'œuvre : <em>Le Misanthrope</em>, <em>Tartuffe</em>, <em>L'Avare</em>, <em>Le Malade imaginaire</em></li>
    <li><em>Tartuffe</em> fut interdit plusieurs années sous la pression des dévots</li>
  </ul>
  <div class="anec-box"><div class="anec-label">Mort sur scène</div><p>Molière s'effondra en jouant... <em>Le Malade imaginaire</em>, et mourut quelques heures plus tard. La langue française est encore surnommée « la langue de Molière ».</p></div>`},

 {nom:"Voltaire",dates:"1694 – 1778",role:"Philosophe des Lumières",cat:"classique",catLabel:"💡 Classique",color:"#2563eb",emoji:"💡",img:"",
  resume:"Écrivain et philosophe, champion de la tolérance et de la raison, figure emblématique des Lumières.",
  detail:`<p><strong>Voltaire</strong> (François-Marie Arouet) incarne l'esprit des <strong>Lumières</strong> : ironie mordante, combat pour la <strong>tolérance</strong>, la justice et la liberté de pensée, lutte contre le fanatisme religieux (« Écrasons l'infâme »).</p>
  <p>Touche-à-tout prolifique (théâtre, contes, histoire, correspondance), il est surtout célèbre pour ses <strong>contes philosophiques</strong> comme <em>Candide</em>, satire féroce de l'optimisme béat (« Il faut cultiver notre jardin »).</p>
  <div class="anec-box"><div class="anec-label">L'affaire Calas</div><p>Voltaire mena campagne pour réhabiliter Jean Calas, protestant injustement exécuté, faisant du combat judiciaire une cause publique : un des premiers grands engagements d'un intellectuel.</p></div>`},

 {nom:"Jean-Jacques Rousseau",dates:"1712 – 1778",role:"Philosophe et écrivain genevois",cat:"classique",catLabel:"💡 Classique",color:"#2563eb",emoji:"🌳",img:"",
  resume:"Penseur du contrat social et de l'éducation, précurseur du romantisme par sa célébration de la nature et du sentiment.",
  detail:`<p><strong>Rousseau</strong>, né à Genève, est l'un des esprits les plus influents des Lumières, mais aussi leur contestataire. Pour lui, l'homme est naturellement bon et c'est la société qui le corrompt.</p>
  <p>Dans <em>Du contrat social</em> (« L'homme est né libre, et partout il est dans les fers »), il fonde une théorie de la souveraineté du peuple qui inspirera la Révolution. <em>Émile</em> révolutionne la pédagogie ; <em>Les Confessions</em> inventent l'autobiographie moderne.</p>
  <div class="anec-box"><div class="anec-label">Père du romantisme</div><p>Par son culte de la nature, du sentiment et du moi, Rousseau annonce le romantisme qui dominera le siècle suivant.</p></div>`},

 {nom:"Johann Wolfgang von Goethe",dates:"1749 – 1832",role:"Géant des lettres allemandes",cat:"classique",catLabel:"📖 Classique",color:"#2563eb",emoji:"📖",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Goethe_(Stieler_1828).jpg?width=800",
  resume:"Poète, romancier et savant, auteur de Faust, il domine la littérature allemande comme nul autre.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Goethe_(Stieler_1828).jpg?width=800" alt="Goethe par Stieler" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Goethe peint par Joseph Karl Stieler (1828)</p></div>
  <p><strong>Goethe</strong> est à l'Allemagne ce que Shakespeare est à l'Angleterre. Poète, dramaturge, romancier, mais aussi botaniste et homme d'État, il incarne l'idéal de l'esprit universel.</p>
  <p>Son roman <em>Les Souffrances du jeune Werther</em> déclencha une vague romantique dans toute l'Europe. Son chef-d'œuvre, <strong>Faust</strong>, écrit sur soixante ans, met en scène le savant qui vend son âme au diable en quête de connaissance absolue.</p>`},

 {nom:"Victor Hugo",dates:"1802 – 1885",role:"Géant du romantisme français",cat:"xixe",catLabel:"🔥 XIXᵉ",color:"#0ea5e9",emoji:"🔥",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg?width=800",
  resume:"Poète, romancier et dramaturge, monument de la littérature française et conscience politique de son siècle.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg?width=800" alt="Victor Hugo" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Victor Hugo photographié par Étienne Carjat (1876)</p></div>
  <p><strong>Victor Hugo</strong> domine le XIXe siècle français par l'ampleur de son œuvre et de son engagement. Chef de file du <strong>romantisme</strong>, il est tour à tour poète, dramaturge et romancier.</p>
  <p>Ses romans <strong>Notre-Dame de Paris</strong> et surtout <strong>Les Misérables</strong> mêlent fresque sociale, souffle épique et combat pour les opprimés. Opposant à Napoléon III, il s'exila près de vingt ans.</p>
  <div class="anec-box"><div class="anec-label">Funérailles nationales</div><p>À sa mort, près de deux millions de personnes suivirent son cortège jusqu'au Panthéon. Peu d'écrivains ont incarné à ce point la conscience d'une nation.</p></div>`},

 {nom:"Honoré de Balzac",dates:"1799 – 1850",role:"Architecte de La Comédie humaine",cat:"xixe",catLabel:"🏙️ XIXᵉ",color:"#0ea5e9",emoji:"🏙️",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Honor%C3%A9_de_Balzac_(1842).jpg?width=800",
  resume:"Il bâtit une fresque de près de 100 romans, La Comédie humaine, peignant toute la société française de son temps.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Honor%C3%A9_de_Balzac_(1842).jpg?width=800" alt="Honoré de Balzac" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Honoré de Balzac (daguerréotype, 1842)</p></div>
  <p><strong>Balzac</strong> est le maître du roman réaliste français. Son projet titanesque, <strong>La Comédie humaine</strong>, réunit près de cent romans et plus de deux mille personnages qui reviennent d'un livre à l'autre, formant un portrait total de la société post-révolutionnaire.</p>
  <p>L'argent, l'ambition, la passion et la province face à Paris : Balzac dissèque les ressorts sociaux avec une énergie démesurée. <em>Le Père Goriot</em>, <em>Eugénie Grandet</em>, <em>Illusions perdues</em> comptent parmi ses sommets.</p>
  <div class="anec-box"><div class="anec-label">Cinquante mille cafés</div><p>Travailleur forcené, Balzac écrivait jusqu'à seize heures par jour, soutenu par d'innombrables cafés qui finirent par ruiner sa santé.</p></div>`},

 {nom:"Gustave Flaubert",dates:"1821 – 1880",role:"Orfèvre du style",cat:"xixe",catLabel:"✒️ XIXᵉ",color:"#0ea5e9",emoji:"✒️",img:"",
  resume:"Avec Madame Bovary, il porte le réalisme et l'art de la phrase à la perfection, au prix d'un travail acharné.",
  detail:`<p><strong>Flaubert</strong> incarne l'écrivain perfectionniste, obsédé par le <strong>style</strong>. Il pouvait passer une semaine sur une seule page, lisant ses phrases à voix haute (le « gueuloir ») pour en éprouver la musique.</p>
  <p>Son chef-d'œuvre, <strong>Madame Bovary</strong> (1857), peint l'ennui et les illusions romanesques d'une femme de province. Le roman fit scandale et valut à Flaubert un procès pour « outrage à la morale », dont il sortit acquitté.</p>
  <div class="anec-box"><div class="anec-label">« Madame Bovary, c'est moi »</div><p>La formule prêtée à Flaubert résume sa méthode : une distance ironique, mais une empathie profonde pour ses personnages médiocres.</p></div>`},

 {nom:"Charles Baudelaire",dates:"1821 – 1867",role:"Poète de la modernité",cat:"xixe",catLabel:"🖤 XIXᵉ",color:"#0ea5e9",emoji:"🖤",img:"https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89tienne_Carjat,_Portrait_of_Charles_Baudelaire,_circa_1862.jpg?width=800",
  resume:"Avec Les Fleurs du mal, il invente la poésie moderne en mêlant beauté, spleen, ville et transgression.",
  detail:`<p><strong>Baudelaire</strong> est le poète qui fait entrer la poésie dans la modernité. Son recueil <strong>Les Fleurs du mal</strong> (1857) explore la beauté dans le mal, l'ennui (le « spleen »), la ville, la sensualité et la mort.</p>
  <p>Publié la même année que Madame Bovary, il fut lui aussi poursuivi en justice et six poèmes furent censurés. Baudelaire fut aussi un critique d'art lucide et le traducteur d'Edgar Poe.</p>
  <div class="anec-box"><div class="anec-label">Spleen et idéal</div><p>Tout Baudelaire tient dans cette tension : l'aspiration à l'idéal et la chute dans le « spleen », ce dégoût mélancolique du monde.</p></div>`},

 {nom:"Fiodor Dostoïevski",dates:"1821 – 1881",role:"Explorateur de l'âme humaine",cat:"xixe",catLabel:"🕯️ XIXᵉ",color:"#0ea5e9",emoji:"🕯️",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Dostoevsky_1872.jpg?width=800",
  resume:"Romancier russe des abîmes de la conscience : Crime et Châtiment, Les Frères Karamazov, L'Idiot.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Dostoevsky_1872.jpg?width=800" alt="Dostoïevski" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Fiodor Dostoïevski (portrait de Vassili Perov, 1872)</p></div>
  <p><strong>Dostoïevski</strong> sonde comme nul autre les profondeurs et les contradictions de l'âme humaine : culpabilité, foi, liberté, mal, rédemption. Ses romans sont des drames d'idées portés par des personnages incandescents.</p>
  <p><strong>Crime et Châtiment</strong> suit un étudiant meurtrier rongé par sa conscience ; <strong>Les Frères Karamazov</strong> affronte les plus grandes questions sur Dieu et le mal. Son œuvre a nourri toute la pensée existentialiste et psychanalytique.</p>
  <div class="anec-box"><div class="anec-label">Condamné à mort puis gracié</div><p>En 1849, Dostoïevski fut conduit au peloton d'exécution, gracié à la dernière seconde, puis envoyé au bagne en Sibérie. Cette expérience marqua à jamais son œuvre.</p></div>`},

 {nom:"Léon Tolstoï",dates:"1828 – 1910",role:"Maître du roman-fleuve russe",cat:"xixe",catLabel:"📚 XIXᵉ",color:"#0ea5e9",emoji:"📚",img:"https://commons.wikimedia.org/wiki/Special:FilePath/L.N.Tolstoy_Prokudin-Gorsky.jpg?width=800",
  resume:"Auteur de Guerre et Paix et d'Anna Karénine, sommets du roman réaliste, et penseur de la non-violence.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/L.N.Tolstoy_Prokudin-Gorsky.jpg?width=800" alt="Léon Tolstoï" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Léon Tolstoï (photographie couleur de Prokoudine-Gorski, 1908)</p></div>
  <p><strong>Tolstoï</strong>, aristocrate russe, est l'auteur de deux des plus grands romans jamais écrits. <strong>Guerre et Paix</strong> embrasse la société russe pendant les guerres napoléoniennes ; <strong>Anna Karénine</strong> mêle passion tragique et fresque sociale.</p>
  <p>Dans sa seconde vie, Tolstoï devint un penseur moral et religieux, prônant la simplicité, le pacifisme et la <strong>non-violence</strong>, une doctrine qui influença directement Gandhi.</p>`},

 {nom:"Émile Zola",dates:"1840 – 1902",role:"Chef de file du naturalisme",cat:"xixe",catLabel:"⛏️ XIXᵉ",color:"#0ea5e9",emoji:"⛏️",img:"",
  resume:"Avec la fresque des Rougon-Macquart, il applique au roman une méthode quasi scientifique et défend Dreyfus.",
  detail:`<p><strong>Zola</strong> fonde le <strong>naturalisme</strong> : le roman doit observer la société comme un savant, en montrant l'influence du milieu et de l'hérédité. Sa fresque <strong>Les Rougon-Macquart</strong> (20 romans) suit une famille sous le Second Empire.</p>
  <p><em>Germinal</em> (la grève des mineurs), <em>L'Assommoir</em> (l'alcoolisme ouvrier), <em>Au Bonheur des Dames</em> (les grands magasins) peignent sans fard le monde du travail et de la misère.</p>
  <div class="anec-box"><div class="anec-label">« J'accuse… ! »</div><p>En 1898, Zola publie une lettre ouverte retentissante pour défendre le capitaine Dreyfus, injustement condamné. Cet acte fonde la figure moderne de l'intellectuel engagé.</p></div>`},

 {nom:"Marcel Proust",dates:"1871 – 1922",role:"Explorateur de la mémoire",cat:"moderne",catLabel:"🫖 XXᵉ",color:"#3b82f6",emoji:"🫖",img:"",
  resume:"Son immense roman À la recherche du temps perdu explore la mémoire, le temps et la société avec une finesse inégalée.",
  detail:`<p><strong>Marcel Proust</strong> consacra les dernières années de sa vie, reclus dans une chambre tapissée de liège, à écrire <strong>À la recherche du temps perdu</strong>, roman-cathédrale de sept tomes et plus de trois mille pages.</p>
  <p>Il y explore le <strong>temps</strong>, la <strong>mémoire involontaire</strong>, l'amour, la jalousie et la société mondaine, dans des phrases longues et sinueuses devenues légendaires. C'est l'un des sommets du roman du XXe siècle.</p>
  <div class="anec-box"><div class="anec-label">La madeleine</div><p>Le goût d'une madeleine trempée dans le thé fait resurgir tout un pan d'enfance : cet épisode est devenu le symbole universel de la mémoire involontaire.</p></div>`},

 {nom:"Franz Kafka",dates:"1883 – 1924",role:"Prophète de l'absurde moderne",cat:"moderne",catLabel:"🪲 XXᵉ",color:"#3b82f6",emoji:"🪲",img:"",
  resume:"Ses récits angoissants (La Métamorphose, Le Procès) annoncent l'absurde et l'aliénation du monde moderne.",
  detail:`<p><strong>Franz Kafka</strong>, écrivain pragois de langue allemande, a créé un univers si singulier qu'un adjectif en est né : « kafkaïen », pour désigner l'absurde des bureaucraties et l'angoisse face à un pouvoir incompréhensible.</p>
  <p>Dans <em>La Métamorphose</em>, un homme se réveille transformé en insecte ; dans <em>Le Procès</em>, un autre est arrêté et jugé sans jamais connaître son crime. Une œuvre prophétique sur l'aliénation du XXe siècle.</p>
  <div class="anec-box"><div class="anec-label">Sauvé du feu</div><p>Kafka, qui ne publia presque rien, demanda à son ami Max Brod de brûler tous ses manuscrits. Brod désobéit, et sauva ainsi quelques-uns des textes majeurs du siècle.</p></div>`},

 {nom:"Albert Camus",dates:"1913 – 1960",role:"Penseur de l'absurde et de la révolte",cat:"moderne",catLabel:"🌞 XXᵉ",color:"#3b82f6",emoji:"🌞",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Albert_Camus,_gagnant_de_prix_Nobel,_portrait_en_buste,_pos%C3%A9_au_bureau,_faisant_face_%C3%A0_gauche,_cigarette_de_tabagisme.jpg?width=800",
  resume:"L'Étranger, La Peste : prix Nobel, il interroge l'absurde de la condition humaine et la dignité de la révolte.",
  detail:`<p><strong>Albert Camus</strong>, né dans une famille pauvre d'Algérie, devient l'un des écrivains français majeurs du XXe siècle. Il développe la philosophie de l'<strong>absurde</strong> : la vie n'a pas de sens donné, mais l'homme peut y répondre par la lucidité et la <strong>révolte</strong>.</p>
  <p><strong>L'Étranger</strong> et l'essai <em>Le Mythe de Sisyphe</em> exposent cette pensée ; <strong>La Peste</strong> en tire une morale de solidarité. Camus reçut le prix Nobel de littérature en 1957.</p>
  <div class="anec-box"><div class="anec-label">Une mort absurde</div><p>Camus mourut à 46 ans dans un accident de voiture, un billet de train inutilisé en poche. Une fin tragiquement absurde pour le penseur de l'absurde.</p></div>`},

 {nom:"George Orwell",dates:"1903 – 1950",role:"Critique du totalitarisme",cat:"moderne",catLabel:"👁️ XXᵉ",color:"#3b82f6",emoji:"👁️",img:"https://commons.wikimedia.org/wiki/Special:FilePath/George_Orwell_press_photo.jpg?width=800",
  resume:"1984 et La Ferme des animaux : deux fables devenues les plus puissantes critiques du totalitarisme.",
  detail:`<p><strong>George Orwell</strong> (Eric Blair), écrivain et journaliste britannique, a mis sa plume au service de la lutte contre l'injustice et le totalitarisme, qu'il soit de droite ou de gauche.</p>
  <p><strong>La Ferme des animaux</strong> est une fable satirique sur la trahison des révolutions ; <strong>1984</strong> dépeint un État de surveillance totale qui contrôle jusqu'aux pensées. Son influence sur notre langage politique est immense.</p>
  <div class="anec-box"><div class="anec-label">Big Brother</div><p>« Big Brother », « novlangue », « orwellien » : peu d'auteurs ont à ce point façonné le vocabulaire avec lequel nous pensons la liberté et la surveillance.</p></div>`},

 {nom:"Gabriel García Márquez",dates:"1927 – 2014",role:"Maître du réalisme magique",cat:"moderne",catLabel:"🦋 XXᵉ",color:"#3b82f6",emoji:"🦋",img:"",
  resume:"Cent ans de solitude : prix Nobel colombien, il mêle le quotidien et le merveilleux dans une fresque inoubliable.",
  detail:`<p><strong>Gabriel García Márquez</strong>, écrivain colombien, est la figure majeure du <strong>réalisme magique</strong>, où le merveilleux surgit naturellement au cœur du quotidien, sans jamais étonner les personnages.</p>
  <p>Son chef-d'œuvre, <strong>Cent ans de solitude</strong>, raconte sur plusieurs générations la saga de la famille Buendía dans le village imaginaire de Macondo. Le livre est devenu un emblème de toute la littérature latino-américaine.</p>
  <div class="anec-box"><div class="anec-label">Le « boom » latino-américain</div><p>Avec Borges, Cortázar ou Vargas Llosa, García Márquez fit connaître au monde entier la vitalité de la littérature d'Amérique latine. Il reçut le Nobel en 1982.</p></div>`},
{nom:"Jane Austen",dates:"1775 – 1817",role:"Romancière anglaise",cat:"xixe",catLabel:"📖 XIXᵉ",color:"#0ea5e9",emoji:"📖",img:"",
  resume:"Avec finesse et ironie, elle peint la société anglaise et invente le roman psychologique moderne.",
  detail:`<p><strong>Jane Austen</strong> dépeint avec une ironie mordante la vie de la petite noblesse anglaise de son temps, où mariage et argent commandent les destins, surtout ceux des femmes.</p>
  <p>Sous une apparente légèreté, <em>Orgueil et Préjugés</em>, <em>Raison et Sentiments</em> ou <em>Emma</em> offrent une analyse psychologique et sociale d'une rare acuité. Longtemps sous-estimée, elle est aujourd'hui une autrice majeure de la littérature mondiale.</p>`},
 {nom:"Charles Dickens",dates:"1812 – 1870",role:"Peintre de l'Angleterre victorienne",cat:"xixe",catLabel:"🎩 XIXᵉ",color:"#0ea5e9",emoji:"🎩",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Dickens_Gurney_head.jpg?width=800",
  resume:"Ses romans populaires dénoncent la misère sociale de l'Angleterre industrielle avec verve et émotion.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Dickens_Gurney_head.jpg?width=800" alt="Charles Dickens" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Charles Dickens</p></div>
  <p><strong>Charles Dickens</strong> est le grand romancier de l'Angleterre victorienne. Publiés en feuilletons, ses romans connaissent un immense succès populaire.</p>
  <p>Il y mêle personnages inoubliables, humour et critique sociale féroce de la misère, du travail des enfants et des injustices. <em>Oliver Twist</em>, <em>David Copperfield</em>, <em>Un conte de Noël</em> sont parmi ses titres les plus célèbres.</p>`},
 {nom:"Jules Verne",dates:"1828 – 1905",role:"Père de la science-fiction",cat:"xixe",catLabel:"🚀 XIXᵉ",color:"#0ea5e9",emoji:"🚀",img:"",
  resume:"Ses Voyages extraordinaires ont fait rêver des générations et anticipé sous-marins, fusées et voyages spatiaux.",
  detail:`<p><strong>Jules Verne</strong>, écrivain français, est l'un des fondateurs de la science-fiction. Sa série des <em>Voyages extraordinaires</em> conjugue aventure, géographie et anticipation scientifique.</p>
  <p><em>Vingt mille lieues sous les mers</em>, <em>De la Terre à la Lune</em>, <em>Le Tour du monde en quatre-vingts jours</em> ont fait rêver le monde entier et préfiguré le sous-marin, la fusée ou l'exploration spatiale. C'est l'un des auteurs les plus traduits de l'histoire.</p>`},
 {nom:"Arthur Rimbaud",dates:"1854 – 1891",role:"Poète prodige et météore",cat:"xixe",catLabel:"💫 XIXᵉ",color:"#0ea5e9",emoji:"💫",img:"",
  resume:"Génie précoce, il révolutionne la poésie avant d'y renoncer à vingt ans pour une vie d'aventures.",
  detail:`<p><strong>Arthur Rimbaud</strong> est un phénomène unique : il écrit toute son œuvre poétique entre 16 et 20 ans, puis abandonne définitivement la littérature pour mener une vie errante de négociant en Afrique.</p>
  <p>Avec <em>Le Bateau ivre</em>, <em>Une saison en enfer</em> et les <em>Illuminations</em>, il bouleverse la poésie par ses images visionnaires et son appel à se faire « voyant ». Son influence sur la poésie moderne est immense.</p>`},
 {nom:"Virginia Woolf",dates:"1882 – 1941",role:"Pionnière du roman moderne",cat:"moderne",catLabel:"🌊 XXᵉ",color:"#3b82f6",emoji:"🌊",img:"",
  resume:"Elle explore le flux de la conscience et la condition féminine, figure majeure du modernisme littéraire.",
  detail:`<p><strong>Virginia Woolf</strong>, écrivaine britannique au cœur du cercle de Bloomsbury, est une grande innovatrice du roman du XXe siècle. Elle développe le <strong>monologue intérieur</strong> et le « courant de conscience » pour saisir la vie mentale de ses personnages.</p>
  <p><em>Mrs Dalloway</em>, <em>La Promenade au phare</em> en sont les sommets. Son essai <em>Une chambre à soi</em> est un texte fondateur de la réflexion féministe sur la création.</p>`},
 {nom:"Ernest Hemingway",dates:"1899 – 1961",role:"Maître du style épuré",cat:"moderne",catLabel:"🎣 XXᵉ",color:"#3b82f6",emoji:"🎣",img:"",
  resume:"Prix Nobel américain, il impose un style sec et direct qui a transformé la prose du XXe siècle.",
  detail:`<p><strong>Ernest Hemingway</strong>, romancier et reporter américain, a forgé un style d'une sobriété révolutionnaire : phrases courtes, dialogues nets, émotion suggérée plutôt qu'exprimée (la « théorie de l'iceberg »).</p>
  <p>Marqué par les guerres et l'aventure, il écrit <em>L'Adieu aux armes</em>, <em>Pour qui sonne le glas</em> et <em>Le Vieil Homme et la Mer</em>, qui lui vaut le prix Nobel en 1954.</p>`}
];
