import { Globe, Brain, Database, Server, BarChart2, Cpu, Code, FileSpreadsheet } from 'lucide-react'

export const personalInfo = {
  name: 'Sulistyowati Munawaroh',
  role: 'Data Analyst & Fullstack Dev',
  bio: 'Mengubah data kompleks menjadi wawasan bisnis strategis, didukung oleh kemampuan teknis dalam membangun aplikasi web Full Stack yang skalabel. Spesialis dalam Python untuk Data Science dan ekosistem JavaScript modern.',
  email: 'sulistyowatimunawaroh@gmail.com',
  github: 'https://github.com/sulisgogho',
  linkedin: 'https://linkedin.com/in/sulistyowati-munawaroh',
  location: 'Surabaya, Indonesia',
}

export const skills = [
  { name: 'Full Stack (React, Node.js)', icon: <Globe size={20} />, level: 'Expert' },
  { name: 'Python & Data Science', icon: <Brain size={20} />, level: 'Expert' },
  { name: 'Database & SQL Design', icon: <Database size={20} />, level: 'Expert' },
  { name: 'Backend API & Systems', icon: <Server size={20} />, level: 'Advanced' },
  { name: 'Data Visualization', icon: <BarChart2 size={20} />, level: 'Advanced' },
  { name: 'DevOps & Cloud', icon: <Cpu size={20} />, level: 'Intermediate' },
]

export const projects = [
  {
    id: 1,
    title: 'Superstore Sales Analysis & Customer Segmentation Engine',
    description: 'Mengoptimalkan Strategi Pemasaran Menggunakan Python (RFM) & React Dashboard.',
    tags: ['React', 'Flask', 'Pandas', 'Recharts'],
    stats: 'User Base: 1,000+',
    link: 'https://superstore-analysis-phi.vercel.app/',
    github: 'https://github.com/sulisgogho/superstore-analysis',
    category: 'Data Analysis& Web Dev',
  },
  {
    id: 2,
    title: 'Instacart Analytics & Recommendation Engine',
    description: 'Platform analitik end-to-end yang memanfaatkan machine learning untuk mengungkap pola belanja, memprediksi risiko churn, dan memberikan rekomendasi produk cerdas bagi optimalisasi bisnis ritel',
    tags: ['Python', 'Next.js', 'FastAPI', 'Docker'],
    stats: 'MAE: <5%',
    link: '#',
    github: 'https://github.com/sulisgogho/instacart-project',
    category: 'AI & Web Integration',
  },
  {
    id: 3,
    title: 'Classification Anxiety with KNN',
    description: 'Klasifikasi tingkat kecemasan atlet menggunakan algoritma KNN',
    tags: ['PostgreSQL', 'BigQuery', 'Data Engineering'],
    stats: 'Accuracy:98%',
    link: '#',
    github: '#',
    category: 'Data Engineering',
  },
]

export const blogPosts = [
  {
    id: 1,
    slug: 'memahami-sql-joins',
    title: 'Memahami SQL Joins',
    excerpt: 'Panduan visual lengkap untuk memahami perbedaan antara Inner, Left, Right, dan Full Outer Joins.',
    content: '<p>Konten lengkap artikel...</p>',
    date: '12 Okt 2023',
    readTime: '5 min read',
    category: 'SQL',
  },
  {
    id: 2,
    slug: 'data-cleaning-tips',
    title: 'Tips Data Cleaning',
    excerpt: 'Eksplorasi tantangan nyata dalam pembersihan data dan strategi efektif.',
    content: '<p>Konten lengkap artikel...</p>',
    date: '25 Sep 2023',
    readTime: '7 min read',
    category: 'Data Engineering',
  },
  {
    id: 3,
    slug: 'storytelling-data',
    title: 'Storytelling dengan Data',
    excerpt: 'Bagaimana cara menyusun narasi yang kuat di balik angka-angka.',
    content: '<p>Konten lengkap artikel...</p>',
    date: '10 Agt 2023',
    readTime: '4 min read',
    category: 'Soft Skills',
  },
]
