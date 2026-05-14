/* ============================================================
   Shared nav + footer rendering
   Pages just include a <header data-nav="home"> placeholder
   ============================================================ */

(function () {
  const PHONE = "(702) 832-5323";
  const PHONE_TEL = "tel:7028325323";
  const ADDRESS = "4245 Production Ct, Las Vegas, NV 89115";

  const PAGES = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "services", label: "Services", href: "services.html" },
    { id: "gallery", label: "Gallery", href: "gallery.html" },
    { id: "about", label: "About", href: "about.html" },
    { id: "reviews", label: "Reviews", href: "reviews.html" },
    { id: "specials", label: "Specials", href: "specials.html" },
    { id: "faq", label: "FAQ", href: "faq.html" },
    { id: "contact", label: "Contact", href: "contact.html" },
  ];

  function renderNav(activeId) {
    const linksHTML = PAGES.map(
      (p) =>
        `<a href="${p.href}" class="${p.id === activeId ? "active" : ""}">${p.label}</a>`
    ).join("");

    const mobileHTML = PAGES.map(
      (p) =>
        `<a href="${p.href}" class="${p.id === activeId ? "active" : ""}">${p.label}</a>`
    ).join("");

    return `
<div class="topstrip" aria-hidden="true">
  <div class="topstrip-track">
    ${Array(2).fill(`
      <span>Family owned for 20+ years</span>
      <span class="star">★</span>
      <span>All insurance accepted</span>
      <span class="star">★</span>
      <span>Free pickup &amp; delivery</span>
      <span class="star">★</span>
      <span>65 ft spray booth</span>
      <span class="star">★</span>
      <span>Military discount</span>
      <span class="star">★</span>
      <span>Mon–Fri 7:30 AM – 5:00 PM</span>
      <span class="star">★</span>
    `).join("")}
  </div>
</div>
<nav class="nav" aria-label="Primary">
  <div class="nav-inner">
    <a href="index.html" class="logo" aria-label="Spray Gun Autobody — home">
      <span class="logo-mark" aria-hidden="true"></span>
      <span>
        Spray Gun
        <small>Autobody · LV</small>
      </span>
    </a>
    <div class="nav-links">${linksHTML}</div>
    <div class="nav-cta">
      <a href="${PHONE_TEL}" class="nav-phone" aria-label="Call ${PHONE}">
        <span class="lbl">Call now</span>
        ${PHONE}
      </a>
      <a href="contact.html#quote" class="btn btn-yellow">Get a quote <span class="arrow">→</span></a>
      <button class="hamburger" aria-label="Open menu" id="hamburger">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="mobile-menu" id="mobile-menu">${mobileHTML}
  <a href="${PHONE_TEL}" style="color:var(--yellow);font-family:var(--mono);font-size:14px;margin-top:8px;">${PHONE}</a>
</div>
    `;
  }

  function renderFooter(activeId) {
    return `
<footer>
  <div class="wrap">
    <div class="foot-big">
      <span>Need a quote?</span>
      <small>(702) 832-5323</small>
    </div>
    <div style="height:56px;"></div>
    <div class="foot-grid">
      <div>
        <div class="logo" style="color:var(--paper);">
          <span class="logo-mark"></span>
          <span>Spray Gun<small style="color:var(--mute);">Autobody · LV</small></span>
        </div>
        <p style="font-size:14px;color:var(--mute);margin-top:20px;max-width:34ch;line-height:1.5;">
          Las Vegas's family-owned auto body shop. Collision repair, custom paint, fleet &amp; heavy-duty work since 2005.
        </p>
      </div>
      <div>
        <h4>Visit</h4>
        <ul>
          <li>${ADDRESS}</li>
          <li>Mon–Fri 7:30 AM – 5:00 PM</li>
          <li>Saturday by appointment</li>
          <li><a href="contact.html">Get directions →</a></li>
        </ul>
      </div>
      <div>
        <h4>Sitemap</h4>
        <ul>
          ${PAGES.map((p) => `<li><a href="${p.href}">${p.label}</a></li>`).join("")}
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="${PHONE_TEL}">${PHONE}</a></li>
          <li><a href="contact.html#quote">Request a quote</a></li>
          <li><a href="contact.html">Schedule appointment</a></li>
          <li><a href="specials.html">Military discount</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bot">
      <span>© ${new Date().getFullYear()} Spray Gun Autobody · Las Vegas, NV · Family owned since 2005</span>
      <span>Site by Spray Gun · Original design</span>
    </div>
  </div>
</footer>
    `;
  }

  function init() {
    document.querySelectorAll("[data-nav]").forEach((el) => {
      el.outerHTML = renderNav(el.getAttribute("data-nav"));
    });
    document.querySelectorAll("[data-footer]").forEach((el) => {
      el.outerHTML = renderFooter(el.getAttribute("data-footer"));
    });

    // Mobile menu
    const burger = document.getElementById("hamburger");
    const menu = document.getElementById("mobile-menu");
    if (burger && menu) {
      burger.addEventListener("click", () => menu.classList.toggle("open"));
    }

    // Reveal on scroll
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    } else {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
