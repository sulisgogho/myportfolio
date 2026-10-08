const fs = require('fs');

const enPath = './messages/en.json';
const idPath = './messages/id.json';

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const idData = JSON.parse(fs.readFileSync(idPath, 'utf8'));

enData.projectContact = {
    "tag": "/ Let's Connect",
    "ready": "Ready to build the extraordinary?",
    "collab": "From intelligent AI solutions to scalable software architectures, let's collaborate on your big idea.",
    "example1": "Looking for a Software & AI Engineer?",
    "example2": "Need an AI solution for your business?",
    "example3": "Just want to say hi?",
    "sendMessage": "Send Message",
    "discussionTopic": "DISCUSSION TOPIC:"
};

idData.projectContact = {
    "tag": "/ Mari Terhubung",
    "ready": "Siap membangun sesuatu yang luar biasa?",
    "collab": "Dari solusi AI cerdas hingga arsitektur perangkat lunak yang terukur, mari wujudkan ide besar Anda.",
    "example1": "Mencari Software & AI Engineer?",
    "example2": "Butuh solusi AI untuk bisnis Anda?",
    "example3": "Hanya sekadar menyapa?",
    "sendMessage": "Kirim Pesan",
    "discussionTopic": "TOPIK DISKUSI:"
};

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n');
fs.writeFileSync(idPath, JSON.stringify(idData, null, 2) + '\n');
console.log('Done updating contact messages.');
