(function () {
  "use strict";
  var data = window.ADBData;
  var categories = data.categories;
  var items = data.items;
  var base = document.body.getAttribute("data-base") || ".";
  var page = document.body.getAttribute("data-page") || "home";
  var key = document.body.getAttribute("data-key") || "";
  var app = document.getElementById("app");
  var nav = document.getElementById("category-nav");
  var search = document.getElementById("site-search");
  var results = document.getElementById("search-results");
  var currentItem = items.find(function (item) { return item.id === key; });
  var categoryKey = page === "category" ? key : (currentItem ? currentItem.category : "");

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }
  function path(file) { return base + "/" + file; }
  function categoryHref(id) { return path("categories/" + id + ".html"); }
  function featureHref(id) { return path("features/" + id + ".html"); }
  function categoryCount(id) { return items.filter(function (item) { return item.category === id; }).length; }
  function videoCount(id) { return items.filter(function (item) { return item.category === id; }).reduce(function (total, item) { return total + (item.videos || []).length; }, 0); }
  function slidePath(file) { return path("assets/slides/" + file); }
  function videoPath(file) { return path("assets/videos/" + file); }
  function categoryNavMarkup() {
    return '<a class="nav-link nav-home" href="' + path("index.html") + '"' + (page === "home" ? ' aria-current="page"' : "") + '>Overview</a>' +
      Object.keys(categories).map(function (id) {
        return '<a class="nav-link' + (categoryKey === id ? ' is-active' : '') + '" href="' + categoryHref(id) + '"' + (categoryKey === id ? ' aria-current="page"' : '') + '>' + escapeHtml(categories[id].label) + '</a>';
      }).join("");
  }
  nav.innerHTML = categoryNavMarkup();
  document.querySelector(".brand").href = path("index.html");
  document.querySelector(".skip-link").href = "#app";

  function sourceLabels(item) {
    return (item.sources || []).map(function (source) { return '<span class="source-chip">' + escapeHtml(source) + '</span>'; }).join("");
  }
  function cardMarkup(item) {
    var art = item.graphics && item.graphics.length ? '<img class="feature-card-art" src="' + slidePath(item.graphics[0]) + '" alt="" loading="lazy">' : '<div class="feature-card-art art-placeholder" aria-hidden="true"><span>ADB</span></div>';
    var clips = (item.videos || []).length;
    return '<a class="feature-card" href="' + featureHref(item.id) + '">' + art +
      '<div class="feature-card-body"><div class="card-meta"><span>' + escapeHtml(categories[item.category].label) + '</span>' + (clips ? '<span class="demo-pill">▶ ' + clips + (clips === 1 ? ' demo' : ' demos') + '</span>' : '') + '</div>' +
      '<h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.summary) + '</p>' +
      '<div class="card-sources">' + (item.sources || []).slice(0, 2).map(function (source) { return '<span class="source-chip">' + escapeHtml(source) + '</span>'; }).join("") + '</div>' +
      '<span class="card-link">Explore feature <span aria-hidden="true">↗</span></span></div></a>';
  }
  function renderHome() {
    var categoriesMarkup = Object.keys(categories).map(function (id, index) {
      var cat = categories[id];
      var art = cat.graphics && cat.graphics.length ? '<img src="' + slidePath(cat.graphics[0]) + '" alt="" loading="lazy">' : '';
      return '<a class="category-card" href="' + categoryHref(id) + '"><div class="category-art category-art-' + (index + 1) + '">' + art + '<span class="category-number">0' + (index + 1) + '</span></div><div class="category-card-copy"><div class="card-meta"><span>' + categoryCount(id) + ' features</span>' + (videoCount(id) ? '<span class="demo-pill">▶ ' + videoCount(id) + ' clips</span>' : '') + '</div><h2>' + escapeHtml(cat.label) + '</h2><p>' + escapeHtml(cat.description) + '</p><span class="card-link">Browse category <span aria-hidden="true">↗</span></span></div></a>';
    }).join("");
    app.innerHTML = '<section class="home-hero"><div class="hero-copy"><p class="eyebrow"><span class="eyebrow-dot"></span> Oracle AI World · Customer demo</p><h1>One database for your data, apps and AI.</h1><p class="hero-lead">Explore Autonomous AI Database by the capabilities that matter to you. Choose any topic and jump straight into its features, source slides and demo videos.</p><div class="hero-actions"><a class="button button-primary" href="#categories">Explore categories <span aria-hidden="true">↓</span></a><button class="button button-secondary" type="button" id="focus-search">Search features <span aria-hidden="true">⌕</span></button></div><div class="hero-note"><span class="note-spark" aria-hidden="true">✳</span> Browse in any order. Every category stays one tap away.</div></div><div class="hero-visual"><img src="' + slidePath("executive-03.jpg") + '" alt="Illustration from the Autonomous AI Database executive overview" fetchpriority="high"><span class="visual-label">Autonomous AI Database</span></div></section>' +
      '<section class="stats-row" aria-label="Explore the app"><div><strong>' + Object.keys(categories).length + '</strong><span>topic categories</span></div><div><strong>' + items.length + '</strong><span>feature guides</span></div><div><strong>' + uniqueVideoCount() + '</strong><span>demo clips</span></div><div><strong>2</strong><span>source presentations</span></div></section>' +
      '<section id="categories" class="section-block"><div class="section-heading"><div><p class="eyebrow">Start anywhere</p><h2>Explore by category</h2><p class="section-lead">Pick a topic to see its feature cards. You can move between categories at any time from the navigation bar above.</p></div><span class="heading-mark" aria-hidden="true">01—08</span></div><div class="category-grid">' + categoriesMarkup + '</div></section>' +
      '<section class="note-panel"><span class="note-panel-icon" aria-hidden="true">i</span><div><strong>Content from the supplied presentations</strong><p>Feature details, source slide references, slide graphics and demo clips are drawn from the two provided PowerPoint decks. Figures and product claims are presented as shown in those materials.</p></div></section>';
    document.title = "Autonomous AI Database | Explore the categories";
    document.getElementById("focus-search").addEventListener("click", function () { search.focus(); });
  }
  function renderCategory() {
    var cat = categories[key];
    if (!cat) { app.innerHTML = '<section class="not-found"><h1>Category not found</h1><a href="' + path("index.html") + '">Back to overview</a></section>'; return; }
    var entries = items.filter(function (item) { return item.category === key; });
    var artwork = cat.graphics && cat.graphics.length ? '<div class="category-hero-art"><img src="' + slidePath(cat.graphics[0]) + '" alt="Slide graphic illustrating ' + escapeHtml(cat.label) + '" fetchpriority="high"></div>' : '';
    app.innerHTML = '<div class="breadcrumb"><a href="' + path("index.html") + '">Overview</a><span aria-hidden="true">/</span><span>' + escapeHtml(cat.label) + '</span></div>' +
      '<section class="category-hero"><div class="category-hero-copy"><p class="eyebrow">Category · ' + String(Object.keys(categories).indexOf(key) + 1).padStart(2, "0") + '</p><h1>' + escapeHtml(cat.label) + '</h1><p class="hero-lead">' + escapeHtml(cat.description) + '</p><div class="category-stat"><strong>' + entries.length + '</strong><span>' + (entries.length === 1 ? 'feature guide' : 'feature guides') + (videoCount(key) ? ' · ' + videoCount(key) + ' demo clips' : '') + '</span></div></div>' + artwork + '</section>' +
      '<section id="features" class="section-block"><div class="section-heading"><div><p class="eyebrow">Choose a feature</p><h2>' + escapeHtml(cat.label) + '</h2><p class="section-lead">Each card opens its own feature guide with presentation graphics and related demos.</p></div><a class="back-link" href="' + path("index.html") + '">All categories <span aria-hidden="true">↗</span></a></div><div class="feature-grid">' + entries.map(cardMarkup).join("") + '</div></section>' +
      (cat.graphics.length > 1 ? '<section class="section-block category-slides"><div class="section-heading"><div><p class="eyebrow">From the presentations</p><h2>More from the source slides</h2></div></div><div class="compact-slide-row">' + cat.graphics.slice(1).map(function (file) { return slideFigure(file); }).join("") + '</div></section>' : '');
    document.title = cat.label + " | Autonomous AI Database";
  }
  function slideFigure(file) {
    var label = file.replace(".jpg", "").replace("-", " ");
    var pieces = label.split(" ");
    var deck = pieces[0] === "executive" ? "Executive overview" : "Technical overview";
    var number = pieces[1] || "";
    return '<figure class="slide-figure"><button class="slide-open" type="button" data-slide="' + slidePath(file) + '" aria-label="Enlarge ' + escapeHtml(deck + ' slide ' + number) + '"><img src="' + slidePath(file) + '" alt="' + escapeHtml(deck + ', slide ' + number) + '" loading="lazy"><span class="slide-zoom" aria-hidden="true">↗</span></button><figcaption>' + escapeHtml(deck) + ' · slide ' + escapeHtml(number) + '</figcaption></figure>';
  }
  function renderFeature() {
    var item = currentItem;
    if (!item) { app.innerHTML = '<section class="not-found"><h1>Feature not found</h1><a href="' + path("index.html") + '">Back to overview</a></section>'; return; }
    var cat = categories[item.category];
    var gallery = item.graphics || [];
    var heroArt = gallery.length ? '<button class="feature-hero-art slide-open" type="button" data-slide="' + slidePath(gallery[0]) + '" aria-label="Enlarge source slide image"><img src="' + slidePath(gallery[0]) + '" alt="Source presentation graphic for ' + escapeHtml(item.title) + '" fetchpriority="high"><span class="slide-zoom" aria-hidden="true">↗</span><span class="visual-label">Presentation graphic</span></button>' : '';
    var clips = (item.videos || []).map(function (video, index) {
      var mime = video.file.toLowerCase().endsWith(".mov") ? "video/quicktime" : "video/mp4";
      return '<article class="video-card"><div class="video-heading"><span class="video-index">0' + (index + 1) + '</span><div><h3>' + escapeHtml(video.title) + '</h3><p>' + escapeHtml(video.note || 'Demo clip extracted from the supplied presentation.') + '</p></div></div><video controls playsinline preload="none" aria-label="' + escapeHtml(video.title) + '"><source src="' + videoPath(video.file) + '" type="' + mime + '">Your browser does not support embedded video playback.</video></article>';
    }).join("");
    var related = items.filter(function (other) { return other.category === item.category && other.id !== item.id; }).slice(0, 3);
    app.innerHTML = '<div class="breadcrumb"><a href="' + path("index.html") + '">Overview</a><span aria-hidden="true">/</span><a href="' + categoryHref(item.category) + '">' + escapeHtml(cat.label) + '</a><span aria-hidden="true">/</span><span>' + escapeHtml(item.title) + '</span></div>' +
      '<section class="feature-hero"><div class="feature-hero-copy"><p class="eyebrow">' + escapeHtml(cat.label) + (item.videos && item.videos.length ? ' <span class="eyebrow-divider">·</span> Demo available' : '') + '</p><h1>' + escapeHtml(item.title) + '</h1><p class="hero-lead">' + escapeHtml(item.summary) + '</p><div class="hero-actions"><a class="button button-primary" href="#overview">Explore this feature <span aria-hidden="true">↓</span></a>' + (item.videos && item.videos.length ? '<a class="button button-secondary" href="#demos">Watch ' + item.videos.length + (item.videos.length === 1 ? ' demo' : ' demos') + ' <span aria-hidden="true">▶</span></a>' : '') + '</div></div>' + heroArt + '</section>' +
      '<section id="overview" class="feature-overview section-block"><div class="overview-main"><p class="eyebrow">Feature guide</p><h2>What it does</h2><p class="body-copy">' + escapeHtml(item.description) + '</p>' +
      '<div class="capability-list"><h3>In this feature</h3><ul>' + (item.bullets || []).map(function (bullet) { return '<li><span class="check-mark" aria-hidden="true">✓</span><span>' + escapeHtml(bullet) + '</span></li>'; }).join("") + '</ul></div></div><aside class="source-card"><p class="eyebrow">Explore the source</p><h3>Presentation references</h3><p>These details come from the supplied executive and technical overview decks.</p><div class="source-list">' + sourceLabels(item) + '</div><a class="text-link" href="' + categoryHref(item.category) + '">More in ' + escapeHtml(cat.label) + ' <span aria-hidden="true">↗</span></a></aside></section>' +
      (gallery.length ? '<section class="section-block slide-section"><div class="section-heading"><div><p class="eyebrow">See it in the deck</p><h2>Presentation graphics</h2><p class="section-lead">Slide images from the supplied presentations. Select an image to enlarge it.</p></div><span class="heading-mark">' + String(gallery.length).padStart(2, "0") + ' slides</span></div><div class="slide-grid">' + gallery.map(slideFigure).join("") + '</div></section>' : '') +
      (clips ? '<section id="demos" class="section-block demos-section"><div class="section-heading"><div><p class="eyebrow">Watch it in action</p><h2>Demo videos</h2><p class="section-lead">Clips extracted from the relevant PowerPoint slides. Use the player controls to watch.</p></div><span class="heading-mark">' + String(item.videos.length).padStart(2, "0") + ' clips</span></div><div class="video-list">' + clips + '</div></section>' : '') +
      (related.length ? '<section class="section-block related-section"><div class="section-heading"><div><p class="eyebrow">Keep exploring</p><h2>Related features</h2></div><a class="back-link" href="' + categoryHref(item.category) + '">All ' + escapeHtml(cat.label) + ' features <span aria-hidden="true">↗</span></a></div><div class="feature-grid related-grid">' + related.map(cardMarkup).join("") + '</div></section>' : '');
    document.title = item.title + " | Autonomous AI Database";
  }
  function uniqueVideoCount() {
    var files = {};
    items.forEach(function (item) { (item.videos || []).forEach(function (video) { files[video.file] = true; }); });
    return Object.keys(files).length;
  }
  function renderSearch() {
    var query = search.value.trim().toLowerCase();
    if (!query) { results.hidden = true; results.innerHTML = ""; search.setAttribute("aria-expanded", "false"); return; }
    var matches = items.filter(function (item) {
      var category = categories[item.category].label;
      var words = [item.title, item.summary, item.description, category, (item.bullets || []).join(" "), (item.sources || []).join(" "), (item.videos || []).map(function (v) { return v.title + " " + v.note; }).join(" ")].join(" ").toLowerCase();
      return words.indexOf(query) !== -1;
    }).slice(0, 7);
    results.innerHTML = matches.length ? '<p class="search-label">' + matches.length + (matches.length === 1 ? ' matching feature' : ' matching features') + '</p>' + matches.map(function (item) { return '<a class="search-result" href="' + featureHref(item.id) + '"><span><strong>' + escapeHtml(item.title) + '</strong><small>' + escapeHtml(categories[item.category].label) + ((item.videos || []).length ? ' · Demo available' : '') + '</small></span><span aria-hidden="true">↗</span></a>'; }).join("") : '<p class="search-empty">No features match “' + escapeHtml(search.value.trim()) + '”. Try another word.</p>';
    results.hidden = false;
    search.setAttribute("aria-expanded", "true");
  }
  if (page === "home") renderHome();
  else if (page === "category") renderCategory();
  else renderFeature();
  var clearSearch = document.querySelector(".search-clear");
  search.addEventListener("input", function () { clearSearch.hidden = !search.value; renderSearch(); });
  clearSearch.addEventListener("click", function () { search.value = ""; clearSearch.hidden = true; renderSearch(); search.focus(); });
  search.addEventListener("keydown", function (event) {
    if (event.key === "Escape") { search.value = ""; renderSearch(); search.blur(); }
    if (event.key === "Enter") { var first = results.querySelector("a"); if (first) { event.preventDefault(); first.click(); } }
  });
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".search-wrap")) { results.hidden = true; search.setAttribute("aria-expanded", "false"); }
    var open = event.target.closest(".slide-open");
    if (open) {
      var dialog = document.getElementById("slide-dialog");
      var image = document.getElementById("dialog-slide-image");
      var caption = document.getElementById("dialog-slide-caption");
      image.src = open.getAttribute("data-slide");
      image.alt = open.getAttribute("aria-label") || "Enlarged presentation slide";
      caption.textContent = open.querySelector("img") ? open.querySelector("img").alt : "Presentation slide";
      if (dialog.showModal) dialog.showModal();
    }
  });
  document.getElementById("slide-dialog-close").addEventListener("click", function () { document.getElementById("slide-dialog").close(); });
})();
