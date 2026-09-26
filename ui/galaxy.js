/* MASUM GALAXY // Galaxy Cockpit v7
   Injects an inline animated SVG into each editor group so VS Code's
   internal Monaco paint layers cannot hide the galaxy. */
(() => {
  if (window.__MASUM_GALAXY_COCKPIT_V7__) return;
  window.__MASUM_GALAXY_COCKPIT_V7__ = true;

  const SVG = `
  <svg class="masum-galaxy-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="mg-space" cx="67%" cy="42%" r="80%">
        <stop offset="0" stop-color="#15114a"/>
        <stop offset=".46" stop-color="#071126"/>
        <stop offset="1" stop-color="#01030a"/>
      </radialGradient>
      <radialGradient id="mg-sun">
        <stop offset="0" stop-color="#fff7d1"/>
        <stop offset=".24" stop-color="#ffd65a"/>
        <stop offset=".62" stop-color="#ff8a24"/>
        <stop offset="1" stop-color="#ff3d00"/>
      </radialGradient>
      <linearGradient id="mg-earth" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#28c8ff"/><stop offset=".55" stop-color="#156bc1"/><stop offset="1" stop-color="#08295f"/>
      </linearGradient>
      <filter id="mg-glow"><feGaussianBlur stdDeviation="13"/></filter>
      <filter id="mg-soft"><feGaussianBlur stdDeviation="2.4"/></filter>
      <pattern id="mg-stars" width="145" height="120" patternUnits="userSpaceOnUse">
        <circle cx="14" cy="23" r="1.2" fill="#d5f7ff" opacity=".75"/>
        <circle cx="81" cy="72" r=".8" fill="#ffffff" opacity=".48"/>
        <circle cx="122" cy="31" r="1" fill="#69e7ff" opacity=".52"/>
        <circle cx="45" cy="101" r=".7" fill="#b4a7ff" opacity=".5"/>
      </pattern>
      <style>
        .mg-scene{opacity:0;transform-origin:1240px 470px;animation:mg-cycle 40s infinite ease-in-out}
        .mg-1{animation-delay:0s}.mg-2{animation-delay:5s}.mg-3{animation-delay:10s}.mg-4{animation-delay:15s}
        .mg-5{animation-delay:20s}.mg-6{animation-delay:25s}.mg-7{animation-delay:30s}.mg-8{animation-delay:35s}
        @keyframes mg-cycle{
          0%{opacity:0;transform:scale(.86) translateX(35px)}
          2.5%{opacity:.92;transform:scale(1) translateX(0)}
          10.5%{opacity:.92;transform:scale(1.02) translateX(-8px)}
          12.5%{opacity:0;transform:scale(1.08) translateX(-28px)}
          100%{opacity:0}
        }
        .mg-orbit{fill:none;stroke:#5eeaff;stroke-opacity:.13;stroke-width:1.2}
        .mg-ring{fill:none;stroke:#f8dc9b;stroke-opacity:.54;stroke-width:22}
        .mg-hud{fill:none;stroke:#77efff;stroke-opacity:.12;stroke-width:1}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#mg-space)"/>
    <rect width="1600" height="900" fill="url(#mg-stars)" opacity=".86"/>
    <ellipse cx="840" cy="430" rx="720" ry="300" fill="#6d28d9" opacity=".095" filter="url(#mg-glow)" transform="rotate(-12 840 430)"/>
    <ellipse cx="650" cy="520" rx="560" ry="210" fill="#0ea5e9" opacity=".06" filter="url(#mg-glow)" transform="rotate(8 650 520)"/>

    <circle cx="1420" cy="135" r="94" fill="#ff8a24" opacity=".15" filter="url(#mg-glow)"/>
    <circle cx="1420" cy="135" r="58" fill="url(#mg-sun)" opacity=".9"/>

    <circle cx="175" cy="724" r="48" fill="#dce9ff" opacity=".62" filter="url(#mg-soft)"/>
    <circle cx="194" cy="711" r="50" fill="#020614" opacity=".88"/>

    <ellipse class="mg-orbit" cx="815" cy="455" rx="300" ry="116"/>
    <ellipse class="mg-orbit" cx="815" cy="455" rx="470" ry="182"/>
    <ellipse class="mg-orbit" cx="815" cy="455" rx="650" ry="258"/>

    <g class="mg-scene mg-1">
      <circle cx="1230" cy="485" r="102" fill="#9b9994"/>
      <circle cx="1200" cy="455" r="18" fill="#777570" opacity=".65"/>
      <circle cx="1264" cy="516" r="12" fill="#6f6d69" opacity=".7"/>
    </g>
    <g class="mg-scene mg-2">
      <circle cx="1235" cy="480" r="132" fill="#e0a166"/>
      <path d="M1115 445 Q1235 410 1355 445M1110 500 Q1235 535 1360 500" stroke="#ffd0a0" stroke-width="16" opacity=".26" fill="none"/>
    </g>
    <g class="mg-scene mg-3">
      <circle cx="1230" cy="480" r="139" fill="url(#mg-earth)"/>
      <path d="M1160 425c35-25 64-20 86 5 18 20 38 14 56 36-26 5-34 29-64 24-25-4-43-30-78-23z" fill="#56c982" opacity=".72"/>
      <path d="M1260 525c24-18 52-15 75 5-20 13-31 35-61 34-18-1-29-18-14-39z" fill="#47b876" opacity=".68"/>
    </g>
    <g class="mg-scene mg-4">
      <circle cx="1230" cy="480" r="116" fill="#c64c34"/>
      <circle cx="1195" cy="447" r="19" fill="#7c2f25" opacity=".62"/>
      <circle cx="1272" cy="522" r="14" fill="#7a2d24" opacity=".58"/>
    </g>
    <g class="mg-scene mg-5">
      <circle cx="1215" cy="472" r="204" fill="#c99569"/>
      <path d="M1040 406Q1215 458 1390 406M1019 482Q1215 540 1411 482M1046 555Q1215 603 1384 555" stroke="#f2d4ad" stroke-width="22" opacity=".28" fill="none"/>
      <ellipse cx="1290" cy="506" rx="42" ry="18" fill="#b34b31" opacity=".72"/>
    </g>
    <g class="mg-scene mg-6">
      <ellipse class="mg-ring" cx="1220" cy="485" rx="285" ry="66" transform="rotate(-11 1220 485)"/>
      <circle cx="1220" cy="485" r="164" fill="#d5b36f"/>
      <path d="M1080 445Q1220 490 1360 445M1080 516Q1220 555 1360 516" stroke="#f7df9f" stroke-width="14" opacity=".24" fill="none"/>
    </g>
    <g class="mg-scene mg-7">
      <circle cx="1230" cy="480" r="148" fill="#78d8df"/>
      <ellipse cx="1230" cy="480" rx="215" ry="42" fill="none" stroke="#c5fbff" stroke-width="8" opacity=".24" transform="rotate(15 1230 480)"/>
    </g>
    <g class="mg-scene mg-8">
      <circle cx="1230" cy="480" r="145" fill="#356bc7"/>
      <path d="M1108 445Q1230 475 1352 445M1110 515Q1230 545 1350 515" stroke="#79a8ff" stroke-width="13" opacity=".25" fill="none"/>
    </g>

    <path class="mg-hud" d="M32 125V32h95M1473 32h95v95M32 775v93h95M1473 868h95v-93"/>
    <path class="mg-hud" d="M800 22v50M775 47h50M800 828v50M775 853h50"/>
  </svg>`;

  const install = () => {
    document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
      if (group.querySelector(':scope > .masum-galaxy-layer')) return;
      const layer = document.createElement('div');
      layer.className = 'masum-galaxy-layer';
      layer.innerHTML = SVG;
      group.prepend(layer);
    });
  };

  const boot = () => {
    install();
    const observer = new MutationObserver(install);
    observer.observe(document.body, { childList: true, subtree: true });
    setInterval(install, 2000);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
