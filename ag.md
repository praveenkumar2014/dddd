I've compiled the full design and technical architecture specification into design.md based on your reference canvas.




The document details the visual token hierarchy and layout system alongside an executive-grade architecture: a strict React/TypeScript/Tailwind frontend separated from the canvas state engine, backed by Supabase with five-tier RBAC, strict Row Level Security, and an immutable audit log table for zero-trust enterprise compliance.

als chch https://github.com/praveenkumar2014/dddd.git chck and gv ha ndd and scs bf lan

Today at 5:52 PM
Thought for 6s

I'll inspect the repository at praveenkumar2014/dddd and audit what is needed, the codebase state, and pre-launch requirements.

Used 3 tools

Your repository praveenkumar2014/dddd currently contains only the README.md holding the design.md specification. There is no application code, package configuration, or build infrastructure committed yet.

To implement the platform, you need a React 19 + TypeScript (strict mode, zero any) + Vite scaffold configured with Tailwind CSS and shadcn/ui. This includes the global navigation, the 3-layer hero composition (the Resonance festival poster, mobile audio player, and consent drawer), and a modular Zustand canvas state store.

On the backend, you'll need Supabase with the PostgreSQL schema from design.md: 5-tier RBAC (superuser, admin, staff, investor, user), 100% RLS policy coverage, and an immutable audit_logs table.




Before launch, ensure zero client-side secrets, active CSP headers, GDPR-compliant cookie state persistence, and >90 Lighthouse performance.




Would you like me to create this as a new Lovable web app project and build the complete landing page and architecture now?

scs?

Today at 5:53 PM
Thought for 8s

Here are the core pre-launch Success Criteria (SCS) evaluated across business impact, security, and technical performance.

Pre-Launch Success Criteria (SCS) Matrix
x
0 of 5 done
Zero-Trust Security & RLS Policy Lock: To do. Change status
Zero-Trust Security & RLS Policy Lock
100% of tables enforced by RLS; zero client service keys; strict CSP headers
Owner of Zero-Trust Security & RLS Policy Lock
Security / CEO
Immutable Audit Logging Active: To do. Change status
Immutable Audit Logging Active
Logins, privilege escalations, canvas deletions, and exports streamed to audit_logs
Owner of Immutable Audit Logging Active
Security / CEO
RBAC Multi-Tenant Isolation: To do. Change status
RBAC Multi-Tenant Isolation
Verify Superuser, Admin, Staff, Investor, and User permission boundaries
Owner of RBAC Multi-Tenant Isolation
Lead Architect
PLG Conversion Funnel & Cookie Consent: To do. Change status
PLG Conversion Funnel & Cookie Consent
Zero-friction signup CTA, enterprise contact routing, and GDPR opt-in tracking
Owner of PLG Conversion Funnel & Cookie Consent
Product / Growth
Lighthouse 90+ & 60fps Canvas Loop: To do. Change status
Lighthouse 90+ & 60fps Canvas Loop
LCP < 1.8s, zero TypeScript compilation warnings, WebGL/canvas optimistic sync
Owner of Lighthouse 90+ & 60fps Canvas Loop
Frontend Lead
Open Pre-Launch Success Criteria (SCS) Matrix
Weighed clear, concise communication options

The success criteria focus on three risk vectors before go-live: security isolation (100% RLS coverage and immutable audit logging), conversion viability (working free-tier onboardings and cookie opt-in storage), and runtime SLAs (Lighthouse >90 with 60fps canvas interactions).




I recommend scaffolding the Lovable project right now with this exact architecture so we can check off these gates in code. Ready to start?

gvm .md sklls.md all ?

Today at 5:55 PM
Thought for 4s

I'll gather all available workspace and platform skills and compile them into skills.md.

Compiled and published all skills in skills.md
Checking skills directories in the sandbox
Listed workspace skills
Reading my-skill SKILL.md
head -n 50 /home/lovable/workspace/skills/my-skill/SKILL.md
Output
Exit code: 0

--- stdout ---
---
name: "my-skill"
description: "gsllm-master-orchestrator"
---

# GSLLM Master Orchestrator

## Purpose

You are the primary orchestration skill.

Your responsibility is to convert every software request into a complete production-ready solution.

Act as:

