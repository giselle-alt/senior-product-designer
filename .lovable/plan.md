

# Chapter Header Component Implementation Plan

## Overview
Create a new reusable `ChapterHeader` component that displays project context (Client, Role, Date, and Tools Used) at the top of each chapter page, positioned between the back link and the chapter title.

---

## Component Design

### Visual Structure
```text
+------------------------------------------------------------------+
|  TRX App  ·  Senior Product Designer  ·  Nov 2024 – Dec 2024     |
|                                                                   |
|  Tools Used: Jotform, Google Sheets, Figma, ChatGPT              |
+------------------------------------------------------------------+
                    ↓ subtle divider line ↓
+------------------------------------------------------------------+
|  CHAPTER 1                                                        |
|  The Problem                                                      |
+------------------------------------------------------------------+
```

### Styling Approach
- **Client**: Bold or primary accent color (`text-primary font-medium`)
- **Role & Date**: Secondary weight/size (`text-muted-foreground text-sm`)
- **Separator dots**: Subtle middle-dot character (·) between metadata items
- **Tools Used**: Smaller text, displayed on a second line, optional display
- **Divider**: Thin line using `border-border/30` below the header block
- **Responsive**: Stack elements vertically on mobile, inline on desktop

---

## Implementation Steps

### 1. Create ChapterHeader Component
**New file:** `src/components/ChapterHeader.tsx`

**Props interface:**
```typescript
interface ChapterHeaderProps {
  client: string;
  role: string;
  date: string;
  tools?: string[];  // Optional array for future flexibility
}
```

**Component structure:**
- Framer Motion wrapper for consistent entrance animation
- Flex layout with responsive stacking
- Client emphasized with `text-primary` or `font-medium`
- Role and Date in `text-muted-foreground text-sm`
- Tools displayed on a separate line with label
- Bottom border as subtle divider (`border-b border-border/30 pb-8 mb-8`)

### 2. Update Chapter Pages
**Files to modify:**
- `src/pages/Chapter1.tsx`
- `src/pages/Chapter2.tsx`
- `src/pages/Chapter3.tsx`

**Changes:**
- Import the new `ChapterHeader` component
- Insert it after the back link, before the existing chapter header
- Pass the specific data for each chapter:

| Chapter | Client | Role | Date | Tools |
|---------|--------|------|------|-------|
| Chapter 1 | TRX App | Senior Product Designer | Nov 2024 – Dec 2024 | Jotform, Google Sheets, Figma, ChatGPT |
| Chapter 2 | TRX App | Senior Product Designer | Apr 2025 – May 2025 | Figma, Maze, Claude AI |
| Chapter 3 | TRX App | Senior Product Designer | Sep 2025 – Nov 2025 | Figma, Maze, ChatGPT, MidJourney |

---

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Mobile (<768px) | Stack vertically: Client on first line, Role on second line, Date on third line, Tools below |
| Desktop (768px+) | Inline with dot separators: `Client · Role · Date` with Tools below |

---

## Typography Hierarchy

| Element | Classes |
|---------|---------|
| Client | `text-primary font-medium text-sm md:text-base` |
| Role | `text-muted-foreground text-sm` |
| Date | `text-muted-foreground text-sm` |
| Separator | `text-muted-foreground/50 mx-2 hidden md:inline` |
| Tools Label | `text-muted-foreground/70 text-xs uppercase tracking-wider` |
| Tools List | `text-muted-foreground text-xs md:text-sm` |
| Divider | `border-b border-border/30` |

---

## Animation
- Use Framer Motion consistent with existing page animations
- Animate in with `opacity: 0 → 1` and `y: 20 → 0`
- Delay slightly after the back link animation (delay: 0.05s or 0.1s)

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/ChapterHeader.tsx` | Create new |
| `src/pages/Chapter1.tsx` | Modify - add ChapterHeader |
| `src/pages/Chapter2.tsx` | Modify - add ChapterHeader |
| `src/pages/Chapter3.tsx` | Modify - add ChapterHeader |

---

## Future Extensibility
The component will be designed to easily accommodate additional fields:
- **Outcome/Impact**: Add an optional `outcome` prop
- **Additional metadata**: The props interface can be extended without breaking existing usage
- **Conditional rendering**: Tools section already optional via the `tools?` prop

