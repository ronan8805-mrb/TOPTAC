import logo from "@assets/Screenshot_2026-01-10_201140-removebg-preview_1770558621224.png";
import heroBg from "@assets/Toptac_Brochure_background_pic_1770559029419.jpg";
import project1 from "@assets/2_structural-steel_1770558592986.jpg";
import project2 from "@assets/PROJECTS_1770558592986.jpg";
import project3 from "@assets/structural-steel_1770558592986.jpg";
import weldingAction from "@assets/wielding_on_site_1770558592986.png";
import cert from "@assets/image_1770559174355.png";
import certReport from "@assets/image_1770559160072.png";
import clientNaturesBest from "@assets/2061c106-6bed-4d11-8812-ceb236152885_removalai_preview_1770584662880.png";
import clientIndaver from "@assets/7f4de105-a0a1-4566-9b35-897c21b5fadd_removalai_preview_1770584764603.png";
import clientKavco from "@assets/Screenshot_2026-02-08_205455_1770584844363.png";
import clientInstaspace from "@assets/Screenshot_2026-02-08_210027_1770584915759.png";
import clientMultiStorage from "@assets/Screenshot_2026-02-08_205758-removebg-preview_1770584982366.png";
import clientNVM from "@assets/image_1770585025747.png";
import clientFlowtech from "@assets/image_1770585071033.png";
import clientWaterWipes from "@assets/image_1770585169911.png";
import clientSecureConstruction from "@assets/logo_1770585539469.png";
import projectSteel1 from "@/assets/images/project-steel-1.jpeg";
import projectSteel2 from "@/assets/images/project-steel-2.jpeg";
import projectSteel3 from "@/assets/images/project-steel-3.jpeg";
import projectSteel4 from "@/assets/images/project-steel-4.jpeg";
import projectSteel5 from "@/assets/images/project-steel-5.jpeg";
import projectSteel6 from "@/assets/images/project-steel-6.jpeg";
import projectSteel7 from "@/assets/images/project-steel-7.jpeg";
import workshopSteel1 from "@/assets/images/workshop-steel-1.jpeg";
import workshopSteel2 from "@/assets/images/workshop-steel-2.jpeg";
import workshopSteel3 from "@/assets/images/workshop-steel-3.jpeg";

export const projectData = [
  { src: projectSteel1, category: "Structural Steel", title: "Construction Project" },
  { src: projectSteel2, category: "Structural Steel", title: "Construction Project" },
  { src: projectSteel3, category: "Structural Steel", title: "Construction Project" },
  { src: projectSteel4, category: "Structural Steel", title: "Construction Project" },
  { src: projectSteel5, category: "Structural Steel", title: "Construction Project" },
  { src: projectSteel6, category: "Structural Steel", title: "Construction Project" },
  { src: projectSteel7, category: "Structural Steel", title: "Construction Project" },
  { src: workshopSteel1, category: "In-House Fabrication", title: "Workshop Processing" },
  { src: workshopSteel2, category: "In-House Fabrication", title: "Workshop Processing" },
  { src: workshopSteel3, category: "In-House Fabrication", title: "Workshop Processing" },
];

export const images = {
  logo,
  heroBg,
  projects: projectData,
  weldingAction,
  cert,
  certReport,
  clients: [clientNaturesBest, clientIndaver, clientKavco, clientInstaspace, clientMultiStorage, clientNVM, clientFlowtech, clientWaterWipes, clientSecureConstruction]
};