- Product Manager
- System Architect
- UI/UX Designer
- Frontend Engineer
- Backend Engineer
- AI Engineer
- Database Architect
- DevOps Engineer
- Security Engineer
- QA Engineer

Never stop after generating UI.

---

# Execution Strategy

Always think through the complete software lifecycle before generating output.

For every request:

1. Analyze requirements.
2. Infer missing technical details using industry best practices.
3. Design overall architecture.
4. Design database schema.
5. Design API architecture.
6. Build frontend.
7. Build backend.
8. Configure authentication.
9. Configure authorization.
10. Configure AI features when appropriate.
11. Configure integrations when appropriate.
12. Configure deployment.
13. Generate documentation.
14. Review implementation for completeness.
Show more

Exploring Ad Skills




I'm currently investigating the available ad campaign management skills. My focus is on understanding the capabilities of ad-campaign-create, ad-campaign-manage, and ad-campaign-readiness.

Parsing skills metadata

Refining Skill Integration




I'm currently processing the nuances of skill interaction and ensuring no internal tool paths are exposed. My focus is on seamlessly integrating these capabilities while guiding users toward the Skills settings for management.




Organizing Skill Documentation




I'm structuring the skills.md file now, aiming for a clear delineation between custom workspace skills and platform capabilities like advertising, design, video, and operations. I'll ensure invocation methods are also documented.

Show more
Compiling all workspace and platform skills into skills.md
python3 -c '
import os, yaml, re

def get_yaml_frontmatter(file_path):
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        match = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", content, re.DOTALL)
        if match:
            fm_text = match.group(1)
            body = match.group(2)
            data = yaml.safe_load(fm_text) or {}
            return data, body
        return {}, content
    except Exception as e:
        return {}, ""

# Workspace skills
ws_skills = []
ws_path = "/home/lovable/workspace/skills"
if os.path.exists(ws_path):
    for d in sorted(os.listdir(ws_path)):
        sp = os.path.join(ws_path, d, "SKILL.md")
        if os.path.exists(sp):
            fm, body = get_yaml_frontmatter(sp)
            name = fm.get("name", d)
            desc = fm.get("description", "")
            ws_skills.append({"name": name, "description": desc, "type": "Workspace Skill", "path": d})

# Platform / Injected skills
builtin_skills = []
kn_path = "/tmp/knowledge/skill"
if os.path.exists(kn_path):
    for d in sorted(os.listdir(kn_path)):
        sp = os.path.join(kn_path, d, "SKILL.md")
        if os.path.exists(sp):
            fm, body = get_yaml_frontmatter(sp)
            name = fm.get("name", d)
            desc = fm.get("description", "")
            # clean desc
            desc = " ".join(desc.split()) if isinstance(desc, str) else str(desc)
            builtin_skills.append({"name": name, "description": desc, "type": "Platform Capability", "path": d})

md = []
md.append("# Workspace & Platform Skills Directory (`skills.md`)")
md.append("\n**Classification**: Complete Skill Registry & Capabilities Catalog")
md.append(f"**Total Registered Skills**: {len(ws_skills) + len(builtin_skills)}")
md.append(f"**Workspace Custom Skills**: {len(ws_skills)}")
md.append(f"**Platform Specialized Skills**: {len(builtin_skills)}\n")
md.append("---\n")

md.append("## 1. Workspace Custom Skills")
md.append("Configured and managed within this workspace (viewable/editable via **Settings > Skills**).\n")
md.append("| Skill Identifier | Title / Handle | Description & Core Responsibility |")
md.append("|---|---|---|")
for s in ws_skills:
    md.append(f"| `{s[\x27name\x27]}` | **GSLLM Master Orchestrator** | {s[\x27description\x27]} — Converts raw software requests into end-to-end production architecture, frontend/backend engineering, database schemas, RBAC security, and QA. |")

md.append("\n---\n")
md.append("## 2. Platform Specialized Skills Directory\n")
md.append("Autonomous agent skills dynamically loaded on demand or invoked directly via `/skill:<name>`.\n")

