# DFW Glazing Website - Development Log

## Project Overview
Commercial glass installation company website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Latest Updates (December 2, 2025)

### n8n Webhook Integration

#### Contact Form Backend Implementation
- **Added:** API route at `/api/contact` for form submissions
- **Integration:** Connected to n8n webhook for automated processing
- **Webhook URL:** `https://tagi.app.n8n.cloud/webhook/dd985d8d-3f71-4920-bc64-4a89502b0815`
- **Features:**
  - Form validation for required fields
  - File upload support (PDF/ZIP up to 10MB)
  - Base64 file encoding for transmission
  - Error handling with user-friendly messages
  - Success notification after submission
- **Location:** `src/app/api/contact/route.ts`
- **Updated:** `src/app/contact/page.tsx:83-144` with API integration

#### Data Structure Sent to n8n
```json
{
  "name": "string",
  "company": "string (optional)",
  "email": "string",
  "phone": "string",
  "projectType": "string",
  "message": "string",
  "submittedAt": "ISO 8601 timestamp",
  "fileAttached": "boolean",
  "fileName": "string (if file attached)",
  "fileSize": "number (if file attached)",
  "fileData": "base64 string (if file attached)"
}
```

### Configuration Fixes

#### Image Loading Fix
- **Fixed:** Images not loading after merge
- **Restored:** `unoptimized: true` in next.config.ts
- **Reason:** Next.js 15 has different image optimization requirements
- **Status:** Images now load correctly across all pages
- **Location:** `next.config.ts:8-10`

## Previous Updates (November 23, 2024)

### UI/UX Improvements

#### 1. About Page Objective Tiles
- **Fixed:** Added `h-full` class to objective tiles for equal heights across the grid
- **Location:** `src/app/about/page.tsx:135`

#### 2. Services Page Updates
- **Removed:** "Learn More" buttons from service cards
- **Removed:** Unused imports (Link, ArrowRight)
- **Location:** `src/app/services/page.tsx:58-67`

#### 3. Process Section Enhancement
- **Added:** Arrow icons between process steps
- **Changed:** Layout from grid to flex for horizontal flow
- **Imported:** ArrowRight icon from lucide-react
- **Location:** `src/app/services/page.tsx:83-109`

#### 4. Project Image Fix
- **Fixed:** Reagan Place @ Old Parkland image not displaying
- **Changed:** Extension from `.jpg` to `.jpeg`
- **Location:** `src/data/projects.ts:30`

#### 5. Projects Page Enhancements
- **Removed:** All popout/hover lift effects from project tiles
- **Removed:** Image scale-on-hover effects
- **Removed:** motion.div wrappers
- **Simplified:** Card styling to `border-2 border-gray-200`
- **Location:** `src/app/projects/page.tsx:80-110`

#### 6. Category Filter Bar (Mobile Optimization)
- **Reduced:** Padding from `py-8` to `py-3` on mobile
- **Reduced:** Gap between buttons from `gap-2` to `gap-1.5` on mobile
- **Changed:** Button size to `sm`
- **Changed:** Text size to `text-xs` on mobile, `text-sm` on desktop
- **Location:** `src/app/projects/page.tsx:55-75`

#### 7. Add Your Project CTA Card
- **Added:** New CTA card at end of projects grid
- **Features:** Green gradient background, plus icon, links to contact form
- **Location:** `src/app/projects/page.tsx:113-134`

### Animation System Updates

#### 8. FadeIn Component Improvements
- **Fixed:** Animations now trigger immediately on page load
- **Changed:** Viewport detection from `margin: '-50px'` to `amount: 0`
- **Reduced:** Initial offset from 40px to 20px for subtler movement
- **Result:** Content visible on About page without needing to scroll
- **Location:** `src/components/animations/FadeIn.tsx:21-46`

#### 9. Removed All Spinning Icon Animations
**Services Page:**
- Service card icons (line 48)
- Process number badges (line 89)

**About Page:**
- History section icon (line 40)
- Mission section icon (line 60)
- Core values icons (line 103)

**All locations:** Changed `motion.div` with `whileHover={{ rotate: 360 }}` to regular `div`

#### 10. Removed All Popout/Hover Effects

**Projects Page:**
- Project card lift effects
- CTA button scale effects
- **Total removed:** 2 motion wrappers

**Services Page:**
- Service card lift effects (removed motion wrapper and hover shadow)
- CTA button scale effects
- **Total removed:** 2 motion wrappers
- **Updated:** Cards now use `border-2 border-gray-200`

