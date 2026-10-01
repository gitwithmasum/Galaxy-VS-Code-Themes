/* MASUM FUTURE THEMES // Black Hole Mode
   Animated event horizon, accretion disk, lens arcs and star drift. */
(() => {
  if (window.__MASUM_BLACK_HOLE_MODE__) return;
  window.__MASUM_BLACK_HOLE_MODE__ = true;

  const SVG = `
  <svg class="masum-black-hole-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <radialGradient id="mbh-bg" cx="52%" cy="44%" r="82%">
        <stop offset="0" stop-color="#17122d"/>
        <stop offset=".40" stop-color="#080713"/>
        <stop offset="1" stop-color="#010207"/>
      </radialGradient>
      <radialGradient id="mbh-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#000000"/>
        <stop offset=".48" stop-color="#020205"/>
        <stop offset=".66" stop-color="#6a5cff" stop-opacity=".18"/>
        <stop offset=".82" stop-color="#b63cff" stop-opacity=".11"/>
        <stop offset="1" stop-color="#ffb454" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="mbh-disk" x1="0" y1="0" x2="1" y2="0">
        <stop stop-color="#6a5cff" stop-opacity="0"/>
        <stop offset=".20" stop-color="#8a6dff" stop-opacity=".35"/>
        <stop offset=".47" stop-color="#ffb454" stop-opacity=".9"/>
        <stop offset=".53" stop-color="#fff1c8" stop-opacity=".95"/>
        <stop offset=".80" stop-color="#c24dff" stop-opacity=".42"/>
        <stop offset="1" stop-color="#6a5cff" stop-opacity="0"/>
      </linearGradient>
      <filter id="mbh-soft"><feGaussianBlur stdDeviation="5"/></filter>
      <filter id="mbh-glowfilter"><feGaussianBlur stdDeviation="14"/></filter>
      <filter id="mbh-tiny"><feGaussianBlur stdDeviation="1.5"/></filter>
      <pattern id="mbh-stars-a" width="190" height="150" patternUnits="userSpaceOnUse">
        <circle cx="26" cy="30" r="1.2" fill="#fff" opacity=".64"/>
        <circle cx="90" cy="70" r=".8" fill="#a99cff" opacity=".58"/>
        <circle cx="150" cy="24" r="1" fill="#ffcf88" opacity=".50"/>
        <circle cx="178" cy="112" r=".7" fill="#d9e9ff" opacity=".44"/>
      </pattern>
      <pattern id="mbh-stars-b" width="250" height="210" patternUnits="userSpaceOnUse">
        <circle cx="44" cy="52" r=".9" fill="#ffffff" opacity=".40"/>
        <circle cx="180" cy="88" r="1.1" fill="#cbbdff" opacity=".45"/>
        <circle cx="226" cy="168" r=".8" fill="#ffb454" opacity=".34"/>
      </pattern>
      <style>
        .mbh-stars-a{animation:mbh-stars-a 38s linear infinite}
        .mbh-stars-b{animation:mbh-stars-b 55s linear infinite}
        .mbh-disk-a{animation:mbh-spin 18s linear infinite;transform-origin:800px 450px}
        .mbh-disk-b{animation:mbh-spin-rev 27s linear infinite;transform-origin:800px 450px}
        .mbh-lens{animation:mbh-lens 5.5s ease-in-out infinite}
        .mbh-pulse{animation:mbh-pulse 4.2s ease-in-out infinite}
        .mbh-comet-a{animation:mbh-comet-a 14s linear infinite}
        .mbh-comet-b{animation:mbh-comet-b 19s linear infinite 4s}
        .mbh-scan{animation:mbh-scan 10s linear infinite}
        @keyframes mbh-stars-a{from{transform:translate3d(0,0,0)}to{transform:translate3d(-190px,150px,0)}}
        @keyframes mbh-stars-b{from{transform:translate3d(0,0,0)}to{transform:translate3d(250px,-210px,0)}}
        @keyframes mbh-spin{to{transform:rotate(360deg)}}
        @keyframes mbh-spin-rev{to{transform:rotate(-360deg)}}
        @keyframes mbh-lens{0%,100%{opacity:.25}50%{opacity:.55}}
        @keyframes mbh-pulse{0%,100%{opacity:.65;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}
        @keyframes mbh-comet-a{0%{transform:translateX(-300px);opacity:0}10%{opacity:.7}90%{opacity:.7}100%{transform:translateX(1820px);opacity:0}}
        @keyframes mbh-comet-b{0%{transform:translateX(1750px);opacity:0}12%{opacity:.45}88%{opacity:.45}100%{transform:translateX(-1500px);opacity:0}}
        @keyframes mbh-scan{from{transform:translateY(-950px)}to{transform:translateY(950px)}}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#mbh-bg)"/>
    <g class="mbh-stars-a"><rect x="-220" y="-180" width="2050" height="1280" fill="url(#mbh-stars-a)"/></g>
    <g class="mbh-stars-b"><rect x="-260" y="-220" width="2120" height="1320" fill="url(#mbh-stars-b)"/></g>

    <ellipse cx="800" cy="450" rx="540" ry="245" fill="#6a5cff" opacity=".035" filter="url(#mbh-glowfilter)"/>
    <ellipse cx="800" cy="450" rx="400" ry="180" fill="#b63cff" opacity=".028" filter="url(#mbh-glowfilter)"/>

    <g class="mbh-disk-a">
      <ellipse cx="800" cy="450" rx="320" ry="102" fill="none" stroke="url(#mbh-disk)" stroke-width="22" opacity=".62" filter="url(#mbh-soft)"/>
      <ellipse cx="800" cy="450" rx="292" ry="88" fill="none" stroke="url(#mbh-disk)" stroke-width="7" opacity=".88"/>
      <ellipse cx="800" cy="450" rx="362" ry="122" fill="none" stroke="#7b64ff" stroke-width="2" stroke-dasharray="15 22" opacity=".24"/>
    </g>

    <g class="mbh-disk-b">
      <ellipse cx="800" cy="450" rx="250" ry="72" fill="none" stroke="#ffb454" stroke-width="2.2" stroke-dasharray="9 13" opacity=".36"/>
      <ellipse cx="800" cy="450" rx="410" ry="144" fill="none" stroke="#a66bff" stroke-width="1.6" stroke-dasharray="11 19" opacity=".20"/>
    </g>

    <g class="mbh-pulse">
      <circle cx="800" cy="450" r="165" fill="url(#mbh-glow)" opacity=".95"/>
      <circle cx="800" cy="450" r="112" fill="#000000"/>
      <circle cx="800" cy="450" r="78" fill="#000000"/>
      <circle cx="800" cy="450" r="120" fill="none" stroke="#1f1738" stroke-width="3" opacity=".8"/>
    </g>

    <g class="mbh-lens" fill="none">
      <path d="M430 450 C525 320 680 292 800 302 C920 292 1075 320 1170 450" stroke="#ffb454" stroke-width="2" opacity=".42"/>
      <path d="M430 450 C525 580 680 608 800 598 C920 608 1075 580 1170 450" stroke="#8b72ff" stroke-width="2" opacity=".34"/>
      <path d="M520 450 C610 362 715 350 800 358 C885 350 990 362 1080 450" stroke="#e08cff" stroke-width="1.4" opacity=".25"/>
    </g>

    <g class="mbh-comet-a" transform="translate(0 210)">
      <line x1="0" y1="0" x2="130" y2="0" stroke="#ffb454" stroke-width="2.2" opacity=".58"/>
      <circle cx="132" cy="0" r="4" fill="#fff0c0"/>
    </g>
    <g class="mbh-comet-b" transform="translate(0 690)">
      <line x1="0" y1="0" x2="105" y2="0" stroke="#8b72ff" stroke-width="2" opacity=".42"/>
      <circle cx="0" cy="0" r="3.5" fill="#d9d2ff"/>
    </g>

    <g class="mbh-scan" opacity=".08">
      <rect x="0" y="0" width="1600" height="3" fill="#ffb454" filter="url(#mbh-tiny)"/>
    </g>

    <path d="M36 128V36h92M1472 36h92v92M36 772v92h92M1472 864h92v-92" fill="none" stroke="#8b72ff" stroke-opacity=".16" stroke-width="1"/>
    <path d="M800 24v42M779 45h42" fill="none" stroke="#ffb454" stroke-opacity=".18" stroke-width="1"/>
  </svg>`;

  const install = () => {
    document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
      group.querySelectorAll(':scope > .masum-galaxy-layer, :scope > .masum-cyber-layer, :scope > .masum-ai-core-layer, :scope > .masum-black-hole-layer').forEach((oldLayer) => oldLayer.remove());
      const layer = document.createElement('div');
      layer.className = 'masum-black-hole-layer';
      layer.innerHTML = SVG;
      group.prepend(layer);
    });
  };

  const boot = () => {
    install();
    const observer = new MutationObserver(() => {
      document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
        if (!group.querySelector(':scope > .masum-black-hole-layer')) install();
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    setInterval(() => {
      document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
        if (!group.querySelector(':scope > .masum-black-hole-layer')) install();
      });
    }, 1800);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
