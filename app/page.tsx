'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { 
  Search, 
  PenTool, 
  BarChart, 
  Globe, 
  MessageCircle, 
  Mail, 
  Linkedin, 
  Github, 
  Facebook, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  ArrowRight,
  FileText,
  Share2
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-blue-600' : 'text-blue-600'}`}>
            Shams<span className="text-gray-900">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Digital Marketing Expert
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Elevating Brands Through <span className="text-blue-600">Strategic Marketing</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
              Hi, I&apos;m Shams Ul Rehman. I specialize in SEO, content strategy, and digital growth. I help businesses increase their online visibility and drive high-converting traffic.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                Let&apos;s Talk <ArrowRight size={18} />
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image 
                src="https://picsum.photos/seed/marketing/800/1000" 
                alt="Shams Ul Rehman" 
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <BarChart size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">150%+</p>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Traffic Growth</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full" />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I am a dedicated Digital Marketing Manager with a passion for data-driven results. With years of experience in the digital landscape, I&apos;ve mastered the art of SEO, keyword research, and high-impact content writing.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My approach combines creative storytelling with technical optimization to ensure that every piece of content not only reaches its target audience but also inspires action. I thrive on solving complex marketing challenges and helping brands find their unique voice online.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900">Strategy</h4>
                  <p className="text-sm text-gray-500">Custom marketing plans</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900">Execution</h4>
                  <p className="text-sm text-gray-500">Flawless implementation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900">Analysis</h4>
                  <p className="text-sm text-gray-500">Data-backed insights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900">Growth</h4>
                  <p className="text-sm text-gray-500">Scalable results</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative">
              <Image 
                src="https://picsum.photos/seed/office/800/800" 
                alt="Workspace" 
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full -z-10 opacity-10" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-600 rounded-2xl -z-10 opacity-5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: 'SEO Optimization', level: 95, icon: <Search size={20} /> },
    { name: 'Keyword Research', level: 90, icon: <Globe size={20} /> },
    { name: 'Content Writing', level: 85, icon: <PenTool size={20} /> },
    { name: 'Social Media Marketing', level: 80, icon: <Share2 size={20} /> },
    { name: 'Digital Strategy', level: 88, icon: <BarChart size={20} /> },
    { name: 'Blog Management', level: 92, icon: <FileText size={20} /> },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Expertise</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of skills designed to drive digital success and brand authority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{skill.name}</h3>
              <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Proficiency</span>
                <span className="text-xs font-bold text-blue-600">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'SEO Optimization',
      description: 'Comprehensive on-page and off-page SEO strategies to boost your search engine rankings and organic traffic.',
      icon: <Search size={32} />,
    },
    {
      title: 'Blog & Content Writing',
      description: 'High-quality, engaging, and SEO-friendly content tailored to your audience and brand voice.',
      icon: <PenTool size={32} />,
    },
    {
      title: 'Digital Marketing Strategy',
      description: 'Data-driven marketing roadmaps designed to achieve your business goals and maximize ROI.',
      icon: <BarChart size={32} />,
    },
    {
      title: 'Keyword Research',
      description: 'In-depth analysis to identify high-value keywords that drive targeted traffic to your website.',
      icon: <Globe size={32} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored solutions to help your business thrive in the competitive digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-blue-600 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <a href="#contact" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Growth Strategy',
      category: 'Digital Marketing',
      image: 'https://picsum.photos/seed/proj1/600/400',
      link: '#',
    },
    {
      title: 'Tech Blog SEO Overhaul',
      category: 'SEO / Content',
      image: 'https://picsum.photos/seed/proj2/600/400',
      link: '#',
    },
    {
      title: 'SaaS Inbound Campaign',
      category: 'Lead Generation',
      image: 'https://picsum.photos/seed/proj3/600/400',
      link: '#',
    },
    {
      title: 'Local Business Visibility',
      category: 'Local SEO',
      image: 'https://picsum.photos/seed/proj4/600/400',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
          </div>
          <p className="text-gray-600 max-w-md">
            A selection of my recent work helping clients achieve their digital marketing objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-blue-400 text-sm font-semibold mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <a 
                  href={project.link} 
                  className="w-fit px-6 py-2 bg-white text-gray-900 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Case Study <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const contactLinks = [
    { name: 'WhatsApp', icon: <MessageCircle size={20} />, href: 'https://wa.me/923174137440', color: 'bg-green-500' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:ak9612940@gmail.com', color: 'bg-red-500' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/shams-ul-rehman-960474245/', color: 'bg-blue-700' },
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/ak9612940-ux', color: 'bg-gray-900' },
    { name: 'Facebook', icon: <Facebook size={20} />, href: 'https://www.facebook.com/shamsreh8', color: 'bg-blue-600' },
    { name: 'Blog', icon: <Globe size={20} />, href: 'https://howtoandlifes.blogspot.com/', color: 'bg-orange-500' },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full" />
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Ready to take your digital presence to the next level? Whether you have a specific project in mind or just want to explore the possibilities, I&apos;m here to help.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Me</p>
                  <p className="text-gray-900 font-medium">ak9612940@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">WhatsApp</p>
                  <p className="text-gray-900 font-medium">+92 317 4137440</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Connect With Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-600 hover:bg-blue-50 transition-all group"
                >
                  <div className={`w-10 h-10 ${link.color} text-white rounded-lg flex items-center justify-center shadow-md`}>
                    {link.icon}
                  </div>
                  <span className="font-bold text-gray-700 group-hover:text-blue-600">{link.name}</span>
                </a>
              ))}
              <a
                href="https://drive.google.com/drive/ak9612940@gmail"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-600 hover:bg-blue-50 transition-all group"
              >
                <div className="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center shadow-md">
                  <Share2 size={20} />
                </div>
                <span className="font-bold text-gray-700 group-hover:text-blue-600">Google Drive</span>
              </a>
              <a
                href="https://www.pinterest.com/ak9612940/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-600 hover:bg-blue-50 transition-all group"
              >
                <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center shadow-md">
                  <Share2 size={20} />
                </div>
                <span className="font-bold text-gray-700 group-hover:text-blue-600">Pinterest</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-2xl font-bold tracking-tight text-blue-600 mb-6">
          Shams<span className="text-gray-900">.</span>
        </div>
        <p className="text-gray-500 text-sm mb-8">
          &copy; {new Date().getFullYear()} Shams Ul Rehman. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/shams-ul-rehman-960474245/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
          <a href="https://www.facebook.com/shamsreh8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
          <a href="https://github.com/ak9612940-ux" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors"><Github size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function Portfolio() {
  return (
    <div className="bg-white selection:bg-blue-100 selection:text-blue-600">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
