/* MASUM FUTURE THEMES // Mars Colony Mode
   Animated red frontier with domes, rover, dust and orbital scan. */
(() => {
  if (window.__MASUM_MARS_COLONY_MODE__) return;
  window.__MASUM_MARS_COLONY_MODE__ = true;

  const SVG = `
  <svg class="masum-mars-colony-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="mm-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#14080b"/>
        <stop offset=".52" stop-color="#3a1410"/>
        <stop offset="1" stop-color="#120607"/>
      </linearGradient>
      <linearGradient id="mm-ground" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#4e1d14"/>
        <stop offset=".55" stop-color="#2c0f0d"/>
        <stop offset="1" stop-color="#150707"/>
      </linearGradient>
      <linearGradient id="mm-dome" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#ff936a" stop-opacity=".32"/>
        <stop offset=".48" stop-color="#7edcff" stop-opacity=".12"/>
        <stop offset="1" stop-color="#170708" stop-opacity=".46"/>
      </linearGradient>
      <filter id="mm-glow"><feGaussianBlur stdDeviation="9"/></filter>
      <filter id="mm-soft"><feGaussianBlur stdDeviation="3"/></filter>
      <style>
        .mm-dust-a{animation:mm-dust-a 22s linear infinite}
        .mm-dust-b{animation:mm-dust-b 31s linear infinite 4s}
        .mm-rover{animation:mm-rover 24s ease-in-out infinite alternate}
        .mm-drone{animation:mm-drone 16s ease-in-out infinite alternate}
        .mm-beacon{animation:mm-beacon 2.8s ease-in-out infinite}
        .mm-scan{animation:mm-scan 10s linear infinite}
        .mm-panel{animation:mm-panel 6s ease-in-out infinite alternate}
        @keyframes mm-dust-a{from{transform:translateX(-300px)}to{transform:translateX(1750px)}}
        @keyframes mm-dust-b{from{transform:translateX(1650px)}to{transform:translateX(-1300px)}}
        @keyframes mm-rover{from{transform:translateX(-80px)}to{transform:translateX(210px)}}
        @keyframes mm-drone{from{transform:translate(0,0)}to{transform:translate(180px,-35px)}}
        @keyframes mm-beacon{0%,100%{opacity:.35}50%{opacity:1}}
        @keyframes mm-scan{from{transform:translateY(-950px)}to{transform:translateY(950px)}}
        @keyframes mm-panel{from{opacity:.42}to{opacity:.78}}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#mm-bg)"/>

    <g opacity=".52">
      <circle cx="118" cy="105" r="1" fill="#ffe8df"/><circle cx="264" cy="74" r=".8" fill="#fff"/>
      <circle cx="480" cy="120" r="1" fill="#ffb596"/><circle cx="715" cy="86" r=".8" fill="#fff"/>
      <circle cx="1030" cy="110" r="1.1" fill="#9edfff"/><circle cx="1320" cy="78" r=".9" fill="#fff"/>
      <circle cx="1490" cy="138" r="1" fill="#ffd1b7"/>
    </g>

    <circle cx="1290" cy="150" r="38" fill="#d9c2a4" opacity=".22"/>
    <circle cx="1375" cy="102" r="13" fill="#c6b49d" opacity=".18"/>

    <path d="M0 565 L140 470 L260 515 L390 425 L520 500 L650 410 L805 500 L955 438 L1110 520 L1260 430 L1440 500 L1600 450 L1600 720 L0 720Z" fill="#26100e" opacity=".85"/>
    <path d="M0 620 L180 540 L330 600 L520 520 L700 590 L880 505 L1070 590 L1240 535 L1410 590 L1600 540 L1600 760 L0 760Z" fill="#3a1712" opacity=".78"/>

    <path d="M0 690 C260 635 510 675 760 640 S1260 620 1600 665 L1600 900 L0 900Z" fill="url(#mm-ground)"/>
    <path d="M0 735 C310 690 550 720 820 690 S1320 675 1600 710" fill="none" stroke="#ff754c" stroke-width="1.3" opacity=".20"/>

    <g transform="translate(300 470)">
      <ellipse cx="0" cy="170" rx="150" ry="28" fill="#000" opacity=".24"/>
      <path d="M-125 165 Q0 30 125 165Z" fill="url(#mm-dome)" stroke="#ff8a5f" stroke-width="2" opacity=".86"/>
      <path d="M-85 165 Q0 72 85 165" fill="none" stroke="#7edcff" stroke-width="1.2" opacity=".42"/>
      <path d="M0 45V165M-58 92L58 92M-100 130L100 130" stroke="#ffbe9f" stroke-width="1" opacity=".22"/>
      <rect x="-36" y="138" width="72" height="30" rx="6" fill="#120708" stroke="#7edcff" opacity=".72"/>
    </g>

    <g transform="translate(735 510)">
      <ellipse cx="0" cy="125" rx="108" ry="20" fill="#000" opacity=".22"/>
      <path d="M-92 122 Q0 35 92 122Z" fill="url(#mm-dome)" stroke="#ff9b62" stroke-width="1.7" opacity=".82"/>
      <path d="M0 45V122M-55 78L55 78" stroke="#9fe7ff" stroke-width="1" opacity=".28"/>
    </g>

    <g transform="translate(1095 350)">
      <rect x="-20" y="85" width="40" height="245" rx="6" fill="#14090a" stroke="#ff8058" stroke-width="1.4" opacity=".88"/>
      <path d="M0 84V12" stroke="#ff9b62" stroke-width="3" opacity=".58"/>
      <circle class="mm-beacon" cx="0" cy="7" r="7" fill="#ff9b62"/>
      <path d="M-72 160H72M-58 205H58M-48 250H48" stroke="#7edcff" stroke-width="1" opacity=".20"/>
    </g>

    <g class="mm-panel" transform="translate(1180 640)">
      <path d="M0 0H145L122 72H-23Z" fill="#0d1722" stroke="#7edcff" stroke-width="1.4" opacity=".84"/>
      <path d="M24 0L7 72M58 0L43 72M92 0L79 72M126 0L115 72M-12 36H134" stroke="#7edcff" stroke-width=".9" opacity=".34"/>
      <path d="M54 72V108M77 72V108" stroke="#ff8a5f" stroke-width="2" opacity=".32"/>
    </g>

    <g class="mm-rover" transform="translate(560 705)">
      <rect x="0" y="0" width="120" height="44" rx="12" fill="#1a0d0e" stroke="#ff8a5f" stroke-width="1.5"/>
      <rect x="22" y="-24" width="48" height="28" rx="5" fill="#12202a" stroke="#7edcff" stroke-width="1.2" opacity=".92"/>
      <path d="M84 0L104-31" stroke="#ffb36e" stroke-width="2"/>
      <circle cx="106" cy="-35" r="4" fill="#ffb36e"/>
      <circle cx="24" cy="49" r="15" fill="#080405" stroke="#7c4a40" stroke-width="5"/>
      <circle cx="96" cy="49" r="15" fill="#080405" stroke="#7c4a40" stroke-width="5"/>
    </g>

    <g class="mm-drone" transform="translate(900 280)">
      <path d="M0 0H88" stroke="#7edcff" stroke-width="2" opacity=".55"/>
      <circle cx="44" cy="0" r="8" fill="#ff8a5f" opacity=".88"/>
      <circle cx="4" cy="0" r="4" fill="#b7efff"/><circle cx="84" cy="0" r="4" fill="#b7efff"/>
      <path d="M44 8V28" stroke="#ffb36e" stroke-width="1.5" opacity=".55"/>
    </g>

    <g class="mm-dust-a" opacity=".13" filter="url(#mm-soft)">
      <ellipse cx="0" cy="690" rx="240" ry="34" fill="#ff754c"/>
    </g>
    <g class="mm-dust-b" opacity=".09" filter="url(#mm-soft)">
      <ellipse cx="0" cy="620" rx="180" ry="26" fill="#ff9b62"/>
    </g>

    <g class="mm-scan" opacity=".09">
      <rect x="0" y="0" width="1600" height="3" fill="#7edcff" filter="url(#mm-soft)"/>
    </g>

    <path d="M34 128V34h94M1472 34h94v94M34 772v94h94M1472 866h94v-94" fill="none" stroke="#ff8a5f" stroke-opacity=".20" stroke-width="1"/>
    <path d="M800 24v46M777 47h46" fill="none" stroke="#7edcff" stroke-opacity=".18" stroke-width="1"/>
  </svg>`;

  const install = () => {
    document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
      group.querySelectorAll(':scope > .masum-galaxy-layer, :scope > .masum-cyber-layer, :scope > .masum-ai-core-layer, :scope > .masum-black-hole-layer, :scope > .masum-quantum-grid-layer').forEach((oldLayer) => oldLayer.remove());
      if (group.querySelector(':scope > .masum-mars-colony-layer')) return;
      const layer = document.createElement('div');
      layer.className = 'masum-mars-colony-layer';
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
