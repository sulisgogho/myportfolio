const fs = require('fs');
const enPath = '../messages/en.json';
const idPath = '../messages/id.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const id = JSON.parse(fs.readFileSync(idPath, 'utf8'));

en.navigation.sections = {
    overview: "Overview",
    techStack: "Tech Stack",
    capabilities: "Capabilities",
    project: "Project",
    github: "GitHub",
    experience: "Experience"
};

id.navigation.sections = {
    overview: "Ringkasan",
    techStack: "Teknologi",
    capabilities: "Kemampuan",
    project: "Proyek",
    github: "GitHub",
    experience: "Pengalaman"
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 4));
fs.writeFileSync(idPath, JSON.stringify(id, null, 4));
console.log('Scroll navigation HUD translations updated!');
