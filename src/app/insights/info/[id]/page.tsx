import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import NewsDetails from "@/features/insights/components/NewsDetails/NewsDetails";

const InsightInfoPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  const techNews = {
    title: "Quantum Computing Breakthrough: 1000-Qubit Processor Unveiled",
    details: `
    <p>Tech giant QuantumTech has announced the successful development of the world's first commercially viable 1000-qubit quantum processor, marking a significant milestone in computing history.</p>
    
    <h2>Technical Achievements</h2>
    <p>The new processor, codenamed "Phoenix," demonstrates several groundbreaking capabilities:</p>
    
    <ul>
      <li><strong>Error correction:</strong> 99.9% accuracy in quantum operations</li>
      <li><strong>Stability:</strong> Maintains coherence for up to 10 seconds</li>
      <li><strong>Scalability:</strong> Modular design allows expansion to 5000 qubits</li>
      <li><strong>Temperature:</strong> Operates at near-absolute zero (-273°C)</li>
    </ul>
    
    <h2>Real-World Applications</h2>
    <p>This breakthrough opens doors to solving previously impossible computational problems:</p>
    
    <h3>Drug Discovery</h3>
    <p>Pharmaceutical companies can now simulate molecular interactions at unprecedented scales, potentially <em>reducing drug development time from years to months</em>.</p>
    
    <h3>Climate Modeling</h3>
    <p>Scientists will be able to create more accurate climate predictions by processing massive datasets simultaneously.</p>
    
    <h3>Cryptography</h3>
    <p>While quantum computers pose challenges to current encryption methods, they also enable the development of quantum-safe security protocols.</p>
    
    <blockquote>
      "We're not just doubling computing power—we're entering an entirely new paradigm where problems considered unsolvable become routine calculations."
    </blockquote>
    
    <h2>Availability</h2>
    <p>The Phoenix processor will be available to research institutions and select corporate partners starting Q3 2026, with pricing starting at $15 million per unit.</p>
    
    <p>QuantumTech CEO Amanda Rodriguez emphasized that this is just the beginning: <strong>"Within five years, we expect quantum computers to be as accessible as today's supercomputers."</strong></p>
  `,
    image: "/assets/dummy/prodImg3.jpg",
    date: "February 9, 2026",
    author: "David Park",
  };

  return (
    <DashboardLayout title="Insight Info">
      <NewsDetails id={id} data={techNews} />
    </DashboardLayout>
  );
};

export default InsightInfoPage;