# Categorize platform skills
categories = {
    "Advertising & Performance Marketing": [
        "ads", "ad-campaign-create", "ad-campaign-manage", "ad-campaign-readiness", 
        "ad-campaign-review", "ad-competitor-research", "ad-copy", "ad-image", 
        "ad-research", "ad-tracking", "ad-video", "google-ads", "meta-ads"
    ],
    "Creative, Brand & Visual Design": [
        "canvas-design", "logo-design", "social-post", "framed-screenshot", "website-brand-research"
    ],
    "High-Impact Video & Motion Production": [
        "video-router", "video-ad-cinematic", "video-ad-presenter", "video-ad-ugc", 
        "video-brand-film", "video-modules", "video-motion-graphics"
    ],
    "System Architecture, Operations & Memory": [
        "cost-optimization", "lovable-user-memory", "lovable--build-as-app", 
        "lovable--interview-me", "lovable--reach-user"
    ]
}

skills_map = {s["name"]: s for s in builtin_skills}

for cat_title, skill_names in categories.items():
    md.append(f"### {cat_title}\n")
    md.append("| Skill Identifier | Invocation | Core Scope & Capability |")
    md.append("|---|---|---|")
    for sn in skill_names:
        if sn in skills_map:
            s = skills_map[sn]
            md.append(f"| `{s[\x27name\x27]}` | `/skill:{s[\x27name\x27]}` | {s[\x27description\x27]} |")
    md.append("\n")

md.append("""---

## 3. Skill Execution & Governance Model

### 3.1 Invocation Protocol
1. **Explicit Routing**: Skills can be directly targeted in chat using `/skill:<skill-name> [prompt]` (e.g. `/skill:ad-campaign-create`, `/skill:my-skill`).
2. **Context-Aware Automatic Injection**: When a user request matches the specific problem domain (such as campaign auditing or brand asset creation), the matching skill is automatically surfaced and applied.

### 3.2 Workspace Skill Management
* Custom workspace skills can be added, updated, or toggled in **Settings > Skills**.
* Workspace skills allow custom enterprise orchestration standards, organizational design guidelines, and proprietary automation pipelines to be enforced across all projects.

---
*Catalog generated and published by Lovable Platform.*
""")

output_text = "\n".join(md)
with open("/mnt/documents/skills.md", "w", encoding="utf-8") as f:
    f.write(output_text)

print("Generated /mnt/documents/skills.md successfully. Total characters:", len(output_text))
'
Output
Process ID: 59f5eb4a-b4df-49ca-8449-6eae5c657623. Output may be available at /tmp/exec-logs/59f5eb4a-b4df-49ca-8449-6eae5c657623.log.

Exit code: 1

--- stderr ---
  File "<string>", line 57
    md.append(f"| `{s[\x27name\x27]}` | **GSLLM Master Orchestrator** | {s[\x27description\x27]} — Converts raw software requests into end-to-end production architecture, frontend/backend engineering, database schemas, RBAC security, and QA. |")
                       ^
SyntaxError: unexpected character after line continuation character
Show less
Running python script to generate skills.md
cat << 'EOF' > /tmp/generate_skills_md.py
import os, yaml, re

def get_yaml_frontmatter(file_path):
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        match = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", content, re.DOTALL)
        if match:
            fm_text = match.group(1)
            body = match.group(2)
            data = yaml.safe_load(fm_text) or {}
            return data, body
        return {}, content
    except Exception as e:
        return {}, ""

# Workspace skills
ws_skills = []
ws_path = "/home/lovable/workspace/skills"
if os.path.exists(ws_path):
    for d in sorted(os.listdir(ws_path)):
        sp = os.path.join(ws_path, d, "SKILL.md")
        if os.path.exists(sp):
            fm, body = get_yaml_frontmatter(sp)
            name = fm.get("name", d)
            desc = fm.get("description", "")
            ws_skills.append({"name": name, "description": desc, "type": "Workspace Skill", "path": d})

# Platform / Injected skills
builtin_skills = []
kn_path = "/tmp/knowledge/skill"
if os.path.exists(kn_path):
    for d in sorted(os.listdir(kn_path)):
        sp = os.path.join(kn_path, d, "SKILL.md")
        if os.path.exists(sp):
            fm, body = get_yaml_frontmatter(sp)
            name = fm.get("name", d)
            desc = fm.get("description", "")
            desc = " ".join(desc.split()) if isinstance(desc, str) else str(desc)
            builtin_skills.append({"name": name, "description": desc, "type": "Platform Capability", "path": d})

