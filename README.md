# Prajith Kannan - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills, projects, and professional journey as a Computer Science and Business System student.

## 🚀 Live Demo

[View Live Portfolio](https://prajithps-portfolio.vercel.app/) 

## ✨ Features

- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Modern UI**: Clean, professional interface with smooth animations
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **Skill Showcase**: Animated orbit-style skills display
- **Project Gallery**: Detailed project cards with status indicators
- **Contact Section**: Multiple contact methods and social links
- **Navigation**: Smooth scrolling between sections

## 🛠️ Tech Stack

### Frontend
- **React 19.2.3** - UI framework
- **Vite 7.2.4** - Build tool and development server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Lucide React 0.562.0** - Icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg                 # Vite logo
├── src/
│   ├── assets/
│   │   └── profile.jpg          # Profile picture
│   ├── components/
│   │   ├── contact.jsx          # Contact section
│   │   ├── footer.jsx           # Footer component
│   │   ├── hero.jsx             # Hero/Landing section
│   │   ├── navbar.jsx           # Navigation bar
│   │   ├── project.jsx          # Projects showcase
│   │   └── skills.jsx           # Skills display
│   ├── App.jsx                  # Main application component
│   ├── index.css                # Global styles
│   └── main.jsx                 # Application entry point
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## 🎯 Sections Overview

### Hero Section
- Personal introduction with profile picture
- Professional objective statement
- Call-to-action buttons for navigation

### Skills Section
- Interactive orbit animation displaying technical skills
- Technologies include: React, Java, Python, Node.js, MongoDB, ML/AI

### Projects Section
- Four featured projects with descriptions and tech stacks
- Status indicators (Completed/In Progress)
- Projects include:
  - Vegetable Quality Detection (CNN, TensorFlow)
  - AI Resume Job Recommendation System (MERN, NLP)
  - Chatty - RealTime Chat Application (MERN, Socket.io)
  - Portfolio Website (React, Node.js, MongoDB)

### Contact Section
- Multiple contact methods
- Email, phone, and GitHub links
- Professional call-to-action for opportunities

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm 

### Installation

1. Clone the repository:
```bash
git clone https://github.com/prajithkannan-prog/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Profile Information
Update your personal details in `src/components/hero.jsx`:
- Name and title
- Professional objective
- Contact information
- Profile picture (replace `src/assets/profile.jpg`)

### Skills
Modify the skills array in `src/components/skills.jsx` to showcase your technical expertise.

### Projects
Update the projects array in `src/components/project.jsx` with your portfolio projects.

### Styling
The project uses Tailwind CSS for styling. Customize colors, fonts, and layouts by modifying the utility classes in the components.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
1. Run `npm run build`
2. Upload the `dist` folder to Netlify

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please reach out through the contact section.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About Me

Final year Computer Science and Business System student at Thiagarajar College of Engineering (TCE). Passionate about web development, machine learning, and creating innovative solutions to real-world problems.

**Professional Objective**: To work in a collaborative and growth-oriented environment where I can continuously improve my skills, contribute effectively to the organization's success, and take on new challenges to enhance my expertise.

## 📞 Contact

- **Email**: prajithkannan@student.tce.edu
- **Phone**: +91 74183 30997
- **GitHub**: [prajithkannan-prog](https://github.com/prajithkannan-prog)

---

⭐ If you like this portfolio, consider giving it a star!
