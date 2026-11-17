# add[design.md](https://github.com/user-attachments/files/34969690/design.md)
# Design & Technical Architecture Specification: Intelligent Canvas

**Document**: `design.md`  
**Target Product**: Next-Generation Creative Intelligence Canvas & Studio  
**Classification**: Executive Architecture & System Design Document  
**Author**: Lovable Platform Architecture  
**Status**: Ready for Implementation  

---

## 1. Executive Summary & Strategic Positioning

### 1.1 Product Vision & Business Impact
The product represents an AI-augmented collaborative design surface positioned at the intersection of Figma (vector/composition), Miro (infinite ideation), and generative multimodal media engines (audio, raster, vector, dynamic UI). 

* **Value Proposition**: *"The intelligent canvas for infinite creativity"* — lowering the friction from abstract concept to production-ready multimedia assets (posters, interface mockups, audio visualizers, and interactive components).
* **Go-To-Market Model**: Product-Led Growth (PLG) with a dual monetization funnel:
  1. **Self-serve Free Tier** ("Get started for free") optimizing for viral creator adoption, shared canvas links, and organic collaboration loops.
  2. **Enterprise / Team Governance Tier** ("Contact sales") capturing high-LTV enterprise contracts requiring Single Sign-On (SSO/SAML), workspace RBAC, audit trails, dedicated edge inference, and GDPR/SOC2 compliance.

### 1.2 Unit Economics & Scalability Profile
* **Gross Margin Target**: >80% on SaaS seat subscriptions; usage-based micro-billing pass-through for heavy AI generative compute.
* **Risk & Mitigation**:
  * *Compute Risk*: Generative AI pipeline cost spikes mitigated by strict per-seat token quotas, edge caching, and tiered compute engines.
  * *Latency Risk*: Canvas lag mitigated by decoupled local optimistic state, WebGL-accelerated rendering, and client-side scene graphs with background delta-sync.

---

## 2. Visual Architecture & UI Component Specification

Based directly on the reference landing interface:

### 2.1 Color Palette & Semantic Tokens
* **Canvas Background**: `#FFFFFF` (Pure White) / `#FBFBFB` (Subtle Canvas Off-White)
* **Text / High Contrast**:
  * Primary Display Text: `#0A0A0A` (Near Black, 950 Slate)
  * Secondary / Muted Text: `#52525B` (Zinc 600)
  * Inverted Modal / Accent Surfaces: `#09090B` (Zinc 950)
* **Brand Accents & Multi-Media Canvas Palette**:
  * Canvas Lavender Glow: `#5B45E0` / `#7C65C1` (Concentric aura rings on creative poster)
  * Canvas Cyan/Teal Highlight: `#38BDF8` / `#2DD4BF`
  * Nature/Audio Green Accent: `#22C55E` / `#EAB308` (Audio visualizer & waveform tracks)
* **Borders & Dividers**:
  * Light Stroke: `#E4E4E7` (Zinc 200, 1px solid)
  * Dark Modal Border: `#27272A` (Zinc 800)

### 2.2 Typography Scale
* **Display H1**: `font-sans`, 56px–64px (`4rem`), `tracking-tight`, `font-semibold`, line-height `1.08`. Example: *"The intelligent canvas for infinite creativity"*.
* **Navigation Links**: `font-sans`, 14px (`0.875rem`), `font-medium`, `#3F3F46`, hover: `#09090B`.
* **Button Labels**: `font-sans`, 14px (`0.875rem`), `font-semibold`, rounded-lg / rounded-full.
* **Body / Modal Copy**: `font-sans`, 13px–14px (`0.8125rem`–`0.875rem`), line-height `1.45`.

### 2.3 Layout Structure & Grid
1. **Global Header (Sticky, `h-16`, `z-50`)**:
   * **Left**: Multi-color brand mark (Figma-inspired geometry) + primary dropdown navigation:
     * *Products* (Infinite Canvas, Vector Engine, Generative Studio, Audio/Video)
     * *Solutions* (Brand Teams, Product Design, Marketing & Growth)
     * *Community* (Templates, Plugins, Creator Marketplace)
     * *Resources* (Docs, API, Changelog, Case Studies)
     * *Pricing*
   * **Right**: Auth & Conversion Actions:
     * *Log in* (Ghost button / text link)
     * *Contact sales* (Secondary outline button: `border border-zinc-200 bg-white hover:bg-zinc-50`)
     * *Get started for free* (Primary CTA: `bg-black text-white hover:bg-zinc-800 px-5 py-2.5 rounded-lg shadow-sm`)