md = []
md.append("# Workspace & Platform Skills Directory (`skills.md`)")
md.append("\n**Classification**: Complete Skill Registry & Capabilities Catalog")
md.append(f"**Total Registered Skills**: {len(ws_skills) + len(builtin_skills)}")
md.append(f"**Workspace Custom Skills**: {len(ws_skills)}")
md.append(f"**Platform Specialized Skills**: {len(builtin_skills)}\n")
md.append("---\n")

md.append("## 1. Workspace Custom Skills")
md.append("Configured and managed within this workspace (viewable/editable via **Settings > Skills**).\n")
md.append("| Skill Identifier | Title / Handle | Description & Core Responsibility |")
md.append("|---|---|---|")
for s in ws_skills:
    s_name = s["name"]
    s_desc = s["description"]
    md.append(f"| `{s_name}` | **GSLLM Master Orchestrator** | {s_desc} — Converts raw software requests into end-to-end production architecture, frontend/backend engineering, database schemas, RBAC security, and QA. |")

md.append("\n---\n")
md.append("## 2. Platform Specialized Skills Directory\n")
md.append("Autonomous agent skills dynamically loaded on demand or invoked directly via `/skill:<name>`.\n")

categories = {
    "Advertising & Performance Marketing": [
        "ads", "ad-campaign-create", "ad-campaign-manage", "ad-campaign-readiness", 
        "ad-campaign-review", "ad-competitor-research", "ad-copy", "ad-image", 
        "ad-research", "ad-tracking", "ad-video", "google-ads", "meta-ads"
    ],
    "Creative, Brand & Visual Design": [
        "canvas-design", "logo-design", "social-post", "framed-screenshot", "website-brand-research"
    ],
    "High-Impact Video & Motion Production": [
        "video-router", "video-ad-cinematic", "video-ad-presenter", "video-ad-ugc", 
        "video-brand-film", "video-modules", "video-motion-graphics"
    ],
    "System Architecture, Operations & Memory": [
        "cost-optimization", "lovable-user-memory", "lovable--build-as-app", 
        "lovable--interview-me", "lovable--reach-user"
    ]
}

skills_map = {s["name"]: s for s in builtin_skills}

for cat_title, skill_names in categories.items():
    md.append(f"### {cat_title}\n")
    md.append("| Skill Identifier | Invocation | Core Scope & Capability |")
    md.append("|---|---|---|")
    for sn in skill_names:
        if sn in skills_map:
            s = skills_map[sn]
            s_name = s["name"]
            s_desc = s["description"]
            md.append(f"| `{s_name}` | `/skill:{s_name}` | {s_desc} |")
    md.append("\n")

md.append("""---

## 3. Skill Execution & Governance Model

### 3.1 Invocation Protocol
1. **Explicit Routing**: Skills can be directly targeted in chat using `/skill:<skill-name> [prompt]` (e.g. `/skill:ad-campaign-create`, `/skill:my-skill`).
2. **Context-Aware Automatic Injection**: When a user request matches the specific problem domain (such as campaign auditing or brand asset creation), the matching skill is automatically surfaced and applied.

### 3.2 Workspace Skill Management
* Custom workspace skills can be added, updated, or toggled in **Settings > Skills**.
* Workspace skills allow custom enterprise orchestration standards, organizational design guidelines, and proprietary automation pipelines to be enforced across all projects.

---
*Catalog generated and published by Lovable Platform.*
""")

output_text = "\n".join(md)
with open("/mnt/documents/skills.md", "w", encoding="utf-8") as f:
    f.write(output_text)

print("Generated /mnt/documents/skills.md successfully. Total characters:", len(output_text))
EOF
python3 /tmp/generate_skills_md.py
Output
Process ID: ba117bb8-1361-448b-bac5-ab5d2a242d52. Output may be available at /tmp/exec-logs/ba117bb8-1361-448b-bac5-ab5d2a242d52.log.

Exit code: 1

--- stderr ---
Traceback (most recent call last):
  File "/tmp/generate_skills_md.py", line 1, in <module>
    import os, yaml, re
ModuleNotFoundError: No module named 'yaml'
Show more
Parsing skills and generating skills.md
cat << 'EOF' > /tmp/generate_skills_md.py
import os, re

