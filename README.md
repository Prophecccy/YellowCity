# Yellow City Private Limited | Facility Management Service Portal

A high-fidelity, vibrant web application designed for **Yellow City Private Limited**, South India's premier agency for industrial security, hospitality housekeeping, deep cleaning sanitization, electrical/HVAC maintenance, and corporate investigation services. Trusted by **12,000+ satisfied customers**.

---

## ⚡ Tech Stack & Architecture

* **Core Framework**: React 19 + TypeScript + Vite 8
* **Routing**: 5-Page SPA Navigation (`Home`, `Services`, `Gallery`, `About`, `Contact Us`) with active state and hash URL syncing
* **Styling**: Vanilla CSS with Mango Yellow theme tokens & bold Dark Blue typography system
* **Smooth Scrolling**: Lenis Scroll Engine
* **Animations**:
  * **GSAP & GSAP ScrollTrigger**: Scroll-based element pinning and canvas triggers
  * **Framer Motion**: Interactive lightboxes, staggered list animations, and mobile menu overlays
* **Lead Capture Dispatch**: Serverless integration using Web3Forms with strict phone format validation

---

## 🎨 Color Palette & Visual System

* **Canvas Background**: Rich Mango Yellow (`#FFC107`)
* **Primary Text & Panels**: Bold Deep Dark Blue (`#001D4A`)
* **Cards & High-Contrast Containers**: Warm Mango Cream (`#FFF8E7`) with 2px dark blue borders
* **Corporate Text Branding**:
  * Official Name: **Yellow City Private Limited**
  * Tagline: **Facility Management Service**
  * Key Stat Highlight: **12,000+ Satisfied Customers**
* **Interactive Layering**: Drifting background gradient blobs and noise filter for film-grain paper feel.

---

## 🏗️ Folder Structure & Core Components

```text
Yellow_City/
├── public/
│   ├── assets/                         # Graphic assets & service images
│   ├── Yellow_City_logo.png            # Official company logo
│   ├── favicon.svg                     # Web browser tab icon
│   └── icons.svg                       # Vector icon set
├── src/
│   ├── components/                     # 5-Page SPA & UI Components
│   │   ├── About.tsx                   # Corporate core, 12,000+ client stats & compliance
│   │   ├── ContactForm.tsx             # Interactive contact form & location cards
│   │   ├── Footer.tsx                  # Deep navy footer with official branding & 5-page links
│   │   ├── Gallery.tsx                 # [NEW] Dedicated Gallery page with category lightboxes
│   │   ├── Header.tsx                  # Navigation header with "Yellow City Private Limited" text & 5 pages
│   │   ├── Hero.tsx                    # "VIGILANT. PRISTINE. TRUSTED." hero with 12,000+ stat badge
│   │   ├── LocationGrid.tsx            # Operational hubs across Tamil Nadu
│   │   ├── NoiseOverlay.tsx            # Custom SVG paper-grain filter
│   │   ├── ServicesCarousel.tsx        # GSAP-pinned sliding service gallery
│   │   ├── ServicesListGrid.tsx        # [NEW] Complete visible directory listing all 10+ services
│   │   └── VibrantBackground.tsx       # Backdrop gradient mesh orbs
│   ├── hooks/
│   │   └── useLenis.ts                 # GSAP-linked Lenis scroll synchronization hook
│   ├── App.tsx                         # 5-Page SPA Router & Coordinator
│   ├── index.css                       # Mango Yellow & Bold Dark Blue design system tokens
│   └── main.tsx                        # DOM render entrypoint
├── index.html                          # HTML entry document
└── vite.config.ts                      # Vite build configuration
```

---

## 🛠️ Installation & Execution

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
Starts the Vite dev server locally on port 3000:
```bash
npm run dev
```

### 3. Build for Production
Compiles types and generates optimized distribution build under `/dist`:
```bash
npm run build
```

### 4. Preview Production Build
Runs a local server to test the compiled production version:
```bash
npm run preview
```

---

## 🛡️ Verification & Security

* **Contact Form Validation**: Checked against Indian phone formats (`^[6789]\d{9}$`).
* **Web3Forms Dispatch**: Confirmed data is routed directly to the owners with elegant success feedback.
* **Responsive Layouts**: Optimized for mobile, tablet, and ultra-wide viewports.
* **Scroll Performance**: Lenis coordinates bind with GSAP ScrollTrigger to ensure zero jitter or lag.
