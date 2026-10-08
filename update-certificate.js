const fs = require('fs');

['en', 'id'].forEach(lang => {
    const file = `./messages/${lang}.json`;
    const content = JSON.parse(fs.readFileSync(file, 'utf8'));
    
    content.certificateMarquee = {
        viewAll: lang === 'en' ? "View All Achievements" : "Lihat Semua Pencapaian",
        certifications: lang === 'en' ? "Certifications & Achievements" : "Sertifikasi & Pencapaian",
        validating: lang === 'en' ? "Validating " : "Memvalidasi ",
        excellence: lang === 'en' ? "Excellence" : "Keunggulan",
        through: lang === 'en' ? " through Global Standards." : " melalui Standar Global.",
        description: lang === 'en' ? "A collection of my professional certifications in AI, Web Development, and Cloud Engineering from industry leaders." : "Koleksi sertifikasi profesional saya di bidang AI, Pengembangan Web, dan Rekayasa Cloud dari para pemimpin industri."
    };
    
    fs.writeFileSync(file, JSON.stringify(content, null, 4), 'utf8');
});
