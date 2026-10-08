// BOUDDHISME — cat: courants, histoire, figures, calendrier (concepts & fêtes)
const boudData=[
 // ===== BRANCHES =====
 {nom:"Le Theravada",dates:"depuis l'Antiquité",role:"« La voie des anciens »",cat:"courants",catLabel:"☸️ Branche",color:"#24406b",emoji:"☸️",img:"",
  resume:"La plus ancienne école, fidèle aux textes originels. Dominante en Asie du Sud-Est (Thaïlande, Birmanie, Sri Lanka).",
  detail:`<p>Le <strong>Theravada</strong> (« la doctrine des anciens ») est l'école la plus ancienne et la plus proche de l'enseignement originel du Bouddha. Elle insiste sur l'effort individuel du moine pour atteindre l'éveil (le statut d'<em>arhat</em>).</p>
  <p>Elle domine au Sri Lanka, en Birmanie, en Thaïlande, au Laos et au Cambodge. Ses moines en robe safran et ses temples dorés en sont les images familières.</p>`},
 {nom:"Le Mahayana",dates:"à partir du Ier siècle",role:"« Le grand véhicule »",cat:"courants",catLabel:"☸️ Branche",color:"#24406b",emoji:"☸️",img:"",
  resume:"La plus répandue des branches, centrée sur la compassion et l'idéal du bodhisattva. Chine, Japon, Corée, Vietnam.",
  detail:`<p>Le <strong>Mahayana</strong> (« le grand véhicule ») est la branche la plus répandue. Il met au centre la <strong>compassion</strong> et l'idéal du <strong>bodhisattva</strong> : celui qui, pouvant accéder au nirvana, choisit d'aider tous les êtres à se libérer.</p>
  <p>Très diversifié, il domine en Chine, au Japon, en Corée et au Vietnam, et a donné naissance à de nombreuses écoles, dont le Zen et le bouddhisme de la Terre pure.</p>`},
 {nom:"Le Vajrayana (bouddhisme tibétain)",dates:"à partir du VIIe siècle",role:"« Le véhicule de diamant »",cat:"courants",catLabel:"☸️ Branche",color:"#24406b",emoji:"🏔️",img:"",
  resume:"Branche ésotérique, riche en rituels, mantras et mandalas, dominante au Tibet et en Mongolie.",
  detail:`<p>Le <strong>Vajrayana</strong> (« véhicule de diamant »), surtout connu sous la forme du <strong>bouddhisme tibétain</strong>, est une voie ésotérique et rituelle. Il utilise les mantras, les mandalas, les visualisations et la relation au maître spirituel (le lama) pour accélérer l'éveil.</p>
  <p>Il est dirigé par de grands maîtres réincarnés, dont le <strong>Dalaï-Lama</strong>. On le trouve au Tibet, au Bhoutan, au Népal et en Mongolie.</p>`},
 {nom:"Le Zen",dates:"à partir du VIe siècle",role:"La voie de la méditation",cat:"courants",catLabel:"🧘 Branche",color:"#24406b",emoji:"🧘",img:"",
  resume:"École du Mahayana née en Chine (Chan) et développée au Japon, centrée sur la méditation assise.",
  detail:`<p>Le <strong>Zen</strong> (de l'école chinoise <em>Chan</em>) est une forme épurée du Mahayana, développée en Chine puis au Japon. Il privilégie la <strong>méditation assise</strong> (<em>zazen</em>) et l'expérience directe de l'éveil, au-delà des mots et des concepts.</p>
  <p>Ses koans (énigmes paradoxales), sa simplicité et son esthétique ont profondément marqué la culture japonaise (jardins, cérémonie du thé, arts martiaux) et séduit l'Occident.</p>`},

 // ===== HISTOIRE =====
 {nom:"Le Bouddha et l'Éveil",dates:"v. VIe – Ve siècle av. J.-C.",role:"La naissance du bouddhisme",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"🌳",img:"",
  resume:"Le prince Siddhârta Gautama atteint l'Éveil sous l'arbre de la Bodhi et devient le Bouddha.",
  detail:`<p>Le bouddhisme naît en Inde de l'expérience de <strong>Siddhârta Gautama</strong>, prince qui renonce à sa vie de luxe après avoir découvert la souffrance (vieillesse, maladie, mort).</p>
  <p>Après des années de recherche, il atteint l'<strong>Éveil</strong> (<em>bodhi</em>) en méditant sous un arbre à Bodh-Gaya, devenant le <strong>Bouddha</strong> (« l'Éveillé »). Il passe ensuite sa vie à enseigner la voie de la libération de la souffrance.</p>`},
 {nom:"Les premiers conciles et le canon",dates:"à partir du Ve siècle av. J.-C.",role:"La fixation de l'enseignement",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"📜",img:"",
  resume:"Après la mort du Bouddha, ses disciples réunissent et fixent ses enseignements, transmis d'abord oralement.",
  detail:`<p>Après la mort du Bouddha, ses disciples se réunissent en <strong>conciles</strong> pour recueillir et fixer son enseignement, d'abord transmis oralement. Il sera finalement mis par écrit, notamment dans le canon pâli (le <em>Tipitaka</em>, « les trois corbeilles »).</p>
  <p>Des divergences d'interprétation apparaissent peu à peu, à l'origine des différentes écoles.</p>`},
 {nom:"Ashoka et la diffusion",dates:"IIIe siècle av. J.-C.",role:"L'empereur qui propagea le bouddhisme",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"🦁",img:"",
  resume:"Converti après une guerre sanglante, l'empereur Ashoka fait du bouddhisme une religion rayonnante.",
  detail:`<p>L'empereur <strong>Ashoka</strong>, qui règne sur presque toute l'Inde, se convertit au bouddhisme après avoir été horrifié par le carnage de ses propres conquêtes. Il en devient le grand protecteur.</p>
  <p>Il fait graver des édits prônant la non-violence, construit des monuments (<em>stupas</em>) et envoie des missionnaires jusqu'au Sri Lanka et au-delà. C'est lui qui transforme le bouddhisme en une religion de rayonnement international.</p>`},
 {nom:"La diffusion en Asie",dates:"Ier – VIIIe siècle",role:"La route de la soie et au-delà",cat:"histoire",catLabel:"📜 Histoire",color:"#475f8a",emoji:"🌏",img:"",
  resume:"Le bouddhisme se répand par la route de la soie vers la Chine, puis la Corée, le Japon et le Tibet.",
  detail:`<p>Par la <strong>route de la soie</strong>, le bouddhisme pénètre en <strong>Chine</strong> dès le Ier siècle, où il se mêle au taoïsme et au confucianisme. Il gagne ensuite la Corée puis le <strong>Japon</strong>.</p>
  <p>Au VIIe-VIIIe siècle, il s'implante au <strong>Tibet</strong> sous sa forme tantrique. Paradoxalement, il décline ensuite dans son Inde natale, absorbé par l'hindouisme et affaibli par les invasions.</p>`},

 // ===== FIGURES =====
 {nom:"Le Bouddha (Siddhârta Gautama)",dates:"v. 563 – 483 av. J.-C.",role:"L'Éveillé, fondateur",cat:"figures",catLabel:"☸️ Figure",color:"#2563eb",emoji:"☸️",img:"",
  resume:"Prince indien devenu « l'Éveillé », il enseigne la voie pour se libérer de la souffrance.",
  detail:`<p><strong>Siddhârta Gautama</strong>, le <strong>Bouddha</strong>, est le fondateur du bouddhisme. Contrairement aux fondateurs des autres grandes religions, il ne se présente pas comme un dieu ni un prophète, mais comme un <strong>homme éveillé</strong> qui a trouvé la voie de la libération.</p>
  <p>Son enseignement central : la vie est marquée par la souffrance, dont la cause est le désir ; il est possible de s'en libérer en suivant une voie juste menant au <strong>nirvana</strong>.</p>`},
 {nom:"Nagarjuna",dates:"v. IIe siècle",role:"Le grand philosophe du Mahayana",cat:"figures",catLabel:"📚 Figure",color:"#2563eb",emoji:"📚",img:"",
  resume:"Penseur majeur, il développe la philosophie de la « vacuité », au cœur du bouddhisme mahayana.",
  detail:`<p><strong>Nagarjuna</strong>, philosophe indien, est l'un des penseurs les plus influents du bouddhisme après le Bouddha lui-même. Il développe la doctrine de la <strong>vacuité</strong> (<em>sunyata</em>) : rien n'existe de façon indépendante, tout est interdépendant.</p>
  <p>Sa pensée est au fondement de l'école Madhyamaka et de tout le bouddhisme mahayana.</p>`},
 {nom:"Bodhidharma",dates:"v. Ve – VIe siècle",role:"Le patriarche du Zen",cat:"figures",catLabel:"🧘 Figure",color:"#2563eb",emoji:"🧘",img:"",
  resume:"Moine indien qui aurait introduit le Chan (Zen) en Chine, légendaire fondateur de Shaolin.",
  detail:`<p><strong>Bodhidharma</strong>, moine venu d'Inde, est considéré comme le fondateur du <strong>Chan</strong> (le Zen) en Chine. La légende le fait méditer neuf ans face à un mur et initier les moines du monastère de <strong>Shaolin</strong>, liant le bouddhisme aux arts martiaux.</p>
  <p>Il incarne l'esprit du Zen : la transmission directe, d'esprit à esprit, au-delà des écritures.</p>`},
 {nom:"Le Dalaï-Lama",dates:"depuis le XVe siècle",role:"Chef spirituel du bouddhisme tibétain",cat:"figures",catLabel:"🏔️ Figure",color:"#2563eb",emoji:"🏔️",img:"",
  resume:"Chef spirituel des Tibétains, considéré comme une réincarnation ; le 14e, prix Nobel de la paix, est mondialement connu.",
  detail:`<p>Le <strong>Dalaï-Lama</strong> est le plus haut chef spirituel du bouddhisme tibétain, considéré comme la réincarnation du bodhisattva de la compassion. Chaque Dalaï-Lama est « retrouvé » enfant comme la renaissance du précédent.</p>
  <p>Le <strong>14e Dalaï-Lama</strong>, Tenzin Gyatso, exilé en Inde depuis 1959 après l'annexion du Tibet par la Chine, est devenu une figure mondiale du dialogue et de la paix, prix Nobel de la paix en 1989.</p>`},

 // ===== CONCEPTS & FÊTES =====
 {nom:"Les Quatre Nobles Vérités",dates:"enseignement fondamental",role:"Le cœur de la doctrine",cat:"calendrier",catLabel:"☸️ Concept",color:"#0ea5e9",emoji:"☸️",img:"",
  resume:"Le diagnostic du Bouddha sur la souffrance et le chemin pour s'en libérer.",
  detail:`<p>Les <strong>Quatre Nobles Vérités</strong> sont le cœur de l'enseignement du Bouddha :</p>
  <ul class="fact-list"><li>La vie comporte la <strong>souffrance</strong> (<em>dukkha</em>)</li><li>La souffrance a une cause : le <strong>désir</strong> et l'attachement</li><li>On peut mettre fin à la souffrance</li><li>Le chemin pour y parvenir est le <strong>Noble Chemin octuple</strong> (vue juste, parole juste, action juste, méditation...)</li></ul>`},
 {nom:"Karma et réincarnation",dates:"principe fondamental",role:"Le cycle des renaissances",cat:"calendrier",catLabel:"🔄 Concept",color:"#0ea5e9",emoji:"🔄",img:"",
  resume:"Nos actes (karma) déterminent nos renaissances successives dans le cycle du samsara.",
  detail:`<p>Le bouddhisme reprend les notions indiennes de <strong>karma</strong> et de <strong>samsara</strong>. Le <em>karma</em> est la loi des actes : nos actions, bonnes ou mauvaises, ont des conséquences qui déterminent nos <strong>renaissances</strong> futures.</p>
  <p>Le <em>samsara</em> est le cycle sans fin des morts et des renaissances, marqué par la souffrance. Le but ultime est de s'en libérer en atteignant le nirvana.</p>`},
 {nom:"Le Nirvana",dates:"but ultime",role:"La libération",cat:"calendrier",catLabel:"🕊️ Concept",color:"#0ea5e9",emoji:"🕊️",img:"",
  resume:"L'extinction du désir et de la souffrance, la libération définitive du cycle des renaissances.",
  detail:`<p>Le <strong>nirvana</strong> (« extinction ») est le but ultime du bouddhisme : la libération définitive du cycle des renaissances et de la souffrance. Ce n'est pas un paradis, mais l'extinction du désir, de l'illusion et de l'ego.</p>
  <p>Celui qui l'atteint est délivré du samsara. Le Bouddha lui-même y est entré à sa mort (le <em>parinirvana</em>).</p>`},
 {nom:"Vesak",dates:"pleine lune de mai",role:"La grande fête bouddhiste",cat:"calendrier",catLabel:"🪷 Fête",color:"#0ea5e9",emoji:"🪷",img:"",
  resume:"La fête la plus importante, célébrant la naissance, l'Éveil et la mort du Bouddha.",
  detail:`<p><strong>Vesak</strong> est la plus grande fête bouddhiste, célébrée à la pleine lune de mai. Elle commémore en un seul jour les trois grands moments de la vie du Bouddha : sa <strong>naissance</strong>, son <strong>Éveil</strong> et sa <strong>mort</strong> (entrée dans le nirvana).</p>
  <p>Les fidèles se rendent aux temples, offrent des fleurs et des lumières, méditent et pratiquent des actes de générosité.</p>`}
];
