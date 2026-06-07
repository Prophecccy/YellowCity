# Yellow City Private Ltd | Premium Facility Management & Security Portal

A high-fidelity, vibrant, and interactive web application designed for **Yellow City Private Ltd**, South India's premier agency for industrial security, hospitality housekeeping, deep cleaning sanitization, and corporate investigation services.

---

## ⚡ Tech Stack & Architecture

* **Core Framework**: React 19 + TypeScript + Vite 8
* **Styling**: Vanilla CSS (designed using modern typographic rules, fluid clamps, and HSL variables)
* **Smooth Scrolling**: Lenis Scroll Engine
* **Animations**:
  * **GSAP & GSAP ScrollTrigger**: Scroll-based element pinning, line masks, and canvas triggers
  * **Framer Motion**: Smooth hover spring transitions, dynamic nav island morphing, and staggered component entrance fades
* **Lead Capture Dispatch**: Serverless integration using Web3Forms with strict phone format validation

---

## 🎨 Color Palette & Visual System

* **Canvas Background**: Warm off-white/cream (`#fcfcf9` / `hsl(45, 18%, 98%)`)
* **Primary Text & Panels**: Deep corporate steel/navy (`#0a1128` / `hsl(224, 60%, 10%)`)
* **Vibrant Brand Accent**: Saturated safety yellow (`#FFD200` / `hsl(49, 100%, 50%)`)
* **Interactive Layering**: Drifting background gradient blobs and an animated tactile noise overlay for a premium film-grain paper feel.

---

## 🏗️ Folder Structure & Core Components

```text
Yellow_City/
├── public/
│   ├── assets/
│   │   ├── hero_bg.png                 # Hero background pattern
│   │   ├── service_security.png        # Security illustration
│   │   ├── service_housekeeping.png    # Housekeeping illustration
│   │   ├── service_cleaning.png        # Deep cleaning illustration
│   │   └── service_detective.png       # Detective illustration
│   ├── favicon.svg                     # Web browser tab icon
│   └── icons.svg                       # Consolidated vector icons
├── src/
│   ├── assets/                         # Asset imports
│   ├── components/                     # High-fidelity visual components
│   │   ├── About.tsx                   # Service specs, compliance, & stats
│   │   ├── ContactForm.tsx             # Validated input panels & Web3Forms dispatch
│   │   ├── Footer.tsx                  # Corporate deep navy footer
│   │   ├── Header.tsx                  # Dynamic Island center-capsule navigation bar
│   │   ├── Hero.tsx                    # "VIGILANT. PRISTINE. TRUSTED." staggered header
│   │   ├── LocationGrid.tsx            # Operational hubs styled as shadow cards
│   │   ├── NoiseOverlay.tsx            # Custom SVG paper-grain noise filter
│   │   ├── ServiceVisual.tsx           # Custom animated SVGs for each service category
│   │   ├── ServicesCarousel.tsx        # GSAP ScrollTrigger-pinned sliding service gallery
│   │   └── VibrantBackground.tsx       # Floating backdrop gradient mesh orbs
│   ├── hooks/
│   │   └── useLenis.ts                 # GSAP-linked Lenis scroll synchronization hook
│   ├── App.tsx                         # Root app coordinator
│   ├── index.css                       # Design variables, typography, and utility rules
│   └── main.tsx                        # DOM render entrypoint
├── index.html                          # Entry document with preconnect Google Fonts
├── vite.config.ts                      # Local server and plugin rules
└── tsconfig.json                       # TypeScript compiler profiles
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
