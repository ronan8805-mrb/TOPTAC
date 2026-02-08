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
import projectSteel1 from "@/assets/images/projects/construction/project-steel-1.jpeg";
import projectSteel2 from "@/assets/images/projects/construction/project-steel-2.jpeg";
import projectSteel3 from "@/assets/images/projects/construction/project-steel-3.jpeg";
import projectSteel4 from "@/assets/images/projects/construction/project-steel-4.jpeg";
import projectSteel5 from "@/assets/images/projects/construction/project-steel-5.jpeg";
import projectSteel6 from "@/assets/images/projects/construction/project-steel-6.jpeg";
import projectSteel7 from "@/assets/images/projects/construction/project-steel-7.jpeg";
import workshopSteel1 from "@/assets/images/projects/workshop/workshop-steel-1.jpeg";
import workshopSteel2 from "@/assets/images/projects/workshop/workshop-steel-2.jpeg";
import workshopSteel3 from "@/assets/images/projects/workshop/workshop-steel-3.jpeg";
import workshopSteel4 from "@/assets/images/projects/workshop/workshop-steel-4.jpeg";
import workshopSteel5 from "@/assets/images/projects/workshop/workshop-steel-5.jpeg";
import stairs1 from "@/assets/images/projects/stairs/stairs-1.jpeg";
import stairs2 from "@/assets/images/projects/stairs/stairs-2.jpeg";
import stairs3 from "@/assets/images/projects/stairs/stairs-3.jpeg";
import stairs4 from "@/assets/images/projects/stairs/stairs-4.jpeg";
import stairs5 from "@/assets/images/projects/stairs/stairs-5.jpeg";
import stairs6 from "@/assets/images/projects/stairs/stairs-6.jpeg";
import stairs7 from "@/assets/images/projects/stairs/stairs-7.jpeg";
import stairs8 from "@/assets/images/projects/stairs/stairs-8.jpeg";
import channel1 from "@/assets/images/projects/channel/channel-1.jpeg";
import channel2 from "@/assets/images/projects/channel/channel-2.jpeg";
import channel3 from "@/assets/images/projects/channel/channel-3.jpeg";
import channel4 from "@/assets/images/projects/channel/channel-4.jpeg";
import channel5 from "@/assets/images/projects/channel/channel-5.jpeg";
import channel6 from "@/assets/images/projects/channel/channel-6.jpeg";
import channel7 from "@/assets/images/projects/channel/channel-7.jpeg";
import channel8 from "@/assets/images/projects/channel/channel-8.jpeg";

export const projects = [
  {
    id: "construction-project",
    title: "Structural Steel Development",
    category: "Construction",
    description: "Full-scale structural steel installation for a major commercial development, featuring complex framework and heavy lifting operations.",
    coverImage: projectSteel7,
    images: [
      projectSteel7,
      projectSteel1,
      projectSteel2,
      projectSteel3,
      projectSteel4,
      projectSteel5,
      projectSteel6
    ]
  },
  {
    id: "workshop-processing",
    title: "Workshop Processing & Fabrication",
    category: "In-House Fabrication",
    description: "Precision steel processing, cutting, and welding in our dedicated fabrication facility in Drogheda.",
    coverImage: workshopSteel3,
    images: [
      workshopSteel3,
      workshopSteel1,
      workshopSteel2,
      workshopSteel4,
      workshopSteel5
    ]
  },
  {
    id: "staircase-fabrication",
    title: "Bespoke Staircase Fabrication",
    category: "Metal Fabrication",
    description: "Custom-designed steel staircase fabrication featuring precision engineering and high-quality finish for commercial installation.",
    coverImage: stairs1,
    images: [
      stairs1,
      stairs2,
      stairs3,
      stairs4,
      stairs5,
      stairs6,
      stairs7,
      stairs8
    ]
  },
  {
    id: "stainless-channel",
    title: "U-Shaped Stainless Steel Channel",
    category: "Stainless Steel Fabrication",
    description: "Custom designed and fabricated U-shaped stainless steel channel system, manufactured to precise specifications.",
    coverImage: channel1,
    images: [
      channel1,
      channel2,
      channel3,
      channel4,
      channel5,
      channel6,
      channel7,
      channel8
    ]
  }
];

export const images = {
  logo,
  heroBg,
  // Flat list for legacy support if needed, but UI should switch to `projects`
  gallery: [...projects[0].images, ...projects[1].images],
  weldingAction,
  cert,
  certReport,
  clients: [clientNaturesBest, clientIndaver, clientKavco, clientInstaspace, clientMultiStorage, clientNVM, clientFlowtech, clientWaterWipes, clientSecureConstruction]
};
