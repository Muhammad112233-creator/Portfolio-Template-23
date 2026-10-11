/* ============================================================
   AlexOS ’96 → 2026 · app.js
   retro window manager + apps + time travel + modern portfolio
   ============================================================ */
'use strict';

/* ================= EDIT ME — your details live here ================= */
const CONFIG = {
  name: 'Alex Carter',
  osName: 'AlexOS',
  roleLine: 'Designer & Creative Developer · Oslo · 2026',
  email: 'hello@alexcarter.dev',
  phone: '+47 400 00 000',
  linkedin: 'https://www.linkedin.com/',
  resume: 'resume.pdf',
  screenName: 'AlexC88',          // retro chat screen name
};

/* ================= PROJECTS (drives retro folder + modern cards) ================= */
const PROJECTS = [
  { slug:'nordlys', title:'Nordlys', cat:'Fintech App Design',
    role:'Lead Product Designer', year:'2025', stack:['Product Design','iOS','Design System','Motion'],
    img:'assets/img/work-nordlys.jpg',
    desc:'A mobile banking app rebuilt around calm. Nordlys turns everyday money management into a glanceable, almost ambient experience — balances breathe, insights surface gently, and nothing shouts.' },
  { slug:'fjell', title:'Fjell', cat:'Brand Identity & E-Commerce',
    role:'Design Lead', year:'2024', stack:['Branding','Art Direction','E-Commerce','Packaging'],
    img:'assets/img/work-fjell.jpg',
    desc:'Full identity and online store for a Norwegian outdoor gear startup. A faceted mountain mark, a rugged type system, and a shop that feels like the trailhead of an adventure.' },
  { slug:'pulse', title:'Pulse', cat:'Music Player Redesign',
    role:'Product Designer', year:'2025', stack:['UX','UI','Interaction','Prototyping'],
    img:'assets/img/work-pulse.jpg',
    desc:'A concept redesign of a streaming player built for listeners, not feeds. The now-playing screen reacts to the waveform in real time — every song gets its own light show.' },
  { slug:'atlas', title:'Atlas', cat:'Design System at Scale',
    role:'Design Engineer', year:'2024', stack:['Design Tokens','Components','Docs','Figma API'],
    img:'assets/img/work-atlas.jpg',
    desc:'A design system serving nine product teams. Token pipelines, a living component library, and docs people actually read — shipping UI consistency without slowing anyone down.' },
  { slug:'kaffe', title:'Kaffe', cat:'E-Commerce & Art Direction',
    role:'Creative Developer', year:'2023', stack:['E-Commerce','WebGL','Art Direction'],
    img:'assets/img/work-kaffe.jpg',
    desc:'A craft coffee subscription with a storefront you can almost smell. Slow scroll-driven roasting stories, a brew-guide generator, and checkout in under a minute.' },
  { slug:'orbit', title:'Orbit', cat:'Interactive WebGL Journey',
    role:'Creative Developer', year:'2025', stack:['WebGL','GLSL','Three.js','Audio'],
    img:'assets/img/work-orbit.jpg',
    desc:'An award-nominated interactive journey through a satellite constellation — built in the browser, scored generatively, and smooth at 60fps on a mid-range phone.' },
  { slug:'haven', title:'Haven', cat:'Property Platform',
    role:'Front-End Lead', year:'2023', stack:['React','Maps','Search UX','Performance'],
    img:'assets/img/work-haven.jpg',
    desc:'A property platform that treats house-hunting like storytelling. Map-first browsing, honest photography, and search that understands “sunny balcony, near the water”.' },
  { slug:'sno', title:'Snø', cat:'Ski Resort Companion App',
    role:'Product Designer & Developer', year:'2026', stack:['App Design','Motion','Live Data'],
    img:'assets/img/work-sno.jpg',
    desc:'A companion app for a Scandinavian ski resort — live lift queues, trail conditions rendered as light trails, and a one-gloved-hand interface that works at −20°.' },
];

/* ================= content for the retro layer ================= */
const TIPS = [
  'The first website ever published is still online today.',
  'The Nintendo 64 arrived in 1996 — with Super Mario 64 leading the way.',
  'In 1996, connecting to the internet came with a free soundtrack of beeps and static.',
  'The average 1996 hard drive held about 1 GB. This portfolio would barely fit.',
  '“You’ve got mail” was first spoken by an AOL voice actor in 1989.',
  'Windows 95 sold 7 million copies in its first five weeks.',
  'The first version of CSS was proposed in 1994 — before that, pages were gray on purpose.',
  'In 1996 a “fast” modem moved 33.6 kilobits per second. Patience was a feature.',
  'DVDs were introduced in Japan in November 1996.',
  'The dancing baby GIF — one of the first viral memes — is from 1996.',
];

const NOSTALGIA = [
  ['1995','Toy Story becomes the first fully computer-animated feature film.'],
  ['1996','Dial-up tones echo through living rooms everywhere as households go online.'],
  ['1996','The first flip phone, the Motorola StarTAC, makes pockets everywhere cooler.'],
  ['1997','Tamagotchi fever: millions of kids raise digital pets on tiny keychains.'],
  ['1998','Google is founded in a garage — “search” becomes a verb shortly after.'],
  ['1999','Napster launches and music is never the same again.'],
  ['1999','The Matrix asks everyone to pick a pill and question their SIM card.'],
];

const QUIZ = [
  { q:'Which 1996 console shipped with Super Mario 64?',
    opts:['PlayStation','Nintendo 64','Sega Saturn','Dreamcast'], a:1 },
  { q:'What sound did AOL famously greet users with?',
    opts:['“Hello there!”','A modem handshake','“You’ve got mail”','A trumpet fanfare'], a:2 },
  { q:'Which search engine was founded in 1998?',
    opts:['AltaVista','Yahoo!','Lycos','Google'], a:3 },
  { q:'What was a Tamagotchi?',
    opts:['A digital pet','A karaoke machine','A fax brand','A cereal'], a:0 },
  { q:'Which movie asked us to choose between a red pill and a blue pill?',
    opts:['Hackers','The Matrix','Tron','WarGames'], a:1 },
];

const TRACKS = [
  { name:'Dial-Up Dreams', artist:'The Floppies', len:'3:42', bpm:112, root:220 },
  { name:'Teal Horizon', artist:'CRT Ghost', len:'4:05', bpm:96, root:196 },
  { name:'Pixel Sunset', artist:'DJ Taskbar', len:'2:58', bpm:124, root:247 },
  { name:'Megabyte Moonlight', artist:'The Floppies', len:'3:21', bpm:104, root:175 },
];

const WALLS = [
  { id:'bg-teal', label:'Teal (classic)' },
  { id:'bg-clouds', label:'Clouds' },
  { id:'bg-bricks', label:'Bricks' },
  { id:'bg-grape', label:'Grape' },
  { id:'bg-midnight', label:'Midnight' },
];

const BOT_RULES = [
  [/\b(hi|hey|hello|yo|sup)\b/i, ['Hey! Welcome to my corner of 1996. 📡','Hey hey. Great to see a fellow time traveler.']],
  [/work|project|portfolio|case/i, ['You can double-click 🗂️ Selected Work on the desktop — or hit ⟳ 2026 in the taskbar to see the shiny modern versions.']],
  [/hire|job|freelance|available|recruit/i, ['I’m always up for interesting problems. Fastest route: the ✉️ Contact icon, or email ' + CONFIG.email + '.']],
  [/who|about|your name|you\b/i, ['I’m the digital ghost of a portfolio: half operating system, half design reel. The human behind it is ' + CONFIG.name + '.']],
  [/2026|future|update|time travel/i, ['Hit the ⟳ 2026 button in the taskbar. Buckle up — it’s a whole light-speed sequence.']],
  [/game|play|mines|snake/i, ['Open 🎮 Games on the desktop. Minesweeper and Snake are both fully playable. Loser reboots.']],
  [/music|napster|song|tune/i, ['🎵 Napster is on the desktop. All tracks are synthesized live in your browser — no viruses, promise.']],
  [/joke|funny/i, ['Why did the developer go broke? He used up all his cache.']],
  [/contact|email|mail|phone/i, ['You can reach the human at ' + CONFIG.email + ' — or try smoke signals, whichever arrives first.']],
  [/bye|later|cya/i, ['Until next time. I’ll be here, idling at 3% CPU.']],
];
const BOT_FALLBACK = [
  'Beep boop. My 1996 brain parsed approximately none of that — try “work”, “hire” or “games”.',
  'Interesting. My dictionary fits on a floppy, so ask me about work, games, or 2026.',
  'Command not found… just kidding. Ask me about the work or how to time-travel.',
];

