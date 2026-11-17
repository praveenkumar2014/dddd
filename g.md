# agent.md


> **Purpose:** Give Bolt.new one clear execution brief to complete the
> existing project using the full implementation specification below.

## Instructions for the Bolt Agent

You are the implementation agent working inside the currently open Bolt
project.

1.  Read this entire `g.md` before making changes.
2.  Treat the detailed specification below as the acceptance contract.
    Implement it in the **existing project**.
3.  Inspect the repository first: identify the framework, routes, design
    tokens, reusable components, authentication, forms/backend, and
    installed animation libraries.
4.  Preserve all working functionality and the existing project
    architecture. Do not create a duplicate project, replace the app, or
    perform broad rewrites.
5.  Implement the complete integrated experience---not just a visual
    mockup. Connect navigation items to real existing routes. Do not
    leave dead buttons or placeholder `#` links where a real destination
    or action exists.
6.  Reuse existing dependencies and UI patterns. Do not install extra
    packages unless genuinely necessary.
7.  For any backend-dependent action, use the existing integration if
    configured. Never fake a successful submission; clearly isolate any
    missing integration and provide a safe fallback.
8.  After implementation, run the available checks and test the app. Fix
    build, TypeScript, runtime, responsive, accessibility, and
    interaction issues.
9.  Do not claim a requirement is complete unless you have verified it.
    If something cannot be completed because credentials, backend
    services, or external configuration are missing, report the exact
    blocker and the remaining work.
10. At the end, provide a concise completion report with:
    -   files/components changed
    -   features implemented
    -   routes and interactions verified
    -   checks/tests run and their results
    -   unresolved blockers or incomplete acceptance criteria

**Execution rule:** Make reasonable engineering decisions without asking
repetitive questions. Before editing, inspect; then implement, test, and
report.

------------------------------------------------------------------------

## Full Implementation Specification

The following specification is the complete task brief. Preserve its
requirements and acceptance criteria.

\# COMPLETE HEADER + MARKETING UI IMPLEMENTATION

You are working inside the existing Lovable project.

\*\*Do not create a duplicate project. Do not replace the existing
application. Do not remove working features. Inspect the existing
codebase first, then implement and integrate the work into the current
architecture.\*\*

\## 1. OBJECTIVE

Complete the entire production-ready marketing website navigation/header
system, including:

\- desktop header

\- responsive/mobile header

\- mega menus

\- dropdown navigation

\- nested navigation

\- active states

\- hover states

\- CTA buttons

\- login/get-started actions

\- Contact Sales interaction

\- mobile navigation drawer

\- keyboard accessibility

\- focus states

\- click-outside handling

\- scroll behavior

\- sticky/floating header behavior

\- responsive breakpoints

\- polished micro-interactions

\- entrance/exit animations

\- menu transitions

\- icon animations

\- page-section transitions

\- reduced-motion accessibility

The result must feel like a \*\*premium modern SaaS/design/AI product
website\*\*, not a basic template.

---

\# 2. IMPORTANT: USE THIS NAVIGATION COMPONENT AS THE STARTING REFERENCE

Use the following React/TypeScript implementation as the baseline
structure and improve it rather than blindly replacing it:

