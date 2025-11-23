import { fetchProjects } from "@/utils/github";
import { Certificate } from "@/types";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

// Load certificates from static JSON
async function getCertificates(): Promise<Certificate[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/data/certificates.json`,
      { cache: 'no-store' }
    );
    return response.json();
  } catch (error) {
    console.error('Error loading certificates:', error);
    return [];
  }
}

export default async function Home() {
  // Fetch data server-side
  const [projects, certificates] = await Promise.all([
    fetchProjects(),
    getCertificates(),
  ]);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Portfolio projects={projects} />
      <Services />
      <About />
      <Certificates certificates={certificates} />
      <Footer />
    </main>
  );
}
