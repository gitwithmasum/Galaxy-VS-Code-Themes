/* MASUM FUTURE THEMES // Deep Ocean Mode
   Animated abyss core, light shafts, bubbles, jellyfish and deep-sea drone. */
(() => {
  if (window.__MASUM_DEEP_OCEAN_MODE__) return;
  window.__MASUM_DEEP_OCEAN_MODE__ = true;

  const SVG = `
  <svg class="masum-deep-ocean-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="mo-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#06324d"/>
        <stop offset=".42" stop-color="#052239"/>
        <stop offset="1" stop-color="#010710"/>
      </linearGradient>
      <radialGradient id="mo-core">
        <stop offset="0" stop-color="#eaffff"/>
        <stop offset=".22" stop-color="#52f7ff"/>
        <stop offset=".58" stop-color="#16d8d8"/>
        <stop offset="1" stop-color="#007ea8"/>
      </radialGradient>
      <linearGradient id="mo-ray" x1="0" y1="0" x2="0" y2="1">
        <stop stop-color="#85f7ff" stop-opacity=".16"/>
        <stop offset="1" stop-color="#85f7ff" stop-opacity="0"/>
      </linearGradient>
      <filter id="mo-glow"><feGaussianBlur stdDeviation="10"/></filter>
      <filter id="mo-soft"><feGaussianBlur stdDeviation="3"/></filter>
      <pattern id="mo-particles" width="120" height="90" patternUnits="userSpaceOnUse">
        <circle cx="18" cy="22" r="1.2" fill="#8efaff" opacity=".18"/>
        <circle cx="74" cy="48" r=".9" fill="#9affd3" opacity=".16"/>
        <circle cx="108" cy="15" r=".7" fill="#dffcff" opacity=".14"/>
      </pattern>
      <style>
        .mo-ray-a{animation:mo-ray 8s ease-in-out infinite alternate}
        .mo-ray-b{animation:mo-ray-b 11s ease-in-out infinite alternate}
        .mo-core-ring-a{animation:mo-spin 20s linear infinite;transform-origin:800px 510px}
        .mo-core-ring-b{animation:mo-spin-rev 30s linear infinite;transform-origin:800px 510px}
        .mo-core-pulse{animation:mo-core-pulse 4.5s ease-in-out infinite;transform-origin:800px 510px}
        .mo-bubbles-a{animation:mo-bubbles 13s linear infinite}
        .mo-bubbles-b{animation:mo-bubbles 18s linear infinite 4s}
        .mo-jelly-a{animation:mo-jelly-a 15s ease-in-out infinite}
        .mo-jelly-b{animation:mo-jelly-b 19s ease-in-out infinite 3s}
        .mo-drone{animation:mo-drone 22s ease-in-out infinite}
        .mo-scan{animation:mo-scan 10s linear infinite}
        @keyframes mo-ray{from{opacity:.34;transform:translateX(-35px)}to{opacity:.62;transform:translateX(40px)}}
        @keyframes mo-ray-b{from{opacity:.24;transform:translateX(55px)}to{opacity:.48;transform:translateX(-50px)}}
        @keyframes mo-spin{to{transform:rotate(360deg)}}
        @keyframes mo-spin-rev{to{transform:rotate(-360deg)}}
        @keyframes mo-core-pulse{0%,100%{opacity:.78;transform:scale(1)}50%{opacity:1;transform:scale(1.07)}}
        @keyframes mo-bubbles{from{transform:translateY(220px);opacity:0}15%{opacity:.7}85%{opacity:.7}to{transform:translateY(-920px);opacity:0}}
        @keyframes mo-jelly-a{0%,100%{transform:translate(0,0)}50%{transform:translate(70px,-55px)}}
        @keyframes mo-jelly-b{0%,100%{transform:translate(0,0)}50%{transform:translate(-60px,-70px)}}
        @keyframes mo-drone{0%,100%{transform:translateX(-180px)}50%{transform:translateX(1180px)}}
        @keyframes mo-scan{from{transform:translateY(-940px)}to{transform:translateY(940px)}}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#mo-bg)"/>
    <rect width="1600" height="900" fill="url(#mo-particles)"/>

    <g class="mo-ray-a">
      <path d="M250 0 L500 0 L760 900 L520 900 Z" fill="url(#mo-ray)"/>
      <path d="M760 0 L910 0 L1010 900 L865 900 Z" fill="url(#mo-ray)" opacity=".58"/>
    </g>
    <g class="mo-ray-b">
      <path d="M1050 0 L1240 0 L1370 900 L1175 900 Z" fill="url(#mo-ray)" opacity=".48"/>
    </g>

    <path d="M0 720 C210 655 390 760 585 704 S1000 675 1230 724 S1460 670 1600 710 V900 H0Z" fill="#021018"/>
    <path d="M0 774 C230 720 430 820 650 765 S1120 745 1600 790" fill="none" stroke="#0a4858" stroke-width="8" opacity=".28"/>

    <g transform="translate(800 510)">
      <circle r="145" fill="#16d8d8" opacity=".045" filter="url(#mo-glow)"/>
      <circle class="mo-core-ring-a" r="118" fill="none" stroke="#52f7ff" stroke-width="2" stroke-dasharray="13 19" opacity=".34"/>
      <circle class="mo-core-ring-b" r="92" fill="none" stroke="#67ffbe" stroke-width="2" stroke-dasharray="8 14" opacity=".28"/>
      <circle class="mo-core-pulse" r="54" fill="url(#mo-core)"/>
      <circle r="25" fill="#ffffff" opacity=".26" filter="url(#mo-soft)"/>
    </g>

    <g stroke="#52f7ff" stroke-opacity=".23" fill="none">
      <path d="M800 392 L800 286 M682 510 L560 510 M918 510 L1040 510 M720 430 L635 348 M880 430 L965 348"/>
      <circle cx="800" cy="286" r="5" fill="#52f7ff"/>
      <circle cx="560" cy="510" r="5" fill="#67ffbe"/>
      <circle cx="1040" cy="510" r="5" fill="#52f7ff"/>
      <circle cx="635" cy="348" r="4" fill="#9b8cff"/>
      <circle cx="965" cy="348" r="4" fill="#9b8cff"/>
    </g>

    <g class="mo-bubbles-a" fill="none" stroke="#a6fbff" opacity=".5">
      <circle cx="260" cy="820" r="8"/><circle cx="315" cy="865" r="4"/><circle cx="365" cy="790" r="6"/>
      <circle cx="1220" cy="845" r="7"/><circle cx="1280" cy="785" r="4"/><circle cx="1330" cy="870" r="6"/>
    </g>
    <g class="mo-bubbles-b" fill="none" stroke="#67ffbe" opacity=".34">
      <circle cx="480" cy="860" r="5"/><circle cx="520" cy="810" r="3"/><circle cx="1090" cy="840" r="6"/><circle cx="1140" cy="875" r="3"/>
    </g>

    <g class="mo-jelly-a" transform="translate(285 345)" opacity=".42">
      <path d="M0 30 C12 -10 80 -10 92 30 C76 48 16 48 0 30Z" fill="#52f7ff" opacity=".26" stroke="#83fbff"/>
      <path d="M18 42 C10 90 28 110 18 146 M42 42 C34 90 52 112 42 158 M66 42 C58 88 75 110 66 150" fill="none" stroke="#67ffbe" stroke-width="2"/>
    </g>
    <g class="mo-jelly-b" transform="translate(1230 270) scale(.82)" opacity=".35">
      <path d="M0 30 C12 -10 80 -10 92 30 C76 48 16 48 0 30Z" fill="#9b8cff" opacity=".28" stroke="#bcb4ff"/>
      <path d="M18 42 C10 90 28 110 18 146 M42 42 C34 90 52 112 42 158 M66 42 C58 88 75 110 66 150" fill="none" stroke="#52f7ff" stroke-width="2"/>
    </g>

    <g class="mo-drone" transform="translate(0 610)" opacity=".56">
      <path d="M120 0 h80 l32 18 -32 18 h-80 l-28-18z" fill="#0a3443" stroke="#52f7ff" stroke-width="1.5"/>
      <circle cx="205" cy="18" r="6" fill="#67ffbe"/>
      <path d="M92 18 H35" stroke="#52f7ff" stroke-width="2" opacity=".72"/>
      <circle cx="29" cy="18" r="3" fill="#dffcff"/>
    </g>

    <g opacity=".22" fill="#67ffbe">
      <ellipse cx="160" cy="560" rx="22" ry="7"/><ellipse cx="205" cy="585" rx="16" ry="5"/>
      <ellipse cx="1390" cy="560" rx="20" ry="6"/><ellipse cx="1345" cy="590" rx="15" ry="5"/>
    </g>

    <g class="mo-scan" opacity=".10">
      <rect x="0" y="0" width="1600" height="3" fill="#52f7ff" filter="url(#mo-soft)"/>
    </g>

    <path d="M36 128V36h92M1472 36h92v92M36 772v92h92M1472 864h92v-92" fill="none" stroke="#52f7ff" stroke-opacity=".18" stroke-width="1"/>
    <text x="82" y="835" font-family="Consolas, monospace" font-size="11" fill="#67ffbe" opacity=".18">DEPTH::10984M  PRESSURE::STABLE  ABYSS_CORE::ONLINE</text>
  </svg>`;

  const install = () => {
    document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
      group.querySelectorAll(':scope > .masum-galaxy-layer, :scope > .masum-cyber-layer, :scope > .masum-ai-core-layer, :scope > .masum-black-hole-layer, :scope > .masum-quantum-grid-layer, :scope > .masum-mars-colony-layer').forEach((oldLayer) => oldLayer.remove());
      if (group.querySelector(':scope > .masum-deep-ocean-layer')) return;
      const layer = document.createElement('div');
      layer.className = 'masum-deep-ocean-layer';
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
