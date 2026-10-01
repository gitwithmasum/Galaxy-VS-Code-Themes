/* MASUM FUTURE THEMES // Cyber City Mode v1.1
   Animated neon rain, megacity skyline, hologram and light traffic. */
(() => {
  if (window.__MASUM_CYBER_CITY_MODE__) return;
  window.__MASUM_CYBER_CITY_MODE__ = true;

  const SVG = `
  <svg class="masum-cyber-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="mc-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#05091b"/>
        <stop offset=".55" stop-color="#0a1830"/>
        <stop offset="1" stop-color="#03050d"/>
      </linearGradient>
      <linearGradient id="mc-road" x1="0" y1="0" x2="1" y2="0">
        <stop stop-color="#00efff" stop-opacity=".12"/>
        <stop offset=".5" stop-color="#ff2bd6" stop-opacity=".22"/>
        <stop offset="1" stop-color="#8b5cff" stop-opacity=".13"/>
      </linearGradient>
      <filter id="mc-glow"><feGaussianBlur stdDeviation="12"/></filter>
      <filter id="mc-soft"><feGaussianBlur stdDeviation="3"/></filter>
      <pattern id="mc-rain" width="92" height="130" patternUnits="userSpaceOnUse" patternTransform="rotate(10)">
        <line x1="18" y1="0" x2="18" y2="42" stroke="#66f6ff" stroke-width="1.35" opacity=".36"/>
        <line x1="61" y1="54" x2="61" y2="90" stroke="#c66bff" stroke-width="1.05" opacity=".27"/>
      </pattern>
      <pattern id="mc-windows-cyan" width="42" height="34" patternUnits="userSpaceOnUse">
        <rect x="8" y="8" width="5" height="8" rx="1" fill="#00efff" opacity=".42"/>
        <rect x="25" y="19" width="5" height="8" rx="1" fill="#8b5cff" opacity=".29"/>
      </pattern>
      <pattern id="mc-windows-pink" width="38" height="32" patternUnits="userSpaceOnUse">
        <rect x="7" y="7" width="5" height="7" rx="1" fill="#ff2bd6" opacity=".40"/>
        <rect x="23" y="18" width="5" height="7" rx="1" fill="#00efff" opacity=".28"/>
      </pattern>
      <style>
        .mc-rain{animation:mc-rain 2.4s linear infinite}
        .mc-fog-a{animation:mc-fog-a 24s ease-in-out infinite alternate}
        .mc-fog-b{animation:mc-fog-b 31s ease-in-out infinite alternate}
        .mc-holo{animation:mc-holo 6.5s ease-in-out infinite}
        .mc-flyer-a{animation:mc-fly-a 15s linear infinite}
        .mc-flyer-b{animation:mc-fly-b 19s linear infinite 4s}
        .mc-scan{animation:mc-scan 9s linear infinite}
        .mc-window{animation:mc-window 7s ease-in-out infinite alternate}
        @keyframes mc-rain{from{transform:translate3d(0,-150px,0)}to{transform:translate3d(-55px,150px,0)}}
        @keyframes mc-fog-a{from{transform:translateX(-70px)}to{transform:translateX(80px)}}
        @keyframes mc-fog-b{from{transform:translateX(60px)}to{transform:translateX(-100px)}}
        @keyframes mc-holo{0%,100%{opacity:.26}50%{opacity:.48}}
        @keyframes mc-fly-a{0%{transform:translateX(-260px);opacity:0}10%{opacity:.34}90%{opacity:.34}100%{transform:translateX(1760px);opacity:0}}
        @keyframes mc-fly-b{0%{transform:translateX(1700px);opacity:0}12%{opacity:.26}88%{opacity:.26}100%{transform:translateX(-1450px);opacity:0}}
        @keyframes mc-scan{from{transform:translateY(-950px)}to{transform:translateY(950px)}}
        @keyframes mc-window{from{opacity:.82}to{opacity:1}}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#mc-bg)"/>

    <ellipse class="mc-fog-a" cx="760" cy="360" rx="700" ry="185" fill="#8b5cff" opacity=".09" filter="url(#mc-glow)"/>
    <ellipse class="mc-fog-b" cx="930" cy="470" rx="610" ry="160" fill="#00efff" opacity=".07" filter="url(#mc-glow)"/>

    <g opacity=".52">
      <circle cx="95" cy="112" r="1.1" fill="#d8fbff"/><circle cx="281" cy="85" r=".8" fill="#fff"/>
      <circle cx="487" cy="133" r="1" fill="#9f8cff"/><circle cx="772" cy="72" r=".8" fill="#fff"/>
      <circle cx="1040" cy="115" r="1.2" fill="#7df8ff"/><circle cx="1306" cy="68" r=".9" fill="#fff"/>
      <circle cx="1484" cy="151" r="1" fill="#ff71de"/>
    </g>

    <g id="city" transform="translate(0 275)">
      <rect x="0" y="250" width="155" height="375" fill="#0a1424"/>
      <rect x="0" y="250" width="155" height="375" fill="url(#mc-windows-cyan)"/>
      <rect x="125" y="175" width="188" height="450" fill="#0b1728"/>
      <rect x="125" y="175" width="188" height="450" fill="url(#mc-windows-pink)"/>
      <polygon points="350,625 350,110 470,55 590,110 590,625" fill="#0c1b30"/>
      <polygon class="mc-window" points="350,625 350,110 470,55 590,110 590,625" fill="url(#mc-windows-cyan)"/>
      <rect x="620" y="215" width="145" height="410" fill="#091526"/>
      <rect x="620" y="215" width="145" height="410" fill="url(#mc-windows-pink)"/>
      <polygon points="810,625 810,145 905,92 1000,145 1000,625" fill="#0a1930"/>
      <polygon points="810,625 810,145 905,92 1000,145 1000,625" fill="url(#mc-windows-cyan)"/>
      <rect x="1045" y="250" width="155" height="375" fill="#0a1424"/>
      <rect x="1045" y="250" width="155" height="375" fill="url(#mc-windows-pink)"/>
      <rect x="1235" y="130" width="185" height="495" fill="#0a1a31"/>
      <rect x="1235" y="130" width="185" height="495" fill="url(#mc-windows-cyan)"/>
      <rect x="1450" y="235" width="150" height="390" fill="#091421"/>
      <rect x="1450" y="235" width="150" height="390" fill="url(#mc-windows-pink)"/>

      <path d="M470 55V-20" stroke="#00efff" stroke-width="2" opacity=".46"/>
      <circle cx="470" cy="-25" r="5" fill="#00efff" opacity=".62"/>
      <path d="M1328 130V30" stroke="#ff2bd6" stroke-width="2" opacity=".42"/>
      <circle cx="1328" cy="24" r="5" fill="#ff2bd6" opacity=".58"/>
    </g>

    <g class="mc-holo" transform="translate(1070 305)">
      <rect x="0" y="0" width="260" height="116" rx="8" fill="#071522" stroke="#00efff" stroke-width="1.6" opacity=".72"/>
      <text x="22" y="42" font-family="Consolas, monospace" font-size="22" fill="#65f4ff" letter-spacing="4">MASUM</text>
      <text x="22" y="72" font-family="Consolas, monospace" font-size="15" fill="#ff66dd" letter-spacing="2">CYBER CITY</text>
      <text x="22" y="98" font-family="Consolas, monospace" font-size="10" fill="#a7bfd0" letter-spacing="2">// SYSTEM ONLINE</text>
    </g>

    <g class="mc-flyer-a" transform="translate(0 286)">
      <line x1="0" y1="0" x2="118" y2="0" stroke="#00efff" stroke-width="2" opacity=".72"/>
      <circle cx="120" cy="0" r="4" fill="#b7ffff"/>
    </g>
    <g class="mc-flyer-b" transform="translate(0 405)">
      <line x1="0" y1="0" x2="92" y2="0" stroke="#ff2bd6" stroke-width="2" opacity=".58"/>
      <circle cx="0" cy="0" r="3" fill="#ffd0f7"/>
    </g>

    <rect x="0" y="800" width="1600" height="100" fill="#02040a"/>
    <path d="M0 834H1600" stroke="url(#mc-road)" stroke-width="18" opacity=".78" filter="url(#mc-soft)"/>
    <path d="M0 848H1600" stroke="#00efff" stroke-width="1" opacity=".20"/>

    <g class="mc-rain"><rect x="-100" y="-160" width="1800" height="1200" fill="url(#mc-rain)"/></g>

    <g class="mc-scan" opacity=".14">
      <rect x="0" y="0" width="1600" height="4" fill="#00efff" filter="url(#mc-soft)"/>
    </g>

    <path d="M34 128V34h94M1472 34h94v94M34 772v94h94M1472 866h94v-94" fill="none" stroke="#00efff" stroke-opacity=".26" stroke-width="1"/>
    <path d="M800 24v46M777 47h46" fill="none" stroke="#ff2bd6" stroke-opacity=".24" stroke-width="1"/>
  </svg>`;

  const install = () => {
    document.querySelectorAll('.monaco-workbench .part.editor .editor-group-container').forEach((group) => {
      group.querySelectorAll(':scope > .masum-galaxy-layer').forEach((oldLayer) => oldLayer.remove());
      if (group.querySelector(':scope > .masum-cyber-layer')) return;
      const layer = document.createElement('div');
      layer.className = 'masum-cyber-layer';
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
