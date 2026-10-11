#!/usr/bin/env python3
"""Generates the 8 case-study pages from one data source (mirrors projects in js/app.js)."""
import os, html

ROOT = os.path.dirname(os.path.abspath(__file__))
WORK = os.path.join(ROOT, 'work')

P = [
 dict(slug='nordlys', title='Nordlys', cat='Fintech App Design', role='Lead Product Designer', year='2025',
      stack=['Product Design','iOS','Design System','Motion'], img='../assets/img/work-nordlys.jpg',
      tag='A mobile bank that treats your money like weather — always visible, never stormy.',
      overview="Nordlys is a Norwegian challenger bank with one radical belief: banking apps do not need to feel like tax forms. I led product design from the first workshop to the App Store launch, building a design language where balances “breathe” and insights arrive like the northern lights — quietly, and exactly when you look up.",
      challenge="Money is anxiety for most people. The existing app buried balance information behind three tabs, used red as its primary accent, and explained fees in footnotes. We needed to rebuild trust in an interface people open five times a day — without losing the density power users demanded.",
      process=[("Listen before drawing","We ran 24 diary studies and mapped every moment users felt stressed about money. The finding: people check balances to feel safe, not to do math."),
               ("Design the glance","We prototyped a home screen readable in under two seconds — one number, one trend, one suggested action. Everything else lives one intentional layer deeper."),
               ("Ship, measure, tune","We launched behind a feature flag cohort, instrumented time-to-balance, and iterated motion curves until the app felt calm instead of slow.")],
      outcome="The redesign shipped to 400,000 users. Time-to-balance dropped from 8.2s to 1.4s, support tickets about “where did my money go” fell by a third, and the app reached a 4.8 App Store rating — the highest in its category in Norway.",
      stats=[('1.4s','Median time to see your balance'),('4.8★','App Store rating after launch'),('−34%','“Missing money” support tickets')],
      quote=('It finally feels like the app is on my side.', 'Beta tester, week 3 diary study')),
 dict(slug='fjell', title='Fjell', cat='Brand Identity & E-Commerce', role='Design Lead', year='2024',
      stack=['Branding','Art Direction','E-Commerce','Packaging'], img='../assets/img/work-fjell.jpg',
      tag='An outdoor brand that looks like the mountain, not the gift shop.',
      overview="Fjell makes technical outdoor gear in Western Norway. As design lead I built the entire brand from the bedrock up: a faceted mountain mark, a type system that survives rain droplets on packaging, photography direction shot in actual weather, and the e-commerce experience that ties it together.",
      challenge="The outdoor market is crowded with brands shouting in capital letters. Fjell’s founders wanted credibility with hardcore hikers and appeal for Sunday strollers — two audiences that usually require two different brands.",
      process=[("Find the shape","We studied topographic maps and settled on a faceted, low-poly peak — geometric enough to embroider on a sleeve, organic enough to feel earned."),
               ("System over logo","Color, type and layout rules were designed as weather layers: a calm base, a signal accent, and a voice that informs first and inspires second."),
               ("Store as trailhead","The shop opens with conditions and stories, not discounts. Product pages read like route cards — specs, terrain, care, and the trip it was designed for.")],
      outcome="The brand launched with a sell-out first drop. Returning customers grew 2.7× year over year, and the faceted mark now rides chairlifts all over Scandinavia on sleeves and skis.",
      stats=[('2.7×','Returning customer growth, year one'),('Sold out','First product drop in 11 days'),('38%','Revenue from owned e-commerce')],
      quote=('You made our gear look the way it feels out there.', 'Fjell co-founder')),
 dict(slug='pulse', title='Pulse', cat='Music Player Redesign', role='Product Designer', year='2025',
      stack=['UX','UI','Interaction','Prototyping'], img='../assets/img/work-pulse.jpg',
      tag='A streaming player designed for listeners, not feeds.',
      overview="Pulse is a self-initiated redesign concept for a mainstream streaming app. The premise: music players have become social networks with a play button. Pulse strips the interface back to the song — a now-playing screen that reacts to the live waveform, so every track gets its own light show.",
      challenge="The core constraint was attention. Every added element steals from the moment of listening. The design had to be navigable with one thumb, one eye on the road, zero reading.",
      process=[("Prototype the feeling first","Before any wireframes, I built a WebAudio prototype where visuals respond to frequency bands. If it felt magical on a phone speaker, the concept survived."),
               ("Delete ruthlessly","Six screens became three. Search, queue and library collapsed into one continuous sheet with progressive disclosure."),
               ("Stress-test the edge cases","Lock screen, CarPlay, tiny Android screens, and the dreaded 'accidentally tapped while jogging' scenario all got dedicated passes.")],
      outcome="The concept case study became my most-shared work — featured in two design newsletters and forked by teams exploring audio-reactive UI. It directly led to three client engagements about music products.",
      stats=[('3','Screens in the whole core flow'),('60fps','Audio-reactive visuals on mid-range phones'),('120k','Case study reads in launch month')],
      quote=('This is the first music UI concept that understands silence as a design material.', 'Design newsletter review')),
 dict(slug='atlas', title='Atlas', cat='Design System at Scale', role='Design Engineer', year='2024',
      stack=['Design Tokens','Components','Docs','Figma API'], img='../assets/img/work-atlas.jpg',
      tag='Nine product teams, one source of truth, zero “which blue is it?” threads.',
      overview="Atlas is the design system of a Scandinavian SaaS group. I joined as design engineer to rescue three incompatible component libraries and left behind a token pipeline, 120+ documented components, and an adoption model based on making the right thing the easy thing.",
      challenge="The company had grown by acquisition: nine teams, three frameworks, and a Figma library nobody trusted. Redesigning was easy — getting nine roadmaps to converge without a mandate was the real project.",
      process=[("Automate trust","Design tokens flow from Figma variables through a build pipeline to code. Designers and engineers finally read from the same page — literally."),
               ("Win the loudest skeptics first","We onboarded the two busiest teams early and let their complaints shape the API. Their success stories did the rest of the evangelism."),
               ("Docs people actually read","Every component ships with live examples, do/don’t pairs, and copy-paste snippets. Documentation is treated as a product with its own roadmap.")],
      outcome="Component adoption reached 94% of new UI within eight months. Design-to-dev handoff meetings dropped to near zero, and accessibility issues in production fell by more than half.",
      stats=[('120+','Components in the library'),('94%','Of new UI built on Atlas'),('−58%','A11y issues reaching production')],
      quote=('Atlas is the first system here that slows nobody down.', 'Staff engineer, payments team')),
 dict(slug='kaffe', title='Kaffe', cat='E-Commerce & Art Direction', role='Creative Developer', year='2023',
      stack=['E-Commerce','WebGL','Art Direction'], img='../assets/img/work-kaffe.jpg',
      tag='A coffee subscription you can almost smell through the screen.',
      overview="A Bergen roastery with cult status at the farmers market wanted an online store with the same warmth. As creative developer I built a scroll-driven storefront where each roast tells its story — altitude, process, tasting notes — rendered as a slow cinematic scroll ending in a one-minute checkout.",
      challenge="Selling coffee online means selling the one thing screens cannot transmit: aroma. The experience needed to slow visitors down enough to care — and then get out of the way completely at purchase time.",
      process=[("Story per bean","Each roast got a scrollytelling chapter built on lightweight WebGL: steam particles, altitude maps, and process illustrations that respond to scroll velocity."),
               ("Brew-guide generator","A small tool that turns your equipment and grind into a printable recipe card. It became the most shared page on the site."),
               ("Sixty-second checkout","Guest-first checkout, digital wallets, and a three-tap subscription flow. No account walls, no newsletter hostage-taking.")],
      outcome="Conversion tripled against the old shop. Average session time rose to 3m 40s, and the brew-guide generator alone now drives a fifth of all organic traffic.",
      stats=[('3.1×','Store conversion vs. previous site'),('3m 40s','Average session duration'),('20%','Of organic traffic via brew-guide')],
      quote=('People write us letters about the website. Letters!', 'Roastery owner')),
 dict(slug='orbit', title='Orbit', cat='Interactive WebGL Journey', role='Creative Developer', year='2025',
      stack=['WebGL','GLSL','Three.js','Audio'], img='../assets/img/work-orbit.jpg',
      tag='A guided tour through a satellite constellation, running entirely in your browser.',
      overview="Orbit is an interactive piece for a space-tech company’s launch campaign: a WebGL journey through their satellite constellation. Visitors steer through realtime orbits while generative audio responds to altitude. My job: make 4,000 satellites feel poetic — and keep it at 60fps on a commuter train.",
      challenge="Beauty and budget. The art direction demanded dense starfields, volumetric glow and smooth cinematics; the media plan demanded it load under 3 seconds and hold 60fps on mid-range Android.",
      process=[("Budget before beauty","We defined frame and memory budgets first, then designed the look to fit inside them — instancing, LOD, and one very disciplined bloom pass."),
               ("Data as choreography","Real orbital mechanics drive the motion. The camera only frames what the physics already made beautiful."),
               ("Sound from altitude","A generative score maps altitude bands to musical modes, so no two journeys sound alike — all synthesized, zero audio files.")],
      outcome="The piece earned an Awwwards honorable mention, average engagement of 4m 12s, and a measurable lift in demo requests during the campaign window.",
      stats=[('4,000','Satellites rendered in real time'),('60fps','On mid-range mobile hardware'),('4m 12s','Average session engagement')],
      quote=('Engineering and art direction agreeing on a budget? That is the real moonshot.', 'Creative director, launch campaign')),
 dict(slug='haven', title='Haven', cat='Property Platform', role='Front-End Lead', year='2023',
      stack=['React','Maps','Search UX','Performance'], img='../assets/img/work-haven.jpg',
      tag='House-hunting that starts with the map and ends with a feeling.',
      overview="Haven is a property platform built around one observation: people do not search for three bedrooms — they search for morning sun and a short walk to the water. As front-end lead I built the map-first browsing experience and the natural-language search behind it.",
      challenge="Property search is a filter-form monoculture: dropdowns, sliders, despair. We needed to index subjective qualities — light, quiet, vibe — without inventing fake precision, and render 30,000 listings on a map without melting phones.",
      process=[("Cluster with care","A custom clustering layer keeps the map readable at every zoom, with animations choreographed so markers never teleport."),
               ("Honest search","Natural-language queries like “sunny balcony near the water” translate into weighted, explainable filters — users see exactly why a home matched."),
               ("Performance as feature","List virtualization, image budgets, and a hard 200KB JS ceiling. The fastest property site in its market was a design decision.")],
      outcome="Haven launched as the second most-visited property platform in its market within a year. Search-to-listing click-through doubled versus the incumbent pattern library it replaced.",
      stats=[('30k','Listings on one living map'),('2×','Search click-through vs. legacy'),('200KB','JavaScript budget, enforced in CI')],
      quote=('I found my apartment by typing “quiet, plants, bakery nearby.” What a time to be alive.', 'User feedback, launch week')),
 dict(slug='sno', title='Snø', cat='Ski Resort Companion App', role='Product Designer & Developer', year='2026',
      stack=['App Design','Motion','Live Data'], img='../assets/img/work-sno.jpg',
      tag='Live lift queues and trail conditions — operable with one gloved hand at −20°.',
      overview="Snø is the companion app for a Scandinavian ski resort: live lift queues, grooming status, and weather on a trail map rendered as flowing light. I designed and built the interface end to end, from the data pipeline to the motion language.",
      challenge="This is extreme-condition UI: direct sunlight on snow, thick gloves, dying batteries, and attention spans measured in chairlift seconds. Every pixel had to justify its energy cost.",
      process=[("Design for gloves","All primary actions live in the bottom third, targets are 56pt minimum, and nothing—nothing—requires a long press."),
               ("Trails as light","Open, busy, and closed runs read at a glance as a light-trail map animated at walking-pace speed. No legend required after first use."),
               ("Offline by default","The full trail map and the day's last known conditions live on-device. The mountain does not care about your signal.")],
      outcome="Snø launched for the 2026 season across the resort’s three peaks. Early numbers: 41% of scanned lift passes linked to the app, and queue-time complaints to guest services dropped noticeably in the first month.",
      stats=[('56pt','Smallest touch target anywhere in the app'),('41%','Of lift passes linked in season one'),('−28%','Queue complaints in launch month')],
      quote=('First resort app I have used that respects cold fingers.', 'Season pass holder, review')),
]

