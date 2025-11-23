# ROEL Photography Portfolio

A modern, visually stunning photography portfolio website built with Next.js, featuring dynamic GitHub project integration, light/dark themes, and sophisticated animations.

![ROEL Photography Portfolio](public/images/hero-crowd.png)

## 🌟 Features

- **Modern UI/UX**: Clean, minimalist design with vibrant teal accents and dark mode-first approach
- **Dynamic Content**: Automatically fetches and displays projects from GitHub (@subash3650)
- **Smooth Animations**: Powered by Framer Motion for engaging user experiences
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Theme Toggle**: Seamless light/dark mode switching with next-themes
- **Smooth Scrolling**: React Scroll integration for silky-smooth navigation
- **Parallax Effects**: Eye-catching parallax scrolling on hero section
- **Certificate Management**: Display professional certificates from Google Drive
- **Admin Panel**: Simple upload interface for managing certificates and projects
- **SEO Optimized**: Proper meta tags, semantic HTML, and Open Graph support

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes
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
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Main homepage
│   │   ├── globals.css        # Global styles & animations
│   │   └── upload-certificate/ # Admin upload page
│   ├── components/            # React components
│   │   ├── Navbar.tsx         # Navigation with theme toggle
│   │   ├── Hero.tsx           # Hero section with parallax
│   │   ├── Portfolio.tsx      # Projects grid
│   │   ├── ProjectCard.tsx    # Individual project card
│   │   ├── Services.tsx       # Services section
│   │   ├── About.tsx          # About section
│   │   ├── Certificates.tsx   # Certificates grid
│   │   ├── CertificateCard.tsx # Individual certificate card
│   │   └── Footer.tsx         # Footer component
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts           # Shared interfaces
│   └── utils/                 # Utility functions
│       └── github.ts          # GitHub API integration
├── public/
│   ├── data/
│   │   └── certificates.json  # Static certificate data
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
Edit the About section in `src/components/About.tsx`:
- Update bio text
- Change contact information
- Update social media links

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

## 🌐 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project on Vercel
3. Deploy with zero configuration

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
- Smooth fade-in animations
- Scroll indicator

### Portfolio Section
- Auto-fetches from GitHub API
- Tech stack badges
- Hover effects with 3D transforms
- Links to repository and live demos

### Services Section
- Icon-based service cards
- Hover animations
- Gradient backgrounds

### About Section
- Professional photo with decorative elements
- Interactive skill cards
- Social media integration
- Contact information

### Certificates Section
- Grid layout with hover effects
- Google Drive integration
- Company badges
- Issue date display

### Admin Panel
- Client-side authentication
- Certificate upload form
- Project management form
- Success/error notifications

## 🎯 Performance

- Optimized images with Next.js Image component
- Server-side data fetching for faster initial load
- Lazy loading for components
- CSS animations for smooth performance
- Minimal bundle size with tree-shaking

## 🐛 Troubleshooting

### Images not loading
- Check `next.config.ts` remote patterns
- Verify image paths in `public/` directory
- Ensure Google Drive links have proper sharing permissions

### GitHub API rate limiting
- GitHub API has a rate limit of 60 requests/hour for unauthenticated requests
- For higher limits, add a GitHub token (not included for security)

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**ROEL** (Subash)
- GitHub: [@subash3650](https://github.com/subash3650)
- Portfolio: [Live Site]

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- All open-source contributors

---

Made with ❤️ by ROEL
