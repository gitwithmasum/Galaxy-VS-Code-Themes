/* MASUM FUTURE THEMES // Quantum Grid Mode
   Animated Q-Core, quantum lattice, particles, waves and scanner field. */
(() => {
  if (window.__MASUM_QUANTUM_GRID_MODE__) return;
  window.__MASUM_QUANTUM_GRID_MODE__ = true;

  const SVG = `
  <svg class="masum-quantum-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="mq-bg" cx="54%" cy="46%" r="78%">
        <stop offset="0" stop-color="#0b2b42"/>
        <stop offset=".44" stop-color="#07162c"/>
        <stop offset="1" stop-color="#020816"/>
      </radialGradient>
      <radialGradient id="mq-core">
        <stop offset="0" stop-color="#ffffff"/>
        <stop offset=".18" stop-color="#a7fff3"/>
        <stop offset=".52" stop-color="#00ffd5"/>
        <stop offset="1" stop-color="#3a7bff"/>
      </radialGradient>
      <linearGradient id="mq-line" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#00ffd5"/>
        <stop offset=".52" stop-color="#3a7bff"/>
        <stop offset="1" stop-color="#9b5cff"/>
      </linearGradient>
      <filter id="mq-glow"><feGaussianBlur stdDeviation="10"/></filter>
      <filter id="mq-soft"><feGaussianBlur stdDeviation="3"/></filter>
      <pattern id="mq-grid" width="84" height="84" patternUnits="userSpaceOnUse">
        <path d="M84 0H0V84" fill="none" stroke="#00ffd5" stroke-width="1" opacity=".07"/>
        <circle cx="0" cy="0" r="1.8" fill="#73fff0" opacity=".18"/>
      </pattern>
      <style>
        .mq-ring-a{animation:mq-spin 16s linear infinite;transform-origin:800px 450px}
        .mq-ring-b{animation:mq-spin-rev 23s linear infinite;transform-origin:800px 450px}
        .mq-core{animation:mq-core 4.2s ease-in-out infinite}
        .mq-node{animation:mq-node 3.2s ease-in-out infinite alternate}
        .mq-wave-a{animation:mq-wave 7s ease-in-out infinite}
        .mq-wave-b{animation:mq-wave 9s ease-in-out infinite 1.8s}
        .mq-scan{animation:mq-scan 9s linear infinite}
        .mq-data{animation:mq-data 15s linear infinite}
        .mq-pulse-a{animation:mq-pulse-a 6.8s linear infinite}
        .mq-pulse-b{animation:mq-pulse-b 8.5s linear infinite 2s}
        .mq-pulse-c{animation:mq-pulse-c 10s linear infinite 3.5s}
        @keyframes mq-spin{to{transform:rotate(360deg)}}
        @keyframes mq-spin-rev{to{transform:rotate(-360deg)}}
        @keyframes mq-core{0%,100%{opacity:.78;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
        @keyframes mq-node{from{opacity:.34}to{opacity:.92}}
        @keyframes mq-wave{0%,100%{opacity:.10;transform:scale(.96)}50%{opacity:.34;transform:scale(1.06)}}
        @keyframes mq-scan{from{transform:translateY(-950px)}to{transform:translateY(950px)}}
        @keyframes mq-data{from{transform:translateY(140px)}to{transform:translateY(-1050px)}}
        @keyframes mq-pulse-a{0%{offset-distance:0%;opacity:0}10%{opacity:1}90%{opacity:1}100%{offset-distance:100%;opacity:0}}
        @keyframes mq-pulse-b{0%{offset-distance:0%;opacity:0}10%{opacity:.9}90%{opacity:.9}100%{offset-distance:100%;opacity:0}}
        @keyframes mq-pulse-c{0%{offset-distance:0%;opacity:0}10%{opacity:.8}90%{opacity:.8}100%{offset-distance:100%;opacity:0}}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#mq-bg)"/>
    <rect width="1600" height="900" fill="url(#mq-grid)"/>

    <ellipse class="mq-wave-a" cx="800" cy="450" rx="610" ry="270" fill="#00ffd5" opacity=".05" filter="url(#mq-glow)"/>
    <ellipse class="mq-wave-b" cx="800" cy="450" rx="470" ry="205" fill="#9b5cff" opacity=".05" filter="url(#mq-glow)"/>

    <g opacity=".28" stroke="url(#mq-line)" stroke-width="1.2">
      <path id="mq-path-a" d="M120 190 C360 90 520 320 730 390 S1080 510 1480 190" fill="none"/>
      <path id="mq-path-b" d="M110 650 C360 500 560 700 770 525 S1160 270 1490 640" fill="none"/>
      <path id="mq-path-c" d="M220 770 C500 720 610 590 810 635 S1190 720 1390 510" fill="none"/>
      <path d="M260 250 L490 340 L680 230 L800 450 L1040 280 L1320 350" fill="none"/>
      <path d="M250 590 L500 510 L680 680 L800 450 L1080 610 L1340 525" fill="none"/>
      <path d="M490 340 L500 510 M680 230 L680 680 M1040 280 L1080 610 M1320 350 L1340 525" fill="none"/>
    </g>

    <g fill="#00ffd5">
      <circle class="mq-node" cx="260" cy="250" r="5"/>
      <circle class="mq-node" cx="490" cy="340" r="6"/>
      <circle class="mq-node" cx="680" cy="230" r="5"/>
      <circle class="mq-node" cx="1040" cy="280" r="6"/>
      <circle class="mq-node" cx="1320" cy="350" r="5"/>
      <circle class="mq-node" cx="250" cy="590" r="5"/>
      <circle class="mq-node" cx="500" cy="510" r="6"/>
      <circle class="mq-node" cx="680" cy="680" r="5"/>
      <circle class="mq-node" cx="1080" cy="610" r="6"/>
      <circle class="mq-node" cx="1340" cy="525" r="5"/>
    </g>

    <g transform="translate(800 450)">
      <circle r="165" fill="#00ffd5" opacity=".05" filter="url(#mq-glow)"/>
      <circle class="mq-ring-a" r="128" fill="none" stroke="#00ffd5" stroke-width="2" stroke-dasharray="14 16" opacity=".34"/>
      <circle class="mq-ring-b" r="98" fill="none" stroke="#9b5cff" stroke-width="2.2" stroke-dasharray="9 13" opacity=".42"/>
      <circle class="mq-core" r="60" fill="url(#mq-core)" opacity=".92"/>
      <circle r="29" fill="#ffffff" opacity=".34" filter="url(#mq-soft)"/>
      <text x="0" y="112" text-anchor="middle" font-family="Consolas, monospace" font-size="12" fill="#9fffee" opacity=".45" letter-spacing="4">Q-CORE</text>
    </g>

    <g opacity=".62">
      <circle class="mq-pulse-a" r="5" fill="#ffffff" style="offset-path:path('M120 190 C360 90 520 320 730 390 S1080 510 1480 190')"/>
      <circle class="mq-pulse-b" r="4.5" fill="#00ffd5" style="offset-path:path('M110 650 C360 500 560 700 770 525 S1160 270 1490 640')"/>
      <circle class="mq-pulse-c" r="4.5" fill="#a783ff" style="offset-path:path('M220 770 C500 720 610 590 810 635 S1190 720 1390 510')"/>
    </g>

    <g class="mq-data" opacity=".15" font-family="Consolas, monospace" font-size="12" fill="#9ffff1">
      <text x="95" y="820">QBIT_STATE::COHERENT</text>
      <text x="1180" y="760">FIELD_LOCK::STABLE</text>
      <text x="1080" y="850">ENTANGLE_SYNC::OK</text>
      <text x="260" y="700">VECTOR_PHASE::ONLINE</text>
    </g>

    <g class="mq-scan" opacity=".11">
      <rect x="0" y="0" width="1600" height="3" fill="#00ffd5" filter="url(#mq-soft)"/>
    </g>

    <path d="M36 128V36h92M1472 36h92v92M36 772v92h92M1472 864h92v-92" fill="none" stroke="#00ffd5" stroke-opacity=".18" stroke-width="1"/>
    <path d="M800 24v44M778 46h44" fill="none" stroke="#9b5cff" stroke-opacity=".18" stroke-width="1"/>
  </svg>`;

  const install = () => {
    document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
      group.querySelectorAll(':scope > .masum-galaxy-layer, :scope > .masum-cyber-layer, :scope > .masum-ai-core-layer, :scope > .masum-black-hole-layer').forEach((oldLayer) => oldLayer.remove());
      if (group.querySelector(':scope > .masum-quantum-layer')) return;
      const layer = document.createElement('div');
      layer.className = 'masum-quantum-layer';
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
