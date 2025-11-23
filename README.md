# Subash's Portfolio

A modern, dynamic full-stack developer portfolio website built with Next.js, featuring automatic GitHub project integration, professional certificates, smooth animations, and a stunning dark-themed UI.

![Subash's Portfolio](public/images/hero-crowd.png)

## 🌟 Features

- **Modern UI/UX**: Sleek, dark-mode design with vibrant teal accents and glassmorphic effects
- **Dynamic GitHub Integration**: Automatically fetches and displays projects from GitHub (@subash3650)
- **Smart Pagination**: Projects and certificates sections show only 5 items initially with "See More" functionality to reduce scroll fatigue
- **Smooth Animations**: Powered by Framer Motion for engaging user experiences
- **Resume Download**: Direct download button with Google Drive integration
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Scrolling**: React Scroll integration for silky-smooth navigation
- **Parallax Effects**: Eye-catching parallax scrolling on hero section
- **Certificate Management**: Display professional certificates from Google Drive
- **Admin Panel**: Simple upload interface for managing certificates
- **SEO Optimized**: Proper meta tags, semantic HTML, and Open Graph support

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router) with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **HTTP Client**: Axios
- **Fonts**: Outfit & Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/subash3650/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
MyPortfolio/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Main homepage
│   │   ├── globals.css        # Global styles & animations
│   │   └── upload-certificate/ # Admin upload page
│   ├── components/            # React components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Hero.tsx           # Hero section with CTA buttons
│   │   ├── Portfolio.tsx      # Projects grid with pagination
│   │   ├── ProjectCard.tsx    # Individual project card
│   │   ├── Services.tsx       # Tech services section
│   │   ├── About.tsx          # About section
│   │   ├── Certificates.tsx   # Certificates grid with pagination
│   │   ├── CertificateCard.tsx # Individual certificate card
│   │   └── Footer.tsx         # Footer component
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts           # Shared interfaces
│   └── utils/                 # Utility functions
│       └── github.ts          # GitHub API integration
├── public/
│   ├── data/
│   │   └── certificates.json  # Certificate data
│   └── images/                # Static images
│       ├── hero-crowd.png
│       ├── about-photo.png
│       └── geometric-pattern.svg
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Customization

### Update GitHub Username
Edit `src/utils/github.ts`:
```typescript
const GITHUB_USERNAME = 'your-username'; // Change this
```

### Add Certificates
Edit `public/data/certificates.json` or use the admin panel at `/upload-certificate`:

**Admin Credentials**:
- Username: `subash`
- Password: `subash@123`

> ⚠️ **Security Warning**: The admin panel uses basic client-side authentication and is NOT secure for production use with sensitive data. Use server-side authentication for production deployments.

### Update Personal Info
Edit the components directly:
- **Hero Section**: `src/components/Hero.tsx` - Update tagline, description, and resume link
- **About Section**: `src/components/About.tsx` - Update bio, photo, contact info, and social media links
- **Services Section**: `src/components/Services.tsx` - Modify tech services and skills

### Change Theme Colors
Edit `src/app/globals.css`:
```css
:root {
  --teal-accent: #2B8A8A; /* Change to your preferred color */
}
```

## 📋 Certificate Setup

Certificates are stored on Google Drive. To add a certificate:

1. Upload the certificate PDF/image to Google Drive
2. Get the shareable link (set to "Anyone with the link can view")
3. Extract the FILE_ID from the URL: `https://drive.google.com/file/d/FILE_ID/view`
4. Use the admin panel or manually edit `public/data/certificates.json`:

```json
{
  "id": "unique-id",
  "name": "Certificate Name",
  "company": "Issuing Organization",
  "description": "Brief description",
  "driveUrl": "https://drive.google.com/file/d/FILE_ID/view",
  "issueDate": "2024-01",
  "thumbnailUrl": "optional-thumbnail-url"
}
```

## 📥 Resume Configuration

The resume download button in the Hero section uses Google Drive. To update:

1. Upload your resume PDF to Google Drive
2. Get the shareable link (set to "Anyone with the link can view")
3. Extract the FILE_ID from the URL: `https://drive.google.com/file/d/FILE_ID/view`
4. Update `src/components/Hero.tsx`:
   ```tsx
   href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
   ```

## 🌐 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project on Vercel
3. Connect your GitHub repository
4. Vercel will automatically deploy on every push to the main/master branch

### Automatic Deployments
Once connected to Vercel:
- **Push to any branch**: Creates a preview deployment
- **Push to master/main**: Triggers production deployment
- Changes are typically live within 1-2 minutes

### Environment Variables (Optional)
If needed, add to `.env.local`:
```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

## 🔧 Configuration

### Next.js Image Optimization
The `next.config.ts` is pre-configured to allow images from:
- via.placeholder.com (project placeholders)
- drive.google.com (certificates)
- avatars.githubusercontent.com (GitHub avatars)
- raw.githubusercontent.com (GitHub content)

Add more domains as needed in `next.config.ts`.

## 📸 Features Breakdown

### Hero Section
- Parallax scrolling background
- Animated geometric overlay
- Gradient text effects
- Three CTA buttons: "Checkout My Work", "Learn More", and "Get My Resume"
- Smooth fade-in animations

### Portfolio Section
- Auto-fetches from GitHub API (displays public repositories)
- **Smart Pagination**: Shows 5 projects initially, with "See More" button to load remaining projects
- Tech stack badges for each project
- Hover effects with 3D transforms
- Links to repository and live demos

### Services Section
- Tech services overview (Web Development, AI/ML, Full-Stack Development, Problem Solving)
- Icon-based service cards
- Hover animations with gradient backgrounds

### About Section
- Professional bio highlighting full-stack development and AI/ML expertise
- Skill cards (Python, React, Node.js, AI/ML, etc.)
- Contact information and social media links
- LeetCode profile integration

### Certificates Section
- **Smart Pagination**: Shows 5 certificates initially, with "See More" button to load remaining certificates
- Grid layout with hover effects
- Google Drive integration for certificate viewing
- Company/issuer badges
- Issue date display

### Admin Panel
- Client-side authentication
- Certificate upload form
- Success/error notifications

## 🎯 Performance

- Optimized images with Next.js Image component
- Client-side data fetching for dynamic content
- Lazy loading for components
- CSS animations for smooth performance
- Minimal bundle size with tree-shaking
- Turbopack for faster development builds

## 🐛 Troubleshooting

### Images not loading
- Check `next.config.ts` remote patterns
- Verify image paths in `public/` directory
- Ensure Google Drive links have proper sharing permissions ("Anyone with the link can view")

### GitHub API rate limiting
- GitHub API has a rate limit of 60 requests/hour for unauthenticated requests
- For higher limits, add a GitHub personal access token (not included for security)

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Vercel deployment not updating
- Check Vercel dashboard for deployment status
- Ensure GitHub repository is connected to Vercel
- Manual redeploy: Vercel Dashboard → Deployments → Redeploy

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Subash**
- GitHub: [@subash3650](https://github.com/subash3650)
- Portfolio: [Live on Vercel]
- Bio: Full-stack engineer and aspiring founder building AI-driven web products

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Vercel for seamless deployment
- All open-source contributors

## 🆕 Recent Updates

### Latest Features (November 2025)
- ✅ Added smart pagination for Projects section (show 5 initially)
- ✅ Added smart pagination for Certificates section (show 5 initially)
- ✅ Added "Get My Resume" download button in Hero section
- ✅ Improved user experience by reducing scroll fatigue

---

Made with ❤️ by Subash | Born to stand out not to fit in
