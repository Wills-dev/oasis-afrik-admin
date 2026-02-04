import { Testimonial } from "../types";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    type: "Buyer Testimonial",
    content:
      "The verification and due-diligence process saved us weeks of work. We sourced high-quality cocoa and cashews from reliable suppliers, all backed by secure payments and real-time tracking.",
    author: {
      name: "Farid Al-Mansoor",
      company: "Al-Noor Foods (UAE)",
      initials: "FA",
    },
  },
  {
    id: 2,
    type: "Producer Testimonial",
    content:
      "OasisAfrik opened our products to buyers we never thought we could reach. The escrow system gave us confidence, and deliveries are now smoother with their logistics partners.",
    author: {
      name: "Ama K.",
      company: "GoldenShea Naturals",
      initials: "AK",
    },
  },
  {
    id: 3,
    type: "Producer Testimonial",
    content:
      "Before OasisAfrik, cross-border sales were stressful. Now everything from quotes to shipping is managed in one place. Our export volume has doubled in six months.",
    author: {
      name: "Chidi Okafor",
      company: "HarvestPeak Agro",
      initials: "CO",
    },
    highlighted: true,
  },
  {
    id: 4,
    type: "Investor Testimonial",
    content:
      "OasisAfrik brings transparency into markets that were previously difficult to navigate. Their insights and verification framework give us confidence to invest in African agro-supply chains.",
    author: {
      name: "Samantha Reid",
      company: "GrowFront Capital",
      initials: "SR",
    },
  },
  {
    id: 5,
    type: "Buyer Testimonial",
    content:
      "We have streamlined our entire procurement process through OasisAfrik. The quality assurance and logistics integration have made international sourcing remarkably simple.",
    author: {
      name: "Marcus Chen",
      company: "PacificTrade Corp",
      initials: "MC",
    },
  },
  {
    id: 6,
    type: "Producer Testimonial",
    content:
      "The platform connected us with premium buyers globally. Payment security and transparent pricing have transformed how we do business internationally.",
    author: {
      name: "Amara Nwosu",
      company: "GreenGold Exports",
      initials: "AN",
    },
  },
];
