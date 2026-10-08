const fs = require('fs');
const en = require('../messages/en.json');
const id = require('../messages/id.json');

en.featuredProjects = {
  totalProjects: "Total Projects",
  exploreArchive: "Explore full archive",
  spotlight: "SPOTLIGHT PROJECT",
  active: "Active",
  select: "Select",
  detail: "Detail",
  viewCaseStudy: "View Case Study Details",
  liveDemo: "Live Demo",
  source: "Source",
  interactivePreview: "Interactive Web Preview",
  clickToView: "Click to view case study details",
  topProjects: "Top Projects",
  exploreFullArchiveBtn: "Explore Full Project Archive"
};

id.featuredProjects = {
  totalProjects: "Total Proyek",
  exploreArchive: "Jelajahi arsip lengkap",
  spotlight: "PROYEK SOROTAN",
  active: "Aktif",
  select: "Pilih",
  detail: "Detail",
  viewCaseStudy: "Buka Detail Studi Kasus",
  liveDemo: "Live Demo",
  source: "Source",
  interactivePreview: "Pratinjau Web Interaktif",
  clickToView: "Klik untuk melihat detail studi kasus",
  topProjects: "Proyek Teratas",
  exploreFullArchiveBtn: "Jelajahi Arsip Proyek Lengkap"
};

en.experienceTabs = {
  higherEducation: "Higher Education",
  current: "Current",
  completed: "Completed",
  gpa: "GPA",
  aiResearcher: "AI Researcher",
  itMajor: "IT Major",
  digitalInnovation: "Digital Innovation Hub",
  timeline: "Timeline",
  present: "Present",
  workExperienceTitle: "Work Experience",
  workExperienceDesc: "I've been working on various projects and roles. Here's a timeline of my professional experience.",
  experienceLabel: "Work Experience",
  educationLabel: "Education",
  academicFoundation: "Academic Foundation",
  experienceSubtitle: "A timeline of roles, responsibilities, and growth",
  educationSubtitle: "Building strong foundations through academic excellence",
  professionalExperience: "Professional Experience"
};

id.experienceTabs = {
  higherEducation: "Pendidikan Tinggi",
  current: "Saat Ini",
  completed: "Selesai",
  gpa: "IPK",
  aiResearcher: "Peneliti AI",
  itMajor: "Jurusan TI",
  digitalInnovation: "Pusat Inovasi Digital",
  timeline: "Lini Masa",
  present: "Sekarang",
  workExperienceTitle: "Pengalaman Kerja",
  workExperienceDesc: "Saya telah bekerja pada berbagai proyek dan peran. Berikut adalah lini masa pengalaman profesional saya.",
  experienceLabel: "Pengalaman Kerja",
  educationLabel: "Pendidikan",
  academicFoundation: "Pondasi Akademik",
  experienceSubtitle: "Garis waktu peran, tanggung jawab, dan pertumbuhan",
  educationSubtitle: "Membangun pondasi kuat melalui keunggulan akademik",
  professionalExperience: "Pengalaman Profesional"
};

fs.writeFileSync('../messages/en.json', JSON.stringify(en, null, 4));
fs.writeFileSync('../messages/id.json', JSON.stringify(id, null, 4));
console.log('Translations updated!');
