'use strict';

/* MASUM FUTURE THEMES // Mecha Core Mode
   Animated Titan Reactor with mech HUD, rotating rings, warning lights, sparks and energy arcs. */
(() => {
  if (window.__MASUM_MECHA_CORE_MODE__) return;
  window.__MASUM_MECHA_CORE_MODE__ = true;

  const SVG = `
  <svg class="masum-mecha-core-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="mm-bg" cx="50%" cy="48%" r="78%">
        <stop offset="0" stop-color="#17232e"/>
        <stop offset=".46" stop-color="#0b1118"/>
        <stop offset="1" stop-color="#040609"/>
      </radialGradient>
      <radialGradient id="mm-core">
        <stop offset="0" stop-color="#fff8e8"/>
        <stop offset=".2" stop-color="#ffd27b"/>
        <stop offset=".52" stop-color="#ff8a3d"/>
        <stop offset="1" stop-color="#e53e1b"/>
      </radialGradient>
      <linearGradient id="mm-energy" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#5ee7ff"/>
        <stop offset=".48" stop-color="#31bfff"/>
        <stop offset="1" stop-color="#ff7a3d"/>
      </linearGradient>
      <linearGradient id="mm-metal" x1="0" y1="0" x2="0" y2="1">
        <stop stop-color="#27323c"/>
        <stop offset=".5" stop-color="#141b22"/>
        <stop offset="1" stop-color="#0c1117"/>
      </linearGradient>
      <pattern id="mm-grid" width="64" height="64" patternUnits="userSpaceOnUse">
        <path d="M64 0H0V64" fill="none" stroke="#78dfff" stroke-width="1" opacity=".04"/>
      </pattern>
      <pattern id="mm-stripe" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="12" height="24" fill="#ff8b3d" opacity=".18"/>
        <rect x="12" width="12" height="24" fill="#11161c" opacity=".35"/>
      </pattern>
      <filter id="mm-glow"><feGaussianBlur stdDeviation="9"/></filter>
      <filter id="mm-soft"><feGaussianBlur stdDeviation="3"/></filter>
      <filter id="mm-hard"><feGaussianBlur stdDeviation="1.4"/></filter>
      <style>
        .mm-spin-a{animation:mm-spin 14s linear infinite;transform-origin:800px 450px}
        .mm-spin-b{animation:mm-spin-rev 22s linear infinite;transform-origin:800px 450px}
        .mm-spin-c{animation:mm-spin 34s linear infinite;transform-origin:800px 450px}
        .mm-core{animation:mm-core 3.4s ease-in-out infinite}
        .mm-warning{animation:mm-warning 1.2s steps(2,end) infinite}
        .mm-scan{animation:mm-scan 8s linear infinite}
        .mm-spark-a{animation:mm-spark-a 5.8s linear infinite}
        .mm-spark-b{animation:mm-spark-b 7s linear infinite 1.5s}
        .mm-spark-c{animation:mm-spark-c 6.4s linear infinite 3s}
        .mm-piston-l{animation:mm-piston-l 4.6s ease-in-out infinite}
        .mm-piston-r{animation:mm-piston-r 4.6s ease-in-out infinite}
        .mm-arc{stroke-dasharray:18 16;animation:mm-dash 2.2s linear infinite}
        @keyframes mm-spin{to{transform:rotate(360deg)}}
        @keyframes mm-spin-rev{to{transform:rotate(-360deg)}}
        @keyframes mm-core{0%,100%{opacity:.78;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}
        @keyframes mm-warning{0%,48%{opacity:.22}49%,100%{opacity:.92}}
        @keyframes mm-scan{from{transform:translateY(-920px)}to{transform:translateY(920px)}}
        @keyframes mm-spark-a{0%{transform:translate(0,0);opacity:0}8%{opacity:1}100%{transform:translate(260px,-170px);opacity:0}}
        @keyframes mm-spark-b{0%{transform:translate(0,0);opacity:0}8%{opacity:.9}100%{transform:translate(-240px,-150px);opacity:0}}
        @keyframes mm-spark-c{0%{transform:translate(0,0);opacity:0}8%{opacity:.8}100%{transform:translate(180px,190px);opacity:0}}
        @keyframes mm-piston-l{0%,100%{transform:translateX(0)}50%{transform:translateX(24px)}}
        @keyframes mm-piston-r{0%,100%{transform:translateX(0)}50%{transform:translateX(-24px)}}
        @keyframes mm-dash{to{stroke-dashoffset:-68}}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#mm-bg)"/>
    <rect width="1600" height="900" fill="url(#mm-grid)"/>

    <g opacity=".22" fill="none" stroke="#45606f" stroke-width="2">
      <path d="M0 190H300L370 130H520M1600 190H1300L1230 130H1080"/>
      <path d="M0 710H300L370 770H520M1600 710H1300L1230 770H1080"/>
      <path d="M235 0V180L175 240V360M1365 0V180L1425 240V360"/>
      <path d="M235 900V720L175 660V540M1365 900V720L1425 660V540"/>
    </g>

    <g opacity=".8">
      <path d="M70 300h260l78 72v156l-78 72H70z" fill="url(#mm-metal)" stroke="#364854" stroke-width="3"/>
      <path d="M1530 300h-260l-78 72v156l78 72h260z" fill="url(#mm-metal)" stroke="#364854" stroke-width="3"/>
      <rect x="92" y="330" width="205" height="34" rx="8" fill="url(#mm-stripe)"/>
      <rect x="1303" y="330" width="205" height="34" rx="8" fill="url(#mm-stripe)"/>
      <g class="mm-piston-l">
        <rect x="286" y="410" width="160" height="46" rx="12" fill="#111920" stroke="#52626d" stroke-width="3"/>
        <rect x="410" y="421" width="95" height="24" rx="8" fill="#1a262e" stroke="#5ee7ff" stroke-opacity=".38"/>
      </g>
      <g class="mm-piston-r">
        <rect x="1154" y="410" width="160" height="46" rx="12" fill="#111920" stroke="#52626d" stroke-width="3"/>
        <rect x="1095" y="421" width="95" height="24" rx="8" fill="#1a262e" stroke="#5ee7ff" stroke-opacity=".38"/>
      </g>
    </g>

    <ellipse cx="800" cy="450" rx="330" ry="250" fill="#ff6a2e" opacity=".045" filter="url(#mm-glow)"/>
    <ellipse cx="800" cy="450" rx="250" ry="190" fill="#5ee7ff" opacity=".035" filter="url(#mm-glow)"/>

    <g class="mm-spin-c" fill="none" stroke="#738792" stroke-width="8" opacity=".26">
      <circle cx="800" cy="450" r="214" stroke-dasharray="70 18 22 26"/>
    </g>
    <g class="mm-spin-b" fill="none" stroke="#5ee7ff" stroke-width="3" opacity=".32">
      <circle cx="800" cy="450" r="172" stroke-dasharray="16 17 5 14"/>
    </g>
    <g class="mm-spin-a" fill="none" stroke="#ff8a3d" stroke-width="4" opacity=".48">
      <circle cx="800" cy="450" r="132" stroke-dasharray="25 15 7 13"/>
    </g>

    <g fill="none" stroke="url(#mm-energy)" stroke-width="3" opacity=".44">
      <path class="mm-arc" d="M610 455 C660 350 720 320 800 335 C895 352 950 405 990 475"/>
      <path class="mm-arc" d="M610 485 C675 575 735 596 820 574 C900 554 955 515 990 440"/>
    </g>

    <g transform="translate(800 450)">
      <polygon points="0,-104 90,-52 90,52 0,104 -90,52 -90,-52" fill="#0b1016" stroke="#8999a5" stroke-width="5" opacity=".96"/>
      <polygon points="0,-82 71,-41 71,41 0,82 -71,41 -71,-41" fill="#131c24" stroke="#ff8a3d" stroke-width="3" opacity=".95"/>
      <circle class="mm-core" r="58" fill="url(#mm-core)"/>
      <circle r="82" fill="none" stroke="#ff8a3d" stroke-width="2" opacity=".35" filter="url(#mm-soft)"/>
      <circle r="31" fill="#fff7df" opacity=".35" filter="url(#mm-soft)"/>
    </g>

    <g opacity=".72" fill="#5ee7ff">
      <circle cx="515" cy="330" r="5"/><circle cx="1085" cy="330" r="5"/>
      <circle cx="515" cy="570" r="5"/><circle cx="1085" cy="570" r="5"/>
      <circle cx="620" cy="235" r="4"/><circle cx="980" cy="235" r="4"/>
      <circle cx="620" cy="665" r="4"/><circle cx="980" cy="665" r="4"/>
    </g>

    <g class="mm-warning" font-family="Consolas, monospace" font-size="15" fill="#ff9d42" opacity=".78">
      <text x="115" y="395">WARNING // CORE HEAT</text>
      <text x="1265" y="395">TITAN // ARMED</text>
    </g>

    <g font-family="Consolas, monospace" font-size="12" fill="#84dff0" opacity=".22">
      <text x="100" y="665">REACTOR_OUTPUT  98.7%</text>
      <text x="100" y="688">COOLANT_FLOW    STABLE</text>
      <text x="1265" y="665">SERVO_LINK      ONLINE</text>
      <text x="1265" y="688">ARMOR_MATRIX    LOCKED</text>
    </g>

    <g class="mm-spark-a" transform="translate(710 420)" fill="#ffd98a"><circle r="3"/><circle cx="-14" cy="8" r="2"/></g>
    <g class="mm-spark-b" transform="translate(900 440)" fill="#5ee7ff"><circle r="3"/><circle cx="12" cy="-9" r="2"/></g>
    <g class="mm-spark-c" transform="translate(760 520)" fill="#ff7a3d"><circle r="3"/><circle cx="-10" cy="-12" r="2"/></g>

    <g class="mm-scan" opacity=".09">
      <rect x="0" y="0" width="1600" height="3" fill="#5ee7ff" filter="url(#mm-soft)"/>
    </g>

    <path d="M40 120V40h80M1480 40h80v80M40 780v80h80M1480 860h80v-80" fill="none" stroke="#5ee7ff" stroke-opacity=".18" stroke-width="1.5"/>
    <path d="M760 62h80M800 22v80" fill="none" stroke="#ff8a3d" stroke-opacity=".18" stroke-width="1.5"/>
  </svg>`;

  const install = () => {
    document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
      group.querySelectorAll(
        ':scope > .masum-galaxy-layer, :scope > .masum-cyber-layer, :scope > .masum-ai-core-layer, :scope > .masum-black-hole-layer, :scope > .masum-quantum-grid-layer, :scope > .masum-mars-colony-layer, :scope > .masum-deep-ocean-layer, :scope > .masum-aurora-layer'
      ).forEach((oldLayer) => oldLayer.remove());

      if (group.querySelector(':scope > .masum-mecha-core-layer')) return;
      const layer = document.createElement('div');
      layer.className = 'masum-mecha-core-layer';
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
