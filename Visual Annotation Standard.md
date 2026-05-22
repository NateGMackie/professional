# Visual annotation standard

This standard defines how to annotate screenshots, CAD images, photos, and technical illustrations.  
Use these guidelines to create consistent, readable, and accessible visuals across all documentation.  

## Core principle

Each annotation type should represent one concept only.  
Avoid overlapping meanings between symbols.

| Annotation | Meaning |
| :--- | :--- |
| Circle or rectangle | Area of focus |
| Arrow | Movement or action |
| Dashed line | Alignment, path, or reference |
| Triangle | Attention or caution |
| X mark | Incorrect action or prohibited condition |

This approach helps readers interpret visuals quickly and consistently.

---

# Software screenshot annotation standard

Use these guidelines for screenshots of software interfaces and user interactions.

## Annotation elements

The following table describes the standard annotation elements for screenshots:

| Element | Purpose | Standard |
| :--- | :--- | :--- |
| Rectangle outline | Highlight a UI area | 3 px border |
| Transparent fill | Prevent obscuring UI | Always transparent |
| Arrow | Show direction or relationship | Solid line |
| Numbered marker | Identify step order or references | Filled circle |
| Text label | Identify UI elements | White fill with border |

---

## Color usage

Use a limited color system to maintain consistency and readability.

| Purpose | Recommended color |
| :--- | :--- |
| Standard instructional annotations | Orange or blue |
| Warnings or hazards | Red |
| Verification or correct state | Green |
| Informational or reference items | Blue |
| Secondary or background elements | Gray |

### Important

Do not rely on color alone to communicate meaning.

Use shapes, labels, and line styles to reinforce meaning because visuals may be:

- Printed in grayscale
- Viewed in low-light environments
- Used by readers with color blindness

---

## Focus boxes

Use focus boxes to highlight important interface elements.

Follow these guidelines:

- Use a 3 px solid border
- Use transparent fill only
- Rounded corners are optional
- Avoid covering important UI elements

---

## Numbered markers

Use numbered markers to indicate sequence or reference points.

Follow these guidelines:

- Use solid filled circles
- Use bold white text
- Do not use gradients or shadows
- Ensure markers remain readable at:
  - 100% zoom
  - Half-page print size
  - Confluence inline display size

---

## Text labels

Use labels sparingly to reduce visual clutter.

Follow these guidelines:

- Use a white fill
- Use a 1 px border matching the annotation color
- Use small internal padding
- Use sentence case

### Example

✅ *Robot configuration panel*  
❌ *ROBOT CONFIGURATION PANEL*

---

## Arrows

Use arrows only to indicate movement, flow, or relationships.

| Property | Standard |
| :--- | :--- |
| Thickness | 3 px |
| Arrowhead | Filled |
| Line style | Solid |
| Curves | Avoid unless necessary |

Straight arrows are easier to scan and interpret.

---

# Hardware, CAD, and photo annotation standard

Use these guidelines for mechanical assemblies, robotics, deployment photos, and CAD illustrations.

## Circle or rectangle = focus only

Use circles or soft rectangles to identify:

- Components
- Connection points
- Fasteners
- Cable bundles
- Adjustment points

### Important

Focus shapes should not imply movement or action.

---

## Arrow = movement or action

Use arrows only for:

- Movement
- Insertion
- Routing direction
- Removal direction
- Rotation direction

### Example actions

- Insert bolt
- Route cable
- Slide carriage
- Remove cover

---

## Dashed line = alignment, path, or reference

Use dashed lines for:

- Cable routing paths
- Alignment centerlines
- Reference axes
- Internal or hidden paths

Dashed reference lines are common in engineering and manufacturing visuals.

---

## X mark = prohibited or incorrect condition

Use X marks to identify:

- Incorrect routing
- Incorrect orientation
- Forbidden placement
- Pinch points
- Unsafe conditions

---

## Curved arrow = rotation

Use curved arrows to indicate rotation or pivoting actions.

### Examples

- Rotate knob
- Pivot arm
- Swing gate
- Turn fastener

---

## Triangle callout = caution or attention

Use triangle callouts for conditions requiring attention but not full warning-level severity.

### Examples

- Alignment sensitivity
- Calibration awareness
- Torque sequencing
- Delicate components

---

# Line style system

Use consistent line styles to reinforce meaning.

| Line style | Meaning |
| :--- | :--- |
| Solid line | Physical action |
| Dashed line | Reference or alignment |
| Dotted line | Hidden or internal path |
| Thick border | Primary focus |
| Thin border | Secondary reference |

---

# Background treatment for photos

Reduce visual clutter in complex images.

When needed:

- Reduce saturation of background elements
- Slightly blur irrelevant areas
- Darken non-essential regions
- Keep annotations visually prominent

This improves readability and reduces cognitive load.

---

# Simplified reference

| Symbol | Meaning |
| :--- | :--- |
| Circle or rectangle | Area of focus |
| Arrow | Movement or action |
| Dashed line | Alignment or path |
| Triangle | Attention or caution |
| X mark | Incorrect action or condition |

This standard aligns with the modular, accessibility-focused, and reader-centric principles defined in the documentation style guide.
