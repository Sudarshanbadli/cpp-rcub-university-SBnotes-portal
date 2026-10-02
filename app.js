
document.addEventListener("DOMContentLoaded", () => {

  const notesGrid = document.getElementById("notesGrid");
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.getElementById("filterButtons");
  const emptyState = document.getElementById("emptyState");
  const visibleCount = document.getElementById("visibleCount");
  const totalNotes = document.getElementById("totalNotes");
  const resetSearch = document.getElementById("resetSearch");

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  let activeFilter = "All";

  totalNotes.textContent = String(NOTES.length).padStart(2, "0");

  function renderNotes() {

    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredNotes = NOTES.filter(note => {

      const searchableText = [
        note.unit,
        note.title,
        note.subtitle,
        note.description,
        note.level,
        ...note.topics
      ].join(" ").toLowerCase();

      const matchesSearch = searchableText.includes(searchTerm);

      const matchesFilter =
        activeFilter === "All" || note.unit === activeFilter;

      return matchesSearch && matchesFilter;

    });

    notesGrid.innerHTML = filteredNotes.map(note => {

      const safeUrl = escapeAttribute(note.url);
      const safeFileName = escapeHTML(note.fileName);

      const isConfigured =
        note.url && !note.url.includes("example.com");

      const topics = note.topics.slice(0, 5).map(topic =>
        `<span class="topic-tag">${escapeHTML(topic)}</span>`
      ).join("");

      const extraTopics = note.topics.length > 5
        ? `<span class="topic-tag">+${note.topics.length - 5} more</span>`
        : "";

      return `

        <article class="note-card accent-${escapeAttribute(note.color)}">

          <div class="card-top">

            <span class="unit-label">${escapeHTML(note.unit)}</span>

            <span class="level-label">
              ${escapeHTML(note.level)}
            </span>

          </div>

          <div class="pdf-icon">
            <span>PDF</span>
          </div>

          <h3>${escapeHTML(note.title)}</h3>

          <h4>${escapeHTML(note.subtitle)}</h4>

          <p class="card-description">
            ${escapeHTML(note.description)}
          </p>

          <div class="topic-list">
            ${topics}
            ${extraTopics}
          </div>

          <div class="card-divider"></div>

          <div class="card-bottom">

            <div class="file-details">
              <span>📄 ${safeFileName}</span>
              <small>${escapeHTML(note.pages)}</small>
            </div>

            ${
              isConfigured
              ? `
                <a class="download-button"
                   href="${safeUrl}"
                   target="_blank"
                   rel="noopener"
                   aria-label="Open ${escapeAttribute(note.title)} PDF">
                  Open PDF ↗
                </a>
              `
              : `
                <span class="download-button disabled"
                      title="Add a PDF URL in data.js">
                  Add PDF
                </span>
              `
            }

          </div>

        </article>

      `;

    }).join("");

    visibleCount.textContent =
      String(filteredNotes.length).padStart(2, "0");

    emptyState.hidden = filteredNotes.length !== 0;

    notesGrid.hidden = filteredNotes.length === 0;

  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]);
  }

  function escapeAttribute(value) {
    return escapeHTML(value);
  }

  searchInput.addEventListener("input", renderNotes);

  filterButtons.addEventListener("click", event => {

    const button = event.target.closest("[data-filter]");

    if (!button) return;

    activeFilter = button.dataset.filter;

    filterButtons.querySelectorAll(".filter-btn")
      .forEach(item => item.classList.remove("active"));

    button.classList.add("active");

    renderNotes();

  });

  resetSearch.addEventListener("click", () => {

    searchInput.value = "";
    activeFilter = "All";

    filterButtons.querySelectorAll(".filter-btn")
      .forEach(button => {
        button.classList.toggle(
          "active",
          button.dataset.filter === "All"
        );
      });

    renderNotes();

  });

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active");

  });

  navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.classList.remove("active");
    });

  });

  renderNotes();

});