CSS = r"""/* case-study pages · shared styles */
*{margin:0;padding:0;box-sizing:border-box;}
:root{
  --bg:#0b0b0c; --ink:#f1efe9; --acc:#c6ff3a; --mut:#8f8f96;
  --sans:"Inter",system-ui,sans-serif; --disp:"Archivo",sans-serif;
  --cur-arrow:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M4 2 L4 19 L8.4 15 L11 21.5 L13.6 20.4 L11 14 L18 14 Z' fill='%23c6ff3a' stroke='%23081018' stroke-width='1.4' stroke-linejoin='round'/%3E%3C/svg%3E") 4 2, auto;
  --cur-hand:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M8 2 a1.6 1.6 0 0 1 1.6 1.6 V10 h1 V3.6 a1.6 1.6 0 0 1 3.2 0 V10 h1 V5.6 a1.6 1.6 0 0 1 3.2 0 V13 c0 4-2.6 7-6.6 7 c-2.6 0-3.9-1-5.3-2.9 L3 12.6 c-.8-.9-.7-2.1 .2-2.7 c.8-.6 2-.4 2.6 .4 l.6 .8 V3.6 A1.6 1.6 0 0 1 8 2 z' fill='%23c6ff3a' stroke='%23081018' stroke-width='1.3' stroke-linejoin='round'/%3E%3C/svg%3E") 8 2, pointer;
}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--ink);font-family:var(--sans);letter-spacing:-.01em;cursor:var(--cur-arrow);-webkit-font-smoothing:antialiased;}
a,button{cursor:var(--cur-hand);}
::selection{background:var(--acc);color:#0b0b0c;}
.prog{position:fixed;top:0;left:0;height:3px;width:0;z-index:60;background:linear-gradient(90deg,#0b0b0c,#5a5a60,var(--acc));box-shadow:0 0 12px rgba(198,255,58,.45);}
.aur{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;}
.aur i{position:absolute;width:42vw;height:42vw;border-radius:50%;filter:blur(120px);opacity:.13;}
.aur i:nth-child(1){background:#c6ff3a;top:-14vw;left:-10vw;animation:a1 26s ease-in-out infinite alternate;}
.aur i:nth-child(2){background:#3a7bff;bottom:-16vw;right:-8vw;animation:a2 32s ease-in-out infinite alternate;}
@keyframes a1{to{transform:translate(9vw,6vh) scale(1.15);}}
@keyframes a2{to{transform:translate(-8vw,-7vh) scale(1.2);}}
nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;
  padding:18px clamp(20px,4vw,56px);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  background:rgba(11,11,12,.7);border-bottom:1px solid rgba(255,255,255,.08);}
nav .l a{font-size:13px;font-weight:600;color:var(--mut);text-decoration:none;transition:color .3s;}
nav .l a:hover{color:var(--acc);}
nav .r a{font-family:var(--disp);font-weight:800;font-size:15px;color:var(--ink);text-decoration:none;}
nav .r a:hover{color:var(--acc);}
.wrap{position:relative;z-index:1;max-width:1180px;margin:0 auto;padding:0 clamp(20px,4vw,40px);}
.hero{padding:clamp(70px,12vh,130px) 0 0;}
.eye{font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:var(--acc);}
h1{font-family:var(--disp);font-weight:900;font-size:clamp(56px,11vw,150px);letter-spacing:-.04em;line-height:.95;margin:18px 0 20px;}
.tag{font-size:clamp(16px,2vw,22px);color:#c9c7bf;max-width:720px;line-height:1.6;}
.heroimg{margin-top:clamp(36px,6vh,64px);border:1px solid rgba(255,255,255,.1);overflow:hidden;border-radius:6px;}
.heroimg img{width:100%;display:block;aspect-ratio:16/9;object-fit:cover;}
.meta{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.1);
  border:1px solid rgba(255,255,255,.1);margin:clamp(40px,7vh,70px) 0;}
.meta div{background:var(--bg);padding:22px 20px;}
.meta .k{font-size:10.5px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--mut);margin-bottom:8px;}
.meta .v{font-family:var(--disp);font-weight:700;font-size:15.5px;line-height:1.45;}
section{padding:clamp(38px,7vh,80px) 0 0;}
h2{font-family:var(--disp);font-weight:800;font-size:clamp(26px,3.6vw,44px);letter-spacing:-.02em;margin-bottom:18px;}
h2::after{content:"";display:block;width:42px;height:3px;background:var(--acc);margin-top:14px;transition:width .5s;}
section:hover h2::after{width:86px;}
.body p{color:#c9c7bf;font-size:clamp(15px,1.15vw,17px);line-height:1.85;max-width:760px;margin-bottom:16px;}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.1);margin-top:26px;}
.step{background:var(--bg);padding:26px 22px;}
.step .n{font-family:var(--disp);font-weight:900;font-size:40px;color:transparent;-webkit-text-stroke:1.5px rgba(198,255,58,.7);display:block;margin-bottom:14px;}
.step h3{font-family:var(--disp);font-weight:800;font-size:17px;margin-bottom:10px;}
.step p{color:var(--mut);font-size:13.5px;line-height:1.7;}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(12px,2vw,24px);margin-top:30px;}
.stat{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.03);padding:clamp(20px,2.6vw,34px);text-align:center;transition:.35s;}
.stat:hover{border-color:rgba(198,255,58,.55);transform:translateY(-5px);}
.stat .v{font-family:var(--disp);font-weight:900;font-size:clamp(30px,4vw,52px);color:var(--acc);letter-spacing:-.02em;}
.stat .l{font-size:12px;color:var(--mut);margin-top:8px;line-height:1.5;}
blockquote{margin:clamp(46px,8vh,90px) auto 0;max-width:860px;text-align:center;}
blockquote p{font-family:var(--disp);font-weight:700;font-size:clamp(21px,3vw,34px);letter-spacing:-.02em;line-height:1.35;}
blockquote p::before{content:"“";color:var(--acc);}
blockquote p::after{content:"”";color:var(--acc);}
blockquote cite{display:block;margin-top:16px;font-style:normal;font-size:13px;color:var(--mut);letter-spacing:.1em;text-transform:uppercase;}
.next{display:block;text-decoration:none;color:var(--ink);margin:clamp(60px,10vh,110px) calc(-1*clamp(20px,4vw,40px)) 0;
  border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1);
  padding:clamp(46px,9vh,90px) clamp(20px,4vw,40px);text-align:center;transition:background .4s;}
.next:hover{background:rgba(198,255,58,.06);}
.next .k{font-size:11px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:var(--mut);}
.next .t{font-family:var(--disp);font-weight:900;font-size:clamp(36px,7vw,84px);letter-spacing:-.035em;margin-top:12px;transition:color .35s;}
.next:hover .t{color:var(--acc);}
.next .a{display:inline-block;margin-top:14px;font-size:13px;color:var(--mut);transition:.35s;}
.next:hover .a{transform:translateX(8px);color:var(--acc);}
footer{display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between;padding:26px clamp(20px,4vw,56px);
  font-size:10.5px;letter-spacing:.14em;color:var(--mut);}
.rv{opacity:0;transform:translateY(48px);transition:opacity .8s cubic-bezier(.16,.8,.26,1),transform .8s cubic-bezier(.16,.8,.26,1);}
.rv.in{opacity:1;transform:none;}
body::-webkit-scrollbar{width:10px;}
body::-webkit-scrollbar-track{background:var(--bg);}
body::-webkit-scrollbar-thumb{background:#3a3a40;border-radius:6px;}
body::-webkit-scrollbar-thumb:hover{background:var(--acc);}
@media (max-width:760px){
  .meta{grid-template-columns:repeat(2,1fr);}
  .steps{grid-template-columns:1fr;}
  .stats{grid-template-columns:1fr;}
}
"""

