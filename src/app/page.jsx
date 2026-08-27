'use client'
import React, { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import CompaniesSection from '@/components/sections/CompaniesSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import ExperienceModal from '@/components/modals/ExperienceModal';
import BlogModal from '@/components/modals/BlogModal';
import CertificateModal from '@/components/modals/CertificateModal';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  const [selectedExp, setSelectedExp] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <main className="pb-10 bg-background">
      <HeroSection />
      <CompaniesSection />
      <PortfolioSection />
      <ExperienceSection onSelectExp={setSelectedExp} />
      <EducationSection onSelectCert={setSelectedCert} />
      <BlogSection onSelectBlog={setSelectedBlog} />
      <ContactSection />

      {/* Modals */}
      <ExperienceModal exp={selectedExp} onClose={() => setSelectedExp(null)} />
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />

      {/* Floating Action Button */}
      <ScrollToTop />
    </main>
  );
}
