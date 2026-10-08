const fs = require('fs');
const enPath = '../messages/en.json';
const idPath = '../messages/id.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const id = JSON.parse(fs.readFileSync(idPath, 'utf8'));

const enFooter = {
    links: "Navigation",
    socials: "Socials",
    localTime: "Local Time",
    version: "Version",
    versionEdition: "2026 Edition",
    more: "More",
    marquee: {
        "0": "Sulistyo",
        "1": "Portfolio",
        "2": "Fullstack Developer",
        "3": "Data Analyst",
        "4": "Available for Work",
        "5": "Let's Connect"
    }
};

const idFooter = {
    links: "Navigasi",
    socials: "Sosial",
    localTime: "Waktu Lokal",
    version: "Versi",
    versionEdition: "Edisi 2026",
    more: "Lebih Lanjut",
    marquee: {
        "0": "Sulistyo",
        "1": "Portofolio",
        "2": "Fullstack Developer",
        "3": "Data Analis",
        "4": "Tersedia untuk Proyek",
        "5": "Mari Terhubung"
    }
};

en.footer = { ...en.footer, ...enFooter };
id.footer = { ...id.footer, ...idFooter };

fs.writeFileSync(enPath, JSON.stringify(en, null, 4));
fs.writeFileSync(idPath, JSON.stringify(id, null, 4));
console.log('Footer translations updated!');
