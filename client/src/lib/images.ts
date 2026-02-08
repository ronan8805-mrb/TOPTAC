import logo from "@/assets/images/logo.png";
import heroBg from "@/assets/images/hero-bg.jpg";
import weldingAction from "@/assets/images/welding-action.png";
import cert from "@/assets/images/cert.png";
import certReport from "@/assets/images/cert-report.png";
import clientNaturesBest from "@/assets/images/client-natures-best.png";
import clientIndaver from "@/assets/images/client-indaver.png";
import clientKavco from "@/assets/images/client-kavco.png";
import clientInstaspace from "@/assets/images/client-instaspace.png";
import clientMultiStorage from "@/assets/images/client-multi-storage.png";
import clientNVM from "@/assets/images/client-nvm.png";
import clientFlowtech from "@/assets/images/client-flowtech.png";
import clientWaterWipes from "@/assets/images/client-waterwipes.png";
import clientSecureConstruction from "@/assets/images/client-secure-construction.png";
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