JS = r"""const prog=document.querySelector('.prog');
addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  prog.style.width=(max>0?scrollY/max*100:0)+'%';
},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
"""

PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — Alex Carter · Case Study</title>
<meta name="description" content="{tag}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' fill='%230a8a8a'/%3E%3Ctext x='2' y='13' font-family='monospace' font-size='12' font-weight='bold' fill='%23c6ff3a'%3EA%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Archivo:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="work.css">
</head>
<body>
<div class="prog"></div>
<div class="aur" aria-hidden="true"><i></i><i></i></div>
<nav>
  <span class="l"><a href="../index.html">← All Work</a></span>
  <span class="r"><a href="../index.html">Alex Carter</a></span>
</nav>
<main class="wrap">
  <header class="hero">
    <div class="eye rv">{cat} · {year} · {role}</div>
    <h1 class="rv">{title}</h1>
    <p class="tag rv">{tag}</p>
    <div class="heroimg rv"><img src="{img}" alt="{title} — {cat}"></div>
  </header>
  <div class="meta rv">
    <div><div class="k">Role</div><div class="v">{role}</div></div>
    <div><div class="k">Year</div><div class="v">{year}</div></div>
    <div><div class="k">Sector</div><div class="v">{cat}</div></div>
    <div><div class="k">Stack</div><div class="v">{stack}</div></div>
  </div>
  <section class="rv"><h2>Overview</h2><div class="body"><p>{overview}</p></div></section>
  <section class="rv"><h2>The Challenge</h2><div class="body"><p>{challenge}</p></div></section>
  <section class="rv"><h2>The Process</h2><div class="steps">{steps}</div></section>
  <section class="rv"><h2>The Outcome</h2><div class="body"><p>{outcome}</p></div><div class="stats">{stats}</div></section>
  <blockquote class="rv"><p>{quote}</p><cite>{cite}</cite></blockquote>
  <a class="next" href="{next}.html">
    <span class="k">Next Project</span>
    <div class="t">{nexttitle}</div>
    <span class="a">View Case Study →</span>
  </a>
