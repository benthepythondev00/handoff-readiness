const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const auditForm = document.querySelector("[data-audit-form]");
const formStatus = document.querySelector("[data-form-status]");

function closeMenu() {
  if (!menu || !menuToggle) return;
  menu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("menu-open");
}

if (menu && menuToggle) {
  menuToggle.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menu.classList.toggle("is-open", willOpen);
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute(
      "aria-label",
      willOpen ? "Close navigation" : "Open navigation",
    );
    document.body.classList.toggle("menu-open", willOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function syncHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

if (auditForm) {
  auditForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!auditForm.reportValidity()) return;

    const formData = new FormData(auditForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const handoffType = String(formData.get("handoffType") || "").trim();
    const summary = String(formData.get("summary") || "").trim();

    const subject = `Workflow handoff audit request - ${handoffType}`;
    const body = [
      "Hi Ben,",
      "",
      "I would like to discuss the $500 Workflow Handoff Readiness Audit.",
      "",
      `Name: ${name}`,
      `Work email: ${email}`,
      `Handoff situation: ${handoffType}`,
      "",
      "Workflow summary:",
      summary,
      "",
      "I understand that credentials and unredacted customer data are not required.",
    ].join("\n");

    if (formStatus) {
      formStatus.textContent = "Opening your email app with the request prepared.";
    }

    window.location.href = `mailto:bengoedeke@icloud.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  });
}
