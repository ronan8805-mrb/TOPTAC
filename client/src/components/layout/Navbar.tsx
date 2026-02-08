import { Link } from "wouter";
import { images } from "@/lib/images";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border py-2"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative w-32 md:w-40 h-12 overflow-hidden">
               <img 
                 src={images.logo} 
                 alt="TOPTAC Welding" 
                 className="w-full h-full object-contain object-left transition-transform group-hover:scale-105" 
               />
            </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-heading uppercase tracking-wider text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" size="sm" className="bg-primary hover:bg-red-600 text-white font-heading uppercase tracking-wide">
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border absolute top-full left-0 right-0 shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="font-heading uppercase text-xl font-bold text-foreground/80 hover:text-primary transition-colors block cursor-pointer"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4 pt-6 border-t border-white/10"
              >
                 <div className="flex items-center gap-3 text-muted-foreground text-base">
                   <Phone size={18} className="text-primary" /> 086 360 8811
                 </div>
                 <div className="flex items-center gap-3 text-muted-foreground text-base">
                   <Mail size={18} className="text-primary" /> toptacwelding@outlook.ie
                 </div>
                 <Button className="w-full mt-2 bg-primary text-white font-heading uppercase tracking-wide">
                   Get a Quote
                 </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
