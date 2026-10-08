// ART — grands courants artistiques. cat: medieval, renaissance, baroque, xixe, moderne
const artData=[
 {nom:"Art roman",dates:"Xe – XIIe siècle",role:"Architecture et sculpture médiévales",cat:"medieval",catLabel:"🏛️ Médiéval",color:"#475f8a",emoji:"🏛️",img:"",
  resume:"Le premier grand style de l'Occident chrétien : murs épais, voûtes en berceau, pénombre et sculptures expressives.",
  detail:`<p>L'<strong>art roman</strong> s'épanouit dans l'Europe chrétienne entre le Xe et le XIIe siècle, porté par l'essor des monastères (Cluny) et des pèlerinages (Saint-Jacques-de-Compostelle). C'est le premier style commun à tout l'Occident depuis la chute de Rome.</p>
  <p>Son architecture privilégie la <strong>solidité</strong> : murs épais, contreforts massifs, petites ouvertures, voûtes en berceau ou d'arêtes. L'intérieur, plongé dans la pénombre, invite au recueillement. La sculpture, concentrée sur les portails (tympans) et les chapiteaux, déforme volontairement les corps pour exprimer le sacré et l'effroi du Jugement dernier.</p>
  <ul class="fact-list">
    <li>Chefs-d'œuvre : abbatiales de <strong>Conques</strong>, <strong>Vézelay</strong>, <strong>Saint-Sernin de Toulouse</strong></li>
    <li>La <strong>Tapisserie de Bayeux</strong> (broderie de 70 m) raconte la conquête de l'Angleterre en 1066</li>
    <li>Peinture surtout présente dans les <strong>fresques</strong> et les manuscrits enluminés</li>
  </ul>
  <div class="anec-box"><div class="anec-label">Pourquoi « roman » ?</div><p>Le mot fut inventé au XIXe siècle par analogie avec les langues « romanes » : on y voyait un art dérivé de l'architecture romaine (l'arc en plein cintre), comme le français dérive du latin.</p></div>`},

 {nom:"Art gothique",dates:"XIIe – XVe siècle",role:"Cathédrales de lumière",cat:"medieval",catLabel:"⛪ Médiéval",color:"#475f8a",emoji:"⛪",img:"",
  resume:"La révolution de la voûte sur croisée d'ogives permet d'élever des cathédrales immenses, baignées de lumière colorée.",
  detail:`<p>Né en Île-de-France vers 1140 (basilique de Saint-Denis), l'<strong>art gothique</strong> bouleverse la construction grâce à trois inventions combinées : la <strong>croisée d'ogives</strong>, l'<strong>arc brisé</strong> et l'<strong>arc-boutant</strong>. En reportant les poussées vers l'extérieur, ces techniques libèrent les murs, qui peuvent s'ouvrir en immenses <strong>vitraux</strong>.</p>
  <p>Les cathédrales s'élancent alors vers le ciel dans une quête de verticalité et de lumière, symbole de la présence divine. La sculpture se fait plus naturelle, les visages s'humanisent, les drapés s'assouplissent.</p>
  <ul class="fact-list">
    <li>Sommets : <strong>Notre-Dame de Paris</strong>, <strong>Chartres</strong>, <strong>Reims</strong>, <strong>Amiens</strong></li>
    <li>La rose de Chartres et la <strong>Sainte-Chapelle</strong> illustrent l'art du vitrail</li>
    <li>Le gothique tardif « flamboyant » multiplie les courbes et les dentelles de pierre</li>
  </ul>
  <div class="anec-box"><div class="anec-label">Une insulte devenue éloge</div><p>« Gothique » fut d'abord un terme de mépris employé à la Renaissance : on jugeait ce style « barbare », digne des Goths. Il fallut attendre le XIXe siècle romantique pour le réhabiliter.</p></div>`},

 {nom:"Renaissance",dates:"XVe – XVIe siècle",role:"Le retour de l'Antiquité et de l'homme",cat:"renaissance",catLabel:"🎨 Renaissance",color:"#24406b",emoji:"🎨",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg?width=800",
  resume:"Née à Florence, la Renaissance redécouvre l'Antiquité, invente la perspective et place l'homme au centre du monde.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg?width=800" alt="La Joconde, Léonard de Vinci" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">La Joconde de Léonard de Vinci, icône de la Renaissance</p></div>
  <p>La <strong>Renaissance</strong> naît à <strong>Florence</strong> au XVe siècle, financée par de riches mécènes comme les <strong>Médicis</strong>. Elle marque un retour aux idéaux de l'Antiquité gréco-romaine et l'avènement de l'<strong>humanisme</strong> : l'homme, sa raison et sa beauté deviennent le centre de l'art.</p>
  <p>Les artistes inventent la <strong>perspective linéaire</strong>, étudient l'anatomie, jouent du clair-obscur et du <em>sfumato</em>. Le peintre, jadis simple artisan, accède au rang de génie créateur.</p>
  <ul class="fact-list">
    <li><strong>Léonard de Vinci</strong> (La Joconde, La Cène), savant autant qu'artiste</li>
    <li><strong>Michel-Ange</strong> (plafond de la chapelle Sixtine, David)</li>
    <li><strong>Raphaël</strong> (L'École d'Athènes), <strong>Botticelli</strong> (La Naissance de Vénus)</li>
  </ul>
  <div class="anec-box"><div class="anec-label">L'homme universel</div><p>L'idéal de la Renaissance est l'<em>uomo universale</em>, capable d'exceller en tout : Léonard était à la fois peintre, ingénieur, anatomiste, musicien et inventeur.</p></div>`},

 {nom:"Maniérisme",dates:"v. 1520 – 1600",role:"L'élégance contournée",cat:"renaissance",catLabel:"🎨 Renaissance",color:"#24406b",emoji:"🌀",img:"",
  resume:"Après la perfection de la Renaissance, le maniérisme cultive l'artifice : corps allongés, poses tordues, couleurs irréelles.",
  detail:`<p>Le <strong>maniérisme</strong> apparaît en Italie vers 1520, après la mort de Raphaël. Estimant que la perfection avait été atteinte, les artistes cherchent à se distinguer par la <strong>virtuosité</strong> et l'élégance raffinée plutôt que par l'imitation de la nature.</p>
  <p>On y trouve des corps anormalement allongés, des poses instables et complexes (la <em>figura serpentinata</em>), des couleurs acides et des compositions déséquilibrées. C'est un art savant, parfois inquiet, qui annonce les tensions du Baroque.</p>
  <ul class="fact-list">
    <li><strong>Le Parmesan</strong> (La Madone au long cou)</li>
    <li><strong>Pontormo</strong>, <strong>Bronzino</strong>, <strong>Le Greco</strong> en Espagne</li>
    <li>Le terme vient de l'italien <em>maniera</em> : la « manière », le style personnel</li>
  </ul>`},

 {nom:"Baroque",dates:"v. 1600 – 1750",role:"Mouvement, théâtre et émotion",cat:"baroque",catLabel:"🎭 Baroque",color:"#2563eb",emoji:"🎭",img:"",
  resume:"Art du mouvement et de l'émotion, le baroque met en scène la lumière et le drame au service de l'Église et des rois.",
  detail:`<p>Le <strong>baroque</strong> naît à Rome vers 1600 dans le sillage de la Contre-Réforme catholique : face au protestantisme, l'Église veut émouvoir et convaincre par un art spectaculaire. Il devient aussi l'instrument des monarchies absolues.</p>
  <p>Tout y est <strong>mouvement</strong>, contraste et théâtralité : clair-obscur saisissant (le <em>ténébrisme</em>), diagonales dynamiques, drapés tourbillonnants, émotions exacerbées. La peinture, la sculpture et l'architecture se fondent en spectacles totaux.</p>
  <ul class="fact-list">
    <li><strong>Le Caravage</strong> révolutionne la lumière et le réalisme</li>
    <li><strong>Rubens</strong> (abondance et couleur), <strong>Rembrandt</strong> (clair-obscur intime)</li>
    <li><strong>Le Bernin</strong> en sculpture (L'Extase de sainte Thérèse)</li>
  </ul>
  <div class="anec-box"><div class="anec-label">Une perle irrégulière</div><p>Le mot vient du portugais <em>barroco</em>, qui désignait une perle de forme irrégulière. C'était au départ, là encore, une critique : on reprochait à ce style son excès et son irrégularité.</p></div>`},

 {nom:"Rococo",dates:"v. 1715 – 1770",role:"La légèreté et le plaisir",cat:"baroque",catLabel:"🌸 Baroque",color:"#2563eb",emoji:"🌸",img:"",
  resume:"Plus léger et frivole que le baroque, le rococo célèbre le plaisir, la galanterie et les courbes délicates.",
  detail:`<p>Le <strong>rococo</strong> se développe en France sous la Régence puis Louis XV, en réaction à la solennité du règne de Louis XIV. C'est un art de l'<strong>intimité aristocratique</strong>, des salons et des plaisirs raffinés.</p>
  <p>Couleurs pastel, courbes en volutes (coquillages, le mot vient de <em>rocaille</em>), scènes galantes et champêtres : tout respire la légèreté et la sensualité. Les sujets sérieux cèdent la place aux fêtes galantes et au marivaudage.</p>
  <ul class="fact-list">
    <li><strong>Watteau</strong> (Le Pèlerinage à Cythère), inventeur des « fêtes galantes »</li>
    <li><strong>Fragonard</strong> (Les Hasards heureux de l'escarpolette), <strong>Boucher</strong></li>
    <li>Style condamné après la Révolution comme symbole de la frivolité aristocratique</li>
  </ul>`},

 {nom:"Néoclassicisme",dates:"v. 1750 – 1830",role:"Le retour à la rigueur antique",cat:"xixe",catLabel:"🏛️ XIXᵉ",color:"#0ea5e9",emoji:"🏛️",img:"",
  resume:"En réaction au rococo, le néoclassicisme prône le retour à la pureté, à la vertu et à la grandeur de l'Antiquité.",
  detail:`<p>Le <strong>néoclassicisme</strong> émerge au milieu du XVIIIe siècle, stimulé par les fouilles de <strong>Pompéi</strong> et d'<strong>Herculanum</strong> et par les idéaux des Lumières. Il rejette la frivolité du rococo au profit de la rigueur, de la clarté et de la vertu civique.</p>
  <p>Lignes nettes, compositions équilibrées, sujets héroïques tirés de l'histoire antique : l'art se veut moral et exemplaire. Il devient l'esthétique officielle de la Révolution française puis de l'Empire napoléonien.</p>
  <ul class="fact-list">
    <li><strong>Jacques-Louis David</strong> (Le Serment des Horaces, Le Sacre de Napoléon)</li>
    <li><strong>Ingres</strong>, maître du dessin et de la ligne pure</li>
    <li><strong>Canova</strong> en sculpture</li>
  </ul>`},

 {nom:"Romantisme",dates:"v. 1800 – 1850",role:"La passion contre la raison",cat:"xixe",catLabel:"🔥 XIXᵉ",color:"#0ea5e9",emoji:"🔥",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg?width=800",
  resume:"Le romantisme exalte l'émotion, la nature sublime, la liberté et l'individu contre la froide raison néoclassique.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg?width=800" alt="La Liberté guidant le peuple, Delacroix" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">La Liberté guidant le peuple, Eugène Delacroix (1830)</p></div>
  <p>Le <strong>romantisme</strong> est une révolte de la sensibilité contre la raison des Lumières et la rigidité néoclassique. Il place au premier plan l'<strong>émotion</strong>, l'imagination, la passion et la liberté de l'individu.</p>
  <p>Les peintres recherchent le <strong>sublime</strong> : tempêtes, naufrages, ruines, nature grandiose et terrifiante. La couleur et le mouvement l'emportent sur la ligne. L'art s'engage aussi dans l'actualité et la politique.</p>
  <ul class="fact-list">
    <li><strong>Delacroix</strong> (La Liberté guidant le peuple), chef de file</li>
    <li><strong>Géricault</strong> (Le Radeau de la Méduse)</li>
    <li><strong>Caspar David Friedrich</strong> (Le Voyageur), <strong>Turner</strong> (lumière et tempêtes)</li>
  </ul>`},

 {nom:"Réalisme",dates:"v. 1840 – 1880",role:"Peindre la vie ordinaire",cat:"xixe",catLabel:"🌾 XIXᵉ",color:"#0ea5e9",emoji:"🌾",img:"",
  resume:"Le réalisme tourne le dos aux héros et aux dieux pour peindre les paysans, les ouvriers et la vie quotidienne.",
  detail:`<p>Le <strong>réalisme</strong> s'affirme vers 1850, en pleine révolution industrielle. Refusant l'idéalisation romantique comme l'académisme, il veut peindre le monde tel qu'il est : les <strong>gens ordinaires</strong>, le travail, la pauvreté, sans embellissement.</p>
  <p>C'est un art souvent social et politique, qui donne une dignité nouvelle aux humbles. Il prépare la voie à l'impressionnisme par son attention au monde contemporain.</p>
  <ul class="fact-list">
    <li><strong>Gustave Courbet</strong> (Un enterrement à Ornans, Les Casseurs de pierres)</li>
    <li><strong>Jean-François Millet</strong> (Les Glaneuses, L'Angélus)</li>
    <li><strong>Honoré Daumier</strong>, caricaturiste et peintre du peuple</li>
  </ul>
  <div class="anec-box"><div class="anec-label">Un scandale</div><p>Courbet provoqua en peignant des paysans grandeur nature, à l'échelle réservée jusque-là aux rois et aux saints : une audace jugée révolutionnaire.</p></div>`},

 {nom:"Impressionnisme",dates:"1874 – v. 1890",role:"La lumière saisie sur le vif",cat:"xixe",catLabel:"☀️ XIXᵉ",color:"#0ea5e9",emoji:"☀️",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Claude_Monet,_Impression,_soleil_levant.jpg?width=800",
  resume:"Les impressionnistes quittent l'atelier pour peindre en plein air la lumière changeante, par touches rapides et colorées.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Claude_Monet,_Impression,_soleil_levant.jpg?width=800" alt="Impression, soleil levant, Monet" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Impression, soleil levant de Claude Monet, qui a donné son nom au mouvement</p></div>
  <p>L'<strong>impressionnisme</strong> éclate à Paris en 1874, quand un groupe de peintres refusés par le Salon officiel organise sa propre exposition. La critique se moque d'un tableau de Monet, <em>Impression, soleil levant</em> : le nom restera.</p>
  <p>Ces artistes peignent <strong>en plein air</strong>, vite, pour capter la lumière et l'instant. Touches fragmentées, ombres colorées, sujets modernes (gares, guinguettes, bords de Seine) : ils renoncent au fini léché de l'académie au profit de la sensation.</p>
  <ul class="fact-list">
    <li><strong>Claude Monet</strong> (Les Nymphéas, la série des Cathédrales)</li>
    <li><strong>Renoir</strong>, <strong>Degas</strong>, <strong>Pissarro</strong>, <strong>Berthe Morisot</strong></li>
    <li>Rendu possible par la peinture en tube, qui libère le peintre de l'atelier</li>
  </ul>`},

 {nom:"Post-impressionnisme",dates:"v. 1885 – 1905",role:"Au-delà de l'impression",cat:"xixe",catLabel:"🌌 XIXᵉ",color:"#0ea5e9",emoji:"🌌",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg?width=800",
  resume:"Van Gogh, Cézanne, Gauguin : chacun dépasse l'impressionnisme vers l'expression, la structure ou le symbole.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg?width=800" alt="La Nuit étoilée, Van Gogh" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">La Nuit étoilée de Vincent van Gogh (1889)</p></div>
  <p>Le <strong>post-impressionnisme</strong> regroupe des artistes qui, vers 1885, prolongent l'impressionnisme tout en le dépassant. Ils ne se contentent plus de capter la lumière : ils veulent exprimer des <strong>émotions</strong>, construire l'espace ou suggérer des idées.</p>
  <p>Chacun ouvre une voie : la couleur expressive et tourmentée de Van Gogh, la géométrie de Cézanne (« père de l'art moderne »), le symbolisme coloré de Gauguin. Ils annoncent le fauvisme et le cubisme.</p>
  <ul class="fact-list">
    <li><strong>Vincent van Gogh</strong> (La Nuit étoilée, Les Tournesols)</li>
    <li><strong>Paul Cézanne</strong> (La Montagne Sainte-Victoire)</li>
    <li><strong>Paul Gauguin</strong> (Tahiti), <strong>Seurat</strong> (le pointillisme)</li>
  </ul>
  <div class="anec-box"><div class="anec-label">Incompris de son vivant</div><p>Van Gogh n'a vendu qu'un seul tableau de son vivant. Aujourd'hui, ses œuvres comptent parmi les plus chères jamais vendues aux enchères.</p></div>`},

 {nom:"Art nouveau",dates:"v. 1890 – 1910",role:"L'art total et la nature",cat:"moderne",catLabel:"🌿 Moderne",color:"#3b82f6",emoji:"🌿",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Gustav_Klimt_016.jpg?width=800",
  resume:"L'Art nouveau s'inspire de la nature, mêle courbes végétales et arabesques, et veut embellir tous les objets du quotidien.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Gustav_Klimt_016.jpg?width=800" alt="Le Baiser, Gustav Klimt" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Le Baiser de Gustav Klimt (1908), sommet de l'Art nouveau</p></div>
  <p>L'<strong>Art nouveau</strong> déferle sur l'Europe vers 1900. Refusant l'imitation des styles anciens, il invente un langage neuf inspiré de la <strong>nature</strong> : courbes végétales, fleurs, insectes, lignes fluides en « coup de fouet ».</p>
  <p>C'est un <strong>art total</strong> qui veut tout embellir : architecture, mobilier, bijoux, affiches, verrerie. Il abolit la frontière entre beaux-arts et arts décoratifs.</p>
  <ul class="fact-list">
    <li><strong>Gustav Klimt</strong> (Le Baiser) à Vienne</li>
    <li><strong>Antoni Gaudí</strong> (la Sagrada Família) à Barcelone</li>
    <li><strong>Hector Guimard</strong> (les entrées du métro parisien), <strong>Mucha</strong> (affiches)</li>
  </ul>`},

 {nom:"Cubisme",dates:"1907 – v. 1920",role:"Déconstruire la forme",cat:"moderne",catLabel:"🔷 Moderne",color:"#3b82f6",emoji:"🔷",img:"https://commons.wikimedia.org/wiki/Special:FilePath/Les_Demoiselles_d%27Avignon.jpg?width=800",
  resume:"Picasso et Braque éclatent l'objet en facettes géométriques et le montrent sous plusieurs angles à la fois.",
  detail:`<div class="modal-img-wrap"><img class="modal-img" src="https://commons.wikimedia.org/wiki/Special:FilePath/Les_Demoiselles_d%27Avignon.jpg?width=800" alt="Les Demoiselles d'Avignon, Picasso" onerror="this.parentElement.style.display='none'"><p class="modal-img-caption">Les Demoiselles d'Avignon de Picasso (1907), acte de naissance du cubisme</p></div>
  <p>Le <strong>cubisme</strong> naît en 1907 avec <em>Les Demoiselles d'Avignon</em> de <strong>Picasso</strong>. Avec <strong>Braque</strong>, il rompt radicalement avec la perspective classique vieille de cinq siècles.</p>
  <p>L'objet est <strong>décomposé en facettes géométriques</strong> et montré simultanément sous plusieurs angles, sur une surface plane qui assume sa platitude. C'est l'une des ruptures les plus décisives de tout l'art occidental.</p>
  <ul class="fact-list">
    <li><strong>Pablo Picasso</strong> et <strong>Georges Braque</strong>, les fondateurs</li>
    <li>Inspiration des arts africains et de Cézanne</li>
    <li>Les <em>papiers collés</em> inventent le collage en art</li>
  </ul>`},

 {nom:"Surréalisme",dates:"1924 – v. 1950",role:"Le rêve et l'inconscient",cat:"moderne",catLabel:"🌙 Moderne",color:"#3b82f6",emoji:"🌙",img:"",
  resume:"Inspiré par Freud, le surréalisme libère l'imaginaire, le rêve et l'inconscient des contraintes de la raison.",
  detail:`<p>Le <strong>surréalisme</strong> est lancé à Paris en 1924 par le <em>Manifeste</em> d'<strong>André Breton</strong>. Marqué par les découvertes de <strong>Freud</strong> sur l'inconscient et traumatisé par la Première Guerre mondiale, il veut libérer l'esprit de la logique et de la morale.</p>
  <p>Les artistes explorent le <strong>rêve</strong>, le hasard, l'écriture automatique et les associations inattendues. Images impossibles, objets détournés, paysages oniriques : le réel et l'imaginaire fusionnent.</p>
  <ul class="fact-list">
    <li><strong>Salvador Dalí</strong> (La Persistance de la mémoire, les montres molles)</li>
    <li><strong>René Magritte</strong> (Ceci n'est pas une pipe)</li>
    <li><strong>Joan Miró</strong>, <strong>Max Ernst</strong>, <strong>Frida Kahlo</strong> (proche du mouvement)</li>
  </ul>`},

 {nom:"Art contemporain",dates:"depuis 1945",role:"L'explosion des formes",cat:"moderne",catLabel:"⬛ Moderne",color:"#3b82f6",emoji:"⬛",img:"",
  resume:"Depuis 1945, l'art éclate en mille pratiques : abstraction, pop art, conceptuel, installations, performances, numérique.",
  detail:`<p>Après 1945, le centre de l'art se déplace de Paris à <strong>New York</strong> et l'art se fragmente en une multitude de courants. La question n'est plus « comment peindre ? » mais « qu'est-ce que l'art ? ».</p>
  <p>L'<strong>expressionnisme abstrait</strong> (Pollock) fait de la toile un champ d'action ; le <strong>pop art</strong> (Warhol) puise dans la consommation de masse ; l'<strong>art conceptuel</strong> privilégie l'idée sur l'objet ; installations, performances et art numérique élargissent sans cesse le territoire de l'art.</p>
  <ul class="fact-list">
    <li><strong>Jackson Pollock</strong> (dripping), <strong>Mark Rothko</strong> (champs de couleur)</li>
    <li><strong>Andy Warhol</strong> (Marilyn, boîtes de soupe Campbell)</li>
    <li><strong>Niki de Saint Phalle</strong>, <strong>Basquiat</strong>, <strong>Banksy</strong></li>
  </ul>
  <div class="anec-box"><div class="anec-label">L'art en question</div><p>En 1917, Marcel Duchamp exposait un urinoir signé « R. Mutt » sous le titre <em>Fontaine</em>. En décrétant qu'un objet devient art parce que l'artiste le désigne ainsi, il a ouvert tout l'art conceptuel du XXe siècle.</p></div>`},
{nom:"Fauvisme",dates:"1905 – 1910",role:"L'explosion de la couleur pure",cat:"moderne",catLabel:"🎨 Moderne",color:"#3b82f6",emoji:"🎨",img:"",
  resume:"Premier grand mouvement du XXe siècle : la couleur, vive et arbitraire, devient le sujet même du tableau.",
  detail:`<p>Le <strong>fauvisme</strong> éclate au Salon d'automne de 1905 à Paris, où un critique, choqué par la violence des couleurs, traite les peintres de « fauves ». Le nom reste.</p>
  <p>Ces artistes libèrent la <strong>couleur</strong> de toute fonction descriptive : un visage peut être vert, un ciel rouge. La couleur pure, posée en aplats, exprime l'émotion plus que le réel. Le mouvement fut bref mais ouvrit la voie à tout l'art moderne.</p>
  <ul class="fact-list"><li><strong>Henri Matisse</strong>, chef de file (La Danse, La Joie de vivre)</li><li><strong>André Derain</strong>, <strong>Maurice de Vlaminck</strong></li></ul>`},
 {nom:"Expressionnisme",dates:"v. 1905 – 1930",role:"L'angoisse mise en couleurs",cat:"moderne",catLabel:"😱 Moderne",color:"#3b82f6",emoji:"😱",img:"",
  resume:"Né en Allemagne, l'expressionnisme déforme le réel pour traduire l'angoisse et les émotions intérieures.",
  detail:`<p>L'<strong>expressionnisme</strong> se développe surtout dans les pays germaniques au début du XXe siècle. Loin de représenter le monde tel qu'il est, il le <strong>déforme</strong> pour exprimer les états d'âme : peur, solitude, désir, révolte.</p>
  <p>Couleurs heurtées, traits anguleux, perspectives faussées : la ville moderne et l'angoisse existentielle en sont les grands thèmes. Le précurseur en est le Norvégien <strong>Edvard Munch</strong> et son célèbre <em>Cri</em>.</p>
  <ul class="fact-list"><li>Groupes <strong>Die Brücke</strong> et <strong>Der Blaue Reiter</strong></li><li>Influence majeure sur le cinéma (Le Cabinet du docteur Caligari)</li></ul>`},
 {nom:"Pop art",dates:"v. 1955 – 1970",role:"L'art de la société de consommation",cat:"moderne",catLabel:"🥫 Moderne",color:"#3b82f6",emoji:"🥫",img:"",
  resume:"Le pop art puise dans la publicité, la BD et les objets de masse pour brouiller la frontière entre art et culture populaire.",
  detail:`<p>Le <strong>pop art</strong> naît dans les années 1950-60 en Grande-Bretagne puis aux États-Unis. Il s'empare des images de la <strong>culture de masse</strong> : publicités, emballages, bandes dessinées, stars de cinéma.</p>
  <p>En reproduisant une boîte de soupe ou un portrait de Marilyn en sérigraphie, il interroge avec ironie la société de consommation et la notion d'œuvre unique.</p>
  <ul class="fact-list"><li><strong>Andy Warhol</strong> (Campbell's Soup, Marilyn)</li><li><strong>Roy Lichtenstein</strong> (style bande dessinée)</li></ul>`}
];
