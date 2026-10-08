const fs = require('fs');

['en', 'id'].forEach(lang => {
    const file = `./messages/${lang}.json`;
    const content = JSON.parse(fs.readFileSync(file, 'utf8'));
    
    content.lanyard = {
        archiveLinkActive: lang === 'en' ? "Archive Link Active" : "Tautan Arsip Aktif"
    };
    
    fs.writeFileSync(file, JSON.stringify(content, null, 4), 'utf8');
});
