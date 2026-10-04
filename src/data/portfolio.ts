import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Sulistyowati Munawaroh',
        title: 'Fullstack Developer & Data Analyst',
        subtitle: 'Building Scalable Fullstack Applications & Integrated Data Analytics.',
        bio: 'Informatics Engineering graduate (3.86 GPA) focusing on Fullstack Development and Data Analytics. Experienced in building high-performance interactive web applications with React, Next.js, TypeScript, as well as data visualization and analytical processing using Python and SQL.',
        avatar: '/about/tyo.png',
        location: 'Probolinggo, East Java, Indonesia',
        email: 'sulistyowatimunawaroh@gmail.com',
        phone: '+62-822-3344-7474',
        website: '',
        socialLinks: [
            { platform: 'GitHub', url: 'https://github.com/sulisgogho', icon: 'github', username: 'sulisgogho' },
            { platform: 'LinkedIn', url: 'https://linkedin.com/in/sulistyowati-munawaroh', icon: 'linkedin', username: 'sulistyowati-munawaroh' },
            { platform: 'Instagram', url: 'https://instagram.com/sulisgogho123', icon: 'instagram', username: 'sulisgogho123' }
        ],
        languages: [
            { name: 'Indonesian', level: 'Native' },
            { name: 'English', level: 'Professional' }
        ]
    },
    projects: [
        {
            id: 'proj-1',
            slug: 'infly-network',
            title: 'Infly Network',
            description: 'A comprehensive customer management and multi-month billing application designed specifically for WiFi service providers.',
            longDescription: 'Developed a full-stack customer management system tailored for Infly Networks to streamline their WiFi service operations. The application facilitates efficient subscriber data management, network service tracking, and multi-month billing cycles. Built with Next.js, Tailwind CSS, and Supabase, the platform provides administrators with a secure, fast, and responsive dashboard to manage daily business operations and customer relationships seamlessly.',
            image: '/project/infly/infly.png',
            techStack: ['Next.js', 'Tailwind CSS', 'Supabase', 'Responsive Design'],
            tools: ['VS Code'],
            status: 'completed',
            demoUrl: 'https://infly-networks.vercel.app/',
            startDate: '2026-09-10',
            category: 'Website',
            role: 'Fullstack Developer',
            galleryImages: [
                '/project/infly/infly1.png',
                '/project/infly/infly2.png',
                '/project/infly/infly3.png',
                '/project/infly/infly4.png',
                '/project/infly/infly5.png',
            ]
        },
        {
            id: 'proj-2',
            slug: 'web-probolinggo',
            title: 'Probolinggo Web Portal',
            description: 'Integrated digital information portal to promote tourism and regional potential of Probolinggo.',
            longDescription: 'Built a responsive website platform presenting the latest information, tourist destinations, and local SMEs in Probolinggo. Integrated modern design and a content management system to facilitate regular regional information updates.',
            image: '/project/kabpro/kabpro.png',
            techStack: ['React', 'Next.js', 'Tailwind CSS', 'CMS'],
            tools: ['VS Code'],
            status: 'completed',
            demoUrl: 'https://kabpro-delta.vercel.app/',
            startDate: '2026-07-8',
            category: 'Website',
            role: 'Fullstack Developer',
            galleryImages: [
                '/project/kabpro/kabpro1.png',
                '/project/kabpro/kabpro2.png',
                '/project/kabpro/kabpro3.png',
                '/project/kabpro/kabpro4.png',
                '/project/kabpro/kabpro5.png',
            ]
        },
        {
            id: 'proj-3',
            slug: 'superstore-sales-analysis',
            title: 'Superstore Sales Analysis & Customer Segmentation Engine',
            description: 'Machine Learning model to optimize marketing strategies using Python (RFM) & React Dashboard.',
            longDescription: 'Developed a Full-Stack analysis system using Python (Pandas) for automated data processing and RFM Segmentation algorithms, subsequently visualized through an interactive React JS dashboard.',
            image: '/project/project5.png',
            techStack: ['Python Flask', 'Pandas', 'React', 'Rechart'],
            tools: ['VS Code', 'Jupyter'],
            status: 'completed',
            demoUrl: 'https://superstore-analysis-phi.vercel.app/',
            repoUrl: 'https://github.com/sulisgogho/superstore-analysis',
            startDate: '2023-01-01',
            category: 'Data',
            role: 'Data Analyst',
            galleryImages: [
                '/project/project5.png',
                '/project/project5.png',
                '/project/project5.png',
                '/project/project5.png',
                '/project/project5.png',
            ]
        },
        {
            id: 'proj-4',
            slug: 'golib-goghotech-library',
            title: 'GoLib - Interactive Digital Library',
            description: 'Part of the Goghotech ecosystem, GoLib is an interactive digital library web application designed to make reading PDF book collections easy and comfortable.',
            longDescription: `GoLib is a digital library platform developed as part of the Goghotech ecosystem. The inspiration for creating this website stems from my personal hobby of reading books, but being constrained by a lack of funds to purchase them directly. Therefore, this platform was built to organize and arrange PDF books to resemble a real library layout, making it easy for users to browse and read books for free.

The website features an interactive flipbook-style reading interface, complete with dark and light theme options to provide an optimal reading experience.

Disclaimer: The GoLib platform is intended purely as an educational medium[cite: 1]. I strongly encourage all readers to continue appreciating and supporting the authors' works by reading or purchasing books legally through official websites, bookstores, or authorized provider applications[cite: 1].`,
            image: '/project/golib/golib.png',
            techStack: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui'],
            tools: ['Git', 'VS Code'],
            status: 'completed',
            demoUrl: 'https://golib-rho.vercel.app/',
            startDate: '2026-09-12',
            category: 'Goghotech',
            role: 'Full-Stack Developer',
            galleryImages: [
                '/project/golib/golib1.png',
                '/project/golib/golib2.png',
                '/project/golib/golib3.png',
                '/project/golib/golib4.png'
            ]
        },
        {
            id: 'proj-5',
            slug: 'gonotes-productivity-app',
            title: 'GoNotes - Productivity & Habit Tracker',
            description: 'Aplikasi produktivitas berbasis web yang dilengkapi dengan habit tracker, to-do list, timer Pomodoro, jurnal harian, dan dashboard analitik.',
            longDescription: 'Berawal dari keresahan pribadi untuk mengatur jadwal harian yang berantakan, GoNotes dikembangkan menjadi aplikasi produktivitas yang komprehensif. Aplikasi ini dilengkapi dengan fitur kustomisasi habit, to-do list terintegrasi Pomodoro, jurnal harian, dan dashboard analitik dari skala harian hingga tahunan. Dibangun menggunakan Next.js, Firebase (Autentikasi & Database), dan Tailwind CSS, aplikasi ini mendukung Dark/Light mode, responsif, dan dapat diinstal (PWA) di berbagai perangkat.',
            image: '/project/gonotes/gonotes.png',
            techStack: ['Next.js', 'Tailwind CSS', 'Firebase'],
            tools: ['VS Code', 'Git', 'Vercel'],
            status: 'completed',
            demoUrl: 'https://fokusku-dun.vercel.app/',
            repoUrl: 'https://github.com/sulisgogho/fokusku',
            startDate: '2026-09-02',
            category: 'Goghotech',
            role: 'Full-Stack Developer',
            galleryImages: [
                '/project/gonotes/gonotes1.png',
                '/project/gonotes/gonotes2.png',
                '/project/gonotes/gonotes3.png',
                '/project/gonotes/gonotes4.png'
            ]
        },
        {
            id: 'proj-6',
            slug: 'cahaya-makmur-profile',
            title: 'UD Cahaya Makmur Company Profile',
            description: 'Company profile and catalog website for UD Cahaya Makmur.',
            longDescription: 'A company profile website for branding purposes and making it easier for potential customers to view the sales catalog of UD Cahaya Makmur.',
            image: '/project/cahaya/cahaya.png',
            techStack: ['React', 'Node.js', 'Tailwind'],
            tools: ['VS Code'],
            status: 'completed',
            demoUrl: 'https://www.udcahayamakmur.id/',
            repoUrl: 'https://github.com/sulisgogho/cahaya-makmur',
            startDate: '2023-01-01',
            category: 'Website',
            role: 'Fullstack Developer',
            galleryImages: [
                '/project/cahaya/cahaya1.png',
                '/project/cahaya/cahaya2.png',
                '/project/cahaya/cahaya3.png',
                '/project/cahaya/cahaya4.png',
                '/project/cahaya/cahaya5.png',
            ]
        },
        {
            id: 'proj-7',
            slug: 'bot-trading-momentum',
            title: 'Momentum Candle Trading Bot',
            description: 'Automated trading bot implementing the Momentum Candle strategy.',
            longDescription: 'Developed an automated trading bot using MQL5 that executes strategies in the XAUUSD Forex market.',
            image: '/project/project4.png',
            techStack: ['MQ5', 'Momentum Candle', 'Forex Trading'],
            tools: ['MetaTrader 5'],
            status: 'completed',
            demoUrl: 'https://drive.google.com/uc?export=download&id=1x43LhPeDvp0Dd5mqykYSc1iLm5jU8dHe',
            repoUrl: 'https://github.com/sulisgogho/bot-trading-momentum',
            startDate: '2023-01-01',
            category: 'Trading',
            role: 'Quant Developer',
            galleryImages: [
                '/project/project4.png',
                '/project/project4.png',
                '/project/project4.png',
                '/project/project4.png',
                '/project/project4.png',
            ]
        },
        {
            id: 'proj-8',
            slug: 'game-ular-tangga-deeptalk',
            title: 'Deep Talk Snakes and Ladders Game',
            description: 'Snakes and ladders game designed for couples to have deep talks.',
            longDescription: 'An interactive snakes and ladders game specifically tailored for couples to engage in meaningful and deep conversations.',
            image: '/project/project6.png',
            techStack: ['React', 'Node.js', 'Tailwind'],
            tools: ['VS Code'],
            status: 'completed',
            demoUrl: 'https://ulartanggacinta.vercel.app/',
            repoUrl: 'https://github.com/sulisgogho/ular-tangga',
            startDate: '2023-01-01',
            category: 'Website',
            role: 'Fullstack Developer',
            galleryImages: [
                '/project/project6.png',

            ]
        },
        {
            id: 'proj-9',
            slug: 'gogames',
            title: 'GoGames - Educational and Entertaining Game',
            description: 'Educational game application to train speed and accuracy in basic arithmetic.',
            longDescription: 'Built an interactive web-based platform to test users fast counting skills with various difficulty levels, precision timing calculations, and a dynamic on-screen scoring system.',
            image: '/project/TangkasHitung.png',
            techStack: ['React', 'JavaScript', 'Tailwind CSS'],
            tools: ['VS Code'],
            status: 'completed',
            demoUrl: 'https://tangkas-hitung.vercel.app/',
            startDate: '2026-05-10',
            category: 'Goghotech',
            role: 'Fullstack Developer',
            galleryImages: [
                '/project/TangkasHitung.png',
            ]
        },
        {
            id: 'proj-10',
            slug: 'gofin-goghotech-financial',
            title: 'GoFin - Financial Tracking System',
            description: 'Web application for tracking daily financial expenses for singles and couples.',
            longDescription: 'Built a full-stack application to track inventory items in real-time with notification features and a comprehensive dashboard.',
            image: '/project/project2.png',
            techStack: ['React', 'Node.js', 'Tailwind'],
            tools: ['VS Code', 'Git'],
            status: 'completed',
            demoUrl: 'https://catetduit.vercel.app/login',
            repoUrl: 'https://github.com/sulisgogho/CatetDuit',
            startDate: '2026-03-14',
            category: 'Goghotech',
            role: 'Fullstack Developer',
            galleryImages: [
                '/project/project2.png',
                '/project/project2.png',
                '/project/project2.png',
                '/project/project2.png',
                '/project/project2.png',
            ]
        },
        {
            id: 'proj-11',
            slug: 'emerging-skill-trends',
            title: 'Analyzing Emerging Skill Requirements and Technology Trends',
            description: 'Interactive dashboard using Python and SQLite to analyze global developer ecosystem trends.',
            longDescription: `Analyzed the global developer ecosystem using Stack Overflow Survey data, BeautifulSoup web-scraping data, and API simulations to identify future technology trend shifts.
Detailed technical competencies and workflows learned:
• Data Collection & Wrangling (SQL & Python): Merged survey CSV data with external scraped salary data, handled missing values (Mode/Median), removed duplicates, and filtered outliers using the Interquartile Range (IQR) method.
• Exploratory Data Analysis (Python): Performed string manipulation and data aggregation using Pandas and NumPy to map programming language trends, databases, cloud infrastructure, and demographics in depth.
• Data Visualization & Dashboarding (Plotly, Seaborn, & WordCloud): Built interactive stakeholder dashboards with multi-panel visualizations such as Bubble Charts, Word Clouds, Treemaps, and dynamic geographic mapping to generate actionable business insights.`,
            image: '/project/project1.png',
            techStack: ['Python', 'SQL', 'Pandas', 'BeautifulSoup', 'Plotly', 'Data Visualization'],
            tools: ['Jupyter', 'SQLite'],
            status: 'completed',
            demoUrl: 'https://drive.google.com/uc?export=download&id=1p5NZLzX5qTIP72Ps6SCA0RFLc0qxMd5j',
            startDate: '2023-01-01',
            category: 'Data',
            role: 'Data Analyst / Quantitative Analyst',
            galleryImages: [
                '/project/project1.png',
                '/project/project1.png',
                '/project/project1.png',
                '/project/project1.png',
                '/project/project1.png',
            ]
        },
        {
            id: 'proj-12',
            slug: 'test-koran',
            title: 'Gotest - Job Preparation Test',
            description: 'Web-based Kraepelin/Pauli psychological test simulation for recruitment practice.',
            longDescription: 'Digitized the number concentration test (newspaper test) into a dynamic web application. The system can calculate speed metrics, accuracy rates, and generate a user work endurance graph instantly once the test session ends.',
            image: '/project/teskoran.png',
            techStack: ['React', 'JavaScript', 'Recharts'],
            tools: ['VS Code'],
            status: 'completed',
            demoUrl: 'https://tes-koran-rho.vercel.app/',
            startDate: '2023-01-01',
            category: 'Goghotech',
            role: 'Fullstack Developer',
            galleryImages: [
                '/project/teskoran.png'
            ]
        },
        {
            id: 'proj-13',
            slug: 'absensi-les',
            title: 'Tutoring Attendance System',
            description: 'Integrated digital attendance management system for tutoring centers.',
            longDescription: 'Web-based application for tracking student attendance in real-time. This system is equipped with automatic monthly recapitulation features and an analytical reporting dashboard to facilitate monitoring by tutors.',
            image: '/project/absensi.png',
            techStack: ['React', 'Express.js', 'MySQL', 'Tailwind', 'Chart.js'],
            tools: ['VS Code'],
            status: 'completed',
            demoUrl: 'https://absensi-les.vercel.app/',
            startDate: '2026-06-20',
            category: 'Website',
            role: 'Fullstack Developer',
            galleryImages: [
                '/project/absensi/absensi1.png',
                '/project/absensi/absensi2.png',
                '/project/absensi/absensi3.png',
                '/project/absensi/absensi4.png',
            ]
        },
        {
            id: 'proj-14',
            slug: 'sales-analysis',
            title: 'Superstore Sales Analysis & Customer Segmentation Engine',
            description: 'Machine Learning model to optimize marketing strategies using Python (RFM) & React Dashboard.',
            longDescription: 'Developed a Full-Stack analysis system using Python (Pandas) for automated data processing and RFM Segmentation algorithms, subsequently visualized through an interactive React JS dashboard.',
            image: '/project/project5.png',
            techStack: ['Python Flask', 'Pandas', 'React', 'Rechart'],
            tools: ['VS Code', 'Jupyter'],
            status: 'completed',
            demoUrl: 'https://superstore-analysis-phi.vercel.app/',
            repoUrl: 'https://github.com/sulisgogho/superstore-analysis',
            startDate: '2025-07-01',
            category: 'Data',
            role: 'Data Analyst',
            galleryImages: [
                '/project/project5.png'

            ]
        },
    ],
    experiences: [
        {
            id: 'exp-1',
            company: 'PT Global Jet Express (J&T Express)',
            position: 'Daily Worker Staff Processing',
            description: 'Managed the accuracy of inbound/outbound logistics package data and optimized daily distribution data processing using advanced Excel functions.\n\nResponsible for ensuring real-time logistics data synchronization between physical scanning and the central database using an integrated logistics system.',
            skills: ['Excel', 'Data Processing', 'Logistics'],
            startDate: '2026-01-01',
            isOngoing: true,
            location: 'Gresik, Indonesia',
            type: 'freelance',
            responsibilities: [
                'Data Synchronization: Managed the accuracy of inbound and outbound package data to ensure data consistency in the central logistics system.',
                'Operational KPI Analysis: Monitored and analyzed operational KPI reports, including evaluating miss-route rates and distribution efficiency at various drop points.',
                'Quality Control: Conducted periodic validations on delivery status and QC inspections to ensure package integrity and data consistency within the system.',
                'Report Optimization: Optimized daily distribution data processing using Advanced Excel functions to generate analytical reports supporting warehouse operational decision-making.'
            ]
        },
        {
            id: 'exp-2',
            company: 'PT Federal International Finance (FIF Group)',
            position: 'Account Officer',
            description: 'Verified customer documents, managed daily report databases, and maintained corporate administrative archives.\n\nResponsible for the validity of application data and the accuracy of daily consumer administrative reporting.',
            skills: ['Data Entry', 'Verification', 'Archiving'],
            startDate: '2025-03-01',
            endDate: '2025-08-01',
            isOngoing: false,
            location: 'Indonesia',
            type: 'contract',
            responsibilities: [
                'Document Verification: Checked and validated customer files and documents to ensure all submitted data is accurate, valid, and complete according to procedures.',
                'Data Entry & Reporting: Inputted field data into the company database in a structured manner for the preparation of daily reports.',
                'Archive Management: Managed medical records/customer records and kept administrative files organized and up-to-date.'
            ]
        },
        {
            id: 'exp-3',
            company: 'Faculty of Engineering Student Executive Board (BEM FT)',
            position: 'Head of Research and Technology Division',
            description: 'Led the division engaged in research development and technology implementation within the Engineering Faculty student organization environment.',
            skills: ['Leadership', 'Event Management', 'Tech Strategy'],
            startDate: '2022-09-01',
            endDate: '2023-08-01',
            isOngoing: false,
            location: 'Jember, Indonesia',
            type: 'volunteer',
            responsibilities: [
                'Workshop Developer: Led the implementation of various technology-based workshops to improve students digital competencies.',
                'Information Management: Took full responsibility for managing the faculty digital information system and ensuring data accessibility runs well.',
                'Organizational Administration: Managed all documentation, recording, and periodic reporting of organizational activities.'
            ]
        },
        {
            id: 'exp-4',
            company: 'ICT Volunteers (Relawan TIK) Jember',
            position: 'Human Resources Division Board',
            description: 'Provided digital literacy education to more than 1,000 participants and conducted technology socialization to various public institutions.',
            skills: ['Public Speaking', 'Digital Literacy', 'Event Organizing'],
            startDate: '2022-07-01',
            endDate: '2025-02-01',
            isOngoing: false,
            location: 'Jember, Indonesia',
            type: 'volunteer',
            responsibilities: [
                'Massive Education: Successfully delivered digital literacy training and education to more than 1,000 participants from various backgrounds.',
                'Technology Socialization: Organized technology socialization programs and external outreach for schools and public institutions.'
            ]
        }
    ],
    education: [
        {
            id: 'edu-1',
            institution: 'Universitas Muhammadiyah Jember',
            degree: 'Bachelor Degree (S1)',
            major: 'Informatics Engineering',
            startDate: '2020-08-01',
            endDate: '2024-06-01',
            isOngoing: false,
            gpa: '3.86',
            achievements: [
                'Best Graduate (Highest GPA in Faculty of Engineering)',
                'Gold Medalist at National Scientific Paper Competition APSI PTMA'
            ]
        }
    ],
    achievements: [
        {
            id: 'cert-1',
            title: 'Lulusan Terbaik & IPK Tertinggi Fakultas Teknik (3.86)',
            issuer: 'Universitas Muhammadiyah Jember',
            date: '2024-06-01',
            description: 'Penghargaan akademik tertinggi sebagai Wisudawan Terbaik dengan Indeks Prestasi Kumulatif (IPK) 3.86 di Fakultas Teknik pada Wisuda Semester Genap Tahun Akademik 2023/2024.',
            image: '/certificate/IPK Tertinggi.jpg',
            credentialId: 'WISUDA-FT-2024',
            tags: ['Academic Excellence', 'Highest GPA', 'Faculty of Engineering'],
            type: 'Academic Award',
            category: 'award'
        },
        {
            id: 'cert-2',
            title: 'Medali Emas LKTIN APSI PTMA (Juara 1)',
            issuer: 'Asosiasi Program Studi Informatika (APSI) PTMA',
            date: '2022-11-15',
            description: 'Juara 1 (Gold Medalist) Lomba Karya Tulis Ilmiah Nasional pada Rapat Koordinasi Nasional (RAKORNAS) APSI PTMA yang diselenggarakan di Ternate.',
            image: '/certificate/apsi-emas.jpg',
            credentialId: 'LKTIN-APSI-01',
            tags: ['Scientific Paper', 'Informatics', 'National Competition'],
            type: 'National Championship',
            category: 'award'
        },
        {
            id: 'cert-3',
            title: 'Medali Perak LKTIN APSI PTMA (Juara 2)',
            issuer: 'Asosiasi Program Studi Informatika (APSI) PTMA',
            date: '2022-11-15',
            description: 'Juara 2 (Silver Medalist) Lomba Karya Tulis Ilmiah Nasional bidang inovasi teknologi informasi dan riset komputasi terapan.',
            image: '/certificate/apsi-perak.png',
            credentialId: 'LKTIN-APSI-02',
            tags: ['Research', 'Scientific Writing', 'National Award'],
            type: 'National Competition',
            category: 'award'
        },
        {
            id: 'cert-4',
            title: 'Juara Pekan Ilmiah Mahasiswa Muhammadiyah (PIMMU 2022)',
            issuer: 'Universitas Muhammadiyah Jember',
            date: '2022-08-20',
            description: 'Juara dalam ajang kompetisi Pekan Ilmiah Mahasiswa Muhammadiyah (PIMMU) tingkat perguruan tinggi pada kategori karya inovatif dan ilmiah.',
            image: '/certificate/pimmu 2022.pdf',
            credentialId: 'PIMMU-UMJ-2022',
            tags: ['Innovation', 'PIMMU', 'University Level'],
            type: 'University Competition',
            category: 'award'
        },
        {
            id: 'cert-5',
            title: 'Juara 2 Kejuaraan Hockey 2021',
            issuer: 'Federasi Hockey Indonesia / Pengcab',
            date: '2021-12-10',
            description: 'Meraih Juara 2 (Silver Medalist) dalam Kejuaraan Olahraga Hockey Daerah Tahun 2021.',
            image: '/certificate/Hockey 2021 - juara 2.jpg',
            credentialId: 'HOCKEY-2021-02',
            tags: ['Sports', 'Hockey', 'Championship'],
            type: 'Sports Championship',
            category: 'award'
        },
        {
            id: 'cert-6',
            title: 'IBM Data Analyst Professional Certificate',
            issuer: 'IBM / Coursera',
            date: '2024-05-10',
            description: 'Sertifikasi profesional menyeluruh dalam siklus analisis data: pengumpulan, pembersihan (wrangling), analisis data eksploratif (EDA), pemodelan statistik, dan dashboard visualisasi bisnis.',
            image: '/certificate/Certificate Data Analyst.pdf',
            credentialId: 'IBM-DA-2024',
            tags: ['Data Analytics', 'Python', 'SQL', 'Data Visualization'],
            type: 'Professional Certification',
            category: 'certification'
        },
        {
            id: 'cert-7',
            title: 'Microsoft Excel for Business & Data Analysis',
            issuer: 'Coursera / Microsoft',
            date: '2024-04-12',
            description: 'Keahlian tingkat lanjut dalam pemrosesan data, formula logika dan lookup kompleks, PivotTable, pemodelan data keuangan, dan pelaporan analisis bisnis menggunakan Microsoft Excel.',
            image: '/certificate/Certificate Microsoft Excel.pdf',
            credentialId: 'MS-EXCEL-2024',
            tags: ['Excel', 'Spreadsheet', 'Financial Modeling', 'Data Processing'],
            type: 'Professional Certification',
            category: 'certification'
        },
        {
            id: 'cert-8',
            title: 'Studi Independen Bersertifikat (MSIB) - AWS Cloud Practitioner',
            issuer: 'Kemendikbudristek & Chairos Academy (AWS)',
            date: '2023-12-30',
            description: 'Program Magang dan Studi Independen Bersertifikat (MSIB) Kampus Merdeka berfokus pada arsitektur AWS Cloud Computing, manajemen infrastruktur serverless, VPC, IAM, dan automasi deployment.',
            image: '/certificate/MSIB - AWS Chairos.pdf',
            credentialId: 'MSIB-AWS-CHAIROS-01',
            tags: ['AWS', 'Cloud Computing', 'MSIB', 'Kampus Merdeka'],
            type: 'Independent Study Certification',
            category: 'certification'
        },
        {
            id: 'cert-9',
            title: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
            issuer: 'Dicoding Indonesia & AWS',
            date: '2023-09-18',
            description: 'Sertifikasi resmi dasar-dasar Amazon Web Services (AWS) mencakup komputasi EC2, penyimpanan cloud S3, arsitektur basis data, keamanan IAM, dan keandalan sistem berskala global.',
            image: '/certificate/dicoding AWS.pdf',
            credentialId: 'DICODING-AWS-2023',
            tags: ['AWS Cloud', 'Dicoding', 'Cloud Architecture'],
            type: 'Course Certificate',
            category: 'certification'
        },
        {
            id: 'cert-10',
            title: 'Alibaba Cloud Certified Developer',
            issuer: 'Codepolitan & Alibaba Cloud',
            date: '2023-06-25',
            description: 'Sertifikasi keahlian komputasi awan Alibaba Cloud mencakup Elastic Compute Service (ECS), Server Load Balancer (SLB), Object Storage Service (OSS), dan arsitektur cloud terdistribusi.',
            image: '/certificate/Codepolitan-Alibaba cloud.png',
            credentialId: 'ALIBABA-CLOUD-CP-2023',
            tags: ['Alibaba Cloud', 'Codepolitan', 'Cloud Infrastructure'],
            type: 'Technical Certification',
            category: 'certification'
        },
        {
            id: 'cert-11',
            title: 'Pemrograman Web (HTML & CSS) - Progate',
            issuer: 'Progate',
            date: '2022-03-15',
            description: 'Sertifikasi penguasaan fundamental web frontend modern: semantik HTML5, CSS3, sistem tata letak Flexbox dan CSS Grid, serta perancangan website responsif multi-device.',
            image: '/certificate/Sertifikat Progate (HTML _ CSS).pdf',
            credentialId: 'PROGATE-HTMLCSS-2022',
            tags: ['HTML5', 'CSS3', 'Web Design', 'Frontend'],
            type: 'Course Certificate',
            category: 'certification'
        },
        {
            id: 'cert-12',
            title: 'Pengembangan Backend Node.js - Progate',
            issuer: 'Progate',
            date: '2022-04-20',
            description: 'Sertifikasi pemrograman backend JavaScript menggunakan Node.js dan Express, pembuatan REST API, arsitektur routing modular, penanganan asynchronous, dan integrasi database.',
            image: '/certificate/Sertifikat Progate (NODEJS).pdf',
            credentialId: 'PROGATE-NODEJS-2022',
            tags: ['Node.js', 'JavaScript', 'Backend', 'Express.js'],
            type: 'Course Certificate',
            category: 'certification'
        },
        {
            id: 'cert-13',
            title: 'Database Management with SQL - Progate',
            issuer: 'Progate',
            date: '2022-05-10',
            description: 'Sertifikasi pengelolaan basis data relasional menggunakan Structured Query Language (SQL): query kompleks, manipulasi data (CRUD), penggabungan tabel (JOIN), dan agregasi analisis.',
            image: '/certificate/Sertifikat Progate (SQL).pdf',
            credentialId: 'PROGATE-SQL-2022',
            tags: ['SQL', 'Database', 'Relational Database', 'Data Query'],
            type: 'Course Certificate',
            category: 'certification'
        },
        {
            id: 'cert-14',
            title: 'Web Development Career Path - Progate',
            issuer: 'Progate',
            date: '2022-06-05',
            description: 'Sertifikasi kelulusan kurikulum komprehensif jalur karir Web Development mencakup integrasi frontend modern, backend API, dan manajemen basis data berstandar industri.',
            image: '/certificate/Sertifikat Progate (Path Pengembangan Web).pdf',
            credentialId: 'PROGATE-WEBPATH-2022',
            tags: ['Web Development', 'Fullstack', 'Frontend', 'Backend'],
            type: 'Career Path Certification',
            category: 'certification'
        },
        {
            id: 'cert-15',
            title: 'Dasar Pemrograman PHP - Codepolitan',
            issuer: 'Codepolitan',
            date: '2022-07-12',
            description: 'Sertifikasi pemahaman fundamental bahasa pemrograman PHP, penanganan logika alur program, fungsi rekursif, pengelolaan array multidimensi, dan pemrosesan form web.',
            image: '/certificate/codepolitan-php dasar.pdf',
            credentialId: 'CODEPOLITAN-PHP-2022',
            tags: ['PHP', 'Backend', 'Web Programming'],
            type: 'Course Certificate',
            category: 'certification'
        },
        {
            id: 'cert-16',
            title: 'Indonesia Makin Cakap Digital',
            issuer: 'Kementerian Komunikasi dan Informatika RI (Kominfo)',
            date: '2022-09-08',
            description: 'Sertifikasi kompetensi literasi digital nasional dari Kominfo yang mencakup 4 pilar utama: Digital Skills, Digital Ethics, Digital Culture, dan Digital Safety.',
            image: '/certificate/Sertifikat Peserta Literasi Digital Sulis.pdf',
            credentialId: 'KOMINFO-CAKAP-DIGITAL',
            tags: ['Digital Literacy', 'Kominfo', 'Cyber Security', 'Digital Ethics'],
            type: 'National Program Certificate',
            category: 'certification'
        },
        {
            id: 'cert-17',
            title: 'Pandu Digital Indonesia',
            issuer: 'Kementerian Komunikasi dan Informatika RI (Kominfo)',
            date: '2022-10-14',
            description: 'Sertifikat lisensi dan apresiasi sebagai Pandu Digital dalam mendampingi masyarakat dan komunitas untuk pemanfaatan teknologi informasi secara produktif dan aman.',
            image: '/certificate/pandu digital.pdf',
            credentialId: 'PANDU-DIGITAL-KOMINFO',
            tags: ['Pandu Digital', 'Community Empowerment', 'Technology Leadership'],
            type: 'Government Recognition',
            category: 'recognition'
        },
        {
            id: 'cert-18',
            title: 'Narasumber & Pemateri Workshop PKM',
            issuer: 'Universitas Muhammadiyah Jember',
            date: '2023-03-18',
            description: 'Sertifikat apresiasi sebagai Pemateri / Narasumber dalam Workshop Penulisan dan Pendampingan Proposal Program Kreativitas Mahasiswa (PKM).',
            image: '/certificate/pemateri-pkm.pdf',
            credentialId: 'SPEAKER-PKM-UMJ-2023',
            tags: ['Speaker', 'Mentorship', 'Scientific Writing', 'PKM'],
            type: 'Honorary Recognition',
            category: 'recognition'
        },
        {
            id: 'cert-19',
            title: 'Pertukaran Mahasiswa Merdeka (PMM-DN 2021)',
            issuer: 'Kemendikbudristek RI',
            date: '2021-12-28',
            description: 'Sertifikat kelulusan program Pertukaran Mahasiswa Merdeka Dalam Negeri (PMM-DN) Kemendikbudristek untuk penguatan wawasan kebangsaan, integritas, dan kolaborasi akademik lintas perguruan tinggi.',
            image: '/certificate/PMM-DN 2021.pdf',
            credentialId: 'PMM-DN-KEMENDIKBUD-2021',
            tags: ['Student Exchange', 'Kampus Merdeka', 'Academic Collaboration'],
            type: 'National Program Recognition',
            category: 'recognition'
        }
    ],
    techStack: [
        { name: 'Python', icon: 'python', category: 'language' },
        { name: 'Pandas', icon: 'pandas', category: 'tool' },
        { name: 'Matplotlib', icon: 'matplotlib', category: 'tool' },
        { name: 'FastAPI', icon: 'fastapi', category: 'framework' },
        { name: 'TypeScript', icon: 'typescript', category: 'language' },
        { name: 'JavaScript', icon: 'javascript', category: 'language' },
        { name: 'Next.js', icon: 'nextjs', category: 'framework' },
        { name: 'PostgreSQL', icon: 'postgresql', category: 'database' },
        { name: 'Docker', icon: 'docker', category: 'tool' },
        { name: 'React.js', icon: 'react', category: 'framework' },
        { name: 'Node.js', icon: 'nodejs', category: 'framework' },
        { name: 'Tailwind CSS', icon: 'tailwind', category: 'framework' },
    ],
    hardSkills: [
        { name: 'Data Mining', category: 'data' },
        { name: 'Data Visualization', category: 'data' },
        { name: 'Web Development', category: 'frontend' },
        { name: 'Backend Development', category: 'backend' },
        { name: 'Trading Strategy', category: 'other' },
    ],
    softSkills: [
        { name: 'Problem Solving' },
        { name: 'Analytical Thinking' },
        { name: 'Adaptability' },
        { name: 'Time Management' },
        { name: 'Communication' }
    ],
    tools: [
        { name: 'VS Code', icon: 'vscode', category: 'ide' },
        { name: 'Jupyter', icon: 'jupyter', category: 'ide' },
        { name: 'Google Colab', icon: 'googlecolab', category: 'ide' },
        { name: 'Figma', icon: 'figma', category: 'design' },
        { name: 'GitHub', icon: 'github', category: 'devops' },
        { name: 'Git', icon: 'git', category: 'devops' },
        { name: 'Google Workspace', icon: 'google', category: 'productivity' },
        { name: 'Power BI', icon: 'powerbi', category: 'productivity' },
        { name: 'Tableau', icon: 'tableau', category: 'productivity' },
        { name: 'Microsoft Excel', icon: 'excel', category: 'productivity' },
    ],
    faqs: [
        { question: 'Do you accept freelance projects?', answer: 'Yes, I am open to freelance projects related to Web Development and Data Analysis.' },
        { question: 'What tech stack do you use most often?', answer: 'I primarily use the React/Next.js ecosystem for the frontend, Node.js for the backend, as well as Python and Excel for data analysis.' }
    ],
    blogs: [
        {
            id: 'blog-1',
            slug: 'combining-coding-and-trading',
            title: 'Combining Coding and Trading: A Beginners Guide',
            excerpt: 'How programming skills can give you an analytical edge in financial markets.',
            content: 'Many traders rely on gut feeling, but in the modern era, data is king. By learning programming languages like Python, you can pull historical market data using APIs, backtest your strategies in seconds, and automate trade execution. This article discusses the basic steps of how I started my algorithmic trading journey, from mastering Pandas for data manipulation to connecting my scripts to the Binance API.',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
            date: '2024-05-12',
            category: 'Finance',
            tags: ['Trading', 'Python', 'Algorithm'],
            author: { name: 'Sulistyowati Munawaroh', avatar: '/about/tyo.png' },
            readTime: '5 min read'
        },
        {
            id: 'blog-2',
            slug: 'the-importance-of-data-cleaning',
            title: 'The Importance of Data Cleaning Before Decision Making',
            excerpt: 'Dirty data leads to wrong decisions. Here is the ETL workflow I usually use.',
            content: "In data analysis, there is a saying 'Garbage In, Garbage Out'. If you build sophisticated machine learning models or beautiful dashboards on top of flawed data, the results will not be valid. In this article, I share my daily ETL (Extract, Transform, Load) workflow: handling missing values, normalizing date formats, and detecting outliers using the Z-score method.",
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
            date: '2024-04-28',
            category: 'Data Science',
            tags: ['Data Cleaning', 'ETL', 'Python'],
            author: { name: 'Sulistyowati Munawaroh', avatar: '/about/tyo.png' },
            readTime: '7 min read'
        },
        {
            id: 'blog-3',
            slug: 'sop-the-secret-foundation-of-scalability',
            title: 'SOP: The Secret Foundation of Startup Scalability',
            excerpt: 'Why structured administrative systems are the secret key to growing a company.',
            content: 'Often SOPs (Standard Operating Procedures) are considered rigid and boring. However, after redesigning workflows in several companies, I found that good SOPs actually provide freedom. When repetitive processes are documented and automated, your team can focus on creativity and strategic problem-solving, rather than just remembering basic administrative steps.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
            date: '2024-03-15',
            category: 'Management',
            tags: ['SOP', 'Operations', 'Startup'],
            author: { name: 'Sulistyowati Munawaroh', avatar: '/about/tyo.png' },
            readTime: '4 min read'
        },
        {
            id: 'blog-4',
            slug: 'react-vs-vue-for-dashboards',
            title: 'React vs Vue for Internal Dashboards',
            excerpt: 'An objective comparison in choosing a frontend framework for data management applications.',
            content: 'Choosing a framework often sparks long debates. In my last project, I made a direct comparison between React and Vue for internal dashboard requirements...',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
            date: '2024-02-02',
            category: 'Web Development',
            tags: ['React', 'Vue', 'Frontend'],
            author: { name: 'Sulistyowati Munawaroh', avatar: '/about/tyo.png' },
            readTime: '6 min read'
        }
    ],
    gallery: [
        {
            id: 'gal-1',
            title: 'Foto Profil Utama',
            description: 'Dokumentasi potret profesional Sulistyowati Munawaroh.',
            date: '2024-01-15',
            type: 'image',
            url: '/gallery/Foto Utama.webp',
            thumbnail: '/gallery/Foto Utama.webp',
            category: 'Profile'
        },
        {
            id: 'gal-2',
            title: 'Kejuaraan Hockey 2021',
            description: 'Dokumentasi pertandingan dan raihan Juara 2 dalam Kejuaraan Olahraga Hockey Daerah 2021.',
            date: '2021-11-20',
            type: 'image',
            url: '/gallery/hockey1.jpg',
            thumbnail: '/gallery/hockey1.jpg',
            category: 'Sports'
        },
        {
            id: 'gal-3',
            title: 'Ikatan Mahasiswa Muhammadiyah (IMM)',
            description: 'Aktivitas organisasi dan kepemimpinan dalam Ikatan Mahasiswa Muhammadiyah Universitas Muhammadiyah Jember.',
            date: '2023-05-10',
            type: 'image',
            url: '/gallery/imm1.jpg',
            thumbnail: '/gallery/imm1.jpg',
            category: 'Organization'
        },
        {
            id: 'gal-4',
            title: 'Relawan TIK - Sosialisasi Literasi Digital',
            description: 'Sesi sosialisasi edukasi teknologi dan literasi digital kepada masyarakat bersama tim Relawan TIK.',
            date: '2023-08-14',
            type: 'image',
            url: '/gallery/rtik1.jpeg',
            thumbnail: '/gallery/rtik1.jpeg',
            category: 'Relawan TIK'
        },
        {
            id: 'gal-5',
            title: 'Relawan TIK - Workshop & Pelatihan Komputer',
            description: 'Pelatihan teknis pengoperasian komputer dan aplikasi produktivitas berbasis teknologi informasi.',
            date: '2023-09-02',
            type: 'image',
            url: '/gallery/rtik2.jpg',
            thumbnail: '/gallery/rtik2.jpg',
            category: 'Relawan TIK'
        },
        {
            id: 'gal-6',
            title: 'Relawan TIK - Pendampingan Komunitas',
            description: 'Program pendampingan transformasi digital dan pemanfaatan sarana komunikasi daring secara positif.',
            date: '2023-10-18',
            type: 'image',
            url: '/gallery/rtik3.jpg',
            thumbnail: '/gallery/rtik3.jpg',
            category: 'Relawan TIK'
        },
        {
            id: 'gal-7',
            title: 'Relawan TIK - Edukasi Internet Sehat',
            description: 'Penyuluhan pemanfaatan internet sehat, kreatif, dan aman bagi anak-anak dan generasi muda.',
            date: '2023-11-05',
            type: 'image',
            url: '/gallery/rtik4.jpeg',
            thumbnail: '/gallery/rtik4.jpeg',
            category: 'Relawan TIK'
        },
        {
            id: 'gal-8',
            title: 'Relawan TIK - Aksi Pandu Digital',
            description: 'Kolaborasi aksi lapangan bersama Pandu Digital dalam rangka pemerataan literasi teknologi informasi.',
            date: '2024-01-22',
            type: 'image',
            url: '/gallery/rtik6.jpg',
            thumbnail: '/gallery/rtik6.jpg',
            category: 'Relawan TIK'
        },
        {
            id: 'gal-9',
            title: 'Relawan TIK - Sinergi & Pemberdayaan',
            description: 'Forum koordinasi dan konsolidasi penggerak literasi digital untuk pengabdian berkelanjutan.',
            date: '2024-02-17',
            type: 'image',
            url: '/gallery/rtik7.jpg',
            thumbnail: '/gallery/rtik7.jpg',
            category: 'Relawan TIK'
        },
        {
            id: 'gal-10',
            title: 'Relawan TIK - Seminar Transformasi Digital',
            description: 'Partisipasi dan pemaparan wawasan digitalisasi sektor publik dan masyarakat umum.',
            date: '2024-03-09',
            type: 'image',
            url: '/gallery/rtik8.jpg',
            thumbnail: '/gallery/rtik8.jpg',
            category: 'Relawan TIK'
        },
        {
            id: 'gal-11',
            title: 'Relawan TIK - Literasi Keamanan Siber',
            description: 'Workshop kesadaran privasi dan perlindungan data pribadi di ruang siber digital.',
            date: '2024-04-12',
            type: 'image',
            url: '/gallery/rtik9.jpg',
            thumbnail: '/gallery/rtik9.jpg',
            category: 'Relawan TIK'
        },
        {
            id: 'gal-12',
            title: 'Relawan TIK - Dokumentasi Tim & Aksi Lapangan',
            description: 'Kebersamaan pengurus dan relawan setelah sukses menyelenggarakan rangkaian pelatihan digital daerah.',
            date: '2024-05-20',
            type: 'image',
            url: '/gallery/rtik10.jpeg',
            thumbnail: '/gallery/rtik10.jpeg',
            category: 'Relawan TIK'
        }
    ]
};
