# DFW Glazing Website

Modern, responsive website for DFW Glazing Inc. - Commercial Glass Installation Company established in 2004.

## 🚀 Project Overview

This is a complete website redesign built with modern technologies to replace the legacy 2008 HTML website. The site features responsive design, improved UX, SEO optimization, and modern development practices.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Deployment:** Netlify

## 📁 Project Structure

```
dfw-glazing-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About Us page
│   │   ├── contact/           # Contact page with form
│   │   ├── projects/          # Projects gallery
│   │   ├── services/          # Services overview
│   │   ├── suppliers/         # Suppliers page
│   │   ├── team/              # Team members page
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── layout/            # Header & Footer components
│   │   └── ui/                # Shadcn UI components
│   ├── data/                  # Static data (team, projects, services, suppliers)
│   └── types/                 # TypeScript type definitions
└── public/                    # Static assets (images, etc.)
```

## 🎨 Features Implemented

### Phase 1 - Foundation ✅
- [x] Next.js 14 setup with TypeScript
- [x] Tailwind CSS configuration
- [x] Responsive Header with mobile menu
- [x] Footer with contact info & links
- [x] Home page with hero, services, stats
- [x] About Us page with history & mission
- [x] Team page with all member profiles

### Phase 2 - Projects & Gallery ✅
- [x] Projects page with filterable gallery
- [x] Category filtering (Hotels, Schools, Healthcare, Commercial)
- [x] 34 project entries with metadata
- [x] Suppliers page with vendor links

### Phase 3 - Services & Contact ✅
- [x] Services overview page
- [x] Contact page with validated form
- [x] Contact information cards
- [x] Map placeholder (ready for Google Maps integration)

### Phase 4 - Lead Generation Optimization ✅
- [x] **Above-fold trust signals** (Licensed & Insured, 1,000+ Projects, 20+ Years)
- [x] **Power word CTAs** ("Get Free Quote Now" with urgency)
- [x] **Featured Projects Section** on homepage with 6 highlighted projects
- [x] **Multiple strategic CTAs** throughout the page
- [x] **Minimal contact form** (name, email, phone, project type)
- [x] **B2B-focused design** optimized for commercial glazing leads
- [x] **Social proof** with testimonials and client stats
- [x] **Mobile-first responsive** design for on-the-go decision makers

## 🚧 Coming Soon (Phase 4-7)

### Phase 4 - Enhanced Features
- [ ] Individual service detail pages (6 pages)
- [ ] Testimonials section
- [ ] Careers page
- [ ] Newsletter signup
- [ ] Social media integration

### Phase 5 - SEO & Performance
- [ ] Image optimization (WebP format)
- [ ] Google Analytics 4 setup
- [ ] Sitemap.xml & robots.txt
- [ ] Structured data (JSON-LD)
- [ ] Performance optimization (Lighthouse 90+)

### Phase 6 - Launch Preparation
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Content review
- [ ] Netlify deployment setup
- [ ] Domain configuration

### Phase 7 - Optional Post-Launch
- [ ] Blog/News section with CMS
- [ ] Before/After project sliders
- [ ] Live chat integration
- [ ] Email service integration (Contact form)
- [ ] Google Maps API integration

## 🏃 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd dfw-glazing-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Key Pages

- **Home (/)** - Hero section, services overview, company values, CTA
- **About Us (/about)** - History, mission, quality, personnel, safety, objectives
- **Team (/team)** - Executive, Management, Administration, Field Leaders
- **Services (/services)** - All 6 service offerings with details
- **Projects (/projects)** - Filterable gallery of 34+ completed projects
- **Suppliers (/suppliers)** - Aluminum & Glass supplier partnerships
- **Contact (/contact)** - Contact form, location, business hours

## 📞 Company Information

**DFW Glazing Inc.**
- **Address:** 4308 Clay Ave, Haltom City, TX 76117
- **Phone:** 817-696-9500
- **Fax:** 817-696-9506
- **Established:** 2004

## 🔧 Configuration

### Environment Variables (Coming Soon)
Create a `.env.local` file for:
- Google Maps API key
- Email service credentials (Resend/SendGrid)
- Analytics tracking IDs

### Color Theme
- Primary Green: `#339900`
- Dark Green: `#2d8500`
- Neutral Gray: `#f5f5f5`
- Dark Text: `#1a1a1a`

## 🌐 Deployment

### Netlify Deployment (Recommended)

This site is fully configured for Netlify deployment with Next.js support.

#### Option 1: Deploy via Netlify CLI
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod
```

#### Option 2: Deploy via Git Integration
1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider and select the repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** `20`
6. Click "Deploy site"

#### Netlify Configuration
The included `netlify.toml` file provides:
- Automatic Next.js plugin integration
- Security headers (XSS protection, frame options, etc.)
- Clean URL redirects
- Node.js 20 environment

#### Custom Domain Setup
1. In Netlify dashboard, go to Domain settings
2. Add your custom domain (e.g., dfwglazing.com)
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Netlify)

#### Environment Variables (if needed)
Add environment variables in Netlify dashboard under Site settings → Environment variables:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (for future map integration)
- `CONTACT_FORM_EMAIL` (for form submission endpoint)

## 📊 Performance Goals

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: 90+
- Lighthouse SEO: 100
- Mobile-first responsive design
- < 3 second initial load time

## 🤝 Contributing

This is a client website project. For updates or modifications, contact the development team.

## 📄 License

© 2025 DFW Glazing, Inc. All rights reserved.

---

**Built with ❤️ using Next.js 14 and modern web technologies**
