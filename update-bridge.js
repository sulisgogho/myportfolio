const fs = require('fs');

const enPath = './messages/en.json';
const idPath = './messages/id.json';

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const idData = JSON.parse(fs.readFileSync(idPath, 'utf8'));

enData.narrativeBridge = {
    "title": "You've seen the <results>results</results>.<br></br>Now read the <process>process</process>.",
    "description": "Every image in this archive has a story behind it. Explore the technical deep-dives and creative journals in the blog.",
    "button": "Enter the Archives"
};

idData.narrativeBridge = {
    "title": "Anda telah melihat <results>hasilnya</results>.<br></br>Sekarang baca <process>prosesnya</process>.",
    "description": "Setiap gambar dalam arsip ini memiliki cerita di baliknya. Jelajahi pembahasan teknis dan jurnal kreatif di blog.",
    "button": "Masuk ke Arsip"
};

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n');
fs.writeFileSync(idPath, JSON.stringify(idData, null, 2) + '\n');
console.log('Done updating narrative bridge messages.');
