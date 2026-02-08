import { images } from "@/lib/images";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <img src={images.logo} alt="Toptac Logo" className="w-40 mb-6 opacity-90" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              CE certified experts in structural steel and metal fabrication. 
              Delivering precision, durability, and excellence across Ireland.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-secondary/50 rounded-full hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-secondary/50 rounded-full hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-secondary/50 rounded-full hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Project Gallery</a></li>
              <li><a href="#certifications" className="hover:text-primary transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
             <h4 className="text-white text-lg font-bold mb-6">Services</h4>
             <ul className="space-y-3 text-sm text-muted-foreground">
               <li>Structural Steel</li>
               <li>Metal Fabrication</li>
               <li>On-site Welding</li>
               <li>CNC Plasma Cutting</li>
               <li>Industrial Maintenance</li>
             </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>
                  Greenhills Industrial Estate,<br />
                  Drogheda, Co. Louth,<br />
                  Ireland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href="tel:0863608811" className="hover:text-white transition-colors">086 360 8811</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:toptacwelding@outlook.ie" className="hover:text-white transition-colors">toptacwelding@outlook.ie</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TOPTAC Welding & Fabrication Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
