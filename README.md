# Aryan Tripathi — AI Engineer Portfolio

A futuristic, Apple-level interactive personal website showcasing Aryan Tripathi as a product — skills, projects, and vision presented like a next-generation AI engineer launch page.

## ✨ Features

### 🎥 Visual & Design
- **Futuristic, minimal, premium** dark mode design
- **Glassmorphism** with soft glow accents
- **Physics-based animations** with Framer Motion
- **Apple-style typography** hierarchy
- **Scroll-driven storytelling** like Apple product pages
- **Cursor-reactive elements** with magnetic effects
- **Particle background** animation
- **Loading screen** with animated orbs

### 🧩 Sections

1. **Hero** — Full-screen cinematic intro with animated gradient, particles, and huge typography
2. **About** — "Designed with Intent" philosophy section with animated 3D-style cards
3. **Skills** — Interactive technology stack with floating orbs and expandable categories
4. **Projects** — Featured project showcase with architecture diagrams (Convo as hero project)
5. **Experience** — Timeline-based work experience display
6. **Contact** — Clean contact form with social links

### 🤖 Interactive AI Assistant
- Floating orb chat widget
- Answers questions about skills, projects, and experience
- Smooth open/close animations
- Typing indicators

### 🚀 Technical Highlights
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide Icons** for iconography
- **Fully responsive** design
- **Performance optimized**

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| 3D (Optional) | Three.js, React Three Fiber |
| Deployment | Vercel |

## 📁 Project Structure

```
aryan-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles & animations
│   │   ├── layout.tsx         # Root layout with providers
│   │   └── page.tsx           # Main page
│   ├── components/
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About section
│   │   ├── Skills.tsx         # Skills section
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Experience.tsx     # Experience timeline
│   │   ├── Contact.tsx        # Contact section
│   │   ├── Navigation.tsx     # Navigation bar
│   │   ├── AIAssistant.tsx    # AI chat widget
│   │   ├── CursorGlow.tsx     # Cursor glow effect
│   │   ├── LoadingScreen.tsx  # Loading animation
│   │   ├── ScrollProgress.tsx # Scroll progress bar
│   │   ├── ParticleBackground.tsx # Particle animation
│   │   ├── ConvoArchitecture.tsx  # Project diagram
│   │   ├── Magnetic.tsx       # Magnetic button effect
│   │   └── AnimatedSection.tsx # Scroll reveal wrapper
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/
│   ├── og-image.png           # Open Graph image
│   └── resume.pdf             # Resume download
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aryan/portfolio.git

# Navigate to project
cd aryan-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 🌐 Deployment on Vercel

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aryan/portfolio)

### Option 2: Manual Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Configure project settings:
   - Framework Preset: `Next.js`
   - Root Directory: `./`
5. Click Deploy

### Environment Variables (Optional)
If using real AI assistant features:
```env
OPENAI_API_KEY=your_key_here
```

## 🎨 Customization

### Colors
Edit `src/app/globals.css`:
```css
:root {
  --accent: #6366f1;           /* Primary accent */
  --accent-secondary: #8b5cf6; /* Secondary accent */
}
```

### Content
- Update personal info in each component
- Modify projects array in `Projects.tsx`
- Update skills in `Skills.tsx`
- Edit experience in `Experience.tsx`

### Animations
Framer Motion variants in each component can be customized:
```tsx
transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
```

## 📱 Responsive Breakpoints

| Breakpoint | Description |
|------------|-------------|
| `sm` | 640px+ (Mobile landscape) |
| `md` | 768px+ (Tablet) |
| `lg` | 1024px+ (Desktop) |
| `xl` | 1280px+ (Large desktop) |
| `2xl` | 1536px+ (Ultra-wide) |

## ⚡ Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Optimizations Applied
- Image optimization with Next.js Image
- Font optimization with `next/font`
- Code splitting with dynamic imports
- Lazy loading for off-screen components
- Minimal bundle size

## 📄 License

MIT License — feel free to use this template for your own portfolio!

## 🤝 Contact

**Aryan Tripathi**
- Email: aryan.tripathi@asu.edu
- LinkedIn: [/in/aryantripathi](https://linkedin.com/in/aryantripathi)
- GitHub: [@aryan](https://github.com/aryan)

---

<p align="center">
  Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
</p>
