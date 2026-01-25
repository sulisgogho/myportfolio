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
  { name: 'Python & Data Science', icon: <Brain size={20} />, level: 'Intermediate' },
  { name: 'Data Visualization', icon: <BarChart2 size={20} />, level: 'Intermediate' },
  { name: 'Database & SQL Design', icon: <Database size={20} />, level: 'Intermediate' },
  { name: 'Full Stack (React, Node.js)', icon: <Globe size={20} />, level: 'Intermediate' },
  { name: 'Backend API & Systems', icon: <Server size={20} />, level: 'Intermediate' },
  { name: 'DevOps & Cloud', icon: <Cpu size={20} />, level: 'Intermediate' },
]

export const projects = [
  {
    id: 1,
    title: 'Instacart Analytics & Recommendation Engine',
    description: 'Platform analitik end-to-end yang memanfaatkan machine learning untuk mengungkap pola belanja, memprediksi risiko churn, dan memberikan rekomendasi produk cerdas bagi optimalisasi bisnis ritel',
    details: {
      problem: 'Ritel online kesulitan mengidentifikasi pola kombinasi pembelian produk (cross-selling) dan memprediksi kapan pelanggan akan berhenti berbelanja (churn) di tengah jutaan data transaksi.',
      solution: 'Membangun platform Full-Stack Data Science berbasis Microservices (Docker). Mengintegrasikan algoritma Market Basket Analysis untuk rekomendasi produk dan model prediktif untuk strategi retensi pelanggan.',
      features: ['Sistem Rekomendasi Produk Otomatis (Association Rules)', 'Prediksi Risiko Churn & Customer Segmentation', 'Arsitektur Terisolasi (Docker, FastAPI, Next.js)'],
      date: 'Jan 2026',
    },
    tags: ['Python', 'Next.js', 'Docker', 'PostgreSQL'],
    stats: 'MAE: <5%',
    link: '#',
    github: 'https://github.com/sulisgogho/instacart-project',
    category: 'AI & Web Integration',
    image: '/assets/instacart_foto.png',
  },
  {
    id: 2,
    title: 'Superstore Sales Analysis & Customer Segmentation Engine',
    description: 'Mengoptimalkan Strategi Pemasaran Menggunakan Python (RFM) & React Dashboard.',
    // Data detail untuk tampilan Modal/Blog
    details: {
      problem: 'Kesulitan bisnis retail dalam mengidentifikasi segmen pelanggan bernilai tinggi dan memantau tren penjualan secara real-time dari ribuan data transaksi mentah yang kompleks.',
      solution: 'Saya mengembangkan sistem analisis Full-Stack menggunakan Python (Pandas) untuk pemrosesan data otomatis dan algoritma RFM Segmentation, yang kemudian divisualisasikan melalui dashboard interaktif React JS.',
      features: ['Segmentasi Pelanggan Otomatis (Metode RFM)', 'Visualisasi Tren Penjualan & KPI Real-time', 'Upload & Parsing Dataset CSV Skala Besar', 'Arsitektur Terpisah (Decoupled) React & Flask'],
      date: 'Des 2025',
    },
    tags: ['React', 'Flask', 'Pandas', 'Recharts'],
    stats: 'User Base: 1,000+',
    link: 'https://superstore-analysis-phi.vercel.app/',
    github: 'https://github.com/sulisgogho/superstore-analysis',
    category: 'Data Analysis& Web Dev',
    image: '/assets/superstore.png',
  },
  {
    id: 3,
    title: 'Dasmeter Classification with KNN',
    description: 'Klasifikasi Tingkat Depresi, Kecemasan, dan Stress Menggunakan K-Nearest Neighbors (KNN) pada Dataset DASS-21.',
    details: {
      problem: 'Kurangnya kesadaran dan akses terhadap deteksi dini gangguan mental seringkali menyebabkan komplikasi psikologis yang lebih serius dan penanganan yang terlambat.',
      solution: 'Mengembangkan sistem klasifikasi otomatis berbasis Machine Learning yang mengintegrasikan instrumen DASS (Depression Anxiety Stress Scales) untuk memberikan evaluasi real-time dan rekomendasi personal.',
      features: ['DASS-42 Methodology Integration', 'Real-time ML Classification', 'Personalized Intervention System'],
      date: 'Nov 2024',
    },
    tags: ['Streamlit', 'Python', 'Pandas', 'DASS-21'],
    stats: 'Query Time: -70%',
    link: '#',
    github: 'https://github.com/sulisgogho/dasmeter',
    category: 'Data Engineering',
    image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
]

export const blogPosts = [
  {
    id: 1,
    slug: 'otomatisasi-laporan-python',
    title: 'Mengotomatisasi Laporan Mingguan: Bagaimana Script Python Menghemat 10 Jam Kerja',
    excerpt: 'Studi kasus bagaimana saya mengubah proses laporan manual yang membosankan menjadi script otomatis yang berjalan dalam hitungan detik.',
    date: '27 Des 2024', // Sesuaikan tanggal
    readTime: '6 min read',
    category: 'Automation',
    content: `
      <p class="mb-4">
        Setiap Senin pagi, tim Sales menghadapi mimpi buruk yang sama: <strong>"Ritual Laporan Mingguan."</strong>
      </p>

      <p class="mb-6">
        Sebelumnya, manajer penjualan dan dua staf admin harus menghabiskan waktu sekitar 2 jam masing-masing untuk mengunduh CSV dari CRM, membersihkan data di Excel, membuat Pivot Table, lalu menyalin grafik ke PowerPoint untuk presentasi manajemen.
        Total waktu terbuang: <strong>10 jam per minggu</strong>.
      </p>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Masalah: Data Terpecah</h3>
      <p class="mb-4">
        Tantangan utamanya adalah data tidak berada di satu tempat yang terpusat:
      </p>
      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li>Data Transaksi ada di <strong>SQL Database</strong>.</li>
        <li>Target Penjualan ada di <strong>Google Sheets</strong>.</li>
        <li>Data Logistik ada di file <strong>CSV harian</strong>.</li>
      </ul>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Solusi: Python Script</h3>
      <p class="mb-4">
        Saya membangun script Python sederhana menggunakan library <code>Pandas</code> untuk pengolahan data dan <code>smtplib</code> untuk pengiriman email otomatis. Berikut adalah gambaran logikanya:
      </p>

      <div class="bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-sm mb-8 overflow-x-auto">
        <span class="text-slate-500"># 1. Load Data dari berbagai sumber</span><br/>
        <span class="text-purple-400">df_sales</span> = pd.read_sql(query, connection)<br/>
        <span class="text-purple-400">df_target</span> = pd.read_csv(<span class="text-green-400">'targets.csv'</span>)<br/><br/>
        
        <span class="text-slate-500"># 2. Data Cleaning & Merge</span><br/>
        <span class="text-purple-400">df_final</span> = pd.merge(df_sales, df_target, on=<span class="text-green-400">'sales_id'</span>)<br/><br/>
        
        <span class="text-slate-500"># 3. Kirim Email Otomatis</span><br/>
        <span class="text-blue-400">send_email</span>(to=<span class="text-green-400">'manager@company.com'</span>, attachment=<span class="text-green-400">'report.xlsx'</span>)
      </div>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Dampak Bisnis</h3>
      <p class="mb-6">
        Script ini sekarang berjalan otomatis setiap Senin pukul 08:00 pagi. Berikut perbandingannya:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="p-5 bg-red-500/10 border border-red-500/20 rounded-lg">
          <h4 class="font-bold text-red-400 mb-2">⛔ Sebelum</h4>
          <ul class="text-sm space-y-1 text-slate-300">
            <li>• 10 Jam kerja/minggu terbuang</li>
            <li>• Rentan human error (typo)</li>
            <li>• Laporan baru siap siang hari</li>
          </ul>
        </div>
        <div class="p-5 bg-green-500/10 border border-green-500/20 rounded-lg">
          <h4 class="font-bold text-green-400 mb-2">✅ Sesudah</h4>
          <ul class="text-sm space-y-1 text-slate-300">
            <li>• 0 Jam kerja (Full Otomatis)</li>
            <li>• 100% Akurat (Programmatic)</li>
            <li>• Laporan siap jam 8 pagi</li>
          </ul>
        </div>
      </div>

      <p>
        Proyek ini membuktikan bahwa <strong>Data Analytics</strong> bukan hanya tentang grafik yang bagus, tapi juga tentang efisiensi operasional yang nyata.
      </p>
    `,
  },
  {
    id: 2,
    slug: 'analisis-kohort-churn',
    title: 'Lebih dari Sekadar Grafik: Mengungkap Penyebab Churn dengan Analisis Kohort',
    excerpt: 'Bagaimana saya menggunakan SQL dan Python untuk menggali alasan spesifik mengapa user berhenti berlangganan di bulan ke-3.',
    date: '10 Feb 2025',
    readTime: '8 min read',
    category: 'Data Analysis',
    content: `
      <p class="mb-4">
        Salah satu kesalahan terbesar startup adalah terlalu fokus pada <em>Vanity Metrics</em> seperti "Total User". Angka ini selalu naik, tapi menyembunyikan kebenaran yang menyakitkan: <strong>Seberapa banyak user yang bertahan?</strong>
      </p>

      <p class="mb-6">
        Dalam studi kasus ini, saya ditugaskan untuk menyelidiki mengapa pertumbuhan revenue stagnan meskipun user baru terus berdatangan. Jawabannya bukan pada grafik garis biasa, tapi pada <strong>Cohort Analysis</strong>.
      </p>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Langkah 1: The SQL Query</h3>
      <p class="mb-4">
        Saya tidak menggunakan drag-and-drop tools. Saya menulis query SQL kompleks untuk mengelompokkan user berdasarkan bulan pertama mereka mendaftar (Cohort Month) dan melacak aktivitas mereka di bulan-bulan berikutnya.
      </p>

      <div class="bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-sm mb-8 overflow-x-auto">
        <span class="text-purple-400">WITH</span> monthly_activity <span class="text-purple-400">AS</span> (<br/>
        &nbsp;&nbsp;<span class="text-purple-400">SELECT</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;user_id,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;DATE_TRUNC(<span class="text-green-400">'month'</span>, created_at) <span class="text-purple-400">as</span> cohort_month,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;DATE_TRUNC(<span class="text-green-400">'month'</span>, activity_date) <span class="text-purple-400">as</span> activity_month<br/>
        &nbsp;&nbsp;<span class="text-purple-400">FROM</span> transactions<br/>
        )<br/>
        <span class="text-slate-500">-- Query berlanjut untuk menghitung retention rate...</span>
      </div>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Temuan: "The Month-3 Drop"</h3>
      <p class="mb-4">
        Setelah memvisualisasikan data tersebut menggunakan Heatmap di Python (Seaborn), pola mengejutkan muncul:
      </p>
      
      <div class="p-4 border-l-4 border-yellow-500 bg-yellow-500/10 mb-6">
        <p class="italic text-yellow-200">
          "Retensi user stabil di angka 80% pada Bulan 1 dan 2. Namun, <strong>jatuh drastis ke angka 30% tepat di Bulan ke-3.</strong>"
        </p>
      </div>

      <p class="mb-4">
        Ini bukan kebetulan. Setelah berdiskusi dengan tim produk, kami menemukan bahwa <strong>diskon pengguna baru berakhir tepat setelah 3 bulan</strong>. Namun, user tidak merasa mendapatkan nilai lebih (value) setelah harga normal berlaku.
      </p>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Rekomendasi & Hasil</h3>
      <p class="mb-4">
        Berdasarkan data ini, saya merekomendasikan strategi <em>Lifecycle Marketing</em> baru: mengirimkan email edukasi fitur premium pada minggu ke-10 (sebelum diskon habis).
      </p>
      <p>
        <strong>Hasilnya?</strong> Dalam 2 bulan penerapan, retensi bulan ke-3 meningkat dari 30% menjadi <strong>55%</strong>. Data menyelamatkan pendapatan perusahaan.
      </p>
    `,
  },
  {
    id: 3,
    slug: 'dashboard-react-custom',
    title: 'Membangun Dashboard Custom dengan React & Recharts (Tanpa Tableau)',
    excerpt: 'Mengapa saya memilih membangun dashboard analitik sendiri menggunakan MERN Stack daripada membayar lisensi software BI yang mahal.',
    date: '11 Oktober 2025',
    readTime: '10 min read',
    category: 'Full Stack',
    content: `
      <p class="mb-4">
        Sebagai Data Analyst, Tableau dan PowerBI adalah teman sehari-hari. Tapi sebagai Developer, saya sering merasa terbatasi. Bagaimana jika klien butuh fitur yang sangat spesifik? Atau bagaimana jika biaya lisensi per-user terlalu mahal untuk startup kecil?
      </p>

      <p class="mb-6">
        Jawabannya: <strong>Build it yourself.</strong> Di artikel ini, saya akan membedah arsitektur Dashboard Penjualan Real-time yang saya bangun menggunakan ekosistem JavaScript.
      </p>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-white">The Tech Stack</h3>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <li class="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <strong class="text-blue-400 block mb-1">Frontend</strong>
            Next.js & Tailwind CSS untuk UI yang cepat dan responsif.
        </li>
        <li class="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <strong class="text-green-400 block mb-1">Visualization</strong>
            Recharts & D3.js untuk kontrol piksel yang sempurna.
        </li>
        <li class="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <strong class="text-yellow-400 block mb-1">Backend</strong>
            Node.js (Express) untuk API endpoint.
        </li>
        <li class="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <strong class="text-purple-400 block mb-1">Database</strong>
            MongoDB dengan Aggregation Pipeline untuk query cepat.
        </li>
      </ul>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Tantangan: Performa Rendering</h3>
      <p class="mb-4">
        Menampilkan 10.000 titik data di browser bisa membuat aplikasi lambat (lag). Solusi saya adalah melakukan agregasi data di sisi Backend sebelum dikirim ke Frontend.
      </p>

      <div class="bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-sm mb-8 overflow-x-auto">
        <span class="text-slate-500">// React Component: Memoized Chart</span><br/>
        <span class="text-purple-400">const</span> SalesChart = useMemo(() => {<br/>
        &nbsp;&nbsp;<span class="text-purple-400">return</span> (<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="text-blue-400">ResponsiveContainer</span> width=<span class="text-green-400">"100%"</span>&gt;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="text-blue-400">AreaChart</span> data={data} /&gt;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="text-blue-400">ResponsiveContainer</span>&gt;<br/>
        &nbsp;&nbsp;);<br/>
        }, [data]);
      </div>

      <h3 class="text-2xl font-bold mt-8 mb-4 text-white">Kesimpulan</h3>
      <p class="mb-4">
        Membangun dashboard sendiri memberikan fleksibilitas tanpa batas. Saya bisa mengintegrasikan fitur autentikasi, export PDF custom, hingga notifikasi WhatsApp—hal yang sulit dilakukan di tools BI konvensional.
      </p>
      <p>
        Ini adalah bukti kekuatan menjadi seorang <strong>Hybrid (Analyst + Developer)</strong>: Anda tidak hanya bisa membaca data, tapi juga bisa membangun alat untuk menyajikannya.
      </p>
    `,
  },
]
