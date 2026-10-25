// QUIZ : theme, niveau (1-3), q, choix[4], r (index bonne réponse), exp, lien (titre de fiche)
const quizData=[
{
"theme": "france",
"niveau": 1,
"q": "En quelle année a eu lieu la prise de la Bastille ?",
"choix": [
"1789",
"1792",
"1776",
"1799"
],
"r": 0,
"exp": "La Bastille est prise le 14 juillet 1789. La fête nationale, instituée en 1880, commémore aussi la fête de la Fédération du 14 juillet 1790.",
"lien": "La Révolution française"
},
{
"theme": "france",
"niveau": 1,
"q": "Quel roi de France était surnommé le Roi-Soleil ?",
"choix": [
"Louis XIII",
"Louis XIV",
"Louis XV",
"Henri IV"
],
"r": 1,
"exp": "Louis XIV a régné 72 ans (1643-1715), le plus long règne de l'histoire de France. Il avait choisi le soleil comme emblème personnel.",
"lien": "Louis XIV"
},
{
"theme": "france",
"niveau": 1,
"q": "Quel chef gaulois a capitulé devant Jules César à Alésia en 52 av. J.-C. ?",
"choix": [
"Ambiorix",
"Brennus",
"Dumnorix",
"Vercingétorix"
],
"r": 3,
"exp": "Chef des Arvernes, Vercingétorix fut emmené prisonnier à Rome. Il y fut exécuté vers 46 av. J.-C., après le triomphe de César.",
"lien": "Vercingétorix"
},
{
"theme": "france",
"niveau": 1,
"q": "Napoléon Bonaparte était-il petit ?",
"choix": [
"Oui, il mesurait environ 1,52 m",
"Non, il mesurait environ 1,69 m, dans la moyenne de son époque",
"Oui, il mesurait environ 1,57 m",
"Non, il dépassait 1,85 m"
],
"r": 1,
"exp": "Sa taille de « 5 pieds 2 pouces » en mesures françaises a été confondue avec des pieds et pouces anglais, plus courts. Les caricatures britanniques et le surnom de « petit caporal » ont fait le reste.",
"lien": "Napoléon Bonaparte"
},
{
"theme": "france",
"niveau": 1,
"q": "Quel roi a signé l'édit de Nantes en 1598 ?",
"choix": [
"Louis XIII",
"Henri III",
"Henri IV",
"François Ier"
],
"r": 2,
"exp": "L'édit accorde aux protestants la liberté de conscience et des places de sûreté. Louis XIV le révoque en 1685 par l'édit de Fontainebleau.",
"lien": "Henri IV"
},
{
"theme": "france",
"niveau": 1,
"q": "Dans quelle ville Jeanne d'Arc a-t-elle été brûlée en 1431 ?",
"choix": [
"Orléans",
"Reims",
"Rouen",
"Paris"
],
"r": 2,
"exp": "Elle fut condamnée par un tribunal ecclésiastique présidé par l'évêque Pierre Cauchon. Réhabilitée en 1456, elle a été canonisée en 1920.",
"lien": "Jeanne d'Arc"
},
{
"theme": "france",
"niveau": 1,
"q": "Qui a lancé l'appel du 18 juin 1940 depuis Londres ?",
"choix": [
"Philippe Pétain",
"Jean Moulin",
"Charles de Gaulle",
"Paul Reynaud"
],
"r": 2,
"exp": "L'appel fut diffusé par la BBC mais peu entendu sur le moment. Aucun enregistrement n'en a été conservé : celui que l'on connaît est le discours du 22 juin.",
"lien": "Charles de Gaulle"
},
{
"theme": "france",
"niveau": 1,
"q": "Quel roi des Francs a été baptisé à Reims par l'évêque Remi ?",
"choix": [
"Clovis",
"Charlemagne",
"Pépin le Bref",
"Dagobert Ier"
],
"r": 0,
"exp": "La date exacte de ce baptême reste incertaine, entre 496 et 508. Ce choix du catholicisme lui assure l'appui de l'Église et de l'aristocratie gallo-romaine.",
"lien": "Clovis Ier"
},
{
"theme": "france",
"niveau": 1,
"q": "En quelle année Charlemagne a-t-il été couronné empereur à Rome ?",
"choix": [
"800",
"768",
"814",
"843"
],
"r": 0,
"exp": "Il est couronné le jour de Noël 800 par le pape Léon III. 768 est l'année où il devient roi, 814 celle de sa mort.",
"lien": "Charlemagne"
},
{
"theme": "france",
"niveau": 1,
"q": "À quelle victoire de 1515 le nom de François Ier est-il associé ?",
"choix": [
"Marignan",
"Pavie",
"Azincourt",
"Fontenoy"
],
"r": 0,
"exp": "À Marignan, il bat les Suisses alliés du duc de Milan. Dix ans plus tard, il est vaincu et fait prisonnier à Pavie (1525).",
"lien": "François Ier"
},
{
"theme": "france",
"niveau": 1,
"q": "Quel roi de France a été guillotiné le 21 janvier 1793 ?",
"choix": [
"Louis XV",
"Louis XVIII",
"Louis XVI",
"Charles X"
],
"r": 2,
"exp": "Jugé par la Convention, il est exécuté place de la Révolution, l'actuelle place de la Concorde. Marie-Antoinette le sera en octobre 1793.",
"lien": "Louis XVI"
},
{
"theme": "france",
"niveau": 1,
"q": "À quelle date l'armistice met-il fin aux combats de la Première Guerre mondiale ?",
"choix": [
"8 mai 1918",
"28 juin 1919",
"14 juillet 1918",
"11 novembre 1918"
],
"r": 3,
"exp": "Il est signé dans un wagon à Rethondes, en forêt de Compiègne. Le traité de paix de Versailles n'est signé que le 28 juin 1919.",
"lien": "La Première Guerre mondiale"
},
{
"theme": "france",
"niveau": 2,
"q": "Quelle bataille de 1214 voit Philippe Auguste vaincre l'empereur Otton IV et ses alliés ?",
"choix": [
"Bouvines",
"Crécy",
"Poitiers",
"Castillon"
],
"r": 0,
"exp": "Cette victoire sur une coalition réunissant l'empereur, le comte de Flandre et des alliés de Jean sans Terre renforce considérablement le prestige de la monarchie capétienne.",
"lien": "Philippe II Auguste"
},
{
"theme": "france",
"niveau": 2,
"q": "Quel traité partage en 843 l'empire carolingien entre les petits-fils de Charlemagne ?",
"choix": [
"Le traité de Meerssen",
"Le traité d'Aix-la-Chapelle",
"Le traité de Troyes",
"Le traité de Verdun"
],
"r": 3,
"exp": "Charles le Chauve reçoit la Francie occidentale, Louis le Germanique la Francie orientale et Lothaire la Francie médiane. On y voit souvent l'ébauche de la France et de l'Allemagne.",
"lien": "Traité de Verdun"
},
{
"theme": "france",
"niveau": 2,
"q": "Combien de temps a réellement duré la guerre de Cent Ans ?",
"choix": [
"116 ans",
"100 ans",
"99 ans",
"132 ans"
],
"r": 0,
"exp": "Elle s'étend de 1337 à 1453, entrecoupée de longues trêves. Son nom ne lui a été donné qu'au XIXe siècle.",
"lien": "La Guerre de Cent Ans"
},
{
"theme": "france",
"niveau": 2,
"q": "Quel cardinal fut le principal ministre de Louis XIII ?",
"choix": [
"Mazarin",
"Fleury",
"Dubois",
"Richelieu"
],
"r": 3,
"exp": "Richelieu gouverne aux côtés du roi de 1624 à sa mort en 1642. Il fonde l'Académie française en 1635.",
"lien": "Louis XIII et Richelieu"
},
{
"theme": "france",
"niveau": 2,
"q": "En 1415, quelle bataille voit la chevalerie française écrasée par les archers d'Henri V d'Angleterre ?",
"choix": [
"Azincourt",
"Crécy",
"Poitiers",
"Formigny"
],
"r": 0,
"exp": "Malgré leur supériorité numérique, les Français s'enlisent dans un terrain boueux. Crécy (1346) et Poitiers (1356) sont des défaites antérieures de la même guerre.",
"lien": "La Guerre de Cent Ans"
},
{
"theme": "france",
"niveau": 2,
"q": "Combien de temps a duré la Commune de Paris en 1871 ?",
"choix": [
"Une semaine",
"Environ deux mois",
"Environ six mois",
"Plus d'un an"
],
"r": 1,
"exp": "Elle dure du 18 mars au 28 mai 1871. Elle s'achève par la « Semaine sanglante », où l'armée versaillaise reprend Paris.",
"lien": "Défaite de 1870 et Commune"
},
{
"theme": "france",
"niveau": 2,
"q": "Quel régime Louis-Napoléon Bonaparte proclame-t-il le 2 décembre 1852 ?",
"choix": [
"La Deuxième République",
"La monarchie de Juillet",
"Le Consulat",
"Le Second Empire"
],
"r": 3,
"exp": "La date est choisie un an jour pour jour après son coup d'État, et en écho au sacre de Napoléon Ier (1804) et à Austerlitz (1805).",
"lien": "Le Second Empire (Napoléon III)"
},
{
"theme": "france",
"niveau": 2,
"q": "Quel officier a été condamné à tort pour trahison en 1894, déclenchant une affaire qui divisa la France ?",
"choix": [
"Alfred Dreyfus",
"Ferdinand Walsin Esterhazy",
"Hubert Henry",
"Georges Picquart"
],
"r": 0,
"exp": "Le vrai coupable était Esterhazy. Après le « J'accuse...! » de Zola en 1898, Dreyfus est finalement réhabilité en 1906.",
"lien": "L'affaire Dreyfus"
},
{
"theme": "france",
"niveau": 2,
"q": "En quelle année est votée la loi de séparation des Églises et de l'État ?",
"choix": [
"1882",
"1901",
"1905",
"1789"
],
"r": 2,
"exp": "La loi du 9 décembre 1905 dispose que la République ne reconnaît, ne salarie ni ne subventionne aucun culte. L'Alsace-Moselle, alors allemande, a conservé le régime concordataire.",
"lien": "La séparation de l'Église et de l'État"
},
{
"theme": "france",
"niveau": 2,
"q": "Dans quelle ville siégeait le gouvernement de l'État français dirigé par Pétain ?",
"choix": [
"Vichy",
"Bordeaux",
"Lyon",
"Clermont-Ferrand"
],
"r": 0,
"exp": "Vichy fut choisie en juillet 1940 notamment pour ses nombreux hôtels, capables d'accueillir ministères et administrations, Paris étant en zone occupée.",
"lien": "Occupation et régime de Vichy"
},
{
"theme": "france",
"niveau": 2,
"q": "Où Louis XVI et sa famille sont-ils arrêtés lors de leur fuite en juin 1791 ?",
"choix": [
"À Montmédy",
"À Metz",
"À Sainte-Menehould",
"À Varennes"
],
"r": 3,
"exp": "Reconnu à Sainte-Menehould par le maître de poste Drouet, le roi est arrêté à Varennes. Il cherchait à rejoindre la place forte de Montmédy.",
"lien": "Louis XVI"
},
{
"theme": "france",
"niveau": 2,
"q": "Que décide l'Assemblée nationale lors de la nuit du 4 août 1789 ?",
"choix": [
"L'adoption de la Déclaration des droits de l'homme",
"L'abolition des privilèges",
"L'abolition de la monarchie",
"La création des départements"
],
"r": 1,
"exp": "Les députés abolissent les privilèges et les droits féodaux, dans un élan né de la Grande Peur dans les campagnes. La Déclaration des droits de l'homme est adoptée le 26 août.",
"lien": "La Révolution française"
},
{
"theme": "france",
"niveau": 3,
"q": "Quelle ordonnance de François Ier (1539) impose le français dans les actes officiels ?",
"choix": [
"L'ordonnance de Villers-Cotterêts",
"L'édit de Nantes",
"L'édit de Fontainebleau",
"L'ordonnance d'Amboise"
],
"r": 0,
"exp": "Elle impose aussi aux curés de tenir des registres de baptêmes, ancêtres de l'état civil. C'est le plus ancien texte législatif encore partiellement en vigueur en France.",
"lien": "François Ier"
},
{
"theme": "france",
"niveau": 3,
"q": "Quel roi fut le dernier des Capétiens directs ?",
"choix": [
"Philippe V le Long",
"Louis X le Hutin",
"Philippe VI de Valois",
"Charles IV le Bel"
],
"r": 3,
"exp": "Mort en 1328 sans héritier mâle, il laisse la couronne à son cousin Philippe VI de Valois. La revendication d'Édouard III d'Angleterre est l'une des causes de la guerre de Cent Ans.",
"lien": "Les Capétiens directs"
},
{
"theme": "france",
"niveau": 3,
"q": "Qui fut le dernier roi à régner en France ?",
"choix": [
"Charles X",
"Louis XVIII",
"Napoléon III",
"Louis-Philippe Ier"
],
"r": 3,
"exp": "Roi des Français de 1830 à 1848, il est renversé par la révolution de février 1848. Napoléon III, dernier monarque, portait le titre d'empereur.",
"lien": "La monarchie de Juillet"
},
{
"theme": "france",
"niveau": 3,
"q": "Quelle bataille de 1453 met fin, de fait, à la guerre de Cent Ans ?",
"choix": [
"Formigny",
"Patay",
"Castillon",
"Azincourt"
],
"r": 2,
"exp": "La victoire française de Castillon permet de reprendre la Guyenne et Bordeaux. Les Anglais ne conservent alors que Calais, perdu en 1558.",
"lien": "La Guerre de Cent Ans"
},
{
"theme": "france",
"niveau": 3,
"q": "Quel traité de 1659 met fin à la guerre franco-espagnole et prévoit le mariage de Louis XIV avec l'infante Marie-Thérèse ?",
"choix": [
"Les traités de Westphalie",
"Le traité de Nimègue",
"Le traité des Pyrénées",
"Le traité d'Utrecht"
],
"r": 2,
"exp": "Négocié par Mazarin, il donne à la France le Roussillon et l'Artois. Le mariage est célébré à Saint-Jean-de-Luz en 1660.",
"lien": "Louis XIV"
},
{
"theme": "france",
"niveau": 3,
"q": "Avec quel pape Bonaparte signe-t-il le Concordat de 1801 ?",
"choix": [
"Pie VI",
"Léon XII",
"Pie VII",
"Grégoire XVI"
],
"r": 2,
"exp": "Le Concordat reconnaît le catholicisme comme « religion de la grande majorité des Français ». Pie VII assiste au sacre de 1804, où Napoléon se couronne lui-même.",
"lien": "Napoléon Bonaparte"
},
{
"theme": "monde",
"niveau": 1,
"q": "En quelle année Christophe Colomb atteint-il l'Amérique ?",
"choix": [
"1498",
"1453",
"1492",
"1519"
],
"r": 2,
"exp": "Il débarque aux Bahamas le 12 octobre 1492, persuadé d'avoir atteint les Indes. Il le croira jusqu'à sa mort.",
"lien": "La découverte de l'Amérique"
},
{
"theme": "monde",
"niveau": 1,
"q": "Quelle ville a été coupée en deux par un mur de 1961 à 1989 ?",
"choix": [
"Vienne",
"Prague",
"Varsovie",
"Berlin"
],
"r": 3,
"exp": "Le mur est ouvert le 9 novembre 1989. L'Allemagne est réunifiée moins d'un an plus tard, le 3 octobre 1990.",
"lien": "La chute du mur de Berlin"
},
{
"theme": "monde",
"niveau": 1,
"q": "Qui a été le premier homme à marcher sur la Lune ?",
"choix": [
"Buzz Aldrin",
"Neil Armstrong",
"Youri Gagarine",
"Michael Collins"
],
"r": 1,
"exp": "Lors de la mission Apollo 11 en juillet 1969, Aldrin le suit sur le sol lunaire tandis que Collins reste en orbite. Gagarine fut, lui, le premier homme dans l'espace en 1961.",
"lien": "Le premier pas sur la Lune"
},
{
"theme": "monde",
"niveau": 1,
"q": "Qui fut le premier président des États-Unis ?",
"choix": [
"Thomas Jefferson",
"George Washington",
"John Adams",
"Benjamin Franklin"
],
"r": 1,
"exp": "Élu en 1789, il refuse un troisième mandat en 1796, créant une tradition qui ne sera rompue que par Franklin D. Roosevelt.",
"lien": "George Washington"
},
{
"theme": "monde",
"niveau": 1,
"q": "Quel dirigeant sud-africain, emprisonné 27 ans, devient président de son pays en 1994 ?",
"choix": [
"Desmond Tutu",
"Nelson Mandela",
"Frederik de Klerk",
"Steve Biko"
],
"r": 1,
"exp": "Libéré en 1990, il reçoit le prix Nobel de la paix en 1993 avec Frederik de Klerk. Il est le premier président noir de l'Afrique du Sud.",
"lien": "Nelson Mandela"
},
{
"theme": "monde",
"niveau": 1,
"q": "Quelle épidémie a tué entre un tiers et la moitié des Européens au milieu du XIVe siècle ?",
"choix": [
"La peste noire",
"Le choléra",
"La variole",
"La grippe espagnole"
],
"r": 0,
"exp": "Arrivée en Europe en 1347 par des navires venus de la mer Noire, elle ravage le continent jusqu'en 1352. La maladie revient ensuite par vagues pendant des siècles.",
"lien": "La peste noire"
},
{
"theme": "monde",
"niveau": 1,
"q": "En quelle année commence la Seconde Guerre mondiale en Europe ?",
"choix": [
"1938",
"1940",
"1939",
"1941"
],
"r": 2,
"exp": "L'Allemagne envahit la Pologne le 1er septembre 1939. Le Royaume-Uni et la France lui déclarent la guerre le 3 septembre.",
"lien": "La Seconde Guerre mondiale"
},
{
"theme": "monde",
"niveau": 1,
"q": "Quelles tours new-yorkaises ont été détruites lors des attentats du 11 septembre 2001 ?",
"choix": [
"Les tours du World Trade Center",
"L'Empire State Building",
"Le Chrysler Building",
"Le Rockefeller Center"
],
"r": 0,
"exp": "Quatre avions furent détournés : deux contre les tours jumelles, un contre le Pentagone et un qui s'écrasa en Pennsylvanie. Près de 3 000 personnes ont été tuées.",
"lien": "Les attentats du 11 septembre 2001"
},
{
"theme": "monde",
"niveau": 1,
"q": "Qui a fondé l'Empire mongol au début du XIIIe siècle ?",
"choix": [
"Tamerlan",
"Attila",
"Gengis Khan",
"Kubilaï Khan"
],
"r": 2,
"exp": "Proclamé Gengis Khan en 1206, Temüjin unifie les tribus mongoles. Son petit-fils Kubilaï fondera la dynastie Yuan en Chine.",
"lien": "Gengis Khan"
},
{
"theme": "monde",
"niveau": 1,
"q": "Quelle révolution porte les bolcheviks au pouvoir en Russie en 1917 ?",
"choix": [
"La révolution d'Octobre",
"La révolution de Février",
"La révolution de 1905",
"La révolution de Juillet"
],
"r": 0,
"exp": "Elle a lieu fin octobre selon le calendrier julien alors en usage en Russie, soit début novembre dans notre calendrier. Lénine prend alors la tête du nouveau gouvernement.",
"lien": "La révolution russe"
},
{
"theme": "monde",
"niveau": 2,
"q": "Dans quelle ville se produit le krach boursier d'octobre 1929 ?",
"choix": [
"Londres",
"New York",
"Chicago",
"Paris"
],
"r": 1,
"exp": "L'effondrement de Wall Street, à partir du « jeudi noir » du 24 octobre, ouvre la Grande Dépression. La crise touche la France plus tardivement, à partir de 1931.",
"lien": "La crise de 1929"
},
{
"theme": "monde",
"niveau": 2,
"q": "En quelle année Constantinople est-elle prise par les Ottomans ?",
"choix": [
"1204",
"1453",
"1492",
"1389"
],
"r": 1,
"exp": "Le sultan Mehmed II s'en empare le 29 mai 1453, mettant fin à l'Empire byzantin. En 1204, la ville avait déjà été pillée par les croisés de la quatrième croisade.",
"lien": "La chute de Constantinople"
},
{
"theme": "monde",
"niveau": 2,
"q": "Qui a mis au point l'imprimerie à caractères mobiles en Europe vers 1450 ?",
"choix": [
"Johannes Gutenberg",
"Johann Fust",
"William Caxton",
"Alde Manuce"
],
"r": 0,
"exp": "Gutenberg travaillait à Mayence ; sa Bible à 42 lignes date du milieu des années 1450. En Chine, Bi Sheng avait déjà utilisé des caractères mobiles au XIe siècle.",
"lien": "L'invention de l'imprimerie"
},
{
"theme": "monde",
"niveau": 2,
"q": "Quel navigateur portugais atteint l'Inde par la mer en 1498 ?",
"choix": [
"Bartolomeu Dias",
"Vasco de Gama",
"Fernand de Magellan",
"Pedro Álvares Cabral"
],
"r": 1,
"exp": "Il contourne l'Afrique et accoste à Calicut. Dias avait franchi le cap de Bonne-Espérance dix ans plus tôt, en 1488.",
"lien": "La route des Indes"
},
{
"theme": "monde",
"niveau": 2,
"q": "Quelle crise de 1962 oppose les États-Unis et l'URSS à propos de missiles nucléaires ?",
"choix": [
"Le blocus de Berlin",
"La crise de Cuba",
"La crise de Suez",
"La guerre de Corée"
],
"r": 1,
"exp": "Pendant treize jours d'octobre, Kennedy et Khrouchtchev frôlent la guerre nucléaire. Un « téléphone rouge » est ensuite installé entre Washington et Moscou.",
"lien": "La Guerre Froide"
},
{
"theme": "monde",
"niveau": 2,
"q": "Quels traités mettent fin en 1648 à la guerre de Trente Ans ?",
"choix": [
"Le traité d'Utrecht",
"Les traités de Westphalie",
"Le traité de Vienne",
"La paix d'Augsbourg"
],
"r": 1,
"exp": "Ils sont négociés à Münster et Osnabrück. On y voit souvent la naissance de l'ordre international fondé sur la souveraineté des États.",
"lien": "Guerre de Trente Ans"
},
{
"theme": "monde",
"niveau": 2,
"q": "Sur le territoire de quel pays actuel se trouve la centrale de Tchernobyl ?",
"choix": [
"La Biélorussie",
"La Russie",
"L'Ukraine",
"Le Kazakhstan"
],
"r": 2,
"exp": "L'accident d'avril 1986 s'est produit en Ukraine, alors république de l'URSS. La Biélorussie voisine a pourtant reçu une grande partie des retombées radioactives.",
"lien": "La catastrophe de Tchernobyl"
},
{
"theme": "monde",
"niveau": 2,
"q": "Quel tsar fonde Saint-Pétersbourg en 1703 ?",
"choix": [
"Pierre le Grand",
"Ivan le Terrible",
"Catherine II",
"Alexandre Ier"
],
"r": 0,
"exp": "Il veut ouvrir la Russie sur la Baltique et l'Europe. La ville devient capitale de l'empire en 1712 et le reste jusqu'en 1918.",
"lien": "Pierre le Grand"
},
{
"theme": "monde",
"niveau": 2,
"q": "Quel président américain est assassiné en avril 1865, quelques jours après la fin de la guerre de Sécession ?",
"choix": [
"Abraham Lincoln",
"Andrew Johnson",
"James Garfield",
"Ulysses Grant"
],
"r": 0,
"exp": "Il est abattu par John Wilkes Booth au théâtre Ford de Washington. Le 13e amendement abolissant l'esclavage est ratifié en décembre de la même année.",
"lien": "Abraham Lincoln"
},
{
"theme": "monde",
"niveau": 2,
"q": "En quelle année l'Inde obtient-elle son indépendance ?",
"choix": [
"1945",
"1947",
"1950",
"1956"
],
"r": 1,
"exp": "L'indépendance du 15 août 1947 s'accompagne de la partition avec le Pakistan, qui provoque d'immenses déplacements de population et des violences meurtrières.",
"lien": "La décolonisation"
},
{
"theme": "monde",
"niveau": 3,
"q": "Qui a assassiné l'archiduc François-Ferdinand à Sarajevo le 28 juin 1914 ?",
"choix": [
"Nedeljko Čabrinović",
"Dragutin Dimitrijević",
"Raoul Villain",
"Gavrilo Princip"
],
"r": 3,
"exp": "Princip était un jeune nationaliste serbe de Bosnie. Čabrinović avait lancé une bombe plus tôt le même jour sans tuer l'archiduc ; Raoul Villain est l'assassin de Jaurès.",
"lien": "Première Guerre mondiale"
},
{
"theme": "monde",
"niveau": 3,
"q": "Quel traité de 1494 partage le Nouveau Monde entre l'Espagne et le Portugal ?",
"choix": [
"Le traité de Tordesillas",
"Le traité de Saragosse",
"Le traité d'Utrecht",
"Le traité du Cateau-Cambrésis"
],
"r": 0,
"exp": "La ligne de partage passe à 370 lieues à l'ouest des îles du Cap-Vert. C'est pourquoi on parle portugais au Brésil.",
"lien": "Les Grandes Découvertes"
},
{
"theme": "monde",
"niveau": 3,
"q": "Quelle dynastie a régné sur la Chine de 1368 à 1644 ?",
"choix": [
"Les Qing",
"Les Ming",
"Les Song",
"Les Yuan"
],
"r": 1,
"exp": "Fondée par Zhu Yuanzhang après l'expulsion des Mongols, elle fait bâtir la Cité interdite de Pékin. Les Mandchous Qing lui succèdent.",
"lien": ""
},
{
"theme": "monde",
"niveau": 3,
"q": "Où l'Empire allemand est-il proclamé le 18 janvier 1871 ?",
"choix": [
"Dans la galerie des Glaces de Versailles",
"Au Reichstag de Berlin",
"Au château de Sanssouci à Potsdam",
"Dans la cathédrale de Cologne"
],
"r": 0,
"exp": "Guillaume Ier y est proclamé empereur sous l'impulsion de Bismarck. En 1919, la France fait signer le traité de Versailles dans la même galerie.",
"lien": "Otto von Bismarck"
},
{
"theme": "monde",
"niveau": 3,
"q": "Quelle bataille navale de 1571 voit la flotte de la Sainte Ligue vaincre les Ottomans ?",
"choix": [
"Préveza",
"Lépante",
"Mohács",
"Navarin"
],
"r": 1,
"exp": "Cervantès y participa et y perdit l'usage de la main gauche. Mohács (1526) est une bataille terrestre, Navarin (1827) une autre défaite navale ottomane.",
"lien": "L'Empire ottoman"
},
{
"theme": "antiquite",
"niveau": 1,
"q": "Quel fleuve est au cœur de la civilisation égyptienne ?",
"choix": [
"Le Nil",
"L'Euphrate",
"Le Tigre",
"L'Indus"
],
"r": 0,
"exp": "Sa crue annuelle déposait un limon fertile sur les rives. Hérodote a résumé cela en disant que l'Égypte est « un don du Nil ».",
"lien": "Égypte ancienne"
},
{
"theme": "antiquite",
"niveau": 1,
"q": "Quel homme d'État romain est assassiné aux ides de mars 44 av. J.-C. ?",
"choix": [
"Pompée",
"Auguste",
"Jules César",
"Marc Antoine"
],
"r": 2,
"exp": "Il est poignardé en plein Sénat par des conjurés dont Brutus et Cassius. Contrairement à une idée répandue, il n'a jamais été empereur.",
"lien": "Jules César"
},
{
"theme": "antiquite",
"niveau": 1,
"q": "Quel roi de Macédoine a conquis l'Empire perse au IVe siècle av. J.-C. ?",
"choix": [
"Philippe II",
"Alexandre le Grand",
"Darius III",
"Ptolémée Ier"
],
"r": 1,
"exp": "Il meurt à Babylone en 323 av. J.-C., à 32 ans. Son empire est ensuite partagé entre ses généraux, dont Ptolémée qui fonde une dynastie en Égypte.",
"lien": "Alexandre le Grand"
},
{
"theme": "antiquite",
"niveau": 1,
"q": "Quelle reine d'Égypte fut l'alliée de Jules César puis de Marc Antoine ?",
"choix": [
"Néfertiti",
"Hatchepsout",
"Bérénice",
"Cléopâtre VII"
],
"r": 3,
"exp": "Dernière souveraine de la dynastie des Ptolémées, d'origine macédonienne, elle se donne la mort en 30 av. J.-C. L'Égypte devient alors une province romaine.",
"lien": "Cléopâtre VII"
},
{
"theme": "antiquite",
"niveau": 1,
"q": "Qui fut le premier empereur romain ?",
"choix": [
"Auguste",
"Jules César",
"Tibère",
"Néron"
],
"r": 0,
"exp": "Octave, fils adoptif de César, reçoit du Sénat le titre d'Augustus en 27 av. J.-C. Le mois d'août porte son nom.",
"lien": "Auguste"
},
{
"theme": "antiquite",
"niveau": 1,
"q": "Selon la légende, qui a fondé Rome ?",
"choix": [
"Énée",
"Rémus",
"Romulus",
"Numa Pompilius"
],
"r": 2,
"exp": "La tradition fixe la fondation à 753 av. J.-C., après le meurtre de son jumeau Rémus. Énée, héros troyen, est présenté comme leur lointain ancêtre.",
"lien": "Rome, de la fondation à la chute"
},
{
"theme": "antiquite",
"niveau": 1,
"q": "Quel philosophe athénien est condamné à boire la ciguë en 399 av. J.-C. ?",
"choix": [
"Platon",
"Aristote",
"Diogène",
"Socrate"
],
"r": 3,
"exp": "Socrate n'a rien écrit : sa pensée nous est connue surtout par son disciple Platon. Il était accusé d'impiété et de corrompre la jeunesse.",
"lien": "Socrate"
},
{
"theme": "antiquite",
"niveau": 1,
"q": "Quel volcan a enseveli Pompéi en 79 ap. J.-C. ?",
"choix": [
"L'Etna",
"Le Stromboli",
"Le Vulcano",
"Le Vésuve"
],
"r": 3,
"exp": "Pline le Jeune a décrit l'éruption, au cours de laquelle son oncle Pline l'Ancien trouva la mort. Herculanum fut également détruite.",
"lien": "Empire romain"
},
{
"theme": "antiquite",
"niveau": 2,
"q": "Quelle écriture les Sumériens ont-ils inventée ?",
"choix": [
"Les hiéroglyphes",
"Le linéaire B",
"L'alphabet phénicien",
"Le cunéiforme"
],
"r": 3,
"exp": "Ses signes en forme de clous étaient imprimés dans l'argile avec un roseau taillé. Elle est apparue vers 3300 av. J.-C. et a servi à noter une quinzaine de langues.",
"lien": "Mésopotamie"
},
{
"theme": "antiquite",
"niveau": 2,
"q": "Quel général carthaginois a franchi les Alpes avec des éléphants ?",
"choix": [
"Hannibal",
"Hamilcar Barca",
"Hasdrubal",
"Scipion"
],
"r": 0,
"exp": "Il passe les Alpes en 218 av. J.-C. pendant la deuxième guerre punique. Il est finalement vaincu à Zama en 202 av. J.-C. par Scipion l'Africain.",
"lien": "Les Guerres Puniques"
},
{
"theme": "antiquite",
"niveau": 2,
"q": "Quel roi de Babylone est célèbre pour son code de lois gravé sur une stèle ?",
"choix": [
"Nabuchodonosor II",
"Hammurabi",
"Sargon d'Akkad",
"Assurbanipal"
],
"r": 1,
"exp": "La stèle, datant du XVIIIe siècle av. J.-C., est conservée au musée du Louvre. Elle contient près de 300 articles de loi.",
"lien": "Hammurabi"
},
{
"theme": "antiquite",
"niveau": 2,
"q": "Quel souverain unifie la Chine en 221 av. J.-C. et devient son premier empereur ?",
"choix": [
"Liu Bang",
"Wudi des Han",
"Qin Shi Huang",
"Le duc de Zhou"
],
"r": 2,
"exp": "Il unifie l'écriture, la monnaie et les poids et mesures. Son tombeau près de Xi'an est gardé par l'armée de terre cuite, découverte en 1974.",
"lien": "Qin Shi Huang"
},
{
"theme": "antiquite",
"niveau": 2,
"q": "Quel stratège a donné son nom au « siècle » d'apogée d'Athènes, au Ve siècle av. J.-C. ?",
"choix": [
"Thémistocle",
"Périclès",
"Solon",
"Clisthène"
],
"r": 1,
"exp": "Réélu stratège pendant une quinzaine d'années, il lance les grands travaux de l'Acropole, dont le Parthénon. Il meurt de la peste en 429 av. J.-C.",
"lien": "Périclès"
},
{
"theme": "antiquite",
"niveau": 2,
"q": "Quelle bataille de 490 av. J.-C. voit les Athéniens repousser les Perses ?",
"choix": [
"Marathon",
"Salamine",
"Les Thermopyles",
"Platées"
],
"r": 0,
"exp": "La légende d'un messager courant jusqu'à Athènes a inspiré l'épreuve olympique du marathon. Salamine et les Thermopyles datent de la seconde guerre médique, en 480 av. J.-C.",
"lien": "Perse achéménide"
},
{
"theme": "antiquite",
"niveau": 2,
"q": "Quelle date marque traditionnellement la fin de l'Empire romain d'Occident ?",
"choix": [
"410",
"395",
"1453",
"476"
],
"r": 3,
"exp": "Cette année-là, Odoacre dépose le jeune empereur Romulus Augustule. L'Empire romain d'Orient survit jusqu'en 1453.",
"lien": "La chute de Rome"
},
{
"theme": "antiquite",
"niveau": 2,
"q": "Quel empereur a donné son nom au mur construit à partir de 122 dans le nord de l'Angleterre ?",
"choix": [
"Trajan",
"Claude",
"Antonin le Pieux",
"Hadrien"
],
"r": 3,
"exp": "Long d'environ 117 km, il marquait la frontière nord de la province de Bretagne. Antonin le Pieux fit construire plus au nord un autre mur, en Écosse.",
"lien": "Empire romain"
},
{
"theme": "antiquite",
"niveau": 3,
"q": "Quel roi perse fonde l'Empire achéménide et prend Babylone en 539 av. J.-C. ?",
"choix": [
"Cyrus II le Grand",
"Darius Ier",
"Xerxès Ier",
"Cambyse II"
],
"r": 0,
"exp": "Il autorise les Juifs exilés à Babylone à rentrer à Jérusalem. Le « cylindre de Cyrus », conservé au British Museum, évoque sa politique envers les peuples conquis.",
"lien": "Perse achéménide"
},
{
"theme": "antiquite",
"niveau": 3,
"q": "Quel pharaon a fait construire la première pyramide, à degrés, à Saqqarah ?",
"choix": [
"Khéops",
"Snéfrou",
"Mykérinos",
"Djéser"
],
"r": 3,
"exp": "Elle est attribuée à son architecte Imhotep, vers 2650 av. J.-C. Snéfrou, un peu plus tard, fait bâtir les premières pyramides à faces lisses.",
"lien": "Égypte ancienne"
},
{
"theme": "antiquite",
"niveau": 3,
"q": "Qui remporte la bataille navale d'Actium en 31 av. J.-C. ?",
"choix": [
"Marc Antoine",
"Octave",
"Sextus Pompée",
"Lépide"
],
"r": 1,
"exp": "Sa flotte, commandée par Agrippa, bat celle de Marc Antoine et Cléopâtre. Octave devient le seul maître de Rome et prend le nom d'Auguste en 27 av. J.-C.",
"lien": "Auguste"
},
{
"theme": "antiquite",
"niveau": 3,
"q": "Quel Athénien est considéré comme le fondateur de la démocratie, par ses réformes de 508 av. J.-C. ?",
"choix": [
"Clisthène",
"Solon",
"Dracon",
"Périclès"
],
"r": 0,
"exp": "Il réorganise les citoyens en dix tribus mêlant ville, côte et intérieur. L'ostracisme lui est traditionnellement attribué.",
"lien": "Grèce antique"
},
{
"theme": "religions",
"niveau": 1,
"q": "Combien de piliers compte l'islam ?",
"choix": [
"Trois",
"Sept",
"Cinq",
"Dix"
],
"r": 2,
"exp": "Ce sont la profession de foi, la prière, l'aumône, le jeûne du ramadan et le pèlerinage à La Mecque. Le pèlerinage n'est obligatoire que pour qui en a les moyens.",
"lien": "Les cinq piliers de l'islam"
},
{
"theme": "religions",
"niveau": 1,
"q": "Quelle fête juive commémore la sortie d'Égypte ?",
"choix": [
"Pourim",
"Hanoucca",
"Souccot",
"Pessah"
],
"r": 3,
"exp": "On y mange du pain azyme (matsa), en souvenir du départ précipité des Hébreux. La Pâque chrétienne est historiquement liée à cette fête.",
"lien": "Pessah"
},
{
"theme": "religions",
"niveau": 1,
"q": "Quelle fête chrétienne célèbre la résurrection du Christ ?",
"choix": [
"Noël",
"L'Ascension",
"Pâques",
"La Pentecôte"
],
"r": 2,
"exp": "Sa date est mobile : le dimanche qui suit la première pleine lune après l'équinoxe de printemps. L'Ascension et la Pentecôte en dépendent.",
"lien": "Pâques"
},
{
"theme": "religions",
"niveau": 1,
"q": "Dans quelle ville se trouve la Kaaba ?",
"choix": [
"Médine",
"La Mecque",
"Jérusalem",
"Bagdad"
],
"r": 1,
"exp": "Les musulmans se tournent vers elle pour prier. Les pèlerins en font sept fois le tour lors du Hajj.",
"lien": "Le Hajj (pèlerinage)"
},
{
"theme": "religions",
"niveau": 1,
"q": "Qui a rendu publiques 95 thèses contre les indulgences en 1517 ?",
"choix": [
"Jean Calvin",
"Martin Luther",
"Ulrich Zwingli",
"Jan Hus"
],
"r": 1,
"exp": "Ce moine allemand de Wittenberg déclenche ainsi la Réforme protestante. Il est excommunié par le pape Léon X en 1521.",
"lien": "La Réforme protestante"
},
{
"theme": "religions",
"niveau": 1,
"q": "Quel titre porte Tenzin Gyatso, prix Nobel de la paix 1989 ?",
"choix": [
"Panchen-Lama",
"Dalaï-Lama",
"Karmapa",
"Rinpoché"
],
"r": 1,
"exp": "Il est le 14e Dalaï-Lama. Exilé depuis 1959, il vit à Dharamsala, en Inde.",
"lien": "Le Dalaï-Lama"
},
{
"theme": "religions",
"niveau": 1,
"q": "Comment s'appelle le jour de repos hebdomadaire dans le judaïsme ?",
"choix": [
"Le Shabbat",
"Yom Kippour",
"Roch Hachana",
"Souccot"
],
"r": 0,
"exp": "Il commence le vendredi au coucher du soleil et se termine le samedi soir. Il rappelle le septième jour de la Création, où Dieu se reposa.",
"lien": "Le Shabbat"
},
{
"theme": "religions",
"niveau": 1,
"q": "Quelle fête hindoue est appelée la fête des lumières ?",
"choix": [
"Holi",
"La Kumbh Mela",
"Navratri",
"Diwali"
],
"r": 3,
"exp": "On y allume lampes et bougies pour célébrer la victoire de la lumière sur les ténèbres. Holi, au printemps, est la fête des couleurs.",
"lien": "Diwali"
},
{
"theme": "religions",
"niveau": 2,
"q": "Quel empereur convoque le concile de Nicée en 325 ?",
"choix": [
"Théodose",
"Constantin",
"Justinien",
"Dioclétien"
],
"r": 1,
"exp": "Ce premier concile œcuménique condamne l'arianisme et rédige une première version du Credo. Il fixe aussi les principes du calcul de la date de Pâques.",
"lien": "Le concile de Nicée"
},
{
"theme": "religions",
"niveau": 2,
"q": "Selon les chiites, qui aurait dû succéder à Mahomet ?",
"choix": [
"Ali",
"Abou Bakr",
"Omar",
"Othman"
],
"r": 0,
"exp": "Cousin et gendre du Prophète, Ali est pour les chiites le premier imam. Les sunnites le reconnaissent comme le quatrième calife.",
"lien": "Ali ibn Abi Talib"
},
{
"theme": "religions",
"niveau": 2,
"q": "Quel événement de 622 marque le début du calendrier musulman ?",
"choix": [
"La première révélation",
"La prise de La Mecque",
"L'Hégire",
"La mort de Mahomet"
],
"r": 2,
"exp": "C'est le départ de Mahomet et de ses compagnons de La Mecque vers Médine. Le calendrier hégirien est lunaire, donc plus court d'environ onze jours que l'année solaire.",
"lien": "L'Hégire"
},
{
"theme": "religions",
"niveau": 2,
"q": "Quelle fête juive, la plus solennelle de l'année, est le jour du Grand Pardon ?",
"choix": [
"Roch Hachana",
"Chavouot",
"Pourim",
"Yom Kippour"
],
"r": 3,
"exp": "C'est un jour de jeûne complet et de prière. Il intervient dix jours après Roch Hachana, le Nouvel An juif.",
"lien": "Yom Kippour"
},
{
"theme": "religions",
"niveau": 2,
"q": "En quelle année situe-t-on le Grand Schisme d'Orient entre Rome et Constantinople ?",
"choix": [
"1517",
"1378",
"1054",
"451"
],
"r": 2,
"exp": "Il est marqué par des excommunications réciproques. Celles-ci ont été levées en 1965 par le pape Paul VI et le patriarche Athénagoras.",
"lien": "Le Grand Schisme d'Orient"
},
{
"theme": "religions",
"niveau": 2,
"q": "Quel pape a convoqué le concile Vatican II ?",
"choix": [
"Paul VI",
"Pie XII",
"Jean-Paul II",
"Jean XXIII"
],
"r": 3,
"exp": "Ouvert en 1962, le concile est clôturé en 1965 par son successeur Paul VI. Il autorise notamment la messe en langue vernaculaire.",
"lien": "Le concile Vatican II"
},
{
"theme": "religions",
"niveau": 2,
"q": "Où le Bouddha a-t-il atteint l'Éveil, selon la tradition ?",
"choix": [
"Bodh-Gaya",
"Sarnath",
"Lumbini",
"Kushinagar"
],
"r": 0,
"exp": "Il méditait sous un figuier, l'arbre de la Bodhi. Lumbini est son lieu de naissance, Sarnath celui de son premier sermon et Kushinagar celui de sa mort.",
"lien": "Le Bouddha et l'Éveil"
},
{
"theme": "religions",
"niveau": 2,
"q": "Lequel de ces dieux ne fait pas partie de la Trimurti hindoue ?",
"choix": [
"Brahma",
"Vishnou",
"Ganesh",
"Shiva"
],
"r": 2,
"exp": "La Trimurti associe Brahma le créateur, Vishnou le conservateur et Shiva le destructeur. Ganesh, à tête d'éléphant, est le fils de Shiva et de Parvati.",
"lien": "La Trimurti : Brahma, Vishnou, Shiva"
},
{
"theme": "religions",
"niveau": 3,
"q": "Quel pape lance l'appel à la première croisade à Clermont en 1095 ?",
"choix": [
"Grégoire VII",
"Innocent III",
"Urbain II",
"Eugène III"
],
"r": 2,
"exp": "Cet ancien moine de Cluny était français. La croisade aboutit à la prise de Jérusalem en 1099.",
"lien": "Urbain II"
},
{
"theme": "religions",
"niveau": 3,
"q": "Quel concile, réuni de 1545 à 1563, constitue la réponse catholique à la Réforme ?",
"choix": [
"Le concile de Latran V",
"Le concile de Constance",
"Le concile de Bâle",
"Le concile de Trente"
],
"r": 3,
"exp": "Il réaffirme les sept sacrements et crée les séminaires pour former les prêtres. Ses décisions structurent le catholicisme jusqu'au XXe siècle.",
"lien": "Le concile de Trente"
},
{
"theme": "religions",
"niveau": 3,
"q": "Quel penseur juif né à Cordoue a écrit le Guide des égarés ?",
"choix": [
"Rachi",
"Maïmonide",
"Averroès",
"Juda Halevi"
],
"r": 1,
"exp": "Médecin et philosophe du XIIe siècle, il cherche à concilier la foi juive et la philosophie d'Aristote. Il finit sa vie en Égypte, médecin à la cour du sultan.",
"lien": "Maïmonide"
},
{
"theme": "religions",
"niveau": 3,
"q": "Quel concile met fin au Grand Schisme d'Occident ?",
"choix": [
"Le concile de Trente",
"Le concile de Constance",
"Le concile de Bâle",
"Le concile de Latran IV"
],
"r": 1,
"exp": "De 1378 à 1417, jusqu'à trois papes rivaux se sont disputé la tiare. Le concile fait élire Martin V en 1417.",
"lien": "Le Grand Schisme d'Occident"
},
{
"theme": "arts",
"niveau": 1,
"q": "Qui a peint La Joconde ?",
"choix": [
"Raphaël",
"Michel-Ange",
"Léonard de Vinci",
"Titien"
],
"r": 2,
"exp": "Le tableau est conservé au Louvre. Il fut volé en 1911 par Vincenzo Peruggia et retrouvé à Florence en 1913, ce qui contribua à sa célébrité.",
"lien": "Léonard de Vinci"
},
{
"theme": "arts",
"niveau": 1,
"q": "Quel tableau de Claude Monet a donné son nom à l'impressionnisme ?",
"choix": [
"Les Nymphéas",
"La Gare Saint-Lazare",
"Impression, soleil levant",
"Les Coquelicots"
],
"r": 2,
"exp": "Exposé en 1874 chez le photographe Nadar, il inspire au critique Louis Leroy un article moqueur sur les « impressionnistes ». Le nom est ensuite repris par les peintres eux-mêmes.",
"lien": "Impressionnisme"
},
{
"theme": "arts",
"niveau": 1,
"q": "Qui a sculpté Le Penseur ?",
"choix": [
"Camille Claudel",
"Antoine Bourdelle",
"Auguste Rodin",
"Aristide Maillol"
],
"r": 2,
"exp": "La figure était d'abord prévue pour La Porte de l'Enfer, inspirée de Dante. Rodin l'a ensuite agrandie et exposée comme une œuvre autonome.",
"lien": "Auguste Rodin"
},
{
"theme": "arts",
"niveau": 1,
"q": "Qui a peint Guernica en 1937 ?",
"choix": [
"Salvador Dalí",
"Joan Miró",
"Pablo Picasso",
"Georges Braque"
],
"r": 2,
"exp": "Le tableau dénonce le bombardement de la ville basque par l'aviation allemande et italienne. Il est aujourd'hui exposé au musée Reina Sofía de Madrid.",
"lien": "Pablo Picasso"
},
{
"theme": "arts",
"niveau": 1,
"q": "Quel peintre s'est tranché une partie de l'oreille à Arles en 1888 ?",
"choix": [
"Paul Gauguin",
"Henri de Toulouse-Lautrec",
"Edvard Munch",
"Vincent van Gogh"
],
"r": 3,
"exp": "Le geste survient après une violente dispute avec Gauguin, venu travailler avec lui. Van Gogh se représente ensuite l'oreille bandée dans un autoportrait.",
"lien": "Vincent van Gogh"
},
{
"theme": "arts",
"niveau": 1,
"q": "Qui a peint la voûte de la chapelle Sixtine ?",
"choix": [
"Raphaël",
"Sandro Botticelli",
"Le Pérugin",
"Michel-Ange"
],
"r": 3,
"exp": "Il y travaille de 1508 à 1512, puis revient peindre Le Jugement dernier sur le mur de l'autel. Botticelli et Le Pérugin avaient peint des fresques sur les murs latéraux.",
"lien": "Michel-Ange"
},
{
"theme": "arts",
"niveau": 1,
"q": "Quel compositeur a écrit le Boléro, créé en 1928 ?",
"choix": [
"Maurice Ravel",
"Claude Debussy",
"Erik Satie",
"Camille Saint-Saëns"
],
"r": 0,
"exp": "Composé pour la danseuse Ida Rubinstein, il répète le même thème avec un crescendo continu. Ravel le considérait lui-même comme une expérience d'orchestration.",
"lien": "Maurice Ravel"
},
{
"theme": "arts",
"niveau": 1,
"q": "Quel compositeur, devenu sourd, a écrit la 9e symphonie dont est tiré l'Hymne à la joie ?",
"choix": [
"Wolfgang Amadeus Mozart",
"Johannes Brahms",
"Joseph Haydn",
"Ludwig van Beethoven"
],
"r": 3,
"exp": "La symphonie est créée à Vienne en 1824. Son finale est devenu l'hymne officiel de l'Union européenne.",
"lien": ""
},
{
"theme": "arts",
"niveau": 2,
"q": "Quel style architectural se caractérise par l'arc brisé et la croisée d'ogives ?",
"choix": [
"Le gothique",
"Le roman",
"Le baroque",
"Le byzantin"
],
"r": 0,
"exp": "Il naît vers 1140 avec le chœur de la basilique de Saint-Denis, voulu par l'abbé Suger. Il permet des murs plus minces et de grands vitraux.",
"lien": "Art gothique"
},
{
"theme": "arts",
"niveau": 2,
"q": "Qui a peint La Liberté guidant le peuple ?",
"choix": [
"Eugène Delacroix",
"Théodore Géricault",
"Jacques-Louis David",
"Gustave Courbet"
],
"r": 0,
"exp": "Le tableau célèbre les Trois Glorieuses de juillet 1830. Il est conservé au Louvre.",
"lien": "Eugène Delacroix"
},
{
"theme": "arts",
"niveau": 2,
"q": "Qui a peint Le Radeau de la Méduse ?",
"choix": [
"Eugène Delacroix",
"Antoine-Jean Gros",
"Théodore Géricault",
"Jacques-Louis David"
],
"r": 2,
"exp": "Il s'inspire du naufrage de la frégate La Méduse en 1816. Géricault interrogea des survivants et étudia des cadavres pour préparer la toile.",
"lien": "Théodore Géricault"
},
{
"theme": "arts",
"niveau": 2,
"q": "Quel peintre néerlandais a réalisé La Jeune Fille à la perle ?",
"choix": [
"Rembrandt",
"Frans Hals",
"Pieter de Hooch",
"Johannes Vermeer"
],
"r": 3,
"exp": "Le tableau, peint vers 1665, est conservé au Mauritshuis de La Haye. On ne connaît qu'une trentaine d'œuvres de Vermeer.",
"lien": "Johannes Vermeer"
},
{
"theme": "arts",
"niveau": 2,
"q": "Quel mouvement André Breton fonde-t-il avec son manifeste de 1924 ?",
"choix": [
"Le dadaïsme",
"Le cubisme",
"Le surréalisme",
"Le futurisme"
],
"r": 2,
"exp": "Le mouvement veut libérer l'inconscient, notamment par l'écriture automatique. Dalí, Magritte et Max Ernst y ont été associés.",
"lien": "Surréalisme"
},
{
"theme": "arts",
"niveau": 2,
"q": "Quel peintre a réalisé Le Cri ?",
"choix": [
"Egon Schiele",
"Oskar Kokoschka",
"James Ensor",
"Edvard Munch"
],
"r": 3,
"exp": "Ce peintre norvégien en a fait plusieurs versions à partir de 1893, en peinture, pastel et lithographie. L'œuvre est devenue un symbole de l'angoisse moderne.",
"lien": "Edvard Munch"
},
{
"theme": "arts",
"niveau": 2,
"q": "Qui a composé Les Quatre Saisons ?",
"choix": [
"Jean-Sébastien Bach",
"Georg Friedrich Haendel",
"Arcangelo Corelli",
"Antonio Vivaldi"
],
"r": 3,
"exp": "Ces quatre concertos pour violon ont été publiés en 1725. Chacun est accompagné d'un sonnet qui décrit la saison évoquée.",
"lien": ""
},
{
"theme": "arts",
"niveau": 2,
"q": "Quel mouvement doit son nom à un mot ironique du critique Louis Vauxcelles au Salon d'automne de 1905 ?",
"choix": [
"Le fauvisme",
"L'expressionnisme",
"Le mouvement nabi",
"Le cubisme"
],
"r": 0,
"exp": "Le critique Louis Vauxcelles réagissait aux couleurs pures et violentes de Matisse, Derain et Vlaminck. Le mouvement est bref, de 1905 à 1908 environ.",
"lien": "Fauvisme"
},
{
"theme": "arts",
"niveau": 3,
"q": "Quel architecte a conçu la pyramide du Louvre, inaugurée en 1989 ?",
"choix": [
"Ieoh Ming Pei",
"Renzo Piano",
"Jean Nouvel",
"Frank Gehry"
],
"r": 0,
"exp": "Cet architecte sino-américain répondait à une commande du président Mitterrand dans le cadre du « Grand Louvre ». Renzo Piano a, lui, coconçu le Centre Pompidou.",
"lien": ""
},
{
"theme": "arts",
"niveau": 3,
"q": "Quel peintre est l'auteur de La Vocation de saint Matthieu, célèbre pour son clair-obscur ?",
"choix": [
"Pierre Paul Rubens",
"Annibale Carrache",
"Guido Reni",
"Le Caravage"
],
"r": 3,
"exp": "Le tableau, peint vers 1600, se trouve toujours dans l'église Saint-Louis-des-Français à Rome. Le Caravage a influencé de nombreux peintres européens, dits caravagesques.",
"lien": "Le Caravage"
},
{
"theme": "arts",
"niveau": 3,
"q": "Qui a peint Les Ménines en 1656 ?",
"choix": [
"Francisco de Goya",
"Bartolomé Esteban Murillo",
"Diego Vélasquez",
"Francisco de Zurbarán"
],
"r": 2,
"exp": "Le peintre s'y représente lui-même au travail, aux côtés de l'infante Marguerite. Picasso en a peint 58 variations en 1957.",
"lien": "Diego Vélasquez"
},
{
"theme": "arts",
"niveau": 3,
"q": "Quel peintre a réalisé Un dimanche après-midi à l'île de la Grande Jatte, manifeste du pointillisme ?",
"choix": [
"Paul Signac",
"Camille Pissarro",
"Georges Seurat",
"Henri-Edmond Cross"
],
"r": 2,
"exp": "Il y travaille de 1884 à 1886, en juxtaposant de petites touches de couleur pure. Le tableau est conservé à l'Art Institute de Chicago.",
"lien": "Georges Seurat"
},
{
"theme": "litterature",
"niveau": 1,
"q": "Qui a écrit Les Misérables ?",
"choix": [
"Émile Zola",
"Honoré de Balzac",
"Alexandre Dumas",
"Victor Hugo"
],
"r": 3,
"exp": "Le roman paraît en 1862, alors que Hugo est en exil à Guernesey pour son opposition à Napoléon III.",
"lien": "Victor Hugo"
},
{
"theme": "litterature",
"niveau": 1,
"q": "Quel dramaturge a écrit L'Avare ?",
"choix": [
"Jean Racine",
"Molière",
"Pierre Corneille",
"Marivaux"
],
"r": 1,
"exp": "Molière, de son vrai nom Jean-Baptiste Poquelin, meurt en 1673 quelques heures après la quatrième représentation du Malade imaginaire, et non sur scène comme on le dit souvent.",
"lien": "Molière"
},
{
"theme": "litterature",
"niveau": 1,
"q": "Qui a écrit Les Trois Mousquetaires ?",
"choix": [
"Victor Hugo",
"Alexandre Dumas",
"Eugène Sue",
"Théophile Gautier"
],
"r": 1,
"exp": "Le roman paraît en feuilleton en 1844, avec la collaboration d'Auguste Maquet. D'Artagnan s'inspire d'un véritable capitaine-lieutenant des mousquetaires.",
"lien": "Alexandre Dumas"
},
{
"theme": "litterature",
"niveau": 1,
"q": "À quel poète grec attribue-t-on traditionnellement l'Iliade et l'Odyssée ?",
"choix": [
"Hésiode",
"Sophocle",
"Homère",
"Pindare"
],
"r": 2,
"exp": "L'Iliade raconte un épisode de la guerre de Troie, l'Odyssée le long retour d'Ulysse à Ithaque. L'existence même d'Homère est débattue par les spécialistes.",
"lien": "Homère"
},
{
"theme": "litterature",
"niveau": 1,
"q": "Qui a écrit Roméo et Juliette ?",
"choix": [
"Christopher Marlowe",
"Ben Jonson",
"William Shakespeare",
"Lope de Vega"
],
"r": 2,
"exp": "La pièce se déroule à Vérone. Shakespeare a repris une histoire déjà racontée par des auteurs italiens au XVIe siècle.",
"lien": "William Shakespeare"
},
{
"theme": "litterature",
"niveau": 1,
"q": "Quel romancier a écrit Vingt Mille Lieues sous les mers ?",
"choix": [
"H. G. Wells",
"Jules Verne",
"Victor Hugo",
"Alexandre Dumas"
],
"r": 1,
"exp": "Le roman paraît en 1869-1870 et met en scène le capitaine Nemo à bord du Nautilus. Le titre désigne la distance parcourue, non la profondeur.",
"lien": "Jules Verne"
},
{
"theme": "litterature",
"niveau": 2,
"q": "Qui a écrit L'Étranger, publié en 1942 ?",
"choix": [
"Jean-Paul Sartre",
"Albert Camus",
"André Malraux",
"André Gide"
],
"r": 1,
"exp": "Le roman suit Meursault, qui tue un homme sur une plage d'Algérie. Camus reçoit le prix Nobel de littérature en 1957.",
"lien": "Albert Camus"
},
{
"theme": "litterature",
"niveau": 2,
"q": "Quel recueil a valu à son auteur une condamnation pour outrage à la morale publique en 1857 ?",
"choix": [
"Les Contemplations",
"Le Spleen de Paris",
"Alcools",
"Les Fleurs du mal"
],
"r": 3,
"exp": "Baudelaire doit retirer six poèmes du recueil. La condamnation n'est annulée qu'en 1949 par la Cour de cassation.",
"lien": "Charles Baudelaire"
},
{
"theme": "litterature",
"niveau": 2,
"q": "Quel cycle romanesque d'Émile Zola suit une famille sous le Second Empire ?",
"choix": [
"Les Rougon-Macquart",
"La Comédie humaine",
"Les Thibault",
"Les Hommes de bonne volonté"
],
"r": 0,
"exp": "Le cycle compte vingt romans, dont Germinal et L'Assommoir. La Comédie humaine est l'œuvre de Balzac.",
"lien": "Émile Zola"
},
{
"theme": "litterature",
"niveau": 2,
"q": "Quel écrivain russe a écrit Guerre et Paix ?",
"choix": [
"Fiodor Dostoïevski",
"Ivan Tourgueniev",
"Anton Tchekhov",
"Léon Tolstoï"
],
"r": 3,
"exp": "Le roman se déroule pendant les guerres napoléoniennes, jusqu'à la campagne de Russie de 1812. De nombreux dialogues y sont écrits en français.",
"lien": "Léon Tolstoï"
},
{
"theme": "litterature",
"niveau": 2,
"q": "Qui a écrit le roman 1984 ?",
"choix": [
"Aldous Huxley",
"Ray Bradbury",
"H. G. Wells",
"George Orwell"
],
"r": 3,
"exp": "Publié en 1949, il a popularisé l'expression « Big Brother ». Orwell est aussi l'auteur de La Ferme des animaux (1945).",
"lien": "George Orwell"
},
{
"theme": "litterature",
"niveau": 2,
"q": "Qui a écrit Don Quichotte ?",
"choix": [
"Lope de Vega",
"Miguel de Cervantès",
"Pedro Calderón de la Barca",
"Francisco de Quevedo"
],
"r": 1,
"exp": "Les deux parties paraissent en 1605 et 1615. On le considère souvent comme le premier roman moderne.",
"lien": "Miguel de Cervantès"
},
{
"theme": "litterature",
"niveau": 3,
"q": "Quel roman s'ouvre sur la phrase « Longtemps, je me suis couché de bonne heure » ?",
"choix": [
"Le Rouge et le Noir",
"L'Éducation sentimentale",
"Du côté de chez Swann",
"Les Faux-monnayeurs"
],
"r": 2,
"exp": "C'est le premier volume d'À la recherche du temps perdu, de Marcel Proust. Refusé par plusieurs éditeurs, il est publié à compte d'auteur chez Grasset en 1913.",
"lien": "Marcel Proust"
},
{
"theme": "litterature",
"niveau": 3,
"q": "Qui a écrit Cent ans de solitude (1967) ?",
"choix": [
"Gabriel García Márquez",
"Mario Vargas Llosa",
"Jorge Luis Borges",
"Julio Cortázar"
],
"r": 0,
"exp": "Le roman raconte l'histoire de la famille Buendía dans le village imaginaire de Macondo. Son auteur colombien reçoit le prix Nobel en 1982.",
"lien": "Gabriel García Márquez"
},
{
"theme": "litterature",
"niveau": 3,
"q": "Quel poète a écrit Le Bateau ivre à 16 ans ?",
"choix": [
"Arthur Rimbaud",
"Paul Verlaine",
"Stéphane Mallarmé",
"Lautréamont"
],
"r": 0,
"exp": "Il compose ce poème en 1871, avant de rejoindre Verlaine à Paris. Il cesse d'écrire vers l'âge de 20 ans et part pour l'Afrique.",
"lien": "Arthur Rimbaud"
},
{
"theme": "politique",
"niveau": 1,
"q": "Qui fut le premier président de la Ve République ?",
"choix": [
"René Coty",
"Georges Pompidou",
"Charles de Gaulle",
"Vincent Auriol"
],
"r": 2,
"exp": "Élu en décembre 1958 par un collège d'environ 80 000 grands électeurs, il entre en fonction en janvier 1959. René Coty était le dernier président de la IVe République.",
"lien": "Charles de Gaulle"
},
{
"theme": "politique",
"niveau": 1,
"q": "Quelle est la durée du mandat présidentiel en France depuis 2002 ?",
"choix": [
"7 ans",
"4 ans",
"5 ans",
"6 ans"
],
"r": 2,
"exp": "Le quinquennat a été adopté par référendum en 2000. Depuis la révision de 2008, nul ne peut exercer plus de deux mandats consécutifs.",
"lien": "La Ve République"
},
{
"theme": "politique",
"niveau": 1,
"q": "Dans quel bâtiment siège le Sénat ?",
"choix": [
"Le palais Bourbon",
"Le palais de l'Élysée",
"L'hôtel de Matignon",
"Le palais du Luxembourg"
],
"r": 3,
"exp": "Le palais fut construit au XVIIe siècle pour Marie de Médicis. Le palais Bourbon abrite, lui, l'Assemblée nationale.",
"lien": ""
},
{
"theme": "politique",
"niveau": 1,
"q": "Qui fut le premier président socialiste de la Ve République ?",
"choix": [
"François Mitterrand",
"François Hollande",
"Lionel Jospin",
"Michel Rocard"
],
"r": 0,
"exp": "Élu le 10 mai 1981, il effectue deux septennats. Avec 14 ans à l'Élysée, il détient le record de durée sous la Ve République.",
"lien": "François Mitterrand"
},
{
"theme": "politique",
"niveau": 1,
"q": "Quelle est la résidence officielle du Premier ministre ?",
"choix": [
"L'hôtel de Matignon",
"Le palais de l'Élysée",
"Le palais Bourbon",
"Le Quai d'Orsay"
],
"r": 0,
"exp": "Situé rue de Varenne à Paris, il possède le plus grand jardin privé de la capitale. Le Quai d'Orsay désigne le ministère des Affaires étrangères.",
"lien": ""
},
{
"theme": "politique",
"niveau": 1,
"q": "Quel président a été élu en 2017 à l'âge de 39 ans ?",
"choix": [
"Nicolas Sarkozy",
"Emmanuel Macron",
"François Hollande",
"Valéry Giscard d'Estaing"
],
"r": 1,
"exp": "Il est le plus jeune président de l'histoire de la République. Le précédent record appartenait à Louis-Napoléon Bonaparte, élu à 40 ans en 1848.",
"lien": "Emmanuel Macron"
},
{
"theme": "politique",
"niveau": 2,
"q": "Quel article de la Constitution permet au gouvernement de faire adopter un texte sans vote, sauf motion de censure ?",
"choix": [
"L'article 16",
"L'article 89",
"L'article 11",
"L'article 49.3"
],
"r": 3,
"exp": "L'article 16 donne des pouvoirs exceptionnels au président, l'article 89 encadre la révision de la Constitution et l'article 11 le référendum.",
"lien": "La Ve République"
},
{
"theme": "politique",
"niveau": 2,
"q": "Qui assure l'intérim en cas de vacance de la présidence de la République ?",
"choix": [
"Le Premier ministre",
"Le président du Sénat",
"Le président de l'Assemblée nationale",
"Le président du Conseil constitutionnel"
],
"r": 1,
"exp": "Alain Poher l'a fait à deux reprises : après la démission de De Gaulle en 1969 et après la mort de Pompidou en 1974.",
"lien": "Alain Poher"
},
{
"theme": "politique",
"niveau": 2,
"q": "Quel parti Jean-Marie Le Pen a-t-il cofondé en 1972 ?",
"choix": [
"Le RPR",
"Le MNR",
"Le CNIP",
"Le Front national"
],
"r": 3,
"exp": "Le parti a pris le nom de Rassemblement national en 2018. Le RPR a été fondé par Jacques Chirac en 1976.",
"lien": "Front national puis Rassemblement national"
},
{
"theme": "politique",
"niveau": 2,
"q": "Quel président a fait abaisser l'âge de la majorité à 18 ans en 1974 ?",
"choix": [
"Georges Pompidou",
"François Mitterrand",
"Jacques Chirac",
"Valéry Giscard d'Estaing"
],
"r": 3,
"exp": "Son septennat voit aussi la loi Veil sur l'IVG (1975) et l'instauration du divorce par consentement mutuel.",
"lien": "Valéry Giscard d'Estaing"
},
{
"theme": "politique",
"niveau": 2,
"q": "Lors de quel congrès naît en 1920 le futur Parti communiste français ?",
"choix": [
"Le congrès de Tours",
"Le congrès d'Épinay",
"Le congrès du Globe",
"Le congrès de Marseille"
],
"r": 0,
"exp": "La majorité de la SFIO y décide d'adhérer à l'Internationale communiste. Léon Blum choisit alors de « garder la vieille maison » socialiste.",
"lien": "Parti communiste français"
},
{
"theme": "politique",
"niveau": 2,
"q": "Combien de membres nommés siègent au Conseil constitutionnel ?",
"choix": [
"7",
"12",
"15",
"9"
],
"r": 3,
"exp": "Ils sont nommés pour neuf ans, trois par le président de la République, trois par celui de l'Assemblée et trois par celui du Sénat. Les anciens présidents de la République en sont membres de droit.",
"lien": "La Ve République"
},
{
"theme": "politique",
"niveau": 3,
"q": "Qui fut le premier Premier ministre de la Ve République ?",
"choix": [
"Georges Pompidou",
"Michel Debré",
"Jacques Chaban-Delmas",
"Maurice Couve de Murville"
],
"r": 1,
"exp": "Nommé en janvier 1959, il avait été l'un des principaux rédacteurs de la Constitution de 1958. Il reste en poste jusqu'en 1962.",
"lien": "Charles de Gaulle"
},
{
"theme": "politique",
"niveau": 3,
"q": "Qui était Premier ministre lors de la première cohabitation (1986-1988) ?",
"choix": [
"Édouard Balladur",
"Jacques Chirac",
"Lionel Jospin",
"Raymond Barre"
],
"r": 1,
"exp": "Mitterrand nomme Chirac après la victoire de la droite aux législatives de 1986. Balladur sera Premier ministre de la deuxième cohabitation, Jospin de la troisième.",
"lien": "Jacques Chirac"
},
{
"theme": "politique",
"niveau": 3,
"q": "Comment a été adoptée en 1962 l'élection du président de la République au suffrage universel direct ?",
"choix": [
"Par le Parlement réuni en Congrès à Versailles",
"Par une loi organique votée par le Parlement",
"Par une ordonnance du gouvernement",
"Par référendum"
],
"r": 3,
"exp": "De Gaulle recourt à l'article 11, ce qui suscite de vives critiques juridiques. L'Assemblée renverse le gouvernement Pompidou, De Gaulle la dissout et remporte le référendum puis les élections.",
"lien": "Charles de Gaulle"
},
{
"theme": "geographie",
"niveau": 1,
"q": "Quel est le plus haut sommet du monde ?",
"choix": [
"Le K2",
"Le Kangchenjunga",
"L'Aconcagua",
"L'Everest"
],
"r": 3,
"exp": "Situé à la frontière entre le Népal et la Chine, il culmine à 8 848,86 m selon la mesure commune de 2020. Le K2, deuxième, atteint 8 611 m.",
"lien": "L'Everest"
},
{
"theme": "geographie",
"niveau": 1,
"q": "Quel est le plus long fleuve de France ?",
"choix": [
"La Seine",
"Le Rhône",
"La Loire",
"La Garonne"
],
"r": 2,
"exp": "Longue d'environ 1 000 km, elle coule entièrement en France. Elle est souvent présentée comme le dernier grand fleuve sauvage d'Europe.",
"lien": "La Loire"
},
{
"theme": "geographie",
"niveau": 1,
"q": "Quel est le plus grand océan du monde ?",
"choix": [
"L'océan Atlantique",
"L'océan Pacifique",
"L'océan Indien",
"L'océan Arctique"
],
"r": 1,
"exp": "Il couvre environ un tiers de la surface du globe, plus que toutes les terres émergées réunies. Il abrite aussi la fosse des Mariannes, point le plus profond connu.",
"lien": "L'océan Pacifique"
},
{
"theme": "geographie",
"niveau": 1,
"q": "Quel détroit sépare l'Europe de l'Afrique ?",
"choix": [
"Le Bosphore",
"Le détroit de Messine",
"Le détroit de Gibraltar",
"Le détroit d'Ormuz"
],
"r": 2,
"exp": "Il relie la Méditerranée à l'océan Atlantique et mesure environ 14 km de large au plus étroit.",
"lien": "Le détroit de Gibraltar"
},
{
"theme": "geographie",
"niveau": 1,
"q": "Quel est le plus grand désert chaud du monde ?",
"choix": [
"Le Kalahari",
"Le Sahara",
"Le désert d'Arabie",
"Le désert de Gobi"
],
"r": 1,
"exp": "Il couvre environ 9 millions de km². Au sens strict du mot désert (zone très sèche), l'Antarctique est encore plus vaste.",
"lien": "Le Sahara"
},
{
"theme": "geographie",
"niveau": 1,
"q": "Quelle est la capitale de l'Australie ?",
"choix": [
"Sydney",
"Melbourne",
"Canberra",
"Perth"
],
"r": 2,
"exp": "Ville nouvelle, elle a été choisie comme compromis entre Sydney et Melbourne, qui se disputaient le statut de capitale. Le Parlement s'y installe en 1927.",
"lien": ""
},
{
"theme": "geographie",
"niveau": 2,
"q": "Quel est le plus haut sommet d'Afrique ?",
"choix": [
"Le mont Kenya",
"Le Kilimandjaro",
"Le mont Stanley",
"Le Toubkal"
],
"r": 1,
"exp": "Ce volcan de Tanzanie culmine à 5 895 m. Ses glaciers sommitaux ont fortement reculé depuis un siècle.",
"lien": "Le Kilimandjaro"
},
{
"theme": "geographie",
"niveau": 2,
"q": "Quelle étendue d'eau, au bord de laquelle se trouve le point le plus bas des terres émergées, est si salée qu'on y flotte sans effort ?",
"choix": [
"La mer Caspienne",
"La mer Morte",
"La mer d'Aral",
"Le Grand Lac Salé"
],
"r": 1,
"exp": "Ses rives sont à plus de 400 m sous le niveau de la mer, et ce niveau baisse d'environ un mètre par an.",
"lien": "La mer Morte"
},
{
"theme": "geographie",
"niveau": 2,
"q": "Quel est le plus haut sommet des Amériques ?",
"choix": [
"L'Aconcagua",
"Le Denali",
"Le Chimborazo",
"Le Huascarán"
],
"r": 0,
"exp": "Situé en Argentine, dans les Andes, il dépasse 6 950 m. C'est aussi le plus haut sommet hors d'Asie.",
"lien": "L'Aconcagua"
},
{
"theme": "geographie",
"niveau": 2,
"q": "Combien de capitales d'États le Danube traverse-t-il ?",
"choix": [
"Deux",
"Quatre",
"Trois",
"Cinq"
],
"r": 1,
"exp": "Il traverse Vienne, Bratislava, Budapest et Belgrade. Il prend sa source en Allemagne et se jette dans la mer Noire.",
"lien": "Le Danube"
},
{
"theme": "geographie",
"niveau": 2,
"q": "Quel désert est considéré comme le plus aride du monde, hors régions polaires ?",
"choix": [
"Le désert du Namib",
"Le Sahara",
"Le désert d'Atacama",
"Le désert de Gobi"
],
"r": 2,
"exp": "Situé au Chili, il compte des stations où aucune pluie n'a été enregistrée pendant des années. Son ciel très pur y attire de grands observatoires astronomiques.",
"lien": "Le désert d'Atacama"
},
{
"theme": "geographie",
"niveau": 2,
"q": "Quelle est la plus longue chaîne de montagnes émergée du monde ?",
"choix": [
"Les Andes",
"Les Rocheuses",
"L'Himalaya",
"L'Oural"
],
"r": 0,
"exp": "Elle s'étire sur environ 7 000 km le long de la côte pacifique de l'Amérique du Sud. Les dorsales océaniques, sous-marines, sont bien plus longues.",
"lien": "Les Andes"
},
{
"theme": "geographie",
"niveau": 3,
"q": "Quel détroit relie la mer Noire à la mer de Marmara ?",
"choix": [
"Les Dardanelles",
"Le Bosphore",
"Le détroit de Kertch",
"Le canal d'Otrante"
],
"r": 1,
"exp": "Il traverse Istanbul et sépare l'Europe de l'Asie. Les Dardanelles relient ensuite la mer de Marmara à la mer Égée.",
"lien": "Le Bosphore"
},
{
"theme": "geographie",
"niveau": 3,
"q": "Quel est le point culminant du Massif central ?",
"choix": [
"Le puy de Dôme",
"Le plomb du Cantal",
"Le puy de Sancy",
"Le mont Lozère"
],
"r": 2,
"exp": "Ce volcan éteint culmine à 1 885 m. Le puy de Dôme, plus célèbre, ne mesure que 1 465 m.",
"lien": "Le Massif central"
},
{
"theme": "geographie",
"niveau": 3,
"q": "Quel est le plus long fleuve d'Europe ?",
"choix": [
"Le Danube",
"Le Dniepr",
"La Volga",
"Le Rhin"
],
"r": 2,
"exp": "Longue d'environ 3 500 km, elle coule entièrement en Russie et se jette dans la mer Caspienne. Le Danube arrive en deuxième position.",
"lien": ""
}
];