2. **Hero Composition & Canvas Showcase**:
   * Two-column asymmetrical layout (`max-w-7xl mx-auto px-6 py-20`):
     * **Left Column (40% width)**: Primary editorial punchline:
       * H1: *"The intelligent canvas for infinite creativity"*
       * Supporting subline & dual action triggers (Free signup + Live playground demo).
     * **Right Column (60% width)**: Layered dynamic workspace montage displaying cross-disciplinary capabilities:
       * **Layer A (Graphic & Event Design)**: 4:5 Poster card (*"Resonance Festival"*, August 2-4, 2026, Fernwood Park, concentric gradient rings, modern Swiss typography).
       * **Layer B (Mobile Experience & Audio Media)**: Phone chassis overlay showcasing an audio streaming interface with live waveform visualizer and landscape media art.
       * **Layer C (Interactive Overlay / Modal System)**: Floating dark popover card (*"Get started" / Cookie & Permission Manager*) demonstrating in-canvas interactive components.

3. **Consent & Privacy Modal Component**:
   * Surface: `bg-zinc-950 text-white rounded-2xl p-6 shadow-2xl border border-zinc-800 w-80 fixed bottom-6 right-6 z-40`.
   * Header: "Get started" with dismiss (`X`) icon.
   * Body: Explicit disclosure of cookies, local storage, performance tracking, and granular "Cookies settings" link.
   * Action Hierarchy:
     * Primary: *"Allow all cookies"* (`w-full py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm font-medium mb-2`).
     * Secondary: *"Do not allow cookies"* (`w-full py-2 rounded-lg text-zinc-400 hover:text-white text-sm`).

---

## 3. Full-Stack Technical Architecture

### 3.1 Technology Stack & Architectural Principles
In accordance with strict enterprise standards:
* **Frontend**: React 19, TypeScript (`strict: true`, no `any`), Tailwind CSS, `shadcn/ui` (Radix UI primitives), Lucide icons.
* **Canvas Engine**: HTML5 Canvas / WebGL layer with Konva / PixiJS abstraction for high-performance 60fps rendering of multi-layer nodes.
* **Backend & Realtime**: Supabase (PostgreSQL 16, Row Level Security, Edge Functions via Deno runtime, Realtime WebSockets for multi-cursor presence).
* **Validation**: Zod runtime validation schemas for all form inputs, edge payloads, and database RPC boundaries.
* **Client Data Fetching**: TanStack Query (React Query) with optimistic updates and offline resilience.

### 3.2 Layered System Separation
```
+-------------------------------------------------------------+
|                      UI Layer (React + Tailwind)            |
|       Navbars, Modals, Toolbars, Inspectors, Menus          |
+-------------------------------------------------------------+
                              |
+-------------------------------------------------------------+
|             Business Logic & Canvas State Store             |
|    Zustand / Jotai scene graph, Undo/Redo, Selection stack  |
+-------------------------------------------------------------+
                              |
+-------------------------------------------------------------+
|                  Canvas Rendering Pipeline                  |
|     WebGL / HTML5 Canvas Engine (Vectors, Raster, Audio)     |
+-------------------------------------------------------------+
                              |
+-------------------------------------------------------------+
|                     Data Access & API Layer                 |
|      Strict Typed Zod Clients, Supabase Client & RPCs       |
+-------------------------------------------------------------+
                              |
+-------------------------------------------------------------+
|                   Supabase Cloud Infrastructure             |
|   PostgreSQL + RLS | Realtime Presence | Storage Buckets    |
+-------------------------------------------------------------+
```

---

## 4. Database Schema & Security Architecture

### 4.1 Role-Based Access Control (RBAC) Model
Strict hierarchical privilege system:
* `Superuser / CEO`: Full system override, global audit inspection, billing management, workspace deletion.
* `Admin`: Workspace configuration, team member management, billing administration, project permissions.
* `Staff / Editor`: Create, edit, delete canvases, run AI generative jobs, export production assets.
* `Investor / Stakeholder`: Read-only reporting access, analytics dashboard, high-level project view without edit rights.
* `User / Collaborator`: Scoped per-canvas view or edit access as granted by project owners.

### 4.2 Database Schema (PostgreSQL DDL with RLS)

