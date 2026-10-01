/* MASUM FUTURE THEMES // Aurora Polar Light Mode
   Animated northern lights, polar beams, stars, moon, snow and icy horizon. */
(() => {
  if (window.__MASUM_AURORA_MODE__) return;
  window.__MASUM_AURORA_MODE__ = true;

  const SVG = `
  <svg class="masum-aurora-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="aur-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#02071a"/>
        <stop offset=".48" stop-color="#071833"/>
        <stop offset="1" stop-color="#06121d"/>
      </linearGradient>
      <linearGradient id="aur-ribbon-a" x1="0" y1="0" x2="1" y2="0">
        <stop stop-color="#49ffd2" stop-opacity="0"/>
        <stop offset=".18" stop-color="#49ffd2" stop-opacity=".76"/>
        <stop offset=".48" stop-color="#63f1ff" stop-opacity=".68"/>
        <stop offset=".72" stop-color="#9d6cff" stop-opacity=".62"/>
        <stop offset="1" stop-color="#ff6edb" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="aur-ribbon-b" x1="0" y1="0" x2="1" y2="0">
        <stop stop-color="#6d5cff" stop-opacity="0"/>
        <stop offset=".22" stop-color="#9d6cff" stop-opacity=".60"/>
        <stop offset=".50" stop-color="#55ffc8" stop-opacity=".78"/>
        <stop offset=".80" stop-color="#62ddff" stop-opacity=".54"/>
        <stop offset="1" stop-color="#62ddff" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="aur-beam" x1="0" y1="0" x2="0" y2="1">
        <stop stop-color="#8effd8" stop-opacity=".45"/>
        <stop offset=".48" stop-color="#5ae7ff" stop-opacity=".18"/>
        <stop offset="1" stop-color="#5ae7ff" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="aur-ice" x1="0" y1="0" x2="0" y2="1">
        <stop stop-color="#0b2940"/>
        <stop offset="1" stop-color="#03101b"/>
      </linearGradient>
      <radialGradient id="aur-moon">
        <stop offset="0" stop-color="#ffffff"/>
        <stop offset=".45" stop-color="#dff8ff"/>
        <stop offset="1" stop-color="#85d9ff"/>
      </radialGradient>
      <filter id="aur-glow"><feGaussianBlur stdDeviation="16"/></filter>
      <filter id="aur-soft"><feGaussianBlur stdDeviation="6"/></filter>
      <filter id="aur-wide"><feGaussianBlur stdDeviation="24"/></filter>
      <style>
        .aur-ribbon-a{animation:aur-wave-a 13s ease-in-out infinite alternate;transform-origin:800px 250px}
        .aur-ribbon-b{animation:aur-wave-b 17s ease-in-out infinite alternate;transform-origin:800px 310px}
        .aur-ribbon-c{animation:aur-wave-c 21s ease-in-out infinite alternate;transform-origin:800px 210px}
        .aur-beams{animation:aur-beams 8s ease-in-out infinite alternate}
        .aur-stars{animation:aur-stars 3.8s ease-in-out infinite alternate}
        .aur-snow-a{animation:aur-snow-a 11s linear infinite}
        .aur-snow-b{animation:aur-snow-b 15s linear infinite 2s}
        .aur-shoot{animation:aur-shoot 10s linear infinite 3s}
        .aur-horizon{animation:aur-horizon 6s ease-in-out infinite alternate}
        @keyframes aur-wave-a{from{transform:translateX(-55px) scaleY(.92);opacity:.58}to{transform:translateX(65px) scaleY(1.10);opacity:.90}}
        @keyframes aur-wave-b{from{transform:translateX(70px) scaleY(1.08);opacity:.46}to{transform:translateX(-70px) scaleY(.92);opacity:.82}}
        @keyframes aur-wave-c{from{transform:translateX(-40px) rotate(-1deg);opacity:.35}to{transform:translateX(55px) rotate(1deg);opacity:.70}}
        @keyframes aur-beams{from{opacity:.32}to{opacity:.68}}
        @keyframes aur-stars{from{opacity:.42}to{opacity:.82}}
        @keyframes aur-snow-a{from{transform:translate(0,-120px)}to{transform:translate(-90px,900px)}}
        @keyframes aur-snow-b{from{transform:translate(0,-180px)}to{transform:translate(70px,900px)}}
        @keyframes aur-shoot{0%,72%{transform:translate(-260px,-120px);opacity:0}76%{opacity:.8}90%{opacity:.65}100%{transform:translate(1750px,680px);opacity:0}}
        @keyframes aur-horizon{from{opacity:.28}to{opacity:.55}}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#aur-sky)"/>

    <g class="aur-stars">
      <circle cx="92" cy="96" r="1.2" fill="#fff"/><circle cx="210" cy="138" r=".8" fill="#dffcff"/>
      <circle cx="338" cy="72" r="1.1" fill="#fff"/><circle cx="474" cy="122" r=".9" fill="#bff6ff"/>
      <circle cx="612" cy="74" r="1.3" fill="#fff"/><circle cx="740" cy="136" r=".8" fill="#fff"/>
      <circle cx="930" cy="82" r="1" fill="#cfefff"/><circle cx="1090" cy="132" r="1.2" fill="#fff"/>
      <circle cx="1245" cy="74" r=".9" fill="#fff"/><circle cx="1398" cy="120" r="1.2" fill="#dffcff"/>
      <circle cx="1512" cy="92" r=".8" fill="#fff"/><circle cx="1330" cy="215" r="1" fill="#baffdf"/>
      <circle cx="260" cy="232" r=".9" fill="#fff"/><circle cx="880" cy="210" r=".8" fill="#fff"/>
    </g>

    <g transform="translate(1310 150)">
      <circle r="54" fill="#8be8ff" opacity=".15" filter="url(#aur-wide)"/>
      <circle r="31" fill="url(#aur-moon)" opacity=".93"/>
      <circle cx="-9" cy="-7" r="5" fill="#a7d7e8" opacity=".25"/>
      <circle cx="10" cy="8" r="4" fill="#9fcbdc" opacity=".20"/>
    </g>

    <g class="aur-beams" filter="url(#aur-soft)">
      <path d="M160 50 L330 50 L560 690 L250 690 Z" fill="url(#aur-beam)" opacity=".26"/>
      <path d="M460 20 L625 20 L760 690 L515 690 Z" fill="url(#aur-beam)" opacity=".22"/>
      <path d="M770 25 L930 25 L1040 690 L805 690 Z" fill="url(#aur-beam)" opacity=".27"/>
      <path d="M1060 55 L1215 55 L1295 690 L1090 690 Z" fill="url(#aur-beam)" opacity=".20"/>
      <path d="M1325 80 L1460 80 L1515 690 L1360 690 Z" fill="url(#aur-beam)" opacity=".16"/>
    </g>

    <g class="aur-ribbon-c" filter="url(#aur-wide)">
      <path d="M-80 270 C240 60 420 430 730 185 S1210 60 1680 250" fill="none" stroke="#5effc8" stroke-width="92" opacity=".18"/>
    </g>
    <g class="aur-ribbon-a" filter="url(#aur-soft)">
      <path d="M-120 220 C180 45 410 390 705 165 S1180 80 1710 225" fill="none" stroke="url(#aur-ribbon-a)" stroke-width="58" opacity=".84"/>
      <path d="M-100 265 C190 100 430 420 745 215 S1210 125 1700 280" fill="none" stroke="url(#aur-ribbon-a)" stroke-width="24" opacity=".52"/>
    </g>
    <g class="aur-ribbon-b" filter="url(#aur-soft)">
      <path d="M-160 340 C110 180 380 445 660 280 S1080 140 1690 330" fill="none" stroke="url(#aur-ribbon-b)" stroke-width="48" opacity=".68"/>
      <path d="M-80 385 C250 230 470 470 780 320 S1250 210 1670 390" fill="none" stroke="url(#aur-ribbon-b)" stroke-width="20" opacity=".42"/>
    </g>

    <g class="aur-horizon">
      <ellipse cx="800" cy="665" rx="660" ry="68" fill="#67ffd6" opacity=".08" filter="url(#aur-wide)"/>
      <ellipse cx="840" cy="665" rx="500" ry="42" fill="#7e75ff" opacity=".08" filter="url(#aur-wide)"/>
    </g>

    <path d="M0 690 L150 585 L280 655 L430 510 L585 640 L720 560 L860 650 L1015 515 L1165 640 L1320 545 L1460 625 L1600 540 L1600 900 L0 900 Z" fill="#06131f"/>
    <path d="M0 735 L210 650 L345 710 L520 620 L700 705 L900 625 L1065 705 L1265 620 L1440 700 L1600 640 L1600 900 L0 900 Z" fill="#0a2230" opacity=".88"/>
    <path d="M0 770 C220 735 410 790 620 748 S1020 725 1230 760 S1450 740 1600 755 L1600 900 L0 900 Z" fill="url(#aur-ice)"/>
    <path d="M0 782 C270 758 480 805 770 770 S1260 758 1600 780" fill="none" stroke="#8efce5" stroke-width="2" opacity=".12"/>

    <g class="aur-snow-a" opacity=".34" fill="#e9fdff">
      <circle cx="80" cy="10" r="1.5"/><circle cx="210" cy="90" r="1.2"/><circle cx="340" cy="25" r="1.4"/>
      <circle cx="520" cy="130" r="1.1"/><circle cx="690" cy="50" r="1.5"/><circle cx="850" cy="110" r="1.2"/>
      <circle cx="1030" cy="35" r="1.4"/><circle cx="1180" cy="150" r="1.1"/><circle cx="1360" cy="60" r="1.5"/>
      <circle cx="1510" cy="115" r="1.2"/>
    </g>
    <g class="aur-snow-b" opacity=".24" fill="#bff6ff">
      <circle cx="145" cy="-30" r="1"/><circle cx="420" cy="80" r="1.3"/><circle cx="620" cy="-15" r="1"/>
      <circle cx="970" cy="75" r="1.4"/><circle cx="1210" cy="0" r="1.1"/><circle cx="1450" cy="55" r="1.2"/>
    </g>

    <g class="aur-shoot">
      <line x1="0" y1="0" x2="150" y2="62" stroke="#dffff9" stroke-width="2" opacity=".72"/>
      <circle cx="154" cy="64" r="3.5" fill="#ffffff"/>
    </g>

    <path d="M36 128V36h92M1472 36h92v92M36 772v92h92M1472 864h92v-92" fill="none" stroke="#7cffd9" stroke-opacity=".20" stroke-width="1"/>
    <path d="M800 26v42M779 47h42" fill="none" stroke="#a77cff" stroke-opacity=".18" stroke-width="1"/>
  </svg>`;

  const install = () => {
    document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
      group.querySelectorAll(':scope > .masum-galaxy-layer, :scope > .masum-cyber-layer, :scope > .masum-ai-core-layer, :scope > .masum-black-hole-layer, :scope > .masum-quantum-grid-layer, :scope > .masum-mars-colony-layer, :scope > .masum-deep-ocean-layer').forEach((oldLayer) => oldLayer.remove());
      if (group.querySelector(':scope > .masum-aurora-layer')) return;
      const layer = document.createElement('div');
      layer.className = 'masum-aurora-layer';
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
