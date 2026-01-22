
# Blog Page Structure Implementation Plan

## Overview
Transform the current "under construction" blog page into a fully functional, responsive blog grid layout. The design will incorporate the same holographic hover effects used on the homepage chapter cards, maintaining visual consistency across the site.

---

## Implementation Steps

### 1. Create BlogPostCard Component
**New file:** `src/components/BlogPostCard.tsx`

A reusable card component for individual blog posts with:
- **Props interface:**
  - `title` (string) - Post title
  - `category` (string) - One of: "AI in design", "Data-informed design", "Decision-making", "Product thinking"
  - `image` (string) - Thumbnail image URL
  - `href` (string) - Link to the blog post
  - `delay` (number, optional) - Animation stagger delay
  - `featured` (boolean, optional) - For potential future styling of featured posts

- **Visual structure:**
  - Thumbnail image with 4:3 or 16:10 aspect ratio
  - Category label (styled as a badge with primary accent color)
  - Title below the image
  - Consistent with existing card styling (rounded-2xl, border styling)

- **Hover effects:**
  - Holographic projection effect (same as ChapterCard)
  - Shimmer ring, pulsing glow, scan lines, floating particles
  - Desktop-only using `hidden md:block`
  - Card glow shadow on hover
  - Image subtle scale transform

- **Animations:**
  - Framer Motion entrance animation (fade + slide up)
  - Staggered delays for grid items

---

### 2. Update Blog Page
**File:** `src/pages/Blog.tsx`

**Changes:**
- Remove the "Coming Soon" cinematic-card section
- Expand container width from `max-w-4xl` to `max-w-7xl` for the grid
- Add placeholder blog posts data array with 6-9 sample posts
- Implement responsive grid layout:
  ```
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  ```
- Maintain existing page structure (Navigation, Footer, particles, effects)

**Placeholder data structure:**
```typescript
const blogPosts = [
  {
    id: 1,
    title: "Placeholder Post Title",
    category: "AI in design",
    image: "/placeholder.svg",
    href: "/blog/post-slug",
    featured: true,
  },
  // ... more posts
];
```

---

### 3. Category Badge Styling
Use the existing Badge component or create inline styling:
- Background: `bg-primary/10` or `bg-card`
- Text: `text-primary` with uppercase tracking
- Small, pill-shaped design
- Categories: "AI in design", "Data-informed design", "Decision-making", "Product thinking"

---

### 4. Responsive Grid Specifications

| Breakpoint | Columns | Gap |
|------------|---------|-----|
| Mobile (<768px) | 1 column | 24px (gap-6) |
| Tablet (768px-1024px) | 2 columns | 24px (gap-6) |
| Desktop (>1024px) | 3 columns | 32px (gap-8) |

---

### 5. Typography Hierarchy
- **Page title:** `font-serif text-4xl md:text-6xl lg:text-7xl` (existing)
- **Page subtitle:** `text-muted-foreground text-lg` (existing)
- **Card title:** `font-display text-xl md:text-2xl`
- **Category label:** `text-xs uppercase tracking-widest text-primary`

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/BlogPostCard.tsx` | Create new |
| `src/pages/Blog.tsx` | Modify |

---

## Visual Reference

The BlogPostCard will follow this structure:

```text
+----------------------------------+
|                                  |
|         [Thumbnail Image]        |
|          aspect-[4/3]            |
|                                  |
+----------------------------------+
|  [Category Badge]                |
|                                  |
|  Post Title Here                 |
|  (2-3 lines max)                 |
|                                  |
+----------------------------------+
```

The grid layout on desktop:

```text
+----------+  +----------+  +----------+
|  Post 1  |  |  Post 2  |  |  Post 3  |
| (Latest) |  |          |  |          |
+----------+  +----------+  +----------+

+----------+  +----------+  +----------+
|  Post 4  |  |  Post 5  |  |  Post 6  |
|          |  |          |  |          |
+----------+  +----------+  +----------+
```

---

## Notes
- Placeholder images will use `/placeholder.svg` or similar
- Links will point to placeholder routes (e.g., `/blog/post-1`)
- The holographic effect is identical to ChapterCard implementation
- Animation delays will be staggered (0.1s increments) for visual polish
