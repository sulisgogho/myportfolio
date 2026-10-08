const fs = require('fs');

const enPath = './messages/en.json';
const idPath = './messages/id.json';

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const idData = JSON.parse(fs.readFileSync(idPath, 'utf8'));

if (!enData.featuredProjects) enData.featuredProjects = {};
if (!idData.featuredProjects) idData.featuredProjects = {};

enData.featuredProjects.title = "Featured <highlight>Projects</highlight>";
idData.featuredProjects.title = "<highlight>Proyek</highlight> Unggulan";

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n');
fs.writeFileSync(idPath, JSON.stringify(idData, null, 2) + '\n');
console.log('Done updating featured messages.');
