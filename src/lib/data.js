import React from 'react'
import { Terminal, Database, TrendingUp, Code2, FileSpreadsheet } from 'lucide-react'

export const personalInfo = {
  name: 'Sulistyowati Munawaroh',
  tagline: 'Membangun Sistem, Menganalisis Data, Mengelola Risiko, & Mengoptimalkan Proses.',
  about:
    'Saya adalah seorang profesional multidisiplin yang menggabungkan logika pemrograman dari Software Engineering, wawasan berbasis angka dari Data Analysis, manajemen risiko dari Trading, dan efisiensi operasional dari Administrasi.',
  email: 'sulistyowatimunawaroh@gmail.com',
  github: 'https://github.com/sulisgogho',
  linkedin: 'https://linkedin.com/in/sulistyowati-munawaroh',
  instagram: 'https://instagram.com/sulisgogho123',
  tiktok: '#',
}

export const techStacks = [
  {
    category: 'Software Engineering',
    icon: <Terminal className="w-6 h-6 text-blue-500" />,
    skills: ['React.js', 'Node.js', 'Python', 'Tailwind CSS', 'Git/GitHub', 'REST API'],
  },
  {
    category: 'Data & Analytics',
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    skills: ['Ms. Excel', 'PostgreSQL', 'Pandas/NumPy', 'Tableau', 'Power BI', 'Machine Learning'],
  },
  {
    category: 'Admin & Trading',
    icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
    skills: ['Microsoft Office (Excel, Word, PPT)', 'Google Workspace', 'Warehouse Management System', 'Technical Analysis', 'Risk Management'],
  },
]

