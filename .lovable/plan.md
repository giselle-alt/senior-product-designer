

## Hover Image Transition for "3D Marketplace" Card

This plan implements a line-art to full-color image transition on hover for the first Earlier Work card.

### What Will Change

The "3D Marketplace" card will display a line-art (monochrome) version by default and smoothly fade to the full-color version when hovered. On touch devices, the full-color image will display by default since hover states don't work naturally on touch.

### Implementation Steps

**Step 1: Add Images to Project**
- Copy `Work1-Line-art.png` to `public/images/Work1-Line-art.png`
- Copy `Work1.png` to `public/images/Work1.png`

**Step 2: Update WorkCard Component**
Add optional `hoverImage` prop to support dual-image cards:
- Add `hoverImage?: string` to the props interface
- Stack both images absolutely positioned (if hoverImage exists)
- Default image visible, hover image hidden with `opacity-0`
- On hover: fade in the hover image with `opacity-100`
- Remove the current `scale-105` hover transform (per your requirement)
- Use `transition-opacity duration-300` for smooth 300ms fade

**Step 3: Touch Device Handling**
- Use CSS media query `@media (hover: hover)` to apply hover behavior only on devices that support it
- On touch devices (no hover capability), show the full-color image by default

**Step 4: Update EarlierWorkSection Data**
Modify the first work item to include:
```
image: '/images/Work1-Line-art.png'
hoverImage: '/images/Work1.png'
```

---

### Technical Details

**WorkCard Image Container Changes:**
```tsx
<div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
  {/* Default image - line art on desktop, full-color on touch */}
  <img
    src={hoverImage || image}
    alt={title}
    className="absolute inset-0 w-full h-full object-cover md:hidden"
  />
  
  {/* Desktop: show line-art by default */}
  <img
    src={image}
    alt={title}
    className="hidden md:block absolute inset-0 w-full h-full object-cover"
  />
  
  {/* Desktop hover: fade in full-color */}
  {hoverImage && (
    <img
      src={hoverImage}
      alt={title}
      className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
  )}
</div>
```

**Touch Device Detection Approach:**
Using responsive breakpoints combined with CSS `(hover: hover)` media query ensures:
- Mobile/tablet touch devices see the full-color image
- Desktop users with mouse see the line-art and can hover for full-color

### Files to Modify

| File | Change |
|------|--------|
| `public/images/Work1.png` | New file (copy from upload) |
| `public/images/Work1-Line-art.png` | New file (copy from upload) |
| `src/components/WorkCard.tsx` | Add `hoverImage` prop and dual-image rendering |
| `src/components/EarlierWorkSection.tsx` | Update first card's image paths |

