const fs = require('fs');

['en', 'id'].forEach(lang => {
    const file = `./messages/${lang}.json`;
    const content = JSON.parse(fs.readFileSync(file, 'utf8'));
    
    content.toolsSection = {
        workflow: lang === 'en' ? "WORKFLOW & INFRASTRUCTURE" : "ALUR KERJA & INFRASTRUKTUR",
        title: lang === 'en' ? "Professional Tooling" : "Peralatan Profesional",
        desc: lang === 'en' ? "Leveraging industrial-grade platforms for development, design, and deployment to ensure rapid and reliable software delivery." : "Memanfaatkan platform tingkat industri untuk pengembangan, desain, dan penerapan untuk memastikan pengiriman perangkat lunak yang cepat dan andal."
    };
    
    fs.writeFileSync(file, JSON.stringify(content, null, 4), 'utf8');
});
