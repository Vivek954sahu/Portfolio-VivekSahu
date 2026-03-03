# Vivek Sahu's Portfolio

A modern, responsive personal portfolio website showcasing professional projects, skills, and experience as a Backend and MERN developer. Built with React, Vite, and cutting-edge web technologies.

## 🌟 Features

- **Responsive Design** – Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme Toggle** – Persistent theme preference with localStorage
- **Smooth Animations** – Framer Motion animations and scroll-triggered fade-ins for engaging UX
- **Interactive Floating Icons** – Animated tech stack icons floating across the hero section
- **Project Showcase** – 3D tilt effects on project cards with links to GitHub and live demos
- **Professional Sections** – Hero, About, Projects, Contact, and Footer
- **Contact Form** – Integration with Sonner for toast notifications
- **Social Links** – Quick access to LinkedIn, GitHub, and WhatsApp
- **Optimized Performance** – Built with Vite for fast development and production builds

## 🛠️ Technology Stack

### Frontend
- **React 19** – Latest React framework
- **Vite 7** – Lightning-fast build tool
- **Tailwind CSS 4** – Utility-first CSS framework
- **Framer Motion** – Production-ready animation library
- **React Icons** – Comprehensive icon library
- **Styled Components** – CSS-in-JS for component styling

### Development Tools
- **ESLint** – Code quality and consistency
- **Vite Config** – Optimized build configuration
- **React Router v7** – Modern routing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio-Viveksahu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

6. **Run ESLint**
   ```bash
   npm run lint
   ```

## 📁 Project Structure

```
Portfolio-Viveksahu/
├── src/
│   ├── components/
│   │   ├── About.jsx           # About section with skills
│   │   ├── Contact.jsx         # Contact form
│   │   ├── FloatingIcons.jsx   # Animated floating tech icons
│   │   ├── Footer.jsx          # Footer section
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero/landing section
│   │   ├── Projects.jsx        # Project showcase with 3D effects
│   │   ├── ScrollFadeIn.jsx    # Scroll animation wrapper
│   │   └── ThemeToggle.jsx     # Dark/light theme switcher
│   ├── assets/                 # Images and illustrations
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/                      # Static files
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md                    # This file
```

## 🎯 Key Components

### Hero Section
- Introduction with name and title
- Social media links (LinkedIn, GitHub, WhatsApp)
- Animated tech stack floating icons
- Developer illustration

### About Section
- Professional background
- Skills and expertise showcase
- Tech stack visualization

### Projects Section
- Showcase of 3 major projects:
  - **CodeHuddle** – Remote coding interview platform
  - **KnowShare** – Collaborative knowledge sharing platform
  - **Currency Converter** – Real-time currency conversion tool
- 3D tilt effects on hover
- Links to GitHub repositories and live demos
- Tech stack for each project

### Contact Section
- Contact form with validation
- Toast notifications
- Direct communication options

### Animations
- **ScrollFadeIn** – Elements fade in as they scroll into view
- **FloatingIcons** – Random floating animation with interactive shrink effect
- **Project Cards** – 3D perspective tilt on mouse movement

## 🎨 Theme System

- **Default Theme** – Dark mode
- **Persistent** – Theme preference saved to localStorage
- **Toggle** – Easy switch in header navigation
- **Light & Dark** – Complete color scheme for both themes

## 🚀 Deployment

The project is optimized for deployment on:
- **Vercel** 

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🧰 Development Workflow

### Adding New Sections
1. Create component in `src/components/`
2. Import in `App.jsx`
3. Use `ScrollFadeIn` for animations
4. Apply Tailwind CSS classes for styling

### Modifying Projects
Edit the `projects` array in Projects.jsx to update project showcase

### Updating Skills
Modify tech stack arrays in component files or create a centralized config

## ✨ Future Enhancements

- [ ] Interactive experience timeline
- [ ] Testimonials/reviews carousel
- [ ] Enhanced contact form with email integration
- [ ] Performance optimization with code splitting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Connect

- **LinkedIn** – [Vivek Sahu](https://www.linkedin.com/in/vivek-sahu-335258297/)
- **GitHub** – [@Vivek954sahu](https://github.com/Vivek954sahu)
- **WhatsApp** – [Message](https://wa.me/7698238008)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Vivek Sahu**
- Backend Developer | MERN Developer
- Building scalable systems with Node.js, Express, and MongoDB
- Expanding into React for full-stack development

---

<div align="center">
  Made with ❤️ using React, Vite, and Tailwind CSS
</div>
