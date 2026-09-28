(function () {
  const data = window.AI_WORLD_DATA;
  const app = document.getElementById('app');
  if (!data || !app) return;

  const root = app.dataset.root || '';
  const sessionMap = Object.fromEntries(data.sessions.map((session) => [session.id, session]));
  const dayMap = Object.fromEntries(data.days.map((day) => [day.id, day]));
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const initials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
  const href = (path) => `${root}${path}`;
  const dayHref = (dayId) => href(`${dayId}.html`);
  const sessionHref = (sessionId) => href(`sessions/${sessionId}/index.html`);
  const day = (dayId) => dayMap[dayId];
  const sessionsFor = (dayId) => data.sessions.filter((session) => session.day === dayId);

  function topbar(active) {
    return `<header class="topbar">
      <a class="brand-lockup" href="${href('index.html')}">
        <span class="brand-mark">AI</span>
        <span class="brand-copy"><strong>Oracle AI World</strong><span>Data Deep Dive guide</span></span>
      </a>
      <nav class="topbar-links" aria-label="Day navigation">
        <a href="${href('index.html')}" ${active === 'home' ? 'aria-current="page"' : ''}>Overview</a>
        ${data.days.map((item) => `<a href="${dayHref(item.id)}" ${active === item.id ? 'aria-current="page"' : ''}>${item.label}</a>`).join('')}
      </nav>
    </header>`;
  }

  function footer() {
    return `<footer class="footer"><strong>Autonomous AI Database Data Deep Dive</strong><span>AI World 2026 · Curated from the supplied session guide</span><a href="${href('index.html')}">Back to overview ↑</a></footer>`;
  }

  function statStrip(items) {
    return `<div class="stat-strip">${items.map((item) => `<div class="stat"><strong>${esc(item.value)}</strong><span>${esc(item.label)}</span></div>`).join('')}</div>`;
  }

  function dayHero(item, daySessions) {
    const first = daySessions[0]?.time?.split('–')[0]?.trim() || '—';
    const last = daySessions[daySessions.length - 1]?.time?.split('–').pop()?.trim() || '—';
    return `<section class="hero compact">
      <div class="hero-inner">
        <div class="crumbs"><a href="${href('index.html')}">Overview</a><span>/</span><span>${esc(item.label)}</span></div>
        <p class="eyebrow">${esc(item.date)} · AI World 2026</p>
        <h1>${esc(item.label)} agenda</h1>
        <p>Plan a focused day of hands-on labs, architecture sessions, customer stories, and AI database demos.</p>
        ${statStrip([
          { value: daySessions.length, label: 'sessions' },
          { value: first, label: 'first start' },
          { value: last, label: 'last finish' }
        ])}
      </div>
    </section>`;
  }

  function agendaRows(daySessions) {
    return `<div class="schedule" id="schedule">
      ${daySessions.map((session) => `<a class="session-row" data-kind="${esc(session.kind.toLowerCase())}" data-search="${esc(`${session.title} ${session.kind} ${session.location} ${session.area}`.toLowerCase())}" href="${sessionHref(session.id)}">
        <div class="session-time">${esc(session.time)}</div>
        <div>
          <div class="session-title">${esc(session.title)}</div>
          <div class="session-meta"><span class="type">${esc(session.kind)}</span><span class="where">${esc(session.location)}</span></div>
        </div>
        <span class="session-arrow" aria-hidden="true">→</span>
      </a>`).join('')}
      <div class="empty-state" id="empty-state">No sessions match that search or filter.</div>
    </div>`;
  }

  function renderAgenda(dayId) {
    const item = day(dayId);
    const daySessions = sessionsFor(dayId);
    document.title = `${item.label} Agenda · Oracle AI World 2026`;
    app.innerHTML = `${topbar(dayId)}${dayHero(item, daySessions)}
      <main class="agenda-wrap"><section class="section">
        <div class="section-head"><div><p class="micro-label">Session lineup</p><h2>Choose your next deep dive</h2></div><p>Each card opens a full session view with the session details and the linked Oracle AI World catalog entry.</p></div>
        <div class="agenda-tools">
          <label class="search-box"><span class="search-icon">⌕</span><input id="session-search" type="search" placeholder="Search titles, topics, or locations" aria-label="Search sessions"></label>
          <div class="filter-row" aria-label="Filter by session type"><button class="filter active" data-filter="all">All</button>${[...new Set(daySessions.map((s) => s.kind))].map((kind) => `<button class="filter" data-filter="${esc(kind.toLowerCase())}">${esc(kind)}</button>`).join('')}</div>
        </div>
        ${agendaRows(daySessions)}
      </section></main>${footer()}`;

    const rows = [...document.querySelectorAll('.session-row')];
    const empty = document.getElementById('empty-state');
    const search = document.getElementById('session-search');
    let filter = 'all';
    function applyFilters() {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      rows.forEach((row) => {
        const matchesFilter = filter === 'all' || row.dataset.kind === filter;
        const matchesSearch = !query || row.dataset.search.includes(query);
        const show = matchesFilter && matchesSearch;
        row.style.display = show ? 'grid' : 'none';
        if (show) visible += 1;
      });
      empty.style.display = visible ? 'none' : 'block';
    }
    search.addEventListener('input', applyFilters);
    document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
      filter = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach((item) => item.classList.toggle('active', item === button));
      applyFilters();
    }));
  }

  function dayCards() {
    return `<div class="day-grid">${data.days.map((item) => {
      const count = sessionsFor(item.id).length;
      return `<a class="day-card ${item.accent}" href="${dayHref(item.id)}"><div><p class="date">${esc(item.date)}</p><h3>${esc(item.label)}</h3></div><div class="card-footer"><span>${count} curated ${count === 1 ? 'session' : 'sessions'}</span><span class="arrow">→</span></div></a>`;
    }).join('')}</div>`;
  }

  function renderHome() {
    document.title = 'Autonomous AI Database Data Deep Dive · AI World 2026';
    const total = data.sessions.length;
    app.innerHTML = `${topbar('home')}
      <section class="hero"><div class="hero-inner"><p class="eyebrow">${esc(data.event.kicker)}</p><h1>Data Deep Dive, mapped for your week.</h1><p>A visual agenda for the Oracle Autonomous AI Database sessions in the supplied AI World 2026 guide — with every session detail one click away.</p><div class="hero-actions"><a class="btn btn-primary" href="${dayHref('sunday')}">Start with Sunday →</a><a class="btn btn-secondary" href="#days">Browse all days</a></div>${statStrip([{ value: total, label: 'sessions mapped' }, { value: data.days.length, label: 'agenda days' }, { value: '1 click', label: 'to AI World details' }])}</div></section>
      <main><section class="section"><div class="home-intro"><div><p class="micro-label">One guide, four focused days</p><div class="section-head" style="margin-bottom:12px"><h2>Build the right AI foundation.</h2></div><p>Use this companion to scan the schedule, compare formats, and jump directly to the official Oracle AI World catalog entry for each session. The interface follows the supplied PowerPoint’s dark teal, sky blue, Oracle red, warm gold, Georgia, and Oracle Sans-inspired visual system.</p></div><aside class="callout"><h3>Go beyond the prompt.</h3><p>From trusted data foundations and vector search to multicloud operations and production-ready agents, the program is organized around the decisions that make enterprise AI real.</p></aside></div></section><section class="section tight" id="days"><div class="section-head"><div><p class="micro-label">The week at a glance</p><h2>Choose a day</h2></div><p>Jump into a day to filter by session type or search the entire lineup.</p></div>${dayCards()}</section></main>${footer()}`;
  }

  function metaBlock(label, value) {
    return `<div class="meta-block"><dt>${esc(label)}</dt><dd>${esc(value || 'Not listed in source')}</dd></div>`;
  }

  function renderSession(sessionId) {
    const session = sessionMap[sessionId];
    if (!session) { app.innerHTML = `${topbar('home')}<main class="section"><h1>Session not found</h1><a class="btn btn-primary" href="${href('index.html')}">Back to overview</a></main>${footer()}`; return; }
    const dayItem = day(session.day);
    document.title = `${session.title} · Oracle AI World 2026`;
    app.innerHTML = `${topbar(session.day)}
      <section class="hero compact hero-session"><div class="hero-inner"><div class="crumbs"><a href="${href('index.html')}">Overview</a><span>/</span><a href="${dayHref(session.day)}">${esc(dayItem.label)} agenda</a><span>/</span><span>Session detail</span></div><span class="badge">${esc(session.kind)}</span><h1>${esc(session.title)}</h1><div class="hero-meta"><span><b>◷</b>${esc(session.time)}</span><span><b>⌖</b>${esc(session.location)}</span></div></div></section>
      <main class="section"><div class="detail-layout"><div class="detail-main"><article class="detail-card"><p class="micro-label">Session highlights</p><h2>What this session is about</h2><p>${esc(session.description)}</p></article>${session.learn.length ? `<article class="detail-card"><h3>What you will learn</h3><ul>${session.learn.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></article>` : ''}${session.note ? `<article class="detail-card note-box"><h3>Good to know</h3><p>${esc(session.note)}</p></article>` : ''}</div><aside class="detail-side"><div class="detail-card"><h3>Speakers</h3><div class="speaker-list">${session.speakers.map((speaker) => `<div class="speaker"><div class="speaker-avatar">${esc(initials(speaker.name))}</div><div><strong>${esc(speaker.name)}</strong><span>${esc(speaker.role)}</span></div></div>`).join('')}</div></div><div class="detail-card"><h3>Session profile</h3><dl class="meta-grid">${metaBlock('Area of interest', session.area)}${metaBlock('Audience level', session.audience)}${metaBlock('Job role', session.job)}</dl></div><div class="detail-card"><h3>Continue to Oracle AI World</h3><a class="source-link" href="${esc(session.aiWorldUrl)}" target="_blank" rel="noopener">Open official session page <span>↗</span></a></div></aside></div></main>${footer()}`;
  }

  const view = app.dataset.view;
  if (view === 'home') renderHome();
  if (view === 'agenda') renderAgenda(app.dataset.day);
  if (view === 'session') renderSession(app.dataset.session);
})();