/* ================= tiny synth sfx ================= */
let AC = null;
function ac(){ if(!AC){ try{ AC = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} } return AC; }
function tone(f,t,d,type,g){
  const a=ac(); if(!a) return;
  const o=a.createOscillator(), v=a.createGain();
  o.type=type||'square'; o.frequency.value=f;
  v.gain.setValueAtTime(g||.03,a.currentTime);
  v.gain.exponentialRampToValueAtTime(.0001,a.currentTime+d);
  o.connect(v); v.connect(a.destination);
  o.start(a.currentTime+(t||0)); o.stop(a.currentTime+(t||0)+d);
}
const sfx = {
  click(){ tone(720,0,.06,'square',.02); },
  open(){ tone(520,0,.07,'square',.025); tone(780,.06,.08,'square',.025); },
  close(){ tone(420,0,.08,'square',.02); },
  error(){ tone(220,0,.22,'sawtooth',.045); },
  chime(){ [523,659,784,1047].forEach((f,i)=>tone(f,i*.09,.28,'triangle',.045)); },
  type(){ tone(950,0,.03,'square',.012); },
  win(){ [392,523,659,784,1047].forEach((f,i)=>tone(f,i*.07,.22,'square',.04)); },
  lose(){ [330,262,196,131].forEach((f,i)=>tone(f,i*.12,.26,'sawtooth',.04)); },
  whoosh(){
    const a=ac(); if(!a) return;
    const len=3.2, buf=a.createBuffer(1,a.sampleRate*len,a.sampleRate), ch=buf.getChannelData(0);
    for(let i=0;i<ch.length;i++){ ch[i]=(Math.random()*2-1)*Math.pow(i/ch.length,1.6); }
    const src=a.createBufferSource(); src.buffer=buf;
    const f=a.createBiquadFilter(); f.type='bandpass'; f.Q.value=1.2;
    f.frequency.setValueAtTime(180,a.currentTime);
    f.frequency.exponentialRampToValueAtTime(3400,a.currentTime+len);
    const g=a.createGain(); g.gain.setValueAtTime(.16,a.currentTime);
    g.gain.exponentialRampToValueAtTime(.0001,a.currentTime+len);
    src.connect(f); f.connect(g); g.connect(a.destination); src.start();
  },
};

