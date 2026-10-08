const fs = require('fs');
const enPath = '../messages/en.json';
const idPath = '../messages/id.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const id = JSON.parse(fs.readFileSync(idPath, 'utf8'));

en.navigation.menu = {
    ...en.navigation.menu,
    experience: "Experience",
    experienceDesc: "A timeline of my professional roles",
    skills: "Skills",
    skillsDesc: "Tools and technologies I use",
    achievements: "Achievements",
    achievementsDesc: "Certifications and awards",
    blog: "Blog",
    blogDesc: "Thoughts and tutorials"
};

id.navigation.menu = {
    ...id.navigation.menu,
    experience: "Pengalaman",
    experienceDesc: "Garis waktu peran profesional saya",
    skills: "Keahlian",
    skillsDesc: "Alat dan teknologi yang saya gunakan",
    achievements: "Pencapaian",
    achievementsDesc: "Sertifikasi dan penghargaan",
    blog: "Blog",
    blogDesc: "Pemikiran dan tutorial"
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 4));
fs.writeFileSync(idPath, JSON.stringify(id, null, 4));
console.log('Navigation translations updated!');