\`\`\`tsx

import { useEffect, useRef, useState } from "react";

import { ChevronDown, ChevronRight } from "lucide-react";

interface NavItem {

  label: string;

  columns: { title: string; links: string\[\] }\[\];

}

const NAV: NavItem\[\] = \[

  {

  label: "Products",

  columns: \[

  {

  title: "Create",

  links: \["Infinite Canvas", "Vector Engine", "Generative Studio",
"Audio & Video"\],

  },

  \],

  },

  {

  label: "Solutions",

  columns: \[

  {

  title: "By team",

  links: \["Brand Teams", "Product Design", "Marketing & Growth"\],

  },

  \],

  },

  {

  label: "Community",

  columns: \[

  {

  title: "Explore",

  links: \["Templates", "Plugins", "Creator Marketplace"\],

  },

  \],

  },

  {

  label: "Resources",

  columns: \[

  {

  title: "Learn",

  links: \["Docs", "API", "Changelog", "Case Studies"\],

  },

  \],

  },

\];

function BrandMark() {

  return (

  \<span className="flex h-6 items-center gap-1" aria-hidden\>

  \<span className="h-3 w-3 rounded-full bg-\[#F24E1E\]" /\>

  \<span className="h-3 w-3 rounded-full bg-\[#A259FF\] -ml-4 mt-3" /\>

  \<span className="h-3 w-3 rounded-full bg-\[#1ABCFE\] -ml-4 mt-3" /\>

  \</span\>

  );

}

export default function Header({ onContactSales }: { onContactSales: ()
=\> void }) {

  const \[openMenu, setOpenMenu\] = useState\<string \| null\>(null);

  const navRef = useRef\<HTMLDivElement\>(null);

  useEffect(() =\> {

  const onDocClick = (e: MouseEvent) =\> {

  if (navRef.current && !navRef.current.contains(e.target as Node)) {

  setOpenMenu(null);

  }

  };

  document.addEventListener("mousedown", onDocClick);

  return () =\> document.removeEventListener("mousedown", onDocClick);

  }, \[\]);

  return (

  \<header className="sticky top-0 z-50 h-16 border-b border-zinc-200/70
bg-white/80 backdrop-blur-md"\>

  \<div className="mx-auto flex h-full max-w-7xl items-center
justify-between px-6"\>

  \<div className="flex items-center gap-10"\>

  \<a href="\#" className="flex items-center gap-2.5" aria-label="Canvas
home"\>

  \<BrandMark /\>

  \<span className="text-\[15px\] font-semibold tracking-tight
text-zinc-950"\>

  canvas

  \</span\>

  \</a\>

  \<nav ref={navRef} className="hidden items-center gap-1 lg:flex"\>

  {NAV.map((item) =\> (

  \<div key={item.label} className="relative"\>

  \<button

  onClick={() =\>

  setOpenMenu(openMenu === item.label ? null : item.label)

  }

  className={\`flex items-center gap-1 rounded-lg px-3 py-2 text-sm
font-medium transition \${

  openMenu === item.label

  ? "text-zinc-950"

  : "text-zinc-600 hover:text-zinc-950"

  }\`}

  aria-expanded={openMenu === item.label}

  \>

  {item.label}

  \<ChevronDown

  className={\`h-3.5 w-3.5 transition-transform \${

  openMenu === item.label ? "rotate-180" : ""

  }\`}

  /\>

  \</button\>

  {openMenu === item.label && (

  \<div className="absolute left-0 top-full mt-2 w-64 rounded-xl border
border-zinc-200 bg-white p-2 shadow-xl
animate-\[popIn_140ms_ease-out\]"\>

  {item.columns.map((col) =\> (

  \<div key={col.title}\>

  \<div className="px-3 pb-1.5 pt-2 text-\[11px\] font-semibold
uppercase tracking-wider text-zinc-400"\>

  {col.title}

  \</div\>

  {col.links.map((link) =\> (

  \<a

  key={link}

  href="\#"

  className="group flex items-center justify-between rounded-lg px-3
py-2 text-sm text-zinc-700 transition hover:bg-zinc-50
hover:text-zinc-950"

  \>

  {link}

  \<ChevronRight className="h-3.5 w-3.5 opacity-0 transition
group-hover:opacity-40" /\>

  \</a\>

  ))}

  \</div\>

  ))}

  \</div\>

  )}

  \</div\>

  ))}

  \<a

  href="#pricing"

  className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600
transition hover:text-zinc-950"

  \>

  Pricing

  \</a\>

  \</nav\>

  \</div\>

  \<div className="flex items-center gap-2.5"\>

  \<a

  href="\#"

  className="hidden rounded-lg px-3 py-2 text-sm font-medium
text-zinc-700 transition hover:text-zinc-950 sm:block"

  \>

  Log in

  \</a\>

  \<button

  onClick={onContactSales}

  className="hidden rounded-lg border border-zinc-200 bg-white px-4 py-2
text-sm font-semibold text-zinc-900 shadow-sm transition
hover:bg-zinc-50 md:block"

  \>

  Contact sales

  \</button\>

  \<button className="rounded-lg bg-zinc-950 px-4 py-2 text-sm
font-semibold text-white shadow-sm transition hover:bg-zinc-800 sm:px-5
sm:py-2.5"\>

  Get started for free

  \</button\>

  \</div\>

  \</div\>

  \</header\>

  );

}

\`\`\`

---

\# 3. DO NOT JUST COPY THIS CODE

Treat this implementation as the \*\*reference behavior and information
architecture\*\*.

Refactor it into the existing project's component architecture.

Create reusable components where appropriate, for example:

\`\`\`text

Header

├── Brand

├── DesktopNavigation

│ ├── NavItem

│ ├── MegaMenu

│ └── MenuColumn

├── HeaderActions

├── MobileHeader

├── MobileNavigation

└── ContactSalesDialog

\`\`\`

Do not unnecessarily duplicate desktop and mobile logic.

---

\# 4. COMPLETE MEGA MENU SYSTEM

Upgrade the simple dropdown into a production-quality mega menu system.

Menus must support:

\### Products

Create:

\- Infinite Canvas

\- Vector Engine

\- Generative Studio

\- Audio & Video

\### Solutions

By team:

\- Brand Teams

\- Product Design

\- Marketing & Growth

\### Community

Explore:

\- Templates

\- Plugins

\- Creator Marketplace

\### Resources

Learn:

\- Docs

\- API

\- Changelog

\- Case Studies

The architecture must allow additional menu items to be added through
configuration rather than rewriting the component.

Support:

\`\`\`ts

type MegaMenuItem = {

  label: string;

  description?: string;

  icon?: React.ReactNode;

  href: string;

  badge?: string;

};

type MegaMenuSection = {

  title: string;

  items: MegaMenuItem\[\];

};

\`\`\`

---

\# 5. MEGA MENU VISUAL DESIGN

Use a premium design-system approach.

The menu should have:

\- large surface area where appropriate

\- subtle border

\- layered shadow

\- backdrop blur where appropriate

\- rounded corners

\- proper spacing

\- section hierarchy

\- icon containers

\- descriptions

\- badges

\- arrow indicators

\- hover states

\- active states

\- clear visual grouping

Do not make it visually heavy.

Use whitespace and hierarchy similar to modern premium SaaS websites.

---

\# 6. MOTION & ANIMATION SYSTEM

Implement a coherent motion system instead of random animations.

Animations should include:

\### Header

\- subtle appearance on page load

\- sticky transition

\- slight background/blur change on scroll

\- shadow/border transition when scrolling

\- smooth CTA hover

\### Dropdown

When opening:

\`\`\`text

opacity: 0 → 1

translateY: -6px → 0

scale: 0.98 → 1

\`\`\`

Use a short premium easing curve.

When closing:

reverse the animation.

\### Chevron

Closed:

\`\`\`text

rotate(0deg)

\`\`\`

Open:

\`\`\`text

rotate(180deg)

\`\`\`

\### Menu items

On hover:

\- subtle background transition

\- text color transition

\- arrow opacity transition

\- optional 1--2px horizontal movement

Avoid excessive bouncing.

\### CTA

Use subtle:

\- hover lift

\- shadow transition

\- background transition

\- active press state

---

\# 7. FRAMER MOTION

If the existing project already uses Framer Motion, use the existing
motion system.

If Framer Motion is already installed, prefer it for complex menu
transitions.

If it is not installed, do not add a dependency unnecessarily. Use CSS
transitions/animations.

Do not introduce multiple competing animation libraries.

Create reusable motion constants where useful:

\`\`\`ts

const menuTransition = {

  duration: 0.16,

  ease: \[0.16, 1, 0.3, 1\],

};

\`\`\`

Use \`AnimatePresence\` for mount/unmount menu transitions if Framer
Motion is already available.

---

\# 8. SCROLL BEHAVIOR

The header must remain usable while scrolling.

Implement:

\- sticky positioning

\- scroll-aware visual state

\- transparent/soft state at top

\- elevated state after scrolling

\- smooth transition between states

Example conceptual behavior:

\`\`\`text

Top of page

↓

transparent / subtle border

↓

User scrolls

↓

white translucent surface

↓

backdrop blur

↓

subtle shadow

\`\`\`

Do not cause layout jumping.

---

\# 9. MOBILE NAVIGATION

The mobile version must be fully implemented.

Do NOT simply hide the desktop navigation.

Create:

\`\`\`text

Mobile Header

├── Logo

├── Menu button

└── CTA

Mobile Drawer

├── Products

│ ├── Create

│ └── items

├── Solutions

├── Community

├── Resources

├── Pricing

├── Log in

├── Contact Sales

└── Get started

\`\`\`

Mobile menu must have:

\- animated drawer

\- backdrop

\- accordion sections

\- Chevron rotation

\- scroll support

\- close button

\- focus handling

\- ESC support

\- body scroll locking where appropriate

Animation:

\`\`\`text

drawer:

translateX(100%) → translateX(0)

backdrop:

opacity 0 → 1

\`\`\`

Use smooth transitions.

---

\# 10. ACCESSIBILITY

Implement proper accessibility.

Required:

\- semantic \`\<header\>\`

\- semantic \`\<nav\>\`

\- accessible buttons

\- \`aria-expanded\`

\- \`aria-controls\`

\- keyboard navigation

\- visible focus states

\- ESC closes open menu

\- click outside closes desktop menu

\- mobile drawer focus behavior

\- correct labels

\- sufficient contrast

\- reduced motion support

Support:

\`\`\`css

@media (prefers-reduced-motion: reduce)

\`\`\`

Animations should become minimal or disabled for users who prefer
reduced motion.

---

\# 11. RESPONSIVE BREAKPOINTS

Verify the design at:

\- 320px

\- 375px

\- 390px

\- 430px

\- 768px

\- 1024px

\- 1280px

\- 1440px

\- 1920px

Do not allow:

\- clipped menus

\- horizontal overflow

\- broken dropdown positioning

\- CTA collisions

\- logo distortion

\- text wrapping problems

\- inaccessible mobile navigation

---

\# 12. MARKETING WEBSITE INTEGRATION

Do not treat the header as an isolated component.

Connect the navigation to the actual website routes/sections.

Examples:

\`\`\`text

Products

→ /products

→ /products/infinite-canvas

→ /products/vector-engine

Solutions

→ /solutions

→ /solutions/brand-teams

→ /solutions/product-design

Community

→ /community

→ /templates

→ /plugins

→ /creator-marketplace

Resources

→ /docs

→ /api

→ /changelog

→ /case-studies

Pricing

→ /pricing

\`\`\`

Use the project's existing routing architecture.

If routes already exist, preserve them.

If routes do not exist, create appropriate route placeholders/pages
rather than leaving every link as \`href="\#"\`.

---

\# 13. CONTACT SALES

The Contact Sales button must work.

Use the project's existing modal/dialog system if available.

Implement:

\`\`\`text

Contact Sales

→ dialog

→ name

→ work email

→ company

→ team size

→ message

→ submit

\`\`\`

Use proper validation.

Do not create a fake successful submission.

If backend integration is not configured, provide a clean development
fallback and clearly isolate the integration point.

---

\# 14. GET STARTED CTA

The "Get started for free" button must connect to the application's
actual onboarding/authentication flow.

Do not leave it as a dead button.

If authentication exists:

\`\`\`text

Get started

→ existing signup flow

\`\`\`

If authentication does not exist:

\`\`\`text

Get started

→ appropriate onboarding/signup route

\`\`\`

Preserve existing authentication architecture.

---

\# 15. DESIGN SYSTEM

Use the existing project's:

\- typography

\- spacing

\- colors

\- border radius

\- shadows

\- buttons

\- icons

\- breakpoints

\- theme tokens

Do not introduce arbitrary styling that conflicts with the existing
design system.

Where tokens do not exist, create reusable design tokens instead of
scattered hard-coded values.

---

\# 16. COMPONENT QUALITY

The implementation must be:

\- reusable

\- typed

\- maintainable

\- production-ready

\- responsive

\- accessible

\- performant

Avoid:

\- duplicated code

\- giant components

\- unnecessary state

\- unnecessary dependencies

\- hard-coded route logic

\- dead buttons

\- placeholder links

\- console errors

\- broken imports

\- unused variables

---

\# 17. PERFORMANCE

Ensure:

\- no unnecessary re-renders

\- no excessive event listeners

\- proper cleanup

\- efficient scroll handling

\- no animation jank

\- no layout shift

\- no oversized assets

\- no unnecessary JavaScript for simple CSS transitions

Use passive listeners where appropriate.

Throttle/debounce scroll work if needed.

---

\# 18. FULL MARKETING PAGE POLISH

After implementing the header, inspect the complete marketing website.

The navigation must visually match:

\- hero

\- feature sections

\- product sections

\- testimonials

\- pricing

\- CTA sections

\- footer

The header should feel like part of one unified design system.

Also review:

\- section entrance animations

\- card hover interactions

\- button micro-interactions

\- image reveals

\- gradient transitions

\- scroll reveals

\- page transitions

Only add motion where it improves UX.

Avoid animation overload.

---

\# 19. DO NOT STOP AFTER HEADER

After the implementation:

1\. inspect the entire existing marketing site

2\. identify incomplete navigation

3\. identify missing routes

4\. identify placeholder links

5\. identify broken interactions

6\. identify missing mobile behavior

7\. identify missing animations

8\. identify inconsistent components

9\. fix the issues

10\. run the project

11\. test the navigation

12\. test responsive behavior

13\. fix console/runtime errors

14\. verify all imports

15\. verify all routes

16\. verify accessibility

17\. verify animations

18\. verify mobile menu

19\. verify Contact Sales

20\. verify Get Started

21\. verify no existing features were broken

---

\# 20. ACCEPTANCE CRITERIA

Do not consider this task complete merely because the header renders.

It is complete only when:

\- \[ \] Header works

\- \[ \] Desktop navigation works

\- \[ \] Mega menus work

\- \[ \] Dropdown animation works

\- \[ \] Chevron animation works

\- \[ \] Hover states work

\- \[ \] Click-outside works

\- \[ \] ESC works

\- \[ \] Keyboard navigation works

\- \[ \] Sticky header works

\- \[ \] Scroll state works

\- \[ \] Mobile header works

\- \[ \] Mobile drawer works

\- \[ \] Mobile accordions work

\- \[ \] Mobile backdrop works

\- \[ \] Mobile scroll locking works

\- \[ \] Pricing works

\- \[ \] Login works

\- \[ \] Contact Sales works

\- \[ \] Get Started works

\- \[ \] Routes are connected

\- \[ \] No dead \`#\` navigation remains where real routes exist

\- \[ \] Responsive layout works

\- \[ \] Accessibility works

\- \[ \] Reduced-motion behavior works

\- \[ \] No console errors

\- \[ \] No TypeScript errors

\- \[ \] No broken imports

\- \[ \] No broken existing functionality

\- \[ \] Production-quality visual polish is achieved

---

\# 21. IMPORTANT EXECUTION RULE

\*\*Do not ask me repetitive questions.\*\*

Inspect the existing project and make reasonable engineering decisions
based on the current architecture.

Before modifying anything:

1\. inspect the existing files

2\. identify the current routing

3\. identify the existing design system

4\. identify existing components

5\. identify existing authentication

6\. identify existing marketing pages

7\. identify existing animation libraries

Then implement the complete solution.

If something is missing, create the appropriate implementation instead
of stopping.

Do not replace working application architecture unnecessarily.

Do not create a duplicate project.

Do not delete existing functionality.

Do not stop at a visual mockup.

Build the complete integrated implementation and verify it.
