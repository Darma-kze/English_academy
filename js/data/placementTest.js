// English Diagnostic & Placement Test (Tes Penempatan Kemampuan Bahasa Inggris)
// Graded from CEFR A1 (Basic) to C1 (Advanced)

window.PLACEMENT_TEST_DATA = [
    {
        id: 'pt_1',
        category: 'Basic Grammar (A1)',
        levelCode: 'A1',
        prompt: 'Look at the picture description: "Sarah is a doctor. ___ works in a busy hospital in Jakarta."',
        options: ['She', 'He', 'They', 'It'],
        correctIndex: 0,
        explanation: 'Kata ganti untuk subjek perempuan tunggal (Sarah) adalah "She".'
    },
    {
        id: 'pt_2',
        category: 'Vocabulary (A1)',
        levelCode: 'A1',
        prompt: 'Which sentence is grammatically correct for daily routine?',
        options: [
            'My brother plays football every Sunday afternoon.',
            'My brother play football every Sunday afternoon.',
            'My brother playing football every Sunday afternoon.',
            'My brother is play football every Sunday afternoon.'
        ],
        correctIndex: 0,
        explanation: 'Untuk subjek orang ketiga tunggal (My brother), kata kerja Simple Present Tense mendapatkan akhiran -s: "plays".'
    },
    {
        id: 'pt_3',
        category: 'Prepositions (A2)',
        levelCode: 'A2',
        prompt: 'Choose the correct preposition: "The international flight will depart ___ 7:30 AM ___ Monday morning."',
        options: ['at / on', 'in / at', 'on / in', 'at / in'],
        correctIndex: 0,
        explanation: 'Gunakan "at" untuk jam/waktu spesifik (at 7:30 AM) dan "on" untuk hari/tanggal (on Monday morning).'
    },
    {
        id: 'pt_4',
        category: 'Past Tense (A2)',
        levelCode: 'A2',
        prompt: 'Complete the sentence: "We ___ to Bali for our vacation last year and we ___ a wonderful time."',
        options: ['went / had', 'go / have', 'gone / having', 'goed / had'],
        correctIndex: 0,
        explanation: '"Last year" mengindikasikan masa lampau (Past Simple), bentuk lampau dari go adalah went, dan have adalah had.'
    },
    {
        id: 'pt_5',
        category: 'Listening Comprehension (A2)',
        levelCode: 'A2',
        hasAudio: true,
        audioText: 'Could you please tell me how to get to the nearest train station?',
        prompt: 'Dengarkan audio di atas. Apa maksud dari penutur tersebut?',
        options: [
            'Menanyakan arah menuju stasiun kereta terdekat',
            'Membeli tiket kereta api tujuan Jakarta',
            'Memberitahu bahwa kereta api sudah tiba',
            'Meminta supir taksi berhenti di dekat rel'
        ],
        correctIndex: 0,
        explanation: '"Could you please tell me how to get to the nearest train station?" artinya menanyakan arah rute menuju stasiun terdekat.'
    },
    {
        id: 'pt_6',
        category: 'Present Perfect (B1)',
        levelCode: 'B1',
        prompt: 'Choose the correct form: "David ___ for this technology company since 2018."',
        options: ['has worked', 'is working', 'worked', 'works'],
        correctIndex: 0,
        explanation: 'Keterangan waktu "since 2018" menunjukkan aktivitas yang dimulai di masa lalu dan masih berlanjut hingga sekarang (Present Perfect: has + V3).'
    },
    {
        id: 'pt_7',
        category: 'Conditionals (B1)',
        levelCode: 'B1',
        prompt: 'Identify the correct conditional sentence:',
        options: [
            'If I had more free time, I would learn how to play the piano.',
            'If I have more free time, I would learn how to play the piano.',
            'If I had more free time, I will learn how to play the piano.',
            'If I had have more free time, I would learned.'
        ],
        correctIndex: 0,
        explanation: 'Second Conditional (situasi khayalan masa kini): If + Past Simple (had), would + bare infinitive (would learn).'
    },
    {
        id: 'pt_8',
        category: 'Comparatives (B1)',
        levelCode: 'B1',
        prompt: 'Fill in the blank: "Taking the high-speed train is significantly ___ than driving through the traffic jam."',
        options: ['faster', 'more fast', 'fastest', 'as fast'],
        correctIndex: 0,
        explanation: 'Kata sifat satu suku kata "fast" bentuk komparatifnya adalah "faster" (bukan more fast).'
    },
    {
        id: 'pt_9',
        category: 'Passive Voice (B2)',
        levelCode: 'B2',
        prompt: 'Convert to passive voice: "The software engineers are upgrading the database right now."',
        options: [
            'The database is being upgraded by the software engineers right now.',
            'The database is upgraded by the software engineers right now.',
            'The database was being upgraded by the software engineers.',
            'The database has been upgraded right now.'
        ],
        correctIndex: 0,
        explanation: 'Present Continuous Passive: Subject + is/am/are + being + V3 (is being upgraded).'
    },
    {
        id: 'pt_10',
        category: 'Phrasal Verbs (B2)',
        levelCode: 'B2',
        prompt: 'What is the closest meaning of the bold phrasal verb: "The board decided to **call off** the annual conference due to unexpected weather."',
        options: ['Cancel completely', 'Postpone to next week', 'Relocate to another hall', 'Expand the budget'],
        correctIndex: 0,
        explanation: '"Call off" adalah phrasal verb yang berarti membatalkan sama sekali (cancel).'
    },
    {
        id: 'pt_11',
        category: 'Relative Clauses (B2)',
        levelCode: 'B2',
        prompt: 'Select the correct connector: "The candidate ___ qualifications were thoroughly vetted received the job offer."',
        options: ['whose', 'whom', 'who', 'which'],
        correctIndex: 0,
        explanation: 'Gunakan "whose" untuk menunjukkan kepemilikan (whose qualifications = kualifikasi milik kandidat tersebut).'
    },
    {
        id: 'pt_12',
        category: 'Listening / Dialogue (B2)',
        levelCode: 'B2',
        hasAudio: true,
        audioText: 'I would take the project lead role with a grain of salt considering how unstable their budget allocation is.',
        prompt: 'Dengarkan percakapan di atas. Apa maksud ungkapan "with a grain of salt"?',
        options: [
            'Menyikapinya dengan skeptis atau tidak langsung percaya sepenuhnya',
            'Memasak makanan dengan sedikit bumbu garam',
            'Menerima tawaran proyek dengan antusias tanpa syarat',
            'Menolak tawaran secara kasar di depan umum'
        ],
        correctIndex: 0,
        explanation: 'Idiom "take something with a grain of salt" berarti menerima suatu informasi dengan hati-hati atau bersikap skeptis/kritis.'
    },
    {
        id: 'pt_13',
        category: 'Inversion (C1)',
        levelCode: 'C1',
        prompt: 'Choose the most natural advanced academic structure:',
        options: [
            'Seldom have scientists observed such rapid climate anomalies in this region.',
            'Seldom scientists have observed such rapid climate anomalies in this region.',
            'Seldom scientists observed such rapid climate anomalies in this region.',
            'Seldom do scientists had observed such rapid anomalies.'
        ],
        correctIndex: 0,
        explanation: 'Struktur Inversi dengan adverb negatif "Seldom": Seldom + auxiliary verb (have) + subject (scientists) + past participle (observed).'
    },
    {
        id: 'pt_14',
        category: 'Subjunctive Mood (C1)',
        levelCode: 'C1',
        prompt: 'Identify the correct subjunctive sentence:',
        options: [
            'The auditor insisted that the CFO provide full financial disclosures without delay.',
            'The auditor insisted that the CFO provides full financial disclosures without delay.',
            'The auditor insisted that the CFO provided full financial disclosures without delay.',
            'The auditor insisted that the CFO will provide full financial disclosures without delay.'
        ],
        correctIndex: 0,
        explanation: 'Subjunctive mood setelah kata kerja "insist that" mewajibkan bentuk kata kerja dasar (bare infinitive "provide") terlepas dari subjek tunggal.'
    },
    {
        id: 'pt_15',
        category: 'Advanced Collocations (C1)',
        levelCode: 'C1',
        prompt: 'Fill in the blank: "The researcher provided ___ evidence that conclusively overturned the longstanding hypothesis."',
        options: ['compelling', 'compulsory', 'compelled', 'complacent'],
        correctIndex: 0,
        explanation: '"Compelling evidence" adalah academic collocation baku yang berarti bukti yang sangat kuat, meyakinkan, dan tak terbantahkan.'
    }
];

