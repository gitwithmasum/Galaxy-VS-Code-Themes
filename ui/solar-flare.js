/* MASUM FUTURE THEMES // Solar Flare Mode
   Helios Core with animated corona, flare arcs, plasma particles and solar HUD. */
(() => {
  if (window.__MASUM_SOLAR_FLARE_MODE__) return;
  window.__MASUM_SOLAR_FLARE_MODE__ = true;

  const SVG = `
  <svg class="masum-solar-flare-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="sf-bg" cx="54%" cy="46%" r="76%">
        <stop offset="0" stop-color="#2f1208"/>
        <stop offset=".42" stop-color="#120905"/>
        <stop offset="1" stop-color="#050302"/>
      </radialGradient>
      <radialGradient id="sf-sun">
        <stop offset="0" stop-color="#fff8d9"/>
        <stop offset=".25" stop-color="#ffe27a"/>
        <stop offset=".58" stop-color="#ff9b39"/>
        <stop offset="1" stop-color="#ff4c22"/>
      </radialGradient>
      <linearGradient id="sf-flare" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#ffd166"/>
        <stop offset=".55" stop-color="#ff7a2f"/>
        <stop offset="1" stop-color="#ff3d2e"/>
      </linearGradient>
      <filter id="sf-glow"><feGaussianBlur stdDeviation="12"/></filter>
      <filter id="sf-soft"><feGaussianBlur stdDeviation="4"/></filter>
      <style>
        .sf-corona-a{animation:sf-spin 22s linear infinite;transform-origin:870px 430px}
        .sf-corona-b{animation:sf-spin-rev 31s linear infinite;transform-origin:870px 430px}
        .sf-pulse{animation:sf-pulse 4.6s ease-in-out infinite;transform-origin:870px 430px}
        .sf-flare-a{animation:sf-flare-a 7s ease-in-out infinite;transform-origin:870px 430px}
        .sf-flare-b{animation:sf-flare-b 9s ease-in-out infinite 1.7s;transform-origin:870px 430px}
        .sf-particle{animation:sf-drift 10s linear infinite}
        .sf-scan{animation:sf-scan 10s linear infinite}
        @keyframes sf-spin{to{transform:rotate(360deg)}}
        @keyframes sf-spin-rev{to{transform:rotate(-360deg)}}
        @keyframes sf-pulse{0%,100%{opacity:.82;transform:scale(1)}50%{opacity:1;transform:scale(1.05)}}
        @keyframes sf-flare-a{0%,100%{opacity:.18;transform:scale(.98) rotate(0deg)}50%{opacity:.72;transform:scale(1.05) rotate(4deg)}}
        @keyframes sf-flare-b{0%,100%{opacity:.12;transform:scale(1) rotate(0deg)}50%{opacity:.58;transform:scale(1.08) rotate(-5deg)}}
        @keyframes sf-drift{from{transform:translateX(-160px);opacity:0}15%{opacity:.7}85%{opacity:.7}to{transform:translateX(1780px);opacity:0}}
        @keyframes sf-scan{from{transform:translateY(-940px)}to{transform:translateY(940px)}}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#sf-bg)"/>

    <g fill="#fff2c6" opacity=".22">
      <circle cx="120" cy="130" r="1.6"/><circle cx="240" cy="90" r="1.2"/><circle cx="390" cy="180" r="1.4"/>
      <circle cx="520" cy="110" r="1.8"/><circle cx="660" cy="160" r="1.1"/><circle cx="1220" cy="100" r="1.5"/>
      <circle cx="1360" cy="190" r="1.1"/><circle cx="1490" cy="120" r="1.8"/><circle cx="220" cy="720" r="1.4"/>
      <circle cx="1380" cy="700" r="1.6"/><circle cx="1510" cy="610" r="1.2"/>
    </g>

    <g transform="translate(870 430)">
      <circle r="220" fill="#ff8a3d" opacity=".055" filter="url(#sf-glow)"/>
      <circle class="sf-corona-a" r="176" fill="none" stroke="#ffd166" stroke-width="2.2" stroke-dasharray="12 16" opacity=".22"/>
      <circle class="sf-corona-b" r="148" fill="none" stroke="#ff6b35" stroke-width="2" stroke-dasharray="7 12" opacity=".30"/>
      <circle class="sf-pulse" r="112" fill="url(#sf-sun)" opacity=".95"/>
      <circle r="86" fill="#fff1b8" opacity=".18" filter="url(#sf-soft)"/>
    </g>

    <g fill="none" stroke="url(#sf-flare)" stroke-linecap="round">
      <path class="sf-flare-a" d="M750 340 C620 210 430 250 360 380 C470 320 610 340 748 405" stroke-width="7" opacity=".55"/>
      <path class="sf-flare-b" d="M980 500 C1160 620 1335 570 1420 440 C1280 500 1135 520 990 458" stroke-width="6" opacity=".46"/>
      <path class="sf-flare-a" d="M860 305 C900 165 1050 135 1155 220 C1045 220 955 255 905 340" stroke-width="4.2" opacity=".38"/>
    </g>

    <g opacity=".42" fill="#ffd166">
      <circle class="sf-particle" cx="70" cy="290" r="3"/><circle class="sf-particle" cx="-100" cy="360" r="2.5"/>
      <circle class="sf-particle" cx="-240" cy="520" r="3.2"/><circle class="sf-particle" cx="-360" cy="640" r="2.2"/>
    </g>

    <g opacity=".20" stroke="#ffb347" stroke-width="1">
      <path d="M76 110H270M76 110V215M1330 110H1524M1524 110V215"/>
      <path d="M76 790H270M76 685V790M1330 790H1524M1524 685V790"/>
      <circle cx="870" cy="430" r="248" fill="none" stroke-dasharray="2 18"/>
    </g>

    <g class="sf-scan" opacity=".09"><rect x="0" y="0" width="1600" height="3" fill="#ffd166" filter="url(#sf-soft)"/></g>

    <g font-family="Consolas, monospace" fill="#ffc56f" opacity=".16">
      <text x="90" y="825" font-size="13">SOLAR_WIND::NOMINAL</text>
      <text x="1220" y="790" font-size="12">CORONA_FIELD::LOCKED</text>
      <text x="1200" y="825" font-size="12">FLARE_INDEX::3.7</text>
    </g>
  </svg>`;

  const install = () => {
    document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
      group.querySelectorAll(':scope > .masum-galaxy-layer, :scope > .masum-cyber-layer, :scope > .masum-ai-core-layer, :scope > .masum-black-hole-layer, :scope > .masum-quantum-grid-layer, :scope > .masum-mars-colony-layer, :scope > .masum-deep-ocean-layer, :scope > .masum-aurora-layer, :scope > .masum-mecha-core-layer, :scope > .masum-orbital-station-layer').forEach((oldLayer) => oldLayer.remove());
      if (group.querySelector(':scope > .masum-solar-flare-layer')) return;
      const layer = document.createElement('div');
      layer.className = 'masum-solar-flare-layer';
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
