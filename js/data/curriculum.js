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
        badgeIcon: '🚀',
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
                        icon: '👥',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'TOEFL Structure Drill:\n"Everyone involved in the aerospace design project ___ required to sign a nondisclosure agreement."',
                                options: ['is', 'are', 'were', 'be'],
                                correctIndex: 0,
                                tip: '💡 Aturan Mutlak TOEFL: Indefinite pronouns berakhiran -one, -body, -thing (Everyone, Somebody, Anyone, Nobody, Each) SELALU dianggap TUNGGAL (Singular). Gunakan "is".'
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
                                tip: '💡 Soal Otentik TOEFL: Subjek kalimat adalah "Each" (tunggal), bukan "fifty states". Maka kata kerja yang benar adalah "has", bukan "have".'
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
                                prompt: 'Perhatikan frasa kuantitas: "All of the information ___ verified by independent auditors."',
                                options: ['has been', 'have been', 'are', 'were'],
                                correctIndex: 0,
                                tip: 'Pada frasa kuantitas (All of, Most of, Some of, None of), kata benda setelah "of" yang menentukan: "information" adalah uncountable (tunggal), maka gunakan "has been".'
                            },
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "Most of the research equipment in these laboratories ___ manufactured in Germany."',
                                options: ['was', 'were', 'are', 'have been'],
                                correctIndex: 0,
                                tip: '"Equipment" adalah uncountable noun (tidak ada kata equipments!). Maka "Most of the equipment" bersifat TUNGGAL, memakai "was".'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'l2_u2',
                unitNumber: 2,
                title: 'Unit 2: Verb Tenses & Passive Voice (To Be + Past Participle V3)',
                description: 'Membedakan Present Perfect vs Simple Past, Past Perfect untuk urutan waktu, dan struktur Passive Voice.',
                lessons: [
                    {
                        id: 'l2_u2_s1',
                        title: 'Present Perfect vs Past Simple & Passive Voice Dasar',
                        icon: '⚙️',
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
                                tip: '💡 Kaidah Tenses TOEFL: Waktu spesifik masa lalu (in 1990, ago, last...) WAJIB Simple Past (V2), BUKAN Present Perfect.'
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
                                tip: '💡 Soal Khas TOEFL: Karena ada waktu pasti lampau "in 1915", tidak boleh menggunakan Present Perfect "has published". Bentuk yang benar adalah Simple Past V2: "published".'
                            },
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
                                tip: '💡 Past Perfect Pasif: Kejadian yang sudah selesai sebelum peristiwa lampau lainnya (By the time ... arrived) menggunakan "had been + V3".'
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
                                prompt: 'Identifikasi kalimat pasif yang SALAH secara tata bahasa:',
                                options: [
                                    'The spacecraft was disappeared into the asteroid belt.',
                                    'The spacecraft disappeared into the asteroid belt.',
                                    'The telemetry data was analyzed by computer algorithms.',
                                    'Satellite transmissions were disrupted by solar flares.'
                                ],
                                correctIndex: 0,
                                tip: '💡 Jebakan Intransitive Verb di TOEFL: Kata kerja "disappear", "arrive", "die", "occur", "happen" adalah intransitif (tidak punya objek). Kata kerja ini TIDAK PERNAH bisa dibuat dalam bentuk pasif! Maka "was disappeared" salah fatal, harusnya "disappeared".'
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
        title: 'Level 3: Intermediate (Menengah)',
        subtitle: 'Perjalanan, Future Tense, Perbandingan, dan Pengandaian Kondisional',
        color: '#ff9600',
        badgeIcon: '🔥',
        units: [
            {
                id: 'l3_u1',
                unitNumber: 1,
                title: 'Unit 1: Rencana Masa Depan & Perjalanan',
                description: 'Perbedaan "will" vs "be going to", menanyakan arah, dan traveling.',
                lessons: [
                    {
                        id: 'l3_u1_s1',
                        title: 'Future Tenses & Arah',
                        icon: '✈️',
                        xp: 25,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Kapan sebaiknya kita memakai "be going to" daripada "will"?',
                                options: ['Ketika rencana sudah diputuskan sebelum berbicara', 'Untuk keputusan spontan mendadak', 'Hanya untuk masa lalu', 'Ketika tidak ada kepastian sama sekali'],
                                correctIndex: 0,
                                tip: '"Going to" digunakan untuk rencana/niat yang telah direncanakan sebelumnya atau ada bukti nyata.'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Jika turun hujan, kita akan tinggal di rumah."',
                                audioText: 'If it rains we will stay at home',
                                words: ['If', 'it', 'rains,', 'we', 'will', 'stay', 'at', 'home', 'rained', 'would'],
                                correctWords: ['If', 'it', 'rains,', 'we', 'will', 'stay', 'at', 'home'],
                                tip: 'First Conditional: If + Present Simple, will + Verb 1.'
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan arah petunjuk jalan berikut:',
                                audioText: 'Turn left at the traffic light and go straight',
                                options: ['Turn left at the traffic light and go straight', 'Turn right at the train station and wait', 'Go straight until you see the light', 'Take a taxi to the airport'],
                                correctIndex: 0,
                                tip: '"Traffic light" = lampu lalu lintas, "go straight" = jalan lurus.'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan kosakata traveling berikut:',
                                pairs: [
                                    { en: 'Boarding pass', id: 'Tiket masuk pesawat' },
                                    { en: 'Departure', id: 'Keberangkatan' },
                                    { en: 'Arrival', id: 'Kedatangan' },
                                    { en: 'Luggage / Baggage', id: 'Bagasi / Koper' },
                                    { en: 'Delay', id: 'Penundaan jadwal' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 'l3_u2',
                unitNumber: 2,
                title: 'Unit 2: Perbandingan & Present Perfect',
                description: 'Comparatives, superlatives, serta pengalaman dengan "have/has + V3".',
                lessons: [
                    {
                        id: 'l3_u2_s1',
                        title: 'Present Perfect & Pengalaman',
                        icon: '🏆',
                        xp: 25,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Lengkapi: "I have ___ to Japan twice in my life."',
                                audioText: 'I have been to Japan twice in my life',
                                options: ['been', 'went', 'go', 'gone'],
                                correctIndex: 0,
                                tip: '"Have been to" berarti pernah berkunjung dan sudah kembali pulang.'
                            },
                            {
                                type: 'blank',
                                prompt: 'Mount Everest is the ___ mountain in the world.',
                                options: ['highest', 'higher', 'most high', 'high'],
                                correctIndex: 0,
                                tip: 'Superlative untuk kata sifat satu suku kata (high) ditambah akhiran -est: "the highest".'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Apakah kamu pernah mencoba makanan pedas ini sebelumnya?"',
                                audioText: 'Have you ever tried this spicy food before?',
                                words: ['Have', 'you', 'ever', 'tried', 'this', 'spicy', 'food', 'before?', 'Did', 'try'],
                                correctWords: ['Have', 'you', 'ever', 'tried', 'this', 'spicy', 'food', 'before?'],
                                tip: 'Gunakan "Have you ever + V3" untuk menanyakan pengalaman hidup seumur hidup.'
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
        title: 'Level 4: Upper Intermediate (Mahir Awal)',
        subtitle: 'Bahasa Inggris Bisnis, Kalimat Pasif (Passive Voice), Phrasal Verbs & Debat',
        color: '#ce82ff',
        badgeIcon: '💎',
        units: [
            {
                id: 'l4_u1',
                unitNumber: 1,
                title: 'Unit 1: Dunia Kerja & Negosiasi Bisnis',
                description: 'Email profesional, rapat kerja, dan diplomasi kata.',
                lessons: [
                    {
                        id: 'l4_u1_s1',
                        title: 'Komunikasi Bisnis & Email Formal',
                        icon: '💼',
                        xp: 30,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Dalam email formal, ungkapan mana yang tepat untuk melampirkan berkas?',
                                audioText: 'Please find the attached document for your review',
                                options: [
                                    'Please find the attached document for your review.',
                                    'Here is the file look at it.',
                                    'I put file inside check now.',
                                    'Download this right away.'
                                ],
                                correctIndex: 0,
                                tip: '"Please find attached..." adalah frasa standar dalam korespondensi bisnis internasional.'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat pasif: "Laporan baru saja diserahkan oleh tim manajer."',
                                audioText: 'The report has just been submitted by the manager',
                                words: ['The', 'report', 'has', 'just', 'been', 'submitted', 'by', 'the', 'manager', 'submitting', 'was'],
                                correctWords: ['The', 'report', 'has', 'just', 'been', 'submitted', 'by', 'the', 'manager'],
                                tip: 'Passive Voice Present Perfect: has/have + been + Verb 3 (past participle).'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan Phrasal Verbs penting dunia kerja:',
                                pairs: [
                                    { en: 'Call off', id: 'Membatalkan (Cancel)' },
                                    { en: 'Put off', id: 'Menunda (Postpone)' },
                                    { en: 'Figure out', id: 'Menemukan solusi' },
                                    { en: 'Carry out', id: 'Melaksanakan rencana' },
                                    { en: 'Bring up', id: 'Mengangkat topik pembicaraan' }
                                ]
                            },
                            {
                                type: 'listen',
                                prompt: 'Dengarkan kalimat diplomatik berikut:',
                                audioText: 'I see your point, but we need to consider the budget constraints',
                                options: [
                                    'I see your point, but we need to consider the budget constraints',
                                    'I reject your idea because we do not have money',
                                    'We see your printer, but the budget is already gone',
                                    'I see no point in considering your opinion'
                                ],
                                correctIndex: 0,
                                tip: '"I see your point, but..." adalah cara sopan menyatakan perbedaan pandangan dalam rapat.'
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
        title: 'Level 5: Advanced (Jago & TOEFL Mastery)',
        subtitle: 'Inversi kalimat, Academic Vocabulary, Nuansa C1, & Struktur Kompleks',
        color: '#ff4b4b',
        badgeIcon: '👑',
        units: [
            {
                id: 'l5_u1',
                unitNumber: 1,
                title: 'Unit 1: Inversi & Struktur Bahasa Tingkat Tinggi',
                description: 'Gaya kalimat formal TOEFL/IELTS: Inversion, Subjunctive mood, & Mixed Conditionals.',
                lessons: [
                    {
                        id: 'l5_u1_s1',
                        title: 'Inversi Kalimat & Gaya Akademik',
                        icon: '🏛️',
                        xp: 35,
                        questions: [
                            {
                                type: 'choice',
                                prompt: 'Pilih susunan kalimat inversi yang tepat setelah ungkapan negatif "Not only...":',
                                options: [
                                    'Not only did she pass the exam, but she also won the scholarship.',
                                    'Not only she passed the exam, but also won scholarship.',
                                    'Not only she did pass exam, but she won scholarship.',
                                    'Not only does she passed exam, but she won.'
                                ],
                                correctIndex: 0,
                                tip: 'Ketika kalimat diawali ungkapan negatif seperti "Not only", "Seldom", atau "Hardly", gunakan pola inversi kata bantu sebelum subjek: Not only + auxiliary verb + subject + verb.'
                            },
                            {
                                type: 'word_bank',
                                prompt: 'Susun kalimat: "Seandainya saya tahu kebenarannya, saya pasti sudah bertindak berbeda."',
                                audioText: 'Had I known the truth I would have acted differently',
                                words: ['Had', 'I', 'known', 'the', 'truth,', 'I', 'would', 'have', 'acted', 'differently', 'If', 'did'],
                                correctWords: ['Had', 'I', 'known', 'the', 'truth,', 'I', 'would', 'have', 'acted', 'differently'],
                                tip: 'Inversi Third Conditional: "Had I known..." menggantikan "If I had known...". Sering keluar di soal TOEFL!'
                            },
                            {
                                type: 'matching',
                                prompt: 'Cocokkan kosakata akademis C1 dengan sinonim sederhananya:',
                                pairs: [
                                    { en: 'Substantiate', id: 'Prove / Memberikan bukti' },
                                    { en: 'Ambiguous', id: 'Unclear / Bermakna ganda' },
                                    { en: 'Prevalent', id: 'Widespread / Marak terjadi' },
                                    { en: 'Exacerbate', id: 'Worsen / Memperparah' },
                                    { en: 'Plausible', id: 'Believable / Masuk akal' }
                                ]
                            },
                            {
                                type: 'blank',
                                prompt: 'The board recommended that the CEO ___ immediately to avoid further scrutiny.',
                                options: ['resign', 'resigns', 'resigned', 'will resign'],
                                correctIndex: 0,
                                tip: 'Present Subjunctive Mood: Kata kerja seperti recommend, insist, suggest diikuti "that + subject + verb dasar (bare infinitive)" tanpa -s.'
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
