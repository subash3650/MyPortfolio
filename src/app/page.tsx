import { fetchProjects } from "@/utils/github";
import { Certificate } from "@/types";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

import { readFileSync } from 'fs';
import { join } from 'path';


async function getCertificates(): Promise<Certificate[]> {
  try {
    const filePath = join(process.cwd(), 'public', 'data', 'certificates.json');
    const fileContents = readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as Certificate[];
  } catch (error) {
    console.error('Error loading certificates:', error);
    return [];
  }
}

export default async function Home() {

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
