// ===================== NAVIGATION =====================
const _built={};
function showSection(id){
  document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const nb=document.getElementById('nav-'+id);
  if(nb)nb.classList.add('active');
  window.scrollTo(0,0);
  if(!_built[id]){
    _built[id]=true;
    if(id==='france')buildFranceTimeline();
    else if(id==='guerres')buildGuerres();
    else if(id==='religions')buildReligions();
    else if(id==='antiquite')buildAntiquite();
    else if(id==='figures')buildFigures();
    else if(id==='monde')buildMonde();
    else if(id==='art'){buildEncGrid(typeof artData!=='undefined'?artData:null,'art-grid');buildEncGrid(typeof artistesData!=='undefined'?artistesData:null,'artistes-grid');}
    else if(id==='litterature')buildEncGrid(typeof littData!=='undefined'?littData:null,'litt-grid');
    else if(id==='politique')buildEncGrid(typeof politiqueData!=='undefined'?politiqueData:null,'politique-grid');
    else if(id==='evenements')buildEncGrid(typeof evenementsData!=='undefined'?evenementsData:null,'evenements-grid');
    else if(id==='geographie')buildEncGrid(typeof geoData!=='undefined'?geoData:null,'geo-grid');
    else if(id==='christianisme')buildEncGrid(typeof christData!=='undefined'?christData:null,'christ-grid');
    else if(id==='islam')buildEncGrid(typeof islamData!=='undefined'?islamData:null,'islam-grid');
    else if(id==='judaisme')buildEncGrid(typeof judData!=='undefined'?judData:null,'jud-grid');
    else if(id==='bouddhisme')buildEncGrid(typeof boudData!=='undefined'?boudData:null,'boud-grid');
    else if(id==='hindouisme')buildEncGrid(typeof hindData!=='undefined'?hindData:null,'hind-grid');
    else if(id==='figuresfr')buildEncGrid(typeof figFrData!=='undefined'?figFrData:null,'figfr-grid');
    else if(id==='faitsdivers')buildEncGrid(typeof faitsDiversData!=='undefined'?faitsDiversData:null,'faitsdivers-grid');
    else if(id==='presidents')buildEncGrid(typeof presidentsData!=='undefined'?presidentsData:null,'presidents-grid');
    else if(id==='partis')buildEncGrid(typeof partisData!=='undefined'?partisData:null,'partis-grid');
    else if(id==='frisefrance')buildFrise();
    else if(id==='frisemonde')buildFriseMonde();
  }
}

