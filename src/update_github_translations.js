const fs = require('fs');
const en = require('../messages/en.json');
const id = require('../messages/id.json');

en.githubShowcase = {
  ecosystem: "GitHub Ecosystem",
  creativeEngineering: "Creative Engineering,",
  now: "now",
  openSource: "Open Source.",
  totalContributions: "Total Contributions",
  followers: "Followers",
  repositories: "Repositories",
  dashboardDesc: "A verified dashboard of technical milestones, total contributions, and real-time project activity.",
  yearlyContributions: "Yearly Contributions",
  activityHeatmap: "Activity Heatmap",
  highlightFeature: "Highlight Feature",
  pinnedRepositories: "Pinned Repositories",
  realtimeActivity: "Realtime Activity",
  commitHistory: "Commit History",
  noRecentActivity: "No recent activity",
  exploreMyGithub: "Explore my GitHub",
  viewFullProfile: "View Full Profile",
  initializing: "Initializing..."
};

id.githubShowcase = {
  ecosystem: "Ekosistem GitHub",
  creativeEngineering: "Rekayasa Kreatif,",
  now: "sekarang",
  openSource: "Open Source.",
  totalContributions: "Total Kontribusi",
  followers: "Pengikut",
  repositories: "Repositori",
  dashboardDesc: "Dasbor terverifikasi tentang pencapaian teknis, total kontribusi, dan aktivitas proyek secara real-time.",
  yearlyContributions: "Kontribusi Tahunan",
  activityHeatmap: "Peta Aktivitas",
  highlightFeature: "Fitur Unggulan",
  pinnedRepositories: "Repositori Tersemat",
  realtimeActivity: "Aktivitas Terkini",
  commitHistory: "Riwayat Komit",
  noRecentActivity: "Tidak ada aktivitas terkini",
  exploreMyGithub: "Jelajahi GitHub saya",
  viewFullProfile: "Lihat Profil Lengkap",
  initializing: "Memuat..."
};

fs.writeFileSync('../messages/en.json', JSON.stringify(en, null, 4));
fs.writeFileSync('../messages/id.json', JSON.stringify(id, null, 4));
console.log('GitHub Showcase translations updated!');
