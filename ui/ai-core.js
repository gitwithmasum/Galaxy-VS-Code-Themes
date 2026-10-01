/* MASUM FUTURE THEMES // AI Core Mode
   Animated neural network, data pulses and central AI core. */
(() => {
  if (window.__MASUM_AI_CORE_MODE__) return;
  window.__MASUM_AI_CORE_MODE__ = true;

  const SVG = `
  <svg class="masum-ai-core-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="ma-bg" cx="52%" cy="44%" r="78%">
        <stop offset="0" stop-color="#101d4a"/>
        <stop offset=".42" stop-color="#07152a"/>
        <stop offset="1" stop-color="#02050d"/>
      </radialGradient>
      <radialGradient id="ma-core">
        <stop offset="0" stop-color="#ffffff"/>
        <stop offset=".18" stop-color="#9dfbff"/>
        <stop offset=".52" stop-color="#33f6ff"/>
        <stop offset="1" stop-color="#6c63ff"/>
      </radialGradient>
      <linearGradient id="ma-line" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#33f6ff"/>
        <stop offset=".55" stop-color="#6c63ff"/>
        <stop offset="1" stop-color="#00ffb2"/>
      </linearGradient>
      <filter id="ma-glow"><feGaussianBlur stdDeviation="10"/></filter>
      <filter id="ma-soft"><feGaussianBlur stdDeviation="3"/></filter>
      <pattern id="ma-grid" width="70" height="70" patternUnits="userSpaceOnUse">
        <path d="M70 0H0V70" fill="none" stroke="#4adfff" stroke-width="1" opacity=".055"/>
      </pattern>
      <style>
        .ma-core-pulse{animation:ma-core-pulse 4.8s ease-in-out infinite}
        .ma-ring-a{animation:ma-spin 18s linear infinite;transform-origin:800px 450px}
        .ma-ring-b{animation:ma-spin-rev 26s linear infinite;transform-origin:800px 450px}
        .ma-node{animation:ma-node 3.6s ease-in-out infinite alternate}
        .ma-pulse-a{animation:ma-pulse-a 7s linear infinite}
        .ma-pulse-b{animation:ma-pulse-b 9s linear infinite 1.8s}
        .ma-pulse-c{animation:ma-pulse-c 11s linear infinite 3s}
        .ma-scan{animation:ma-scan 10s linear infinite}
        .ma-data{animation:ma-data 14s linear infinite}
        @keyframes ma-core-pulse{0%,100%{opacity:.76;transform:scale(1)}50%{opacity:1;transform:scale(1.07)}}
        @keyframes ma-spin{to{transform:rotate(360deg)}}
        @keyframes ma-spin-rev{to{transform:rotate(-360deg)}}
        @keyframes ma-node{from{opacity:.36}to{opacity:.92}}
        @keyframes ma-pulse-a{0%{offset-distance:0%;opacity:0}10%{opacity:1}90%{opacity:1}100%{offset-distance:100%;opacity:0}}
        @keyframes ma-pulse-b{0%{offset-distance:0%;opacity:0}10%{opacity:.9}90%{opacity:.9}100%{offset-distance:100%;opacity:0}}
        @keyframes ma-pulse-c{0%{offset-distance:0%;opacity:0}10%{opacity:.8}90%{opacity:.8}100%{offset-distance:100%;opacity:0}}
        @keyframes ma-scan{from{transform:translateY(-950px)}to{transform:translateY(950px)}}
        @keyframes ma-data{from{transform:translateY(120px)}to{transform:translateY(-1000px)}}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#ma-bg)"/>
    <rect width="1600" height="900" fill="url(#ma-grid)"/>

    <ellipse cx="800" cy="450" rx="620" ry="280" fill="#6c63ff" opacity=".055" filter="url(#ma-glow)"/>
    <ellipse cx="800" cy="450" rx="470" ry="210" fill="#33f6ff" opacity=".045" filter="url(#ma-glow)"/>

    <g opacity=".34" stroke="url(#ma-line)" stroke-width="1.35">
      <path id="ma-path-a" d="M170 170 C380 120 470 340 680 390 S1030 510 1430 210" fill="none"/>
      <path id="ma-path-b" d="M130 620 C360 500 510 650 735 505 S1110 280 1490 610" fill="none"/>
      <path id="ma-path-c" d="M260 760 C470 700 540 560 790 610 S1160 720 1390 500" fill="none"/>
      <path d="M300 240 L510 330 L690 230 L800 450 L1020 275 L1290 360" fill="none"/>
      <path d="M280 580 L500 500 L690 670 L800 450 L1060 590 L1320 520" fill="none"/>
      <path d="M510 330 L500 500 M690 230 L690 670 M1020 275 L1060 590 M1290 360 L1320 520" fill="none"/>
    </g>

    <g fill="#33f6ff">
      <circle class="ma-node" cx="300" cy="240" r="5"/>
      <circle class="ma-node" cx="510" cy="330" r="6"/>
      <circle class="ma-node" cx="690" cy="230" r="5"/>
      <circle class="ma-node" cx="1020" cy="275" r="6"/>
      <circle class="ma-node" cx="1290" cy="360" r="5"/>
      <circle class="ma-node" cx="280" cy="580" r="5"/>
      <circle class="ma-node" cx="500" cy="500" r="6"/>
      <circle class="ma-node" cx="690" cy="670" r="5"/>
      <circle class="ma-node" cx="1060" cy="590" r="6"/>
      <circle class="ma-node" cx="1320" cy="520" r="5"/>
    </g>

    <g transform="translate(800 450)">
      <circle r="150" fill="#33f6ff" opacity=".055" filter="url(#ma-glow)"/>
      <circle class="ma-ring-a" r="116" fill="none" stroke="#33f6ff" stroke-width="2" stroke-dasharray="14 18" opacity=".34"/>
      <circle class="ma-ring-b" r="92" fill="none" stroke="#6c63ff" stroke-width="2.2" stroke-dasharray="8 13" opacity=".42"/>
      <circle class="ma-core-pulse" r="58" fill="url(#ma-core)" opacity=".9"/>
      <circle r="28" fill="#ffffff" opacity=".36" filter="url(#ma-soft)"/>
    </g>

    <g opacity=".55">
      <circle class="ma-pulse-a" r="5" fill="#ffffff" style="offset-path:path('M170 170 C380 120 470 340 680 390 S1030 510 1430 210')"/>
      <circle class="ma-pulse-b" r="4" fill="#00ffb2" style="offset-path:path('M130 620 C360 500 510 650 735 505 S1110 280 1490 610')"/>
      <circle class="ma-pulse-c" r="4.5" fill="#8d8aff" style="offset-path:path('M260 760 C470 700 540 560 790 610 S1160 720 1390 500')"/>
    </g>

    <g class="ma-data" opacity=".16" font-family="Consolas, monospace" font-size="12" fill="#79f8ff">
      <text x="90" y="820">01001101 01000001 01010011 01010101 01001101</text>
      <text x="1180" y="760">NEURAL_LINK::ACTIVE</text>
      <text x="1060" y="850">MODEL_SYNC::OK</text>
      <text x="250" y="700">VECTOR_STREAM::ONLINE</text>
    </g>

    <g class="ma-scan" opacity=".10">
      <rect x="0" y="0" width="1600" height="3" fill="#33f6ff" filter="url(#ma-soft)"/>
    </g>

    <path d="M36 128V36h92M1472 36h92v92M36 772v92h92M1472 864h92v-92" fill="none" stroke="#33f6ff" stroke-opacity=".18" stroke-width="1"/>
    <path d="M800 26v42M779 47h42" fill="none" stroke="#6c63ff" stroke-opacity=".18" stroke-width="1"/>
  </svg>`;

  const install = () => {
    document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
      group.querySelectorAll(':scope > .masum-galaxy-layer, :scope > .masum-cyber-layer').forEach((oldLayer) => oldLayer.remove());
      if (group.querySelector(':scope > .masum-ai-core-layer')) return;
      const layer = document.createElement('div');
      layer.className = 'masum-ai-core-layer';
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
