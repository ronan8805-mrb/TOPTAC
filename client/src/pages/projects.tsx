import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/lib/images";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject === null) return;
    const project = projects[selectedProject];
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject === null) return;
    const project = projects[selectedProject];
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link href="/">
              <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
            <h1 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Portfolio</h1>
            <h2 className="text-5xl md:text-6xl font-display text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Explore our recent work in structural steel fabrication, installation, and custom metalwork.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div 
                variants={fadeInUp} 
                key={idx} 
                className="group relative overflow-hidden rounded-xl bg-card border border-white/5 shadow-2xl hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => openGallery(idx)}
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                   <img 
                     src={project.coverImage} 
                     alt={project.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 z-20 flex items-center gap-2">
                     <Camera size={14} className="text-primary" />
                     <span className="text-xs font-bold text-white uppercase tracking-wider">{project.images.length} Photos</span>
                   </div>
                </div>
                
                <div className="p-8">
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</p>
                  <h3 className="text-white font-display text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm font-bold text-white uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                    View Gallery <ArrowRight className="ml-2 h-4 w-4 text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox / Gallery Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeGallery}
          >
            {/* Close Button */}
            <button 
              onClick={closeGallery}
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-50"
            >
              <X size={32} />
            </button>

            {/* Content Container */}
            <div className="relative w-full h-full flex flex-col items-center justify-center px-4 md:px-20" onClick={(e) => e.stopPropagation()}>
              
              {/* Main Image */}
              <div className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] max-h-[80vh]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={projects[selectedProject].images[currentImageIndex]}
                    alt={`Gallery image ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain"
                  />
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 md:-left-16 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-primary text-white rounded-full backdrop-blur-sm transition-all border border-white/10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 md:-right-16 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-primary text-white rounded-full backdrop-blur-sm transition-all border border-white/10"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Caption & Counter */}
              <div className="mt-6 text-center">
                 <h3 className="text-white font-display text-2xl font-bold mb-1">{projects[selectedProject].title}</h3>
                 <p className="text-white/50 text-sm uppercase tracking-wider">
                   Image {currentImageIndex + 1} of {projects[selectedProject].images.length}
                 </p>
              </div>

              {/* Thumbnails (Desktop only) */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex gap-2 p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 max-w-[90vw] overflow-x-auto">
                {projects[selectedProject].images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                    className={`relative w-16 h-12 rounded overflow-hidden transition-all ${
                      currentImageIndex === idx ? 'ring-2 ring-primary scale-110 z-10' : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
            Let's discuss your requirements and how we can help deliver your vision.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 h-14">
            Get a Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
