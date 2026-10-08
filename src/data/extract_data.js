const fs = require('fs');
const { portfolioData } = require('./portfolio.ts');

const enPath = '../../messages/en.json';
const idPath = '../../messages/id.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const id = JSON.parse(fs.readFileSync(idPath, 'utf8'));

// Initialize data if not exist
en.data = en.data || { projects: {}, experiences: {} };
id.data = id.data || { projects: {}, experiences: {} };

// Projects
portfolioData.projects.forEach(p => {
    en.data.projects[p.id] = {
        title: p.title,
        description: p.description,
        longDescription: p.longDescription || ""
    };
    // Initialize id with en text as fallback for now
    id.data.projects[p.id] = id.data.projects[p.id] || {
        title: p.title,
        description: p.description,
        longDescription: p.longDescription || ""
    };
});

// Experiences
portfolioData.experiences.forEach(e => {
    en.data.experiences[e.id] = {
        title: e.position,
        company: e.company,
        description: e.description
    };
    id.data.experiences[e.id] = id.data.experiences[e.id] || {
        title: e.position,
        company: e.company,
        description: e.description
    };
});

fs.writeFileSync(enPath, JSON.stringify(en, null, 4));
fs.writeFileSync(idPath, JSON.stringify(id, null, 4));

console.log('Data translations extracted to messages!');
