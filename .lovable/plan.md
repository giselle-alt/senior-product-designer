

# Chapter Metadata - Left Sidebar Layout

## Overview
Reposition the ChapterHeader component to display as a left-side metadata panel that sits next to the chapter title and scrolls with the content.

---

## Visual Structure

```text
+---------------------------+----------------------------------------+
| Project Details           |  CHAPTER 1                             |
|                           |  The Problem                           |
| Client: TRX App           |                                        |
| Role: Senior Product...   |  At the end of 2024, the product had   |
| Date: Nov 2024 – Dec 2024 |  two clear issues...                   |
|                           |                                        |
| Tools Used:               |                                        |
| • Jotform - surveys       |                                        |
| • Google Sheets - ...     |                                        |
| • Figma - wireframes...   |                                        |
| • ChatGPT - research...   |                                        |
+---------------------------+----------------------------------------+
```

---

## Implementation Approach

### 1. Create Two-Column Layout in Chapter Pages

Wrap the chapter header section in a flex container with two columns:
- **Left column**: ChapterHeader metadata (narrower, ~200-250px)
- **Right column**: Chapter title and main content

```text
<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
  <!-- Left: Metadata -->
  <aside className="lg:w-64 flex-shrink-0">
    <ChapterHeader ... />
  </aside>
  
  <!-- Right: Chapter title -->
  <div className="flex-1">
    <span>Chapter 1</span>
    <h1>The Problem</h1>
  </div>
</div>
```

### 2. Update ChapterHeader Component

**File:** `src/components/ChapterHeader.tsx`

Changes:
- Remove current horizontal inline layout
- Display metadata in a **vertical stacked list**
- Add "Project Details" heading
- Update tools prop to accept `{ name: string, description: string }[]`
- Display each tool on its own line with description

**New Structure:**
| Element | Style |
|---------|-------|
| Heading | "Project Details" - `text-xs font-medium text-primary uppercase tracking-wider` |
| Labels | `text-muted-foreground/70 text-sm` |
| Values | `text-foreground text-sm` (Client in `text-primary`) |
| Tools | Bulleted list with name + description |
| Container | Card with `bg-background/50 backdrop-blur-sm border border-border/20 p-4 rounded-lg` |

### 3. Update Chapter Pages

**Files:** `src/pages/Chapter1.tsx`, `src/pages/Chapter2.tsx`, `src/pages/Chapter3.tsx`

Changes:
- Create flex container around ChapterHeader and chapter title
- Move chapter title into the right column
- Update tools data with descriptions

**Chapter Data:**

| Chapter | Tools |
|---------|-------|
| Chapter 1 | Jotform (surveys), Google Sheets (feedback aggregation), Figma (wireframes and stakeholder presentations), ChatGPT (research synthesis) |
| Chapter 2 | Figma (high-fi prototypes and final designs), Maze (task-based usability testing), Claude AI (copy/UX microcopy) |
| Chapter 3 | Figma (interactive prototypes and design updates), Maze (A/B testing), ChatGPT (idea challenger), MidJourney (moodboards and visual experimentation) |

---

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Mobile (<1024px) | Stack vertically - metadata above chapter title |
| Desktop (1024px+) | Side-by-side - metadata on left, title on right |

---

## Files to Modify

| File | Action |
|------|--------|
| `src/components/ChapterHeader.tsx` | Update to vertical list layout, add Tool interface |
| `src/pages/Chapter1.tsx` | Add flex wrapper, update tools data |
| `src/pages/Chapter2.tsx` | Add flex wrapper, update tools data |
| `src/pages/Chapter3.tsx` | Add flex wrapper, update tools data |

