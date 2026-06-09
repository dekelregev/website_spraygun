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
    { id: "about", label: "About", href: "about.html" },
    { id: "reviews", label: "Reviews", href: "reviews.html" },

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
<nav class="nav" aria-label="Primary">
  <div class="nav-inner">
    <a href="index.html" class="logo" aria-label="Spray Gun Autobody — home">
      <img src="assets/logo.png" alt="The Spray Gun Auto Body" class="logo-img" />
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
          Las Vegas's family-owned auto body shop. Collision repair, custom paint, fleet &amp; heavy-duty work. 30 years in the business.
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
      <span>© ${new Date().getFullYear()} Spray Gun Autobody · Las Vegas, NV · 30 years serving Las Vegas</span>
      <span>Site by Spray Gun · Original design</span>
    </div>
  </div>
</footer>
    `;
  }

  function renderFloat() {
    return `
<div class="sg-float" id="sg-float">
  <div class="sg-float-badge">30<small>yrs</small></div>
  <a href="tel:7028325323" class="sg-float-phone" aria-label="Call (702) 832-5323">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    (702) 832-5323
  </a>
</div>
<style>
.sg-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  pointer-events: none;
}
.sg-float-badge {
  background: var(--yellow);
  color: var(--ink);
  font-family: var(--display);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.03em;
  padding: 6px 12px;
  border-radius: 999px;
  display: flex;
  align-items: baseline;
  gap: 3px;
  box-shadow: 0 4px 14px -4px rgba(0,0,0,0.22);
  pointer-events: none;
  white-space: nowrap;
}
.sg-float-badge small {
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.sg-float-phone {
  background: var(--ink);
  color: var(--paper);
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.06em;
  padding: 11px 18px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 9px;
  box-shadow: 0 6px 20px -6px rgba(0,0,0,0.35);
  pointer-events: all;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
  white-space: nowrap;
}
.sg-float-phone:hover {
  background: var(--yellow);
  color: var(--ink);
  transform: translateY(-2px);
}
@media (max-width: 480px) {
  .sg-float { bottom: 16px; right: 16px; }
  .sg-float-phone { font-size: 12px; padding: 10px 14px; }
}
</style>
    `;
  }

  function init() {
    document.querySelectorAll("[data-nav]").forEach((el) => {
      el.outerHTML = renderNav(el.getAttribute("data-nav"));
    });
    document.querySelectorAll("[data-footer]").forEach((el) => {
      el.outerHTML = renderFooter(el.getAttribute("data-footer"));
    });

    // Floating phone + years badge
    const floatEl = document.createElement('div');
    floatEl.innerHTML = renderFloat();
    document.body.appendChild(floatEl);

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
