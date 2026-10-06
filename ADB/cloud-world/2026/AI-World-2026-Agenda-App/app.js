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

  const specialSessionRoutes = {'production-ai-starts-with-the-data-foundation': 'cetin-ozbutun-session.html','ai-can-build-it-but-can-you-trust-it': 'juan-loaiza-session.html'};
  const sessionHref = (sessionId) => href(specialSessionRoutes[sessionId] ?? `sessions/${sessionId}/index.html`);

  const sessionHref2 = (sessionId) => sessionId === 'oracle-global-leaders-ai-world-event' ? href('global-leaders.html') : href(`sessions/${sessionId}/index.html`);
  const day = (dayId) => dayMap[dayId];
  const sessionsFor = (dayId) => data.sessions.filter((session) => session.day === dayId);

  function topbar(active) {
    return `<header class="topbar">
      <a class="brand-lockup" href="${href('index.html')}">
        <span class="brand-mark">AI</span>
        <span class="brand-copy"><strong>Oracle AI World</strong><span>Autonomous AI Database Deep Data Dive Guide</span></span>
      </a>
      <nav class="topbar-links" aria-label="Day navigation">
        <a href="${href('index.html')}" ${active === 'home' ? 'aria-current="page"' : ''}>Overview</a>
        ${data.days.map((item) => `<a href="${dayHref(item.id)}" ${active === item.id ? 'aria-current="page"' : ''}>${item.label}</a>`).join('')}
        <a href="${href('demo-hub.html')}" ${active === 'demo-hub' ? 'aria-current="page"' : ''}>Demo Hub</a>
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
        <p>Plan a focused day of hands-on labs, architecture sessions, customer stories, and AI database demos.</p><p style="font-size: 0.8em !important; color: gold!important;"><trong>Note</strong>: session times and locations can be subject to last minute changes so use the built-in links to check the official online page for each session.</p>
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

  function hubBanner(dayId) {
    const item = day(dayId);
    const hours = data.demoHub.hours[dayId];
    return `<div class="hub-strip"><div><p class="micro-label">${esc(data.demoHub.name)}</p><strong>${esc(data.demoHub.location)}</strong><span>${esc(data.demoHub.booths)}</span></div><div><p class="micro-label">${esc(item.label)} hours</p><strong>${esc(hours)}</strong><span>Demo Hub opening times</span></div><a class="btn btn-light" href="${href('demo-hub.html')}">Explore the Demo Hub</a></div>`;
  }

  function renderAgenda(dayId) {
    const item = day(dayId);
    const daySessions = sessionsFor(dayId);
    document.title = `${item.label} Agenda · Oracle AI World 2026`;
    app.innerHTML = `${topbar(dayId)}${dayHero(item, daySessions)}
      <main class="agenda-wrap">${hubBanner(dayId)}<section class="section">
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
      <section class="hero"><div class="hero-inner"><p class="eyebrow">${esc(data.event.kicker)}</p><h1><span style="font-size: 0.5em; !important">Autonomous AI Database:</span><br>Data Deep Dive, mapped for your week.</h1><p>A visual agenda for the Oracle Autonomous AI Database sessions — with every session detail one click away.</p><div class="hero-actions"><a class="btn btn-primary" href="${dayHref('sunday')}">Start with Sunday →</a><a class="btn btn-secondary" href="#days">Browse all days</a><a class="btn btn-secondary" href="get-ready-for-aiw.html">Preview the venue</a></div><br><a class="btn btn-secondary" href="https://objectstorage.uk-london-1.oraclecloud.com/p/e9BiGj_0hmSJy03G0KuBjhX1QrEFhhMk3gUKpfEbXImUx98nDdRgkGxevWX305Gn/n/adwc4pm/b/AIW-2026/o/Autonomous-AI-Database-Deep-Dive-AI-World-2026.pdf">Download this guide</a></div>${statStrip([{ value: total, label: 'sessions mapped' }, { value: data.days.length, label: 'agenda days' }, { value: '1 click', label: 'to AI World details' }])}</div></section>
      <main><section class="section"><div class="home-intro"><div><p class="micro-label">One guide, four focused days</p><div class="section-head" style="margin-bottom:12px"><h2>Build the right AI foundation.</h2></div><p>Use this companion to scan the schedule, compare formats, and jump directly to the official Oracle AI World catalog entry for each session. The interface follows the supplied PowerPoint’s dark teal, sky blue, Oracle red, warm gold, and Arial typography.</p></div><aside class="callout"><h3>Go beyond the prompt.</h3><p>From trusted data foundations and vector search to multicloud operations and production-ready agents, the program is organized around the decisions that make enterprise AI real.</p></aside></div></section><section class="section tight" id="days"><div class="section-head"><div><p class="micro-label">The week at a glance</p><h2>Choose a day</h2></div><p>Jump into a day to filter by session type or search the entire lineup.</p></div>${dayCards()}</section><section class="section tight hub-section" id="demo-hub"><div class="section-head"><div><p class="micro-label">Explore, try, talk</p><h2>AI World Demo Hub</h2></div><p>The place to meet Oracle development and product management experts, explore demos, and talk through the capabilities behind meaningful business outcomes.</p></div><div class="hub-layout"><div class="hub-card hub-location"><p class="micro-label">Location</p><strong>${esc(data.demoHub.location)}</strong><span>${esc(data.demoHub.booths)}</span></div><div class="hub-card"><p class="micro-label">Opening times</p><div class="hub-hours">${data.days.map((item) => `<div><strong>${esc(item.label)}</strong><span>${esc(data.demoHub.hours[item.id])}</span></div>`).join('')}</div></div></div><a class="btn btn-ghost hub-link" href="${href('demo-hub.html')}">Explore the four demo booths →</a></section></main>${footer()}`;
  }

  function renderDemoHub() {
    document.title = 'AI World Demo Hub · Oracle AI World 2026';
    app.innerHTML = `${topbar('demo-hub')}
      <section class="hero compact"><div class="hero-inner"><div class="crumbs"><a href="${href('index.html')}">Overview</a><span>/</span><span>Demo Hub</span></div><p class="eyebrow">${esc(data.event.kicker)}</p><h1>AI World Demo Hub</h1><p>Explore the latest Autonomous AI Database capabilities, meet Oracle experts, and see how trusted data becomes meaningful business outcomes.</p></div></section>
      <main><section class="section hub-section"><div class="section-head"><div><p class="micro-label">Plan your visit</p><h2>Location and opening times</h2></div><p>The Demo Hub is where everyone comes together to see, try, and talk through the technologies powering enterprise AI.</p></div><div class="hub-layout"><div class="hub-card hub-location"><p class="micro-label">Location</p><strong>${esc(data.demoHub.location)}</strong><span>${esc(data.demoHub.booths)}</span></div><div class="hub-card"><p class="micro-label">Opening times</p><div class="hub-hours">${data.days.map((item) => `<div><strong>${esc(item.label)}</strong><span>${esc(data.demoHub.hours[item.id])}</span></div>`).join('')}</div></div></div></section><section class="section tight"><div class="section-head"><div><p class="micro-label">Four ways to explore</p><h2>Demo booths</h2></div><p>Use the booth code numbers to find each experience in the AI World Hub.</p></div><div class="booth-grid">${data.demoHub.demoBooths.map((booth) => `<article class="booth-card"><div class="booth-code">${esc(booth.code)}</div><div><h3>${esc(booth.title)}</h3><p>${esc(booth.description)}</p></div></article>`).join('')}</div></section></main>${footer()}`;
  }

  function renderGlobalLeaders() {
    const event = data.globalLeaders;
    document.title = `${event.title} · Oracle AI World 2026`;
    app.innerHTML = `${topbar('global-leaders')}
      <section class="hero compact hero-session"><div class="hero-inner"><div class="crumbs"><a href="${href('index.html')}">Overview</a><span>/</span><a href="${dayHref('wednesday')}">Wednesday agenda</a><span>/</span><span>Global Leaders event</span></div><span class="badge">Wednesday afternoon event</span><h1>${esc(event.title)}</h1><p>${esc(event.overview)}</p><div class="hero-meta"><span><b>◷</b>${esc(event.time)}</span><span><b>⌖</b>${esc(event.location)}</span></div><div class="hero-actions"></div></div></section>
      <main class="section"><div class="detail-layout"><div class="detail-main"><article class="detail-card"><p class="micro-label">Event overview</p><h2>Close out the week with the people shaping the data foundation.</h2><p>${esc(event.overview)}</p></article><article class="detail-card"><p class="micro-label">Wednesday, October 28</p><h2>Agenda</h2><div class="event-agenda">${event.agenda.map((item) => `<div class="event-agenda-item"><div class="event-time">${esc(item.time)}</div><div><h3>${esc(item.title)}</h3>${item.detail ? `<p>${esc(item.detail)}</p>` : ''}</div></div>`).join('')}</div></article><article class="detail-card event-speakers-card"><p class="micro-label">Meet the speakers</p><h2>Speakers</h2><div class="event-speakers">${event.speakers.map((speaker) => `<div class="event-speaker"><img src="${esc(speaker.image)}" alt="${esc(speaker.name)}"><div><strong>${esc(speaker.name)}</strong><span>${esc(speaker.role)}</span></div></div>`).join('')}</div></article></div><aside class="detail-side"><div class="detail-card"><h3>Where and when</h3><dl class="meta-grid">${metaBlock('Date', event.date)}${metaBlock('Time', event.time)}${metaBlock('Location', event.location)}${metaBlock('Address', event.address)}</dl></div><div class="detail-card"><h3>Attend for</h3><ul>${event.attendFor.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></div><div class="detail-card"><h3>Official event pages</h3><div class="external-links"><a class="source-link" href="${esc(event.overviewUrl)}" target="_blank" rel="noopener">Overview <span>↗</span></a><a class="source-link" href="${esc(event.agendaUrl)}" target="_blank" rel="noopener">Agenda <span>↗</span></a><a class="source-link" href="${esc(event.speakersUrl)}" target="_blank" rel="noopener">Speakers <span>↗</span></a></div></div></aside></div></main>${footer()}`;
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
      <section class="hero compact hero-session"><div class="hero-inner"><div class="crumbs"><a href="${href('index.html')}">Overview</a><span>/</span><a href="${dayHref(session.day)}">${esc(dayItem.label)} agenda</a><span>/</span><span>Session detail</span></div><span class="badge">${esc(session.kind)}</span><h1>${esc(session.title)}</h1><div class="hero-meta"><span><b>◷</b>${esc(session.time)}</span><span><b>⌖</b>${esc(session.location)}</span></div><p style="font-size: 0.8em !important; color: gold !important;">Note: session times and locations can be subject to last minute changes so use the built-in links to check the official online page for each session.</p></div></section>
      <main class="section"><div class="detail-layout"><div class="detail-main"><article class="detail-card"><p class="micro-label">Session highlights</p><h2>What this session is about</h2><p>${esc(session.description)}</p></article>${session.learn.length ? `<article class="detail-card"><h3>What you will learn</h3><ul>${session.learn.map((item) => `<li>${esc(item)}</li>`).join('')}</ul></article>` : ''}${session.note ? `<article class="detail-card note-box"><h3>Good to know</h3><p>${esc(session.note)}</p></article>` : ''}</div><aside class="detail-side"><div class="detail-card"><h3>Speakers</h3><div class="speaker-list">${session.speakers.map((speaker) => `<div class="speaker"><div class="speaker-avatar">${esc(initials(speaker.name))}</div><div><strong>${esc(speaker.name)}</strong><span>${esc(speaker.role)}</span></div></div>`).join('')}</div></div><div class="detail-card"><h3>Session profile</h3><dl class="meta-grid">${metaBlock('Area of interest', session.area)}${metaBlock('Audience level', session.audience)}${metaBlock('Job role', session.job)}</dl></div><div class="detail-card"><h3>Continue to Oracle AI World</h3><a class="source-link" href="${esc(session.aiWorldUrl)}" target="_blank" rel="noopener">Open official session page <span>↗</span></a></div></aside></div></main>${footer()}`;
  }

  const view = app.dataset.view;
  if (view === 'home') renderHome();
  if (view === 'agenda') renderAgenda(app.dataset.day);
  if (view === 'session') renderSession(app.dataset.session);
  if (view === 'demo-hub') renderDemoHub();
  if (view === 'global-leaders') renderGlobalLeaders();
})();
