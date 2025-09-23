import { Project, Skill, Testimonial, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "TypeScript", "Firebase", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard that provides detailed weather information, forecasts, and interactive maps with location-based services.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "API Integration", "Chart.js", "CSS Grid"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media management with data visualization, engagement tracking, and automated reporting.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Vue.js", level: 80, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  
  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 75, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Daneku Dominic Kwame Selasi",
    role: "Project Manager",
    company: "TechCorp Inc.",
    content: "Working with Eunice was an absolute pleasure. Her attention to detail and ability to deliver high-quality code on time made our project a huge success.",
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    name: "Christopher Mensah",
    role: "Lead Developer",
    company: "REF Engineering and Construction Limited",
    content: "Eunice's technical expertise and problem-solving skills are outstanding. She consistently delivers innovative solutions and is a great team player.",
    avatar: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    name: "Boadi Linda",
    role: "Design Director",
    company: "Creative Agency",
    content: "The collaboration with Eunice was seamless. She perfectly translated our designs into responsive, performant web applications that exceeded our expectations.",
    avatar: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  { name: "Email", url: "mailto:nanaamakorantengma@gmail.com", icon: "Mail" }
];