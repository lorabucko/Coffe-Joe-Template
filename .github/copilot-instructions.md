# Copilot Instructions for WebStudio Project

## Project Overview

This is a static HTML/CSS website for "WebStudio", a fictional web development company. The site consists of a single page (`index.html`) showcasing company services, team, and portfolio items.

## Architecture

- **Structure**: Flat file structure with `index.html` in root, `css/styles.css` for all styles, and `images/` for assets.
- **No JavaScript**: Pure HTML and CSS implementation.
- **External Dependencies**: Google Fonts (Raleway, Roboto), Modern Normalize CSS from CDN.

## Key Patterns and Conventions

### CSS Variables

Use predefined CSS variables for colors and fonts:

- Colors: `--iris` (#4d5ae5), `--navy-blue` (#2e2f42), `--ocean` (#404bbf), etc.
- Fonts: `--font-family` ("Roboto"), `--second-family` ("Raleway")

Example:

```css
color: var(--iris);
font-family: var(--second-family);
```

### Layout System

- **Container**: `.container` class provides max-width 1158px with 15px horizontal padding.
- **Sections**: Use `.section` class for 120px top/bottom padding.
- **Flexbox**: Primary layout method for navigation, lists, and cards.

### Class Naming

Descriptive, component-based names:

- Headers: `.page-header`, `.header-container`
- Navigation: `.header-nav`, `.nav-list`, `.nav-item`, `.nav-link`
- Sections: `.hero-image`, `.features`, `.team`, `.portfolio`
- Cards: `.team-card`, `.portfolio-item`

### Accessibility

- Use `.visually-hidden` class for screen reader-only headings (e.g., `<h2 class="visually-hidden section-title">Our Features</h2>`)

### Images and Assets

- Store in `./images/` directory
- Reference as `./images/filename.jpg`
- Include alt text for all images
- Specify width/height attributes for performance

### Logo Implementation

Split logo text into spans for color differentiation:

```html
<span class="logo-web">Web</span><span class="logo-studio">Studio</span>
```

### Interactive Elements

- Buttons and links use `:hover` and `:focus` states
- No JavaScript, so all interactions via CSS

## Development Workflow

- Edit `index.html` and `css/styles.css` directly
- Open `index.html` in browser to preview
- No build process required

## Common Sections

- **Hero**: Background image with overlay, centered title and button
- **Features**: 4-column flex list with icons (implied), headings, and descriptions
- **Team**: 4-column flex cards with photos, names, and roles
- **Portfolio**: 3-column grid of project thumbnails with titles and categories
- **Footer**: Logo and descriptive text

## File References

- [index.html](index.html): Main page structure
- [css/styles.css](css/styles.css): Complete stylesheet with variables and component styles
- [images/](images/): All visual assets</content>
  <parameter name="filePath">c:\Projects\goit-markup-hw-04\.github\copilot-instructions.md