window.getCEFRRecommendation = function(score, total) {
    const percentage = Math.round((score / total) * 100);
    if (percentage <= 25) {
        return {
            levelCode: 'A1',
            levelName: 'Level 1: Basic (Pemula)',
            title: 'CEFR A1 - Beginner',
            badge: '🌱',
            color: '#58cc02',
            description: 'Kamu baru memulai petualangan bahasa Inggrismu! Fondasi dasarmu sedang terbentuk. Pelajari kosakata harian, salam, dan kalimat perkenalan.',
            strengths: ['Dapat mengenali kata-kata dasar dan salam sederhana.'],
            areasToFocus: ['Kuasai to be (am/is/are), kata ganti subjek, dan Simple Present Tense dasar.'],
            recommendedLevelNum: 1
        };
    } else if (percentage <= 50) {
        return {
            levelCode: 'A2',
            levelName: 'Level 2: Elementary (Dasar)',
            title: 'CEFR A2 - Elementary',
            badge: '🚀',
            color: '#1cb0f6',
            description: 'Bagus! Kamu sudah memahami konsep dasar dan dapat menyusun kalimat sehari-hari sederhana. Siap melangkah ke tenses lampau dan percakapan praktis!',
            strengths: ['Memahami kalimat dasar dan kosakata umum seputar rutinitas.'],
            areasToFocus: ['Perkuat Past Simple Tense, kata kerja tak beraturan (irregular verbs), dan preposisi waktu/tempat.'],
            recommendedLevelNum: 2
        };
    } else if (percentage <= 70) {
        return {
            levelCode: 'B1',
            levelName: 'Level 3: Intermediate (Menengah)',
            title: 'CEFR B1 - Intermediate',
            badge: '🔥',
            color: '#ff9600',
            description: 'Hebat! Kemampuan bahasa Inggrismu sudah berada di tingkat mandiri (independent user). Kamu dapat memahami inti percakapan umum dan mengungkapkan pendapat.',
            strengths: ['Mampu memahami alur kalimat kompleks, Present Perfect, dan perbandingan.'],
            areasToFocus: ['Perdalam First & Second Conditionals, passive voice, serta idiom umum.'],
            recommendedLevelNum: 3
        };
    } else if (percentage <= 85) {
        return {
            levelCode: 'B2',
            levelName: 'Level 4: Upper Intermediate (Mahir Awal)',
            title: 'CEFR B2 - Upper Intermediate',
            badge: '💎',
            color: '#ce82ff',
            description: 'Luar biasa! Kamu memiliki pemahaman bahasa Inggris yang solid dan luwes. Siap digunakan untuk lingkungan kerja, studi profesional, dan persiapan tes TOEFL!',
            strengths: ['Menguasai struktur gramatikal menengah ke atas, relative clauses, dan passive voice.'],
            areasToFocus: ['Tingkatkan penguasaan phrasal verbs, formal business expressions, dan variasi vocabulary akademik.'],
            recommendedLevelNum: 4
        };
    } else {
        return {
            levelCode: 'C1',
            levelName: 'Level 5: Advanced (Jago & TOEFL Ready)',
            title: 'CEFR C1 - Advanced / Fluent',
            badge: '👑',
            color: '#ff4b4b',
            description: 'Fantastis! Kamu sudah berada di level JAGO / Mahir. Pemahaman struktur tata bahasa, nuansa kalimat inversi, dan kosakata akademikmu sangat matang untuk meraih skor TOEFL tinggi!',
            strengths: ['Menguasai inversi kalimat formal, subjunctive mood, dan idiom bernuansa tinggi.'],
            areasToFocus: ['Fokus pada simulasi latihan TOEFL full-length untuk mengoptimalkan kecepatan dan akurasi skor 600+.'],
            recommendedLevelNum: 5
        };
    }
};
