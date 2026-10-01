/* MASUM FUTURE THEMES // Cyber City Mode v1.3
   Animated neon rain, bright megacity skyline, hologram and light traffic. */
(() => {
  if (window.__MASUM_CYBER_CITY_MODE__) return;
  window.__MASUM_CYBER_CITY_MODE__ = true;

  const SVG = `
  <svg class="masum-cyber-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="mc-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0a1736"/>
        <stop offset=".52" stop-color="#123861"/>
        <stop offset="1" stop-color="#050b1b"/>
      </linearGradient>
      <linearGradient id="mc-road" x1="0" y1="0" x2="1" y2="0">
        <stop stop-color="#00efff" stop-opacity=".34"/>
        <stop offset=".5" stop-color="#ff2bd6" stop-opacity=".46"/>
        <stop offset="1" stop-color="#8b5cff" stop-opacity=".34"/>
      </linearGradient>
      <filter id="mc-glow"><feGaussianBlur stdDeviation="11"/></filter>
      <filter id="mc-soft"><feGaussianBlur stdDeviation="2.5"/></filter>
      <filter id="mc-neon"><feGaussianBlur stdDeviation="4"/></filter>
      <pattern id="mc-rain" width="92" height="130" patternUnits="userSpaceOnUse" patternTransform="rotate(10)">
        <line x1="18" y1="0" x2="18" y2="46" stroke="#7df8ff" stroke-width="1.7" opacity=".66"/>
        <line x1="61" y1="54" x2="61" y2="94" stroke="#d07cff" stroke-width="1.35" opacity=".48"/>
      </pattern>
      <pattern id="mc-windows-cyan" width="42" height="34" patternUnits="userSpaceOnUse">
        <rect x="8" y="8" width="6" height="9" rx="1" fill="#22f4ff" opacity=".78"/>
        <rect x="25" y="19" width="6" height="9" rx="1" fill="#9f78ff" opacity=".58"/>
      </pattern>
      <pattern id="mc-windows-pink" width="38" height="32" patternUnits="userSpaceOnUse">
        <rect x="7" y="7" width="6" height="8" rx="1" fill="#ff46dc" opacity=".74"/>
        <rect x="23" y="18" width="6" height="8" rx="1" fill="#22f4ff" opacity=".55"/>
      </pattern>
      <style>
        .mc-rain{animation:mc-rain 2.35s linear infinite}
        .mc-fog-a{animation:mc-fog-a 24s ease-in-out infinite alternate}
        .mc-fog-b{animation:mc-fog-b 31s ease-in-out infinite alternate}
        .mc-holo{animation:mc-holo 6.5s ease-in-out infinite}
        .mc-flyer-a{animation:mc-fly-a 15s linear infinite}
        .mc-flyer-b{animation:mc-fly-b 19s linear infinite 4s}
        .mc-scan{animation:mc-scan 9s linear infinite}
        .mc-window{animation:mc-window 6.5s ease-in-out infinite alternate}
        .mc-neon-pulse{animation:mc-neon-pulse 4.8s ease-in-out infinite alternate}
        @keyframes mc-rain{from{transform:translate3d(0,-150px,0)}to{transform:translate3d(-55px,150px,0)}}
        @keyframes mc-fog-a{from{transform:translateX(-70px)}to{transform:translateX(80px)}}
        @keyframes mc-fog-b{from{transform:translateX(60px)}to{transform:translateX(-100px)}}
        @keyframes mc-holo{0%,100%{opacity:.64}50%{opacity:.95}}
        @keyframes mc-fly-a{0%{transform:translateX(-260px);opacity:0}10%{opacity:.72}90%{opacity:.72}100%{transform:translateX(1760px);opacity:0}}
        @keyframes mc-fly-b{0%{transform:translateX(1700px);opacity:0}12%{opacity:.58}88%{opacity:.58}100%{transform:translateX(-1450px);opacity:0}}
        @keyframes mc-scan{from{transform:translateY(-950px)}to{transform:translateY(950px)}}
        @keyframes mc-window{from{opacity:.90}to{opacity:1}}
        @keyframes mc-neon-pulse{from{opacity:.42}to{opacity:.82}}
      </style>
    </defs>

    <rect width="1600" height="900" fill="url(#mc-bg)"/>

    <ellipse class="mc-fog-a" cx="710" cy="335" rx="720" ry="205" fill="#8b5cff" opacity=".22" filter="url(#mc-glow)"/>
    <ellipse class="mc-fog-b" cx="950" cy="470" rx="650" ry="185" fill="#00efff" opacity=".17" filter="url(#mc-glow)"/>

    <g opacity=".86">
      <circle cx="95" cy="112" r="1.2" fill="#d8fbff"/><circle cx="281" cy="85" r=".9" fill="#fff"/>
      <circle cx="487" cy="133" r="1.1" fill="#b69cff"/><circle cx="772" cy="72" r=".9" fill="#fff"/>
      <circle cx="1040" cy="115" r="1.3" fill="#8efaff"/><circle cx="1306" cy="68" r="1" fill="#fff"/>
      <circle cx="1484" cy="151" r="1.1" fill="#ff89e8"/>
    </g>

    <g id="city" transform="translate(0 235)">
      <rect x="0" y="270" width="155" height="395" fill="#17385c" stroke="#00efff" stroke-opacity=".24" stroke-width="2"/>
      <rect x="0" y="270" width="155" height="395" fill="url(#mc-windows-cyan)"/>

      <rect x="125" y="170" width="188" height="495" fill="#1a3158" stroke="#ff2bd6" stroke-opacity=".25" stroke-width="2"/>
      <rect x="125" y="170" width="188" height="495" fill="url(#mc-windows-pink)"/>

      <polygon points="350,665 350,105 470,45 590,105 590,665" fill="#173b68" stroke="#00efff" stroke-opacity=".36" stroke-width="2.2"/>
      <polygon class="mc-window" points="350,665 350,105 470,45 590,105 590,665" fill="url(#mc-windows-cyan)"/>

      <rect x="620" y="215" width="145" height="450" fill="#183354" stroke="#ff2bd6" stroke-opacity=".22" stroke-width="2"/>
      <rect x="620" y="215" width="145" height="450" fill="url(#mc-windows-pink)"/>

      <polygon points="810,665 810,130 905,74 1000,130 1000,665" fill="#183f6c" stroke="#00efff" stroke-opacity=".34" stroke-width="2.2"/>
      <polygon points="810,665 810,130 905,74 1000,130 1000,665" fill="url(#mc-windows-cyan)"/>

      <rect x="1045" y="240" width="155" height="425" fill="#17385c" stroke="#ff2bd6" stroke-opacity=".24" stroke-width="2"/>
      <rect x="1045" y="240" width="155" height="425" fill="url(#mc-windows-pink)"/>

      <rect x="1235" y="112" width="185" height="553" fill="#184470" stroke="#00efff" stroke-opacity=".36" stroke-width="2.2"/>
      <rect x="1235" y="112" width="185" height="553" fill="url(#mc-windows-cyan)"/>

      <rect x="1450" y="222" width="150" height="443" fill="#173351" stroke="#ff2bd6" stroke-opacity=".24" stroke-width="2"/>
      <rect x="1450" y="222" width="150" height="443" fill="url(#mc-windows-pink)"/>

      <path class="mc-neon-pulse" d="M470 45V-40" stroke="#00efff" stroke-width="3" opacity=".76" filter="url(#mc-neon)"/>
      <circle cx="470" cy="-46" r="6" fill="#78fbff" opacity=".94"/>
      <path class="mc-neon-pulse" d="M1328 112V10" stroke="#ff2bd6" stroke-width="3" opacity=".72" filter="url(#mc-neon)"/>
      <circle cx="1328" cy="3" r="6" fill="#ff8de8" opacity=".92"/>
    </g>

    <g class="mc-holo" transform="translate(1060 275)">
      <rect x="0" y="0" width="285" height="126" rx="10" fill="#0b2941" stroke="#39f5ff" stroke-width="2.2" opacity=".96"/>
      <rect x="8" y="8" width="269" height="110" rx="7" fill="none" stroke="#ff4ddd" stroke-opacity=".45"/>
      <text x="24" y="45" font-family="Consolas, monospace" font-size="24" font-weight="700" fill="#9cffff" letter-spacing="4">MASUM</text>
      <text x="24" y="78" font-family="Consolas, monospace" font-size="17" fill="#ff8ae9" letter-spacing="2">CYBER CITY</text>
      <text x="24" y="104" font-family="Consolas, monospace" font-size="11" fill="#d4e7f2" letter-spacing="2">// SYSTEM ONLINE</text>
    </g>

    <g class="mc-flyer-a" transform="translate(0 260)">
      <line x1="0" y1="0" x2="130" y2="0" stroke="#66fbff" stroke-width="3" opacity=".94" filter="url(#mc-neon)"/>
      <circle cx="132" cy="0" r="5" fill="#e5ffff"/>
    </g>
    <g class="mc-flyer-b" transform="translate(0 420)">
      <line x1="0" y1="0" x2="104" y2="0" stroke="#ff63df" stroke-width="2.8" opacity=".88" filter="url(#mc-neon)"/>
      <circle cx="0" cy="0" r="4" fill="#ffe9fc"/>
    </g>

    <rect x="0" y="790" width="1600" height="110" fill="#02050c"/>
    <path d="M0 824H1600" stroke="url(#mc-road)" stroke-width="24" opacity="1" filter="url(#mc-soft)"/>
    <path d="M0 844H1600" stroke="#4ff7ff" stroke-width="2" opacity=".46"/>
    <path d="M0 862H1600" stroke="#ff52dc" stroke-width="1.5" opacity=".34"/>

    <g class="mc-rain"><rect x="-100" y="-160" width="1800" height="1200" fill="url(#mc-rain)"/></g>

    <g class="mc-scan" opacity=".27">
      <rect x="0" y="0" width="1600" height="5" fill="#54f7ff" filter="url(#mc-soft)"/>
    </g>

    <path d="M34 128V34h94M1472 34h94v94M34 772v94h94M1472 866h94v-94" fill="none" stroke="#47f6ff" stroke-opacity=".50" stroke-width="1.2"/>
    <path d="M800 24v46M777 47h46" fill="none" stroke="#ff57dd" stroke-opacity=".46" stroke-width="1.2"/>
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
