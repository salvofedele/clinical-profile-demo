/*
 * nav.js — Barra di navigazione condivisa per il portale clinico
 * 
 * Aggiungere a ogni pagina HTML prima di </body>:
 * <script src="nav.js"></script>
 * 
 * Questo file inietta automaticamente la barra di navigazione
 * in cima a ogni pagina, evidenziando la pagina corrente.
 */

(function() {
  const pages = [
    { href: 'index.html', label: 'Home', icon: '⌂' },
    { href: 'portale-clinico-integrato.html', label: 'Portale', icon: '◉' },
    { href: 'timeline-clinica-interattiva.html', label: 'Timeline', icon: '◷' },
    { href: 'flashcard-cliniche.html', label: 'Flashcard', icon: '🗂' },
    { href: 'podcast-annotato.html', label: 'Podcast', icon: '🎙' },
    { href: 'video-guida.html', label: 'Video', icon: '🎬' },
  ];

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  const style = document.createElement('style');
  style.textContent = `
    .site-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.2rem;
      padding: 0.5rem 1rem;
      background: rgba(26,26,26,0.95);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      font-family: 'IBM Plex Sans', -apple-system, sans-serif;
      position: sticky;
      top: 0;
      z-index: 9999;
      flex-wrap: wrap;
    }
    .site-nav a {
      font-size: 0.7rem;
      font-weight: 500;
      color: rgba(255,255,255,0.6);
      text-decoration: none;
      padding: 0.35rem 0.7rem;
      border-radius: 14px;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .site-nav a:hover {
      color: #fff;
      background: rgba(255,255,255,0.1);
    }
    .site-nav a.active {
      color: #F5ECD7;
      background: rgba(184,134,11,0.3);
      font-weight: 600;
    }
    .site-nav .nav-icon {
      margin-right: 0.25rem;
      font-size: 0.75rem;
    }
    .site-nav .nav-sep {
      color: rgba(255,255,255,0.15);
      font-size: 0.6rem;
      margin: 0 0.1rem;
      user-select: none;
    }
    @media (max-width: 600px) {
      .site-nav { gap: 0.1rem; padding: 0.4rem 0.5rem; }
      .site-nav a { font-size: 0.62rem; padding: 0.3rem 0.5rem; }
      .site-nav .nav-sep { display: none; }
    }
  `;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.className = 'site-nav';

  pages.forEach((page, i) => {
    if (i > 0) {
      const sep = document.createElement('span');
      sep.className = 'nav-sep';
      sep.textContent = '·';
      nav.appendChild(sep);
    }
    const a = document.createElement('a');
    a.href = page.href;
    a.innerHTML = `<span class="nav-icon">${page.icon}</span>${page.label}`;
    if (currentFile === page.href || (currentFile === '' && page.href === 'index.html')) {
      a.className = 'active';
    }
    nav.appendChild(a);
  });

  document.body.insertBefore(nav, document.body.firstChild);

  // Adjust any existing sticky elements to account for nav height
  const existingSticky = document.querySelector('.tab-nav, .filter-bar, .tl-filter-bar, .player-sticky');
  if (existingSticky) {
    existingSticky.style.top = '36px';
  }
})();