// ===================== MODAL =====================
function openModal(title,dates,bodyHtml){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-dates').textContent=dates;
  document.getElementById('modal-body').innerHTML=bodyHtml;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(e){if(e.target===document.getElementById('modal'))closeModalBtn();}
function closeModalBtn(){document.getElementById('modal').classList.remove('open');document.body.style.overflow='';}

// ===================== ANECDOTE =====================
function anec(label,text){
  return `<span class="anecdote">
    <span class="anec-trigger" onclick="this.parentElement.classList.toggle('open')">💡</span>
    <span class="anec-bubble"><div class="anec-label">Le saviez-vous ?</div>${text}</span>
  </span>`;
}

// ===================== TIMELINE TOGGLE =====================
function toggleCard(el){
  el.classList.toggle('expanded');
}

// ===================== ERA FILTER =====================
function filterEra(era,btn){
  document.querySelectorAll('.era-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.timeline-era').forEach(e=>{
    if(era==='all'||e.dataset.era===era)e.style.display='block';
    else e.style.display='none';
  });
}

// ===================== FRANCE DATA =====================
/* francePeriodes -> data/francePeriodes.js */

function buildFranceTimeline(){
  const container=document.getElementById('france-timeline');
  container.innerHTML='';
  francePeriodes.forEach(periode=>{
    const eraDiv=document.createElement('div');
    eraDiv.className='timeline-era';
    eraDiv.dataset.era=periode.era;
    eraDiv.innerHTML=`<div class="era-title">${periode.eraLabel}</div>`;
    periode.items.forEach((item,i)=>{
      const div=document.createElement('div');
      div.className='timeline-item';
      const thumbHtml=item.img?`<div class="tc-thumb"><img src="${item.img}" alt="${item.titre}" onerror="this.parentElement.style.display='none'" loading="lazy"></div>`:'';
      div.innerHTML=`
        <div class="timeline-dot ${item.major?'major':''}"></div>
        <div class="timeline-card" onclick="toggleCard(this)">
          <div class="tc-header">
            <div style="flex:1;min-width:0">
              <div class="tc-title">${item.titre}</div>
              <div class="tc-subtitle">${item.subtitle}</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0">
              <div class="tc-dates">${item.dates}</div>
              <div class="tc-expand">▼</div>
            </div>
            ${thumbHtml}
          </div>
          <div class="tc-body">
            <p>${item.resume}</p>
            <button onclick="event.stopPropagation();openItemModal(${i},'${periode.era}')" class="btn-more">En savoir plus →</button>
          </div>
        </div>`;
      eraDiv.appendChild(div);
    });
    container.appendChild(eraDiv);
  });
}

function openItemModal(itemIndex, eraKey){
  const periode=francePeriodes.find(p=>p.era===eraKey);
  const item=periode.items[itemIndex];
  openModal(item.titre, item.dates, item.detail);
}

// ===================== GUERRES DATA =====================
/* guerresData -> data/guerresData.js */

function buildGuerres(){
  const container=document.getElementById('wars-list');
  container.innerHTML='';
  guerresData.forEach((w,i)=>{
    const div=document.createElement('div');
    div.className='war-card';
    div.onclick=()=>openModal(w.titre,w.year,w.detail);
    const thumbHtml=w.img?`<div class="war-thumb"><img src="${w.img}" alt="${w.titre}" onerror="this.parentElement.style.display='none'" loading="lazy"></div>`:'';
    div.innerHTML=`
      <div class="war-period">
        <div class="war-year">${w.year.split('–')[0].trim()}</div>
        <div class="war-duration">${w.year}</div>
      </div>
      <div>
        <div class="war-title">${w.titre}</div>
        <div class="war-desc">${w.desc}</div>
        <div class="war-tags">${w.tags.map(t=>`<span class="war-tag ${t}">${t==='france'?'🇫🇷 France':t==='europe'?'🌍 Europe':'🌐 Mondial'}</span>`).join('')}</div>
      </div>
      ${thumbHtml}`;
    container.appendChild(div);
  });
}

// ===================== RELIGIONS DATA =====================
/* relData -> data/relData.js */

function buildReligions(){
  const container=document.getElementById('religion-list');
  container.innerHTML='';
  relData.forEach((r,i)=>{
    const div=document.createElement('div');
    div.className='rel-item';
    div.onclick=()=>openModal(r.nom,r.year,r.detail);
    const thumbHtml=r.img?`<div class="rel-thumb"><img src="${r.img}" alt="${r.nom}" onerror="this.parentElement.style.display='none'" loading="lazy"></div>`:'';
    div.innerHTML=`
      <div><div class="rel-year">${r.year}</div></div>
      <div>
        <div class="rel-name">${r.nom}</div>
        <div class="rel-desc">${r.desc}</div>
      </div>
      ${thumbHtml}`;
    container.appendChild(div);
  });
}

// ===================== ANTIQUITE DATA =====================
/* antiqData -> data/antiqData.js */

function buildAntiquite(){
  const container=document.getElementById('antiq-list');
  container.innerHTML='';
  antiqData.forEach((a,i)=>{
    const div=document.createElement('div');
    div.className='antiq-card';
    div.style.setProperty('--card-color',a.color);
    div.style.borderColor='transparent';
    div.onclick=()=>openModal(a.nom,a.dates,a.detail);
    const imgHtml=a.img?`<img class="antiq-card-img" src="${a.img}" alt="${a.nom}" onerror="this.style.display='none'" loading="lazy">`:'';
    div.innerHTML=`
      ${imgHtml}
      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem">
        <div style="width:10px;height:10px;border-radius:50%;background:${a.color}"></div>
        <h3 style="color:${a.color};margin:0">${a.nom}</h3>
      </div>
      <div class="antiq-dates">${a.dates}</div>
      <p>${a.desc}</p>
      <div style="margin-top:1rem;font-size:0.75rem;color:${a.color};opacity:0.7">Cliquer pour en savoir plus →</div>`;
    div.addEventListener('mouseenter',()=>div.style.borderColor=a.color);
    div.addEventListener('mouseleave',()=>div.style.borderColor='transparent');
    container.appendChild(div);
  });
}

// ===================== GRANDES FIGURES DATA =====================
/* figuresData -> data/figuresData.js */

function filterFigures(cat,btn){
  document.querySelectorAll('.fig-filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.figure-card').forEach(card=>{
    if(cat==='all'||card.dataset.cat===cat){card.style.display='block';}
    else{card.style.display='none';}
  });
}

function buildFigures(){
  const grid=document.getElementById('figures-grid');
  grid.innerHTML='';
  figuresData.forEach((f,i)=>{
    const card=document.createElement('div');
    card.className='figure-card';
    card.dataset.cat=f.categorie;
    card.style.setProperty('--fig-color',f.accentColor);
    card.onclick=()=>openModal(f.nom,f.dates,f.detail);
    const portraitHtml=f.img
      ?`<img class="fig-portrait" src="${f.img}" alt="${f.nom}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" loading="lazy"><span class="fig-emoji" style="display:none">${f.emoji}</span>`
      :`<span class="fig-emoji">${f.emoji}</span>`;
    card.innerHTML=`
      <style scoped>.figure-card[data-cat="${f.categorie}"]:hover{border-color:${f.accentColor}!important;}</style>
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${f.accentColor},transparent)"></div>
      ${portraitHtml}
      <div class="fig-dates" style="color:${f.accentColor}">${f.dates}</div>
      <h3>${f.nom}</h3>
      <div class="fig-role">${f.role}</div>
      <div class="fig-desc">${f.desc}</div>
      <span class="fig-tag ${f.categorie}">${f.categorie==='conquerant'?'⚔️ Conquérant':f.categorie==='dirigeant'?'👑 Dirigeant':f.categorie==='penseur'?'🧠 Penseur':f.categorie==='resistant'?'✊ Résistant':f.categorie==='explorateur'?'🌊 Explorateur':'🔥 Révolutionnaire'}</span>`;
    card.addEventListener('mouseenter',()=>card.style.borderColor=f.accentColor);
    card.addEventListener('mouseleave',()=>card.style.borderColor='var(--border)');
    grid.appendChild(card);
  });
}

// ===================== MONDE DATA =====================
/* mondePeriodes -> data/mondePeriodes.js */

function buildMonde(){
  const container=document.getElementById('monde-timeline');
  container.innerHTML='';
  mondePeriodes.forEach(periode=>{
    const eraDiv=document.createElement('div');
    eraDiv.className='timeline-era';
    eraDiv.dataset.era=periode.era;
    eraDiv.innerHTML=`<div class="era-title">${periode.eraLabel}</div>`;
    periode.items.forEach((item,i)=>{
      const div=document.createElement('div');
      div.className='timeline-item';
      const thumbHtml=item.img?`<div class="tc-thumb"><img src="${item.img}" alt="${item.titre}" onerror="this.parentElement.style.display='none'" loading="lazy"></div>`:'';
      div.innerHTML=`
        <div class="timeline-dot ${item.major?'major':''}"></div>
        <div class="timeline-card" onclick="toggleCard(this)">
          <div class="tc-header">
            <div style="flex:1;min-width:0">
              <div class="tc-title">${item.titre}</div>
              <div class="tc-subtitle">${item.subtitle}</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0">
              <div class="tc-dates">${item.dates}</div>
              <div class="tc-expand">▼</div>
            </div>
            ${thumbHtml}
          </div>
          <div class="tc-body">
            <p>${item.resume}</p>
            <button onclick="event.stopPropagation();openMondeModal(${i},'${periode.era}')" class="btn-more">En savoir plus →</button>
          </div>
        </div>`;
      eraDiv.appendChild(div);
    });
    container.appendChild(eraDiv);
  });
}

function openMondeModal(itemIndex,eraKey){
  const periode=mondePeriodes.find(p=>p.era===eraKey);
  const item=periode.items[itemIndex];
  openModal(item.titre,item.dates,item.detail);
}

function filterMondeEra(era,btn){
  document.querySelectorAll('#monde .era-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#monde-timeline .timeline-era').forEach(e=>{
    if(era==='all'||e.dataset.era===era)e.style.display='block';
    else e.style.display='none';
  });
}

// ===================== GRILLE ENCYCLOPEDIQUE GENERIQUE =====================
// Utilisee par Art, Litterature, Politique, Evenements, Geographie.
// Chaque item : {nom, dates, role, cat, catLabel, color, emoji, img, resume, detail}
function buildEncGrid(data, containerId){
  const grid=document.getElementById(containerId);
  if(!grid||!data)return;
  grid.innerHTML='';
  data.forEach(it=>{
    const card=document.createElement('div');
    card.className='enc-card';
    card.dataset.cat=it.cat||'';
    if(it.fr)card.dataset.fr='1';
    const c=it.color||'#2563eb';
    const imgHtml=it.img?`<img src="${it.img}" alt="${it.nom}" loading="lazy" onerror="this.style.display='none';var e=this.parentNode.querySelector('.enc-emoji');if(e)e.style.display='flex';">`:'';
    const emojiStyle=it.img?' style="display:none"':'';
    card.innerHTML=`
      <div class="enc-bar" style="background:linear-gradient(90deg,${c},transparent)"></div>
      <div class="enc-thumb">${imgHtml}<span class="enc-emoji"${emojiStyle}>${it.emoji||'📜'}</span></div>
      <div class="enc-dates" style="color:${c}">${it.dates||''}</div>
      <h3>${it.nom}</h3>
      <div class="enc-role">${it.role||''}</div>
      <div class="enc-desc">${it.resume||''}</div>
      ${it.catLabel?`<span class="enc-tag" style="border-color:${c};color:${c}">${it.catLabel}</span>`:''}`;
    card.onclick=()=>openModal(it.nom, it.dates||'', it.detail);
    card.addEventListener('mouseenter',()=>card.style.borderColor=c);
    card.addEventListener('mouseleave',()=>card.style.borderColor='var(--border)');
    grid.appendChild(card);
  });
}

function filterEncGrid(containerId,cat,btn){
  btn.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const grid=document.getElementById(containerId);
  if(!grid)return;
  grid.querySelectorAll('.enc-card').forEach(card=>{
    card.style.display=(cat==='all'||card.dataset.cat===cat||(cat==='fr'&&card.dataset.fr==='1'))?'':'none';
  });
}

// ===================== GEOGRAPHIE : carte d3 (planisphere reel) =====================
const SVGNS='http://www.w3.org/2000/svg';
const GEO_MARKER_COLORS={fleuve:'#38bdf8',montagne:'#a5b4fc',mer:'#22d3ee',ocean:'#60a5fa',detroit:'#818cf8',desert:'#fbbf24',ville:'#fbbf24',site:'#34d399'};
const GEO_REGIONS={monde:null,europe:[-12,34,42,60],afrique:[-19,-36,52,38],asie:[40,5,150,72],ameriques:[-140,-56,-34,72],oceanie:[110,-48,180,-8],france:[-5.5,41,9.8,51.5],regions:[-5.5,41,9.8,51.5]};
let _geoMapBuilt=false,_geoProjection=null,_geoZoom=null,_geoSvgSel=null,_geoCurRegion='monde';

function _geoMapMsg(txt){
  const w=document.getElementById('geo-map-wrap');if(!w)return;
  let m=document.getElementById('geo-map-msg');
  if(!m){m=document.createElement('div');m.id='geo-map-msg';m.className='geo-map-hint';w.appendChild(m);}
  m.textContent=txt;
}
function buildGeoMap(){
  if(_geoMapBuilt)return;
  const svg=document.getElementById('geo-map');if(!svg)return;
  if(typeof d3==='undefined'||typeof topojson==='undefined'){_geoMapMsg('Carte momentanément indisponible : une connexion est requise au tout premier chargement.');return;}
  if(typeof WORLD_TOPO==='undefined'){_geoMapMsg('Carte indisponible : le fond de carte ne s\'est pas chargé.');return;}
  _geoMapBuilt=true;
  const world=WORLD_TOPO,W=1000,H=500;
  const countries=topojson.feature(world,world.objects.countries).features;
  _geoProjection=d3.geoNaturalEarth1().fitSize([W,H],{type:'Sphere'});
  const path=d3.geoPath(_geoProjection);
  d3.select('#geo-countries').selectAll('path').data(countries).join('path')
    .attr('d',path)
    .attr('class',d=>(d.properties&&d.properties.name==='France')?'france':null);
  if(typeof FRANCE_REGIONS!=='undefined'){
    /* dessin via ensureRegionsLayer */
  }
  ensureRegionsLayer();
  var _rl0=document.getElementById('geo-regions-layer'); if(_rl0)_rl0.style.display='none';
  drawGeoMarkers();
  _geoSvgSel=d3.select(svg);
  _geoZoom=d3.zoom().scaleExtent([1,40]).on('zoom',(ev)=>{
    d3.select('#geo-zoom').attr('transform',ev.transform);
    const inv=1/ev.transform.k;
    document.querySelectorAll('#geo-markers .geo-marker, #geo-regions-layer .region-label').forEach(g=>{const b=g.__pos;if(b)g.setAttribute('transform','translate('+b[0]+','+b[1]+') scale('+inv+')');});
  });
  _geoSvgSel.call(_geoZoom);
}

function ensureRegionsLayer(){
  const layer=document.getElementById('geo-regions-layer');
  if(!layer||!_geoProjection)return false;
  if(layer.querySelectorAll('path').length>0)return true;
  if(typeof FRANCE_REGIONS==='undefined')return false;
  const p=d3.geoPath(_geoProjection);
  const layerEl=document.getElementById('geo-regions-layer');
  d3.select('#geo-regions-layer').selectAll('path').data(FRANCE_REGIONS.features).join('path')
    .attr('d',p).attr('class','region-shape');
  FRANCE_REGIONS.features.forEach(f=>{
    const cen=p.centroid(f);
    if(!cen||isNaN(cen[0]))return;
    const g=document.createElementNS(SVGNS,'g');
    g.setAttribute('class','region-label');
    g.__pos=[cen[0],cen[1]];
    g.setAttribute('transform','translate('+cen[0].toFixed(1)+','+cen[1].toFixed(1)+')');
    const tx=document.createElementNS(SVGNS,'text');
    tx.setAttribute('text-anchor','middle');
    tx.textContent=f.properties.nom;
    g.appendChild(tx);
    layerEl.appendChild(g);
  });
  return true;
}

function drawGeoMarkers(){
  const g=document.getElementById('geo-markers');if(!g||!_geoProjection)return;
  g.innerHTML='';
  const add=(it,level)=>{
    if(typeof it.lon!=='number'||typeof it.lat!=='number')return;
    const p=_geoProjection([it.lon,it.lat]);if(!p)return;
    const c=it.color||GEO_MARKER_COLORS[it.cat||it.type]||'#38bdf8';
    const grp=document.createElementNS(SVGNS,'g');
    grp.setAttribute('class','geo-marker');
    grp.setAttribute('data-cat',it.cat||it.type||'');
    grp.setAttribute('data-level',level);
    grp.__pos=[p[0],p[1]];
    grp.setAttribute('transform','translate('+p[0].toFixed(1)+','+p[1].toFixed(1)+')');
    if(level!=='monde')grp.style.display='none';
    const halo=document.createElementNS(SVGNS,'circle');halo.setAttribute('class','halo');halo.setAttribute('r','13');halo.setAttribute('fill','none');halo.setAttribute('stroke',c);halo.setAttribute('stroke-width','2');halo.setAttribute('opacity','0.5');
    const dot=document.createElementNS(SVGNS,'circle');dot.setAttribute('class','dot');dot.setAttribute('r','6');dot.setAttribute('fill',c);dot.setAttribute('stroke','#fff');dot.setAttribute('stroke-width','1.5');
    const txt=document.createElementNS(SVGNS,'text');txt.setAttribute('text-anchor','middle');txt.setAttribute('y','-15');txt.textContent=it.nom;
    grp.appendChild(halo);grp.appendChild(dot);grp.appendChild(txt);
    grp.addEventListener('click',(e)=>{e.stopPropagation();openModal(it.nom,it.dates||'',it.detail);});
    g.appendChild(grp);
  };
  if(typeof geoData!=='undefined')geoData.forEach(it=>add(it,'monde'));
  if(typeof geoFranceData!=='undefined')geoFranceData.forEach(it=>add(it,'france'));
  if(typeof geoRegionsData!=='undefined')geoRegionsData.forEach(it=>add(it,'regions'));
}

function focusGeoRegion(region,btn){
  document.querySelectorAll('.geo-region-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  _geoCurRegion=region;
  const visLevel=(region==='regions')?'regions':(region==='france')?'france':'monde';
  document.querySelectorAll('#geo-markers .geo-marker').forEach(m=>{
    m.style.display=(m.getAttribute('data-level')===visLevel)?'':'none';
  });
  const rl=document.getElementById('geo-regions-layer');
  if(region==='regions'){
    const ok=ensureRegionsLayer();
    if(rl)rl.style.display='inline';
    if(!ok||(rl&&rl.querySelectorAll('path').length===0)){
      _geoMapMsg("Contours des regions indisponibles : le fichier data/regionsGeo.js n'est pas charge (a deployer / vider le cache).");
    }
  } else if(rl){
    rl.style.display='none';
  }
  if(!_geoProjection||!_geoSvgSel||!_geoZoom)return;
  const bbox=GEO_REGIONS[region];const W=1000,H=500;let tr;
  if(!bbox){tr=d3.zoomIdentity;}
  else{
    const a=_geoProjection([bbox[0],bbox[3]]);const b=_geoProjection([bbox[2],bbox[1]]);
    const x0=Math.min(a[0],b[0]),x1=Math.max(a[0],b[0]),y0=Math.min(a[1],b[1]),y1=Math.max(a[1],b[1]);
    const dx=Math.max(1,x1-x0),dy=Math.max(1,y1-y0);
    const k=Math.max(1,Math.min(40,0.85/Math.max(dx/W,dy/H)));
    const cx=(x0+x1)/2,cy=(y0+y1)/2;
    tr=d3.zoomIdentity.translate(W/2-k*cx,H/2-k*cy).scale(k);
  }
  _geoSvgSel.transition().duration(750).call(_geoZoom.transform,tr);
}

function resetGeoZoom(){
  const mb=document.querySelector('.geo-region-btn');
  focusGeoRegion('monde',mb);
}
function setGeoView(view,btn){
  document.querySelectorAll('.geo-view-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const grid=document.getElementById('geo-grid');
  const map=document.getElementById('geo-map-wrap');
  if(view==='carte'){grid.style.display='none';map.style.display='block';
    if(_geoMapBuilt)return;
    _geoMapMsg('Chargement de la carte…');
    loadMapLibs().then(()=>{const m=document.getElementById('geo-map-msg');if(m)m.remove();buildGeoMap();})
      .catch(()=>_geoMapMsg('Carte momentanément indisponible : une connexion est requise au tout premier chargement.'));
  }
  else{grid.style.display='';map.style.display='none';}
}

function filterGeo(cat,btn){
  btn.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const grid=document.getElementById('geo-grid');
  if(grid)grid.querySelectorAll('.enc-card').forEach(card=>{card.style.display=(cat==='all'||card.dataset.cat===cat)?'':'none';});
  // sur la carte : ne filtre que les reperes mondiaux (les reperes France sont geres par le cadrage)
  document.querySelectorAll('#geo-markers .geo-marker[data-level="monde"]').forEach(m=>{m.style.display=(cat==='all'||m.dataset.cat===cat)?'':'none';});
}

// ===================== FRISE DE FRANCE =====================
function buildFrise(){
  const container=document.getElementById('frise-timeline');
  if(!container||typeof friseFr==='undefined')return;
  container.innerHTML='';
  const COL={roi:'#d4a72c',regime:'#2563eb',evenement:'#0ea5e9'};
  const LAB={roi:'👑 Roi',regime:'🏛️ Régime',evenement:'⚡ Événement'};
  friseFr.forEach(periode=>{
    const eraDiv=document.createElement('div');
    eraDiv.className='timeline-era';
    eraDiv.innerHTML='<div class="era-title">'+periode.eraLabel+'</div>';
    periode.items.forEach(it=>{
      const col=COL[it.type]||'#2563eb';
      const div=document.createElement('div');
      div.className='timeline-item frise-item';
      div.dataset.type=it.type||'';
      const thumb=it.img?'<div class="tc-thumb"><img src="'+it.img+'" alt="'+it.titre+'" onerror="this.parentElement.style.display=\'none\'" loading="lazy"></div>':'';
      div.innerHTML='<div class="timeline-dot '+(it.major?'major':'')+'" style="background:'+col+'"></div>'
        +'<div class="timeline-card frise-card">'
        +'<div class="tc-header"><div style="flex:1;min-width:0">'
        +'<div class="tc-title">'+it.titre+'</div>'
        +'<span class="frise-badge" style="border-color:'+col+';color:'+col+'">'+(LAB[it.type]||'')+'</span>'
        +'</div><div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0">'
        +'<div class="tc-dates">'+it.dates+'</div></div>'+thumb+'</div>'
        +'<div class="tc-sub">'+it.resume+'</div></div>';
      div.querySelector('.timeline-card').addEventListener('click',()=>openModal(it.titre,it.dates,it.detail));
      eraDiv.appendChild(div);
    });
    container.appendChild(eraDiv);
  });
}
function filterFriseType(type,btn){
  btn.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#frise-timeline .frise-item').forEach(it=>{
    it.style.display=(type==='all'||it.dataset.type===type)?'':'none';
  });
}

function buildFriseMonde(){
  const container=document.getElementById('frisemonde-timeline');
  if(!container||typeof friseMonde==='undefined')return;
  container.innerHTML='';
  const COL={empire:'#d4a72c',revolution:'#0ea5e9',evenement:'#2563eb',catastrophe:'#c0493f'};
  const LAB={empire:'🏛️ Empire',revolution:'⚡ Révolution',evenement:'⚔️ Événement',catastrophe:'☢️ Catastrophe'};
  friseMonde.forEach(periode=>{
    const eraDiv=document.createElement('div');
    eraDiv.className='timeline-era';
    eraDiv.innerHTML='<div class="era-title">'+periode.eraLabel+'</div>';
    periode.items.forEach(it=>{
      const col=COL[it.type]||'#2563eb';
      const div=document.createElement('div');
      div.className='timeline-item frise-item';
      div.dataset.type=it.type||'';
      const thumb=it.img?'<div class="tc-thumb"><img src="'+it.img+'" alt="'+it.titre+'" onerror="this.parentElement.style.display=\'none\'" loading="lazy"></div>':'';
      div.innerHTML='<div class="timeline-dot '+(it.major?'major':'')+'" style="background:'+col+'"></div>'
        +'<div class="timeline-card frise-card">'
        +'<div class="tc-header"><div style="flex:1;min-width:0">'
        +'<div class="tc-title">'+it.titre+'</div>'
        +'<span class="frise-badge" style="border-color:'+col+';color:'+col+'">'+(LAB[it.type]||'')+'</span>'
        +'</div><div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0">'
        +'<div class="tc-dates">'+it.dates+'</div></div>'+thumb+'</div>'
        +'<div class="tc-sub">'+it.resume+'</div></div>';
      div.querySelector('.timeline-card').addEventListener('click',()=>openModal(it.titre,it.dates,it.detail));
      eraDiv.appendChild(div);
    });
    container.appendChild(eraDiv);
  });
}
function filterFriseMonde(type,btn){
  btn.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#frisemonde-timeline .frise-item').forEach(it=>{
    it.style.display=(type==='all'||it.dataset.type===type)?'':'none';
  });
}


