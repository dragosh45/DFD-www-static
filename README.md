# DataFlowDynamics – Static Website

🚧 **Status: Website Under Construction**  
🔗 [Access live site](https://dfd-www.fly.dev)

---

## 🌐 Purpose

This is the static presentation website for **DataFlowDynamics**, an IT startup offering custom data processing, ETL services, and intelligent automation solutions tailored to Romanian businesses (including compliance tools for ANAF, SmartBill, and more).

The website is built using **Angular 17**, and designed to:

- Explain our product offering
- Outline our value proposition
- Showcase ETL-based tools and integrations (e.g., VAT normalization, invoice monitoring)
- Provide contact and onboarding information for interested businesses and partners

---

## 🧱 Tech Stack

- **Frontend**: Angular 17 (no SSR)
- **Deployment**: Fly.io
- **Web server**: NGINX
- **Build**: Optimized static bundle (SPA)

---

## 🚀 Deployment Info

- The app is deployed on [Fly.io](https://fly.io) using Docker and NGINX.
- CI/CD can be added using GitHub Actions for automatic deploys on push to `main`.
- The production build is output to `dist/dfd-static/browser/` and served from there.

To redeploy manually:

```bash
flyctl deploy --remote-only