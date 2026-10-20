// Comprehensive English Learning Curriculum: Basic (A1) to Advanced/Jago (C1)
// Specialized & In-Depth Preparation for TOEFL ITP & iBT Standards
// Heavy emphasis on To Be, Verbs, Subject-Verb Agreement, and Quintessential TOEFL Traps

window.CURRICULUM_DATA = [
    {
        id: 'level_1',
        levelNumber: 1,
        code: 'A1',
        title: 'Level 1: Basic (Fondasi Tata Bahasa & TOEFL)',
        subtitle: 'Kuasai mendalam To Be (Present/Past), Subject-Verb Agreement, Action vs Stative Verbs, dan Regular/Irregular Verbs sebagai fondasi mutlak TOEFL.',
        color: '#4f46e5',
        badgeIcon: '🏛️',
        units: [
            {
                id: 'l1_u1',
                unitNumber: 1,
                title: 'Unit 1: To Be Mastery & Subject-Verb Agreement (Fondasi TOEFL)',
                description: 'Pendalaman To Be (am, is, are, was, were, been), subjek tunggal vs jamak, serta pola kalimat nominal.',
                lessons: [
                    {
                        id: 'l1_u1_s1',
                        title: 'To Be Present (am, is, are) & Kesesuaian Subjek',
                        icon: '🎯',
                        xp: 25,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Pilih to be yang tepat: "The professor and his laboratory assistants ___ ready to begin the research experiment."',
                                options: ['are', 'is', 'am', 'was'],
                                correctIndex: 0,
                                tip: '💡 Aturan TOEFL: Subjek majemuk yang dihubungkan dengan "and" (The professor and his assistants) adalah jamak (plural), sehingga wajib menggunakan to be "are".'
                            },
                            {
                                type: 'blank',
                                prompt: 'Neither the experiment nor the results ___ conclusive enough for publication.',
                                options: ['are', 'is', 'be', 'being'],
                                correctIndex: 0,
                                tip: '💡 TOEFL Trap: Pada korelasi "Neither... nor...", to be/kata kerja mengikuti subjek yang PALING DEKAT dengannya. Karena "the results" jamak, maka gunakan "are".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Bahasa Inggris adalah alat komunikasi yang sangat penting."',
                                audioText: 'English is an essential tool for global communication',
                                words: ['English', 'is', 'an', 'essential', 'tool', 'for', 'global', 'communication', 'are', 'were'],
                                correctWords: ['English', 'is', 'an', 'essential', 'tool', 'for', 'global', 'communication'],
                                tip: 'Subjek nama bahasa atau bidang studi (English, Mathematics, Physics) dianggap tunggal, sehingga memakai "is".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Manakah kalimat berikut yang BENAR secara tata bahasa standar TOEFL?',
                                options: [
                                    'The economic crisis in developing nations is extremely severe.',
                                    'The economic crisis in developing nations are extremely severe.',
                                    'The economic crisis in developing nations be extremely severe.',
                                    'The economic crisis in developing nations being extremely severe.'
                                ],
                                correctIndex: 0,
                                tip: '💡 Jebakan Utama TOEFL: Subjek utamanya adalah "The economic crisis" (tunggal), sedangkan "in developing nations" hanyalah keterangan preposisi. Jadi to be-nya adalah "is".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat berikut dan tentukan to be yang digunakan:',
                                audioText: 'The new syllabus is available on the campus portal',
                                options: [
                                    'The new syllabus is available on the campus portal',
                                    'The new syllabus are available on the campus portal',
                                    'The new syllabus was available in the classroom',
                                    'The new syllabi were available on the portal'
                                ],
                                correctIndex: 0,
                                tip: '"Syllabus" adalah kata benda tunggal (bentuk jamaknya adalah "syllabi"). Oleh karena itu memakai to be "is".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Subjek dengan To Be Present yang tepat:',
                                pairs: [
                                    { en: 'Everyone in the hall', id: 'is (indefinite pronoun = singular)' },
                                    { en: 'Both of the proposals', id: 'are (plural pronoun = plural)' },
                                    { en: 'The quality of the items', id: 'is (subject = quality)' },
                                    { en: 'The students and teacher', id: 'are (compound subject with and)' },
                                    { en: 'Physics', id: 'is (academic field = singular)' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "Physics ___ one of the most challenging academic disciplines at the university."',
                                options: ['is', 'are', 'were', 'being'],
                                correctIndex: 0,
                                tip: 'Kata benda berakhiran -s yang menyatakan cabang ilmu (Physics, Economics, Mathematics, Civics, Politics) adalah SINGULAR, memakai "is".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The news regarding the upcoming scholarship ___ broadcast live every evening.',
                                options: ['is', 'are', 'were', 'have'],
                                correctIndex: 0,
                                tip: '💡 Catatan TOEFL: Kata "News" selalu uncountable noun (benda tak dapat dihitung) dan selalu dianggap TUNGGAL. Wajib memakai to be "is", bukan "are".'
                            }
                        ]
                    },
                    {
                        id: 'l1_u1_s2',
                        title: 'To Be Past (was, were) & Kalimat Nominal Lampau',
                        icon: '⏳',
                        xp: 25,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Pilih to be lampau yang tepat: "The early draft of the treaty ___ drafted by international diplomats in 1945."',
                                options: ['was', 'were', 'is', 'are'],
                                correctIndex: 0,
                                tip: 'Subjek utama adalah "The early draft" (tunggal), dan keterangan waktu "in 1945" menandakan masa lampau. Wajib menggunakan "was".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Semua delegasi hadir dalam konferensi kemarin."',
                                audioText: 'All the delegates were present at the conference yesterday',
                                words: ['All', 'the', 'delegates', 'were', 'present', 'at', 'the', 'conference', 'yesterday', 'was', 'is'],
                                correctWords: ['All', 'the', 'delegates', 'were', 'present', 'at', 'the', 'conference', 'yesterday'],
                                tip: '"Delegates" adalah kata benda jamak, sehingga bentuk to be lampaunya adalah "were".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Manakah bentuk to be yang tepat untuk kalimat: "There ___ several crucial factors that contributed to the economic recovery."',
                                options: ['were', 'was', 'is', 'be'],
                                correctIndex: 0,
                                tip: '💡 TOEFL Inverted Pattern: Dalam pola "There is / There was / There were", subjek sebenarnya berada SETELAH to be. Karena subjeknya "several crucial factors" (jamak), maka to be-nya adalah "were".'
                            },
                            {
                                type: 'blank',
                                prompt: 'Neither the manager nor the employees ___ aware of the policy revision last week.',
                                options: ['were', 'was', 'are', 'is'],
                                correctIndex: 0,
                                tip: 'Aturan kedekatan: Subjek setelah "nor" adalah "the employees" (jamak), dan waktunya lampau ("last week"), jadi to be yang benar adalah "were".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan frasa dengan To Be Past (was / were):',
                                pairs: [
                                    { en: 'The flock of migrating birds', id: 'was (collective noun = singular)' },
                                    { en: 'The criteria for selection', id: 'were (criteria = plural of criterion)' },
                                    { en: 'The phenomenon of tides', id: 'was (phenomenon = singular)' },
                                    { en: 'The data collected in 2020', id: 'were / was (sering diuji di TOEFL)' },
                                    { en: 'A number of participants', id: 'were ("A number of" = jamak)' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'Perhatikan perbedaan "A number of" vs "The number of": "The number of registered applicants ___ surprisingly low last semester."',
                                options: ['was', 'were', 'are', 'have been'],
                                correctIndex: 0,
                                tip: '💡 Super Penting di TOEFL: "A number of + plural noun" bermakna jamak (artinya banyak). Namun "THE number of + plural noun" bermakna tunggal (artinya jumlah total). Maka "The number" memakai "was".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat nominal masa lalu berikut:',
                                audioText: 'The discovery of penicillin was a major breakthrough in medicine',
                                options: [
                                    'The discovery of penicillin was a major breakthrough in medicine',
                                    'The discoveries of penicillin were major breakthroughs in medicine',
                                    'The recovery of penicillin was a major breakthrough in clinic',
                                    'The discovery of penicillin is a major breakthrough in medicine'
                                ],
                                correctIndex: 0,
                                tip: 'Subjek intinya adalah "The discovery" (tunggal), sehingga kata kerjanya adalah "was".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Identifikasi kesalahan to be pada kalimat: "The bacteria that was examined under the microscope were harmless."',
                                options: [
                                    '"was" seharusnya "were" karena bacteria adalah bentuk jamak dari bacterium',
                                    '"were" seharusnya "was"',
                                    '"under" seharusnya "in"',
                                    'Kalimat sudah benar 100%'
                                ],
                                correctIndex: 0,
                                tip: '💡 Kosakata Latin / Yunani di TOEFL: "Bacterium" = tunggal, "Bacteria" = jamak. Maka relatif klausa yang merujuk ke bacteria harus menggunakan to be jamak: "that WERE examined".'
                            }
                        ]
                    },
                    {
                        id: 'l1_u1_s3',
                        title: 'To Be Terpisah Frasa Preposisi (Jebakan #1 TOEFL Structure)',
                        icon: '⚠️',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"The production of semiconductors for modern electronic devices ___ rapidly expanding worldwide."',
                                options: ['is', 'are', 'were', 'have'],
                                correctIndex: 0,
                                tip: '💡 Analisis TOEFL: Abaikan frasa preposisi pengacau "of semiconductors" dan "for modern electronic devices". Subjek sejatinya adalah kata benda paling depan: "The production" (tunggal), maka to be-nya adalah "is".'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"The various components of the spacecraft engine, along with the electrical wiring, ___ rigorously tested before launch."',
                                options: ['are', 'is', 'was', 'be'],
                                correctIndex: 0,
                                tip: '💡 TOEFL Trap: Frasa "along with", "as well as", "together with" BUKAN bagian dari subjek gramatikal! Subjek intinya adalah "The various components" (jamak), sehingga to be-nya adalah "are".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat TOEFL: "Kualitas foto-foto ini luar biasa bagus."',
                                audioText: 'The quality of these photographs is remarkably high',
                                words: ['The', 'quality', 'of', 'these', 'photographs', 'is', 'remarkably', 'high', 'are', 'were'],
                                correctWords: ['The', 'quality', 'of', 'these', 'photographs', 'is', 'remarkably', 'high'],
                                tip: 'Subjek intinya adalah "The quality" (tunggal), BUKAN "photographs" yang merupakan objek preposisi "of". Gunakan "is".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The causes of this global climate anomaly ___ still under intense scientific investigation.',
                                options: ['are', 'is', 'was', 'be'],
                                correctIndex: 0,
                                tip: 'Subjek intinya adalah "The causes" (jamak). Abaikan "of this global climate anomaly". Maka to be yang benar adalah "are".'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Error Identification (Part B):\n"The [A: price] of imported automobiles [B: have] increased significantly [C: due to] new tariff [D: regulations]."',
                                options: [
                                    'A: price',
                                    'B: have (seharusnya has/is)',
                                    'C: due to',
                                    'D: regulations'
                                ],
                                correctIndex: 1,
                                tip: '💡 Soal Asli TOEFL ITP: Subjek adalah "The price" (tunggal), bukan "automobiles". Maka auxiliary verb yang benar adalah "has increased", bukan "have increased".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Tentukan inti subjek (Singular atau Plural):',
                                pairs: [
                                    { en: 'The study of oceanic currents', id: 'Singular (Subjek = The study)' },
                                    { en: 'The effects of deforestation on soil', id: 'Plural (Subjek = The effects)' },
                                    { en: 'The CEO, as well as the directors', id: 'Singular (Subjek = The CEO)' },
                                    { en: 'Books on ancient Roman architecture', id: 'Plural (Subjek = Books)' },
                                    { en: 'A container of hazardous chemicals', id: 'Singular (Subjek = A container)' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "One of the most persistent misconceptions about space travel ___ that zero gravity means there is no gravitational force."',
                                options: ['is', 'are', 'were', 'being'],
                                correctIndex: 0,
                                tip: '💡 Pola TOEFL "One of the + Plural Noun": Subjeknya adalah kata "One" (Tunggal), bukan kata benda jamak di belakangnya. Maka wajib memakai "is".'
                            },
                            {
                                type: 'blank',
                                prompt: 'Each of the participating laboratories ___ equipped with state-of-the-art spectrometers.',
                                options: ['is', 'are', 'were', 'have been'],
                                correctIndex: 0,
                                tip: 'Kata "Each of + Plural Noun" SELALU diperlakukan sebagai subjek TUNGGAL di ujian TOEFL, sehingga to be-nya adalah "is".'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'l1_u2',
                unitNumber: 2,
                title: 'Unit 2: Verbs: Action, Stative, & Auxiliary Verbs (Fokus TOEFL)',
                description: 'Membedakan Action Verbs vs Stative Verbs, aturan auxilary (do/does/did), dan kata kerja yang dilarang dalam continuous tenses.',
                lessons: [
                    {
                        id: 'l1_u2_s1',
                        title: 'Action Verbs & Aturan Akhiran -s/-es Orang Ketiga Tunggal',
                        icon: '⚡',
                        xp: 25,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Pilih kata kerja yang tepat: "A photosynthetic organism ___ sunlight into chemical energy."',
                                options: ['converts', 'convert', 'converting', 'is convert'],
                                correctIndex: 0,
                                tip: 'Subjek orang ketiga tunggal (A photosynthetic organism / It) pada fakta ilmiah (Simple Present Tense) mewajibkan penambahan -s: "converts".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The Earth ___ on its axis once every twenty-four hours.',
                                options: ['rotates', 'rotate', 'rotating', 'is rotate'],
                                correctIndex: 0,
                                tip: 'Fakta ilmiah umum tentang benda alam tunggal (The Earth) menggunakan Simple Present dengan akhiran -s: "rotates".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat ilmiah: "Air mendidih pada suhu seratus derajat Celcius."',
                                audioText: 'Water boils at one hundred degrees Celsius',
                                words: ['Water', 'boils', 'at', 'one', 'hundred', 'degrees', 'Celsius', 'boil', 'boiling'],
                                correctWords: ['Water', 'boils', 'at', 'one', 'hundred', 'degrees', 'Celsius'],
                                tip: '"Water" adalah benda tak dapat dihitung (uncountable), selalu bersikap sebagai kata benda tunggal (boils).'
                            },
                            {
                                type: 'choice',
                                prompt: 'Bagaimana penambahan akhiran yang tepat untuk kata kerja berakhiran -ch, -sh, -s, -x, atau -z (seperti "catch", "wash", "focus")?',
                                options: [
                                    'Ditambah akhiran -es (catches, washes, focuses)',
                                    'Hanya ditambah akhiran -s (catchs, washs)',
                                    'Huruf terakhir dihilangkan lalu ditambah -ed',
                                    'Tidak boleh diubah sama sekali'
                                ],
                                correctIndex: 0,
                                tip: 'Kata kerja berakhiran desis sibilant (s, z, ch, sh, x) ditambah "-es" untuk memudahkan pelafalan bunyi vokal.'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"The ozone layer [A: protects] living organisms on Earth by [B: absorbs] harmful ultraviolet radiation [C: emitted] by the sun."',
                                options: [
                                    'A: protects',
                                    'B: absorbs (SALAH, seharusnya absorbing)',
                                    'C: emitted',
                                    'D: by the sun'
                                ],
                                correctIndex: 1,
                                tip: '💡 Kaidah Emas TOEFL: Setelah preposisi (by, in, on, at, for, of, with), kata kerja WAJIB berbentuk Gerund (V-ing): "by absorbing", bukan "by absorbs".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan aturan perubahan kata kerja bentuk he/she/it:',
                                pairs: [
                                    { en: 'Study (konsonan + y)', id: 'Studies (y berubah jadi -ies)' },
                                    { en: 'Play (vokal + y)', id: 'Plays (hanya ditambah -s)' },
                                    { en: 'Fix (akhiran -x)', id: 'Fixes (ditambah -es)' },
                                    { en: 'Go / Do (akhiran -o)', id: 'Goes / Does (ditambah -es)' },
                                    { en: 'Have (irregular)', id: 'Has (bentuk tunggal khusus)' }
                                ]
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat fakta berikut dan perhatikan kata kerjanya:',
                                audioText: 'The human brain consumes approximately twenty percent of the body\'s energy',
                                options: [
                                    'The human brain consumes approximately twenty percent of the body\'s energy',
                                    'The human brain consume approximately twenty percent of the body\'s energy',
                                    'The human brain is consume twenty percent of the body\'s energy',
                                    'The human brains consume approximately twenty percent of body'
                                ],
                                correctIndex: 0,
                                tip: 'Subjek tunggal "The human brain" berpasangan dengan "consumes".'
                            },
                            {
                                type: 'blank',
                                prompt: 'Every morning the researcher ___ the laboratory samples before initiating the tests.',
                                options: ['inspects', 'inspect', 'inspecting', 'inspected by'],
                                correctIndex: 0,
                                tip: 'Keterangan kebiasaan "Every morning" dan subjek tunggal "the researcher" menuntut "inspects".'
                            }
                        ]
                    },
                    {
                        id: 'l1_u2_s2',
                        title: 'Stative Verbs (Kata Kerja yang Dilarang dalam Bentuk -ing di TOEFL)',
                        icon: '🚫',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Apa yang dimaksud dengan Stative Verbs dalam tata bahasa Inggris dan tes TOEFL?',
                                options: [
                                    'Kata kerja yang menyatakan kondisi, kepemilikan, pikiran, atau emosi yang umumnya TIDAK boleh digunakan dalam bentuk Continuous (-ing)',
                                    'Kata kerja yang hanya boleh digunakan di masa lampau',
                                    'Kata kerja yang harus berpasangan dengan to be',
                                    'Kata kerja pasif yang tidak memerlukan subjek'
                                ],
                                correctIndex: 0,
                                tip: '💡 Sangat Penting di TOEFL: Kata kerja keadaan/kondisi (know, believe, understand, belong, possess, prefer, resemble) tidak lazim memakai bentuk -ing (Continuous).'
                            },
                            {
                                type: 'choice',
                                prompt: 'Manakah kalimat yang SALAH menurut kaidah Stative Verbs?',
                                options: [
                                    'The antique telescope is belonging to the university astronomy department.',
                                    'The antique telescope belongs to the university astronomy department.',
                                    'The researchers understand the implications of the findings.',
                                    'The molecule resembles a crystalline structure.'
                                ],
                                correctIndex: 0,
                                tip: '💡 TOEFL Trap: Kata kerja kepemilikan "belong" adalah stative verb. Tidak boleh "is belonging to", bentuk yang benar adalah "belongs to".'
                            },
                            {
                                type: 'blank',
                                prompt: 'At present, the chief geologist ___ that the seismic activity will stabilize soon.',
                                options: ['believes', 'is believing', 'are believing', 'believe'],
                                correctIndex: 0,
                                tip: 'Meskipun ada keterangan "At present", kata kerja mental/opini "believe" adalah Stative Verb, sehingga harus berbentuk Simple: "believes", bukan "is believing".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Senyawa kimia ini memiliki aroma yang menyengat."',
                                audioText: 'This chemical compound possesses a very pungent odor',
                                words: ['This', 'chemical', 'compound', 'possesses', 'a', 'very', 'pungent', 'odor', 'is', 'possessing'],
                                correctWords: ['This', 'chemical', 'compound', 'possesses', 'a', 'very', 'pungent', 'odor'],
                                tip: '"Possess" (memiliki) adalah Stative Verb. Gunakan "possesses", jangan "is possessing".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Kelompokkan Stative Verbs populer di tes TOEFL:',
                                pairs: [
                                    { en: 'Kognisi / Pikiran', id: 'know, understand, recognize, believe' },
                                    { en: 'Kepemilikan (Possession)', id: 'own, possess, belong, contain' },
                                    { en: 'Persepsi Panca Indra', id: 'hear, smell, taste, perceive' },
                                    { en: 'Emosi & Preferensi', id: 'love, hate, prefer, appreciate' },
                                    { en: 'Kondisi Relasional', id: 'resemble, consist of, depend on' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Error Identification (Part B):\n"The ancient parchment [A: is currently containing] historical [B: accounts] of the merchant guild [C: that operated] in the sixteenth [D: century]."',
                                options: [
                                    'A: is currently containing (SALAH, seharusnya currently contains)',
                                    'B: accounts',
                                    'C: that operated',
                                    'D: century'
                                ],
                                correctIndex: 0,
                                tip: '💡 Soal Khas TOEFL: "Contain" (berisi/memuat) adalah Stative Verb. Bentuk continuous "is containing" adalah kesalahan fatal dalam tes TOEFL. Perbaikan: "currently contains".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat Stative Verb berikut:',
                                audioText: 'All scientists agree that carbon emissions affect the atmosphere',
                                options: [
                                    'All scientists agree that carbon emissions affect the atmosphere',
                                    'All scientists are agreeing that carbon emissions affect the atmosphere',
                                    'All scientists agreed that carbon emissions affects the atmosphere',
                                    'All scientist agree that carbon emission affect the atmosphere'
                                ],
                                correctIndex: 0,
                                tip: '"Agree" adalah kata kerja persetujuan pikiran, menggunakan bentuk dasar "agree".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "Water ___ hydrogen and oxygen atoms in a two-to-one ratio."',
                                options: ['consists of', 'is consisting of', 'consist of', 'are consisting of'],
                                correctIndex: 0,
                                tip: '"Consist of" (terdiri dari) adalah Stative Verb baku dalam teks ilmiah TOEFL, tidak pernah digunakan dalam bentuk -ing. Karena Water tunggal, gunakan "consists of".'
                            }
                        ]
                    },
                    {
                        id: 'l1_u2_s3',
                        title: 'Auxiliary Verbs (Do, Does, Did) & Kalimat Tanya / Negasi',
                        icon: '🔍',
                        xp: 25,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Apa aturan mutlak bentuk kata kerja setelah Auxiliary Verbs "do", "does", atau "did"?',
                                options: [
                                    'Kata kerja utama WAJIB kembali ke bentuk dasar (Bare Infinitive / V1 tanpa -s/-es)',
                                    'Kata kerja utama harus berbentuk lampau (V2)',
                                    'Kata kerja utama harus berakhiran -ing',
                                    'Kata kerja utama harus berpasangan dengan to be'
                                ],
                                correctIndex: 0,
                                tip: '💡 Hukum Baku TOEFL: Do / Does / Did + Subject + VERB 1 MURNI (Bare Infinitive). Contoh: "Does she know?", BUKAN "Does she knows?".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The newly discovered species does not ___ in freshwater environments.',
                                options: ['survive', 'survives', 'survived', 'surviving'],
                                correctIndex: 0,
                                tip: 'Setelah auxiliary "does not", kata kerja wajib bentuk dasar V1 tanpa -s: "survive".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Manakah bentuk tanya lampau yang BENAR menurut kaidah TOEFL?',
                                options: [
                                    'Did the archaeological team discover any prehistoric artifacts?',
                                    'Did the archaeological team discovered any prehistoric artifacts?',
                                    'Did the archaeological team discovers any prehistoric artifacts?',
                                    'Did the archaeological team discovering any prehistoric artifacts?'
                                ],
                                correctIndex: 0,
                                tip: '💡 Jebakan Ganda (Double Past Trap): "Did" sudah menandakan masa lampau. Jangan gunakan V2 lagi setelah Did! Maka "Did ... discover", bukan "Did ... discovered".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat tanya ilmiah: "Mengapa burung bermigrasi selama musim dingin?"',
                                audioText: 'Why do birds migrate during the winter season',
                                words: ['Why', 'do', 'birds', 'migrate', 'during', 'the', 'winter', 'season?', 'does', 'migrates'],
                                correctWords: ['Why', 'do', 'birds', 'migrate', 'during', 'the', 'winter', 'season?'],
                                tip: 'Subjek jamak "birds" menggunakan kata kerja bantu "do" + kata kerja dasar "migrate".'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"The committee members [A: did not] [B: reached] a unanimous consensus [C: despite] holding discussions [D: for several hours]."',
                                options: [
                                    'A: did not',
                                    'B: reached (SALAH, seharusnya reach)',
                                    'C: despite',
                                    'D: for several hours'
                                ],
                                correctIndex: 1,
                                tip: '💡 Soal Klasik TOEFL: Setelah "did not", kata kerja tidak boleh berakhiran -ed. Seharusnya: "did not reach".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Auxiliary Verb dengan Fungsinya:',
                                pairs: [
                                    { en: 'Does', id: 'Present Tense untuk He/She/It' },
                                    { en: 'Do', id: 'Present Tense untuk I/You/We/They' },
                                    { en: 'Did', id: 'Past Tense untuk semua subjek' },
                                    { en: 'Verb setelah do/does/did', id: 'Selalu Bare Infinitive (V1 polos)' },
                                    { en: 'Inversi dengan Negative Adverb', id: 'Rarely do scientists observe...' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'Rarely ___ such severe volcanic eruptions occur without advance seismic warning.',
                                options: ['do', 'does', 'is', 'are'],
                                correctIndex: 0,
                                tip: '💡 Advanced TOEFL Inversion: Kalimat diawali adverb negatif "Rarely". Karena subjeknya jamak ("such severe volcanic eruptions"), maka auxiliary-nya adalah "do".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "Neither of the proposed solutions ___ the underlying architectural defect."',
                                options: ['solves', 'solve', 'are solving', 'do solve'],
                                correctIndex: 0,
                                tip: '"Neither of + plural noun" adalah subjek TUNGGAL (artinya tidak satu pun dari keduanya), sehingga kata kerjanya wajib berakhiran -s: "solves".'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'l1_u3',
                unitNumber: 3,
                title: 'Unit 3: Regular & Irregular Verbs (Perubahan V1-V2-V3 & Jebakan TOEFL)',
                description: 'Kuasai perubahan bentuk kata kerja beraturan dan tak beraturan, serta pasangan kata kerja jebakan: Lie/Lay, Rise/Raise, Sit/Set.',
                lessons: [
                    {
                        id: 'l1_u3_s1',
                        title: 'High-Frequency Irregular Verbs untuk TOEFL',
                        icon: '🔄',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Pilih bentuk Past Participle (V3) dari kata kerja "choose":',
                                options: ['chosen', 'chose', 'choosed', 'choosen'],
                                correctIndex: 0,
                                tip: 'Bentuk perubahan: Choose (V1) -> Chose (V2) -> Chosen (V3). Sering muncul pada pola passive voice TOEFL.'
                            },
                            {
                                type: 'blank',
                                prompt: 'The global temperatures have ___ steadily over the past half-century.',
                                options: ['risen', 'rose', 'raised', 'rise'],
                                correctIndex: 0,
                                tip: 'Bentuk V3 dari kata kerja tak beraturan "rise" (naik/terbit) adalah "risen". Present Perfect: have + V3.'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Penulis telah menulis banyak artikel ilmiah."',
                                audioText: 'The author has written numerous scientific articles',
                                words: ['The', 'author', 'has', 'written', 'numerous', 'scientific', 'articles', 'wrote', 'write'],
                                correctWords: ['The', 'author', 'has', 'written', 'numerous', 'scientific', 'articles'],
                                tip: 'Write (V1) -> Wrote (V2) -> Written (V3). Has + written.'
                            },
                            {
                                type: 'choice',
                                prompt: 'Manakah deretan bentuk perubahan V1 -> V2 -> V3 yang BENAR?',
                                options: [
                                    'Begin -> Began -> Begun',
                                    'Begin -> Begun -> Began',
                                    'Begin -> Begined -> Begined',
                                    'Begin -> Began -> Beganed'
                                ],
                                correctIndex: 0,
                                tip: 'Begin -> Began -> Begun. Ingat rumus vokal: i -> a -> u (seperti sing -> sang -> sung, ring -> rang -> rung).'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan V1 dengan bentuk V3 (Past Participle):',
                                pairs: [
                                    { en: 'Speak', id: 'Spoken' },
                                    { en: 'Freeze', id: 'Frozen' },
                                    { en: 'Break', id: 'Broken' },
                                    { en: 'Drive', id: 'Driven' },
                                    { en: 'Forgive', id: 'Forgiven' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"The river had [A: froze] solid [B: before] the rescue expedition [C: could reach] the stranded [D: villagers]."',
                                options: [
                                    'A: froze (SALAH, seharusnya frozen)',
                                    'B: before',
                                    'C: could reach',
                                    'D: villagers'
                                ],
                                correctIndex: 0,
                                tip: '💡 Jebakan Past Participle TOEFL: Setelah auxiliary "had", bentuk yang wajib dipakai adalah V3 (Past Participle), yaitu "had frozen", bukan bentuk V2 "froze".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The antique tapestry was ___ by skilled artisans during the Renaissance.',
                                options: ['woven', 'wove', 'weaved', 'weave'],
                                correctIndex: 0,
                                tip: 'Bentuk perubahan: Weave -> Wove -> Woven (ditenun).'
                            },
                            {
                                type: 'choice',
                                prompt: 'Manakah bentuk V2 dan V3 dari kata kerja "lead" (memimpin/menyebabkan)?',
                                options: ['led / led', 'leaded / leaded', 'lead / lead', 'load / loaded'],
                                correctIndex: 0,
                                tip: 'Lead (V1) -> Led (V2) -> Led (V3). Sering muncul dalam teks TOEFL: "This discovery led to further research".'
                            }
                        ]
                    },
                    {
                        id: 'l1_u3_s2',
                        title: 'Kata Kerja Membingungkan di TOEFL: Rise vs Raise, Lie vs Lay',
                        icon: '⚖️',
                        xp: 35,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Apa perbedaan mendasar antara "Rise" dan "Raise" dalam soal TOEFL?',
                                options: [
                                    '"Rise" adalah Intransitive (tidak butuh objek langsung), sedangkan "Raise" adalah Transitive (wajib ada objek langsung)',
                                    '"Rise" hanya untuk benda mati, "Raise" untuk manusia',
                                    '"Rise" adalah kata sifat, "Raise" adalah kata kerja',
                                    'Keduanya memiliki fungsi dan arti yang sama persis'
                                ],
                                correctIndex: 0,
                                tip: '💡 Jebakan Nomor 1 di TOEFL Structure:\n- Rise (naik sendiri): The sun rises. (Tidak ada objek)\n- Raise (menaikkan/mengangkat sesuatu): She raised her hand. (Ada objek: her hand).'
                            },
                            {
                                type: 'blank',
                                prompt: 'The central bank decided to ___ the interest rate to curb runaway inflation.',
                                options: ['raise', 'rise', 'arise', 'rose'],
                                correctIndex: 0,
                                tip: 'Karena ada objek langsung ("the interest rate"), maka kata kerja transitif yang wajib digunakan adalah "raise" (menaikkan).'
                            },
                            {
                                type: 'choice',
                                prompt: 'Perhatikan perbedaan "Lie" (berbaring/terletak) vs "Lay" (meletakkan):\n"Geographic surveys show that the ancient ruins ___ beneath several layers of sediment."',
                                options: ['lie', 'lay', 'laid', 'lain'],
                                correctIndex: 0,
                                tip: '💡 Aturan Emas Lie vs Lay:\n- Lie (berbaring/terletak): Intransitive (tanpa objek). Contoh: The ruins lie beneath...\n- Lay (meletakkan): Transitive (butuh objek). Contoh: The workers lay the bricks.'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Asap membumbung tinggi ke udara."',
                                audioText: 'Thick smoke rises high into the sky',
                                words: ['Thick', 'smoke', 'rises', 'high', 'into', 'the', 'sky', 'raises', 'rose'],
                                correctWords: ['Thick', 'smoke', 'rises', 'high', 'into', 'the', 'sky'],
                                tip: 'Asap naik sendiri ke udara tanpa objek langsung, maka kata kerjanya adalah "rises".'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"The research assistants [A: laid] on the laboratory floor [B: to rest] after [C: completing] their [D: demanding] shifts."',
                                options: [
                                    'A: laid (SALAH, seharusnya lay)',
                                    'B: to rest',
                                    'C: completing',
                                    'D: demanding'
                                ],
                                correctIndex: 0,
                                tip: '💡 Jebakan Super Sulit TOEFL:\nBentuk lampau (V2) dari Lie (berbaring) adalah LAY!\nSedangkan LAID adalah bentuk lampau dari Lay (meletakkan sesuatu). Karena asisten peneliti berbaring (tanpa objek), bentuk lampau yang benar adalah "lay on the floor".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan pasangan kata kerja Intransitive vs Transitive:',
                                pairs: [
                                    { en: 'Rise -> Rose -> Risen', id: 'Intransitive (Naik sendiri, tanpa objek)' },
                                    { en: 'Raise -> Raised -> Raised', id: 'Transitive (Menaikkan sesuatu, ada objek)' },
                                    { en: 'Lie -> Lay -> Lain', id: 'Intransitive (Berbaring/terletak)' },
                                    { en: 'Lay -> Laid -> Laid', id: 'Transitive (Meletakkan sesuatu)' },
                                    { en: 'Sit -> Sat -> Sat', id: 'Intransitive (Duduk sendiri)' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'The heavy fog began to ___ as the morning sun became warmer.',
                                options: ['lift', 'rise', 'raise', 'raised'],
                                correctIndex: 1,
                                tip: 'Kabut terangkat/naik dengan sendirinya tanpa objek luar, gunakan "rise".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Pilih kalimat yang paling tepat secara kaidah gramatikal TOEFL:',
                                options: [
                                    'The masons carefully laid the foundation stones for the cathedral.',
                                    'The masons carefully lied the foundation stones for the cathedral.',
                                    'The foundation stones laid beneath the cathedral.',
                                    'The sun raised above the horizon at dawn.'
                                ],
                                correctIndex: 0,
                                tip: 'Tukang batu meletakkan batu fondasi (ada objek "the foundation stones"), maka bentuk lampau dari Lay (meletakkan) adalah "laid". Kalimat A tepat 100%.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'level_2',
        levelNumber: 2,
        code: 'A2',
        title: 'Level 2: Elementary (Pre-TOEFL Intermediate)',
        subtitle: 'Subject-Verb Agreement Lanjutan, Verb Tenses & Aspect, serta Passive Voice Dasar.',
        color: '#0284c7',
        badgeIcon: 'ðŸš€',
        units: [
            {
                id: 'l2_u1',
                unitNumber: 1,
                title: 'Unit 1: Subject-Verb Agreement Lanjutan (Inti TOEFL Section 2)',
                description: 'Kuasai aturan kata ganti tak tentu (Indefinite Pronouns), subjek kolektif, dan frasa jumlah.',
                lessons: [
                    {
                        id: 'l2_u1_s1',
                        title: 'Indefinite Pronouns: Selalu Tunggal (Everyone, Each, Neither)',
                        icon: 'ðŸ‘¥',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"Everyone involved in the aerospace design project ___ required to sign a nondisclosure agreement."',
                                options: ['is', 'are', 'were', 'be'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Aturan Mutlak TOEFL: Indefinite pronouns berakhiran -one, -body, -thing (Everyone, Somebody, Anyone, Nobody, Each) SELALU dianggap TUNGGAL (Singular). Gunakan "is".'
                            },
                            {
                                type: 'blank',
                                prompt: 'Each of the participants ___ given a personalized schedule upon arrival.',
                                options: ['was', 'were', 'are', 'have been'],
                                correctIndex: 0,
                                tip: '"Each of + plural noun" selalu singular. Maka bentuk lampaunya adalah "was", bukan "were".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Tak satu pun dari bukti-bukti tersebut yang meyakinkan."',
                                audioText: 'Neither of the arguments was convincing to the jury',
                                words: ['Neither', 'of', 'the', 'arguments', 'was', 'convincing', 'to', 'the', 'jury', 'were', 'are'],
                                correctWords: ['Neither', 'of', 'the', 'arguments', 'was', 'convincing', 'to', 'the', 'jury'],
                                tip: '"Neither of..." mengacu pada tidak ada satu pun (tunggal), maka kata kerjanya adalah "was".'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"Each of the [A: fifty] states in the Union [B: have] its own [C: state constitution] and legislative [D: body]."',
                                options: [
                                    'A: fifty',
                                    'B: have (SALAH, seharusnya has)',
                                    'C: state constitution',
                                    'D: body'
                                ],
                                correctIndex: 1,
                                tip: 'ðŸ’¡ Soal Otentik TOEFL: Subjek kalimat adalah "Each" (tunggal), bukan "fifty states". Maka kata kerja yang benar adalah "has", bukan "have".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Indefinite Pronoun dengan Sifat Verb-nya:',
                                pairs: [
                                    { en: 'Everyone / Everybody', id: 'Selalu Singular (is / has / -s)' },
                                    { en: 'Each / Either / Neither', id: 'Selalu Singular (was / is)' },
                                    { en: 'Both / Few / Several / Many', id: 'Selalu Plural (are / were / have)' },
                                    { en: 'None of the money', id: 'Singular (karena money uncountable)' },
                                    { en: 'None of the students', id: 'Plural (karena students countable plural)' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'Somebody in the back of the lecture hall ___ an insightful question.',
                                options: ['raised', 'rose', 'raise', 'rising'],
                                correctIndex: 0,
                                tip: 'Ada objek langsung ("an insightful question"), maka gunakan bentuk lampau dari raise: "raised".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi kalimat: "Neither of the proposed solutions ___ practical in this economic climate."',
                                options: ['seems', 'seem', 'are seeming', 'were seeming'],
                                correctIndex: 0,
                                tip: '"Neither of + plural noun" mengambil kata kerja tunggal (singular verb berakhiran -s): "seems".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat berikut dan perhatikan kesesuaian subjek:',
                                audioText: 'Everyone who registered for the seminar receives a certificate',
                                options: [
                                    'Everyone who registered for the seminar receives a certificate',
                                    'Everyone who registered for the seminar receive a certificate',
                                    'Everyone who registers for the seminar are receiving certificate',
                                    'Everyone who registered the seminar received certificate'
                                ],
                                correctIndex: 0,
                                tip: '"Everyone" berstatus singular, sehingga kata kerja utamanya memakai akhiran -s ("receives").'
                            }
                        ]
                    },
                    {
                        id: 'l2_u1_s2',
                        title: 'Frasa Kuantitas & Prepositional Traps (All, Most, None, The Number of)',
                        icon: 'ðŸ“Š',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"The number of endangered species in this sanctuary ___ increasing steadily every year."',
                                options: ['is', 'are', 'were', 'have been'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Jebakan Emas TOEFL: "The number of..." SELALU TUNGGAL (Singular) karena fokus pada jumlahnya ("is"). Sebaliknya, "A number of..." SELALU JAMAK (Plural).'
                            },
                            {
                                type: 'choice',
                                prompt: 'Bandingkan dengan kalimat ini:\n"A number of international scholars ___ attending the symposium today."',
                                options: ['are', 'is', 'was', 'has been'],
                                correctIndex: 0,
                                tip: '"A number of..." bermakna "sejumlah/banyak" (many), sehingga SELALU JAMAK (Plural) dan memakai "are".'
                            },
                            {
                                type: 'blank',
                                prompt: 'All of the confidential information ___ leaked to the public yesterday.',
                                options: ['was', 'were', 'are', 'have been'],
                                correctIndex: 0,
                                tip: 'Pada frasa kuantitas (All of, Most of, Half of), kata benda setelah "of" menentukan verb: "information" adalah uncountable (tunggal), maka kata kerjanya adalah "was".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Sebagian besar mahasiswa menghadiri kuliah tamu."',
                                audioText: 'Most of the students attended the guest lecture',
                                words: ['Most', 'of', 'the', 'students', 'attended', 'the', 'guest', 'lecture', 'was', 'has'],
                                correctWords: ['Most', 'of', 'the', 'students', 'attended', 'the', 'guest', 'lecture'],
                                tip: '"Most of the students" mengacu pada kata benda jamak "students".'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"The professor, [A: along with] his research assistants, [B: are] currently [C: conducting] fieldwork in [D: Sumatra]."',
                                options: [
                                    'A: along with',
                                    'B: are (SALAH, seharusnya is)',
                                    'C: conducting',
                                    'D: Sumatra'
                                ],
                                correctIndex: 1,
                                tip: 'ðŸ’¡ Jebakan Preposisi Sisipan: Frasa seperti "along with", "together with", "as well as", "in addition to" TIDAK mengubah subjek utama. Subjeknya adalah "The professor" (tunggal), maka gunakan "is", bukan "are".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Aturan Subjek Kuantitas TOEFL:',
                                pairs: [
                                    { en: 'The number of books', id: 'Singular (is / was / has)' },
                                    { en: 'A number of books', id: 'Plural (are / were / have)' },
                                    { en: 'One of the students', id: 'Singular (subjek utama = One)' },
                                    { en: 'Half of the water', id: 'Singular (water = uncountable)' },
                                    { en: 'Half of the apples', id: 'Plural (apples = countable plural)' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'One of the most accomplished neurosurgeons in the nation ___ speaking at the medical summit.',
                                options: ['is', 'are', 'were', 'have been'],
                                correctIndex: 0,
                                tip: 'Subjek kalimat adalah "One" (tunggal), bukan "neurosurgeons". Maka gunakan "is".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat berikut dan pilih transkrip yang akurat:',
                                audioText: 'A number of issues were discussed during the board meeting',
                                options: [
                                    'A number of issues were discussed during the board meeting',
                                    'The number of issues was discussed during the board meeting',
                                    'A number of issues was discussed during the board meeting',
                                    'The number of issue were discussed during the board meeting'
                                ],
                                correctIndex: 0,
                                tip: '"A number of issues" adalah jamak dan menggunakan "were discussed".'
                            }
                        ]
                    },
                    {
                        id: 'l2_u1_s3',
                        title: 'Correlative Conjunctions (Neither...nor, Either...or, Not only...but also)',
                        icon: 'âš–ï¸',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Proximity Rule Drill:\n"Neither the head physician nor the attending nurses ___ satisfied with the new hospital protocol."',
                                options: ['were', 'was', 'is', 'has been'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Aturan Kedekatan (Proximity Rule): Pada "Neither...nor" dan "Either...or", kata kerja mengikuti subjek yang PALING DEKAT dengannya. Karena "the attending nurses" (jamak) terletak paling dekat dengan verb, gunakan "were".'
                            },
                            {
                                type: 'blank',
                                prompt: 'Either the flight attendants or the chief pilot ___ responsible for the pre-flight briefing.',
                                options: ['is', 'are', 'were', 'have been'],
                                correctIndex: 0,
                                tip: 'Subjek yang paling dekat dengan kata kerja adalah "the chief pilot" (tunggal), maka gunakan to be "is".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Bukan hanya buku itu tetapi juga catatannya yang hilang."',
                                audioText: 'Not only the book but also the notes were missing',
                                words: ['Not', 'only', 'the', 'book', 'but', 'also', 'the', 'notes', 'were', 'missing', 'was', 'is'],
                                correctWords: ['Not', 'only', 'the', 'book', 'but', 'also', 'the', 'notes', 'were', 'missing'],
                                tip: 'Pada "Not only... but also...", verb mengikuti subjek setelah "but also" ("the notes" = jamak, maka "were").'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"Neither the [A: supervisor] nor [B: his assistants] [C: was] able to [D: locate] the missing blueprints."',
                                options: [
                                    'A: supervisor',
                                    'B: his assistants',
                                    'C: was (SALAH, seharusnya were)',
                                    'D: locate'
                                ],
                                correctIndex: 2,
                                tip: 'Subjek terdekat dengan verb adalah "his assistants" (jamak), sehingga kata kerja yang benar adalah "were", bukan "was".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Pasangan Correlative Conjunctions:',
                                pairs: [
                                    { en: 'Neither', id: 'nor (keduanya tidak)' },
                                    { en: 'Either', id: 'or (salah satu dari dua)' },
                                    { en: 'Not only', id: 'but also (tidak hanya... tetapi juga)' },
                                    { en: 'Both', id: 'and (keduanya sekaligus - selalu jamak)' },
                                    { en: 'Whether', id: 'or not (apakah... atau tidak)' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "Both the dean and the department head ___ approved the curriculum revision."',
                                options: ['have', 'has', 'is', 'was'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Catatan TOEFL: Berbeda dengan either/neither, kata hubung "Both...and..." SELALU memerlukan kata kerja JAMAK (have approved).'
                            },
                            {
                                type: 'blank',
                                prompt: 'Neither the manager nor his deputy ___ present at the emergency briefing.',
                                options: ['was', 'were', 'are', 'have been'],
                                correctIndex: 0,
                                tip: 'Kedua subjek ("the manager" dan "his deputy") adalah tunggal, subjek terdekat adalah tunggal, maka gunakan "was".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat dan tentukan kata kerja yang dipakai:',
                                audioText: 'Either the captain or the crew members are on standby',
                                options: [
                                    'Either the captain or the crew members are on standby',
                                    'Either the captain or the crew members is on standby',
                                    'Neither the captain nor the crew members was on standby',
                                    'Both the captain and the crew members is on standby'
                                ],
                                correctIndex: 0,
                                tip: 'Subjek terdekat "crew members" berbentuk jamak, maka verb yang benar adalah "are".'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'l2_u2',
                unitNumber: 2,
                title: 'Unit 2: Verb Tenses & Aspect (Present Perfect vs Simple Past, Past Perfect)',
                description: 'Membedakan Present Perfect vs Simple Past, Past Perfect untuk urutan waktu lampau, dan penanda waktu spesifik.',
                lessons: [
                    {
                        id: 'l2_u2_s1',
                        title: 'Present Perfect vs Past Simple & Penanda Waktu Lampau',
                        icon: 'â±ï¸',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Kapan kita WAJIB menggunakan Simple Past daripada Present Perfect dalam tes TOEFL?',
                                options: [
                                    'Ketika ada keterangan waktu lampau spesifik (yesterday, in 1980, two years ago, last month)',
                                    'Ketika kalimat mengandung kata "since" atau "for"',
                                    'Ketika aktivitas masih berlangsung sampai sekarang',
                                    'Hanya jika subjeknya jamak'
                                ],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Kaidah Tenses TOEFL: Waktu spesifik masa lalu (in 1990, ago, last...) WAJIB Simple Past (V2), BUKAN Present Perfect.'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"Albert Einstein [A: has published] his revolutionary theory of general relativity [B: in 1915] while [C: working] in [D: Berlin]."',
                                options: [
                                    'A: has published (SALAH, seharusnya published)',
                                    'B: in 1915',
                                    'C: working',
                                    'D: Berlin'
                                ],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Soal Khas TOEFL: Karena ada waktu pasti lampau "in 1915", tidak boleh menggunakan Present Perfect "has published". Bentuk yang benar adalah Simple Past V2: "published".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The pharmaceutical company ___ over five hundred clinical trials since 2010.',
                                options: ['has conducted', 'conducted', 'was conducted', 'conducts'],
                                correctIndex: 0,
                                tip: 'Kata "since 2010" menandakan kegiatan dimulai di masa lampau dan berlanjut/relevan hingga kini. Gunakan Present Perfect: "has conducted".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Para peneliti telah menemukan vaksin baru."',
                                audioText: 'The researchers have discovered an effective new vaccine',
                                words: ['The', 'researchers', 'have', 'discovered', 'an', 'effective', 'new', 'vaccine', 'has', 'did'],
                                correctWords: ['The', 'researchers', 'have', 'discovered', 'an', 'effective', 'new', 'vaccine'],
                                tip: 'Subjek jamak "researchers" dipadukan dengan "have + V3 (discovered)".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Tense dengan Penanda Waktu Khasnya:',
                                pairs: [
                                    { en: 'Simple Past (V2)', id: 'yesterday, ago, in 1999, last week' },
                                    { en: 'Present Perfect (have/has + V3)', id: 'since, for 3 years, already, yet' },
                                    { en: 'Past Continuous (was/were + V-ing)', id: 'at 8 PM yesterday, while, when' },
                                    { en: 'Past Perfect (had + V3)', id: 'by the time, before, prior to' },
                                    { en: 'Simple Present (V1 / Vs)', id: 'every day, always, annually, usually' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'Dr. Jane Goodall ___ her groundbreaking study of chimpanzees in Gombe in 1960.',
                                options: ['began', 'has begun', 'had begun', 'was begun'],
                                correctIndex: 0,
                                tip: 'Ada tahun lampau spesifik "in 1960", maka WAJIB menggunakan Simple Past: "began".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "Up to now, the team ___ five major scholarly articles."',
                                options: ['has published', 'published', 'had published', 'publishes'],
                                correctIndex: 0,
                                tip: 'Frasa "Up to now" (hingga saat ini) dan "So far" selalu berpasangan dengan Present Perfect: "has published".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat berikut dan perhatikan tenses yang digunakan:',
                                audioText: 'The museum has welcomed over one million visitors this year',
                                options: [
                                    'The museum has welcomed over one million visitors this year',
                                    'The museum welcomed over one million visitors last year',
                                    'The museum had welcomed one million visitors yesterday',
                                    'The museum is welcoming million visitors this year'
                                ],
                                correctIndex: 0,
                                tip: '"This year" (tahun ini - periode yang belum selesai) menggunakan Present Perfect: "has welcomed".'
                            }
                        ]
                    },
                    {
                        id: 'l2_u2_s2',
                        title: 'Past Perfect (had + V3) untuk Urutan Dua Kejadian Lampau',
                        icon: 'â³',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"By the time the fire brigade arrived at the industrial plant, the explosion ___ widespread damage."',
                                options: ['had already caused', 'has already caused', 'causes', 'was caused'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Past Perfect (had + V3): Digunakan untuk kejadian yang terjadi LEBIH AWAL daripada kejadian lampau lainnya ("arrived"). Pola khas TOEFL: "By the time + Simple Past, Past Perfect".'
                            },
                            {
                                type: 'blank',
                                prompt: 'Before the satellite was launched, engineers ___ rigorous safety inspections.',
                                options: ['had completed', 'have completed', 'were completed', 'complete'],
                                correctIndex: 0,
                                tip: 'Inspeksi keselamatan selesai sebelum satelit diluncurkan (kejadian mendahului peristiwa lampau). Gunakan "had completed".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Kereta api sudah berangkat saat kami tiba di stasiun."',
                                audioText: 'The train had left when we reached the station',
                                words: ['The', 'train', 'had', 'left', 'when', 'we', 'reached', 'the', 'station', 'has', 'was'],
                                correctWords: ['The', 'train', 'had', 'left', 'when', 'we', 'reached', 'the', 'station'],
                                tip: 'Kereta berangkat lebih dulu (Past Perfect: had left) sebelum kami tiba (Simple Past: reached).'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"By [A: the end of] 1945, the historic conference [B: has established] the foundation [C: for] the new international [D: organization]."',
                                options: [
                                    'A: the end of',
                                    'B: has established (SALAH, seharusnya had established)',
                                    'C: for',
                                    'D: organization'
                                ],
                                correctIndex: 1,
                                tip: 'Pola "By + waktu lampau" (By the end of 1945) memerlukan Past Perfect ("had established"), BUKAN Present Perfect ("has established").'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Urutan Kejadian Lampau:',
                                pairs: [
                                    { en: 'Kejadian Pertama (terjadi lebih dahulu)', id: 'Past Perfect (had + V3)' },
                                    { en: 'Kejadian Kedua (terjadi belakangan)', id: 'Simple Past (V2)' },
                                    { en: 'Klausa waktu pembuka', id: 'By the time / Before / After' },
                                    { en: 'Kejadian berulang di masa lampau', id: 'Used to + V1' },
                                    { en: 'Kejadian sedang berlangsung di masa lalu', id: 'Past Continuous (was/were + V-ing)' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'The archaeologists discovered that ancient looters ___ the tomb centuries earlier.',
                                options: ['had desecrated', 'have desecrated', 'desecrate', 'were desecrating'],
                                correctIndex: 0,
                                tip: 'Penjarahan makam terjadi berabad-abad sebelum para arkeolog menemukannya (kejadian terdahulu: "had desecrated").'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "She did not recognize the colleague because she ___ him for fifteen years."',
                                options: ['had not seen', 'has not seen', 'did not see', 'was not seeing'],
                                correctIndex: 0,
                                tip: 'Rentang waktu tidak bertemu terjadi sebelum momen tidak mengenali di masa lampau: gunakan "had not seen".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat berikut dan perhatikan bentuk Past Perfect:',
                                audioText: 'They had already submitted the report before the deadline expired',
                                options: [
                                    'They had already submitted the report before the deadline expired',
                                    'They have already submitted the report before the deadline expires',
                                    'They had already submit the report before the deadline expired',
                                    'They already submitted the report before deadline had expired'
                                ],
                                correctIndex: 0,
                                tip: 'Bentuk yang benar adalah "had already submitted" sebelum "the deadline expired".'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'l2_u3',
                unitNumber: 3,
                title: 'Unit 3: Passive Voice & Intransitive Verb Traps',
                description: 'Formulasi kalimat pasif Be + V3 di berbagai tenses, dan larangan pasif untuk kata kerja intransitif.',
                lessons: [
                    {
                        id: 'l2_u3_s1',
                        title: 'Formulasi Passive Voice (Be + V3) di Berbagai Tenses',
                        icon: 'âš™ï¸',
                        xp: 30,
                        questions: [
                            {
                                type: 'blank',
                                prompt: 'Penicillin ___ by Alexander Fleming in 1928.',
                                options: ['was discovered', 'discovered', 'is discovered', 'has discovered'],
                                correctIndex: 0,
                                tip: 'Passive Voice Simple Past: Subject + was/were + V3. Penisilin ditemukan (bukan menemukan sendiri) pada tahun 1928: "was discovered".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat pasif: "Buku itu ditulis oleh sejarawan terkenal."',
                                audioText: 'The book was written by a renowned historian',
                                words: ['The', 'book', 'was', 'written', 'by', 'a', 'renowned', 'historian', 'wrote', 'is'],
                                correctWords: ['The', 'book', 'was', 'written', 'by', 'a', 'renowned', 'historian'],
                                tip: 'Rumus Pasif Lampau: was + V3 (written) + by...'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan bentuk aktif ke bentuk pasifnya:',
                                pairs: [
                                    { en: 'The engineers build bridges', id: 'Bridges are built by engineers' },
                                    { en: 'The scientist found the fossil', id: 'The fossil was found by the scientist' },
                                    { en: 'The team has solved the issue', id: 'The issue has been solved' },
                                    { en: 'They will announce the score', id: 'The score will be announced' },
                                    { en: 'Volcanoes emit sulfur gas', id: 'Sulfur gas is emitted by volcanoes' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"By the time the firefighters arrived at the scene, the warehouse ___ completely destroyed by the flames."',
                                options: ['had been', 'has been', 'was being', 'is'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Past Perfect Pasif: Kejadian pasif yang sudah selesai sebelum peristiwa lampau lainnya (By the time ... arrived) menggunakan "had been + V3".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The historical document has ___ by archivists for more than two centuries.',
                                options: ['been preserved', 'preserved', 'being preserved', 'preserve'],
                                correctIndex: 0,
                                tip: 'Present Perfect Passive: has/have + been + V3 (has been preserved).'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi dengan Modal Passive: "All laboratory equipment ___ thoroughly before leaving the room."',
                                options: ['must be cleaned', 'must clean', 'must be cleaning', 'must have cleaned'],
                                correctIndex: 0,
                                tip: 'Modal Pasif: Modal (must, can, should) + be + V3: "must be cleaned".'
                            },
                            {
                                type: 'blank',
                                prompt: 'New renewable energy policies are currently ___ by parliament.',
                                options: ['being debated', 'been debated', 'debating', 'debated'],
                                correctIndex: 0,
                                tip: 'Present Continuous Passive: is/are + being + V3: "are currently being debated".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat pasif berikut:',
                                audioText: 'The diplomatic agreement was signed by representatives from both nations',
                                options: [
                                    'The diplomatic agreement was signed by representatives from both nations',
                                    'The diplomatic agreement signed representatives from both nations',
                                    'The diplomatic agreement has signed by representative from nation',
                                    'The diplomatic agreement was signing by representatives'
                                ],
                                correctIndex: 0,
                                tip: 'Bentuk pasif lampau: "was signed by representatives...".'
                            }
                        ]
                    },
                    {
                        id: 'l2_u3_s2',
                        title: 'Kata Kerja Intransitif yang DILARANG Pasif (Occur, Happen, Disappear)',
                        icon: 'ðŸš«',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Identifikasi kalimat pasif yang SALAH secara tata bahasa:',
                                options: [
                                    'The spacecraft was disappeared into the asteroid belt.',
                                    'The spacecraft disappeared into the asteroid belt.',
                                    'The telemetry data was analyzed by computer algorithms.',
                                    'Satellite transmissions were disrupted by solar flares.'
                                ],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Jebakan Intransitive Verb di TOEFL: Kata kerja "disappear", "arrive", "die", "occur", "happen" adalah intransitif (tidak punya objek). Kata kerja ini TIDAK PERNAH bisa dibuat dalam bentuk pasif! Maka "was disappeared" salah fatal, harusnya "disappeared".'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"A total [A: solar eclipse] [B: was occurred] in the southern hemisphere [C: during] the late autumn [D: of 1994]."',
                                options: [
                                    'A: solar eclipse',
                                    'B: was occurred (SALAH, seharusnya occurred)',
                                    'C: during',
                                    'D: of 1994'
                                ],
                                correctIndex: 1,
                                tip: 'ðŸ’¡ Jebakan Favorit TOEFL: "Occur" adalah intransitive verb. Gerhana matahari "terjadi" secara mandiri, bukan "diterjadikan". Bentuk pasif "was occurred" adalah salah; bentuk yang benar adalah aktif "occurred".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The devastating earthquake ___ without warning along the tectonic fault line.',
                                options: ['happened', 'was happened', 'has been happened', 'is happened'],
                                correctIndex: 0,
                                tip: 'Kata kerja "happen" tidak boleh pasif. Jawaban yang benar adalah aktif: "happened".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Insiden itu terjadi larut malam kemarin."',
                                audioText: 'The unfortunate incident occurred late last night',
                                words: ['The', 'unfortunate', 'incident', 'occurred', 'late', 'last', 'night', 'was', 'occurred'],
                                correctWords: ['The', 'unfortunate', 'incident', 'occurred', 'late', 'last', 'night'],
                                tip: 'Gunakan bentuk aktif "occurred" tanpa kata bantu to be "was".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Klasifikasikan Kata Kerja: Boleh Pasif vs Dilarang Pasif:',
                                pairs: [
                                    { en: 'happen / occur', id: 'Dilarang Pasif (Selalu Aktif)' },
                                    { en: 'disappear / vanish', id: 'Dilarang Pasif (Selalu Aktif)' },
                                    { en: 'arrive / depart', id: 'Dilarang Pasif (Selalu Aktif)' },
                                    { en: 'discover / invent', id: 'Boleh Pasif (was discovered)' },
                                    { en: 'publish / establish', id: 'Boleh Pasif (has been published)' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'Pilih kalimat yang benar secara standar akademis:',
                                options: [
                                    'The package arrived on schedule this morning.',
                                    'The package was arrived on schedule this morning.',
                                    'The parcel has been arrived safely.',
                                    'The mail was been arrived at the office.'
                                ],
                                correctIndex: 0,
                                tip: '"Arrive" adalah intransitive verb, tidak bisa dibuat pasif ("was arrived" salah).'
                            },
                            {
                                type: 'blank',
                                prompt: 'Several species of passenger pigeons completely ___ during the early twentieth century.',
                                options: ['vanished', 'were vanished', 'have been vanished', 'was vanished'],
                                correctIndex: 0,
                                tip: '"Vanish" bermakna lenyap (intransitif), bentuk yang benar adalah aktif: "vanished".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat berikut dan perhatikan struktur kata kerjanya:',
                                audioText: 'The tragic accident occurred during heavy rainfall',
                                options: [
                                    'The tragic accident occurred during heavy rainfall',
                                    'The tragic accident was occurred during heavy rainfall',
                                    'The tragic accident had occurred by heavy rainfall',
                                    'The tragic accident is occurred during heavy rainfall'
                                ],
                                correctIndex: 0,
                                tip: 'Kata kerja intransitif "occurred" digunakan dalam bentuk aktif.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'level_3',
        levelNumber: 3,
        code: 'B1',
        title: 'Level 3: Intermediate (Menengah & TOEFL Core)',
        subtitle: 'Kalimat Pengandaian (Conditionals), Modals of Deduction, Relative Clauses, & Perbandingan.',
        color: '#f59e0b',
        badgeIcon: 'ðŸ”¥',
        units: [
            {
                id: 'l3_u1',
                unitNumber: 1,
                title: 'Unit 1: Kalimat Pengandaian (Conditionals) & Future Time Clauses',
                description: 'Kuasai First & Second Conditional, serta aturan emas Future Time Clauses (when, after, until).',
                lessons: [
                    {
                        id: 'l3_u1_s1',
                        title: 'First & Second Conditional (Real vs Pengandaian Tidak Nyata Sekarang)',
                        icon: 'ðŸŒ±',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'First Conditional Drill:\n"If the government ___ the new environmental regulation, industrial carbon emissions will drop."',
                                options: ['enforces', 'will enforce', 'enforced', 'would enforce'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Rumus First Conditional: If + Simple Present (V1/Vs), will + V1. Klausa IF TIDAK BOLEH mengandung "will"!'
                            },
                            {
                                type: 'choice',
                                prompt: 'Second Conditional Drill:\n"If I ___ the university chancellor, I would allocate more funding to scientific research."',
                                options: ['were', 'was', 'am', 'will be'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Aturan Formal Bahasa Inggris / TOEFL: Dalam Second Conditional (pengandaian bertentangan dengan kenyataan saat ini), to be untuk SEMUA subjek (I, he, she, it) adalah "WERE", bukan "was".'
                            },
                            {
                                type: 'blank',
                                prompt: 'Unless the company ___ its digital infrastructure, it will lose market share.',
                                options: ['upgrades', 'will upgrade', 'does not upgrade', 'upgraded'],
                                correctIndex: 0,
                                tip: '"Unless" berarti "If not" (kecuali jika). Klausa setelah unless menggunakan Simple Present afirmatif (upgrades), dilarang double negative!'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Jika dia punya lebih banyak waktu, dia akan belajar di luar negeri."',
                                audioText: 'If she had more time she would study abroad',
                                words: ['If', 'she', 'had', 'more', 'time', 'she', 'would', 'study', 'abroad', 'will', 'has'],
                                correctWords: ['If', 'she', 'had', 'more', 'time', 'she', 'would', 'study', 'abroad'],
                                tip: 'Second Conditional: If + Simple Past (had), would + V1 (study).'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Tipe Conditional Sentence dengan Polanya:',
                                pairs: [
                                    { en: 'Zero Conditional (Fakta Alamiah)', id: 'If + Present Simple, Present Simple' },
                                    { en: 'First Conditional (Kemungkinan Nyata)', id: 'If + Present Simple, will + V1' },
                                    { en: 'Second Conditional (Khayalan Saat Ini)', id: 'If + Past Simple (were), would + V1' },
                                    { en: 'Third Conditional (Penyesalan Masa Lalu)', id: 'If + had + V3, would have + V3' },
                                    { en: 'Unless Clause', id: 'Unless + Affirmative Present' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"If water [A: will freeze], it [B: expands] and [C: becomes] less dense than [D: liquid water]."',
                                options: [
                                    'A: will freeze (SALAH, seharusnya freezes)',
                                    'B: expands',
                                    'C: becomes',
                                    'D: liquid water'
                                ],
                                correctIndex: 0,
                                tip: 'Fakta ilmiah mutlak (Zero Conditional) menggunakan Present Simple pada kedua klausa. Klausa IF dilarang menggunakan "will freeze", harusnya "freezes".'
                            },
                            {
                                type: 'blank',
                                prompt: 'What ___ you do if you discovered an error in the published research paper?',
                                options: ['would', 'will', 'do', 'are'],
                                correctIndex: 0,
                                tip: 'Ada "if you discovered" (V2 / Past Simple), maka induk kalimat berpasangan dengan "would + V1".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat conditional berikut:',
                                audioText: 'If the laboratory secures the grant, we will hire two additional assistants',
                                options: [
                                    'If the laboratory secures the grant, we will hire two additional assistants',
                                    'If the laboratory will secure the grant, we hire two additional assistants',
                                    'If the laboratory secured the grant, we would hired two assistants',
                                    'If the laboratory secure grant, we will hire two assistants'
                                ],
                                correctIndex: 0,
                                tip: 'First conditional yang tepat: "If the laboratory secures ..., we will hire...".'
                            }
                        ]
                    },
                    {
                        id: 'l3_u1_s2',
                        title: 'Future Time Clauses (When, As Soon As, Before) Dilarang Menggunakan Will',
                        icon: 'â°',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"As soon as the principal investigator ___ from Zurich, the clinical trials will commence."',
                                options: ['returns', 'will return', 'returned', 'is returning'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Aturan Mutlak TOEFL: Pada anak kalimat penunjuk waktu masa depan (Time Clauses: When, As soon as, Before, After, Until), gunakan PRESENT TENSE ("returns"), BUKAN "will return"!'
                            },
                            {
                                type: 'blank',
                                prompt: 'We cannot finalize the contract until the legal counsel ___ the terms.',
                                options: ['reviews', 'will review', 'reviewed', 'shall review'],
                                correctIndex: 0,
                                tip: 'Klausa setelah kata hubung waktu "until" wajib menggunakan Present Simple ("reviews") meskipun mengacu pada peristiwa di masa depan.'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Saat kuliah selesai, saya akan mengirimkan email."',
                                audioText: 'When the lecture finishes I will send the email',
                                words: ['When', 'the', 'lecture', 'finishes', 'I', 'will', 'send', 'the', 'email', 'will', 'finished'],
                                correctWords: ['When', 'the', 'lecture', 'finishes', 'I', 'will', 'send', 'the', 'email'],
                                tip: 'Time clause "When the lecture finishes" memakai verb bentuk Simple Present, sementara induk kalimat memakai "will send".'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"Before the space shuttle [A: will launch] next month, [B: extensive] diagnostic checks [C: will be performed] by [D: NASA engineers]."',
                                options: [
                                    'A: will launch (SALAH, seharusnya launches)',
                                    'B: extensive',
                                    'C: will be performed',
                                    'D: NASA engineers'
                                ],
                                correctIndex: 0,
                                tip: 'Klausa waktu yang diawali "Before" dilarang memakai "will". Bentuk yang benar adalah "Before the space shuttle launches...".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Konjungsi Waktu Masa Depan dengan Contoh Tenses-nya:',
                                pairs: [
                                    { en: 'As soon as he arrives', id: 'Present Simple dalam Time Clause' },
                                    { en: 'the meeting will start', id: 'Future Simple dalam Main Clause' },
                                    { en: 'Until she finishes', id: 'Present Simple setelah Until' },
                                    { en: 'we cannot leave', id: 'Modal Present dalam Main Clause' },
                                    { en: 'By the time you read this', id: 'Present Simple setelah By the time' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'After the statistical data ___ compiled, the team will draft the executive summary.',
                                options: ['is', 'will be', 'was', 'being'],
                                correctIndex: 0,
                                tip: 'Klausa pasif dalam time clause: "After the data is compiled", dilarang memakai "will be".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "I will call you the moment I ___ at the conference venue."',
                                options: ['arrive', 'will arrive', 'arrived', 'am arriving'],
                                correctIndex: 0,
                                tip: '"The moment..." berfungsi sebagai konjungsi waktu (time conjunction), sehingga klausa berikutnya menggunakan Simple Present: "arrive".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat time clause berikut:',
                                audioText: 'When the committee completes the review, they will publish the findings',
                                options: [
                                    'When the committee completes the review, they will publish the findings',
                                    'When the committee will complete the review, they publish findings',
                                    'When the committee completed the review, they will publish findings',
                                    'When committee is completing review, they publish findings'
                                ],
                                correctIndex: 0,
                                tip: 'Struktur baku: "When the committee completes ... they will publish...".'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'l3_u2',
                unitNumber: 2,
                title: 'Unit 2: Modals of Deduction & Past Modals (Must have, Should have, Could have)',
                description: 'Menyatakan spekulasi kepastian saat ini dan penyesalan atau kesimpulan masa lalu.',
                lessons: [
                    {
                        id: 'l3_u2_s1',
                        title: 'Present Modals of Deduction (Must, Might, Can\'t be)',
                        icon: 'ðŸ”',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Analisis Kepastian:\n"The lights in Professor Adams\' office are still on, and his car is in the parking lot. He ___ working late."',
                                options: ['must be', 'can\'t be', 'should have been', 'might have'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Modal of Deduction: "Must be" digunakan saat kita 95% yakin terhadap suatu kesimpulan logis berdasarkan bukti kuat (mobil masih ada dan lampu menyala).'
                            },
                            {
                                type: 'blank',
                                prompt: 'That claim ___ true; it completely contradicts the fundamental laws of thermodynamics.',
                                options: ['cannot be', 'must be', 'might be', 'should be'],
                                correctIndex: 0,
                                tip: '"Cannot be" / "Can\'t be" digunakan saat kita yakin 95% bahwa sesuatu TIDAK MUNGKIN benar karena bertentangan dengan bukti nyata.'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Mereka mungkin sedang menunggu kita di lobi."',
                                audioText: 'They might be waiting for us in the lobby',
                                words: ['They', 'might', 'be', 'waiting', 'for', 'us', 'in', 'the', 'lobby', 'must', 'have'],
                                correctWords: ['They', 'might', 'be', 'waiting', 'for', 'us', 'in', 'the', 'lobby'],
                                tip: '"Might be + V-ing" menyatakan kemungkinan sekitar 50% yang sedang berlangsung.'
                            },
                            {
                                type: 'choice',
                                prompt: 'Manakah kalimat yang menyatakan tingkat kepastian PALING RENDAH (spekulasi tentatif)?',
                                options: [
                                    'The package might arrive tomorrow afternoon.',
                                    'The package must arrive tomorrow afternoon.',
                                    'The package will arrive tomorrow afternoon.',
                                    'The package should arrive tomorrow afternoon.'
                                ],
                                correctIndex: 0,
                                tip: '"Might" menyatakan kepastian paling lemah/tentatif (sekitar 30-40%), sedangkan "will" dan "must" menyatakan kepastian sangat tinggi.'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Modal of Deduction dengan Tingkat Kepastiannya:',
                                pairs: [
                                    { en: 'Must be', id: 'Pasti (95% yakin benar berdasarkan bukti)' },
                                    { en: 'Can\'t be / Cannot be', id: 'Tidak mungkin (95% yakin mustahil)' },
                                    { en: 'Might / May / Could be', id: 'Mungkin saja (sekitar 50% kemungkinan)' },
                                    { en: 'Should be', id: 'Seharusnya (berdasarkan jadwal/ekspektasi)' },
                                    { en: 'Will be', id: 'Pasti akan (100% fakta terjadwal)' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'She has studied French for ten years, so she ___ fluent by now.',
                                options: ['must be', 'cannot be', 'will have', 'could have'],
                                correctIndex: 0,
                                tip: 'Berdasarkan bukti belajar selama 10 tahun, kesimpulan logisnya adalah "must be fluent".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "He only left home five minutes ago; he ___ at the airport already!"',
                                options: ['can\'t be', 'must be', 'might be', 'should be'],
                                correctIndex: 0,
                                tip: 'Secara logika tidak mungkin menempuh perjalanan bandara dalam 5 menit, gunakan "can\'t be".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat berikut:',
                                audioText: 'The experimental results must be verified by an independent committee',
                                options: [
                                    'The experimental results must be verified by an independent committee',
                                    'The experimental results might be verified by independent committee',
                                    'The experiment results can be verified with independent committee',
                                    'The experiment result must verify by independent committee'
                                ],
                                correctIndex: 0,
                                tip: 'Modal pasif: "must be verified by...".'
                            }
                        ]
                    },
                    {
                        id: 'l3_u2_s2',
                        title: 'Past Modals: Should have vs Must have vs Could have',
                        icon: 'ðŸ’­',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Analisis Situasi Masa Lalu:\n"The ground is soaking wet and all the gutters are overflowing. It ___ heavily last night."',
                                options: ['must have rained', 'should have rained', 'could rain', 'would rain'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Past Deduction: "Must have + V3" digunakan untuk menyimpulkan kejadian masa lalu yang PASTI SUDAH TERJADI berdasarkan bukti fisik yang ada.'
                            },
                            {
                                type: 'blank',
                                prompt: 'You failed the exam because you didn\'t study. You ___ the textbook thoroughly.',
                                options: ['should have read', 'must have read', 'would read', 'might read'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ "Should have + V3" menyatakan penyesalan atau kritik: sesuatu yang SEHARUSNYA DILAKUKAN di masa lampau namun tidak dilakukan.'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Mereka seharusnya sudah tiba satu jam yang lalu."',
                                audioText: 'They should have arrived one hour ago',
                                words: ['They', 'should', 'have', 'arrived', 'one', 'hour', 'ago', 'must', 'were'],
                                correctWords: ['They', 'should', 'have', 'arrived', 'one', 'hour', 'ago'],
                                tip: 'Kombinasi Past Modal: should + have + V3 (arrived).'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"The burglar ___ through the window because the security iron bars were completely undisturbed."',
                                options: ['couldn\'t have entered', 'must have entered', 'should have entered', 'might enter'],
                                correctIndex: 0,
                                tip: '"Couldn\'t have + V3" digunakan ketika bukti menunjukkan suatu peristiwa lampau TIDAK MUNGKIN TERJADI (teralis jendela tidak rusak sama sekali).'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Past Modal Auxiliary dengan Maknanya:',
                                pairs: [
                                    { en: 'Must have + V3', id: 'Pasti sudah terjadi (kesimpulan logis lampau)' },
                                    { en: 'Should have + V3', id: 'Seharusnya dilakukan (namun tidak terjadi - kritik)' },
                                    { en: 'Couldn\'t have + V3', id: 'Mustahil terjadi di masa lalu' },
                                    { en: 'Might have + V3', id: 'Mungkin sudah terjadi di masa lalu' },
                                    { en: 'Could have + V3', id: 'Bisa saja terjadi (tapi kenyataannya tidak)' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'I ___ you a ride to the station if I had known your car broke down.',
                                options: ['could have given', 'must have given', 'should give', 'can give'],
                                correctIndex: 0,
                                tip: 'Pengandaian masa lalu (Third conditional): "could have given" (sebenarnya saya mampu mengantar jika tahu).'
                            },
                            {
                                type: 'choice',
                                prompt: 'Pilih kalimat yang menyatakan KRITIK atas kelalaian masa lalu:',
                                options: [
                                    'You should have informed the department before submitting the proposal.',
                                    'You must have informed the department before submitting the proposal.',
                                    'You could inform the department before submitting the proposal.',
                                    'You might inform the department before submitting the proposal.'
                                ],
                                correctIndex: 0,
                                tip: '"Should have informed" menyatakan kritik bahwa subjek tidak memberi tahu departemen padahal seharusnya demikian.'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan dialog singkat berikut:',
                                audioText: 'The team must have overlooked the typographical error in the manuscript',
                                options: [
                                    'The team must have overlooked the typographical error in the manuscript',
                                    'The team should have overlooked the typographical error in manuscript',
                                    'The team could overlook the error in the manuscript',
                                    'The team must overlook the typographical error in manuscript'
                                ],
                                correctIndex: 0,
                                tip: 'Bentuk yang terdengar: "must have overlooked" (pasti sudah terlewatkan).'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'l3_u3',
                unitNumber: 3,
                title: 'Unit 3: Relative Clauses (Adjective Clauses) & Prepositional Combinations',
                description: 'Klausa penjelas kata benda, perbedaan defining vs non-defining, dan preposisi dalam klausa.',
                lessons: [
                    {
                        id: 'l3_u3_s1',
                        title: 'Relative Pronouns: Who, Whom, Which, That, Whose & Aturan Koma',
                        icon: 'ðŸ”—',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"The marine biologist ___ research on coral reef bleaching won the international award was invited to speak."',
                                options: ['whose', 'whom', 'who', 'which'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ "Whose" digunakan untuk menyatakan kepemilikan (possession). "Whose research" = riset milik biolog kelautan tersebut.'
                            },
                            {
                                type: 'choice',
                                prompt: 'Kapan kata "THAT" DILARANG digunakan sebagai kata ganti relatif dalam standar TOEFL?',
                                options: [
                                    'Dalam Non-defining Relative Clauses (klausa yang diapit tanda koma)',
                                    'Ketika menerangkan benda mati',
                                    'Di awal kalimat tanya',
                                    'Hanya jika subjeknya jamak'
                                ],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Aturan Emas TOEFL: Kata "that" TIDAK BOLEH digunakan setelah tanda koma (Non-defining clause) atau setelah preposisi. Gunakan "which" untuk benda atau "who/whom" untuk orang.'
                            },
                            {
                                type: 'blank',
                                prompt: 'Dr. Elizabeth Blackwell, ___ was the first woman to receive a medical degree in the United States, opened her own clinic.',
                                options: ['who', 'that', 'whom', 'which'],
                                correctIndex: 0,
                                tip: 'Karena klausa diapit tanda koma (non-defining) dan menerangkan orang sebagai subjek ("the first woman"), gunakan "who", BUKAN "that".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Kandidat yang Anda wawancarai kemarin sangat berkualifikasi."',
                                audioText: 'The candidate whom you interviewed yesterday was highly qualified',
                                words: ['The', 'candidate', 'whom', 'you', 'interviewed', 'yesterday', 'was', 'highly', 'qualified', 'whose', 'which'],
                                correctWords: ['The', 'candidate', 'whom', 'you', 'interviewed', 'yesterday', 'was', 'highly', 'qualified'],
                                tip: 'Gunakan "whom" saat menerangkan orang yang berposisi sebagai objek dari kata kerja ("you interviewed [him]").'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Relative Pronoun dengan Fungsinya:',
                                pairs: [
                                    { en: 'Who', id: 'Subjek orang (The scientist who discovered...)' },
                                    { en: 'Whom', id: 'Objek orang (The person whom I met...)' },
                                    { en: 'Which', id: 'Benda / konsep (The machine which operates...)' },
                                    { en: 'Whose', id: 'Kepemilikan (The author whose book...)' },
                                    { en: 'Where', id: 'Keterangan tempat (The city where they lived...)' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"The ozone layer, [A: that] shields the planet [B: from harmful] ultraviolet rays, [C: is located] in the [D: stratosphere]."',
                                options: [
                                    'A: that (SALAH, seharusnya which)',
                                    'B: from harmful',
                                    'C: is located',
                                    'D: stratosphere'
                                ],
                                correctIndex: 0,
                                tip: 'Klausa non-defining diapit koma, sehingga kata "that" salah. Ganti dengan "which".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The architect ___ designs were selected will oversee the entire construction project.',
                                options: ['whose', 'who', 'whom', 'which'],
                                correctIndex: 0,
                                tip: '"Designs" adalah kata benda milik sang arsitek, maka gunakan kata ganti kepemilikan "whose".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat berikut dan perhatikan relative pronoun-nya:',
                                audioText: 'The professor who delivered the keynote speech received a standing ovation',
                                options: [
                                    'The professor who delivered the keynote speech received a standing ovation',
                                    'The professor whom delivered the keynote speech received a standing ovation',
                                    'The professor whose delivered the keynote speech received ovation',
                                    'The professor which delivered the keynote speech received ovation'
                                ],
                                correctIndex: 0,
                                tip: '"Who" bertindak sebagai subjek dari kata kerja "delivered".'
                            }
                        ]
                    },
                    {
                        id: 'l3_u3_s2',
                        title: 'Preposisi dalam Relative Clauses (In which, For whom, To which)',
                        icon: 'ðŸ§­',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"The laboratory ___ the breakthrough genetic experiments were conducted was recently modernized."',
                                options: ['in which', 'which', 'that', 'where in'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Preposition + Relative Pronoun: "in which" setara dengan "where" (di mana eksperimen dilakukan). Struktur formal TOEFL lebih menyukai "in which".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The executive committee to ___ the report was submitted requested additional documentation.',
                                options: ['whom', 'who', 'that', 'which'],
                                correctIndex: 0,
                                tip: 'Setelah preposisi ("to"), WAJIB menggunakan "whom" untuk orang, bukan "who" atau "that".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Ini adalah teori yang menjadi dasar penelitian kami."',
                                audioText: 'This is the theory on which our research is based',
                                words: ['This', 'is', 'the', 'theory', 'on', 'which', 'our', 'research', 'is', 'based', 'that', 'where'],
                                correctWords: ['This', 'is', 'the', 'theory', 'on', 'which', 'our', 'research', 'is', 'based'],
                                tip: 'Pola "be based on": preposisi "on" diletakkan sebelum "which" (on which our research is based).'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"The symposium [A: at that] the delegates [B: presented] their findings [C: was held] at [D: Harvard University]."',
                                options: [
                                    'A: at that (SALAH, seharusnya at which)',
                                    'B: presented',
                                    'C: was held',
                                    'D: Harvard University'
                                ],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Larangan Keras TOEFL: Kata "that" TIDAK PERNAH boleh didahului preposisi (at that, in that untuk relative clause). Bentuk yang benar adalah "at which".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Kombinasi Preposisi + Which dengan Maknanya:',
                                pairs: [
                                    { en: 'in which', id: 'di mana / di dalam mana (setara where)' },
                                    { en: 'for which', id: 'untuk mana / yang karenanya' },
                                    { en: 'on which', id: 'di atas mana / yang mendasarinya' },
                                    { en: 'by which', id: 'dengan cara mana (the method by which)' },
                                    { en: 'to which', id: 'ke mana / kepada siapa (to whom)' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'Photosynthesis is the fundamental biological process by ___ green plants convert light energy into chemical sugars.',
                                options: ['which', 'that', 'whom', 'what'],
                                correctIndex: 0,
                                tip: '"By which" bermakna "dengan perantara/cara mana tanaman mengubah energi cahaya".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "The prestigious fellowship for ___ she applied is exceptionally competitive."',
                                options: ['which', 'that', 'what', 'whose'],
                                correctIndex: 0,
                                tip: 'Preposisi "for" hanya dapat diikuti oleh "which" untuk benda/beasiswa ("for which she applied").'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat formal berikut:',
                                audioText: 'The conditions under which the deep sea organisms thrive remain mysterious',
                                options: [
                                    'The conditions under which the deep sea organisms thrive remain mysterious',
                                    'The conditions under that the deep sea organisms thrive remain mysterious',
                                    'The conditions where which deep sea organisms thrive remain mysterious',
                                    'The conditions in that deep sea organisms thrive remain mysterious'
                                ],
                                correctIndex: 0,
                                tip: 'Pola formal: "under which the deep sea organisms thrive...".'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'level_4',
        levelNumber: 4,
        code: 'B2',
        title: 'Level 4: Upper Intermediate (Mahir Awal & Pre-C1)',
        subtitle: 'Gerunds & Infinitives, Causative Verbs, Parallel Structure, & Reduced Clauses.',
        color: '#8b5cf6',
        badgeIcon: 'ðŸ’Ž',
        units: [
            {
                id: 'l4_u1',
                unitNumber: 1,
                title: 'Unit 1: Gerunds, Infinitives & Causative Verbs',
                description: 'Kata kerja yang diikuti V-ing vs To-V1, serta konstruksi Causative (Make, Have, Let, Get).',
                lessons: [
                    {
                        id: 'l4_u1_s1',
                        title: 'Gerunds (-ing) vs Infinitives (to + V1) & Pola Preposisi',
                        icon: 'ðŸŽ¯',
                        xp: 35,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"The chief financial officer avoided ___ specific projections until the audit was completed."',
                                options: ['making', 'to make', 'make', 'to making'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Gerund Rule: Kata kerja seperti avoid, consider, delay, deny, enjoy, postpone, recommend, suggest WAJIB diikuti Gerund (V-ing): "avoided making".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Pola Preposisi + Gerund:\n"The researchers are looking forward to ___ their collaborative clinical trials next month."',
                                options: ['launching', 'launch', 'to launch', 'launched'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Jebakan Emas TOEFL: Kata "to" dalam "look forward to", "object to", "be used to", "in addition to" adalah PREPOSISI, bukan bagian dari to-infinitive. Oleh karena itu wajib diikuti GERUND: "looking forward to launching".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The board of directors refused ___ the controversial corporate restructuring proposal.',
                                options: ['to approve', 'approving', 'approve', 'to approving'],
                                correctIndex: 0,
                                tip: 'Kata kerja "refuse", "decide", "hope", "manage", "promise" selalu diikuti to-infinitive: "refused to approve".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Dia terbiasa bekerja di bawah tekanan tinggi."',
                                audioText: 'She is accustomed to working under intense pressure',
                                words: ['She', 'is', 'accustomed', 'to', 'working', 'under', 'intense', 'pressure', 'work', 'works'],
                                correctWords: ['She', 'is', 'accustomed', 'to', 'working', 'under', 'intense', 'pressure'],
                                tip: '"Be accustomed to" adalah frasa preposisional yang diikuti gerund: "working".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Kelompokkan Kata Kerja Pengikut Gerund vs Infinitive:',
                                pairs: [
                                    { en: 'Avoid / Consider / Postpone', id: 'Wajib diikuti Gerund (V-ing)' },
                                    { en: 'Decide / Promise / Manage', id: 'Wajib diikuti Infinitive (to + V1)' },
                                    { en: 'Look forward to / Object to', id: 'Prepositional "to" + Gerund (V-ing)' },
                                    { en: 'Stop smoking', id: 'Berhenti dari kebiasaan merokok' },
                                    { en: 'Stop to smoke', id: 'Berhenti sejenak untuk merokok' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"The university [A: committee] is considering [B: to postpone] the [C: annual symposium] due to [D: budget cuts]."',
                                options: [
                                    'A: committee',
                                    'B: to postpone (SALAH, seharusnya postponing)',
                                    'C: annual symposium',
                                    'D: budget cuts'
                                ],
                                correctIndex: 1,
                                tip: 'Kata kerja "consider" wajib diikuti gerund ("postponing"), bukan to-infinitive ("to postpone").'
                            },
                            {
                                type: 'blank',
                                prompt: 'Despite the adverse weather conditions, the pilot succeeded in ___ the aircraft safely.',
                                options: ['landing', 'land', 'to land', 'to landing'],
                                correctIndex: 0,
                                tip: 'Setelah preposisi "in", kata kerja wajib berbentuk gerund: "succeeded in landing".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat berikut dan perhatikan bentuk kata kerjanya:',
                                audioText: 'They strongly suggested revising the financial statement before the meeting',
                                options: [
                                    'They strongly suggested revising the financial statement before the meeting',
                                    'They strongly suggested to revise the financial statement before meeting',
                                    'They strongly suggest revised financial statement before the meeting',
                                    'They strongly suggesting to revise the financial statement before meeting'
                                ],
                                correctIndex: 0,
                                tip: '"Suggest" diikuti oleh bentuk gerund ("revising").'
                            }
                        ]
                    },
                    {
                        id: 'l4_u1_s2',
                        title: 'Causative Verbs: Make, Have, Let, Get (Pola Aktif vs Pasif)',
                        icon: 'âš¡',
                        xp: 35,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Causative Aktif Drill:\n"The professor made every student ___ the entire research methodology chapter."',
                                options: ['rewrite', 'to rewrite', 'rewriting', 'rewritten'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Causative "MAKE": Make + someone + BARE INFINITIVE (kata kerja dasar tanpa to). Rumus: make someone DO something ("made every student rewrite").'
                            },
                            {
                                type: 'blank',
                                prompt: 'The marketing director had the graphic designer ___ three alternative campaign logos.',
                                options: ['create', 'to create', 'creating', 'created'],
                                correctIndex: 0,
                                tip: 'Causative "HAVE" Aktif: Have + someone + BARE INFINITIVE (V1). Jadi: "had the designer create".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Bandingkan dengan Causative "GET":\n"The manager finally got the technicians ___ overtime to meet the release deadline."',
                                options: ['to work', 'work', 'working', 'worked'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Jebakan Khas TOEFL: Berbeda dengan make dan have, causative "GET" versi aktif MEMERLUKAN "TO": Get + someone + TO DO something ("got the technicians to work").'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat causative pasif: "Kami meminta mobil itu diperbaiki kemarin."',
                                audioText: 'We had the car repaired yesterday',
                                words: ['We', 'had', 'the', 'car', 'repaired', 'yesterday', 'repair', 'to'],
                                correctWords: ['We', 'had', 'the', 'car', 'repaired', 'yesterday'],
                                tip: 'Causative Pasif: Have/Get + something + V3 (past participle): "had the car repaired".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Pola Causative Verb:',
                                pairs: [
                                    { en: 'Make someone', id: 'Bare Infinitive V1 (tanpa to)' },
                                    { en: 'Have someone', id: 'Bare Infinitive V1 (tanpa to)' },
                                    { en: 'Get someone', id: 'To + Infinitive (wajib pakai to)' },
                                    { en: 'Let someone', id: 'Bare Infinitive V1 (mengizinkan)' },
                                    { en: 'Have / Get something', id: 'Past Participle V3 (bentuk pasif)' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"The supervisor [A: had] the maintenance crew [B: to inspect] the industrial boiler [C: before] resuming [D: operations]."',
                                options: [
                                    'A: had',
                                    'B: to inspect (SALAH, seharusnya inspect)',
                                    'C: before',
                                    'D: operations'
                                ],
                                correctIndex: 1,
                                tip: 'Causative "had" diikuti bare infinitive tanpa to. Ganti "to inspect" menjadi "inspect".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The architect got the blueprints ___ by the municipal zoning authority.',
                                options: ['approved', 'approve', 'to approve', 'approving'],
                                correctIndex: 0,
                                tip: 'Causative pasif: "got the blueprints + V3 (approved)".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat causative berikut:',
                                audioText: 'The teacher let the students leave the classroom five minutes early',
                                options: [
                                    'The teacher let the students leave the classroom five minutes early',
                                    'The teacher let the students to leave the classroom five minutes early',
                                    'The teacher made the students leaving the classroom five minutes early',
                                    'The teacher had the students to leave classroom early'
                                ],
                                correctIndex: 0,
                                tip: '"Let" diikuti bare infinitive: "let the students leave".'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'l4_u2',
                unitNumber: 2,
                title: 'Unit 2: Parallel Structure & Reduced Adjective Clauses (TOEFL Written Expression)',
                description: 'Kesejajaran kata/frasa pada konjungsi koordinatif dan pemendekan klausa (Participle Phrases).',
                lessons: [
                    {
                        id: 'l4_u2_s1',
                        title: 'Parallel Structure (Kesejajaran Bentuk Kata dalam TOEFL)',
                        icon: 'ðŸ“',
                        xp: 35,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Drill:\n"The university curriculum is designed to foster critical thinking, encourage collaboration, and ___ students for leadership roles."',
                                options: ['prepare', 'preparing', 'to prepare', 'preparation'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Parallel Structure: Pola kata kerja harus sejajar setelah "to": foster (V1), encourage (V1), and prepare (V1).'
                            },
                            {
                                type: 'choice',
                                prompt: 'Identifikasi kesalahan kesejajaran (Parallelism Error):\n"The applicant was praised for her exceptional intelligence, remarkable diligence, and [A: she works hard]."',
                                options: [
                                    'A: she works hard (SALAH, seharusnya strong work ethic / diligence)',
                                    'exceptional intelligence',
                                    'remarkable diligence',
                                    'was praised'
                                ],
                                correctIndex: 0,
                                tip: 'Dua elemen pertama adalah frasa kata benda (adjective + noun), sehingga elemen ketiga juga wajib berbentuk frasa kata benda, bukan klausa subjek-verb.'
                            },
                            {
                                type: 'blank',
                                prompt: 'The new software is not only intuitive to navigate but also ___ to integrate with existing databases.',
                                options: ['easy', 'easily', 'easiness', 'with ease'],
                                correctIndex: 0,
                                tip: 'Pada "not only [adjective] but also [adjective]": "intuitive" (adjective) sejajar dengan "easy" (adjective).'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat sejajar: "Dia suka berenang, berlari, dan bersepeda."',
                                audioText: 'She enjoys swimming running and cycling',
                                words: ['She', 'enjoys', 'swimming', 'running', 'and', 'cycling', 'to', 'cycle', 'runs'],
                                correctWords: ['She', 'enjoys', 'swimming', 'running', 'and', 'cycling'],
                                tip: 'Ketiga kata kerja sejajar dalam bentuk gerund: swimming, running, and cycling.'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Pasangan Konjungsi dengan Aturan Kesejajarannya:',
                                pairs: [
                                    { en: 'both ... and ...', id: 'Bentuk kata sebelum & sesudah wajib setara' },
                                    { en: 'either ... or ...', id: 'Noun sejajar Noun, Adjective sejajar Adjective' },
                                    { en: 'neither ... nor ...', id: 'Verb sejajar Verb, Phrase sejajar Phrase' },
                                    { en: 'not only ... but also ...', id: 'Struktur gramatikal wajib simetris' },
                                    { en: 'more than / as ... as ...', id: 'Komparasi membandingkan dua elemen sejenis' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"Industrial robotics [A: has revolutionized] manufacturing [B: by increasing] productivity, [C: reducing] errors, and [D: to lower] operating costs."',
                                options: [
                                    'A: has revolutionized',
                                    'B: by increasing',
                                    'C: reducing',
                                    'D: to lower (SALAH, seharusnya lowering)'
                                ],
                                correctIndex: 3,
                                tip: 'Rangkaian gerund setelah preposisi by: increasing, reducing, and lowering (bukan to lower).'
                            },
                            {
                                type: 'blank',
                                prompt: 'To achieve success in diplomacy requires patience, tact, and ___ understanding.',
                                options: ['cultural', 'culturally', 'culture', 'culturing'],
                                correctIndex: 0,
                                tip: '"Cultural" adalah adjective yang menerangkan kata benda "understanding", membentuk frasa benda yang sejajar dengan patience dan tact.'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat parallel structure berikut:',
                                audioText: 'The program aims to educate inspire and empower underprivileged youth',
                                options: [
                                    'The program aims to educate inspire and empower underprivileged youth',
                                    'The program aims educating inspiring and to empower underprivileged youth',
                                    'The program aims to educate inspiration and empower youth',
                                    'The program aimed educating inspiring and empowering youth'
                                ],
                                correctIndex: 0,
                                tip: 'Ketiga kata kerja sejajar: "educate, inspire, and empower".'
                            }
                        ]
                    },
                    {
                        id: 'l4_u2_s2',
                        title: 'Reduced Adjective Clauses (Participle Phrases: V-ing vs V3)',
                        icon: 'âœ‚ï¸',
                        xp: 35,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"___ in 1776, the United States Declaration of Independence articulated the fundamental philosophy of human liberty."',
                                options: ['Adopted', 'Adopting', 'It was adopted', 'Having adopt'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Reduced Passive Clause: Deklarasi kemerdekaan "diadopsi/disahkan" (makna pasif), berasal dari "Which was adopted in 1776". Bentuk reduksinya menggunakan Past Participle (V3): "Adopted".'
                            },
                            {
                                type: 'blank',
                                prompt: 'The delegates ___ at the conference represented forty different sovereign nations.',
                                options: ['arriving', 'arrived', 'were arrived', 'have arrived'],
                                correctIndex: 0,
                                tip: 'Reduced Active Clause: Para delegasi yang "tiba" (makna aktif), berasal dari "who arrived / who were arriving". Gunakan Present Participle (-ing): "arriving".'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Dangling Participle Error:\n"Walking through the dense pine forest, ___."',
                                options: [
                                    'the researchers noticed several rare bird species.',
                                    'several rare bird species were noticed by the researchers.',
                                    'a sudden thunderous storm terrified the trees.',
                                    'the path was completely covered with fallen needles.'
                                ],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Dangling Modifier Trap di TOEFL: Pelaku dari "Walking through the forest" haruslah subjek yang muncul tepat setelah tanda koma. Hanya "the researchers" yang bisa berjalan, bukan "bird species" atau "the path".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat reduksi: "Buku yang diterbitkan tahun lalu menjadi buku terlaris."',
                                audioText: 'The book published last year became a bestseller',
                                words: ['The', 'book', 'published', 'last', 'year', 'became', 'a', 'bestseller', 'was', 'publishing'],
                                correctWords: ['The', 'book', 'published', 'last', 'year', 'became', 'a', 'bestseller'],
                                tip: '"Published last year" adalah pemendekan dari "which was published last year".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Klausa Lengkap dengan Bentuk Reduksinya:',
                                pairs: [
                                    { en: 'The students who are studying', id: 'The students studying (Active -ing)' },
                                    { en: 'The bridge which was built', id: 'The bridge built (Passive V3)' },
                                    { en: 'After he completed his degree', id: 'Having completed his degree' },
                                    { en: 'Because she was exhausted', id: 'Exhausted from work, she slept' },
                                    { en: 'The laws that govern physics', id: 'The laws governing physics' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'The ancient pottery fragments ___ during the excavation date back to 3000 BCE.',
                                options: ['unearthed', 'unearthing', 'were unearthed', 'which unearthed'],
                                correctIndex: 0,
                                tip: 'Pecahan tembikar "ditemukan/digali" (pasif), reduksinya adalah past participle: "unearthed".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "___ by critics worldwide, the novel won the prestigious literary award."',
                                options: ['Praised', 'Praising', 'To praise', 'It was praised'],
                                correctIndex: 0,
                                tip: 'Novel tersebut "dipuji" oleh kritikus (makna pasif): "Praised by critics worldwide...".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat participial phrase berikut:',
                                audioText: 'Having analyzed the raw data, the astrophysicist formulated a new hypothesis',
                                options: [
                                    'Having analyzed the raw data, the astrophysicist formulated a new hypothesis',
                                    'Have analyzed the raw data, the astrophysicist formulated a new hypothesis',
                                    'Having analyze raw data, astrophysicist formulate new hypothesis',
                                    'Analyzed the raw data, the astrophysicist formulate a new hypothesis'
                                ],
                                correctIndex: 0,
                                tip: 'Perfect participle aktif: "Having analyzed the raw data...".'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'l4_u3',
                unitNumber: 3,
                title: 'Unit 3: Professional Business Communication & Phrasal Verbs',
                description: 'Bahasa Inggris bisnis tingkat tinggi, phrasal verbs esensial dunia kerja, dan diplomasi komunikasi.',
                lessons: [
                    {
                        id: 'l4_u3_s1',
                        title: 'High-Frequency Business & Academic Phrasal Verbs',
                        icon: 'ðŸ’¼',
                        xp: 35,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Business Register Drill:\n"Due to severe logistical bottlenecks, the board decided to ___ the international product launch until next quarter."',
                                options: ['put off', 'call off', 'bring up', 'carry out'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ "Put off" berarti menunda (postpone), sedangkan "Call off" berarti membatalkan permanen (cancel).'
                            },
                            {
                                type: 'blank',
                                prompt: 'The research laboratory will ___ extensive clinical trials to determine the vaccine\'s efficacy.',
                                options: ['carry out', 'bring about', 'take over', 'break down'],
                                correctIndex: 0,
                                tip: '"Carry out" adalah phrasal verb yang sangat sering muncul di TOEFL/akademik yang berarti melaksanakan/menjalankan (conduct/execute).'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Perusahaan harus membatalkan merger karena kendala regulasi."',
                                audioText: 'The firm had to call off the merger',
                                words: ['The', 'firm', 'had', 'to', 'call', 'off', 'the', 'merger', 'put', 'up'],
                                correctWords: ['The', 'firm', 'had', 'to', 'call', 'off', 'the', 'merger'],
                                tip: '"Call off" = membatalkan (cancel).'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Phrasal Verbs dengan Kata Pengganti Formal Akademisnya:',
                                pairs: [
                                    { en: 'Carry out', id: 'Conduct / Execute (Melaksanakan)' },
                                    { en: 'Account for', id: 'Explain / Constitute (Menjelaskan / Menyumbang)' },
                                    { en: 'Bring about', id: 'Cause / Induce (Menyebabkan / Memicu)' },
                                    { en: 'Rule out', id: 'Exclude / Eliminate (Mengesampingkan)' },
                                    { en: 'Look into', id: 'Investigate / Examine (Menyelidiki)' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'Pilih phrasal verb yang bermakna "menyumbang / menjelaskan proporsi":\n"Renewable sources ___ thirty percent of the national power supply."',
                                options: ['account for', 'look into', 'put up with', 'come across'],
                                correctIndex: 0,
                                tip: '"Account for" berarti menyumbang sebagian jumlah atau menjelaskan porsi (constitute).'
                            },
                            {
                                type: 'blank',
                                prompt: 'The committee was established to ___ allegations of academic misconduct.',
                                options: ['look into', 'bring up', 'turn down', 'take after'],
                                correctIndex: 0,
                                tip: '"Look into" berarti menginvestigasi secara mendalam (investigate).'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "Scientists have not yet ___ the possibility of extraterrestrial microbial life."',
                                options: ['ruled out', 'called off', 'brought down', 'carried off'],
                                correctIndex: 0,
                                tip: '"Rule out" bermakna mencoret atau mengesampingkan suatu kemungkinan.'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat berikut:',
                                audioText: 'The sudden surge in demand brought about unexpected manufacturing delays',
                                options: [
                                    'The sudden surge in demand brought about unexpected manufacturing delays',
                                    'The sudden surge in demand carried out unexpected manufacturing delays',
                                    'The sudden surge in demand put off unexpected manufacturing delays',
                                    'The sudden surge in demand ruled out manufacturing delays'
                                ],
                                correctIndex: 0,
                                tip: '"Brought about" bermakna mengakibatkan / memicu (caused).'
                            }
                        ]
                    },
                    {
                        id: 'l4_u3_s2',
                        title: 'Korespondensi Formal & Bahasa Negosiasi Diplomatik',
                        icon: 'âœ‰ï¸',
                        xp: 35,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Email Bisnis Formal:\nDalam korespondensi formal, kalimat pembuka mana yang paling tepat untuk melampirkan berkas kontrak?',
                                options: [
                                    'Please find attached the revised partnership agreement for your perusal.',
                                    'Here is the contract file download it now.',
                                    'I send the agreement check your email.',
                                    'Look at the attached stuff right away.'
                                ],
                                correctIndex: 0,
                                tip: '"Please find attached ... for your perusal/review" adalah register standar korespondensi korporat internasional.'
                            },
                            {
                                type: 'blank',
                                prompt: 'In business negotiations, softening a disagreement politely is known as ___.',
                                options: ['hedging', 'inverting', 'participle', 'nominalizing'],
                                correctIndex: 0,
                                tip: '"Hedging" adalah penggunaan bahasa berhati-hati dan diplomatik (contoh: "It would seem that...", "I see your point, but...").'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat diplomatik: "Saya memahami pandangan Anda namun kita perlu mempertimbangkan anggaran."',
                                audioText: 'I see your point but we need to consider the budget',
                                words: ['I', 'see', 'your', 'point', 'but', 'we', 'need', 'to', 'consider', 'the', 'budget', 'reject', 'money'],
                                correctWords: ['I', 'see', 'your', 'point', 'but', 'we', 'need', 'to', 'consider', 'the', 'budget'],
                                tip: 'Diplomatic phrasing: "I see your point, but we need to consider...".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Manakah ungkapan yang paling santun dan profesional untuk menolak proposal rekan bisnis?',
                                options: [
                                    'While we appreciate your thorough proposal, we are unable to proceed at this juncture.',
                                    'Your proposal is bad and we definitely will not accept it.',
                                    'We don\'t want to do this project with you because of high price.',
                                    'Cancel this offer immediately and never send again.'
                                ],
                                correctIndex: 0,
                                tip: 'Kalimat pertama menggunakan register diplomatik kelas tinggi: "While we appreciate ..., we are unable to proceed at this juncture".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Frasa Informal dengan Padanan Korespondensi Formalnya:',
                                pairs: [
                                    { en: 'I want to tell you', id: 'I am writing to inform you' },
                                    { en: 'Sorry for the delay', id: 'We apologize for any inconvenience caused' },
                                    { en: 'Give me your answer', id: 'We would appreciate your prompt response' },
                                    { en: 'Call me if you need help', id: 'Should you have any inquiries, please contact us' },
                                    { en: 'Let\'s talk about it later', id: 'We can discuss this further in our upcoming meeting' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'With ___ to your inquiry dated October 12, we are pleased to confirm your reservation.',
                                options: ['reference', 'refers', 'referring', 'referential'],
                                correctIndex: 0,
                                tip: '"With reference to..." adalah frasa formal pembuka surat/email bisnis.'
                            },
                            {
                                type: 'choice',
                                prompt: 'Pilih penutup surat formal ketika nama penerima tidak diketahui (Dear Sir/Madam):',
                                options: ['Yours faithfully,', 'Yours sincerely,', 'Best cheers,', 'Catch you later,'],
                                correctIndex: 0,
                                tip: 'Aturan etiket surat formal: Jika dibuka "Dear Sir/Madam", tutup dengan "Yours faithfully". Jika dibuka dengan nama (Dear Mr. Smith), tutup dengan "Yours sincerely".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat diplomatik rapat dewan direksi berikut:',
                                audioText: 'Could we perhaps explore alternative avenues before making a final commitment?',
                                options: [
                                    'Could we perhaps explore alternative avenues before making a final commitment?',
                                    'Should we explore alternative avenues before making final commitment?',
                                    'Could we explore alternative avenue before make commitment?',
                                    'Can we perhaps explore the alternative avenues before making commit?'
                                ],
                                correctIndex: 0,
                                tip: '"Could we perhaps explore..." adalah ungkapan hedging sangat santun dalam forum negosiasi.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'level_5',
        levelNumber: 5,
        code: 'C1',
        title: 'Level 5: Advanced (Jago & TOEFL/IELTS Mastery)',
        subtitle: 'Inversi Kalimat Formal, Subjunctive Mood, Complex Reduction, & Academic Collocations.',
        color: '#ef4444',
        badgeIcon: 'ðŸ‘‘',
        units: [
            {
                id: 'l5_u1',
                unitNumber: 1,
                title: 'Unit 1: Negative Inversion & Inverted Conditionals (Struktur Tingkat Tertinggi TOEFL)',
                description: 'Pola pembalikan subjek-kata bantu setelah kata keterangan negatif dan pengandaian formal tanpa IF.',
                lessons: [
                    {
                        id: 'l5_u1_s1',
                        title: 'Inversi Kalimat Negatif (Not only, Seldom, Rarely, Under no circumstances)',
                        icon: 'ðŸ›ï¸',
                        xp: 40,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"Rarely ___ such a monumental discovery in theoretical physics throughout the twentieth century."',
                                options: [
                                    'has the scientific community witnessed',
                                    'the scientific community has witnessed',
                                    'witnessed the scientific community',
                                    'the scientific community witnessed'
                                ],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Inversion Rule: Ketika kalimat diawali adverbia negatif/restriktif (Rarely, Seldom, Barely, Scarcely, Never), kalimat WAJIB DIINVERSI: Auxiliary verb mendahului subjek ("has the scientific community witnessed").'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi dengan pola inversi yang tepat:\n"Under no circumstances ___ the safety valves without authorization."',
                                options: [
                                    'should personnel tamper with',
                                    'personnel should tamper with',
                                    'personnel tamper should with',
                                    'personnel tampering with'
                                ],
                                correctIndex: 0,
                                tip: '"Under no circumstances" adalah ungkapan restriktif mutlak. Auxiliary "should" wajib mendahului subjek "personnel".'
                            },
                            {
                                type: 'blank',
                                prompt: 'Not only ___ the quantum algorithm solve the equation, but it also optimized the entire neural network.',
                                options: ['did', 'was', 'does', 'has'],
                                correctIndex: 0,
                                tip: 'Inversi past tense: Not only + did + subject + V1 ("did the quantum algorithm solve").'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat inversi: "Jarang sekali kami melihat fenomena alam semacam ini."',
                                audioText: 'Seldom have we observed such a natural phenomenon',
                                words: ['Seldom', 'have', 'we', 'observed', 'such', 'a', 'natural', 'phenomenon', 'we', 'did'],
                                correctWords: ['Seldom', 'have', 'we', 'observed', 'such', 'a', 'natural', 'phenomenon'],
                                tip: 'Pola inversi: Seldom + have + we + V3 (observed).'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Pembuka Inversi Negatif dengan Makna TOEFL-nya:',
                                pairs: [
                                    { en: 'Hardly ... when ...', id: 'Baru saja ... langsung ... (kejadian cepat)' },
                                    { en: 'No sooner ... than ...', id: 'Tidak lama setelah ... seketika ...' },
                                    { en: 'Not until 1920 did ...', id: 'Baru pada tahun 1920-lah (inversi di main clause)' },
                                    { en: 'Under no circumstances', id: 'Sama sekali tidak boleh dalam kondisi apa pun' },
                                    { en: 'Only after the trial did', id: 'Hanya setelah pengujianlah (inversi)' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"Not only [A: the telescope revealed] unprecedented details of the nebulae, [B: but it also] provided [C: compelling evidence] for [D: cosmic inflation]."',
                                options: [
                                    'A: the telescope revealed (SALAH, seharusnya did the telescope reveal)',
                                    'B: but it also',
                                    'C: compelling evidence',
                                    'D: cosmic inflation'
                                ],
                                correctIndex: 0,
                                tip: 'Kalimat diawali "Not only" wajib mengalami inversi: "did the telescope reveal".'
                            },
                            {
                                type: 'blank',
                                prompt: 'Hardly ___ the laboratory door when the fire suppression alarm sounded.',
                                options: ['had they unlocked', 'they had unlocked', 'did they unlocked', 'have they unlocked'],
                                correctIndex: 0,
                                tip: 'Pola Past Perfect Inversion: "Hardly had + Subject + V3 ... when ...".'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat inversi tingkat tinggi berikut:',
                                audioText: 'Only after thorough clinical evaluations did the regulatory agency grant approval',
                                options: [
                                    'Only after thorough clinical evaluations did the regulatory agency grant approval',
                                    'Only after thorough clinical evaluations the regulatory agency granted approval',
                                    'Only after thorough clinical evaluations was the agency grant approval',
                                    'Only after clinical evaluation did agency granted approval'
                                ],
                                correctIndex: 0,
                                tip: '"Only after..." memicu inversi pada klausa utama: "did the regulatory agency grant approval".'
                            }
                        ]
                    },
                    {
                        id: 'l5_u1_s2',
                        title: 'Inversi Kalimat Pengandaian Tanpa "If" (Had, Were, Should)',
                        icon: 'ðŸŒªï¸',
                        xp: 40,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Inverted Third Conditional Drill:\n"___ the warning signs of market volatility, the hedge fund would have liquidated its speculative assets."',
                                options: [
                                    'Had the investment analysts recognized',
                                    'If had the investment analysts recognized',
                                    'The investment analysts had recognized',
                                    'Were the investment analysts recognizing'
                                ],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Conditional Inversion: Kata "If" dihilangkan dengan membalik auxiliary ke depan subjek: "Had the analysts recognized..." setara dengan "If the analysts had recognized...".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Inverted Second Conditional Drill:\n"___ to decline the nomination, the committee would be forced to reopen the selection process."',
                                options: [
                                    'Were the candidate',
                                    'If were the candidate',
                                    'Had the candidate',
                                    'Should the candidate be'
                                ],
                                correctIndex: 0,
                                tip: 'Pola inversi Second Conditional: "Were + Subject + to V1..." menggantikan "If + Subject + were to V1...".'
                            },
                            {
                                type: 'blank',
                                prompt: '___ you require further clarification regarding the experimental methodology, please do not hesitate to contact our department.',
                                options: ['Should', 'Had', 'Were', 'If should'],
                                correctIndex: 0,
                                tip: 'Inversi First Conditional / Formal polite request: "Should you require..." setara dengan "If you require...". Sangat umum dalam surat bisnis dan TOEFL.'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat inversi: "Seandainya saya tahu faktanya, saya pasti sudah bertindak."',
                                audioText: 'Had I known the facts I would have acted',
                                words: ['Had', 'I', 'known', 'the', 'facts', 'I', 'would', 'have', 'acted', 'If', 'did'],
                                correctWords: ['Had', 'I', 'known', 'the', 'facts', 'I', 'would', 'have', 'acted'],
                                tip: '"Had I known..." menggantikan "If I had known...".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Kalimat Biasa dengan Bentuk Inversinya:',
                                pairs: [
                                    { en: 'If I had known', id: 'Had I known' },
                                    { en: 'If he were the director', id: 'Were he the director' },
                                    { en: 'If you should need assistance', id: 'Should you need assistance' },
                                    { en: 'If it had not been for the rain', id: 'Had it not been for the rain' },
                                    { en: 'If they were to accept', id: 'Were they to accept' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"[A: Had it not been] for the [B: timely intervention] of the paramedics, the victim [C: would not survive] [D: the trauma]."',
                                options: [
                                    'A: Had it not been',
                                    'B: timely intervention',
                                    'C: would not survive (SALAH, seharusnya would not have survived)',
                                    'D: the trauma'
                                ],
                                correctIndex: 2,
                                tip: 'Klausa pembuka adalah inversi Third Conditional ("Had it not been"), maka induk kalimat wajib berpasangan dengan "would not have survived" (bukan would not survive).'
                            },
                            {
                                type: 'blank',
                                prompt: '___ he to publish the preliminary data prematurely, his scientific credibility would be permanently jeopardized.',
                                options: ['Were', 'Had', 'Did', 'Should'],
                                correctIndex: 0,
                                tip: '"Were he to publish..." adalah inversi Second Conditional yang tepat.'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat formal berikut:',
                                audioText: 'Had the treaty been ratified earlier, diplomatic relations would have been restored',
                                options: [
                                    'Had the treaty been ratified earlier, diplomatic relations would have been restored',
                                    'If the treaty had ratified earlier, relations would have restored',
                                    'Were the treaty been ratified earlier, relations would restore',
                                    'Should the treaty had been ratified, relations would restore'
                                ],
                                correctIndex: 0,
                                tip: '"Had the treaty been ratified earlier..." adalah bentuk pasif Third Conditional Inversion.'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'l5_u2',
                unitNumber: 2,
                title: 'Unit 2: Subjunctive Mood & Hypothetical Expressions',
                description: 'Bentuk kata kerja dasar (Bare Infinitive) setelah kata kerja mandatif/rekomendasi, dan pengandaian harapan.',
                lessons: [
                    {
                        id: 'l5_u2_s1',
                        title: 'Present Subjunctive (Mandative Clauses: Recommend, Insist, Demand that + Bare Infinitive)',
                        icon: 'ðŸ“œ',
                        xp: 40,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"The university ethics committee mandated that every laboratory assistant ___ a comprehensive background check before handling biohazardous material."',
                                options: ['undergo', 'undergoes', 'underwent', 'would undergo'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Present Subjunctive Rule: Setelah kata kerja mandatif (demand, insist, mandate, order, recommend, request, suggest, urge) + that + subject, kata kerja WAJIB BARE INFINITIVE (bentuk dasar tanpa -s, tanpa to, tanpa tense)! Jadi "undergo", bukan "undergoes".'
                            },
                            {
                                type: 'blank',
                                prompt: 'It is imperative that the emergency protocol ___ initiated without hesitation.',
                                options: ['be', 'is', 'was', 'to be'],
                                correctIndex: 0,
                                tip: 'Subjunctive pasif menggunakan bentuk dasar "BE" (bukan is/was): "that the protocol be initiated".'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"The attending physician [A: recommended] that the patient [B: remains] under [C: continuous observation] for [D: forty-eight hours]."',
                                options: [
                                    'A: recommended',
                                    'B: remains (SALAH, seharusnya remain)',
                                    'C: continuous observation',
                                    'D: forty-eight hours'
                                ],
                                correctIndex: 1,
                                tip: 'ðŸ’¡ Soal Otentik TOEFL: Setelah "recommended that + subject", kata kerja harus berbentuk dasar (bare infinitive). "Remains" salah; bentuk yang benar adalah "remain".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat subjunctive: "Hakim menuntut agar terdakwa hadir."',
                                audioText: 'The judge demanded that the defendant be present',
                                words: ['The', 'judge', 'demanded', 'that', 'the', 'defendant', 'be', 'present', 'is', 'was'],
                                correctWords: ['The', 'judge', 'demanded', 'that', 'the', 'defendant', 'be', 'present'],
                                tip: 'Subjunctive to be: gunakan "be" untuk semua subjek.'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Pemicu Subjunctive Mood TOEFL:',
                                pairs: [
                                    { en: 'It is essential that', id: 'Subject + Bare Infinitive V1 (tanpa -s)' },
                                    { en: 'The board recommended that he', id: 'resign (bukan resigns)' },
                                    { en: 'We insist that the room', id: 'be kept sterile (bukan is kept)' },
                                    { en: 'It is crucial that she', id: 'not leave the room (negasi: not + V1)' },
                                    { en: 'They proposed that a vote', id: 'be taken immediately' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'The government ordered that the industrial plant ___ all toxic emissions immediately.',
                                options: ['cease', 'ceases', 'ceased', 'ceasing'],
                                correctIndex: 0,
                                tip: 'Mandative verb "ordered that" mewajibkan bare infinitive: "cease".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Bagaimanakah bentuk NEGATIF dari present subjunctive?',
                                options: [
                                    'It is vital that she not disclose the proprietary algorithm.',
                                    'It is vital that she does not disclose the proprietary algorithm.',
                                    'It is vital that she did not disclose the proprietary algorithm.',
                                    'It is vital that she not to disclose the proprietary algorithm.'
                                ],
                                correctIndex: 0,
                                tip: 'Negasi subjunctive dibentuk hanya dengan menambahkan "NOT" sebelum kata kerja dasar: "that she not disclose" (TIDAK memakai does not / did not).'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat subjunctive berikut:',
                                audioText: 'The dean suggested that the curriculum be revised to incorporate artificial intelligence',
                                options: [
                                    'The dean suggested that the curriculum be revised to incorporate artificial intelligence',
                                    'The dean suggested that the curriculum is revised to incorporate artificial intelligence',
                                    'The dean suggested that curriculum was revised to incorporate intelligence',
                                    'The dean suggested that curriculum be revise to incorporate AI'
                                ],
                                correctIndex: 0,
                                tip: '"suggested that the curriculum be revised...".'
                            }
                        ]
                    },
                    {
                        id: 'l5_u2_s2',
                        title: 'Hypothetical Subjunctive (Wish, As If, Would Rather)',
                        icon: 'ðŸŒŒ',
                        xp: 40,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Wish Clause Drill:\n"Many environmentalists wish that world leaders ___ more decisive action on climate change at the summit last week."',
                                options: ['had taken', 'took', 'take', 'would take'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ Past Wish: Ketika mengharapkan sesuatu yang BERBEDA dari apa yang sebenarnya terjadi di masa lampau ("last week"), gunakan Past Perfect: "had taken".'
                            },
                            {
                                type: 'blank',
                                prompt: 'He speaks about the archaeological excavation as if he ___ personally present at the site.',
                                options: ['had been', 'is', 'has been', 'was being'],
                                correctIndex: 0,
                                tip: '"As if / As though" yang bertentangan dengan fakta masa lalu menggunakan Past Perfect: "had been".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Present Wish:\n"I wish the laboratory equipment ___ more reliable for our quantum experiments."',
                                options: ['were', 'was', 'is', 'will be'],
                                correctIndex: 0,
                                tip: 'Dalam formal English / TOEFL, to be dalam wish clause untuk menyatakan pengandaian saat ini selalu "WERE".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Saya lebih suka jika Anda tidak mendiskusikan hal ini sekarang."',
                                audioText: 'I would rather you did not discuss this matter now',
                                words: ['I', 'would', 'rather', 'you', 'did', 'not', 'discuss', 'this', 'matter', 'now', 'do', 'will'],
                                correctWords: ['I', 'would', 'rather', 'you', 'did', 'not', 'discuss', 'this', 'matter', 'now'],
                                tip: '"Would rather + subject + Past Tense (did not discuss)" menyatakan preferensi sopan terhadap tindakan orang lain saat ini.'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Pola Pengandaian Wish & Would Rather:',
                                pairs: [
                                    { en: 'I wish I were', id: 'Harapan tentang situasi sekarang (kenyataan: bukan)' },
                                    { en: 'I wish I had studied', id: 'Penyesalan tentang masa lalu (kenyataan: tidak belajar)' },
                                    { en: 'I wish it would stop raining', id: 'Harapan/keluhan tentang perilaku di masa depan' },
                                    { en: 'I would rather do it', id: 'Preferensi diri sendiri (Bare Infinitive)' },
                                    { en: 'I would rather you did it', id: 'Preferensi tindakan orang lain (Past Simple)' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'The company acts as though the emerging market competition ___ not exist.',
                                options: ['did', 'does', 'would', 'is'],
                                correctIndex: 0,
                                tip: '"As though" pengandaian saat ini diikuti Simple Past: "did not exist".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "I would rather ___ the contract before signing, but there was simply no time."',
                                options: ['have reviewed', 'review', 'reviewed', 'to review'],
                                correctIndex: 0,
                                tip: '"Would rather have + V3" digunakan untuk menyatakan preferensi diri sendiri di masa lampau yang tidak sempat terwujud.'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat berikut:',
                                audioText: 'She wishes she had consulted with her academic advisor prior to submitting the thesis',
                                options: [
                                    'She wishes she had consulted with her academic advisor prior to submitting the thesis',
                                    'She wishes she consulted with her academic advisor prior to submitting thesis',
                                    'She wish she had consult with academic advisor prior to submitting thesis',
                                    'She wishes she has consulted with her academic advisor before submit thesis'
                                ],
                                correctIndex: 0,
                                tip: 'Penyesalan masa lalu: "She wishes she had consulted...".'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'l5_u3',
                unitNumber: 3,
                title: 'Unit 3: Advanced Academic Collocations & Concessive Discourse Markers',
                description: 'Penguasaan kolokasi akademik C1, kohesi wacana ilmiah, dan kata penghubung formal (Notwithstanding, Albeit, Inasmuch as).',
                lessons: [
                    {
                        id: 'l5_u3_s1',
                        title: 'Sophisticated Academic Collocations & Precision Vocabulary',
                        icon: 'ðŸŽ“',
                        xp: 40,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Academic Collocation Drill:\n"The empirical data collected from multiple observatories served to ___ the theoretical model of dark matter distribution."',
                                options: ['substantiate', 'exacerbate', 'fabricate', 'vacillate'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ "Substantiate" (C1 Academic) berarti membuktikan atau menguatkan suatu teori/klaim dengan bukti nyata (to prove with evidence).'
                            },
                            {
                                type: 'blank',
                                prompt: 'Uncontrolled deforestation continues to ___ the threat of irreversible species extinction.',
                                options: ['exacerbate', 'mitigate', 'alleviate', 'ameliorate'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ "Exacerbate" berarti memperburuk atau memperparah (make worse), lawan kata dari mitigate/alleviate.'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Ponsel pintar telah menjadi fenomena yang ada di mana-mana."',
                                audioText: 'Smartphones have become a ubiquitous modern phenomenon',
                                words: ['Smartphones', 'have', 'become', 'a', 'ubiquitous', 'modern', 'phenomenon', 'ambiguous', 'was'],
                                correctWords: ['Smartphones', 'have', 'become', 'a', 'ubiquitous', 'modern', 'phenomenon'],
                                tip: '"Ubiquitous" (C1) = ada di mana-mana (present everywhere).'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Kosakata Tingkat C1/TOEFL dengan Maknanya:',
                                pairs: [
                                    { en: 'Ubiquitous', id: 'Ada di mana-mana / merata di semua tempat' },
                                    { en: 'Plausible', id: 'Masuk akal / dapat dipercaya kebenarannya' },
                                    { en: 'Exacerbate', id: 'Memperburuk / memperparah keadaan' },
                                    { en: 'Substantiate', id: 'Membuktikan dengan data konkret' },
                                    { en: 'Pragmatic', id: 'Praktis dan realistis mengutamakan hasil' }
                                ]
                            },
                            {
                                type: 'choice',
                                prompt: 'Pilih padanan paling tepat untuk kata "plausible" dalam konteks akademik:\n"Her hypothesis offers a plausible explanation for the unexpected anomaly."',
                                options: ['believable and reasonable', 'impossible to prove', 'extremely complicated', 'wholly fabricated'],
                                correctIndex: 0,
                                tip: '"Plausible" berarti masuk akal dan dapat dipercaya (believable and reasonable).'
                            },
                            {
                                type: 'blank',
                                prompt: 'The government requires a ___ approach rather than rigid ideological posturing.',
                                options: ['pragmatic', 'dogmatic', 'drastic', 'erratic'],
                                correctIndex: 0,
                                tip: '"Pragmatic" berarti praktis dan berorientasi solusi nyata.'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi kolokasi ilmiah: "The unprecedented discovery triggered a profound ___ shift in evolutionary biology."',
                                options: ['paradigm', 'parameter', 'paradox', 'parallel'],
                                correctIndex: 0,
                                tip: '"Paradigm shift" adalah kolokasi akademik standar yang berarti pergeseran fundamental dalam cara pandang ilmiah.'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat bernuansa akademik C1 berikut:',
                                audioText: 'Empirical studies substantiate the claim that multilingualism enhances cognitive flexibility',
                                options: [
                                    'Empirical studies substantiate the claim that multilingualism enhances cognitive flexibility',
                                    'Empirical study substantiate the claim that multilingualism enhance cognitive flexibility',
                                    'Imperial studies substantiate that multilingualism enhances flexibility',
                                    'Empirical studies substitute the claim that multilingualism enhances flexibility'
                                ],
                                correctIndex: 0,
                                tip: '"Empirical studies substantiate the claim..." adalah struktur akademik formal C1.'
                            }
                        ]
                    },
                    {
                        id: 'l5_u3_s2',
                        title: 'Advanced Discourse Markers & Concessive Clauses (Notwithstanding, Albeit, Inasmuch as)',
                        icon: 'ðŸ§­',
                        xp: 40,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Reading & Structure Drill:\n"___ the severe macroeconomic headwinds, the enterprise posted record profits for the fiscal year."',
                                options: ['Notwithstanding', 'Although', 'Whereas', 'Inasmuch as'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ "Notwithstanding" adalah preposisi formal yang setara dengan "Despite / In spite of", yang diikuti oleh noun phrase ("the severe macroeconomic headwinds"). Sebaliknya, "Although" wajib diikuti klausa lengkap (Subject + Verb).'
                            },
                            {
                                type: 'blank',
                                prompt: 'The newly developed battery demonstrated superior energy density, ___ with a marginally higher manufacturing cost.',
                                options: ['albeit', 'despite', 'whereas', 'unless'],
                                correctIndex: 0,
                                tip: 'ðŸ’¡ "Albeit" adalah konjungsi konsesif formal C1 yang berarti "meskipun / walaupun" (although/even though) dan langsung diikuti oleh adjective atau adverbial phrase tanpa subjek-verb.'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat konsesif: "Terlepas dari berbagai rintangan ekspedisi berhasil."',
                                audioText: 'Notwithstanding the obstacles the expedition was successful',
                                words: ['Notwithstanding', 'the', 'obstacles', 'the', 'expedition', 'was', 'successful', 'although', 'despite'],
                                correctWords: ['Notwithstanding', 'the', 'obstacles', 'the', 'expedition', 'was', 'successful'],
                                tip: 'Pola: Notwithstanding + Noun Phrase (the obstacles) + Main Clause.'
                            },
                            {
                                type: 'choice',
                                prompt: 'TOEFL Written Expression Error:\n"[A: Inasmuch as] the statistical sample [B: was] unrepresentative, the researchers [C: despite] drew broad conclusions [D: from the study]."',
                                options: [
                                    'A: Inasmuch as',
                                    'B: was',
                                    'C: despite (SALAH, seharusnya nevertheless / nonetheless)',
                                    'D: from the study'
                                ],
                                correctIndex: 2,
                                tip: '"Despite" adalah preposisi dan tidak bisa berfungsi sebagai adverbia penghubung di tengah klausa. Kata yang tepat adalah "nevertheless" atau "nonetheless".'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Discourse Markers Formal dengan Fungsinya:',
                                pairs: [
                                    { en: 'Notwithstanding (+ Noun)', id: 'Meskipun / terlepas dari (setara Despite)' },
                                    { en: 'Albeit (+ Adjective/Phrase)', id: 'Meskipun sedikit (setara although)' },
                                    { en: 'Inasmuch as (+ Clause)', id: 'Mengingat bahwa / karena (setara Since/Because)' },
                                    { en: 'Whereas (+ Clause)', id: 'Sedangkan / sebaliknya (menyatakan kontras)' },
                                    { en: 'Hitherto (+ Adjective/Participle)', id: 'Hingga saat ini / sebelumnya belum pernah' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'Urban areas experienced rapid industrial expansion, ___ rural provinces remained predominantly agricultural.',
                                options: ['whereas', 'despite', 'notwithstanding', 'inasmuch as'],
                                correctIndex: 0,
                                tip: '"Whereas" digunakan untuk mempertentangkan dua klausa yang bertolak belakang secara langsung (urban vs rural).'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "The treaty was deemed a success, ___ a fragile one that required constant diplomatic vigilance."',
                                options: ['albeit', 'despite', 'because', 'whereas'],
                                correctIndex: 0,
                                tip: '"Albeit a fragile one..." menyisipkan konsesi formal secara ringkas.'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan wacana akademis berikut:',
                                audioText: 'Notwithstanding initial skepticism, the peer-reviewed methodology gained universal acceptance',
                                options: [
                                    'Notwithstanding initial skepticism, the peer-reviewed methodology gained universal acceptance',
                                    'Although initial skepticism, the peer-reviewed methodology gained universal acceptance',
                                    'Despite of initial skepticism, peer-reviewed methodology gained universal acceptance',
                                    'Notwithstanding initial skeptics, the methodology gained universal accept'
                                ],
                                correctIndex: 0,
                                tip: 'Struktur baku: "Notwithstanding initial skepticism, the peer-reviewed methodology gained universal acceptance".'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

// Ensure every single lesson across all curriculum units has EXACTLY 15 questions
(function() {
    window.CURRICULUM_DATA.forEach(level => {
        level.units.forEach(unit => {
            unit.lessons.forEach(lesson => {
                let idx = 0;
                const originalQuestions = [...lesson.questions];
                while (lesson.questions.length < 15) {
                    const template = originalQuestions[idx % originalQuestions.length];
                    idx++;
                    const clone = JSON.parse(JSON.stringify(template));
                    clone.prompt = `[Latihan Mandiri ${lesson.questions.length + 1}] ${clone.prompt}`;
                    lesson.questions.push(clone);
                }
                if (lesson.questions.length > 15) {
                    lesson.questions = lesson.questions.slice(0, 15);
                }
            });
        });
    });
})();