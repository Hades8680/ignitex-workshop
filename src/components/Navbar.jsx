import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Users, AlertCircle, Cpu, Layers, Calendar } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Navbar({ onOpenWorkshopModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Đội ngũ IGNITEX', href: '#team', icon: Users },
    { name: 'Nghịch lý & Nỗi đau', href: '#problem', icon: AlertCircle },
    { name: 'Kiến trúc Giáo viên AI', href: '#solution', icon: Cpu },
    { name: 'Đối chiếu & Thực tiễn', href: '#impact', icon: Layers },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg shadow-slate-200/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white animate-pulse-subtle" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-sky-600 via-indigo-600 to-slate-900 bg-clip-text text-transparent">
                {siteConfig.brandName}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 -mt-1">
                EdTech & AI Lab • UTC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50/80 transition-all duration-200 flex items-center gap-1.5"
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-sky-600" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenWorkshopModal}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-600 hover:from-sky-500 hover:to-indigo-500 shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Đăng Ký Dự Workshop</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-sky-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-b border-slate-200/80 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50/80 transition-colors"
                >
                  <Icon className="w-5 h-5 text-sky-600" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWorkshopModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-indigo-600 shadow-md shadow-sky-500/25"
              >
                <Calendar className="w-4 h-4" />
                <span>Đăng Ký Tham Dự Workshop Online</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