</main>
<footer>
  <span>© 2026 ALEX CARTER. ALL RIGHTS RESERVED.</span>
  <span>CASE {num}/08 · BUILT IN ALEXOS</span>
</footer>
<script src="work.js"></script>
</body>
</html>
"""

def main():
    os.makedirs(WORK, exist_ok=True)
    with open(os.path.join(WORK, 'work.css'), 'w') as f: f.write(CSS)
    with open(os.path.join(WORK, 'work.js'), 'w') as f: f.write(JS)
    for i, p in enumerate(P):
        nxt = P[(i + 1) % len(P)]
        steps = ''.join(
            '<div class="step"><span class="n">0{}</span><h3>{}</h3><p>{}</p></div>'.format(
                k + 1, html.escape(t), html.escape(d))
            for k, (t, d) in enumerate(p['process']))
        stats = ''.join(
            '<div class="stat"><div class="v">{}</div><div class="l">{}</div></div>'.format(
                html.escape(v), html.escape(l))
            for v, l in p['stats'])
        page = PAGE.format(
            title=html.escape(p['title']), cat=p['cat'], year=p['year'], role=html.escape(p['role']),
            tag=html.escape(p['tag']), img=p['img'], stack=' · '.join(p['stack']),
            overview=html.escape(p['overview']), challenge=html.escape(p['challenge']),
            outcome=html.escape(p['outcome']), steps=steps, stats=stats,
            quote=html.escape(p['quote'][0]), cite=html.escape(p['quote'][1]),
            next=nxt['slug'], nexttitle=html.escape(nxt['title']),
            num=str(i + 1).zfill(2))
        with open(os.path.join(WORK, p['slug'] + '.html'), 'w') as f:
            f.write(page)
        print('wrote work/%s.html' % p['slug'])

if __name__ == '__main__':
    main()
