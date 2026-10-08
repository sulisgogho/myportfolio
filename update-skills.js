const fs = require('fs');

['en', 'id'].forEach(lang => {
    const file = `./messages/${lang}.json`;
    const content = JSON.parse(fs.readFileSync(file, 'utf8'));
    
    content.hardSkills = {
        title: lang === 'en' ? "Core Focus" : "Fokus Utama",
        subtitle: lang === 'en' ? "Capabilities & Architectures" : "Kapabilitas & Arsitektur",
        appliedAI: lang === 'en' ? "Applied AI" : "AI Terapan",
        softwareEngineering: lang === 'en' ? "Software Engineering" : "Rekayasa Perangkat Lunak",
        additionalSkills: lang === 'en' ? "Additional Skills" : "Keahlian Tambahan",
        viewLess: lang === 'en' ? "View Less" : "Lebih Sedikit",
        viewMore: lang === 'en' ? "View More" : "Lebih Banyak"
    };

    content.softSkills = {
        title: lang === 'en' ? "Strategic<br />Directives" : "Arahan<br />Strategis",
        desc: lang === 'en' ? "Interpersonal capabilities engineered for high-impact leadership and systemic problem solving in complex environments." : "Kemampuan interpersonal yang dirancang untuk kepemimpinan berdampak tinggi dan pemecahan masalah sistemis dalam lingkungan yang kompleks.",
        coreCapability: lang === 'en' ? "Core Capability" : "Kemampuan Inti",
        readMore: lang === 'en' ? "Read More" : "Baca Lebih Lanjut",
        exploreMore: lang === 'en' ? "Exploring a broader set of professional capabilities and tactical expertise." : "Menjelajahi serangkaian kemampuan profesional dan keahlian taktis yang lebih luas.",
        hoverReveal: lang === 'en' ? "Hover to reveal catalog" : "Arahkan kursor untuk melihat katalog",
        skillExpansion: lang === 'en' ? "Skill Expansion" : "Ekspansi Keahlian",
        systematically: lang === 'en' ? "& systematically expanding the directive framework..." : "& secara sistematis memperluas kerangka arahan..."
    };
    
    fs.writeFileSync(file, JSON.stringify(content, null, 4), 'utf8');
});
