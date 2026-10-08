const fs = require('fs');

const enPath = './messages/en.json';
const idPath = './messages/id.json';

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const idData = JSON.parse(fs.readFileSync(idPath, 'utf8'));

enData.typewriterCodeHero = {
    "scrollToExplore": "Scroll to explore"
};

idData.typewriterCodeHero = {
    "scrollToExplore": "Gulir untuk menjelajah"
};

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n');
fs.writeFileSync(idPath, JSON.stringify(idData, null, 2) + '\n');
console.log('Done updating typewriter messages.');
