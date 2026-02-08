import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { images } from "@/lib/images";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Projects() {
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
              Explore our recent work in structural steel fabrication, installation, and custom metalwork for industrial and commercial clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {images.projects.map((project, idx) => (
              <motion.div variants={fadeInUp} key={idx} className="group relative overflow-hidden rounded-lg aspect-[3/4] md:aspect-[4/3] cursor-pointer shadow-lg border border-white/5">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <img 
                  src={project.src} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <div className="w-10 h-1 bg-primary mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</p>
                  <h4 className="text-white font-display text-2xl font-bold">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