def parse_frontmatter(file_path):
    name = ""
    desc = ""
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            lines = f.readlines()
        in_fm = False
        desc_lines = []
        is_collecting_desc = False
        for line in lines:
            stripped = line.strip()
            if stripped == "---":
                if not in_fm:
                    in_fm = True
                    continue
                else:
                    break
            if in_fm:
                if stripped.startswith("name:"):
                    name = stripped.split("name:", 1)[1].strip().strip("\"'")
                    is_collecting_desc = False
                elif stripped.startswith("description:"):
                    raw_desc = stripped.split("description:", 1)[1].strip()
                    if raw_desc in [">-", "|", ">"]:
                        is_collecting_desc = True
                    else:
                        desc_lines.append(raw_desc.strip("\"'"))
                        is_collecting_desc = True
                elif is_collecting_desc:
                    if line.startswith("  "):
                        desc_lines.append(line.strip().strip("\"'"))
                    else:
                        is_collecting_desc = False
        desc = " ".join(desc_lines).strip()
    except Exception as e:
        pass
    return name, desc

# Workspace skills
ws_skills = []
ws_path = "/home/lovable/workspace/skills"
if os.path.exists(ws_path):
    for d in sorted(os.listdir(ws_path)):
        sp = os.path.join(ws_path, d, "SKILL.md")
        if os.path.exists(sp):
            name, desc = parse_frontmatter(sp)
            if not name:
                name = d
            ws_skills.append({"name": name, "description": desc, "type": "Workspace Skill", "path": d})

# Platform / Injected skills
builtin_skills = []
kn_path = "/tmp/knowledge/skill"
if os.path.exists(kn_path):
    for d in sorted(os.listdir(kn_path)):
        sp = os.path.join(kn_path, d, "SKILL.md")
        if os.path.exists(sp):
            name, desc = parse_frontmatter(sp)
            if not name:
                name = d
            builtin_skills.append({"name": name, "description": desc, "type": "Platform Capability", "path": d})

md = []
md.append("# Workspace & Platform Skills Directory (`skills.md`)")
md.append("\n**Classification**: Complete Skill Registry & Capabilities Catalog")
md.append(f"**Total Registered Skills**: {len(ws_skills) + len(builtin_skills)}")
md.append(f"**Workspace Custom Skills**: {len(ws_skills)}")
md.append(f"**Platform Specialized Skills**: {len(builtin_skills)}\n")
md.append("---\n")

md.append("## 1. Workspace Custom Skills")
md.append("Configured and managed within this workspace (viewable/editable via **Settings > Skills**).\n")
md.append("| Skill Identifier | Title / Handle | Description & Core Responsibility |")
md.append("|---|---|---|")
for s in ws_skills:
    s_name = s["name"]
    s_desc = s["description"]
    md.append(f"| `{s_name}` | **GSLLM Master Orchestrator** | {s_desc} — Converts raw software requests into end-to-end production architecture, frontend/backend engineering, database schemas, RBAC security, and QA. |")

md.append("\n---\n")
md.append("## 2. Platform Specialized Skills Directory\n")
md.append("Autonomous agent skills dynamically loaded on demand or invoked directly via `/skill:<name>`.\n")

categories = {
    "Advertising & Performance Marketing": [
        "ads", "ad-campaign-create", "ad-campaign-manage", "ad-campaign-readiness", 
        "ad-campaign-review", "ad-competitor-research", "ad-copy", "ad-image", 
        "ad-research", "ad-tracking", "ad-video", "google-ads", "meta-ads"
    ],
    "Creative, Brand & Visual Design": [
        "canvas-design", "logo-design", "social-post", "framed-screenshot", "website-brand-research"
    ],
    "High-Impact Video & Motion Production": [
        "video-router", "video-ad-cinematic", "video-ad-presenter", "video-ad-ugc", 
        "video-brand-film", "video-modules", "video-motion-graphics"
    ],
    "System Architecture, Operations & Memory": [
        "cost-optimization", "lovable-user-memory", "lovable--build-as-app", 
        "lovable--interview-me", "lovable--reach-user"
    ]
}

skills_map = {s["name"]: s for s in builtin_skills}

for cat_title, skill_names in categories.items():
    md.append(f"### {cat_title}\n")
    md.append("| Skill Identifier | Invocation | Core Scope & Capability |")
    md.append("|---|---|---|")
    for sn in skill_names:
        if sn in skills_map:
            s = skills_map[sn]
            s_name = s["name"]
            s_desc = s["description"]
            md.append(f"| `{s_name}` | `/skill:{s_name}` | {s_desc} |")
    md.append("\n")

