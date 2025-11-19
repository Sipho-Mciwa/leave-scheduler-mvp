# Technology Decisions

## Frontend

### Framework

**React (with Vite)**

* Fast startup and rebuild times.
* Modern tooling.
* Perfect for learning modern React.

### Routing

**React Router**

* Simple and proven for multi-page web apps.

### State Management

**Context API for MVP**

* Lightweight.
* Enough for auth + core data.
* Can migrate to Redux later if scaling.

### Styling

**Tailwind CSS**

* Rapid UI building.
* Low boilerplate.
* Easy responsiveness and clean layout.

### UI Libraries (Optional)

* `react-big-calendar` for team calendar.
* `react-hook-form` for clean form handling.

---

## Backend

Two options depending on goal:

### Option A: Firebase (Fastest)

* No backend servers to manage.
* Firebase Auth for login.
* Firestore for database.
* Easy for learning.

### Option B: Node.js + Express (Traditional)

* More control.
* Better for learning backend fundamentals.
* Works well with MongoDB or PostgreSQL.

---

## Database

* **MongoDB Atlas** (flexible document storage, easy for evolving schema)
* **OR PostgreSQL** if relational integrity is needed.

---

## Authentication

* JWT-based sessions if using Node backend.
* Firebase Authentication if using Firebase stack.

---

## Git & Branch Strategy

* `main` – production-ready
* `dev` – integration branch
* Feature branches: `feat/auth`, `feat/apply-leave`, etc.

---

## Deployment

* Vercel or Netlify for frontend
* Render, Railway, or Firebase Hosting for backend
* GitHub Actions for CI (build & basic testing)

---

## Testing

* Jest + React Testing Library for unit tests
* Cypress/Playwright later for end-to-end

---

## Reasoning

This stack:

* Maximizes React learning.
* Keeps deployment simple.
* Scales cleanly as app grows.