export const mainSkillsPills = [
  { name: 'Excel', icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600" /> },
  { name: 'Data Mining', icon: <Database className="w-5 h-5 text-indigo-500" /> },
  { name: 'React.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-5 h-5" /> },
  { name: 'Python', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-5 h-5" /> },
  { name: 'SQL', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-5 h-5" /> },
  { name: 'Tableau', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" alt="Tableau" className="w-5 h-5 object-contain" /> },
  { name: 'Node.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-5 h-5" /> },
  { name: 'Docker', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-5 h-5" /> },
  { name: 'Figma', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-5 h-5" /> },
]

export const experiences = [
  {
    id: 1,
    role: 'Daily Worker Staff Processing',
    company: 'PT Global Jet Express (J&T Express)',
    period: 'Jan 2026 - Sekarang',
    type: 'Kerja',
    location: 'Gresik, Indonesia',
    shortDesc: 'Mengelola akurasi data paket logistik inbound/outbound serta mengoptimalkan pengolahan data distribusi harian menggunakan fungsi Excel tingkat lanjut.',
    fullDesc: `Bertanggung jawab memastikan sinkronisasi data logistik secara real-time antara pemindaian fisik dan database pusat menggunakan sistem logistik terintegrasi.

Tanggung Jawab & Pencapaian Utama:
• Sinkronisasi Data: Mengelola akurasi data paket inbound dan outbound untuk memastikan konsistensi data pada sistem logistik pusat.
• Analisis KPI Operasional: Memantau dan menganalisis laporan KPI operasional, termasuk mengevaluasi tingkat miss-route (salah rute) dan efisiensi distribusi di berbagai drop point.
• Quality Control: Melakukan validasi berkala pada status pengiriman dan inspeksi QC untuk memastikan integritas paket serta konsistensi data di dalam sistem.
• Optimasi Laporan: Mengoptimalkan pemrosesan data distribusi harian menggunakan fungsi Advanced Excel untuk menghasilkan laporan analitis yang mendukung pengambilan keputusan operasional gudang.`,
  },
  {
    id: 2,
    role: 'Account Officer',
    company: 'PT Federal International Finance (FIF Group)',
    period: 'Mar 2025 - Aug 2025',
    type: 'Kerja',
    location: 'Indonesia',
    shortDesc: 'Melakukan verifikasi dokumen pelanggan, manajemen basis data laporan harian, serta pemeliharaan arsip administrasi perusahaan.',
    fullDesc: `Bertanggung jawab atas validitas data pengajuan dan akurasi pelaporan administrasi harian konsumen.

Tanggung Jawab & Pencapaian Utama:
• Verifikasi Dokumen: Memeriksa dan memvalidasi berkas dan dokumen pelanggan untuk memastikan seluruh data yang diajukan akurat, valid, dan lengkap sesuai prosedur.
• Entri Data & Pelaporan: Menginput data lapangan ke dalam basis data (database) perusahaan secara terstruktur untuk penyusunan pelaporan harian.
• Manajemen Arsip: Mengelola rekam medis/catatan pelanggan serta menjaga file administratif tetap terorganisir dan up-to-date.`,
  },
  {
    id: 3,
    role: 'Ketua Divisi Riset dan Teknologi',
    company: 'BEM Fakultas Teknik',
    period: 'Sep 2022 - Aug 2023',
    type: 'Organisasi',
    location: 'Jember, Indonesia',
    shortDesc: 'Memimpin workshop berbasis teknologi, mengelola dokumentasi organisasi, serta mengelola sistem informasi digital fakultas.',
    fullDesc: `Memimpin divisi yang bergerak di bidang pengembangan riset dan implementasi teknologi di lingkungan organisasi mahasiswa Fakultas Teknik.

Tanggung Jawab & Pencapaian Utama:
• Pengembang Workshop: Memimpin pelaksanaan berbagai workshop berbasis teknologi untuk meningkatkan kompetensi digital mahasiswa.
• Manajemen Informasi: Bertanggung jawab penuh dalam mengelola sistem informasi digital fakultas serta memastikan aksesibilitas data berjalan dengan baik.
• Administrasi Organisasi: Mengelola seluruh dokumentasi, pencatatan, dan pelaporan berkala dari aktivitas organisasi.`,
  },
  {
    id: 4,
    role: 'Pengurus Divisi Sumber Daya Manusia',
    company: 'Relawan TIK Jember',
    period: 'Jul 2022 - Feb 2025',
    type: 'Organisasi',
    location: 'Jember, Indonesia',
    shortDesc: 'Memberikan edukasi literasi digital kepada lebih dari 1.000 peserta dan melakukan sosialisasi teknologi ke berbagai instansi publik.',
    fullDesc: `Berkontribusi aktif dalam divisi sumber daya manusia untuk merancang dan menyampaikan program edukasi teknologi kepada masyarakat umum.

Tanggung Jawab & Pencapaian Utama:
• Edukasi Masif: Berhasil menyampaikan pelatihan dan edukasi literasi digital kepada lebih dari 1.000 peserta dari berbagai latar belakang.
• Sosialisasi Teknologi: Menyelenggarakan program sosialisasi teknologi dan penjangkauan eksternal untuk sekolah-sekolah serta lembaga publik.`,
  },
]

export const certificates = [
  {
    id: 1,
    title: 'IBM Data Analyst',
    issuer: 'Coursera',
    year: '2026',
    description: [
      'Memberikan pemahaman mendalam mengenai seluruh siklus hidup analisis data, mulai dari tahap persiapan data mentah hingga visualisasi akhir yang siap pakai untuk kebutuhan bisnis.',
      'Detail kompetensi teknis dan alur kerja yang dipelajari:',
      '• Data Extraction (SQL): Mempelajari cara berinteraksi dengan database relasional menggunakan query efisien (JOIN, subqueries, agregasi) untuk menyaring dataset yang relevan.',
      '• Data Wrangling (Python): Menggunakan Jupyter Notebook, Pandas, dan NumPy untuk mengatasi nilai yang hilang (missing values), menghapus duplikasi, dan reformatting tipe data.',
      '• Data Exploration (Python): Menggunakan Matplotlib dan Seaborn untuk mendeteksi tren, melihat distribusi data, korelasi antar variabel, serta menemukan anomali.',
      '• Visualization (Excel, IBM Cognos, & Looker Studio): Berfokus pada data storytelling dengan membangun dashboard interaktif yang dinamis agar temuan teknis yang kompleks mudah dipahami.',
    ],
    imageUrl: '/Data Analyst.jpg',
  },
  {
    id: 2,
    title: 'Microsoft Excel Data Analysis',
    issuer: 'Coursera',
    year: '2026',
    description: [
      'Memberikan keahlian mendalam dalam mengolah, menganalisis, dan menyajikan data secara profesional menggunakan Microsoft Excel untuk kebutuhan bisnis dan pelaporan keuangan.',
      'Detail kompetensi teknis dan alur kerja yang dipelajari:',
      '• Manajemen Data tingkat Lanjut: Menguasai teknik pembersihan data mentah, penggunaan Data Validation, Conditional Formatting, serta manipulasi teks dan tanggal untuk merapikan dataset yang besar.',
      '• Rumus & Fungsi Kompleks: Pemanfaatan fungsi-fungsi logika, pencarian, dan statistik tingkat lanjut seperti XLOOKUP, VLOOKUP, INDEX-MATCH, IF/IFS bersarang, serta fungsi agregasi dinamis untuk kalkulasi data otomatis.',
      '• Analisis Data & Pemodelan: Mempelajari analisis data eksploratif menggunakan Pivot Tables dan Pivot Charts, melakukan pengelompokan data, serta teknik pemodelan prediktif dasar untuk melihat tren bisnis.',
      '• Dashboarding & Visualisasi Dinamis: Membangun dashboard interaktif yang otomatis terupdate dengan memanfaatkan Slicers, Timelines, dan grafik kustom agar laporan akhir mudah dipahami oleh tim manajemen.',
    ],
    imageUrl: '/Microsoft Excel.jpg',
  },
  {
    id: 3,
    title: 'IPK Tertinggi Fakultas Teknik',
    issuer: 'Universitas Muhammadiyah Jember',
    year: '2024',
    description: [
      'Penghargaan akademis tertinggi yang diberikan langsung oleh Rektor Universitas Muhammadiyah Jember pada Wisuda Periode Semester Genap TA 2023/2024.',
      'Detail pencapaian dan kualifikasi:',
      '• Kategori Penghargaan: Ditetapkan sebagai Wisudawan Berprestasi Utama untuk kategori Indeks Prestasi Kumulatif (IPK) Tertinggi di tingkat Fakultas Teknik.',
      '• Capaian Akademis: Meraih Indeks Prestasi Kumulatif (IPK) sebesar 3.86 dari skala 4.00, mencerminkan konsistensi, kedisiplinan, dan penguasaan materi yang kuat selama masa studi sarjana.',
      '• Relevansi Profesional: Menunjukkan kemampuan analisis yang kuat, penyelesaian masalah terstruktur, serta komitmen tinggi terhadap kualitas kerja—kompetensi fundamental yang sangat relevan untuk peran berbasis data.',
    ],
    imageUrl: '/IPK Tertinggi.jpg',
  },
  {
    id: 4,
    title: 'Peraih Medali Emas Lomba Karya Tulis Ilmiah Nasional',
    issuer: 'Asosiasi Program Studi Informatika (APSI) PTMA',
    year: '2022',
    description: [
      'Penghargaan tingkat nasional sebagai Juara 1 (Peraih Medali Emas) dalam kompetisi Karya Tulis Ilmiah pada Rapat Koordinasi Nasional (RAKORNAS) APSI PTMA yang diselenggarakan di Ternate.',
      'Detail pencapaian dan kompetensi:',
      "• Kategori Kompetisi: Kompetisi ilmiah berskala nasional yang diikuti oleh berbagai Perguruan Tinggi Muhammadiyah dan 'Aisyiyah (PTMA) se-Indonesia di bidang Informatika.",
      '• Fokus Pengembanan & Riset: Menunjukkan kemampuan dalam melakukan penelitian akademis yang komprehensif, mulai dari perumusan masalah, metodologi penelitian, analisis data yang valid, hingga penarikan kesimpulan yang solutif.',
      '• Relevansi Profesional: Membuktikan keahlian dalam berpikir kritis, kemampuan riset kuantitatif/kualitatif, serta struktur penyampaian ide atau laporan yang sistematis—kualifikasi yang sangat krusial bagi seorang Analyst.',
    ],
    imageUrl: '/APSI.jpg',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Sistem Pencatatan Keuangan Harian ',
    category: 'Website',
    shortDesc: 'Web application untuk pelacakan pengeluaran keuangan harian untuk single dan couple',
    fullDesc: 'Membangun aplikasi full-stack untuk melacak inventaris barang secara real-time dengan fitur notifikasi dan dashboard.',
    role: 'Fullstack Developer',
    tags: ['React', 'Node.js', 'Tailwind'],
    websiteUrl: 'https://catetduit.vercel.app/login',
    githubUrl: 'https://github.com/sulisgogho/CatetDuit',
    imageUrl: '/project/project2.png',
  },
  {
    id: 2,
    title: 'AdventureWorks Enterprise Control Tower & 10-Module Interactive Dashboard',
    category: 'Data',
    shortDesc: 'Dashboard analitik korporat terintegrasi berbasis React, FastAPI, dan Pandas untuk visualisasi data warehouse 10 pilar bisnis.',
    fullDesc: `Membangun platform "Control Tower" berskala enterprise untuk menganalisis data warehouse AdventureWorks secara real-time melalui arsitektur decoupled (Frontend React.js & Backend FastAPI Python).

Detail kompetensi teknis dan alur kerja yang diterapkan:

• ETL Framework & Data Wrangling (Python & Pandas):
Mengekstrak data dari berbagai tabel dimensi dan fakta (seperti FactInternetSales, DimCustomer, DimEmployee, dsb.). Membangun pipa pengolahan data tangguh menggunakan Pandas untuk pembersihan data, penanganan inkonsistensi header CSV secara dinamis, penanganan missing values, dan dynamic fallback mechanism jika terjadi kerusakan struktur data.

• Multi-Dimensional Business Analytics (FastAPI & Python):
Merancang dan mengimplementasikan 10 modul analitik backend yang melayani data agregasi kompleks lewat REST API, meliputi: Sales Performance, E-Commerce Retail (B2C), Logistics & Supply Chain, PPIC & Inventory, Customer Call Center, Market Research & CSAT, Corporate Finance Tower, Human Capital Performance, Global Sales & Territory, serta Marketing & Campaign Impact.

• Advanced Data Visualization & Dashboarding (React & Recharts):
Mengembangkan antarmuka dashboard interaktif (Dark Mode) modern menggunakan React.js dan Tailwind CSS. Memanfaatkan library Recharts untuk menyajikan visualisasi data multi-panel tingkat tinggi seperti Composed Charts (Bar & Line), Donut Charts pangsa pasar kontinental, Horizontal Bar Charts alokasi headcount, hingga Radar Charts matriks sentimen kepuasan pelanggan (CSAT).

• Production Deployment (Vercel & Railway):
Berhasil melakukan deployment terpisah untuk optimalisasi performa. Frontend React.js dideploy ke Vercel dengan penanganan SPA Routing (vercel.json rewrites), dan Backend FastAPI + Data Warehouse CSV dideploy ke Railway menggunakan arsitektur Web Service berbasis Procfile.`,
    role: 'Data Analyst / Quantitative Analyst',
    tags: ['Python', 'FastAPI', 'Pandas', 'React.js', 'Recharts', 'Data Warehouse', 'Data Visualization'],
    documentUrl: 'https://drive.google.com/uc?export=download&id=1KtEjQtAfK2GVPGF308nOejAWOx2dBJwc', // Nanti bisa kamu ganti dengan link dokumentasi/CV barumu jika ada
    documentType: 'pdf',
    websiteUrl: 'https://adventure-works-silk.vercel.app/',
    githubUrl: 'https://github.com/sulisgogho/AdventureWorks',
    imageUrl: '/project/project7.png', // Sesuaikan dengan nama asset gambar/screenshot dashboard kamu
  },

  {
    id: 3,
    title: 'Analyzing Emerging Skill Requirements and Technology Trends',
    category: 'Data',
    shortDesc: 'Dashboard interaktif berbasis Python dan SQLite untuk analisis tren ekosistem developer global.',
    fullDesc: `Menganalisis ekosistem developer global menggunakan data Stack Overflow Survey, data web-scraping BeautifulSoup, dan simulasi API untuk mengidentifikasi pergeseran tren teknologi masa depan.

Detail kompetensi teknis dan alur kerja yang dipelajari:

• Data Collection & Wrangling (SQL & Python):
Menggabungkan data survei CSV dengan data gaji eksternal hasil scraping, menangani missing values (Mode/Median), menghapus duplikasi data, serta menyaring data pencilan menggunakan metode Interquartile Range (IQR).

• Exploratory Data Analysis (Python):
Melakukan manipulasi string multi-value dan agregasi data menggunakan Pandas dan NumPy untuk memetakan tren bahasa pemrograman, database, infrastruktur cloud, hingga data demografi secara mendalam.

• Visualisasi Data & Dashboarding (Plotly, Seaborn, & WordCloud):
Membangun dashboard pemangku kepentingan interaktif dengan visualisasi multi-panel seperti Bubble Charts, Word Clouds, Treemaps, dan pemetaan geografis dinamis untuk menghasilkan insight bisnis yang actionable.`,
    role: 'Data Analyst / Quantitative Analyst',
    tags: ['Python', 'SQL', 'Pandas', 'BeautifulSoup', 'Plotly', 'Data Visualization'],
    documentUrl: 'https://drive.google.com/uc?export=download&id=1p5NZLzX5qTIP72Ps6SCA0RFLc0qxMd5j',
    documentType: 'pdf',
    imageUrl: '/project/project1.png',
  },
  {
    id: 4,
    title: 'Website Company Profile UD Cahaya Makmur',
    category: 'Website',
    shortDesc: 'Website company profile serta katalog UD Cahaya Makmur.',
    fullDesc: 'Website company profile untuk branding dan memudahkan calon customer mengetahui katalog penjualan dari UD Cahaya Makmur.',
    role: 'Fullstack Developer',
    tags: ['React', 'Node.js', 'Tailwind'],
    websiteUrl: 'https://www.udcahayamakmur.id/',
    githubUrl: 'https://github.com/sulisgogho/cahaya-makmur',
    imageUrl: '/project/project3.png',
  },
  {
    id: 5,
    title: 'Bot Trading Momentum Candle',
    category: 'Trading',
    shortDesc: 'Bot trading otomatis dengan strategi Momentum Candle.',
    fullDesc: 'Mengembangkan bot trading otomatis menggunakan MQL5 yang mengeksekusi strategi di pasar Forex XAUUSD.',
    role: 'Quant Developer',
    tags: ['MQ5', 'Momentum Candle', 'Forex Trading'],
    githubUrl: 'https://github.com/sulisgogho/bot-trading-momentum',
    imageUrl: '/project/project4.png',
    documentUrl: 'https://drive.google.com/uc?export=download&id=1x43LhPeDvp0Dd5mqykYSc1iLm5jU8dHe',
    documentType: 'pdf',
  },
  {
    id: 6,
    title: 'Superstore Sales Analysis & Customer Segmentation Engine',
    category: 'Data',
    shortDesc: 'Model Machine Learning untuk Mengoptimalkan Strategi Pemasaran Menggunakan Python (RFM) & React Dashboard.',
    fullDesc: 'Saya mengembangkan sistem analisis Full-Stack menggunakan Python (Pandas) untuk pemrosesan data otomatis dan algoritma RFM Segmentation, yang kemudian divisualisasikan melalui dashboard interaktif React JS.',
    role: 'Data Analyst',
    tags: ['Python Flask', 'Pandas', 'React', 'Rechart'],
    websiteUrl: 'https://superstore-analysis-phi.vercel.app/',
    githubUrl: 'https://github.com/sulisgogho/superstore-analysis',
    imageUrl: '/project/project5.png',
  },
  {
    id: 7,
    title: 'Game Ular Tangga Deeptalk',
    category: 'Web App',
    shortDesc: 'Game ular tangga untuk pasangan deeptalk',
    fullDesc: 'Game ular tangga untuk pasangan deeptalk',
    role: 'Fullstack Developer',
    tags: ['React', 'Node.js', 'Tailwind'],
    websiteUrl: 'https://ulartanggacinta.vercel.app/',
    githubUrl: 'https://github.com/sulisgogho/ular-tangga',
    imageUrl: '/project/project6.png',
  },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Menggabungkan Coding dan Trading: Panduan Pemula',
    excerpt: 'Bagaimana keterampilan pemrograman dapat memberi Anda keunggulan analitis di pasar keuangan.',
    fullContent:
      'Banyak trader mengandalkan insting, tetapi di era modern, data adalah raja. Dengan mempelajari bahasa pemrograman seperti Python, Anda dapat menarik data historis pasar menggunakan API, melakukan backtesting strategi Anda dalam hitungan detik, dan mengotomatiskan eksekusi perdagangan. Artikel ini membahas langkah-langkah dasar bagaimana saya memulai perjalanan algotrading saya, mulai dari menguasai Pandas untuk manipulasi data hingga menghubungkan script saya ke Binance API.',
    date: '12 Mei 2024',
    readTime: '5 min read',
    coverImg: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Pentingnya Data Cleaning Sebelum Mengambil Keputusan',
    excerpt: 'Data yang kotor menghasilkan keputusan yang salah. Berikut alur kerja ETL yang biasa saya gunakan.',
    fullContent:
      "Dalam analisis data, ada pepatah 'Garbage In, Garbage Out'. Jika Anda membangun model machine learning canggih atau dashboard yang indah di atas data yang cacat, hasilnya tidak akan valid. Di artikel ini, saya membagikan alur kerja ETL (Extract, Transform, Load) harian saya: menangani missing values, normalisasi format tanggal, hingga mendeteksi outlier menggunakan metode Z-score.",
    date: '28 April 2024',
    readTime: '7 min read',
    coverImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'SOP: Fondasi Rahasia Skalabilitas Startup',
    excerpt: 'Mengapa sistem administrasi yang terstruktur adalah kunci rahasia untuk mengembangkan perusahaan.',
    fullContent:
      'Seringkali SOP (Standard Operating Procedure) dianggap sebagai hal yang kaku dan membosankan. Namun, setelah merancang ulang alur kerja di beberapa perusahaan, saya menemukan bahwa SOP yang baik justru memberikan kebebasan. Ketika proses berulang sudah terdokumentasi dan terotomatisasi, tim Anda dapat fokus pada kreativitas dan pemecahan masalah strategis, bukan sekadar mengingat langkah-langkah administratif dasar.',
    date: '15 Mar 2024',
    readTime: '4 min read',
    coverImg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'React vs Vue untuk Dashboard Internal',
    excerpt: 'Perbandingan objektif dalam memilih framework frontend untuk aplikasi manajemen data.',
    fullContent: 'Memilih framework seringkali memicu perdebatan panjang. Dalam proyek terakhir saya, saya membuat perbandingan langsung antara React dan Vue untuk kebutuhan dashboard internal...',
    date: '02 Feb 2024',
    readTime: '6 min read',
    coverImg: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
  },
]