/* ================= helpers ================= */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const isMobile = matchMedia('(max-width:760px)').matches;
function esc(s){ return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

/* ============================================================
   WINDOW MANAGER
   ============================================================ */
const desk = $('#desk');
let zTop = 10, cascade = 0;
const openWins = {};

function focusWin(w){
  zTop++; w.style.zIndex = zTop;
  $$('.win').forEach(x => x.classList.add('blur'));
  w.classList.remove('blur');
  $$('.taskbtn').forEach(b => b.classList.toggle('on', b.dataset.id === w.dataset.id));
}

function makeWindow(id, title, bodyHTML, width){
  if(openWins[id]){ const w = openWins[id]; w.classList.remove('min'); focusWin(w); return w; }
  const win = document.createElement('div');
  win.className = 'win'; win.dataset.id = id;
  win.innerHTML =
    '<div class="tbar"><span class="ti">'+title+'</span>' +
    '<span class="tbtn" data-act="min" title="Minimize">_</span>' +
    '<span class="tbtn" data-act="close" title="Close">✕</span></div>' +
    '<div class="wbody">' + bodyHTML + '</div>';
  if(!isMobile){
    const w = width || 380;
    win.style.width = w + 'px';
    win.style.left = Math.min(Math.max(200 + cascade, 8), Math.max(8, innerWidth - w - 20)) + 'px';
    win.style.top  = Math.min(42 + cascade, Math.max(8, innerHeight - 320)) + 'px';
    cascade = (cascade + 30) % 150;
  }
  desk.appendChild(win);
  openWins[id] = win;

  const tb = document.createElement('button');
  tb.className = 'taskbtn'; tb.dataset.id = id; tb.textContent = title.replace(/^[^\w]+/,'').trim();
  tb.addEventListener('click', () => {
    sfx.click();
    if(win.classList.contains('min')){ win.classList.remove('min'); focusWin(win); }
    else if(!win.classList.contains('blur')) win.classList.add('min');
    else focusWin(win);
  });
  $('#tasks').appendChild(tb);

  win.querySelector('[data-act="close"]').addEventListener('click', e => {
    e.stopPropagation(); sfx.close(); win.remove(); tb.remove(); delete openWins[id];
  });
  win.querySelector('[data-act="min"]').addEventListener('click', e => {
    e.stopPropagation(); sfx.click(); win.classList.add('min'); tb.classList.remove('on');
  });
  win.addEventListener('pointerdown', () => focusWin(win));

  if(!isMobile){
    const bar = win.querySelector('.tbar');
    let dx=0, dy=0, drag=false;
    bar.addEventListener('pointerdown', e => {
      if(e.target.closest('.tbtn')) return;
      drag = true; const r = win.getBoundingClientRect();
      dx = e.clientX - r.left; dy = e.clientY - r.top;
      bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener('pointermove', e => {
      if(!drag) return;
      win.style.left = Math.max(-win.offsetWidth + 60, Math.min(innerWidth - 80, e.clientX - dx)) + 'px';
      win.style.top  = Math.max(0, Math.min(innerHeight - 70, e.clientY - dy)) + 'px';
    });
    bar.addEventListener('pointerup', () => drag = false);
  }
  focusWin(win);
  sfx.open();
  return win;
}

/* ============================================================
   DESKTOP ICONS + START MENU
   ============================================================ */
const ICONS = [
  ['work','🗂️','Selected Work', openWorkFolder],
  ['about','📝','About Me', openAbout],
  ['what','W','What I Do', openWhatIDo],
  ['now','🛰️','Now (2026)', openNow],
  ['contact','✉️','Contact', openContact],
  ['resume','📄','Résumé.pdf', openResume],
  ['kidpix','🎨','Kid Pix', openPaint],
  ['quiz','❓','Pop Culture Quiz', openQuiz],
  ['clippy','📎','Clippy Help', toggleClippy],
  ['games','🎮','Games', openGames],
  ['aims','💬','AIMS', openChat],
  ['walls','🖼️','Backgrounds', openWalls],
  ['napster','🎵','Napster', openNapster],
  ['nostalgia','📺','Nostalgia Moments', openNostalgia],
  ['timetravel','🕰️','Time Travel', openTimeTravel],
  ['bin','🗑️','Recycle Bin', openBin],
];

function buildIcons(){
  const box = $('#icons');
  ICONS.forEach(([id,ic,label,fn]) => {
    const d = document.createElement('div');
    d.className = 'dicon'; d.dataset.app = id;
    d.innerHTML = '<span class="ic">'+ic+'</span><span class="lbl">'+esc(label)+'</span>';
    if(isMobile){
      d.addEventListener('click', () => { sfx.click(); fn(); });
    } else {
      d.addEventListener('click', () => { $$('.dicon').forEach(x=>x.classList.remove('sel')); d.classList.add('sel'); sfx.click(); });
      d.addEventListener('dblclick', fn);
    }
    box.appendChild(d);
  });
  desk.addEventListener('pointerdown', e => {
    if(e.target === desk) $$('.dicon').forEach(x=>x.classList.remove('sel'));
  });
}

function buildStartMenu(){
  const items = [
    ['✦','Welcome', openWelcome], ['🗂️','Selected Work', openWorkFolder], ['📝','About Me', openAbout],
    ['🛰️','Now (2026)', openNow], ['🎮','Games', openGames], ['💬','AIMS', openChat],
    ['🖼️','Backgrounds', openWalls], ['🎵','Napster', openNapster], ['📺','Nostalgia Moment', openNostalgia],
    ['🕰️','Time Travel', openTimeTravel], ['✉️','Contact', openContact], ['📄','Résumé', openResume],
    ['🎨','Kid Pix', openPaint], ['❓','Pop Culture Quiz', openQuiz], ['⟳','Update to 2026', doUpdate],
    'sep',
    ['🔄','Restart', doRestart], ['🌙','Sleep', doSleep], ['⏻','Shut Down…', doShutdown],
  ];
  const m = $('#startmenu');
  let html = '<div class="sm-wrap"><div class="sm-side"><span>'+CONFIG.osName+' ’96</span></div><div class="sm-items">';
  items.forEach(it => {
    if(it === 'sep'){ html += '<div class="sm-sep"></div>'; return; }
    html += '<div class="sm-it" data-i="'+items.indexOf(it)+'"><span class="ic">'+it[0]+'</span>'+esc(it[1])+'</div>';
  });
  m.innerHTML = html + '</div></div>';
  m.querySelectorAll('.sm-it').forEach(el => el.addEventListener('click', () => {
    const it = items[+el.dataset.i]; toggleStart(false); sfx.click(); it[2]();
  }));
}
function toggleStart(force){
  const m = $('#startmenu'), b = $('#startbtn');
  const on = force !== undefined ? force : !m.classList.contains('on');
  m.classList.toggle('on', on); b.classList.toggle('pressed', on);
}

/* ============================================================
   APP WINDOWS
   ============================================================ */
function openWelcome(){
  makeWindow('welcome','✦ Welcome', '<div class="doc"><h3>Welcome to '+CONFIG.osName+' ’96</h3>'+
    '<p>This portfolio is a time machine. You are standing on the desktop as it looked in <b>1996</b> — pixel fonts, dial-up dreams and all.</p>'+
    '<p><b>Explore:</b> double-click any icon. Every app works — paint in Kid Pix, play Minesweeper, chat on AIMS, or fetch a chiptune on Napster.</p>'+
    '<p class="hl">Ready for the present? Press <b>⟳ 2026</b> on the taskbar to install the future.</p>'+
    '<div class="trow"><button class="btn" data-go="work">🗂️ Open Selected Work</button><button class="btn" data-go="tt">⟳ Jump to 2026</button></div></div>', 390)
    .querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => {
      sfx.click(); b.dataset.go === 'work' ? openWorkFolder() : doUpdate();
    }));
}

function openWorkFolder(){
  let html = '<div class="folder">';
  PROJECTS.forEach((p,i) => {
    html += '<div class="fitem" data-p="'+i+'"><span class="ic">📁</span><span class="fl">'+esc(p.title)+'.proj</span></div>';
  });
  html += '</div>';
  const w = makeWindow('work','🗂️ Selected Work', html, 460);
  const bar = document.createElement('div'); bar.className='fbar';
  bar.innerHTML = '<span>'+PROJECTS.length+' object(s)</span><span>double-click to open</span>';
  const body = w.querySelector('.wbody'); body.style.display='flex'; body.style.flexDirection='column';
  body.querySelector('.folder').style.flex='1'; body.appendChild(bar);
  w.querySelectorAll('.fitem').forEach(f => {
    const open = () => openProject(+f.dataset.p);
    if(isMobile) f.addEventListener('click', open); else f.addEventListener('dblclick', open);
    f.addEventListener('click', () => sfx.click());
  });
}

function openProject(i){
  const p = PROJECTS[i];
  makeWindow('proj'+p.slug, '📁 '+p.title+'.proj',
    '<div class="doc"><h3>'+esc(p.title)+'</h3>'+
    '<p><b>'+esc(p.cat)+'</b> · '+p.year+'</p>'+
    '<p>Role: '+esc(p.role)+'</p>'+
    '<p>'+p.stack.map(s=>'<span class="tag">'+esc(s)+'</span>').join('')+'</p>'+
    '<p>'+esc(p.desc)+'</p>'+
    '<div class="trow"><a class="btn" href="work/'+p.slug+'.html" target="_blank" rel="noopener">Open case study ↗</a></div></div>', 380);
}

function openAbout(){
  makeWindow('about','📝 About Me — Notepad',
    '<div class="doc"><h3>'+esc(CONFIG.name)+'</h3>'+
    '<p><b>'+esc(CONFIG.roleLine)+'</b></p>'+
    '<p>I design and build interfaces that feel alive. For the last decade I have worked across brand, product and code — usually all three before lunch.</p>'+
    '<p>I care about the details most people only feel: easing curves, empty states, the exact shade of a border at 2am.</p>'+
    '<p>When I am not pushing pixels or shaders, I am outside — hiking, skiing, or explaining to my coffee machine that it is not user-centered.</p>'+
    '<p class="hl">Fun fact: this entire operating system is one HTML file haunted by relatively few divs.</p></div>', 400);
}

function openWhatIDo(){
  makeWindow('what','W What I Do',
    '<div class="doc"><h3>What I Do</h3>'+
    '<p><b>Design &amp; Motion</b></p><ul><li>UI &amp; UX design, art direction</li><li>Design systems &amp; tokens</li><li>Motion, micro-interactions, 3D scenes</li></ul>'+
    '<p><b>Code &amp; Build</b></p><ul><li>Front-end architecture (React / TypeScript)</li><li>Creative development, WebGL &amp; shaders</li><li>Performance &amp; accessibility</li></ul>'+
    '<p><b>Leadership</b></p><ul><li>Product strategy &amp; roadmapping</li><li>Mentoring designers and engineers</li><li>Design operations</li></ul></div>', 380);
}

function openNow(){
  makeWindow('now','🛰️ Now (2026)',
    '<div class="doc"><h3>Now — 2026 Edition</h3>'+
    '<ul><li>🛰️ Senior Creative Developer at <b>Studio Nord</b> — leading design engineering for interactive client work.</li>'+
    '<li>🧪 Prototyping spatial interfaces and teaching shaders to designers.</li>'+
    '<li>🎿 Rebuilding a ski-resort companion app (see <b>Snø</b> in Selected Work).</li>'+
    '<li>📚 Reading about typography, again.</li>'+
    '<li>🕹️ Maintaining a 1996 operating system for fun. You are using it.</li></ul>'+
    '<p class="dim">(Updated October 2026, from a desk in Oslo.)</p></div>', 380);
}

function openContact(){
  const w = makeWindow('contact','✉️ Contact', '<div class="doc"><h3>Say hello</h3>'+
    '<p>The inbox is always open for interesting problems, collaborations, or arcade high-score disputes.</p>'+
    '<div class="trow" style="flex-wrap:wrap">'+
    '<a class="btn" href="mailto:'+CONFIG.email+'">✉️ '+esc(CONFIG.email)+'</a>'+
    '<a class="btn" href="tel:'+CONFIG.phone.replace(/\s/g,'')+'">📞 '+esc(CONFIG.phone)+'</a>'+
    '<a class="btn" href="'+CONFIG.linkedin+'" target="_blank" rel="noopener">LinkedIn ↗</a></div>'+
    '<p class="dim" style="margin-top:14px">Average response time: faster than a 33.6k modem.</p></div>', 400);
  w.querySelectorAll('a').forEach(a => a.addEventListener('click', () => sfx.click()));
}

function openResume(){
  makeWindow('resume','📄 Résumé.pdf — Viewer',
    '<div class="pdfbar"><span class="btn" style="cursor:default">🔍 100%</span><span class="dim">1 page · 68 KB</span>'+
    '<a class="btn" href="'+CONFIG.resume+'" target="_blank" rel="noopener" download>⬇ Download</a></div>'+
    '<div class="pdfdoc"><h1>'+esc(CONFIG.name)+'</h1><div class="sub">'+esc(CONFIG.roleLine)+'</div>'+
    '<h4>Experience</h4><p><b>Studio Nord</b> — Senior Creative Developer <i>(2024–present)</i></p>'+
    '<ul><li>Lead design engineering for interactive brand experiences.</li><li>Shipped 9 launches; two Awwwards honorable mentions.</li></ul>'+
    '<p><b>Fram Labs</b> — Product Designer <i>(2021–2024)</i></p>'+
    '<ul><li>Owned design for a fintech suite from zero to 400k users.</li></ul>'+
    '<p><b>Papir &amp; Pixel</b> — Front-End Developer <i>(2018–2021)</i></p>'+
    '<h4>Skills</h4><p>Design systems · Motion · React / TypeScript · WebGL / GLSL · Node · Figma · Accessibility</p>'+
    '<h4>Education</h4><p>BFA Interaction Design, Oslo National Academy of the Arts</p></div>', 480);
}

/* ---------- Kid Pix ---------- */
function openPaint(){
  const w = makeWindow('kidpix','🎨 Kid Pix',
    '<div class="kp"><div class="kp-tools">'+
    '<div class="kp-colors">' +
    ['#000000','#808080','#ff0000','#ff8800','#ffe600','#22c55e','#1084d0','#000082','#a855f7','#ff2d78','#8b5e34','#ffffff']
      .map((c,i)=>'<div class="kp-sw'+(i===0?' on':'')+'" data-c="'+c+'" style="background:'+c+'"></div>').join('') +
    '</div>'+
    '<button class="btn" data-t="size">🖌 Size: <b id="kpSize">6</b></button>'+
    '<button class="btn" data-t="stamp">★ Stamp</button>'+
    '<button class="btn" data-t="erase">▱ Eraser</button>'+
    '<button class="btn" data-t="undo">↩ Undo</button>'+
    '<button class="btn" data-t="bomb">💣 Clear</button>'+
    '<button class="btn" data-t="save">💾 Save</button>'+
    '</div><div class="kp-cv"><canvas id="kpCanvas"></canvas></div></div>', 620);
  w.style.height = '430px';

  const cv = w.querySelector('#kpCanvas'), ctx = cv.getContext('2d'), box = w.querySelector('.kp-cv');
  let color = '#000000', size = 6, erase = false, stamp = false, drawing = false, last = null;
  const undoStack = [];
  function fit(){
    const img = cv.width ? ctx.getImageData(0,0,cv.width,cv.height) : null;
    cv.width = box.clientWidth; cv.height = box.clientHeight;
    ctx.fillStyle = '#fff'; ctx.fillRect(0,0,cv.width,cv.height);
    if(img && img.width) ctx.putImageData(img,0,0);
  }
  requestAnimationFrame(fit);
  function snap(){ try{ undoStack.push(ctx.getImageData(0,0,cv.width,cv.height)); if(undoStack.length>20) undoStack.shift(); }catch(e){} }
  const pos = e => { const r = cv.getBoundingClientRect(); return [e.clientX-r.left, e.clientY-r.top]; };
  function dot(x,y){
    if(stamp){ ctx.font = (size*6)+'px serif'; ctx.textAlign='center';
      const st=['★','✿','☺','♫'][Math.floor(Math.random()*4)]; ctx.fillStyle=color; ctx.fillText(st,x,y); return; }
    ctx.strokeStyle = erase ? '#ffffff' : color; ctx.lineWidth = erase ? size*3 : size;
    ctx.lineCap='round'; ctx.lineJoin='round';
    ctx.beginPath(); ctx.moveTo(last?last[0]:x,last?last[1]:y); ctx.lineTo(x,y); ctx.stroke();
  }
  cv.addEventListener('pointerdown', e => { drawing = true; snap(); last = pos(e); dot(...last); cv.setPointerCapture(e.pointerId); });
  cv.addEventListener('pointermove', e => { if(!drawing) return; const p = pos(e); dot(...p); last = p; });
  cv.addEventListener('pointerup', () => { drawing = false; last = null; });
  w.querySelectorAll('.kp-sw').forEach(s => s.addEventListener('click', () => {
    w.querySelectorAll('.kp-sw').forEach(x=>x.classList.remove('on')); s.classList.add('on');
    color = s.dataset.c; erase = false; sfx.click();
  }));
  w.querySelectorAll('[data-t]').forEach(b => b.addEventListener('click', () => {
    const t = b.dataset.t; sfx.click();
    if(t==='size'){ size = size===6?14:(size===14?26:6); b.querySelector('b').textContent = size; }
    if(t==='stamp'){ stamp = !stamp; erase = false; b.style.fontWeight = stamp?'700':'400'; }
    if(t==='erase'){ erase = true; stamp = false; }
    if(t==='undo'){ const s = undoStack.pop(); if(s) ctx.putImageData(s,0,0); }
    if(t==='bomb'){ sfx.lose(); snap(); ctx.fillStyle='#fff'; ctx.fillRect(0,0,cv.width,cv.height); }
    if(t==='save'){ const a=document.createElement('a'); a.download='kidpix-masterpiece.png'; a.href=cv.toDataURL(); a.click(); }
  }));
}

/* ---------- Quiz ---------- */
function openQuiz(){
  const w = makeWindow('quiz','❓ Pop Culture Quiz',
    '<div class="qz"><div class="qscore">Question <b id="qN">1</b>/'+QUIZ.length+' · Score: <b id="qS">0</b></div>'+
    '<p class="qq" id="qQ"></p><div id="qOpts"></div><p class="qfb" id="qFb"></p>'+
    '<div class="trow"><button class="btn" id="qNext" disabled>Next →</button><button class="btn" id="qRetry">↺ Restart</button></div></div>', 380);
  let i = 0, score = 0;
  const qQ=w.querySelector('#qQ'), qOpts=w.querySelector('#qOpts'), qFb=w.querySelector('#qFb'),
        qN=w.querySelector('#qN'), qS=w.querySelector('#qS'), qNext=w.querySelector('#qNext');
  function render(){
    const q = QUIZ[i]; qQ.textContent = q.q; qFb.textContent = ''; qNext.disabled = true;
    qN.textContent = i+1; qS.textContent = score;
    qOpts.innerHTML = q.opts.map((o,k)=>'<button class="btn qopt" data-k="'+k+'">'+esc(o)+'</button>').join('');
    qOpts.querySelectorAll('.qopt').forEach(b => b.addEventListener('click', () => {
      if(!qFb.textContent){
        const good = +b.dataset.k === q.a;
        if(good){ score++; qFb.style.color='#080'; qFb.textContent = '✔ Correct!'; sfx.win(); }
        else{ qFb.style.color='#c00'; qFb.textContent = '✘ Nope — it was “'+q.opts[q.a]+'”.'; sfx.error(); }
        qS.textContent = score; qNext.disabled = false;
      }
    }));
  }
  qNext.addEventListener('click', () => {
    sfx.click();
    if(++i >= QUIZ.length){
      qQ.textContent = 'Final score: '+score+'/'+QUIZ.length+' '+(score===QUIZ.length?'— certified 90s kid 🏆':(score>=3?'— pretty rad!':'— time for a nostalgia rewatch.'));
      qOpts.innerHTML=''; qFb.textContent=''; qN.textContent=QUIZ.length; qNext.disabled=true;
    } else render();
  });
  w.querySelector('#qRetry').addEventListener('click', () => { i=0; score=0; sfx.click(); render(); });
  render();
}

/* ---------- Napster (chiptunes, 100% synthesized) ---------- */
let napTimer = null, napNodes = null;
function stopTune(){
  if(napTimer){ clearInterval(napTimer); napTimer = null; }
  if(napNodes){ try{ napNodes.g.gain.value = 0; napNodes.o.stop(); }catch(e){} napNodes = null; }
  $$('.np-track').forEach(t => t.classList.remove('on'));
  $$('.np-vis').forEach(v => v.style.display='none');
}
function playTune(w, idx){
  stopTune();
  const a = ac(); if(!a) return;
  const t = TRACKS[idx];
  const o = a.createOscillator(), o2 = a.createOscillator(), g = a.createGain();
  o.type = 'square'; o2.type = 'triangle'; g.gain.value = .05;
  const f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1400;
  o.connect(f); o2.connect(f); f.connect(g); g.connect(a.destination);
  o.start(); o2.start();
  napNodes = { o, o2, g };
  const scale = [0,3,5,7,10,12,15,12,10,7,5,3];
  let step = 0;
  napTimer = setInterval(() => {
    const n = t.root * Math.pow(2, scale[step % scale.length]/12);
    o.frequency.setTargetAtTime(n, a.currentTime, .01);
    o2.frequency.setTargetAtTime(n/2, a.currentTime, .01);
    if(step % 8 === 0) tone(t.root*2, 0, .1, 'square', .02);
    const vis = w.querySelector('.np-vis');
    if(vis && vis.style.display !== 'none') [...vis.children].forEach(b => b.style.height = (3 + Math.random()*15) + 'px');
    step++;
  }, 60000/t.bpm/2);
  w.querySelectorAll('.np-track').forEach((x,k) => x.classList.toggle('on', k===idx));
}
function openNapster(){
  const w = makeWindow('napster','🎵 Napster v2.0',
    '<div class="nap"><div class="np-now"><span id="npTitle">— nothing playing —</span><span class="np-vis" style="display:none">'+'<i></i>'.repeat(10)+'</span></div>'+
    '<div class="np-ctl"><button class="btn" data-c="prev">⏮</button><button class="btn" data-c="stop">⏹</button></div>'+
    TRACKS.map((t,i)=>'<div class="np-track" data-i="'+i+'"><span class="nm"><b>'+esc(t.name)+'</b><span>'+esc(t.artist)+'</span></span>'+
      '<span class="dim">'+t.len+' · 128kbps</span></div>').join('')+
    '<p class="dim" style="margin-top:8px">All tracks are synthesized live by your sound card. Totally legal since 1996. 😄</p></div>', 380);
  const vis = w.querySelector('.np-vis'), npTitle = w.querySelector('#npTitle');
  let cur = 0;
  function start(i){
    cur = i; playTune(w, i);
    npTitle.textContent = '♪ ' + TRACKS[i].name + ' — ' + TRACKS[i].artist;
    vis.style.display = 'flex';
  }
  w.querySelectorAll('.np-track').forEach(tr => tr.addEventListener('dblclick', () => start(+tr.dataset.i)));
  w.querySelectorAll('.np-track').forEach(tr => tr.addEventListener('click', () => { cur = +tr.dataset.i; sfx.click(); }));
  if(isMobile) w.querySelectorAll('.np-track').forEach(tr => tr.addEventListener('click', () => start(+tr.dataset.i)));
  w.querySelector('[data-c="prev"]').addEventListener('click', () => { start((cur+TRACKS.length-1)%TRACKS.length); });
  w.querySelector('[data-c="stop"]').addEventListener('click', () => { stopTune(); npTitle.textContent = '— nothing playing —'; });
  w.querySelector('[data-act="close"]').addEventListener('click', stopTune);
}

/* ---------- AIMS chat ---------- */
function pickBot(msg){
  for(const [re, replies] of BOT_RULES) if(re.test(msg)) return replies[Math.floor(Math.random()*replies.length)];
  return BOT_FALLBACK[Math.floor(Math.random()*BOT_FALLBACK.length)];
}
function openChat(){
  const w = makeWindow('aims','💬 AIMS — Instant Message',
    '<div class="im"><div class="log" id="imLog">'+
    '<p class="sys">BuddyList88 has joined the room</p>'+
    '<p><span class="b">BuddyList88:</span> hey!! it works 🎉 ask me anything — try “hire”, “games” or “2026”.</p></div>'+
    '<div class="sendrow"><input id="imIn" maxlength="120" placeholder="Type a message…" autocomplete="off"><button class="btn" id="imSend">Send</button></div></div>', 340);
  const log = w.querySelector('#imLog'), inp = w.querySelector('#imIn'), btn = w.querySelector('#imSend');
  function add(html){ const p = document.createElement('p'); p.innerHTML = html; log.appendChild(p); log.scrollTop = log.scrollHeight; }
  function send(){
    const v = inp.value.trim(); if(!v) return;
    add('<span class="u">'+esc(CONFIG.screenName)+':</span> '+esc(v));
    inp.value=''; sfx.type();
    const typing = document.createElement('p'); typing.className='sys'; typing.textContent='BuddyList88 is typing…';
    setTimeout(() => { log.appendChild(typing); log.scrollTop = log.scrollHeight; }, 350);
    setTimeout(() => { typing.remove(); add('<span class="b">BuddyList88:</span> '+esc(pickBot(v))); sfx.type(); }, 1100 + Math.random()*700);
  }
  btn.addEventListener('click', send);
  inp.addEventListener('keydown', e => { if(e.key === 'Enter') send(); });
  setTimeout(() => inp.focus(), 80);
}

/* ---------- Games ---------- */
function openGames(){
  const w = makeWindow('games','🎮 Games',
    '<div class="ghub">'+
    '<div class="gh-it" data-g="mines"><span class="ic">💣</span><span><b>Minesweeper</b><span>10 mines · clear the field, save the desktop</span></span></div>'+
    '<div class="gh-it" data-g="snake"><span class="ic">🐍</span><span><b>Snake</b><span>eat pixels, grow, regret nothing</span></span></div>'+
    '<p class="dim" style="margin-top:8px">High scores are kept in memory — literally; they vanish when you shut down.</p></div>', 320);
  w.querySelectorAll('.gh-it').forEach(g => {
    const open = () => g.dataset.g === 'mines' ? openMines() : openSnake();
    if(isMobile) g.addEventListener('click', open); else g.addEventListener('dblclick', open);
    g.addEventListener('click', () => sfx.click());
  });
}

/* minesweeper */
function openMines(){
  const N=9, M=10;
  const w = makeWindow('mines','💣 Minesweeper',
    '<div class="ms"><div class="ms-top"><div class="ms-lcd" id="msMines">010</div>'+
    '<button class="btn ms-face" id="msFace">🙂</button><div class="ms-lcd" id="msTime">000</div></div>'+
    '<div class="ms-grid" id="msGrid" style="grid-template-columns:repeat('+N+',24px)"></div></div>', 300);
  const grid = w.querySelector('#msGrid'), face = w.querySelector('#msFace'),
        lcdM = w.querySelector('#msMines'), lcdT = w.querySelector('#msTime');
  let cells, mines, open_, flags, dead, started, t0, timer;
  const pad = n => String(Math.max(0,Math.min(999,n))).padStart(3,'0');
  function build(){
    cells = Array(N*N).fill(0); mines = new Set();
    while(mines.size < M) mines.add(Math.floor(Math.random()*N*N));
    cells = [...Array(N*N)].map((_,i) => mines.has(i) ? -1 : 0);
    for(let i=0;i<N*N;i++){
      if(cells[i] === -1) continue;
      let c=0; for(let dy=-1;dy<=1;dy++) for(let dx=-1;dx<=1;dx++){
        const x=i%N+dx, y=(i/N|0)+dy;
        if(x>=0&&x<N&&y>=0&&y<N&&cells[y*N+x]===-1) c++;
      }
      cells[i]=c;
    }
    open_ = new Set(); flags = new Set(); dead = false; started = false;
    lcdT.textContent='000'; lcdM.textContent = pad(M); face.textContent='🙂';
    clearInterval(timer);
    grid.innerHTML = cells.map((_,i)=>'<div class="ms-c" data-i="'+i+'"></div>').join('');
  }
  function reveal(i){
    if(dead || flags.has(i) || open_.has(i)) return;
    if(cells[i] === -1){ dead = true; face.textContent='😵'; sfx.lose(); showAll(); clearInterval(timer); return; }
    const stack=[i];
    while(stack.length){
      const c = stack.pop(); if(open_.has(c) || flags.has(c)) continue;
      open_.add(c);
      const el = grid.children[c]; el.classList.add('open');
      if(cells[c] > 0){ el.textContent = cells[c]; el.classList.add('n'+cells[c]); }
      else { el.textContent='';
        const x=c%N, y=c/N|0;
        for(let dy=-1;dy<=1;dy++) for(let dx=-1;dx<=1;dx++){
          const nx=x+dx, ny=y+dy;
          if(nx>=0&&nx<N&&ny>=0&&ny<N) stack.push(ny*N+nx);
        }
      }
    }
    if(open_.size === N*N-M){ dead=true; face.textContent='😎'; clearInterval(timer); sfx.win(); }
    sfx.type();
  }
  function showAll(){
    mines.forEach(m => {
      const el = grid.children[m];
      el.classList.add('open'); el.textContent='💣';
      el.classList.toggle('boom', false);
    });
  }
  face.addEventListener('click', () => { sfx.click(); build(); });
  grid.addEventListener('pointerdown', e => {
    const el = e.target.closest('.ms-c'); if(!el) return;
    if(!started){ started = true; t0 = Date.now();
      timer = setInterval(() => lcdT.textContent = pad(Math.floor((Date.now()-t0)/1000)), 500); }
  });
  grid.addEventListener('click', e => {
    const el = e.target.closest('.ms-c'); if(!el) return;
    reveal(+el.dataset.i);
  });
  grid.addEventListener('contextmenu', e => {
    e.preventDefault();
    const el = e.target.closest('.ms-c'); if(!el || dead) return;
    const i = +el.dataset.i; if(open_.has(i)) return;
    flags.has(i) ? (flags.delete(i), el.textContent='') : (flags.add(i), el.textContent='🚩');
    lcdM.textContent = pad(M - flags.size); sfx.click();
  });
  build();
}

/* snake */
function openSnake(){
  const W2=16, SZ=18;
  const w = makeWindow('snake','🐍 Snake',
    '<div class="sn-hud"><span>Score: <b id="snS">0</b></span><span>Best: <b id="snHi">0</b></span></div>'+
    '<canvas class="sn" id="snCanvas" width="'+(W2*SZ)+'" height="'+(W2*SZ)+'"></canvas>'+
    '<div class="trow" style="justify-content:center"><button class="btn" id="snNew">▶ New Game</button></div>'+
    '<p class="sn-kbd">arrows / WASD · swipe on touch</p>', W2*SZ+34);
  const cv = w.querySelector('#snCanvas'), ctx = cv.getContext('2d');
  const snS = w.querySelector('#snS'), snHi = w.querySelector('#snHi'), snNew = w.querySelector('#snNew');
  let snake, dir, next, food, score, best = 0, loop = null, speed;
  function place(){ do { food = [Math.floor(Math.random()*W2), Math.floor(Math.random()*W2)]; }
    while(snake.some(s => s[0]===food[0] && s[1]===food[1])); }
  function reset(){
    snake = [[8,8],[7,8],[6,8]]; dir = [1,0]; next = [1,0]; score = 0; speed = 150;
    place(); snS.textContent = 0; clearInterval(loop);
    loop = setInterval(tick, speed); draw();
  }
  function tick(){
    dir = next;
    const h = [snake[0][0]+dir[0], snake[0][1]+dir[1]];
    if(h[0]<0||h[1]<0||h[0]>=W2||h[1]>=W2||snake.some(s=>s[0]===h[0]&&s[1]===h[1])){
      clearInterval(loop); loop = null; best = Math.max(best, score); snHi.textContent = best; sfx.lose();
      ctx.fillStyle='rgba(0,0,0,.55)'; ctx.fillRect(0,0,cv.width,cv.height);
      ctx.fillStyle='#7bff7b'; ctx.font='bold 20px "Pixelify Sans"'; ctx.textAlign='center';
      ctx.fillText('GAME OVER', cv.width/2, cv.height/2-8);
      ctx.font='14px "Pixelify Sans"'; ctx.fillText('score '+score+' — press ▶ New Game', cv.width/2, cv.height/2+16);
      return;
    }
    snake.unshift(h);
    if(h[0]===food[0] && h[1]===food[1]){
      score++; snS.textContent = score; sfx.type(); place();
      if(speed > 70 && score % 4 === 0){ speed -= 10; clearInterval(loop); loop = setInterval(tick, speed); }
    } else snake.pop();
    draw();
  }
  function draw(){
    ctx.fillStyle = '#0c3b0c'; ctx.fillRect(0,0,cv.width,cv.height);
    ctx.fillStyle = '#7bff7b';
    snake.forEach((s,i) => ctx.fillRect(s[0]*SZ+1, s[1]*SZ+1, SZ-2, SZ-2 - (i===0?6:0)));
    ctx.fillStyle = '#ff5555'; ctx.beginPath();
    ctx.arc(food[0]*SZ+SZ/2, food[1]*SZ+SZ/2, SZ/2-3, 0, 7); ctx.fill();
  }
  const keymap = { ArrowUp:[0,-1], w:[0,-1], W:[0,-1], ArrowDown:[0,1], s:[0,1], S:[0,1],
                   ArrowLeft:[-1,0], a:[-1,0], A:[-1,0], ArrowRight:[1,0], d:[1,0], D:[1,0] };
  function onKey(e){
    if(!openWins.snake) return;
    const v = keymap[e.key];
    if(v && (v[0] !== -dir[0] || v[1] !== -dir[1])){ next = v; e.preventDefault(); }
  }
  document.addEventListener('keydown', onKey);
  let tch = null;
  cv.addEventListener('pointerdown', e => tch = [e.clientX, e.clientY]);
  cv.addEventListener('pointerup', e => {
    if(!tch) return;
    const dx = e.clientX-tch[0], dy = e.clientY-tch[1];
    if(Math.abs(dx)+Math.abs(dy) > 18){
      const v = Math.abs(dx) > Math.abs(dy) ? [Math.sign(dx),0] : [0,Math.sign(dy)];
      if(v[0] !== -dir[0] || v[1] !== -dir[1]) next = v;
    }
    tch = null;
  });
  snNew.addEventListener('click', () => { sfx.click(); reset(); });
  w.querySelector('[data-act="close"]').addEventListener('click', () => {
    clearInterval(loop); document.removeEventListener('keydown', onKey); snake = null;
  });
  reset();
}

/* ---------- Backgrounds ---------- */
function openWalls(){
  const deskClasses = WALLS.map(x=>x.id);
  const w = makeWindow('walls','🖼️ Display Properties — Background',
    '<div class="bggrid">'+WALLS.map(x =>
      '<div class="bgt'+(desk.classList.contains(x.id)?' on':'')+'" data-b="'+x.id+'">'+
      '<div class="swa '+x.id+'-sw" style="background:'+wallPreview(x.id)+'"></div>'+
      '<span class="bl">'+esc(x.label)+'</span></div>').join('')+'</div>'+
    '<p class="dim" style="margin-top:10px">Apply to reuse this vibe after reboot — stored on a 1.44MB floppy (localStorage).</p>', 340);
  w.querySelectorAll('.bgt').forEach(b => b.addEventListener('click', () => {
    deskClasses.forEach(c => desk.classList.remove(c));
    desk.classList.add(b.dataset.b);
    w.querySelectorAll('.bgt').forEach(x => x.classList.toggle('on', x === b));
    try{ localStorage.setItem('alexos_wall', b.dataset.b); }catch(e){}
    sfx.click();
  }));
}
function wallPreview(id){
  return { 'bg-teal':'#0a8a8a',
    'bg-clouds':'linear-gradient(180deg,#3a7bd5 0 60%,#2f7d3c 60%)',
    'bg-bricks':'repeating-linear-gradient(0deg,#7a3b2e 0 10px,#5f2c22 10px 12px)',
    'bg-grape':'linear-gradient(135deg,#2b1055,#7597de)',
    'bg-midnight':'#050510' }[id];
}

/* ---------- Nostalgia ---------- */
function openNostalgia(){
  makeWindow('nostalgia','📺 Nostalgia Moments',
    '<div class="doc nos"><h3>Moments that made us</h3>'+
    NOSTALGIA.map(n => '<div class="nos-it"><span class="yr">'+n[0]+'</span><span>'+esc(n[1])+'</span></div>').join('')+
    '<p class="dim">Source: a very reliable memory, circa 1996.</p></div>', 380);
}

/* ---------- Time Travel ---------- */
function openTimeTravel(){
  const w = makeWindow('timetravel','🕰️ Time Travel',
    '<div class="doc"><h3>Temporal Control Panel</h3>'+
    '<p>Destination detected: <b>October 2026</b> — the modern web.</p>'+
    '<ul><li>Required speed: <b>88.0 MPH</b></li><li>Required power: <b>1.21 GIGAWATTS</b></li><li>Flux capacitor: <span style="color:#080">online</span></li></ul>'+
    '<p class="hl">Warning: nostalgia levels may drop temporarily.</p>'+
    '<div class="trow"><button class="btn" id="ttGo" style="font-weight:700">⚡ Let’s head to the future →</button></div></div>', 360);
  w.querySelector('#ttGo').addEventListener('click', () => { sfx.click(); doUpdate(); });
}

/* ---------- Recycle Bin ---------- */
function openBin(){
  const files = [['🗎','old_portfolio_v27_FINAL_final.zip'],['🗎','motivation_404_notfound.txt'],['🎵','dialup_screech_10h.wav'],['🗎','homework_2003.doc']];
  const w = makeWindow('bin','🗑️ Recycle Bin',
    '<div class="bin"><div id="binList">'+
    files.map(f => '<div class="bin-it"><span>'+f[0]+'</span><span>'+esc(f[1])+'</span></div>').join('')+
    '</div><div class="trow"><button class="btn" id="binEmpty">Empty Recycle Bin</button></div></div>', 360);
  w.querySelector('#binEmpty').addEventListener('click', e => {
    sfx.lose();
    w.querySelector('#binList').innerHTML = '<div class="bin-empty">🗑️ It is now safe to forget these files ever existed.</div>';
    e.target.disabled = true;
  });
}

/* ---------- Clippy ---------- */
const CLIP_TIPS = [
  'It looks like you are exploring a portfolio. Double-click an icon to open it!',
  'Press ⟳ 2026 on the taskbar to launch the time-travel sequence.',
  'Did you know Kid Pix stamps are randomly picked? Pure chaos. Pure art.',
  'Right-click a Minesweeper cell to plant a flag. 🚩',
  'The screensaver shows up if you idle for 45 seconds. It has stars.',
];
let clipIdx = 0, clipTimer = null;
function toggleClippy(){
  const c = $('#clippy');
  c.classList.toggle('on');
  if(c.classList.contains('on')){
    clearInterval(clipTimer);
    clipTimer = setInterval(() => {
      clipIdx = (clipIdx+1) % CLIP_TIPS.length;
      $('#clipbubble').innerHTML = '📎 ' + esc(CLIP_TIPS[clipIdx]);
    }, 15000);
  } else clearInterval(clipTimer);
}
$('#clipx').addEventListener('click', () => { $('#clippy').classList.remove('on'); clearInterval(clipTimer); });
$('#clipbody').addEventListener('click', () => {
  clipIdx = (clipIdx+1) % CLIP_TIPS.length;
  $('#clipbubble').innerHTML = '📎 ' + esc(CLIP_TIPS[clipIdx]); sfx.type();
});

/* ============================================================
   CLOCK + IDLE SCREENSAVER + POWER
   ============================================================ */
function tickClock(){
  const d = new Date(); let h = d.getHours(); const ap = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  $('#clock').textContent = h + ':' + String(d.getMinutes()).padStart(2,'0') + ' ' + ap;
}
setInterval(tickClock, 5000); tickClock();

let idleT = null, saverOn = false, saverRAF = 0;
const IDLE_MS = 45000;
function armIdle(){
  clearTimeout(idleT);
  if(saverOn || $('#modern').classList.contains('on') || !desk.classList.contains('on')) return;
  idleT = setTimeout(showSaver, IDLE_MS);
}
['pointermove','pointerdown','keydown','wheel','touchstart'].forEach(ev =>
  document.addEventListener(ev, () => { if(!saverOn) armIdle(); }, {passive:true}));
function showSaver(){
  if($('#modern').classList.contains('on')) return;
  saverOn = true; $('#saver').classList.add('on');
  const cv = $('#savercv'), ctx = cv.getContext('2d');
  cv.width = innerWidth; cv.height = innerHeight;
  const stars = [...Array(380)].map(() => ({ x: Math.random()*2-1, y: Math.random()*2-1, z: Math.random() }));
  (function frame(){
    if(!saverOn) return;
    ctx.fillStyle = '#000'; ctx.fillRect(0,0,cv.width,cv.height);
    const cx = cv.width/2, cy = cv.height/2;
    stars.forEach(s => {
      s.z -= .008; if(s.z <= .02){ s.x = Math.random()*2-1; s.y = Math.random()*2-1; s.z = 1; }
      const px = cx + s.x/s.z*cx, py = cy + s.y/s.z*cy;
      const r = Math.max(.4,(1-s.z)*2.2);
      ctx.fillStyle = 'rgba(255,255,255,'+Math.min(1,(1-s.z)+.15)+')';
      ctx.fillRect(px, py, r, r);
    });
    saverRAF = requestAnimationFrame(frame);
  })();
}
function wakeSaver(ev){
  if(!saverOn) return;
  saverOn = false; cancelAnimationFrame(saverRAF);
  $('#saver').classList.remove('on'); armIdle();
  if(ev) ev.preventDefault();
}
$('#saver').addEventListener('pointerdown', e => wakeSaver(e));
document.addEventListener('keydown', e => wakeSaver(e));

function doSleep(){ sfx.click(); showSaver(); }
function doRestart(){ sfx.click(); location.reload(); }
function doShutdown(){
  sfx.chime();
  stopTune();
  $('#shutdown').classList.add('on');
}
$('#reboot').addEventListener('click', doRestart);

/* ============================================================
   UPDATE → INSTALL → ENTRY → TIME TRAVEL → MODERN
   ============================================================ */
function doUpdate(){
  if($('#modern').classList.contains('on')) return;
  sfx.click();
  if(openWins.timetravel){ openWins.timetravel.querySelector('[data-act="close"]').click(); }
  $('#upddlg').classList.add('on');
}
$('#upddlg').querySelectorAll('[data-x]').forEach(b => b.addEventListener('click', () => { sfx.close(); $('#upddlg').classList.remove('on'); }));
$('#updgo').addEventListener('click', startInstall);

function startInstall(){
  sfx.click();
  $('#upddlg').classList.remove('on');
  $('#install').classList.add('on');
  stopTune();
  if($('#clippy').classList.contains('on')) toggleClippy();
  const msgs = ['Migrating 1996 → 2026','Compressing nostalgia…','Reticulating splines…','Charging flux capacitor…','Applying 30 years of CSS…','Almost there…'];
  let p = 0, mi = 0;
  const t0 = performance.now(), DUR = 3600;
  (function step(now){
    p = Math.min(100, ((now - t0)/DUR)*100);
    $('#pfill').style.width = p + '%';
    $('#instpct').textContent = Math.floor(p) + '%';
    const nm = Math.min(msgs.length-1, Math.floor(p/18));
    if(nm !== mi){ mi = nm; $('#instmsg').textContent = msgs[mi]; sfx.type(); }
    if(p < 100) requestAnimationFrame(step);
    else setTimeout(showEntry, 350);
  })(t0);
}

function showEntry(){
  $('#install').classList.remove('on');
  $('#entry26').classList.add('on');
  sfx.whoosh();
  setTimeout(startTimeTravel, 2100);
}

function startTimeTravel(){
  $('#entry26').classList.remove('on');
  const tt = $('#tt'); tt.classList.add('on');
  $('#desk').classList.add('noselect');
  const cv = $('#ttcv'), ctx = cv.getContext('2d');
  cv.width = innerWidth; cv.height = innerHeight;
  const stars = [...Array(500)].map(() => ({ x: Math.random()*2-1, y: Math.random()*2-1, z: Math.random(), pz: 0 }));
  const t0 = performance.now(), DUR = 6200;
  const DATES = ['01.01.1996','06.15.2001','11.23.2008','03.09.2015','08.30.2021','10.11.2026'];
  (function frame(now){
    const k = Math.min(1,(now - t0)/DUR);
    const speed = .008 + k*.05;
    // star tunnel
    ctx.fillStyle = 'rgba(0,0,0,.32)'; ctx.fillRect(0,0,cv.width,cv.height);
    const cx = cv.width/2, cy = cv.height/2;
    stars.forEach(s => {
      s.pz = s.z; s.z -= speed;
      if(s.z <= .04){ s.x = Math.random()*2-1; s.y = Math.random()*2-1; s.z = 1; s.pz = 1; }
      const x1 = cx + s.x/s.z*cx, y1 = cy + s.y/s.z*cy;
      const x0 = cx + s.x/s.pz*cx, y0 = cy + s.y/s.pz*cy;
      ctx.strokeStyle = k > .75 ? 'rgba(198,255,58,'+(0.25+.7*(1-s.z))+')' : 'rgba(160,200,255,'+(0.2+.7*(1-s.z))+')';
      ctx.lineWidth = Math.max(.6,(1-s.z)*2.4);
      ctx.beginPath(); ctx.moveTo(x0,y0); ctx.lineTo(x1,y1); ctx.stroke();
    });
    // vortex ring
    ctx.save(); ctx.translate(cx,cy); ctx.rotate(now/900);
    ctx.strokeStyle = 'rgba(198,255,58,'+(.12+.3*k)+')'; ctx.lineWidth = 2;
    for(let i=0;i<3;i++){ ctx.beginPath(); ctx.arc(0,0, 60+i*46+Math.sin(now/300+i)*8, 0, 7); ctx.stroke(); }
    ctx.restore();
    // gauges
    $('#ttmph').textContent = (88*k).toFixed(1);
    $('#ttgw').textContent  = (1.21*k).toFixed(2);
    $('#ttdate').textContent = DATES[Math.min(DATES.length-1, Math.floor(k*DATES.length))];
    // screen shake late
    cv.style.transform = k > .8 ? 'translate('+((Math.random()-.5)*6*k)+'px,'+((Math.random()-.5)*6*k)+'px)' : '';
    if(k < 1) requestAnimationFrame(frame);
    else arrive2026();
  })(t0);
}

function arrive2026(){
  const flash = $('#ttflash');
  flash.style.transition = 'opacity .18s'; flash.style.opacity = 1;
  sfx.chime();
  setTimeout(() => {
    $('#tt').classList.remove('on'); flash.style.opacity = 0;
    $('#desk').classList.remove('on','noselect');
    $('#taskbar').classList.remove('on');
    $('#tip').classList.remove('on');
    $('#saver').classList.remove('on'); saverOn = false;
    enterModern();
  }, 420);
}

/* ============================================================
   MODERN 2026 — behaviors
   ============================================================ */
let modernInit = false;
function enterModern(){
  const m = $('#modern');
  m.classList.add('on');
  m.scrollTop = 0;
  $('#mbrand').textContent = CONFIG.name;
  document.querySelector('.meye').textContent = CONFIG.roleLine;
  if(!modernInit){ modernInit = true; buildCards(); initModernJS(); }
  requestAnimationFrame(() => { m.dispatchEvent(new Event('scroll')); });
}

function buildCards(){
  const g = $('#mgrid'), dots = $('#mdots');
  g.innerHTML = PROJECTS.map((p,i) =>
    '<a class="mcard" href="work/'+p.slug+'.html">'+
      '<img src="'+p.img+'" alt="'+esc(p.title)+' — '+esc(p.cat)+'" loading="lazy">'+
      '<span class="mnum">'+String(i+1).padStart(2,'0')+'</span>'+
      '<span class="mcap2"><span class="go">View Case Study →</span><h3>'+esc(p.title)+'</h3><p>'+esc(p.cat)+'</p></span>'+
    '</a>').join('');
  dots.innerHTML = PROJECTS.map((_,i) => '<i'+(i===0?' class="on"':'')+' data-i="'+i+'"></i>').join('');
}

function initModernJS(){
  const m = $('#modern');

  /* scroll progress + toast logic */
  m.addEventListener('scroll', () => {
    const max = m.scrollHeight - m.clientHeight;
    $('#mprog').style.width = (max > 0 ? (m.scrollTop/max)*100 : 0) + '%';
  }, { passive:true });

  /* smooth anchor scrolling inside the fixed container */
  m.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const t = m.querySelector(a.getAttribute('href'));
    if(t){ e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); }
  }));
  $('#mbrand').addEventListener('click', () => m.scrollTo({ top:0, behavior:'smooth' }));

  /* reveal on scroll */
  revealIO = new IntersectionObserver(es => es.forEach(en => {
    if(en.isIntersecting){ en.target.classList.add('in'); revealIO.unobserve(en.target); }
  }), { root:m, threshold:.12 });
  m.querySelectorAll('.rv').forEach(el => revealIO.observe(el));

  /* ----- particle hero ----- */
  const cv = $('#mfield'), ctx = cv.getContext('2d');
  let parts = [], mouse = { x:-9e3, y:-9e3 }, heroVisible = true, heroRAF = 0;
  function buildHero(){
    cancelAnimationFrame(heroRAF);
    const hero = cv.parentElement;
    const dpr = Math.min(2, devicePixelRatio || 1);
    const W = hero.clientWidth, H = hero.clientHeight;
    cv.width = W*dpr; cv.height = H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    // sample the name offscreen
    const off = document.createElement('canvas'); off.width = W; off.height = H;
    const octx = off.getContext('2d');
    let fs = Math.min(W*0.16, 190);
    octx.font = '900 '+fs+'px Archivo, sans-serif';
    const name = CONFIG.name.toUpperCase();
    while(octx.measureText(name).width > W*0.9 && fs > 30){ fs -= 6; octx.font = '900 '+fs+'px Archivo, sans-serif'; }
    octx.textAlign = 'center'; octx.textBaseline = 'middle';
    octx.fillStyle = '#fff'; octx.fillText(name, W/2, H/2 - 10);
    const gap = isMobile ? 7 : 5;
    const data = octx.getImageData(0,0,W,H).data;
    const targets = [];
    for(let y=0;y<H;y+=gap) for(let x=0;x<W;x+=gap)
      if(data[(y*W+x)*4+3] > 128) targets.push([x,y]);
    const cap = isMobile ? 1400 : 3200;
    const skip = Math.max(1, Math.ceil(targets.length/cap));
    parts = [];
    for(let i=0;i<targets.length;i+=skip){
      parts.push({
        x: Math.random()*W, y: Math.random()*H,
        vx:0, vy:0, tx: targets[i][0], ty: targets[i][1],
        c: Math.random() < .12 ? '#c6ff3a' : '#f1efe9',
        r: Math.random() < .5 ? 1 : 1.6,
        d: Math.random()*90,   // start delay
      });
    }
    const t0 = performance.now();
    (function frame(now){
      if(!heroVisible) return;
      ctx.clearRect(0,0,W,H);
      const el = (now - t0)/1000;
      parts.forEach(p => {
        if(el*60 < p.d){ return; }
        const dx = p.tx - p.x, dy = p.ty - p.y;
        p.vx += dx*.012; p.vy += dy*.012;
        const mx = p.x - mouse.x, my = p.y - mouse.y, md = mx*mx+my*my;
        if(md < 8100){ const f = (8100-md)/8100*2.6; p.vx += mx/Math.sqrt(md+.1)*f; p.vy += my/Math.sqrt(md+.1)*f; }
        p.vx *= .88; p.vy *= .88;
        p.x += p.vx; p.y += p.vy;
        ctx.fillStyle = p.c; ctx.fillRect(p.x, p.y, p.r, p.r);
      });
      heroRAF = requestAnimationFrame(frame);
    })(t0);
    setTimeout(() => { document.querySelector('.meye').classList.add('on'); document.querySelector('.mscrollcue').classList.add('on'); }, 2400);
  }
  document.fonts && document.fonts.ready.then(buildHero); setTimeout(buildHero, 700);
  cv.parentElement.addEventListener('pointermove', e => {
    const r = cv.getBoundingClientRect(); mouse.x = e.clientX-r.left; mouse.y = e.clientY-r.top;
  });
  cv.parentElement.addEventListener('pointerleave', () => { mouse.x = -9e3; mouse.y = -9e3; });
  new IntersectionObserver(es => {
    es.forEach(en => {
      const was = heroVisible; heroVisible = en.isIntersecting;
      if(heroVisible && !was) buildHero();
    });
  }, { root:m, threshold:.05 }).observe(cv.parentElement);
  addEventListener('resize', () => { if(heroVisible) buildHero(); });

  /* ----- word-rain → coalesce → solid phrase ----- */
  const cvs = $('#mcloudcv'), cctx = cvs.getContext('2d'), stage = cvs.parentElement;
  const flash = stage.querySelector('.mcloud-flash'), finalEl = stage.querySelector('.mcloud-final');
  const WORDS = ['Interface','Motion','Grid','Token','Prototype','Shader','Keyframe','Bezier','Palette','Component','Variable','Viewport','Z-index','Easing','Typography','Whitespace','Contrast','Hierarchy','Rhythm','State','Render','Canvas','Vector','Raster','Opacity','Blend','Layout','Flex','Anchor','Focus','Hover','Scroll','Gesture','Texture','Depth','Light','Shadow','Frame','Sprite','Pixel','Vector'];
  let cloudPlayed = false;
  function sizeCloud(){
    const dpr = Math.min(2, devicePixelRatio||1);
    cvs.width = stage.clientWidth*dpr; cvs.height = stage.clientHeight*dpr;
    cctx.setTransform(dpr,0,0,dpr,0,0);
    const target = Math.min(stage.clientWidth*.9, 1500);
    let fs = 200; cctx.font = '900 200px Archivo, sans-serif';
    const w = cctx.measureText('I Craft Experiences.').width || 1;
    fs = Math.min(230, 200*target/w);
    finalEl.style.fontSize = fs.toFixed(1)+'px';
  }
  function playCloud(){
    sizeCloud();
    const W = stage.clientWidth, H = stage.clientHeight;
    // sample phrase pixels
    const off = document.createElement('canvas'); off.width = W; off.height = H;
    const octx = off.getContext('2d');
    const full = 'I Craft Experiences.';
    let fs = parseFloat(finalEl.style.fontSize || '120');
    octx.font = '900 '+fs+'px Archivo, sans-serif';
    octx.textAlign = 'center'; octx.textBaseline = 'middle';
    octx.fillStyle = '#fff'; octx.fillText(full, W/2, H/2);
    const data = octx.getImageData(0,0,W,H).data;
    const pts = [];
    const gap = isMobile ? 8 : 6;
    for(let y=0;y<H;y+=gap) for(let x=0;x<W;x+=gap)
      if(data[(y*W+x)*4+3] > 120) pts.push([x,y]);
    const cap = isMobile ? 1500 : 3400;
    const skip = Math.max(1, Math.ceil(pts.length/cap));
    const rain = [];
    for(let i=0;i<320;i++)
      rain.push({ w: WORDS[i%WORDS.length], x: Math.random()*W, y: -Math.random()*H - 40,
        vy: 2+Math.random()*4, fs: 10+Math.random()*22, r: (Math.random()-.5)*.5,
        a: .14+Math.random()*.25 });
    const dots = [];
    for(let i=0;i<pts.length;i+=skip)
      dots.push({ x: W/2 + (Math.random()-.5)*W*1.4, y: H + Math.random()*300,
        vx:0, vy:0, tx: pts[i][0], ty: pts[i][1], c: Math.random()<.14?'#c6ff3a':'#f1efe9', d: Math.random()*40 });
    const t0 = performance.now();
    const P1 = 2300, P2 = 2400, P3 = 700;
    (function frame(now){
      const t = now - t0;
      cctx.clearRect(0,0,W,H);
      if(t < P1){
        rain.forEach(r => {
          r.y += r.vy; r.x += Math.sin((r.y + r.fs*10)/60)* .4;
          if(r.y > H - 30 - Math.random()*4){ r.y = Math.min(r.y, H - 20 - (r.fs % 60)); r.vy *= -0.18; if(Math.abs(r.vy)<.5) r.vy = 0; }
          cctx.save(); cctx.translate(r.x, r.y); cctx.rotate(r.r * Math.sin(r.y/140));
          cctx.font = r.fs+'px Archivo, sans-serif';
          cctx.fillStyle = 'rgba(143,143,150,'+r.a+')'; cctx.textAlign = 'center';
          cctx.fillText(r.w, 0, 0); cctx.restore();
        });
      } else {
        const fade = Math.max(0, 1 - (t-P1)/500);
        if(fade > 0) rain.forEach(r => {
          cctx.font = r.fs+'px Archivo, sans-serif';
          cctx.fillStyle = 'rgba(143,143,150,'+(r.a*fade)+')'; cctx.textAlign='center';
          cctx.fillText(r.w, r.x, r.y);
        });
      }
      if(t > P1 - 250){
        dots.forEach(p => {
          if((t-P1)/16 < p.d) return;
          p.vx += (p.tx-p.x)*.011; p.vy += (p.ty-p.y)*.011;
          p.vx *= .875; p.vy *= .875;
          p.x += p.vx; p.y += p.vy;
          cctx.fillStyle = p.c; cctx.fillRect(p.x, p.y, 1.5, 1.5);
        });
      }
      if(t < P1 + P2 + P3) requestAnimationFrame(frame);
      else {
        flash.style.transition = 'none'; flash.style.opacity = .9;
        requestAnimationFrame(() => { flash.style.transition = 'opacity .7s ease .06s'; flash.style.opacity = 0; });
        finalEl.classList.add('show');
        setTimeout(() => cctx.clearRect(0,0,W,H), 500);
      }
    })(t0);
  }
  cloudIO = new IntersectionObserver(es => es.forEach(en => {
    if(en.isIntersecting && !cloudPlayed){
      cloudPlayed = true; finalEl.classList.remove('show'); playCloud();
    }
  }), { root:m, threshold:.35 });
  cloudIO.observe(stage);
  addEventListener('resize', () => { if(cloudPlayed) sizeCloud(); });

  /* ----- work strip: drag scroll + dots ----- */
  const grid = $('#mgrid'), dots = $$('#mdots i');
  let down = false, sx = 0, sl = 0, moved = 0;
  grid.addEventListener('pointerdown', e => { down = true; moved = 0; sx = e.clientX; sl = grid.scrollLeft; });
  grid.addEventListener('pointermove', e => {
    if(!down) return;
    const dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx));
    grid.scrollLeft = sl - dx;
  });
  ['pointerup','pointerleave','pointercancel'].forEach(ev => grid.addEventListener(ev, () => down = false));
  grid.addEventListener('click', e => { if(moved > 8){ e.preventDefault(); e.stopPropagation(); } }, true);
  grid.addEventListener('scroll', () => {
    $('#mswipe').classList.add('off');
    const cards = grid.children; if(!cards.length) return;
    const cw = cards[0].offsetWidth + 20;
    const idx = Math.min(cards.length-1, Math.round(grid.scrollLeft / cw));
    dots.forEach((d,i) => d.classList.toggle('on', i === idx));
  }, { passive:true });
  dots.forEach(d => d.addEventListener('click', () => {
    const cards = grid.children, i = +d.dataset.i;
    const cw = cards[0].offsetWidth + 20;
    grid.scrollTo({ left: i*cw - (grid.clientWidth - cards[0].offsetWidth)/2 + parseFloat(getComputedStyle(grid).paddingLeft), behavior:'smooth' });
  }));

  /* back to '96 */
  $('#back96').addEventListener('click', () => {
    stopTune(); wakeSaver();
    m.classList.remove('on');
    cloudPlayed = false;
    $('#modern .mcloud-final').classList.remove('show');
    $('#toast').classList.remove('on');
    $('#desk').classList.add('on');
    $('#taskbar').classList.add('on');
    armIdle();
  });

  /* toast */
  setTimeout(() => { if(m.classList.contains('on')) $('#toast').classList.add('on'); }, 5000);
  new IntersectionObserver(es => es.forEach(en => {
    if(en.isIntersecting) $('#toast').classList.remove('on');
  }), { root:m, threshold:.3 }).observe($('#mcontact'));
  $('#toastx').addEventListener('click', () => $('#toast').classList.remove('on'));
  $('#toastgo').addEventListener('click', () => {
    $('#toast').classList.remove('on');
    $('#mwork').scrollIntoView({ behavior:'smooth' });
  });
}