```sql
-- 1. Custom Enums
CREATE TYPE public.app_role AS ENUM (
  'superuser', 
  'admin', 
  'staff', 
  'investor', 
  'user'
);

CREATE TYPE public.canvas_visibility AS ENUM (
  'private', 
  'workspace', 
  'public'
);

-- 2. Organizations / Workspaces
CREATE TABLE public.workspaces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

-- 3. Workspace Memberships (RBAC mapping)
CREATE TABLE public.workspace_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
  UNIQUE(workspace_id, user_id)
);

-- 4. Canvases / Projects
CREATE TABLE public.canvases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT 'Untitled Canvas',
  visibility public.canvas_visibility NOT NULL DEFAULT 'private',
  scene_graph JSONB NOT NULL DEFAULT '{"nodes": [], "viewport": {"x": 0, "y": 0, "zoom": 1}}'::jsonb,
  thumbnail_url TEXT,
  created_by UUID NOT NULL REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

-- 5. Immutable Audit Logs (Zero-Trust Security requirement)
CREATE TABLE public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID REFERENCES public.workspaces(id) ON DELETE SET NULL,
  actor_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  actor_ip INET,
  action TEXT NOT NULL,           -- e.g. "AUTH_LOGIN", "ROLE_CHANGE", "DATA_EXPORT", "CANVAS_DELETE"
  resource_type TEXT NOT NULL,    -- e.g. "canvas", "user_role", "billing"
  resource_id TEXT,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

-- Prevent any updates or deletes on audit_logs (Strict Immutability)
REVOKE UPDATE, DELETE ON public.audit_logs FROM PUBLIC, authenticated, anon;

-- Enable Row Level Security on all tables
ALTER TABLE public.workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workspace_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.canvases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Security Policies: Helper function for role checking
CREATE OR REPLACE FUNCTION public.current_user_role(target_workspace_id UUID)
RETURNS public.app_role
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT role FROM public.workspace_members
  WHERE workspace_id = target_workspace_id
    AND user_id = auth.uid()
  LIMIT 1;
$$;

-- RLS: Canvases Table Policy
CREATE POLICY "Members can view workspace canvases"
  ON public.canvases
  FOR SELECT
  USING (
    visibility = 'public' 
    OR created_by = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public.workspace_members wm
      WHERE wm.workspace_id = canvases.workspace_id
        AND wm.user_id = auth.uid()
    )
  );

CREATE POLICY "Authorized roles can edit canvases"
  ON public.canvases
  FOR ALL
  USING (
    public.current_user_role(workspace_id) IN ('superuser', 'admin', 'staff')
    OR created_by = auth.uid()
  );

-- RLS: Audit Logs Policy (Superusers & Admins read-only)
CREATE POLICY "Admins and Superusers can view audit logs"
  ON public.audit_logs
  FOR SELECT
  USING (
    public.current_user_role(workspace_id) IN ('superuser', 'admin')
  );
```

### 4.3 Zero-Trust & Defense-in-Depth Checklist
1. **Client-Side Secrets**: Zero API keys or service-role tokens in bundle code. All AI engine endpoints routed via Supabase Edge Functions with authenticated JWT verification.
2. **Input Sanitization & Zod Enforcement**: All user-generated text and SVG uploads sanitized via DOMPurify on frontend and re-validated server-side before persisting to JSONB scene graphs.
3. **CSP & Anti-Tamper Headers**:
   ```
   Content-Security-Policy: default-src 'self'; script-src 'self'; connect-src 'self' https://*.supabase.co wss://*.supabase.co; img-src 'self' data: https: blob:;
   X-Frame-Options: DENY
   X-Content-Type-Options: nosniff
   Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
   ```
4. **Rate Limiting**: Tiered rate limiting on public auth endpoints (`/auth/v1/token`) and generation edge functions (Token bucket: 60 req/min for free users, 600 req/min for Enterprise).

---

## 5. Implementation Roadmap & Milestones

| Phase | Milestone | Deliverables | SLA / Target |
|---|---|---|---|
| **Phase 1** | **Landing Page & Marketing Shell** | Responsive Hero, Mega-Menu Nav, High-Conversion CTA, Cookie Consent Drawer, SEO metadata | Week 1 |
| **Phase 2** | **Auth & RBAC Foundation** | Supabase Auth (Magic Link, Google OAuth, Enterprise SAML), RLS enforcement, Audit logging triggers | Week 2 |
| **Phase 3** | **Canvas Runtime MVP** | WebGL/Canvas viewport, Node manipulation (Poster, Text, Audio, UI frames), Local state manager | Week 3–4 |
| **Phase 4** | **Realtime & Collaboration** | Multi-cursor presence, WebSocket delta sync, Version history, Role-based sharing permissions | Week 5 |
| **Phase 5** | **AI Intelligence Layer** | Edge-based generative image/audio synthesis, Smart layout suggestions, Enterprise billing | Week 6 |

---
*Generated and validated by Lovable Platform Architecture.*