md.append("""---

## 3. Skill Execution & Governance Model

### 3.1 Invocation Protocol
1. **Explicit Routing**: Skills can be directly targeted in chat using `/skill:<skill-name> [prompt]` (e.g. `/skill:ad-campaign-create`, `/skill:my-skill`).
2. **Context-Aware Automatic Injection**: When a user request matches the specific problem domain (such as campaign auditing or brand asset creation), the matching skill is automatically surfaced and applied.

### 3.2 Workspace Skill Management
* Custom workspace skills can be added, updated, or toggled in **Settings > Skills**.
* Workspace skills allow custom enterprise orchestration standards, organizational design guidelines, and proprietary automation pipelines to be enforced across all projects.

---
*Catalog generated and published by Lovable Platform.*
""")

output_text = "\n".join(md)
with open("/mnt/documents/skills.md", "w", encoding="utf-8") as f:
    f.write(output_text)

print("Generated /mnt/documents/skills.md successfully. Total characters:", len(output_text))
EOF
python3 /tmp/generate_skills_md.py
Output
Exit code: 0

--- stdout ---
Generated /mnt/documents/skills.md successfully. Total characters: 14417
Previewing skills.md content
head -n 45 /mnt/documents/skills.md
Output
Exit code: 0

--- stdout ---
# Workspace & Platform Skills Directory (`skills.md`)

**Classification**: Complete Skill Registry & Capabilities Catalog
**Total Registered Skills**: 30
**Workspace Custom Skills**: 1
**Platform Specialized Skills**: 29

---

## 1. Workspace Custom Skills
Configured and managed within this workspace (viewable/editable via **Settings > Skills**).

| Skill Identifier | Title / Handle | Description & Core Responsibility |
|---|---|---|
| `my-skill` | **GSLLM Master Orchestrator** | gsllm-master-orchestrator — Converts raw software requests into end-to-end production architecture, frontend/backend engineering, database schemas, RBAC security, and QA. |

---

## 2. Platform Specialized Skills Directory

Autonomous agent skills dynamically loaded on demand or invoked directly via `/skill:<name>`.

### Advertising & Performance Marketing

| Skill Identifier | Invocation | Core Scope & Capability |
|---|---|---|
| `ads` | `/skill:ads` | Advertising entry point, provider discovery and saved campaign navigation. Relevant when users want help with ads, compare available advertising channels, need the next step without naming a task, or want to find, show or open saved campaigns, their files or their Ads Analytics view. Specific campaign creation, readiness, management, review, research, creative and provider/API requests use their task skills. |
| `ad-campaign-create` | `/skill:ad-campaign-create` | Plan, prepare or resume an advertising campaign from its brief through channel choice, creative, measurement and launch approval. Relevant when users want to run ads, plan a campaign or record its decisions, accept a campaign proposal, or continue or prepare a saved campaign. Standalone artwork, existing-campaign edits, readiness checks and performance reviews use their task skills. |
| `ad-campaign-manage` | `/skill:ad-campaign-manage` | Apply a requested change to an existing ad campaign, including pause, resume, rename, budget or targeting adjustments, creative replacement and project import. Relevant when the user intends to change campaign state. Recommendations use ad-campaign-review; account reads and raw API questions use the provider skill. |
| `ad-campaign-readiness` | `/skill:ad-campaign-readiness` | Assess launch prerequisites for a proposed or prepared advertising campaign. Relevant when users ask whether they can activate a draft, request a pre-launch checklist, want remaining launch blockers, or want an ad checked against its landing page for message match. This task produces an assessment; campaign planning uses ad-campaign-create and live performance diagnosis uses ad-campaign-review. |
| `ad-campaign-review` | `/skill:ad-campaign-review` | Review the ad campaigns already running in connected ads accounts, covering account blockers, serving and review state, conversion tracking liveness, cost per result, and creative strength, answering in chat with an optional saved report. Triggers on review my campaign, how is my campaign doing or performing, is my ad working, are my ads getting results, check or audit my whole ads account, give my account a read-only health check, what should I look into or fix first, am I wasting money on ads, stop wasted spend, pause what is not working, the recurring scheduled campaign review, create a campaign review report file, visual or interactive campaign report, downloadable campaign performance report, save this review in Files, and /skill:ad-campaign-review. |
| `ad-competitor-research` | `/skill:ad-competitor-research` | Public competitor ads, positioning, landing pages, and search-demand evidence for original ad creative. Relevant when users ask what competitors do, what ads others like them run, who else sells this product, how competitors position their offer, or to save, reuse, or refresh competitor research for another campaign. Runs early in ad creative briefs. |
| `ad-copy` | `/skill:ad-copy` | Write or revise advertising headlines, descriptions and primar…
Show more