/* ============================================================
   BOOT SEQUENCE
   ============================================================ */
function boot(){
  const intro = $('#intro');
  function start(ev){
    if(ev) ev.preventDefault();
    if(intro.classList.contains('off')) return;
    intro.classList.add('off');
    desk.classList.add('on');
    $('#taskbar').classList.add('on');
    try{ const w = localStorage.getItem('alexos_wall'); if(w){ desk.classList.remove('bg-teal'); desk.classList.add(w); } }catch(e){}
    sfx.chime();
    setTimeout(() => { $('#tip').classList.add('on'); }, 900);
    setTimeout(() => { if(!$('#clippy').classList.contains('on')) toggleClippy(); }, 7000);
    armIdle();
  }
  intro.addEventListener('pointerdown', start);
  document.addEventListener('keydown', function k(e){ if(!intro.classList.contains('off')) start(e); document.removeEventListener('keydown', k); });
}

/* tip popup */
let tipIdx = 0;
$('#tipnext').addEventListener('click', () => {
  tipIdx = (tipIdx+1) % TIPS.length;
  $('#tiptxt').textContent = TIPS[tipIdx]; sfx.type();
});
$('#tip').querySelectorAll('[data-x]').forEach(b => b.addEventListener('click', () => { sfx.close(); $('#tip').classList.remove('on'); }));

/* start button */
$('#startbtn').addEventListener('click', e => { e.stopPropagation(); sfx.click(); toggleStart(); });
document.addEventListener('pointerdown', e => {
  if(!e.target.closest('#startmenu') && !e.target.closest('#startbtn')) toggleStart(false);
});
$('#updbtn').addEventListener('click', doUpdate);

/* init */
desk.classList.add('bg-teal');
buildIcons();
buildStartMenu();
boot();
