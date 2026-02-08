import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { images, projects } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Factory, Hammer, ShieldCheck, Truck, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 200]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const services = [
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "Structural Steel",
      desc: "Fabrication and installation of structural steel for commercial and residential projects, up to Execution Class 2."
    },
    {
      icon: <Hammer className="w-8 h-8 text-primary" />,
      title: "Metal Fabrication",
      desc: "Custom metal fabrication including gates, railings, stairs, and bespoke architectural features."
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Mobile Welding",
      desc: "Fully equipped mobile units for on-site repairs, installation, and modification services nationwide."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "CNC & Processing",
      desc: "Precision CNC plasma cutting, press brake bending, rolling, and drilling services."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <motion.img 
            src={images.heroBg} 
            alt="Structural Steel Construction" 
            className="w-full h-full object-cover scale-105" 
            style={{ y: yBg }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-20 px-4 text-center md:text-left">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <Badge variant="outline" className="text-primary border-primary/50 uppercase tracking-widest px-4 py-1 text-xs font-bold backdrop-blur-sm">
                EN 1090 Certified · Execution Class 2
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-6 uppercase tracking-tight">
              Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Steel</span> <br/> 
              Fabrication
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl font-light leading-relaxed">
              Leading the industry in structural steel and metal fabrication. 
              Based in Drogheda, serving projects nationwide with certified excellence.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-heading uppercase tracking-wide text-lg h-14 px-8">
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white font-heading uppercase tracking-wide text-lg h-14 px-8">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATION STRIP */}
      <section id="certifications" className="bg-secondary/30 border-y border-white/5 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
           <div className="flex items-center gap-4">
             <img src={images.logo} alt="Toptac" className="h-10 opacity-50 grayscale hover:grayscale-0 transition-all" />
             <div className="h-8 w-px bg-white/10" />
             <span className="text-muted-foreground font-heading uppercase tracking-wider text-sm">Official CE Certification</span>
           </div>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {['EN 1090 EXC 2', 'ISO 3834', 'Safe Pass', 'Manual Handling'].map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-gray-400 font-semibold uppercase tracking-wider text-sm">
                  <CheckCircle2 size={16} className="text-primary" />
                  {cert}
                </div>
              ))}
           </div>
        </div>
      </section>
      
      {/* CERTIFICATION DETAILS */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 relative">
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img src={images.cert} alt="CE Certificate" className="w-full rounded-lg border border-white/10 shadow-2xl relative z-10 transition-transform group-hover:scale-105" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group mt-12"
                  >
                     <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                     <img src={images.certReport} alt="Certification Report" className="w-full rounded-lg border border-white/10 shadow-2xl relative z-10 transition-transform group-hover:scale-105" />
                  </motion.div>
                </div>
             </div>
             <div className="order-1 md:order-2">
               <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">Accreditation</h2>
               <h3 className="text-4xl md:text-5xl font-display text-white mb-6">Certified Excellence</h3>
               <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                 Toptac Welding & Fabrication Ltd holds the prestigious <span className="text-white font-bold">EN 1090-1 + A1:2012</span> certification 
                 for structural steel components up to <span className="text-white font-bold">Execution Class 2 (EXC2)</span>.
               </p>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-start gap-3 text-gray-300">
                   <FileText className="text-primary shrink-0 mt-1" size={20} />
                   <span>Certified Factory Production Control (FPC) System 2+</span>
                 </li>
                 <li className="flex items-start gap-3 text-gray-300">
                   <FileText className="text-primary shrink-0 mt-1" size={20} />
                   <span>Compliance with European Construction Products Regulation (CPR)</span>
                 </li>
                 <li className="flex items-start gap-3 text-gray-300">
                   <FileText className="text-primary shrink-0 mt-1" size={20} />
                   <span>Declaration Methods 1, 2, 3a, and 3b</span>
                 </li>
               </ul>
               <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                 Download Certificates
               </Button>
             </div>
           </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-24 bg-secondary/10 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-display text-white mb-4">Industrial Grade Solutions</h3>
            <p className="text-muted-foreground">Combining over 100 years of experience with state-of-the-art machinery to deliver bespoke fabrication needs.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div variants={fadeInUp} key={idx}>
                <Card className="bg-card border-white/5 hover:border-primary/50 transition-colors group h-full">
                  <CardContent className="p-8">
                    <div className="mb-6 bg-secondary/50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section id="about" className="py-24 bg-secondary/20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="sticky top-24">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mb-16"
              >
                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-50" />
                <img 
                  src={images.weldingAction} 
                  alt="Welder at work" 
                  className="relative rounded-lg shadow-2xl border border-white/10 w-full object-cover aspect-[4/5]"
                />
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg border border-white/10 shadow-xl max-w-xs hidden md:block z-10"
                >
                  <p className="text-primary font-display text-4xl font-bold mb-1">100+</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Years Combined Experience</p>
                </motion.div>
              </motion.div>

              {/* Client Logos Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="pt-8 border-t border-white/5"
              >
                <p className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase mb-6 text-center lg:text-left">Trusted Partners</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
                  {images.clients.map((client, idx) => {
                    // Nature's Best is the 1st logo (index 0)
                    if (idx === 0) {
                      return (
                        <a 
                          key={idx} 
                          href="https://www.naturesbest.ie/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/5 hover:border-primary/50 transition-colors flex items-center justify-center h-20 group"
                        >
                          <img 
                            src={client} 
                            alt={`Client logo ${idx + 1}`} 
                            className="max-h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity filter brightness-100"
                          />
                        </a>
                      );
                    }
                    // Indaver is the 2nd logo (index 1)
                    if (idx === 1) {
                      return (
                        <a 
                          key={idx} 
                          href="https://indaver.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/5 hover:border-primary/50 transition-colors flex items-center justify-center h-20 group"
                        >
                          <img 
                            src={client} 
                            alt={`Client logo ${idx + 1}`} 
                            className="max-h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity filter brightness-100"
                          />
                        </a>
                      );
                    }
                    // Kavco Group is the 3rd logo (index 2)
                    if (idx === 2) {
                      return (
                        <a 
                          key={idx} 
                          href="https://kavco.ie/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/5 hover:border-primary/50 transition-colors flex items-center justify-center h-20 group"
                        >
                          <img 
                            src={client} 
                            alt={`Client logo ${idx + 1}`} 
                            className="max-h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity filter brightness-100"
                          />
                        </a>
                      );
                    }
                    // Instaspace is the 4th logo (index 3)
                    if (idx === 3) {
                      return (
                        <a 
                          key={idx} 
                          href="https://www.instaspace.ie/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/5 hover:border-primary/50 transition-colors flex items-center justify-center h-20 group"
                        >
                          <img 
                            src={client} 
                            alt={`Client logo ${idx + 1}`} 
                            className="max-h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity filter brightness-100"
                          />
                        </a>
                      );
                    }
                    // Multi Storage is the 5th logo (index 4)
                    if (idx === 4) {
                      return (
                        <a 
                          key={idx} 
                          href="https://www.multistorage.ie/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/5 hover:border-primary/50 transition-colors flex items-center justify-center h-20 group"
                        >
                          <img 
                            src={client} 
                            alt={`Client logo ${idx + 1}`} 
                            className="max-h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity filter brightness-100"
                          />
                        </a>
                      );
                    }
                    // NVM is the 6th logo (index 5)
                    if (idx === 5) {
                      return (
                        <a 
                          key={idx} 
                          href="https://nvm.ie/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/5 hover:border-primary/50 transition-colors flex items-center justify-center h-20 group"
                        >
                          <img 
                            src={client} 
                            alt={`Client logo ${idx + 1}`} 
                            className="max-h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity filter brightness-100"
                          />
                        </a>
                      );
                    }
                    // Flowtech is the 7th logo (index 6)
                    if (idx === 6) {
                      return (
                        <a 
                          key={idx} 
                          href="https://www.flowtechengineering.ie/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/5 hover:border-primary/50 transition-colors flex items-center justify-center h-20 group"
                        >
                          <img 
                            src={client} 
                            alt={`Client logo ${idx + 1}`} 
                            className="max-h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity filter brightness-100"
                          />
                        </a>
                      );
                    }
                    // WaterWipes is the 8th logo (index 7)
                    if (idx === 7) {
                      return (
                        <a 
                          key={idx} 
                          href="https://www.waterwipes.com/ie/en/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/5 hover:border-primary/50 transition-colors flex items-center justify-center h-20 group"
                        >
                          <img 
                            src={client} 
                            alt={`Client logo ${idx + 1}`} 
                            className="max-h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity filter brightness-100"
                          />
                        </a>
                      );
                    }
                    // Secure Construction Só is the 9th logo (index 8)
                    if (idx === 8) {
                      return (
                        <a 
                          key={idx} 
                          href="https://secureconstruction.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/5 hover:border-primary/50 transition-colors flex items-center justify-center h-20 group"
                        >
                          <img 
                            src={client} 
                            alt={`Client logo ${idx + 1}`} 
                            className="max-h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity filter brightness-100"
                          />
                        </a>
                      );
                    }
                    return (
                     <div key={idx} className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors flex items-center justify-center h-20">
                       <img 
                         src={client} 
                         alt={`Client logo ${idx + 1}`} 
                         className="max-h-12 w-auto opacity-90 hover:opacity-100 transition-opacity filter brightness-100"
                       />
                     </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">Who We Are</h2>
                <h3 className="text-4xl md:text-5xl font-display text-white leading-tight mb-4">
                  Quality You Can Trust.<br/>
                  Service You Can Rely On.
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Toptac Welding is a CE certified steel fabrication company based in Drogheda, Co. Louth, 
                  specialising in secondary and MEP steelwork for mission-critical environments, including data centres.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-card/50 p-6 rounded-lg border border-white/5">
                  <h4 className="text-white font-heading font-bold text-lg mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> What We Deliver
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-400">
                    <li>• Secondary / MEP steel packages</li>
                    <li>• Cable tray support frames</li>
                    <li>• Platforms, access steel, stairs & handrails</li>
                    <li>• Skids, plinths and plant bases</li>
                    <li>• Pipe racks and pipe support systems</li>
                    <li>• Modular, install-ready assemblies</li>
                  </ul>
                </div>

                <div className="bg-card/50 p-6 rounded-lg border border-white/5">
                  <h4 className="text-white font-heading font-bold text-lg mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Facilities & Capability
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Operating from a 10,000 sq ft fabrication facility in Drogheda, 1 km from the port, 
                    we are equipped with CNC plasma cutting, press braking, welding, drilling, and finishing capability. 
                    Our location supports efficient logistics for Irish, UK, and European data centre programmes.
                  </p>
                </div>

                <div className="bg-card/50 p-6 rounded-lg border border-white/5">
                  <h4 className="text-white font-heading font-bold text-lg mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> How We Work
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    We operate as a single accountable fabrication partner. All steelwork is produced under 
                    controlled procedures with full traceability, CE marking, and QA documentation.
                  </p>
                  <div className="flex flex-col gap-2 text-sm font-semibold text-white/90">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-primary" /> Programme Certainty
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-primary" /> Clear Communication
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-primary" /> Predictable Delivery
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GALLERY */}
      <section id="projects" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <div>
              <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">Our Work</h2>
              <h3 className="text-4xl md:text-5xl font-display text-white">Featured Projects</h3>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="hidden md:flex">View All Projects</Button>
            </Link>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, idx) => (
              <Link key={idx} href="/projects">
                <motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-lg aspect-[16/10] cursor-pointer border border-white/5">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                  <img 
                    src={project.coverImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</p>
                    <h4 className="text-white font-display text-2xl font-bold mb-2">{project.title}</h4>
                    <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{project.description}</p>
                    <div className="flex items-center gap-2 mt-4 text-white text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      View Gallery <ArrowRight size={14} className="text-primary" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
           <Link href="/projects">
             <Button variant="outline" className="w-full mt-8 md:hidden">View All Projects</Button>
           </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
            From design to installation, we provide the highest quality product and service. 
            Contact us today for a quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 h-14">
               Call 086 360 8811
             </Button>
             <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 h-14">
               Email Us
             </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