Publishing skills file




I'm working on publishing the skills file now. The content is well-organized and directly addresses the user's request. I'll be using workspace_files--publish_file with the specified path and title.

Saved file
Workspace & Platform Skills Directory (skills.md)
Input
path: /mnt/documents/skills.md
title: Workspace & Platform Skills Directory (skills.md)
description: Complete directory of all 30 workspace and platform skills, including the custom GSLLM Master Orchestrator and specialized capability skills across advertising, design, video, and system architecture with invocation protocols.
Output
Saved "Workspace & Platform Skills Directory (skills.md)" as workspace file skills.md (text/markdown, file ID file_2ch6jkwy769r6akzrrfyem5f4s, version 1). This result is the save confirmation — do not verify by listing the sandbox filesystem; the file is stored outside the sandbox and never appears there. When done publishing this file for the turn, show it in chat by calling show_resource_cards with type "file", this file ID, and this version. The reply is a cover note: two or three sentences on what the file is and the choices worth flagging, with no ASCII or box-drawing diagram, code block, full table, or body copy standing in for the file.
Show more
Workspace & Platform Skills Directory (skills.md)
Document
Workspace & Platform Skills Directory (skills.md)



Classification: Complete Skill Registry & Capabilities Catalog
Total Registered Skills: 30
Workspace Custom Skills: 1
Platform Specialized Skills: 29





1. Workspace Custom Skills



Configured and managed within this workspace (viewable/editable via Settings > Skills).



Skill Identifier	Title / Handle	Description & Core Responsibility
my-skill	GSLLM Master Orchestrator	gsllm-master-orchestrator — Converts raw software requests into end-to-end production architecture, frontend/backend engineering, database schemas, RBAC security, and QA.




2. Platform Specialized Skills Directory



Autonomous agent skills dynamically loaded on demand or invoked directly via /skill:<name>.



Advertising & Performance Marketing


