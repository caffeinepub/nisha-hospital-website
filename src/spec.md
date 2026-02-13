# Specification

## Summary
**Goal:** Build a responsive, themed college website with public informational pages, a News & Events listing, and a Contact form that stores inquiries in the backend.

**Planned changes:**
- Create responsive site layout with persistent header navigation (desktop + mobile menu) and footer (address/contact placeholders + quick links).
- Implement public pages/sections: Home, About, Admissions, Academics (Programs/Departments listing), Campus Life, News & Events, Contact.
- Build the Home page content blocks: hero banner with primary CTA, key stats/highlights, featured programs teaser, upcoming events teaser, latest news teaser, and campus life teaser.
- Implement News & Events page with seed data lists for at least 3 news items and 3 events (dates, titles, summaries; event time and location placeholders).
- Implement Contact page with validated form (name, email, subject, message), submission to backend, and success/error UI states; include static contact details and office hours placeholders.
- Add backend (single Motoko actor) methods to create and persist inquiries in stable state and to list inquiries (newest first) including id, createdAt, name, email, subject, message.
- Apply a consistent collegiate visual theme across pages (classic academic styling) using Tailwind-based component styling.
- Generate and include static image assets under `frontend/public/assets/generated` and use them in the header/footer (crest/logo) and Home hero (hero image).

**User-visible outcome:** Visitors can browse a fully responsive college website with consistent academic styling, view seeded news/events, and submit contact inquiries with clear confirmation/error messaging.
