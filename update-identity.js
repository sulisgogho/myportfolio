const fs = require('fs');

const filePaths = ['messages/en.json', 'messages/id.json'];
filePaths.forEach((filePath) => {
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    
    if (data.about) {
        data.about.techStackEcosystem = filePath.includes('en') ? 'Tech Stack & Ecosystem' : 'Ekosistem & Tech Stack';
    } else {
        data.about = {
            techStackEcosystem: filePath.includes('en') ? 'Tech Stack & Ecosystem' : 'Ekosistem & Tech Stack'
        };
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
});
