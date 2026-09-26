/* MASUM GALAXY // Ultimate Galaxy Cockpit v8
   Injects one animated inline SVG per editor group. */
(() => {
  if (window.__MASUM_GALAXY_COCKPIT_V8__) return;
  window.__MASUM_GALAXY_COCKPIT_V8__ = true;

  const SVG = `
  <svg class="masum-galaxy-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="mg-space" cx="69%" cy="42%" r="82%">
        <stop offset="0" stop-color="#171452"/>
        <stop offset=".42" stop-color="#07152d"/>
        <stop offset="1" stop-color="#01030a"/>
      </radialGradient>
      <radialGradient id="mg-sun">
        <stop offset="0" stop-color="#fffbe0"/>
        <stop offset=".22" stop-color="#ffe16b"/>
        <stop offset=".58" stop-color="#ff9a2f"/>
        <stop offset="1" stop-color="#ff4200"/>
      </radialGradient>
      <linearGradient id="mg-earth" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#39d5ff"/><stop offset=".54" stop-color="#176ec9"/><stop offset="1" stop-color="#082758"/>
      </linearGradient>
      <filter id="mg-glow"><feGaussianBlur stdDeviation="14"/></filter>
      <filter id="mg-soft"><feGaussianBlur stdDeviation="2.5"/></filter>
      <filter id="mg-planet-glow"><feGaussianBlur stdDeviation="5"/></filter>
      <pattern id="mg-stars-a" width="145" height="120" patternUnits="userSpaceOnUse">
        <circle cx="14" cy="23" r="1.15" fill="#d5f7ff" opacity=".78"/>
        <circle cx="81" cy="72" r=".8" fill="#ffffff" opacity=".46"/>
        <circle cx="122" cy="31" r="1" fill="#69e7ff" opacity=".56"/>
        <circle cx="45" cy="101" r=".7" fill="#b4a7ff" opacity=".48"/>
      </pattern>
      <pattern id="mg-stars-b" width="210" height="170" patternUnits="userSpaceOnUse">
        <circle cx="28" cy="44" r=".65" fill="#8cf4ff" opacity=".4"/>
        <circle cx="160" cy="126" r="1.1" fill="#fff" opacity=".42"/>
        <circle cx="105" cy="28" r=".55" fill="#9b8cff" opacity=".44"/>
      </pattern>
      <style>
        .mg-stars-a{animation:mg-stars-drift-a 32s linear infinite}
        .mg-stars-b{animation:mg-stars-drift-b 46s linear infinite}
        .mg-nebula-a{animation:mg-nebula-a 22s ease-in-out infinite alternate}
        .mg-nebula-b{animation:mg-nebula-b 28s ease-in-out infinite alternate}
        .mg-sun-core{animation:mg-sun-pulse 5s ease-in-out infinite}
        .mg-moon{animation:mg-moon-float 9s ease-in-out infinite alternate}
        .mg-orbit{fill:none;stroke:#5eeaff;stroke-opacity:.12;stroke-width:1.15;stroke-dasharray:8 12;animation:mg-orbit-dash 18s linear infinite}
        .mg-ring{fill:none;stroke:#f8dc9b;stroke-opacity:.54;stroke-width:22}
        .mg-hud{fill:none;stroke:#77efff;stroke-opacity:.12;stroke-width:1}
        .mg-scene{opacity:0;transform-origin:1230px 480px;animation:mg-cycle 40s infinite cubic-bezier(.4,0,.2,1)}
        .mg-1{animation-delay:0s}.mg-2{animation-delay:5s}.mg-3{animation-delay:10s}.mg-4{animation-delay:15s}
        .mg-5{animation-delay:20s}.mg-6{animation-delay:25s}.mg-7{animation-delay:30s}.mg-8{animation-delay:35s}
        .mg-planet-glow{opacity:.16;filter:url(#mg-planet-glow)}

        @keyframes mg-cycle{
          0%{opacity:0;transform:translateX(42px) scale(.88)}
          1.8%{opacity:.18;transform:translateX(24px) scale(.94)}
          3.4%{opacity:.9;transform:translateX(0) scale(1)}
          9.2%{opacity:.9;transform:translateX(-5px) scale(1.018)}
          10.7%{opacity:.68;transform:translateX(-12px) scale(1.035)}
          12.5%{opacity:0;transform:translateX(-34px) scale(1.085)}
          100%{opacity:0}
        }
        @keyframes mg-stars-drift-a{from{transform:translate3d(0,0,0)}to{transform:translate3d(-70px,28px,0)}}
        @keyframes mg-stars-drift-b{from{transform:translate3d(0,0,0)}to{transform:translate3d(58px,-36px,0)}}
        @keyframes mg-nebula-a{from{transform:translate(-18px,8px) rotate(-12deg) scale(1)}to{transform:translate(24px,-10px) rotate(-9deg) scale(1.04)}}
        @keyframes mg-nebula-b{from{transform:translate(12px,-10px) rotate(8deg) scale(1)}to{transform:translate(-24px,18px) rotate(11deg) scale(1.05)}}
        @keyframes mg-sun-pulse{0%,100%{opacity:.82;transform:scale(1)}50%{opacity:.98;transform:scale(1.035)}}
        @keyframes mg-moon-float{from{transform:translateY(0)}to{transform:translateY(-10px)}}
        @keyframes mg-orbit-dash{to{stroke-dashoffset:-180}}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#mg-space)"/>
    <g class="mg-stars-a"><rect x="-90" y="-40" width="1780" height="980" fill="url(#mg-stars-a)" opacity=".88"/></g>
    <g class="mg-stars-b"><rect x="-80" y="-50" width="1760" height="1000" fill="url(#mg-stars-b)" opacity=".55"/></g>

    <ellipse class="mg-nebula-a" cx="840" cy="430" rx="720" ry="300" fill="#6d28d9" opacity=".095" filter="url(#mg-glow)"/>
    <ellipse class="mg-nebula-b" cx="650" cy="520" rx="560" ry="210" fill="#0ea5e9" opacity=".065" filter="url(#mg-glow)"/>

    <g transform="translate(1420 135)">
      <circle r="100" fill="#ff8a24" opacity=".14" filter="url(#mg-glow)"/>
      <circle class="mg-sun-core" r="58" fill="url(#mg-sun)"/>
    </g>

    <g class="mg-moon">
      <circle cx="175" cy="724" r="48" fill="#dce9ff" opacity=".58" filter="url(#mg-soft)"/>
      <circle cx="194" cy="711" r="50" fill="#020614" opacity=".88"/>
    </g>

    <ellipse class="mg-orbit" cx="815" cy="455" rx="300" ry="116"/>
    <ellipse class="mg-orbit" cx="815" cy="455" rx="470" ry="182"/>
    <ellipse class="mg-orbit" cx="815" cy="455" rx="650" ry="258"/>

    <g class="mg-scene mg-1">
      <circle class="mg-planet-glow" cx="1230" cy="485" r="120" fill="#a6a39c"/>
      <circle cx="1230" cy="485" r="102" fill="#9b9994"/>
      <circle cx="1200" cy="455" r="18" fill="#777570" opacity=".65"/>
      <circle cx="1264" cy="516" r="12" fill="#6f6d69" opacity=".7"/>
    </g>
    <g class="mg-scene mg-2">
      <circle class="mg-planet-glow" cx="1235" cy="480" r="152" fill="#f2ae72"/>
      <circle cx="1235" cy="480" r="132" fill="#e0a166"/>
      <path d="M1115 445 Q1235 410 1355 445M1110 500 Q1235 535 1360 500" stroke="#ffd0a0" stroke-width="16" opacity=".26" fill="none"/>
    </g>
    <g class="mg-scene mg-3">
      <circle class="mg-planet-glow" cx="1230" cy="480" r="160" fill="#26bdf5"/>
      <circle cx="1230" cy="480" r="139" fill="url(#mg-earth)"/>
      <path d="M1160 425c35-25 64-20 86 5 18 20 38 14 56 36-26 5-34 29-64 24-25-4-43-30-78-23z" fill="#56c982" opacity=".72"/>
      <path d="M1260 525c24-18 52-15 75 5-20 13-31 35-61 34-18-1-29-18-14-39z" fill="#47b876" opacity=".68"/>
    </g>
    <g class="mg-scene mg-4">
      <circle class="mg-planet-glow" cx="1230" cy="480" r="136" fill="#dc5b3e"/>
      <circle cx="1230" cy="480" r="116" fill="#c64c34"/>
      <circle cx="1195" cy="447" r="19" fill="#7c2f25" opacity=".62"/>
      <circle cx="1272" cy="522" r="14" fill="#7a2d24" opacity=".58"/>
    </g>
    <g class="mg-scene mg-5">
      <circle class="mg-planet-glow" cx="1215" cy="472" r="228" fill="#d6a178"/>
      <circle cx="1215" cy="472" r="204" fill="#c99569"/>
      <path d="M1040 406Q1215 458 1390 406M1019 482Q1215 540 1411 482M1046 555Q1215 603 1384 555" stroke="#f2d4ad" stroke-width="22" opacity=".28" fill="none"/>
      <ellipse cx="1290" cy="506" rx="42" ry="18" fill="#b34b31" opacity=".72"/>
    </g>
    <g class="mg-scene mg-6">
      <ellipse class="mg-ring" cx="1220" cy="485" rx="285" ry="66" transform="rotate(-11 1220 485)"/>
      <circle class="mg-planet-glow" cx="1220" cy="485" r="185" fill="#e4c282"/>
      <circle cx="1220" cy="485" r="164" fill="#d5b36f"/>
      <path d="M1080 445Q1220 490 1360 445M1080 516Q1220 555 1360 516" stroke="#f7df9f" stroke-width="14" opacity=".24" fill="none"/>
    </g>
    <g class="mg-scene mg-7">
      <circle class="mg-planet-glow" cx="1230" cy="480" r="170" fill="#8be8ef"/>
      <circle cx="1230" cy="480" r="148" fill="#78d8df"/>
      <ellipse cx="1230" cy="480" rx="215" ry="42" fill="none" stroke="#c5fbff" stroke-width="8" opacity=".24" transform="rotate(15 1230 480)"/>
    </g>
    <g class="mg-scene mg-8">
      <circle class="mg-planet-glow" cx="1230" cy="480" r="166" fill="#4b80df"/>
      <circle cx="1230" cy="480" r="145" fill="#356bc7"/>
      <path d="M1108 445Q1230 475 1352 445M1110 515Q1230 545 1350 515" stroke="#79a8ff" stroke-width="13" opacity=".25" fill="none"/>
    </g>

    <path class="mg-hud" d="M32 125V32h95M1473 32h95v95M32 775v93h95M1473 868h95v-93"/>
    <path class="mg-hud" d="M800 22v50M775 47h50M800 828v50M775 853h50"/>
    <circle cx="800" cy="450" r="132" class="mg-hud" opacity=".35"/>
    <circle cx="800" cy="450" r="138" class="mg-hud" opacity=".12" stroke-dasharray="3 11"/>
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
    setInterval(install, 1800);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
