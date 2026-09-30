# Oracle AI World 2026 · Data Deep Dive agenda app

Open `index.html` to browse the four day agendas. Each agenda card links to a dedicated session detail page, and each session detail page links to its corresponding Oracle AI World catalog entry extracted from the supplied PDF's embedded hyperlink.

The app is static HTML/CSS/JavaScript: no build step, framework, font download, or server is required. It can be opened locally or uploaded as a folder to a static host.

The supplied guide’s cover pages are represented by the day navigation but not duplicated as sessions. The Global Leaders event is represented once, using the live event link from the event detail in the guide.

Visual system: the interface follows the supplied OAIW-26-v2.5 template palette and hierarchy — deep teal, sky blue, Oracle red, warm gold, and Arial typography.

Demo Hub details are included in the overview and day pages, with a dedicated `demo-hub.html` page covering the location, opening times, and booth descriptions for 2a, 2b, 7c, and 7d.

The Wednesday Global Leaders event has its own `global-leaders.html` page with the official overview, agenda, speaker list, venue details, and links back to the supplied Oracle event sections.

The Global Leaders speaker headshots are the official images from the Oracle event page and are stored locally under `assets/speakers/`. The stylesheet uses Arial throughout.