// ===================== CHARGEMENT DIFFÉRÉ DE LA CARTE =====================
// d3, topojson et les fonds de carte (~550 Ko) ne sont chargés qu'à l'ouverture de la carte.
let _mapLibsPromise=null;
function _loadScript(src){
  return new Promise((res,rej)=>{const sc=document.createElement('script');sc.src=src;sc.onload=res;sc.onerror=()=>rej(new Error(src));document.head.appendChild(sc);});
}
function loadMapLibs(){
  if(!_mapLibsPromise){
    const V='?v=26';
    _mapLibsPromise=Promise.all([
      typeof d3!=='undefined'?null:_loadScript('https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js'),
      typeof WORLD_TOPO!=='undefined'?null:_loadScript('data/worldTopo.js'+V),
      typeof FRANCE_REGIONS!=='undefined'?null:_loadScript('data/regionsGeo.js'+V)
    ]).then(()=>typeof topojson!=='undefined'?null:_loadScript('https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js'))
      .catch(e=>{_mapLibsPromise=null;throw e;});
  }
  return _mapLibsPromise;
}

// ===================== RECHERCHE GLOBALE =====================
let _searchIndex=null,_searchTimer=null;
function _norm(t){return (t||'').toString().normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();}
function _strip(h){return (h||'').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/\s+/g,' ');}
function _buildSearchIndex(){
  const idx=[];
  const add=(arr,section,label,map)=>{if(typeof arr==='undefined'||!arr)return;arr.forEach(o=>{const e=map(o);if(!e||!e.t)return;
    e.section=section;e.label=label;e.nt=_norm(e.t);e.ns=_norm((e.s||'')+' '+(e.d||''));e.nb=null;e.raw=e.b||'';idx.push(e);});};
  const flat=(eras)=>(eras||[]).reduce((a,p)=>a.concat(p.items||[]),[]);
  const g=(n)=>{try{return eval(n);}catch(_){return undefined;}};
  add(flat(g('francePeriodes')),'france','Histoire de France',o=>({t:o.titre,d:o.dates,s:o.subtitle||o.resume,b:o.detail}));
  add(flat(g('friseFr')),'frisefrance','Frise de France',o=>({t:o.titre,d:o.dates,s:o.resume,b:o.detail}));
  add(flat(g('mondePeriodes')),'monde','Histoire du Monde',o=>({t:o.titre,d:o.dates,s:o.subtitle||o.resume,b:o.detail}));
  add(flat(g('friseMonde')),'frisemonde','Frise du Monde',o=>({t:o.titre,d:o.dates,s:o.resume,b:o.detail}));
  add(g('guerresData'),'guerres','Guerres',o=>({t:o.titre,d:o.year,s:o.desc,b:o.detail}));
  add(g('relData'),'religions','Religions',o=>({t:o.nom,d:o.year,s:o.desc,b:o.detail}));
  add(g('antiqData'),'antiquite','Antiquité',o=>({t:o.nom,d:o.dates,s:o.desc,b:o.detail}));
  add(g('figuresData'),'figures','Grandes Figures',o=>({t:o.nom,d:o.dates,s:o.role,b:o.detail}));
  const enc=[['artData','art','Art'],['artistesData','art','Artistes'],['faitsDiversData','faitsdivers','Faits divers'],['presidentsData','presidents','Présidents'],['partisData','partis','Partis politiques'],['littData','litterature','Littérature'],['politiqueData','politique','Politique'],['evenementsData','evenements','Grands faits'],
    ['christData','christianisme','Christianisme'],['islamData','islam','Islam'],['judData','judaisme','Judaïsme'],['boudData','bouddhisme','Bouddhisme'],
    ['hindData','hindouisme','Hindouisme'],['figFrData','figuresfr','Figures françaises'],['geoData','geographie','Géographie']];
  enc.forEach(([n,sec,lab])=>add(g(n),sec,lab,o=>({t:o.nom,d:o.dates,s:o.role,b:o.detail})));
  add(g('geoFranceData'),'geographie','Géographie (France)',o=>({t:o.nom,d:'',s:o.resume,b:o.detail}));
  return idx;
}
function globalSearch(q){
  clearTimeout(_searchTimer);
  _searchTimer=setTimeout(()=>_runSearch(q),120);
}
function _runSearch(q){
  const box=document.getElementById('search-results');if(!box)return;
  const nq=_norm(q).trim();
  if(nq.length<2){box.innerHTML='';box.classList.remove('open');return;}
  if(!_searchIndex)_searchIndex=_buildSearchIndex();
  const words=nq.split(/\s+/).filter(Boolean);
  const res=[];
  _searchIndex.forEach((e,i)=>{
    let score=0;
    for(const w of words){
      if(e.nt.startsWith(w)||e.nt.includes(' '+w))score+=10;
      else if(e.nt.includes(w))score+=6;
      else if(e.ns.includes(w))score+=3;
      else{if(e.nb===null)e.nb=_norm(_strip(e.raw));if(e.nb.includes(w))score+=1;else{score=0;break;}}
    }
    if(score>0)res.push([score,i]);
  });
  res.sort((a,b)=>b[0]-a[0]);
  const top=res.slice(0,30);
  if(!top.length){box.innerHTML='<div class="search-empty">Aucun résultat pour « '+_esc(q)+' ».</div>';box.classList.add('open');return;}
  box.innerHTML='<div class="search-count">'+res.length+' résultat'+(res.length>1?'s':'')+(res.length>30?' (30 premiers affichés)':'')+'</div>'+
    top.map(([,i])=>{const e=_searchIndex[i];
      return '<button class="search-item" onclick="openSearchResult('+i+')"><span class="search-title">'+_esc(e.t)+'</span>'+
        '<span class="search-meta">'+_esc(e.label)+(e.d?' · '+_esc(e.d):'')+'</span></button>';}).join('');
  box.classList.add('open');
}
function _esc(t){return (t||'').toString().replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function openSearchResult(i){
  const e=_searchIndex&&_searchIndex[i];if(!e)return;
  openModal(e.t,e.d||'',e.raw||('<p>'+_esc(e.s||'')+'</p>'));
}

// Compteurs de fiches sur l'accueil (toujours à jour)
function _fillHomeCounts(){
  document.querySelectorAll('.cat-tag[data-count]').forEach(el=>{
    let arr;try{arr=eval(el.dataset.count);}catch(_){arr=null;}
    if(Array.isArray(arr))el.textContent=arr.length+(el.dataset.suffix||' fiches');
  });
}

// ===================== INIT =====================
_built['home']=true;
_fillHomeCounts();