**About Page:**
- Core values card lift effects
- **Total removed:** 1 motion wrapper per card
- **Updated:** Cards now use `border-2 border-gray-200`

**Team Page:**
- Team member card lift effects
- **Total removed:** 1 motion wrapper per member
- **Updated:** Cards now use `border-2 border-gray-200`

**Home Page:**
- Hero section: 2 button wrappers (Get Free Quote, View Projects)
- Services section: Card lift + icon spin effects
- Why Choose Us: 4 wrappers (value items, commitment box, phone box, CTA button)
- Featured Projects: 2 wrappers (cards + View All button)
- Testimonials: 2 wrappers (cards + Start Your Project button)
- Final CTA: 1 wrapper (Get Started Today button)
- **Total removed:** 11+ motion wrappers
- **Updated:** All cards use `border-2 border-gray-200` with `hover:border-[#339900]`

## Technical Details

### Color Scheme
- **Primary Green:** `#339900`
- **Hover Green:** `#2d8500`
- **Background Gray:** `bg-gray-50`, `bg-gray-100`
- **Card Borders:** `border-gray-200` default, `border-[#339900]` on hover

### Image Configuration
- **Format:** All project images use `.jpeg` extension
- **Size:** 1200x900px (4:3 ratio)
- **Optimization:** Disabled (`unoptimized: true` in next.config.ts)
- **Total Projects:** 34 images

### Animation Philosophy
- **Entry Animations:** Subtle FadeIn with 20px offset
- **Hover Effects:** Removed all scale/lift/rotate effects
- **Focus:** Clean, professional, minimal motion
- **Trigger:** Immediate on viewport entry (amount: 0)

## File Structure Changes

### Modified Files
```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts (NEW: n8n webhook integration)
│   ├── about/page.tsx (objectives sizing, icon animations removed)
│   ├── contact/page.tsx (webhook integration, file upload, API calls)
│   ├── page.tsx (all popouts removed, 11 motion wrappers)
│   ├── projects/page.tsx (CTA card added, popouts removed, mobile optimized)
│   ├── services/page.tsx (Learn More removed, arrows added, popouts removed)
│   └── team/page.tsx (popouts removed)
├── components/
│   └── animations/
│       └── FadeIn.tsx (viewport and offset optimized)
└── data/
    └── projects.ts (Reagan Place image extension fixed)
```

## Git History
- **Branch:** main
- **Recent Commits:**
  - `4701056` - "Fix image loading by restoring unoptimized config" (Dec 2, 2025)
  - `3653bff` - "Add n8n webhook integration for contact form" (Dec 2, 2025)
  - `643e319` - "Enable image optimization and compress project images" (Nov 23, 2025)
  - `0dc484d` - "Fix swapped project images" (Nov 23, 2025)
  - `d031d65` - "Improve UX and swap home page sections" (Nov 23, 2025)

## Next Steps / Recommendations
1. ✅ ~~Implement contact form backend/API endpoint~~ (COMPLETED: n8n webhook integration)
2. Configure n8n workflow to handle form submissions:
   - Send email notifications
   - Store submissions in database
   - Decode and save file attachments
   - Set up automated responses
3. Consider adding actual team member photos to replace User icon placeholders
4. Add real project images to all 34 projects (currently only Old Parkland shows image)
5. Add Google Maps integration for contact page
6. Consider adding project detail pages with more images/info
7. SEO optimization (meta tags, structured data)
8. Performance audit and optimization
9. Accessibility audit (ARIA labels, keyboard navigation)

## Development Notes
- All animations are client-side rendered ('use client' directive)
- Framer Motion used for all animations
- shadcn/ui components for UI elements
- React Hook Form + Zod for form validation
- Responsive design with Tailwind breakpoints (sm, md, lg)
- Contact form submissions handled via n8n webhook integration
- File uploads converted to base64 for API transmission

## API Endpoints

### POST /api/contact
Contact form submission endpoint that forwards data to n8n webhook.

**Request Body:**
```typescript
{
  name: string;
  company?: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  fileName?: string;
  fileSize?: number;
  fileData?: string; // base64 encoded
}
```

**Response:**
- `200`: Success with `{ success: true, message: string }`
- `400`: Missing required fields
- `500`: Server or webhook error

---

**Last Updated:** December 2, 2025
**Developer:** Claude (Anthropic)
**Framework:** Next.js 15.5.5
**Node Version:** Recommended v18+