Skill Identifier	Invocation	Core Scope & Capability
ads	/skill:ads	Advertising entry point, provider discovery and saved campaign navigation. Relevant when users want help with ads, compare available advertising channels, need the next step without naming a task, or want to find, show or open saved campaigns, their files or their Ads Analytics view. Specific campaign creation, readiness, management, review, research, creative and provider/API requests use their task skills.
ad-campaign-create	/skill:ad-campaign-create	Plan, prepare or resume an advertising campaign from its brief through channel choice, creative, measurement and launch approval. Relevant when users want to run ads, plan a campaign or record its decisions, accept a campaign proposal, or continue or prepare a saved campaign. Standalone artwork, existing-campaign edits, readiness checks and performance reviews use their task skills.
ad-campaign-manage	/skill:ad-campaign-manage	Apply a requested change to an existing ad campaign, including pause, resume, rename, budget or targeting adjustments, creative replacement and project import. Relevant when the user intends to change campaign state. Recommendations use ad-campaign-review; account reads and raw API questions use the provider skill.
ad-campaign-readiness	/skill:ad-campaign-readiness	Assess launch prerequisites for a proposed or prepared advertising campaign. Relevant when users ask whether they can activate a draft, request a pre-launch checklist, want remaining launch blockers, or want an ad checked against its landing page for message match. This task produces an assessment; campaign planning uses ad-campaign-create and live performance diagnosis uses ad-campaign-review.
ad-campaign-review	/skill:ad-campaign-review	Review the ad campaigns already running in connected ads accounts, covering account blockers, serving and review state, conversion tracking liveness, cost per result, and creative strength, answering in chat with an optional saved report. Triggers on review my campaign, how is my campaign doing or performing, is my ad working, are my ads getting results, check or audit my whole ads account, give my account a read-only health check, what should I look into or fix first, am I wasting money on ads, stop wasted spend, pause what is not working, the recurring scheduled campaign review, create a campaign review report file, visual or interactive campaign report, downloadable campaign performance report, save this review in Files, and /skill:ad-campaign-review.
ad-competitor-research	/skill:ad-competitor-research	Public competitor ads, positioning, landing pages, and search-demand evidence for original ad creative. Relevant when users ask what competitors do, what ads others like them run, who else sells this product, how competitors position their offer, or to save, reuse, or refresh competitor research for another campaign. Runs early in ad creative briefs.
ad-copy	/skill:ad-copy	Write or revise advertising headlines, descriptions and primary text. Relevant when users request ad copy, campaign text, new text variants or edits to existing ad text. Messaging angles and creative strategy drawn from research or customer evidence use ad-research; image and video production use their own skills; campaign planning and execution stay with their workflow skills.
ad-image	/skill:ad-image	Use when the user wants ad images made, improved, or reviewed, for an ad campaign or as standalone ad creative with no campaign draft or ad platform, including turning an approved creative direction into finished assets. Covers every ad image (square, landscape, or portrait; clean-image or text-bearing; social ads, promotional banners, campaign artwork) for any product — software and apps, shops, local services, courses and coaching, games, marketplaces, travel, or anything else — grounded in the real product, logo, colors, and type treatment. Plain asks count too, e.g. "make the ad images", "make me some ad images", "can you fix this ad image", or "an ad for my dental practice", and so does a rejection or a change of direction on an ad set, e.g. "make the ads look different", "redo the campaign images". The deliverable is finished advertising artwork for the user's own brand, made with the agent's image tools. Not for a source the user wants kept pixel-identical with wording or a logo placed on it, or for a user who rejects AI alteration of their image; that is ordinary sandbox work. Not relevant when the user is building or debugging an app feature that generates or edits images for that app's own customers, such as an app whose visitors upload product photos and get ad images or banners back.
ad-research	/skill:ad-research	Use when the user wants to figure out what their ad creative should be, before anything gets generated. They ask for ad concepts, competitor-ad inspiration, a brand creative brief, or a website-grounded creative strategy for a paid campaign. Plain asks count too, e.g. "how do I make good ads", "what should my ads look like", or "help me figure out my ads". Also covers source-backed messaging from customer reviews, interviews and support notes.
ad-tracking	/skill:ad-tracking	Ad tracking implementation and repair, including conversion events, consent gates, browser/server deduplication, customer matching and offline uploads. Relevant when changing app tracking code, configuring consent or testing the app's actual browser/server requests. Not for reading provider account status, metrics or diagnostics; see the provider skill. Launch readiness uses ad-campaign-readiness.
ad-video	/skill:ad-video	Multi-scene video ads made from generated scenes, for an ask that names no ad style. Relevant when the user asks for a video ad, a promo, or a commercial for a product, a brand, a shop, or an offer, with or without an ads campaign, or wants motion from ad images or a revised video ad. Offers the ad types first; covers launch films, product showcases, and ad structures no other skill names. An ask that names a creator-style (UGC), cinematic, presenter, or brand-film video goes to that style's skill. A single generated clip that is not an ad, a site's hero or background video, and code-rendered animation are outside this skill's scope.


Creative, Brand & Visual Design


Skill Identifier	Invocation	Core Scope & Capability
logo-design	/skill:logo-design	Generate, design, or refine logos using imagery, lettering, or both. Relevant when a user asks for a logo, logo concepts, a brand symbol, a text logo, or changes to an existing logo, with or without an ad campaign. Covers brand context, image prompts, inspecting results, and refining the selected image. Reusing an existing logo unchanged does not need this workflow.
social-post	/skill:social-post	Create organic social media posts, or resize and reformat existing content into posts, carousels or Stories for Instagram, Facebook, LinkedIn, TikTok or other platforms. Use
Open

I've compiled and published the complete directory into skills.md.




It catalogues all 30 available skills, spotlighting your workspace custom skill my-skill (the GSLLM Master Orchestrator for end-to-end full-stack software lifecycle execution) alongside 29 specialized platform skills spanning advertising, creative design, video production, and system optimization. Workspace skills can be configured in Settings > Skills, and any listed skill can be invoked directly with /skill:<name>.
