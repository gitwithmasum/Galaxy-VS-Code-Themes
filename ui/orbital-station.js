/* MASUM FUTURE THEMES // Orbital Station Mode
   Nexus One orbital station, Earth view, satellites, docking traffic and HUD motion. */
(() => {
  if (window.__MASUM_ORBITAL_STATION_MODE__) return;
  window.__MASUM_ORBITAL_STATION_MODE__ = true;

  const SVG = `
  <svg class="masum-orbital-station-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="mos-bg" cx="62%" cy="42%" r="78%">
        <stop offset="0" stop-color="#102b48"/>
        <stop offset=".38" stop-color="#071625"/>
        <stop offset="1" stop-color="#02060d"/>
      </radialGradient>
      <radialGradient id="mos-earth" cx="38%" cy="34%" r="66%">
        <stop offset="0" stop-color="#6df5ff"/>
        <stop offset=".28" stop-color="#2aa8da"/>
        <stop offset=".62" stop-color="#0d5c9f"/>
        <stop offset="1" stop-color="#062d58"/>
      </radialGradient>
      <linearGradient id="mos-ring" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#4ef4ff"/>
        <stop offset=".52" stop-color="#7e8cff"/>
        <stop offset="1" stop-color="#ffffff"/>
      </linearGradient>
      <filter id="mos-glow"><feGaussianBlur stdDeviation="7"/></filter>
      <filter id="mos-soft"><feGaussianBlur stdDeviation="2.5"/></filter>
      <style>
        .mos-ring-a{animation:mos-spin 32s linear infinite;transform-origin:1040px 420px}
        .mos-ring-b{animation:mos-spin-rev 48s linear infinite;transform-origin:1040px 420px}
        .mos-ship-a{animation:mos-ship-a 13s linear infinite}
        .mos-ship-b{animation:mos-ship-b 16s linear infinite 2s}
        .mos-sat{animation:mos-sat 22s ease-in-out infinite alternate}
        .mos-beacon{animation:mos-beacon 2.2s ease-in-out infinite alternate}
        .mos-scan{animation:mos-scan 9s linear infinite}
        .mos-stars{animation:mos-drift 42s linear infinite alternate}
        @keyframes mos-spin{to{transform:rotate(360deg)}}
        @keyframes mos-spin-rev{to{transform:rotate(-360deg)}}
        @keyframes mos-ship-a{from{transform:translate(-260px,110px)}to{transform:translate(1820px,-180px)}}
        @keyframes mos-ship-b{from{transform:translate(1760px,300px)}to{transform:translate(-320px,-30px)}}
        @keyframes mos-sat{from{transform:translate(-18px,-8px)}to{transform:translate(22px,12px)}}
        @keyframes mos-beacon{from{opacity:.28}to{opacity:1}}
        @keyframes mos-scan{from{transform:translateY(-900px)}to{transform:translateY(900px)}}
        @keyframes mos-drift{from{transform:translateX(-12px)}to{transform:translateX(18px)}}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#mos-bg)"/>

    <g class="mos-stars" fill="#dffaff">
      <circle cx="110" cy="110" r="1.2" opacity=".7"/><circle cx="210" cy="180" r="1" opacity=".5"/>
      <circle cx="320" cy="88" r="1.4" opacity=".75"/><circle cx="410" cy="250" r="1" opacity=".45"/>
      <circle cx="520" cy="140" r="1.3" opacity=".68"/><circle cx="640" cy="70" r="1.1" opacity=".55"/>
      <circle cx="760" cy="180" r="1" opacity=".5"/><circle cx="890" cy="92" r="1.5" opacity=".75"/>
      <circle cx="1010" cy="150" r="1.1" opacity=".5"/><circle cx="1150" cy="78" r="1.2" opacity=".64"/>
      <circle cx="1280" cy="190" r="1" opacity=".55"/><circle cx="1450" cy="100" r="1.4" opacity=".76"/>
      <circle cx="1520" cy="320" r="1" opacity=".46"/><circle cx="1360" cy="360" r="1.2" opacity=".55"/>
      <circle cx="260" cy="410" r="1" opacity=".5"/><circle cx="90" cy="520" r="1.4" opacity=".72"/>
      <circle cx="450" cy="560" r="1.1" opacity=".48"/><circle cx="720" cy="680" r="1.2" opacity=".62"/>
      <circle cx="930" cy="720" r="1" opacity=".5"/><circle cx="1230" cy="670" r="1.3" opacity=".7"/>
    </g>

    <g transform="translate(160 470)">
      <circle cx="0" cy="0" r="250" fill="#34d8ff" opacity=".09" filter="url(#mos-glow)"/>
      <circle cx="0" cy="0" r="220" fill="url(#mos-earth)"/>
      <path d="M-180 -60C-115-105-60-90-25-48S35 2 78-20 155-45 185-10" fill="none" stroke="#9fe8ff" stroke-width="23" stroke-linecap="round" opacity=".18"/>
      <path d="M-150 55C-80 24-20 40 30 82S115 132 165 110" fill="none" stroke="#86f4c4" stroke-width="17" stroke-linecap="round" opacity=".16"/>
      <path d="M-190 -110C-100-135 50-130 176-70" fill="none" stroke="#ffffff" stroke-width="5" opacity=".10"/>
      <ellipse cx="0" cy="0" rx="236" ry="82" fill="none" stroke="#7eeaff" stroke-width="2" opacity=".10" transform="rotate(-18)"/>
    </g>

    <g transform="translate(1040 420)">
      <ellipse rx="255" ry="105" fill="#4ef4ff" opacity=".035" filter="url(#mos-glow)"/>
      <g class="mos-ring-a">
        <ellipse rx="220" ry="90" fill="none" stroke="url(#mos-ring)" stroke-width="6" opacity=".62" stroke-dasharray="36 14"/>
        <circle cx="220" cy="0" r="8" fill="#4ef4ff" class="mos-beacon"/>
        <circle cx="-220" cy="0" r="7" fill="#7e8cff" class="mos-beacon"/>
      </g>
      <g class="mos-ring-b">
        <ellipse rx="165" ry="68" fill="none" stroke="#9ec9ff" stroke-width="3" opacity=".42" stroke-dasharray="18 12"/>
      </g>
      <rect x="-150" y="-48" width="300" height="96" rx="28" fill="#0a1f31" stroke="#4ef4ff" stroke-opacity=".42" stroke-width="2"/>
      <rect x="-92" y="-26" width="184" height="52" rx="18" fill="#0d2940" stroke="#7e8cff" stroke-opacity=".44"/>
      <circle cx="0" cy="0" r="26" fill="#4ef4ff" opacity=".24" filter="url(#mos-glow)"/>
      <circle cx="0" cy="0" r="12" fill="#dffcff"/>
      <path d="M-150 0H-270M150 0H270" stroke="#9dcfff" stroke-width="8"/>
      <rect x="-340" y="-18" width="70" height="36" rx="6" fill="#123048" stroke="#4ef4ff" stroke-opacity=".38"/>
      <rect x="270" y="-18" width="70" height="36" rx="6" fill="#123048" stroke="#4ef4ff" stroke-opacity=".38"/>
      <path d="M-305 -18V-68M305 -18V-68" stroke="#8abfff" stroke-width="4"/>
      <circle cx="-305" cy="-78" r="7" fill="#ffcc6d" class="mos-beacon"/>
      <circle cx="305" cy="-78" r="7" fill="#4ef4ff" class="mos-beacon"/>
      <text x="0" y="6" text-anchor="middle" font-family="Consolas, monospace" font-size="16" fill="#dffcff" opacity=".8">NEXUS ONE</text>
    </g>

    <g class="mos-sat" transform="translate(1280 210)">
      <rect x="-28" y="-14" width="56" height="28" rx="6" fill="#10283b" stroke="#7ecfff" stroke-opacity=".45"/>
      <rect x="-92" y="-24" width="55" height="48" fill="#173b59" stroke="#4ef4ff" stroke-opacity=".35"/>
      <rect x="37" y="-24" width="55" height="48" fill="#173b59" stroke="#4ef4ff" stroke-opacity=".35"/>
      <path d="M0 14V60" stroke="#9ddfff" stroke-width="3"/>
      <circle cx="0" cy="67" r="5" fill="#ffcc6d" class="mos-beacon"/>
    </g>

    <g class="mos-ship-a" opacity=".75">
      <path d="M0 0L46 7 0 15 12 7Z" fill="#dffcff"/>
      <path d="M-60 7H0" stroke="#4ef4ff" stroke-width="2" opacity=".55" filter="url(#mos-soft)"/>
    </g>
    <g class="mos-ship-b" opacity=".58">
      <path d="M0 0L38 6 0 12 10 6Z" fill="#aeb8ff"/>
      <path d="M38 6H92" stroke="#7e8cff" stroke-width="2" opacity=".5" filter="url(#mos-soft)"/>
    </g>

    <g opacity=".22" stroke="#4ef4ff" fill="none">
      <path d="M760 720C930 620 1160 620 1450 710" stroke-width="2" stroke-dasharray="10 14"/>
      <path d="M740 760C980 690 1260 690 1510 780" stroke-width="1.4" stroke-dasharray="4 12"/>
    </g>

    <g class="mos-scan" opacity=".10">
      <rect x="0" y="0" width="1600" height="3" fill="#4ef4ff" filter="url(#mos-soft)"/>
    </g>

    <path d="M36 128V36h92M1472 36h92v92M36 772v92h92M1472 864h92v-92" fill="none" stroke="#4ef4ff" stroke-opacity=".18" stroke-width="1"/>
    <text x="85" y="820" font-family="Consolas, monospace" font-size="12" fill="#8edfff" opacity=".16">ORBIT: STABLE // DOCK: GREEN // TRAFFIC: NOMINAL</text>
  </svg>`;

  const install = () => {
    document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
      group.querySelectorAll(':scope > .masum-galaxy-layer, :scope > .masum-cyber-layer, :scope > .masum-ai-core-layer, :scope > .masum-black-hole-layer, :scope > .masum-quantum-grid-layer, :scope > .masum-mars-colony-layer, :scope > .masum-deep-ocean-layer, :scope > .masum-aurora-layer, :scope > .masum-mecha-core-layer').forEach((oldLayer) => oldLayer.remove());
      if (group.querySelector(':scope > .masum-orbital-station-layer')) return;
      const layer = document.createElement('div');
      layer.className = 'masum-orbital-station-layer';
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
