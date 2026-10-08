const fs = require('fs');

['en', 'id'].forEach(lang => {
    const file = `./messages/${lang}.json`;
    const content = JSON.parse(fs.readFileSync(file, 'utf8'));
    
    content.blogPortalFooter = {
        knowledgeBase: lang === 'en' ? "Knowledge Base" : "Basis Pengetahuan",
        theEngineering: lang === 'en' ? "The Engineering<br />" : "Proses<br />",
        process: lang === 'en' ? "Process." : "Rekayasa.",
        viewAll: lang === 'en' ? "View All Articles" : "Lihat Semua Artikel",
        minRead: lang === 'en' ? "min read" : "mnt baca",
        documenting: lang === 'en' ? "\"Documenting the journey from concept to deployment.\"" : "\"Mendokumentasikan perjalanan dari konsep hingga penerapan.\"",
        readJournal: lang === 'en' ? "Read the Journal" : "Baca Jurnal"
    };

    content.creditsFooter = {
        directedBy: lang === 'en' ? "Directed By" : "Diarahkan Oleh",
        visualEngineering: lang === 'en' ? "Visual Engineering" : "Rekayasa Visual",
        motionSystems: lang === 'en' ? "Motion Systems" : "Sistem Gerak",
        stylingArchitecture: lang === 'en' ? "Styling Architecture" : "Arsitektur Gaya",
        typography: lang === 'en' ? "Typography" : "Tipografi",
        production: lang === 'en' ? "Production © 2024" : "Produksi © 2024",
        replaySequence: lang === 'en' ? "Replay Sequence" : "Putar Ulang Sekuens"
    };

    content.focusGrid = {
        closeSequence: lang === 'en' ? "Close Sequence" : "Tutup Sekuens",
        sequenceId: lang === 'en' ? "Sequence_ID:" : "ID_Sekuens:",
        dateCaptured: lang === 'en' ? "Date Captured" : "Tanggal Diambil",
        format: lang === 'en' ? "Format" : "Format"
    };
    
    fs.writeFileSync(file, JSON.stringify(content, null, 4), 'utf8');
});
