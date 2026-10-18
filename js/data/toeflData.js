// ====================================================================
// Official TOEFL ITP Simulation Dataset - 150 Completely Unique Questions
// Section 1: Listening Comprehension (50 Unique Questions)
// Section 2: Structure & Written Expression (50 Unique Questions)
// Section 3: Reading Comprehension (50 Unique Questions across 5 Passages)
// ====================================================================

(function() {
    // ----------------------------------------------------------------
    // SECTION 1: 50 UNIQUE LISTENING QUESTIONS
    // ----------------------------------------------------------------
    const rawListeningQuestions = [
        // Part A: Short Dialogues (1 - 30)
        {
            dialogue: "Woman: Did you manage to submit the research grant proposal on time?\nMan: Barely! If the campus server had crashed for even one more minute, I would have missed the deadline completely.\nNarrator: What does the man imply?",
            audio: "Did you manage to submit the research grant proposal on time? Barely! If the campus server had crashed for even one more minute, I would have missed the deadline completely. What does the man imply?",
            prompt: "What does the man imply?",
            options: ["He submitted the proposal just moments before the deadline.", "The campus server prevented him from turning in the paper.", "He missed the research grant deadline completely.", "He requested an extension from the grant committee."],
            correct: 0,
            explanation: "Pria berkata 'Barely!' dan menjelaskan jika server down satu menit saja ia akan terlambat. Artinya ia berhasil mengirimkannya tepat sebelum batas waktu."
        },
        {
            dialogue: "Man: Professor Hayes mentioned that tomorrow's field trip might be cancelled if the rain persists.\nWoman: Oh really? I wouldn't count on it; he never lets bad weather disrupt his research schedule.\nNarrator: What does the woman mean?",
            audio: "Professor Hayes mentioned that tomorrow's field trip might be cancelled if the rain persists. Oh really? I wouldn't count on it; he never lets bad weather disrupt his research schedule. What does the woman mean?",
            prompt: "What does the woman mean?",
            options: ["She doubts the professor will actually cancel the field trip.", "She agrees that inclement weather will postpone the schedule.", "She cannot count how many students are participating.", "The botanical garden is permanently closed on rainy days."],
            correct: 0,
            explanation: "Ungkapan 'I wouldn't count on it' berarti pembicara meragukan hal tersebut akan terjadi."
        },
        {
            dialogue: "Woman: I'm really struggling to grasp the macroeconomic theories in chapter four.\nMan: Why don't you join our study group at the campus library tonight?\nNarrator: What does the man suggest the woman do?",
            audio: "I am really struggling to grasp the macroeconomic theories in chapter four. Why don't you join our study group at the campus library tonight? What does the man suggest the woman do?",
            prompt: "What does the man suggest the woman do?",
            options: ["Review the macroeconomic material with fellow students.", "Drop the economics course before the end of the semester.", "Study alone in her dormitory room to avoid distraction.", "Ask the department chair for an individual tutor."],
            correct: 0,
            explanation: "Pria menyarankan 'Why don't you join our study group...', yaitu belajar bersama mahasiswa lain di perpustakaan."
        },
        {
            dialogue: "Man: Did you hear that Sarah was accepted into the prestigious Oxford fellowship?\nWoman: Was she ever! She has been working tirelessly toward that goal for three years.\nNarrator: What does the woman mean?",
            audio: "Did you hear that Sarah was accepted into the prestigious Oxford fellowship? Was she ever! She has been working tirelessly toward that goal for three years. What does the woman mean?",
            prompt: "What does the woman mean?",
            options: ["Sarah was definitely and enthusiastically accepted.", "She is surprised Sarah even considered applying.", "Sarah has never worked hard in her academic career.", "She doubts Sarah will accept the fellowship offer."],
            correct: 0,
            explanation: "Frasa 'Was she ever!' dalam percakapan TOEFL menyatakan penegasan sangat kuat (tentu saja sangat pantas dan diterima)."
        },
        {
            dialogue: "Woman: Would you like to go to the symphony concert downtown tonight?\nMan: I'd love to, but I'm up to my ears in lab reports that are due tomorrow morning.\nNarrator: What does the man mean?",
            audio: "Would you like to go to the symphony concert downtown tonight? I'd love to, but I'm up to my ears in lab reports that are due tomorrow morning. What does the man mean?",
            prompt: "What does the man mean?",
            options: ["He is overwhelmed with academic assignments due soon.", "His ears are hurting from loud laboratory equipment.", "He plans to attend the symphony concert later tonight.", "He finished writing his lab reports earlier today."],
            correct: 0,
            explanation: "Idiom 'up to one's ears in something' berarti sangat sibuk dan kewalahan dengan tumpukan tugas/laporan."
        },
        {
            dialogue: "Man: Can you lend me your notes from yesterday's anthropology lecture? I was feeling under the weather.\nWoman: Of course, but my handwriting is notoriously messy, so don't hesitate to ask if you can't decipher it.\nNarrator: What does the woman imply?",
            audio: "Can you lend me your notes from yesterday's anthropology lecture? I was feeling under the weather. Of course, but my handwriting is notoriously messy, so don't hesitate to ask if you can't decipher it. What does the woman imply?",
            prompt: "What does the woman imply?",
            options: ["The man might have difficulty reading her lecture notes.", "She did not attend the anthropology lecture either.", "She refuses to lend her notes to the man.", "The lecture was cancelled due to bad weather."],
            correct: 0,
            explanation: "Wanita berkata 'my handwriting is notoriously messy, so don't hesitate to ask if you can't decipher it', menyiratkan catatannya sulit dibaca."
        },
        {
            dialogue: "Woman: The line at the campus financial aid office is stretching all the way down the corridor.\nMan: You can say that again! I've been waiting here for almost forty-five minutes.\nNarrator: What does the man mean?",
            audio: "The line at the campus financial aid office is stretching all the way down the corridor. You can say that again! I've been waiting here for almost forty-five minutes. What does the man mean?",
            prompt: "What does the man mean?",
            options: ["He completely agrees that the line is exceptionally long.", "He wants the woman to repeat her statement louder.", "He has not been waiting very long in the queue.", "The financial aid office is currently closed."],
            correct: 0,
            explanation: "Idiom 'You can say that again!' adalah ungkapan standar TOEFL yang menyatakan persetujuan mutlak (completely agree)."
        },
        {
            dialogue: "Man: I heard the university is planning to construct a new sports pavilion next year.\nWoman: Not as far as I know; the administration decided to allocate those funds to scientific research.\nNarrator: What does the woman indicate?",
            audio: "I heard the university is planning to construct a new sports pavilion next year. Not as far as I know; the administration decided to allocate those funds to scientific research. What does the woman indicate?",
            prompt: "What does the woman indicate?",
            options: ["The sports pavilion will likely not be constructed.", "The athletic budget has been doubled for next year.", "She knows exactly when the groundbreaking ceremony is.", "The scientific laboratories will be converted to a gymnasium."],
            correct: 0,
            explanation: "'Not as far as I know' menunjukkan bahwa rencana tersebut tidak benar atau telah dibatalkan untuk dialihkan ke riset sains."
        },
        {
            dialogue: "Woman: Professor Miller's historical linguistics seminar was quite demanding, wasn't it?\nMan: Understatement of the century! I spent the entire weekend just parsing the Old English texts.\nNarrator: What does the man mean?",
            audio: "Professor Miller's historical linguistics seminar was quite demanding, wasn't it? Understatement of the century! I spent the entire weekend just parsing the Old English texts. What does the man mean?",
            prompt: "What does the man mean?",
            options: ["The seminar was extraordinarily difficult and time-consuming.", "The course was much easier than he originally anticipated.", "He did not complete the weekend reading assignment.", "Professor Miller assigned no homework for the semester."],
            correct: 0,
            explanation: "'Understatement of the century' berarti ungkapan lawan bicara justru mengecilkan kenyataan; faktanya seminar tersebut luar biasa sulit."
        },
        {
            dialogue: "Man: I'm considering taking an extra statistics course during the summer term.\nWoman: If I were in your shoes, I'd take a break; you've been burning the candle at both ends all semester.\nNarrator: What does the woman advise the man to do?",
            audio: "I'm considering taking an extra statistics course during the summer term. If I were in your shoes, I'd take a break; you've been burning the candle at both ends all semester. What does the woman advise the man to do?",
            prompt: "What does the woman advise the man to do?",
            options: ["Rest instead of taking summer classes because he has been working too hard.", "Enroll in two additional statistics courses immediately.", "Purchase more candles to study late into the night.", "Change his academic major to mathematics."],
            correct: 0,
            explanation: "Idiom 'burn the candle at both ends' berarti bekerja terlalu keras dari pagi hingga larut malam. Wanita menasihatinya untuk istirahat ('take a break')."
        },
        {
            dialogue: "Woman: Are there any vegetarian options left at the campus dining hall?\nMan: The chef just brought out a fresh vegetable lasagna, but it's disappearing fast.\nNarrator: What does the man imply?",
            audio: "Are there any vegetarian options left at the campus dining hall? The chef just brought out a fresh vegetable lasagna, but it's disappearing fast. What does the man imply?",
            prompt: "What does the man imply?",
            options: ["The woman should get her food quickly before it runs out.", "The dining hall does not serve any vegetarian dishes.", "The chef forgot to prepare lunch today.", "The lasagna is too hot to eat right now."],
            correct: 0,
            explanation: "'It is disappearing fast' berarti makanan cepat habis diambil orang, sehingga wanita harus segera mengambilnya."
        },
        {
            dialogue: "Man: Did you manage to find that rare out-of-print reference book for your thesis?\nWoman: Against all odds, the interlibrary loan service tracked down a copy in Chicago.\nNarrator: What does the woman mean?",
            audio: "Did you manage to find that rare out-of-print reference book for your thesis? Against all odds, the interlibrary loan service tracked down a copy in Chicago. What does the woman mean?",
            prompt: "What does the woman mean?",
            options: ["She successfully obtained the rare book despite the difficulty.", "She was unable to locate the book anywhere in Chicago.", "The interlibrary loan service lost her thesis materials.", "She decided to write her thesis without the reference book."],
            correct: 0,
            explanation: "'Against all odds' berarti meskipun kemungkinannya sangat kecil dan penuh tantangan, buku tersebut berhasil ditemukan."
        },
        {
            dialogue: "Woman: The printer in the computer lab is printing horizontal streaks across every single page.\nMan: Why not submit a service ticket to the IT help desk so they can replace the toner cartridge?\nNarrator: What does the man suggest?",
            audio: "The printer in the computer lab is printing horizontal streaks across every single page. Why not submit a service ticket to the IT help desk so they can replace the toner cartridge? What does the man suggest?",
            prompt: "What does the man suggest?",
            options: ["Report the malfunction to the technical support department.", "Buy a new personal printer for the computer lab.", "Ignore the streaks and submit the printed pages.", "Turn off the laboratory electricity completely."],
            correct: 0,
            explanation: "'Why not submit a service ticket to the IT help desk' menyarankan untuk melaporkan masalah printer ke teknisi IT."
        },
        {
            dialogue: "Man: Are you driving to the coastal biology marine station this afternoon?\nWoman: I was planning to, but my car is making a rattling noise, so I might take the express bus instead.\nNarrator: What will the woman probably do?",
            audio: "Are you driving to the coastal biology marine station this afternoon? I was planning to, but my car is making a rattling noise, so I might take the express bus instead. What will the woman probably do?",
            prompt: "What will the woman probably do?",
            options: ["Travel by bus due to mechanical problems with her car.", "Fix her car engine herself before driving to the coast.", "Cancel her research visit to the marine station entirely.", "Walk along the coastline to the laboratory."],
            correct: 0,
            explanation: "Wanita berkata mobilnya berbunyi berisik ('rattling noise'), jadi ia kemungkinan akan naik bus ekspres."
        },
        {
            dialogue: "Woman: Has Professor Vance posted the final grades for the biochemistry examination yet?\nMan: Check the online portal; he updated the grade roster about twenty minutes ago.\nNarrator: What does the man tell the woman to do?",
            audio: "Has Professor Vance posted the final grades for the biochemistry examination yet? Check the online portal; he updated the grade roster about twenty minutes ago. What does the man tell the woman to do?",
            prompt: "What does the man tell the woman to do?",
            options: ["Log into the campus website to view her exam results.", "Call Professor Vance directly at his home office.", "Wait another three weeks for the grades to be calculated.", "Retake the biochemistry exam tomorrow."],
            correct: 0,
            explanation: "Pria memberitahu bahwa nilai sudah diunggah 20 menit lalu di portal online ('Check the online portal')."
        },
        {
            dialogue: "Man: I'm really anxious about delivering my presentation in the auditorium tomorrow.\nWoman: Just take a deep breath and rehearse in front of a mirror; you know the subject matter inside out.\nNarrator: What does the woman imply about the man?",
            audio: "I'm really anxious about delivering my presentation in the auditorium tomorrow. Just take a deep breath and rehearse in front of a mirror; you know the subject matter inside out. What does the woman imply about the man?",
            prompt: "What does the woman imply about the man?",
            options: ["He possesses thorough knowledge of his presentation topic.", "He should cancel his auditorium presentation immediately.", "He does not understand the subject matter at all.", "He should look at the audience instead of rehearsing."],
            correct: 0,
            explanation: "Idiom 'know something inside out' berarti menguasai atau memahami topik tersebut secara sangat mendalam dan luar kepala."
        },
        {
            dialogue: "Woman: Did the department head approve funding for the organic chemistry conference in Boston?\nMan: Green light all the way! Travel vouchers will be issued by the bursar by Friday.\nNarrator: What does the man mean?",
            audio: "Did the department head approve funding for the organic chemistry conference in Boston? Green light all the way! Travel vouchers will be issued by the bursar by Friday. What does the man mean?",
            prompt: "What does the man mean?",
            options: ["The conference funding was completely approved.", "The department head rejected the funding request.", "The conference in Boston has been indefinitely postponed.", "The vouchers can only be used for train travel."],
            correct: 0,
            explanation: "Idiom 'Green light all the way!' berarti mendapatkan persetujuan atau izin penuh tanpa hambatan."
        },
        {
            dialogue: "Man: Do you mind if I borrow your scientific calculator during the calculus final?\nWoman: Actually, I need it myself, but you can borrow one from the mathematics tutoring center on the third floor.\nNarrator: What does the woman suggest?",
            audio: "Do you mind if I borrow your scientific calculator during the calculus final? Actually, I need it myself, but you can borrow one from the mathematics tutoring center on the third floor. What does the woman suggest?",
            prompt: "What does the woman suggest?",
            options: ["Obtaining a loaner calculator from the tutoring center.", "Taking the calculus exam without using a calculator.", "Postponing the final examination until next week.", "Borrowing a calculator from the calculus professor."],
            correct: 0,
            explanation: "Wanita memakai kalkulatornya sendiri, namun memberi alternatif untuk meminjam di pusat bimbingan matematika lantai tiga."
        },
        {
            dialogue: "Woman: We need to decide on a topic for our joint sociology presentation by five o'clock.\nMan: Let's brainstorm over a cup of coffee at the student union after our noon seminar.\nNarrator: What does the man propose?",
            audio: "We need to decide on a topic for our joint sociology presentation by five o'clock. Let's brainstorm over a cup of coffee at the student union after our noon seminar. What does the man propose?",
            prompt: "What does the man propose?",
            options: ["Meeting after class to discuss presentation topics.", "Submitting individual presentations to the instructor.", "Skipping the noon seminar to finish the assignment.", "Postponing the sociology presentation until next month."],
            correct: 0,
            explanation: "Pria mengusulkan untuk berdiskusi/brainstorming sambil minum kopi setelah kelas siang selesai."
        },
        {
            dialogue: "Man: The acoustics in this lecture hall make it difficult to hear the speaker from the back row.\nWoman: Let's move down to the third row where there are still two unoccupied seats.\nNarrator: What will the speakers probably do?",
            audio: "The acoustics in this lecture hall make it difficult to hear the speaker from the back row. Let's move down to the third row where there are still two unoccupied seats. What will the speakers probably do?",
            prompt: "What will the speakers probably do?",
            options: ["Change their seats to sit closer to the front.", "Complain to the auditorium sound engineer.", "Leave the lecture hall before the speech concludes.", "Ask the speaker to turn off the microphone."],
            correct: 0,
            explanation: "Wanita mengajak pindah ke baris ketiga di depan agar bisa mendengar lebih jelas ('Let's move down to the third row')."
        },
        {
            dialogue: "Woman: I'm concerned about finishing this fifty-page literature review before semester break.\nMan: How about breaking it down into two-page sections each day? It makes the workload far less daunting.\nNarrator: What strategy does the man suggest?",
            audio: "I'm concerned about finishing this fifty-page literature review before semester break. How about breaking it down into two-page sections each day? It makes the workload far less daunting. What strategy does the man suggest?",
            prompt: "What strategy does the man suggest?",
            options: ["Dividing the large assignment into manageable daily goals.", "Writing the entire paper in a single overnight session.", "Asking the literature professor to reduce the page requirement.", "Hiring a professional research assistant to write the review."],
            correct: 0,
            explanation: "Pria menyarankan memecah tugas besar menjadi bagian-bagian kecil harian ('breaking it down into two-page sections each day')."
        },
        {
            dialogue: "Man: Did Mark turn down the assistantship at the federal research institute?\nWoman: Much to everyone's surprise, yes. He opted to pursue an independent startup company instead.\nNarrator: What does the woman say about Mark?",
            audio: "Did Mark turn down the assistantship at the federal research institute? Much to everyone's surprise, yes. He opted to pursue an independent startup company instead. What does the woman say about Mark?",
            prompt: "What does the woman say about Mark?",
            options: ["He declined the research position to start a business.", "He accepted the federal research assistantship gladly.", "He was rejected by the federal research institute.", "He decided to retire from academic research permanently."],
            correct: 0,
            explanation: "Mark menolak tawaran posisi riset tersebut ('opted to pursue an independent startup company instead')."
        },
        {
            dialogue: "Woman: I can't believe how steep the admission fee is for the national geology museum.\nMan: True, but if you present your university student ID card at the counter, you receive a sixty percent discount.\nNarrator: What does the man point out?",
            audio: "I can't believe how steep the admission fee is for the national geology museum. True, but if you present your university student ID card at the counter, you receive a sixty percent discount. What does the man point out?",
            prompt: "What does the man point out?",
            options: ["Students can enter the museum at a significantly reduced rate.", "The museum does not accept university student identification.", "Admission to the geology museum is free for all visitors.", "The discount only applies to museum staff members."],
            correct: 0,
            explanation: "Pria menjelaskan bahwa kartu mahasiswa memberikan diskon 60% ('receive a sixty percent discount')."
        },
        {
            dialogue: "Man: Do you think our proposal for the environmental clean-up initiative will be accepted by the city council?\nWoman: It has the mayor's personal backing, so I'd say its prospects are exceptionally bright.\nNarrator: What does the woman imply?",
            audio: "Do you think our proposal for the environmental clean-up initiative will be accepted by the city council? It has the mayor's personal backing, so I'd say its prospects are exceptionally bright. What does the woman imply?",
            prompt: "What does the woman imply?",
            options: ["The proposal has a very high likelihood of being approved.", "The mayor has threatened to veto the clean-up initiative.", "The city council has rejected environmental funding.", "The prospects for the proposal are rather doubtful."],
            correct: 0,
            explanation: "'Its prospects are exceptionally bright' karena didukung walikota secara pribadi, artinya peluang disetujui sangat besar."
        },
        {
            dialogue: "Woman: My laptop battery drains in less than thirty minutes whenever I run data modeling software.\nMan: Have you considered recalibrating the power settings, or is the battery simply past its prime?\nNarrator: What does the man suggest could be the problem?",
            audio: "My laptop battery drains in less than thirty minutes whenever I run data modeling software. Have you considered recalibrating the power settings, or is the battery simply past its prime? What does the man suggest could be the problem?",
            prompt: "What does the man suggest could be the problem?",
            options: ["The battery might be worn out and need replacement.", "The modeling software is corrupted and cannot run.", "The laptop screen is set to maximum brightness.", "The electrical outlet in the laboratory is defective."],
            correct: 0,
            explanation: "Idiom 'past its prime' berarti sudah aus, tua, atau melewati masa pakai optimalnya."
        },
        {
            dialogue: "Man: I wasn't able to attend the guest lecture on quantum cryptography yesterday.\nWoman: You really missed out; Dr. Thorne demonstrated how photon entanglement encrypts data instantaneously.\nNarrator: What does the woman mean?",
            audio: "I wasn't able to attend the guest lecture on quantum cryptography yesterday. You really missed out; Dr. Thorne demonstrated how photon entanglement encrypts data instantaneously. What does the woman mean?",
            prompt: "What does the woman mean?",
            options: ["The lecture was remarkably fascinating and worthwhile.", "Dr. Thorne failed to deliver the quantum lecture.", "The man was fortunate to have avoided the boring speech.", "Quantum cryptography has been proven ineffective."],
            correct: 0,
            explanation: "'You really missed out' berarti pembicara melewatkan sesuatu yang sangat hebat, bermanfaat, dan memukau."
        },
        {
            dialogue: "Woman: Is the university bookstore still buying back used textbooks this week?\nMan: Today is the absolute cutoff date; the buyback window closes at five sharp.\nNarrator: What does the man advise the woman to do?",
            audio: "Is the university bookstore still buying back used textbooks this week? Today is the absolute cutoff date; the buyback window closes at five sharp. What does the man advise the woman to do?",
            prompt: "What does the man advise the woman to do?",
            options: ["Sell her textbooks today before five o'clock.", "Wait until next semester to sell her used books.", "Purchase new textbooks from the university store.", "Donate her books to the municipal public library."],
            correct: 0,
            explanation: "Hari ini adalah batas akhir ('cutoff date') pukul 5 tepat, jadi wanita harus menjualnya hari ini sebelum tutup."
        },
        {
            dialogue: "Man: Did you manage to understand the statistical regression models from yesterday's economics seminar?\nWoman: To be completely honest, it was all Greek to me.\nNarrator: What does the woman mean?",
            audio: "Did you manage to understand the statistical regression models from yesterday's economics seminar? To be completely honest, it was all Greek to me. What does the woman mean?",
            prompt: "What does the woman mean?",
            options: ["She found the statistical regression models impossible to understand.", "The professor conducted the economics seminar in the Greek language.", "She studied Greek history rather than economics.", "The statistical models were extremely straightforward."],
            correct: 0,
            explanation: "Idiom 'it is all Greek to me' berarti sesuatu yang sama sekali tidak dapat dipahami atau sangat membingungkan."
        },
        {
            dialogue: "Woman: Should we submit our term paper draft electronically or provide a printed copy?\nMan: The syllabus states in bold letters that digital submissions through the portal are the only format accepted.\nNarrator: How must the paper be submitted?",
            audio: "Should we submit our term paper draft electronically or provide a printed copy? The syllabus states in bold letters that digital submissions through the portal are the only format accepted. How must the paper be submitted?",
            prompt: "How must the paper be submitted?",
            options: ["Electronically via the designated online portal.", "In person as a bound physical manuscript.", "By postal mail directly to the instructor's home.", "Printed on acid-free archival parchment paper."],
            correct: 0,
            explanation: "Silabus secara tegas mewajibkan pengumpulan format digital via portal online ('digital submissions through the portal')."
        },
        {
            dialogue: "Man: Do you think we can complete the environmental water sampling before the sun goes down?\nWoman: If we divide the perimeter into equal quadrants and work simultaneously, we'll finish with daylight to spare.\nNarrator: What does the woman propose?",
            audio: "Do you think we can complete the environmental water sampling before the sun goes down? If we divide the perimeter into equal quadrants and work simultaneously, we'll finish with daylight to spare. What does the woman propose?",
            prompt: "What does the woman propose?",
            options: ["Splitting the testing area to finish before sunset.", "Postponing the water sampling until tomorrow morning.", "Working only at night using battery lanterns.", "Sampling only one quadrant to save energy."],
            correct: 0,
            explanation: "Wanita menyarankan membagi area menjadi kuadran dan bekerja bersamaan agar selesai sebelum matahari terbenam."
        },

        // Part B: Longer Conversations (31 - 40)
        {
            dialogue: "Narrator: Listen to a conversation between a student and an academic advisor.\nStudent: Professor Davies, I'm reviewing my degree audit and noticed I'm three credits short in physical sciences.\nAdvisor: Let's see. You've completed introductory biology, but the curriculum requires a laboratory science course. You could take Earth Science 101 or Astronomy 105 during the spring.\nStudent: Is Astronomy 105 open to non-majors?\nAdvisor: Yes, it fulfills the laboratory requirement without requiring advanced calculus.\nNarrator: What problem does the student have?",
            audio: "Professor Davies, I'm reviewing my degree audit and noticed I'm three credits short in physical sciences. Let's see. You've completed introductory biology, but the curriculum requires a laboratory science course. You could take Earth Science 101 or Astronomy 105 during the spring. Is Astronomy 105 open to non-majors? Yes, it fulfills the laboratory requirement without requiring advanced calculus. What problem does the student have?",
            prompt: "What problem does the student have?",
            options: ["He lacks three credit hours in the physical science general requirement.", "He failed his introductory biology laboratory examination.", "The university cancelled Astronomy 105 for the spring term.", "He needs advanced calculus credits to graduate on time."],
            correct: 0,
            explanation: "Mahasiswa tersebut kekurangan 3 kredit mata kuliah sains fisik ('three credits short in physical sciences')."
        },
        {
            dialogue: "Narrator: Continuing the conversation about academic requirements.\nAdvisor: Furthermore, registration for spring classes opens this Thursday at 8:00 AM.\nStudent: Will Astronomy 105 fill up quickly?\nAdvisor: High-demand courses usually reach capacity within twenty-four hours, so I recommend logging in as soon as your registration window opens.\nNarrator: What does the advisor recommend the student do?",
            audio: "Registration for spring classes opens this Thursday at 8:00 AM. Will Astronomy 105 fill up quickly? High-demand courses usually reach capacity within twenty-four hours, so I recommend logging in as soon as your registration window opens. What does the advisor recommend the student do?",
            prompt: "What does the advisor recommend the student do?",
            options: ["Register promptly on Thursday morning when enrollment begins.", "Wait until the second week of the semester to register.", "Petition the dean for permission to waive the course.", "Transfer to a different university with fewer science credits."],
            correct: 0,
            explanation: "Pembimbing menyarankan untuk mendaftar segera pada Kamis pagi begitu pendaftaran dibuka karena kelas cepat penuh."
        },
        {
            dialogue: "Narrator: Listen to two students discussing an archaeological excavation project.\nMan: Did you see the photographs from the archaeological dig in northern New Mexico?\nWoman: Yes! The pottery shards they uncovered date back to the eleventh century Ancestral Puebloans.\nMan: What astonished me was the sophisticated subterranean irrigation network they identified beneath the plaza.\nWoman: Exactly; it proves that arid agricultural technology was far more advanced than previous historians assumed.\nNarrator: What did the excavation reveal about the Ancestral Puebloans?",
            audio: "Did you see the photographs from the archaeological dig in northern New Mexico? Yes! The pottery shards they uncovered date back to the eleventh century Ancestral Puebloans. What astonished me was the sophisticated subterranean irrigation network they identified beneath the plaza. Exactly; it proves that arid agricultural technology was far more advanced than previous historians assumed. What did the excavation reveal about the Ancestral Puebloans?",
            prompt: "What did the excavation reveal about the Ancestral Puebloans?",
            options: ["Their agricultural and irrigation engineering was sophisticated.", "They migrated to New Mexico during the nineteenth century.", "They possessed no knowledge of ceramic pottery craft.", "Their civilization collapsed due to plaza flooding."],
            correct: 0,
            explanation: "Penggalian membuktikan adanya jaringan irigasi bawah tanah yang canggih untuk pertanian di daerah gersang."
        },
        {
            dialogue: "Narrator: Continuing the conversation between the two archaeology students.\nMan: Are they continuing the excavation through the winter months?\nWoman: No, the site will be covered with protective geotextile fabric until spring to prevent frost damage to the masonry.\nNarrator: Why will the excavation halt during the winter?",
            audio: "Are they continuing the excavation through the winter months? No, the site will be covered with protective geotextile fabric until spring to prevent frost damage to the masonry. Why will the excavation halt during the winter?",
            prompt: "Why will the excavation halt during the winter?",
            options: ["To protect the fragile ancient masonry from freezing temperatures.", "Because the archaeological excavation team ran out of funding.", "Due to a lack of interest from historical research journals.", "To allow modern tourists to walk across the plaza."],
            correct: 0,
            explanation: "Penggalian dihentikan saat musim dingin untuk melindungi struktur batu bata kuno dari kerusakan akibat pembekuan ('prevent frost damage')."
        },
        {
            dialogue: "Narrator: Listen to a conversation between a student and a campus housing coordinator.\nStudent: Hello, I'm inquiring about single-occupancy dormitory rooms for graduate students next semester.\nCoordinator: We have designated suites in Elm Hall, but they require a housing deposit by November fifteenth.\nStudent: Are meal plans mandatory for residents in Elm Hall?\nCoordinator: No, each suite is equipped with a private kitchenette, so meal plans are entirely optional.\nNarrator: What advantage does Elm Hall offer to graduate students?",
            audio: "Hello, I'm inquiring about single-occupancy dormitory rooms for graduate students next semester. We have designated suites in Elm Hall, but they require a housing deposit by November fifteenth. Are meal plans mandatory for residents in Elm Hall? No, each suite is equipped with a private kitchenette, so meal plans are entirely optional. What advantage does Elm Hall offer to graduate students?",
            prompt: "What advantage does Elm Hall offer to graduate students?",
            options: ["Private kitchenettes allowing optional meal plan participation.", "Free tuition vouchers for all graduate dormitory residents.", "Exemption from paying any security or housing deposits.", "Guaranteed reserved parking directly beneath the building."],
            correct: 0,
            explanation: "Kamar asrama Elm Hall dilengkapi dapur pribadi (kitchenette) sehingga mahasiswa tidak diwajibkan membeli paket makan kampus."
        },
        {
            dialogue: "Narrator: Continuing the housing conversation.\nStudent: That's convenient. Is high-speed fiber-optic internet included in the housing fee?\nCoordinator: Yes, along with all municipal utilities like water, heating, and trash disposal.\nNarrator: What is included in the housing fee for Elm Hall?",
            audio: "That's convenient. Is high-speed fiber-optic internet included in the housing fee? Yes, along with all municipal utilities like water, heating, and trash disposal. What is included in the housing fee for Elm Hall?",
            prompt: "What is included in the housing fee for Elm Hall?",
            options: ["Internet connectivity and all utility services.", "Weekly housekeeping and laundry services.", "Free textbook rentals for the academic year.", "Round-trip airline tickets for university holidays."],
            correct: 0,
            explanation: "Biaya asrama sudah mencakup internet kecepatan tinggi serta semua utilitas (air, pemanas, dan pembuangan sampah)."
        },
        {
            dialogue: "Narrator: Listen to two students discussing a biology lab assignment.\nWoman: Have you managed to cultivate the bacterial samples in the petri dishes yet?\nMan: Yes, but my incubator temperature was set slightly too low, so the colony growth was delayed by twenty-four hours.\nWoman: You should recalibrate the thermostat immediately; otherwise your gram-staining results won't be accurate for Wednesday's lab.\nNarrator: What issue did the man encounter in his experiment?",
            audio: "Have you managed to cultivate the bacterial samples in the petri dishes yet? Yes, but my incubator temperature was set slightly too low, so the colony growth was delayed by twenty-four hours. You should recalibrate the thermostat immediately; otherwise your gram-staining results won't be accurate for Wednesday's lab. What issue did the man encounter in his experiment?",
            prompt: "What issue did the man encounter in his experiment?",
            options: ["Suboptimal incubator temperature retarded bacterial growth.", "He accidentally destroyed all his petri dish specimens.", "The gram-staining dye reacted negatively with the glass.", "The biology laboratory was closed for routine maintenance."],
            correct: 0,
            explanation: "Suhu inkubator yang terlalu rendah menyebabkan pertumbuhan koloni bakteri tertunda 24 jam."
        },
        {
            dialogue: "Narrator: Continuing the biology lab conversation.\nMan: Thanks for the warning; I'll adjust the temperature right now.\nWoman: Also, make sure you take photographs of the agar plates under ultraviolet light for the final report.\nNarrator: What does the woman instruct the man to do for the report?",
            audio: "Thanks for the warning; I'll adjust the temperature right now. Also, make sure you take photographs of the agar plates under ultraviolet light for the final report. What does the woman instruct the man to do for the report?",
            prompt: "What does the woman instruct the man to do for the report?",
            options: ["Photograph the bacterial cultures under ultraviolet light.", "Discard the agar plates without recording any data.", "Write a handwritten summary instead of a lab report.", "Present the petri dishes directly to the department dean."],
            correct: 0,
            explanation: "Wanita mengingatkan pria untuk memotret pelat agar di bawah sinar ultraviolet untuk laporan akhir."
        },
        {
            dialogue: "Narrator: Listen to a discussion between a professor and a student about a missed exam.\nStudent: Professor Chen, I was hospitalized with appendicitis during the midterm examination last week.\nProfessor: I see. I'll need a formal medical discharge note from the hospital administration.\nStudent: I have the verified medical paperwork right here.\nProfessor: Excellent. You may take the make-up examination this Friday at two in my office.\nNarrator: Under what condition will the professor allow the make-up exam?",
            audio: "Professor Chen, I was hospitalized with appendicitis during the midterm examination last week. I see. I'll need a formal medical discharge note from the hospital administration. I have the verified medical paperwork right here. Excellent. You may take the make-up examination this Friday at two in my office. Under what condition will the professor allow the make-up exam?",
            prompt: "Under what condition will the professor allow the make-up exam?",
            options: ["The student provided verified medical documentation.", "The student agrees to accept a twenty percent grade reduction.", "The student writes an additional fifty-page research paper.", "The entire class votes to approve the make-up exam."],
            correct: 0,
            explanation: "Profesor mengizinkan ujian susulan setelah mahasiswa menunjukkan surat keterangan medis resmi dari rumah sakit."
        },
        {
            dialogue: "Narrator: Continuing the discussion with Professor Chen.\nStudent: Will the make-up examination cover the same chapters as the original test?\nProfessor: The conceptual topics will be identical, covering chapters one through six, but the analytical essay prompts will be different.\nNarrator: How will the make-up examination differ from the original?",
            audio: "Will the make-up examination cover the same chapters as the original test? The conceptual topics will be identical, covering chapters one through six, but the analytical essay prompts will be different. How will the make-up examination differ from the original?",
            prompt: "How will the make-up examination differ from the original?",
            options: ["The specific essay prompts will be different.", "The examination will only test multiple choice questions.", "It will cover twelve chapters instead of six.", "The test duration will be shortened to fifteen minutes."],
            correct: 0,
            explanation: "Topik konseptual sama (bab 1-6), namun soal esai analitisnya akan berbeda dari ujian asli."
        },

        // Part C: Academic Talks & Mini-Lectures (41 - 50)
        {
            dialogue: "Narrator: Listen to part of a lecture in a Geology class.\nProfessor: Today we are examining tectonic subduction zones, specifically the Cascadia Subduction Zone off the Pacific Northwest coast. Here, the denser oceanic Juan de Fuca Plate is forced beneath the lighter continental North American Plate. This geological process does not occur smoothly; rather, friction causes the plates to lock together, accumulating immense elastic strain over centuries. When this accumulated stress finally overcomes frictional resistance, a megathrust earthquake occurs.\nNarrator: What causes the tectonic plates to lock together?",
            audio: "Today we are examining tectonic subduction zones, specifically the Cascadia Subduction Zone off the Pacific Northwest coast. Here, the denser oceanic Juan de Fuca Plate is forced beneath the lighter continental North American Plate. This geological process does not occur smoothly; rather, friction causes the plates to lock together, accumulating immense elastic strain over centuries. When this accumulated stress finally overcomes frictional resistance, a megathrust earthquake occurs. What causes the tectonic plates to lock together?",
            prompt: "What causes the tectonic plates to lock together?",
            options: ["Friction between the colliding oceanic and continental plates.", "Rapid cooling of volcanic magma beneath ocean trenches.", "The gravitational pull of celestial bodies during winter.", "Atmospheric pressure fluctuations along the coastline."],
            correct: 0,
            explanation: "Dosen menjelaskan bahwa gesekan (friction) antara lempeng samudera dan lempeng benua menyebabkan lempeng saling terkunci dan menimbun regangan elastis."
        },
        {
            dialogue: "Narrator: Continuing the geology lecture.\nProfessor: Geologists have discovered empirical evidence of past megathrust events by examining ghost forests—stands of western red cedar trees that died suddenly when coastal land subsided and saltwater inundated their root systems. Radiocarbon dating of these submerged tree rings indicates that the last major Cascadia rupture occurred in January of 1700.\nNarrator: How do ghost forests provide evidence of ancient earthquakes?",
            audio: "Geologists have discovered empirical evidence of past megathrust events by examining ghost forests—stands of western red cedar trees that died suddenly when coastal land subsided and saltwater inundated their root systems. Radiocarbon dating of these submerged tree rings indicates that the last major Cascadia rupture occurred in January of 1700. How do ghost forests provide evidence of ancient earthquakes?",
            prompt: "How do ghost forests provide evidence of ancient earthquakes?",
            options: ["Their tree rings show sudden mortality from coastal saltwater inundation.", "The trees were burned down by ancient volcanic eruptions.", "Fossilized pollen proves that the climate abruptly cooled.", "The trees were chopped down by prehistoric indigenous hunters."],
            correct: 0,
            explanation: "'Ghost forests' membuktikan gempa purba karena tanah pesisir tiba-tiba amblas dan air laut membanjiri perakaran pohon cedar hingga mati seketika."
        },
        {
            dialogue: "Narrator: Listen to part of a lecture in an Astronomy class.\nProfessor: Pulsars were initially discovered in 1967 by Jocelyn Bell Burnell, who detected rapid, highly regular pulses of radio waves repeating every 1.33 seconds. Initially, some astronomers playfully hypothesized that these signals might be transmissions from extraterrestrial intelligence, dubbing the source LGM-1 for 'Little Green Men'. However, subsequent theoretical astrophysics revealed that pulsars are rapidly rotating neutron stars—the ultradense remnants of supernova explosions.\nNarrator: What is a pulsar?",
            audio: "Pulsars were initially discovered in 1967 by Jocelyn Bell Burnell, who detected rapid, highly regular pulses of radio waves repeating every 1.33 seconds. Initially, some astronomers playfully hypothesized that these signals might be transmissions from extraterrestrial intelligence, dubbing the source LGM-1 for Little Green Men. However, subsequent theoretical astrophysics revealed that pulsars are rapidly rotating neutron stars—the ultradense remnants of supernova explosions. What is a pulsar?",
            prompt: "What is a pulsar?",
            options: ["A rapidly spinning, ultradense neutron star remnant of a supernova.", "An artificial communication satellite built by early astronomers.", "A terrestrial radio station broadcasting high-frequency waves.", "A distant planet with an atmosphere composed of liquid methane."],
            correct: 0,
            explanation: "Pulsar adalah bintang neutron yang berputar sangat cepat dan sangat padat, sisa dari ledakan supernova."
        },
        {
            dialogue: "Narrator: Continuing the astronomy lecture on pulsars.\nProfessor: As the neutron star spins, its powerful magnetic field funnels radiation into intense beams that sweep across space like the beam of a maritime lighthouse. We only detect the periodic pulses if Earth happens to lie directly in the path of the beam.\nNarrator: Why does a pulsar appear to pulse from Earth's vantage point?",
            audio: "As the neutron star spins, its powerful magnetic field funnels radiation into intense beams that sweep across space like the beam of a maritime lighthouse. We only detect the periodic pulses if Earth happens to lie directly in the path of the beam. Why does a pulsar appear to pulse from Earth's vantage point?",
            prompt: "Why does a pulsar appear to pulse from Earth's vantage point?",
            options: ["Its radiation beam periodically sweeps across Earth like a lighthouse.", "The star physical expands and contracts in regular cycles.", "Interstellar dust clouds periodically block the light from view.", "The star turns its magnetic field on and off every few seconds."],
            correct: 0,
            explanation: "Pulsar tampak berkedip karena pancaran radiasinya berputar menyapu ruang angkasa mirip lentera mercusuar ('sweeps like a lighthouse')."
        },
        {
            dialogue: "Narrator: Listen to part of a lecture in an Art History class.\nProfessor: During the Italian Renaissance, the development of linear perspective transformed European painting from flat, two-dimensional iconographic representations into spatial, illusionistic three-dimensional spaces. Pioneered by architect Filippo Brunelleschi in the early fifteenth century, linear perspective utilizes mathematical principles based on a single vanishing point located on the horizon line, where all parallel orthogonal lines appear to converge.\nNarrator: What primary innovation did Brunelleschi develop?",
            audio: "During the Italian Renaissance, the development of linear perspective transformed European painting from flat, two-dimensional iconographic representations into spatial, illusionistic three-dimensional spaces. Pioneered by architect Filippo Brunelleschi in the early fifteenth century, linear perspective utilizes mathematical principles based on a single vanishing point located on the horizon line, where all parallel orthogonal lines appear to converge. What primary innovation did Brunelleschi develop?",
            prompt: "What primary innovation did Brunelleschi develop?",
            options: ["The mathematical framework for linear perspective in art.", "The invention of oil-based pigments and varnishes.", "The creation of stained glass windows for medieval cathedrals.", "The introduction of abstract geometric expressionism."],
            correct: 0,
            explanation: "Filippo Brunelleschi memelopori prinsip matematika perspektif linear pada awal abad ke-15."
        },
        {
            dialogue: "Narrator: Continuing the art history lecture.\nProfessor: By establishing the vanishing point directly at the viewer's eye level, Renaissance painters were able to create an unprecedented sense of architectural depth and realistic human proportion, drawing the spectator directly into the narrative space of the fresco.\nNarrator: What effect did the vanishing point have on Renaissance painting?",
            audio: "By establishing the vanishing point directly at the viewer's eye level, Renaissance painters were able to create an unprecedented sense of architectural depth and realistic human proportion, drawing the spectator directly into the narrative space of the fresco. What effect did the vanishing point have on Renaissance painting?",
            prompt: "What effect did the vanishing point have on Renaissance painting?",
            options: ["It created a convincing illusion of depth and realistic spatial proportion.", "It made all religious figures appear flat and two-dimensional.", "It eliminated the need for artists to study human anatomy.", "It darkened the pigments so paintings resisted decay."],
            correct: 0,
            explanation: "Titik lenyap (vanishing point) menciptakan ilusi kedalaman ruang dan proporsi manusia yang sangat realistis."
        },
        {
            dialogue: "Narrator: Listen to part of a lecture in an Ecology class.\nProfessor: Wetland ecosystems are frequently characterized as the kidneys of the landscape because of their remarkable capacity to filter waterborne contaminants. When agricultural runoff containing excess synthetic fertilizers enters a freshwater wetland, aquatic vegetation like cattails and reeds slows the water velocity, allowing suspended sediments to settle out. Simultaneously, subterranean anaerobic bacteria in the hydric soils facilitate denitrification, converting harmful nitrate ions into inert nitrogen gas.\nNarrator: Why are wetlands compared to kidneys?",
            audio: "Wetland ecosystems are frequently characterized as the kidneys of the landscape because of their remarkable capacity to filter waterborne contaminants. When agricultural runoff containing excess synthetic fertilizers enters a freshwater wetland, aquatic vegetation like cattails and reeds slows the water velocity, allowing suspended sediments to settle out. Simultaneously, subterranean anaerobic bacteria in the hydric soils facilitate denitrification, converting harmful nitrate ions into inert nitrogen gas. Why are wetlands compared to kidneys?",
            prompt: "Why are wetlands compared to kidneys?",
            options: ["They filter and eliminate contaminants and excess nutrients from water.", "They produce large quantities of digestive enzymes.", "They are shaped identically to human internal organs.", "They require artificial filtration systems to remain functional."],
            correct: 0,
            explanation: "Lahan basah diibaratkan ginjal lanskap karena kemampuannya menyaring polutan dan zat hara berlebih dari air limbah pertanian."
        },
        {
            dialogue: "Narrator: Continuing the ecology lecture.\nProfessor: Unfortunately, more than fifty percent of coastal and inland wetlands in the United States have been drained or filled in over the past century for urban sprawl and industrial agriculture, leading to diminished groundwater recharge and increased severity of downstream floods.\nNarrator: What is one negative consequence of wetland destruction mentioned by the professor?",
            audio: "Unfortunately, more than fifty percent of coastal and inland wetlands in the United States have been drained or filled in over the past century for urban sprawl and industrial agriculture, leading to diminished groundwater recharge and increased severity of downstream floods. What is one negative consequence of wetland destruction mentioned by the professor?",
            prompt: "What is one negative consequence of wetland destruction mentioned by the professor?",
            options: ["Increased severity of downstream flooding and reduced aquifer recharge.", "A rapid increase in total freshwater reserves worldwide.", "Complete elimination of agricultural fertilizer runoff.", "Accelerated growth of native aquatic plant species."],
            correct: 0,
            explanation: "Kehancuran lahan basah menyebabkan banjir bandang hilir yang lebih parah dan berkurangnya pengisian ulang air tanah (aquifer recharge)."
        },
        {
            dialogue: "Narrator: Listen to part of a lecture in an American History class.\nProfessor: The Erie Canal, completed in 1825, was one of the most transformative engineering feats in early American economic history. Spanning three hundred and sixty-three miles across New York state from Albany on the Hudson River to Buffalo on Lake Erie, it connected the agricultural resources of the Great Lakes interior directly with the Atlantic port of New York City. Prior to the canal, shipping a ton of grain from Buffalo to New York cost nearly one hundred dollars and required three weeks; the canal reduced the cost to under ten dollars and shortened transit to six days.\nNarrator: What was the primary economic consequence of the Erie Canal?",
            audio: "The Erie Canal, completed in 1825, was one of the most transformative engineering feats in early American economic history. Spanning three hundred and sixty-three miles across New York state from Albany on the Hudson River to Buffalo on Lake Erie, it connected the agricultural resources of the Great Lakes interior directly with the Atlantic port of New York City. Prior to the canal, shipping a ton of grain from Buffalo to New York cost nearly one hundred dollars and required three weeks; the canal reduced the cost to under ten dollars and shortened transit to six days. What was the primary economic consequence of the Erie Canal?",
            prompt: "What was the primary economic consequence of the Erie Canal?",
            options: ["It dramatically reduced shipping costs and transit duration for interior commodities.", "It bankrupted the municipal government of New York City.", "It halted all commercial trade across the Atlantic Ocean.", "It made railroad transportation the exclusive method of freight shipping."],
            correct: 0,
            explanation: "Kanal Erie memotong biaya angkut gandum dari $100 menjadi kurang dari $10 per ton dan memangkas waktu kirim dari 3 minggu menjadi 6 hari."
        },
        {
            dialogue: "Narrator: Continuing the American history lecture on the Erie Canal.\nProfessor: The resulting surge in commercial traffic cemented New York City's status as the preeminent financial metropolis of the United States, eclipsing rivals like Philadelphia, Boston, and Baltimore in maritime shipping volume.\nNarrator: How did the Erie Canal impact New York City's commercial standing?",
            audio: "The resulting surge in commercial traffic cemented New York City's status as the preeminent financial metropolis of the United States, eclipsing rivals like Philadelphia, Boston, and Baltimore in maritime shipping volume. How did the Erie Canal impact New York City's commercial standing?",
            prompt: "How did the Erie Canal impact New York City's commercial standing?",
            options: ["It established New York City as the nation's foremost commercial metropolis.", "It caused Philadelphia to surpass New York in total maritime trade.", "It forced New York banks to relocate to the Midwest.", "It discouraged European immigrants from arriving at New York harbor."],
            correct: 0,
            explanation: "Lonjakan perdagangan menetapkan status Kota New York sebagai kota metropolitan perdagangan dan finansial terdepan di Amerika Serikat."
        }
    ];

    // ----------------------------------------------------------------
    // SECTION 2: 50 UNIQUE STRUCTURE QUESTIONS
    // ----------------------------------------------------------------
    const structureQuestionsA = [
        {
            p: "___ in the upper atmosphere, cirrus clouds consist predominantly of ice crystals rather than liquid water droplets.",
            opts: ["Forming at extremely high altitudes", "They form at extremely high altitudes", "Extremely high altitudes are where they form", "That high altitudes form"],
            ans: 0,
            exp: "Participial phrase modifier: 'Forming at extremely high altitudes' menerangkan cirrus clouds tanpa subjek ganda."
        },
        {
            p: "Not until the invention of the electron microscope in 1931 ___ to observe the intricate internal structures of individual viruses.",
            opts: ["were scientists able", "scientists were able", "scientists could", "did scientists had ability"],
            ans: 0,
            exp: "Inversi negatif 'Not until': Not until + time + auxiliary verb (were) + subject (scientists) + able."
        },
        {
            p: "The discovery of gold in California in 1848 triggered ___ thousands of prospectors from around the globe.",
            opts: ["an unprecedented migration of", "an migration unprecedented of", "unprecedented migrating", "migration that unprecedented"],
            ans: 0,
            exp: "Pola Noun Phrase: article (an) + adjective (unprecedented) + noun (migration) + of."
        },
        {
            p: "___ by ocean currents and wind patterns, maritime climates generally experience milder temperature fluctuations than continental climates.",
            opts: ["Moderated", "Moderating", "To moderate", "They are moderated"],
            ans: 0,
            exp: "Past Participle pasif: 'Moderated by ocean currents...' (Dimoderasi oleh arus laut)."
        },
        {
            p: "Rarely ___ such dramatic fluctuations in atmospheric pressure within a single twenty-four-hour period.",
            opts: ["do meteorologists record", "meteorologists record", "meteorologists are recording", "recorded meteorologists"],
            ans: 0,
            exp: "Inversi dengan adverb negatif 'Rarely': Rarely + auxiliary (do) + subject (meteorologists) + verb (record)."
        },
        {
            p: "A pride of lions, together with several scavenging hyenas, ___ observed near the watering hole yesterday morning.",
            opts: ["was", "were", "are", "have been"],
            ans: 0,
            exp: "Subjek utama adalah 'A pride' (tunggal), abaikan 'together with'. Maka to be lampau adalah 'was'."
        },
        {
            p: "The committee insisted that the chief financial officer ___ a comprehensive report before the annual shareholders meeting.",
            opts: ["submit", "submits", "submitted", "will submit"],
            ans: 0,
            exp: "Subjunctive Mood: kata kerja wajib bare infinitive tanpa -s: 'submit'."
        },
        {
            p: "Only after extensive geological mapping ___ that the dormant fault line posed a significant seismic hazard.",
            opts: ["did researchers realize", "researchers realized", "realized researchers", "researchers did realize"],
            ans: 0,
            exp: "Inversi 'Only after': Only after + noun + auxiliary (did) + subject (researchers) + verb (realize)."
        },
        {
            p: "The greater the pressure exerted on a gas at a constant temperature, ___ its volume becomes.",
            opts: ["the smaller", "smaller", "it is smaller", "the smallest"],
            ans: 0,
            exp: "Double Comparative: 'The greater the pressure..., THE SMALLER its volume becomes'."
        },
        {
            p: "Neither the proposed budget allocation nor the alternate funding strategies ___ approved by the board.",
            opts: ["were", "was", "is", "be"],
            ans: 0,
            exp: "Pada 'Neither... nor...', kata kerja mengikuti subjek kedua: 'alternate funding strategies' (jamak), gunakan 'were'."
        },
        {
            p: "Photosynthesis is the process ___ green plants transform sunlight into cellular chemical energy.",
            opts: ["by which", "which", "that", "whereby in"],
            ans: 0,
            exp: "Relative pronoun dengan preposisi: 'the process by which plants transform...'."
        },
        {
            p: "Superconductors are materials that conduct electrical current with zero resistance ___ to cryogenic temperatures.",
            opts: ["when cooled", "cooling", "when they cooling", "cooled they"],
            ans: 0,
            exp: "Reduced adverbial clause: 'when [they are] cooled' menjadi 'when cooled'."
        },
        {
            p: "The ancient Maya developed an accurate solar calendar, ___ architectural monuments aligned with equinoxes.",
            opts: ["as well as", "and also they", "as well", "such as"],
            ans: 0,
            exp: "Conjunctive phrase: 'as well as architectural monuments...'."
        },
        {
            p: "Coronal mass ejections from the sun can disrupt satellite transmissions ___ terrestrial power grids.",
            opts: ["as well as damage", "and also damaging", "as well damage", "damaging also"],
            ans: 0,
            exp: "Parallelism: 'disrupt [verb] satellite transmissions as well as damage [verb] terrestrial grids'."
        },
        {
            p: "Deciduous trees conserve moisture during freezing winter months by ___ their broad leaves in late autumn.",
            opts: ["shedding", "shed", "to shed", "having shed"],
            ans: 0,
            exp: "Setelah preposisi 'by', gunakan gerund (V-ing): 'by shedding'."
        },
        {
            p: "Acoustic engineers adjust wall angles in concert halls ___ reverberation times remain optimal for symphonic performances.",
            opts: ["so that", "in order", "because of", "such that"],
            ans: 0,
            exp: "Conjunction tujuan/sebab-akibat: 'so that' diikuti klausa lengkap (subject + verb)."
        },
        {
            p: "Deep oceanic trenches are formed at convergent boundaries where one tectonic plate ___ beneath another.",
            opts: ["subducts", "subduct", "subducting", "is subduct"],
            ans: 0,
            exp: "Klausa subjek tunggal 'one tectonic plate' membutuhkan kata kerja berakhiran -s: 'subducts'."
        },
        {
            p: "Polymer synthesis requires precise temperature regulation, ___ the molecular chains will cross-link prematurely.",
            opts: ["otherwise", "despite", "although", "in spite of"],
            ans: 0,
            exp: "'Otherwise' (jika tidak) menghubungkan dua klausa independen dengan makna pengandaian konsekuensi."
        },
        {
            p: "Glacial moraines are linear ridges of boulders and gravel ___ by advancing and retreating glaciers.",
            opts: ["deposited", "depositing", "they deposited", "were deposited"],
            ans: 0,
            exp: "Past participle modifier: 'ridges of boulders deposited by glaciers'."
        },
        {
            p: "Radio telescopes collect electromagnetic radiation using massive curved dishes ___ focus radio waves onto a central receiver.",
            opts: ["that", "whom", "where", "what"],
            ans: 0,
            exp: "Relative pronoun subjek untuk benda (dishes): gunakan 'that'."
        },
        {
            p: "An adaptive immune response occurs when lymphocytes ___ specific antigens on invading pathogens.",
            opts: ["recognize", "recognizes", "recognizing", "are recognize"],
            ans: 0,
            exp: "Subjek jamak 'lymphocytes' menggunakan bentuk kata kerja dasar: 'recognize'."
        },
        {
            p: "Volcanic basalt cools rapidly when exposed to seawater, ___ fine-grained crystalline mineral textures.",
            opts: ["producing", "produced", "produce", "to produce"],
            ans: 0,
            exp: "Present participle showing result: 'producing fine-grained textures'."
        },
        {
            p: "Renaissance artists utilized chiaroscuro, ___ the dramatic contrast between light and dark, to enhance visual volume.",
            opts: ["meaning", "which it means", "it is", "means"],
            ans: 0,
            exp: "Appositive participle: 'chiaroscuro, meaning the dramatic contrast...'."
        },
        {
            p: "A single genetic nucleotide substitution can alter an organism's phenotype, ___ demonstrated by sickle cell anemia.",
            opts: ["as", "like", "such", "so"],
            ans: 0,
            exp: "Pola komparatif formal TOEFL: 'as demonstrated by...'."
        },
        {
            p: "Hydrothermal vent ecosystems survive in the absolute absence of sunlight, ___ on chemical energy synthesized by bacteria.",
            opts: ["relying", "rely", "relied", "reliance"],
            ans: 0,
            exp: "Participial modifier: 'relying on chemical energy synthesized by bacteria'."
        }
    ];

    const structureQuestionsB = [
        {
            sent: "The [A: rapid] development of renewable energy sources [B: have prompted] global leaders to reassess their [C: long-term] commitments to [D: reducing] greenhouse gas emissions.",
            opts: ["A: rapid", "B: have prompted", "C: long-term", "D: reducing"],
            ans: 1,
            exp: "Subjek utama adalah 'The rapid development' (tunggal), maka kata kerja yang benar adalah 'has prompted', bukan 'have prompted'."
        },
        {
            sent: "Although [A: both] graphite and diamond are composed [B: entirely] of pure carbon, their atomic structures differ [C: significant] in terms of hardness and electrical [D: conductivity].",
            opts: ["A: both", "B: entirely", "C: significant", "D: conductivity"],
            ans: 2,
            exp: "Kata kerja 'differ' wajib diterangkan oleh kata keterangan (adverb): 'significantly', bukan kata sifat 'significant'."
        },
        {
            sent: "Neither the [A: lead] architect nor the construction [B: engineers] [C: was] satisfied with the structural stability of the [D: proposed] foundation.",
            opts: ["A: lead", "B: engineers", "C: was", "D: proposed"],
            ans: 2,
            exp: "Pada 'Neither... nor...', kata kerja mengikuti subjek terdekat yaitu 'the construction engineers' (jamak), sehingga to be yang benar adalah 'were'."
        },
        {
            sent: "The committee [A: recommended] that the university [B: expands] its postgraduate research facilities to accommodate [C: incoming] doctoral [D: candidates].",
            opts: ["A: recommended", "B: expands", "C: incoming", "D: candidates"],
            ans: 1,
            exp: "Subjunctive mood: setelah 'recommended that', kata kerja wajib bare infinitive tanpa -s: 'expand', bukan 'expands'."
        },
        {
            sent: "During the seventeenth century, Amsterdam [A: became] one of the most [B: wealth] commercial hubs in Europe due to [C: flourishing] maritime [D: trade].",
            opts: ["A: became", "B: wealth", "C: flourishing", "D: trade"],
            ans: 1,
            exp: "Superlative memerlukan kata sifat: 'the most wealthy', bukan kata benda 'wealth'."
        },
        {
            sent: "The research team [A: laid] on the laboratory floor [B: to rest] after [C: completing] twenty hours of continuous data [D: collection].",
            opts: ["A: laid", "B: to rest", "C: completing", "D: collection"],
            ans: 0,
            exp: "Jebakan Lie vs Lay: Bentuk lampau dari Lie (berbaring tanpa objek) adalah LAY. Seharusnya: 'lay on the floor'."
        },
        {
            sent: "Because the water level [A: raised] rapidly after the cloudburst, the residents [B: evacuated] their homes [C: with] utmost [D: urgency].",
            opts: ["A: raised", "B: evacuated", "C: with", "D: urgency"],
            ans: 0,
            exp: "Jebakan Rise vs Raise: Air naik dengan sendirinya (intransitive), bentuk lampaunya adalah 'rose', bukan 'raised'."
        },
        {
            sent: "The economic data [A: was collected] by the census bureau [B: indicate] that consumer spending [C: has dropped] [D: significantly].",
            opts: ["A: was collected", "B: indicate", "C: has dropped", "D: significantly"],
            ans: 0,
            exp: "Reduced relative clause: 'The economic data collected by the census bureau indicate...'. Hapus 'was'."
        },
        {
            sent: "Each of the [A: fifty] states in the Union [B: have] its own [C: state constitution] and distinct legislative [D: body].",
            opts: ["A: fifty", "B: have", "C: state constitution", "D: body"],
            ans: 1,
            exp: "Subjek kalimat adalah 'Each' (tunggal). Kata kerja yang benar adalah 'has', bukan 'have'."
        },
        {
            sent: "The ozone layer [A: protects] terrestrial organisms from ultraviolet radiation by [B: absorbs] high-energy photons emitted [C: by the] [D: sun].",
            opts: ["A: protects", "B: absorbs", "C: by the", "D: sun"],
            ans: 1,
            exp: "Setelah preposisi (by), kata kerja wajib berbentuk gerund (-ing): 'by absorbing', bukan 'by absorbs'."
        },
        {
            sent: "A flock of migrating Canadian geese [A: fly] in a V-formation [B: to conserve] aerodynamic energy [C: during] long [D: flights].",
            opts: ["A: fly", "B: to conserve", "C: during", "D: flights"],
            ans: 0,
            exp: "Subjek utama adalah 'A flock' (kolektif tunggal), maka kata kerjanya adalah 'flies', bukan 'fly'."
        },
        {
            sent: "The suspension bridge was [A: designed] to withstand hurricane-force winds, but its cables were [B: durably] tested by [C: unexpected] vibrational [D: resonance].",
            opts: ["A: designed", "B: durably", "C: unexpected", "D: resonance"],
            ans: 1,
            exp: "Kata keterangan yang tepat untuk menerangkan pengujian adalah 'severely' atau 'durably' diganti kata keterangan intensitas."
        },
        {
            sent: "The scientific hypothesis [A: proposed] by Dr. Martinez [B: are] supported by empirical data [C: gathered] during three [D: polar expeditions].",
            opts: ["A: proposed", "B: are", "C: gathered", "D: polar expeditions"],
            ans: 1,
            exp: "Subjek adalah 'The scientific hypothesis' (tunggal, bentuk jamaknya adalah hypotheses). Maka to be yang benar adalah 'is', bukan 'are'."
        },
        {
            sent: "The Amazon basin is one of the most [A: dense] populated ecological zones [B: in terms of] insect species [C: living] in the canopy [D: layers].",
            opts: ["A: dense", "B: in terms of", "C: living", "D: layers"],
            ans: 0,
            exp: "Kata sifat 'populated' harus diterangkan oleh kata keterangan (adverb): 'densely populated', bukan 'dense'."
        },
        {
            sent: "The philharmonic orchestra played the overture so [A: masterful] that the audience [B: gave] a ten-minute standing [C: ovation] at the end of the [D: performance].",
            opts: ["A: masterful", "B: gave", "C: ovation", "D: performance"],
            ans: 0,
            exp: "Kata kerja 'played' harus dimodifikasi oleh adverb: 'so masterfully', bukan adjective 'masterful'."
        },
        {
            sent: "Dr. Thorne [A: has published] his seminal paper on quantum entanglement [B: in 1985], which [C: earned] him international [D: acclaim].",
            opts: ["A: has published", "B: in 1985", "C: earned", "D: acclaim"],
            ans: 0,
            exp: "Waktu lampau spesifik ('in 1985') mewajibkan Simple Past: 'published', bukan Present Perfect 'has published'."
        },
        {
            sent: "The computational algorithm operates [A: remarkably] [B: rapid] when processing massive [C: astronomical] datasets from deep-space [D: observatories].",
            opts: ["A: remarkably", "B: rapid", "C: astronomical", "D: observatories"],
            ans: 1,
            exp: "Kata kerja 'operates' harus dimodifikasi oleh adverb: 'rapidly', bukan adjective 'rapid'."
        },
        {
            sent: "The rate at which the polar ice caps are [A: melted] has alarmed glaciologists [B: because] rising sea levels [C: threaten] coastal [D: cities].",
            opts: ["A: melted", "B: because", "C: threaten", "D: cities"],
            ans: 0,
            exp: "Proses yang sedang berlangsung aktif: 'are melting', bukan bentuk pasif 'are melted'."
        },
        {
            sent: "The solar eclipse provided astronomers with an [A: unprecedented] opportunity to examine the [B: visible] of the sun's outer [C: corona] during totality [D: conditions].",
            opts: ["A: unprecedented", "B: visible", "C: corona", "D: conditions"],
            ans: 1,
            exp: "Setelah artikel 'the', diperlukan kata benda (noun): 'visibility', bukan kata sifat 'visible'."
        },
        {
            sent: "A team of dedicated marine biologists [A: conducts] daily surveys [B: to monitor] coral bleaching [C: along] the Great Barrier [D: Reef].",
            opts: ["A: conducts", "B: to monitor", "C: along", "D: Reef"],
            ans: 0,
            exp: "Subjek utama adalah 'A team' (tunggal), namun dalam konteks aksi individu jamak atau subjek majemuk 'conduct' sering diperdebatkan. Di TOEFL 'A team ... conducts' benar. Di sini: kata benda majemuk 'surveys'."
        },
        {
            sent: "The medieval manuscripts were [A: careful] restored by conservators [B: who] used specialized infrared scanning [C: to detect] faded [D: ink].",
            opts: ["A: careful", "B: who", "C: to detect", "D: ink"],
            ans: 0,
            exp: "Kata kerja pasif 'were restored' harus dimodifikasi oleh adverb: 'carefully restored', bukan adjective 'careful'."
        },
        {
            sent: "The bacterial cultures in the incubator [A: is thriving] [B: despite] the presence of mild antibiotic compounds [C: added] to the growth [D: medium].",
            opts: ["A: is thriving", "B: despite", "C: added", "D: medium"],
            ans: 0,
            exp: "Subjek adalah 'The bacterial cultures' (jamak), maka to be yang benar adalah 'are thriving', bukan 'is thriving'."
        },
        {
            sent: "Desert xerophytes [A: adapts] to arid environments by storing water in specialized [B: tissues] and developing extensive [C: root] [D: systems].",
            opts: ["A: adapts", "B: tissues", "C: root", "D: systems"],
            ans: 0,
            exp: "Subjek jamak 'Desert xerophytes' harus berpasangan dengan kata kerja bentuk dasar: 'adapt', tanpa -s."
        },
        {
            sent: "The concert hall was [A: exceptional] designed to disperse sound waves evenly [B: without] creating acoustic dead zones [C: in the] upper [D: balcony].",
            opts: ["A: exceptional", "B: without", "C: in the", "D: balcony"],
            ans: 0,
            exp: "Kata sifat 'designed' harus dimodifikasi oleh adverb: 'exceptionally designed', bukan adjective 'exceptional'."
        },
        {
            sent: "The trajectory of interplanetary space probes [A: depend] heavily upon gravitational assists [B: provided] by the orbital motion [C: of giant] gas [D: planets].",
            opts: ["A: depend", "B: provided", "C: of giant", "D: planets"],
            ans: 0,
            exp: "Subjek intinya adalah 'The trajectory' (tunggal), abaikan 'of interplanetary space probes'. Kata kerja yang benar adalah 'depends', bukan 'depend'."
        }
    ];

    // ----------------------------------------------------------------
    // SECTION 3: 50 UNIQUE READING QUESTIONS ACROSS 5 PASSAGES
    // ----------------------------------------------------------------
    const readingPassages = [
        {
            title: "Text 1: The Enigma of Deep-Sea Bioluminescence",
            text: `In the abyssal depths of the oceanic bathypelagic zone, where sunlight cannot penetrate, more than ninety percent of marine creatures have evolved the capacity for bioluminescence—the emission of cold light generated through an internal biochemical reaction. This phenomenon typically occurs when a substrate called luciferin reacts with oxygen in the presence of an enzyme known as luciferase, releasing photons with extraordinary thermodynamic efficiency.\n\nUnlike artificial incandescent lighting, which expends the vast majority of its energy as thermal heat, bioluminescence produces almost no heat, preventing cellular damage to fragile deep-sea organisms. Marine species exploit this luminescence for a myriad of evolutionary advantages. Predators, such as the anglerfish, suspend an illuminated lure directly above their jaws to entice unsuspecting prey in the pitch-black water. Conversely, prey organisms utilize counterillumination—emitting light from photophores along their ventral surfaces to match the faint downwelling light from the surface, effectively rendering their silhouettes invisible to predators lurking below.\n\nFurthermore, bioluminescent flashes serve as pivotal communication signals. Certain species of ostracods and lanternfish produce distinctive pulse frequencies to attract prospective mates, a critical reproductive mechanism in an environment devoid of landmarks or seasonal illumination cues.`
        },
        {
            title: "Text 2: The Evolution of Cuneiform and Written Language",
            text: `The emergence of written language in ancient Mesopotamia around 3200 BCE marked a monumental transition in human civilization. Originating in the Sumerian city-state of Uruk, early writing developed not as an expressive literary medium, but as an administrative tool necessitated by complex urban commerce. Temple accountants required an indelible method to track grain inventories, livestock transactions, and tax obligations across expanding metropolitan populations.\n\nInitial record-keeping utilized three-dimensional clay tokens, which were eventually impressed into flat clay tablets as pictographic representations. Over several centuries, scribes simplified these curved pictorial signs into stylized, wedge-shaped impressions pressed into wet clay with a sharpened reed stylus—a script modern scholars designate as cuneiform, derived from the Latin word cuneus, meaning wedge.\n\nAs cuneiform evolved, it underwent phonetization: symbols that originally depicted tangible objects began representing phonetic syllables. This abstraction enabled scribes to record not merely tangible commodities, but abstract philosophical treatises, royal legal codes such as the Code of Hammurabi, and epic mythology, including the Epic of Gilgamesh.`
        },
        {
            title: "Text 3: Plate Tectonics and Continental Drift",
            text: `The theory of plate tectonics, synthesized in the late 1960s, revolutionized the earth sciences by providing a unified model for seismicity, volcanism, and mountain formation. Building upon Alfred Wegener's 1912 hypothesis of continental drift—which had been initially dismissed by geologists due to the lack of an identifiable driving mechanism—modern plate tectonics demonstrated that the Earth's rigid lithosphere is fractured into numerous dynamic plates that glide across the semi-plastic asthenosphere beneath.\n\nThe definitive breakthrough arrived through paleomagnetic surveys of the seafloor during the post-World War II era. Oceanographic vessels revealed alternating symmetrical stripes of normal and reversed magnetic polarity parallel to mid-ocean ridges. This magnetic striping furnished indisputable empirical evidence for seafloor spreading: molten basalt magma continuously wells up at divergent plate boundaries, solidifies, and records the Earth's geomagnetic reversals before being pushed laterally aside.\n\nWhere oceanic plates collide with lighter continental plates at convergent boundaries, subduction occurs. The denser oceanic plate is thrust into the mantle, forming deep ocean trenches and melting to produce volcanic mountain ranges along continental margins.`
        },
        {
            title: "Text 4: Solar Flares and the Earth's Magnetosphere",
            text: `Solar flares are colossal explosive eruptions occurring in the Sun's atmosphere, releasing energy equivalent to millions of hydrogen bombs detonating simultaneously. Triggered by intense magnetic reconnection in regions of localized sunspot activity, flares accelerate charged electrons and protons into interplanetary space and emit electromagnetic radiation spanning from gamma rays to long radio waves.\n\nWhen accompanied by coronal mass ejections (CMEs)—gigantic bubbles of magnetized plasma ejected into the solar wind—these energetic solar particles can interact violently with Earth's magnetosphere approximately two to three days later. The magnetosphere, an invisible protective cavity formed by the Earth's molten core dynamo, deflects the vast majority of incoming ionized radiation.\n\nHowever, severe geomagnetic storms occur when the interplanetary magnetic field reconnects with the Earth's field. The resulting flux of charged particles into polar upper atmospheres excites atmospheric oxygen and nitrogen atoms, generating the mesmerizing auroral displays known as the Northern and Southern Lights. Concurrently, these induced currents can overwhelm terrestrial electrical power grids, saturate transoceanic fiber-optic cables, and induce catastrophic operational anomalies in orbital telecommunication satellites.`
        },
        {
            title: "Text 5: The Renaissance Printing Revolution",
            text: `Johannes Gutenberg's development of the movable metal type printing press in Mainz, Germany, around 1440 catalyzed one of the most profound cultural transformations in European history. Prior to Gutenberg, books were laboriously transcribed by hand by monastic scribes—a protracted, expensive process that restricted literacy and textual ownership to a minuscule aristocratic and ecclesiastical elite.\n\nGutenberg's breakthrough lay not in a single invention, but in the ingenious synthesis of several technologies: durable metal alloy type cast from precision matrices, oil-based ink capable of adhering to metal type, and an adapted wooden screw press modeled after agricultural grape presses. The resulting ability to mass-produce standardized texts with unprecedented velocity dramatically reduced the cost of books.\n\nWithin five decades, over twenty million volumes were printed across Europe, a phenomenon historians describe as the print revolution. The dissemination of printed literature democratized knowledge, stimulated scientific inquiry by standardizing diagrams and mathematical tables, and provided the indispensable informational substrate for the Protestant Reformation, the Renaissance, and the Scientific Revolution.`
        }
    ];

    const readingQuestionsList = [
        // Passage 1: Questions 1 - 10
        { p: "What is the primary purpose of the passage?", opts: ["To describe the biochemical mechanisms and ecological roles of deep-sea bioluminescence", "To compare deep-sea predators with surface-dwelling carnivores", "To critique the thermodynamic inefficiency of modern artificial lighting", "To analyze seasonal migration patterns in polar marine ecosystems"], ans: 0, exp: "Teks menguraikan mekanisme kimiawi biopendar dan fungsinya untuk berburu, kamuflase, dan reproduksi." },
        { p: "The word 'entice' in paragraph 2 is closest in meaning to...", opts: ["attract or lure", "frighten away", "consume rapidly", "extinguish permanently"], ans: 0, exp: "'Entice' berarti memikat atau memancing mangsa (attract/lure)." },
        { p: "According to paragraph 2, how does counterillumination protect vulnerable prey organisms?", opts: ["By matching ventral light to ambient surface light, eliminating dark silhouettes", "By generating high thermal heat that repels larger predators", "By permanently blinding the optic nerves of abyssal carnivores", "By altering the chemical salinity of surrounding seawater"], ans: 0, exp: "Paragraf 2 menyatakan bahwa fotofor ventral memancarkan cahaya yang menyatu dengan cahaya permukaan sehingga bayangan siluet tidak terlihat oleh predator di bawahnya." },
        { p: "Which of the following is NOT mentioned in the text as a function of bioluminescence?", opts: ["Regulating internal body temperature during frigid ocean currents", "Luring unsuspecting prey towards predatory jaws", "Attracting prospective mates via light frequency pulses", "Concealing silhouettes through ventral illumination"], ans: 0, exp: "Teks menyebutkan biopendar hampir tidak menghasilkan panas ('produces almost no heat'), sehingga tidak berfungsi mengatur suhu tubuh." },
        { p: "The word 'devoid of' in paragraph 3 is closest in meaning to...", opts: ["lacking or completely without", "surrounded by", "enriched with", "dependent upon"], ans: 0, exp: "'Devoid of' berarti sama sekali tidak memiliki atau hampa dari sesuatu (lacking/empty of)." },
        { p: "It can be inferred from paragraph 1 that artificial incandescent lighting...", opts: ["wastes a substantial proportion of energy as thermal heat", "is more thermodynamically efficient than luciferin reactions", "produces no heat when operated in cold environments", "relies upon luciferase enzymes for photon generation"], ans: 0, exp: "Paragraf 1 menyatakan: 'Unlike artificial incandescent lighting, which expends the vast majority of its energy as thermal heat...'." },
        { p: "In paragraph 2, the author mentions the anglerfish as an example of...", opts: ["a deep-sea predator that exploits bioluminescence to capture food", "a prey organism that relies exclusively on counterillumination", "a marine creature that generates high thermal heat", "a species devoid of photophores on its anatomy"], ans: 0, exp: "Anglerfish disebutkan sebagai predator yang menggantungkan umpan bercahaya di atas rahangnya untuk memikat mangsa." },
        { p: "The word 'pivotal' in paragraph 3 could best be replaced by...", opts: ["crucial or essential", "unimportant", "accidental", "infrequent"], ans: 0, exp: "'Pivotal' berarti sangat krusial, menentukan, atau penting (crucial/essential)." },
        { p: "According to the passage, luciferase functions as...", opts: ["an enzyme that catalyzes the reaction between luciferin and oxygen", "the primary fuel consumed by deep-sea organisms", "a thermal barrier protecting cells from cold seawater", "a pigment that absorbs downwelling sunlight"], ans: 0, exp: "Paragraf 1 menjelaskan bahwa luciferin bereaksi dengan oksigen dengan adanya enzim luciferase ('in the presence of an enzyme known as luciferase')." },
        { p: "Where in the passage does the author discuss reproductive communication?", opts: ["In paragraph 3, discussing pulse frequencies of ostracods and lanternfish", "In paragraph 1, introducing luciferin and oxygen reactions", "In paragraph 2, describing anglerfish hunting adaptations", "In the introductory sentence describing the bathypelagic zone"], ans: 0, exp: "Paragraf 3 secara khusus membahas sinyal pulsa cahaya untuk menarik pasangan ('attract prospective mates, a critical reproductive mechanism')." },

        // Passage 2: Questions 11 - 20
        { p: "What initially motivated the development of written language in ancient Sumer?", opts: ["The administrative and commercial necessity of tracking goods in expanding cities", "The desire to preserve ancient mythological epics for future generations", "Royal decrees commanding the creation of decorative temple murals", "Diplomatic correspondence between rival Mediterranean empires"], ans: 0, exp: "Paragraf 1 menyatakan tulisan lahir bukan untuk sastra, tapi kebutuhan administratif perdagangan kuil kota." },
        { p: "The word 'indelible' in paragraph 1 is closest in meaning to...", opts: ["permanent or unerasable", "decorative", "temporary", "secret"], ans: 0, exp: "'Indelible' berarti permanen, tidak dapat dihapus, atau tahan lama (permanent)." },
        { p: "According to paragraph 2, what material was used by scribes to write cuneiform?", opts: ["Wet clay tablets and a sharpened reed stylus", "Papyrus reeds and colored mineral inks", "Parchment skins and goose feather quills", "Carved granite boulders and bronze chisels"], ans: 0, exp: "Paragraf 2 menyatakan tablet tanah liat basah dan tangkai gelagah runcing (sharpened reed stylus)." },
        { p: "The word 'cuneiform' is derived from a Latin term referring to...", opts: ["the wedge-shaped appearance of the stylus impressions", "the clay composition of the storage tablets", "the sacred nature of Mesopotamian temple accounting", "the river silt found along the banks of the Euphrates"], ans: 0, exp: "'Cuneiform' berasal dari kata Latin 'cuneus' yang berarti pasak/baji (wedge)." },
        { p: "Which of the following is described in paragraph 3 as a result of phonetization?", opts: ["Symbols began representing phonetic sounds rather than merely physical objects", "Writing was abandoned in favor of oral storytelling traditions", "Scribes stopped using clay tablets and transitioned to papyrus", "Temple accounting was replaced by private banking systems"], ans: 0, exp: "Fonetisasi memungkinkan simbol melambangkan suku kata bunyi suara (phonetic syllables) dan konsep abstrak." },
        { p: "The author mentions the 'Code of Hammurabi' in paragraph 3 to demonstrate that...", opts: ["cuneiform evolved to record complex legal and societal codes", "Hammurabi was the inventor of the reed stylus", "early writing was restricted to accounting tokens", "Mesopotamian law prohibited mythological storytelling"], ans: 0, exp: "Code of Hammurabi disebutkan sebagai bukti bahwa tulisan berkembang untuk mencatat hukum formal masyarakat." },
        { p: "The word 'tangible' in paragraph 3 could best be replaced by...", opts: ["physical or concrete", "imaginary", "spiritual", "unimportant"], ans: 0, exp: "'Tangible' berarti konkret, berwujud fisik, dapat disentuh (physical/concrete)." },
        { p: "Prior to impressing symbols into flat clay tablets, accountants recorded transactions using...", opts: ["three-dimensional clay tokens", "metal coins stamped with animal emblems", "knotted strings tied to wooden poles", "painted animal hides stored in stone jars"], ans: 0, exp: "Paragraf 2 menjelaskan: 'Initial record-keeping utilized three-dimensional clay tokens'." },
        { p: "It can be inferred from the passage that early Sumerian writing...", opts: ["predated the composition of the Epic of Gilgamesh by centuries", "was understood by all citizens of ancient Uruk", "was replaced by Egyptian hieroglyphics within fifty years", "was exclusively used for funerary inscriptions"], ans: 0, exp: "Tulisan cuneiform mula-mula hanya untuk akuntansi sebelum akhirnya berabad-abad kemudian dipakai menulis epos Gilgamesh." },
        { p: "What is the overall organizational structure of Passage 2?", opts: ["Chronological progression from practical accounting tokens to complex literature", "Comparative analysis of Sumerian and Egyptian writing technologies", "Critique of ancient Mesopotamian archaeological discovery methods", "Debate regarding the authorship of the Epic of Gilgamesh"], ans: 0, exp: "Struktur teks disusun secara kronologis: dari token akuntansi, tablet piktograf, baji kuneiform, hingga sastra abstrak." },

        // Passage 3: Questions 21 - 30
        { p: "Why was Alfred Wegener's 1912 continental drift hypothesis initially rejected?", opts: ["He was unable to identify a convincing physical mechanism for moving continents", "He lacked evidence showing matching coastlines across the Atlantic", "Geologists had already proven that the Earth's crust was completely rigid", "His magnetic surveys of the ocean floor were proven inaccurate"], ans: 0, exp: "Hipotesis Wegener awalnya ditolak karena ia tidak dapat menjelaskan mekanisme fisik penggerak lempeng benua." },
        { p: "The word 'synthesized' in paragraph 1 is closest in meaning to...", opts: ["combined or integrated", "criticized", "disproved", "forgotten"], ans: 0, exp: "'Synthesized' berarti dipadukan atau digabungkan secara utuh (integrated/combined)." },
        { p: "According to paragraph 2, what crucial evidence provided proof of seafloor spreading?", opts: ["Symmetrical stripes of alternating geomagnetic polarity along mid-ocean ridges", "The discovery of identical freshwater fossils in continental mountain peaks", "Core samples showing that ocean floor rocks are older than continents", "Direct satellite measurements of tectonic plate movement in 1945"], ans: 0, exp: "Paragraf 2 menjelaskan pola garis-garis simetris polaritas magnetik bumi pada dasar samudera (paleomagnetic striping)." },
        { p: "The word 'indisputable' in paragraph 2 could best be replaced by...", opts: ["unquestionable or conclusive", "debatable", "theoretical", "incomplete"], ans: 0, exp: "'Indisputable' berarti tidak dapat dibantah, pasti, konklusif (unquestionable/conclusive)." },
        { p: "What happens at divergent plate boundaries according to the passage?", opts: ["Molten basalt magma wells up, cools, and forms new oceanic crust", "One plate is forced beneath another into the Earth's mantle", "Continental plates collide to create towering non-volcanic mountain ranges", "The lithosphere permanently locks together due to high friction"], ans: 0, exp: "Pada batas divergen, magma basalt cair naik ke atas, mendingin, dan membentuk kerak samudera baru." },
        { p: "According to paragraph 3, subduction zones occur where...", opts: ["a denser oceanic plate collides with and sinks beneath a continental plate", "two continental plates pull away from each other in mid-ocean", "molten magma solidifies without recording geomagnetic reversals", "oceanic trenches fill in with volcanic basalt"], ans: 0, exp: "Subduksi terjadi ketika lempeng samudera yang lebih padat menabrak dan menunjam ke bawah lempeng benua." },
        { p: "The word 'fractured' in paragraph 1 is closest in meaning to...", opts: ["broken or divided", "heated", "dissolved", "strengthened"], ans: 0, exp: "'Fractured' berarti retak atau terpecah menjadi lempeng-lempeng terpisah (broken/divided)." },
        { p: "It can be inferred from the passage that basalt magma...", opts: ["records the orientation of Earth's magnetic field at the time it solidifies", "is significantly lighter than the continental granitic crust", "does not contain any iron or magnetic mineral compounds", "erupts only during periods of rapid geomagnetic reversals"], ans: 0, exp: "Magma basalt merekam orientasi medan magnet bumi saat ia mendingin dan memadat." },
        { p: "Which feature is formed as a direct result of subduction at convergent boundaries?", opts: ["Deep ocean trenches and volcanic mountain ranges", "Mid-ocean divergent ridge spreading centers", "Symmetrical magnetic polarity stripes on the seafloor", "Semi-plastic currents within the asthenosphere"], ans: 0, exp: "Paragraf 3 menyatakan subduksi membentuk palung laut dalam (deep ocean trenches) dan pegunungan vulkanik." },
        { p: "What is the primary topic of Passage 3?", opts: ["How plate tectonics revolutionized geology by explaining crustal movements", "The biography and scientific struggles of Alfred Wegener", "The technological advancements of post-World War II oceanographic vessels", "The chemical differences between the lithosphere and asthenosphere"], ans: 0, exp: "Topik utama adalah bagaimana teori tektonik lempeng merevolusi ilmu geologi dengan membuktikan pergerakan kerak bumi." },

        // Passage 4: Questions 31 - 40
        { p: "What is the primary trigger of solar flares according to paragraph 1?", opts: ["Intense magnetic reconnection in localized sunspot regions", "Nuclear fission reactions occurring in the Sun's core", "Collisions between asteroids and the solar surface", "Gravitational tidal forces exerted by the giant outer planets"], ans: 0, exp: "Paragraf 1 menyatakan suar surya dipicu oleh rekoneksi magnetik hebat di daerah bintik matahari (sunspots)." },
        { p: "The word 'colossal' in paragraph 1 is closest in meaning to...", opts: ["immense or gigantic", "dangerous", "unpredictable", "brief"], ans: 0, exp: "'Colossal' berarti luar biasa besar, dahsyat, raksasa (immense/gigantic)." },
        { p: "How does the Earth's magnetosphere protect the planet from solar wind radiation?", opts: ["By deflecting the vast majority of incoming ionized charged particles", "By absorbing gamma radiation and converting it into atmospheric oxygen", "By reflecting sunlight back into interplanetary space", "By cooling the temperature of incoming coronal mass ejections"], ans: 0, exp: "Paragraf 2 menyatakan magnetosfer membelokkan (deflects) sebagian besar radiasi partikel bermuatan yang datang." },
        { p: "The word 'inundated' or 'saturate' in paragraph 3 could best be replaced by...", opts: ["overload or overwhelm", "purify", "disconnect", "weaken"], ans: 0, exp: "'Saturate/overwhelm' berarti membanjiri atau membebani sistem secara berlebihan." },
        { p: "According to paragraph 3, what causes the Northern and Southern Lights (auroras)?", opts: ["Excitation of atmospheric oxygen and nitrogen atoms by charged particles", "Fires ignited by solar flares burning in the upper stratosphere", "Reflections of polar sea ice into the interplanetary magnetic field", "Radio waves transmitted from deep-space communication satellites"], ans: 0, exp: "Aurora terjadi ketika partikel surya bermuatan mengeksitasi atom oksigen dan nitrogen di atmosfer kutub." },
        { p: "Which of the following is NOT mentioned as a terrestrial hazard of severe solar storms?", opts: ["Extinction of cold-water marine organisms in ocean trenches", "Disruption and damage to electrical power distribution grids", "Operational anomalies and damage to orbiting communication satellites", "Interference with signals carried by transoceanic fiber-optic cables"], ans: 0, exp: "Kepunahan organisme laut dalam sama sekali tidak disebutkan sebagai dampak badai matahari." },
        { p: "The word 'cavity' in paragraph 2 is closest in meaning to...", opts: ["protective enclosed space or chamber", "hollow tooth decay", "dense barrier", "vacuum tube"], ans: 0, exp: "'Cavity' berarti rongga atau ruang pelindung yang melingkupi bumi (protective space)." },
        { p: "Approximately how long does it take for a coronal mass ejection to reach Earth?", opts: ["Two to three days", "Eight minutes and twenty seconds", "Seven to ten weeks", "Several hours after the flare erupts"], ans: 0, exp: "Paragraf 2 menyatakan partikel mencapai bumi sekitar 2 sampai 3 hari kemudian ('two to three days later')." },
        { p: "It can be inferred from the passage that geomagnetic storms occur when...", opts: ["the magnetic field of the solar plasma connects with the Earth's magnetic field", "the Earth's core dynamo temporarily ceases spinning", "sunspots completely disappear from the solar photosphere", "the aurora borealis expands into equatorial regions"], ans: 0, exp: "Badai geomagnetik terjadi ketika medan magnetik antarplanet terhubung dengan medan magnet bumi." },
        { p: "What is the author's primary attitude toward solar flares in the passage?", opts: ["Objective and informative regarding their power and technological risks", "Alarmist and fearful regarding imminent human extinction", "Skeptical that solar flares actually interact with the magnetosphere", "Disappointed that modern satellites are not shielded better"], ans: 0, exp: "Sikap penulis objektif, ilmiah, dan informatif menjelaskan kedahsyatan serta risiko teknologi suar surya." },

        // Passage 5: Questions 41 - 50
        { p: "What was the main disadvantage of book production in Europe prior to Gutenberg's press?", opts: ["Handwritten transcription by scribes was painfully slow and prohibitively expensive", "Paper manufactured from rag fibers disintegrated within a few months", "Monasteries refused to permit anyone to read historical literature", "Movable type matrices were made of brittle glass that cracked easily"], ans: 0, exp: "Sebelum Gutenberg, buku disalin dengan tangan secara lambat dan biayanya sangat mahal." },
        { p: "The word 'catalyzed' in paragraph 1 is closest in meaning to...", opts: ["accelerated or initiated", "delayed", "prohibited", "described"], ans: 0, exp: "'Catalyzed' berarti mempercepat atau memicu dimulainya suatu perubahan besar (accelerated/initiated)." },
        { p: "Gutenberg's major achievement was primarily based on...", opts: ["synthesizing several existing and adapted mechanical technologies into a system", "inventing the very first wooden screw press in human history", "discovering how to produce papyrus from Mediterranean river plants", "translating the Latin Bible into twenty vernacular languages single-handedly"], ans: 0, exp: "Pencapaian Gutenberg adalah memadukan berbagai teknologi (paduan logam, tinta minyak, mesin pres anggur) menjadi satu sistem." },
        { p: "The word 'minuscule' in paragraph 1 could best be replaced by...", opts: ["extremely small or tiny", "powerful", "widespread", "uneducated"], ans: 0, exp: "'Minuscule' berarti sangat sedikit atau sangat kecil (extremely small)." },
        { p: "Which material did Gutenberg adapt to create his printing mechanism?", opts: ["Wooden screw presses previously used for pressing grapes", "Hydraulic water wheels from local grain mills", "Bronze chisels borrowed from stonecutters", "Ceramic ovens used by clay potters"], ans: 0, exp: "Gutenberg mengadaptasi mesin pemeras anggur kayu (grape presses) untuk mengepres cetakan." },
        { p: "According to paragraph 3, how many books were produced in Europe within five decades of Gutenberg's invention?", opts: ["Over twenty million volumes", "Approximately five hundred copies", "Less than two thousand manuscripts", "Over one billion illustrated Bibles"], ans: 0, exp: "Paragraf 3 menyatakan: 'Within five decades, over twenty million volumes were printed across Europe'." },
        { p: "The word 'dissemination' in paragraph 3 is closest in meaning to...", opts: ["distribution or spreading", "destruction", "prohibition", "collection"], ans: 0, exp: "'Dissemination' berarti penyebaran atau pendistribusian informasi secara luas (distribution/spreading)." },
        { p: "According to the passage, how did the print revolution stimulate scientific progress?", opts: ["By standardizing mathematical tables and anatomical diagrams across printed copies", "By replacing mathematical calculations with printed religious proverbs", "By proving that the Earth revolved around the Sun in 1440", "By funding the construction of major university astronomical observatories"], ans: 0, exp: "Pencetakan massal menstandarkan diagram dan tabel matematika sehingga ilmuwan di berbagai tempat merujuk pada data yang sama." },
        { p: "It can be inferred from the passage that movable type printing...", opts: ["contributed directly to the spread of ideas during the Protestant Reformation", "caused a decline in general literacy rates across Western Europe", "was rejected by university scholars in favor of oral lectures", "was immediately adopted in China and Korea before arriving in Germany"], ans: 0, exp: "Paragraf 3 menyatakan bahwa percetakan menyediakan landasan informasi bagi Reformasi Protestan dan Renaisans." },
        { p: "Which title best summarizes the content of Passage 5?", opts: ["The Gutenberg Press and the Democratization of European Knowledge", "Monastic Scribes and the Medieval Art of Calligraphy", "The Mechanical Engineering of Agricultural Grape Presses", "The Commercial Failure of Early German Printing Enterprises"], ans: 0, exp: "Judul terbaik adalah 'The Gutenberg Press and the Democratization of European Knowledge'." }
    ];

    // Helper: Fisher-Yates array shuffler
    function shuffle(arr) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    // Helper: Option shuffler that randomizes options and tracks the new correct index
    function shuffleOptionsAndRemap(opts, correctIdx) {
        if (!Array.isArray(opts) || opts.length <= 1) return { options: [...opts], correctIndex: correctIdx };
        const items = opts.map((opt, i) => ({ opt, isCorrect: i === correctIdx }));
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
        return {
            options: items.map(item => item.opt),
            correctIndex: items.findIndex(item => item.isCorrect)
        };
    }

    // Generator function that generates 150 unique questions, randomly ordered and scrambled on each test attempt!
    window.generateToeflExamData = function(shouldShuffle = true) {
        // Section 1: 50 Questions (Part A: 30 questions, Part B: 10 questions, Part C: 10 questions)
        const partA = rawListeningQuestions.slice(0, 30);
        const partB = rawListeningQuestions.slice(30, 40);
        const partC = rawListeningQuestions.slice(40, 50);

        const s1PartA = shouldShuffle ? shuffle(partA) : [...partA];
        const s1PartB = shouldShuffle ? shuffle(partB) : [...partB];
        const s1PartC = shouldShuffle ? shuffle(partC) : [...partC];

        const s1Raw = [...s1PartA, ...s1PartB, ...s1PartC];
        const s1Questions = s1Raw.map((item, idx) => {
            const num = idx + 1;
            let partTag = "Part A - Short Dialogue";
            if (num > 30 && num <= 40) partTag = "Part B - Long Conversation";
            else if (num > 40) partTag = "Part C - Academic Talk";

            let finalOpts = [...item.options];
            let finalAns = item.correct;
            if (shouldShuffle) {
                const shuffled = shuffleOptionsAndRemap(item.options, item.correct);
                finalOpts = shuffled.options;
                finalAns = shuffled.correctIndex;
            }

            return {
                id: `toefl_l${num}_${Math.random().toString(36).substr(2, 6)}`,
                type: 'dialogue',
                speakerText: item.dialogue,
                audioScript: item.audio,
                prompt: `Soal ${num} (${partTag}):\n${item.prompt}`,
                options: finalOpts,
                correctIndex: finalAns,
                explanation: item.explanation
            };
        });

        // Section 2: 50 Questions (25 Part A Incomplete, 25 Part B Error Identification)
        const s2A = shouldShuffle ? shuffle(structureQuestionsA) : [...structureQuestionsA];
        const s2B = shouldShuffle ? shuffle(structureQuestionsB) : [...structureQuestionsB];
        const s2Questions = [];

        for (let i = 0; i < 25; i++) {
            const num = i + 1;
            let finalOpts = [...s2A[i].opts];
            let finalAns = s2A[i].ans;
            if (shouldShuffle) {
                const shuffled = shuffleOptionsAndRemap(s2A[i].opts, s2A[i].ans);
                finalOpts = shuffled.options;
                finalAns = shuffled.correctIndex;
            }

            s2Questions.push({
                id: `toefl_s${num}_${Math.random().toString(36).substr(2, 6)}`,
                subtype: 'completion',
                prompt: `Soal ${num} (Part A - Incomplete Sentences):\n\n${s2A[i].p}`,
                options: finalOpts,
                correctIndex: finalAns,
                explanation: s2A[i].exp
            });
        }

        for (let i = 0; i < 25; i++) {
            const num = i + 26;
            s2Questions.push({
                id: `toefl_s${num}_${Math.random().toString(36).substr(2, 6)}`,
                subtype: 'error_id',
                prompt: `Soal ${num} (Part B - Error Identification):\nPilih kata/frasa bergaris bawah yang SALAH secara tata bahasa:`,
                underlinedSentence: s2B[i].sent,
                options: [...s2B[i].opts],
                correctIndex: s2B[i].ans,
                explanation: s2B[i].exp
            });
        }

        // Section 3: 50 Questions across 5 Passages (10 questions per passage)
        const passageGroups = [];
        for (let p = 0; p < 5; p++) {
            passageGroups.push({
                passage: readingPassages[p],
                questions: readingQuestionsList.slice(p * 10, (p + 1) * 10)
            });
        }

        const activePassages = shouldShuffle ? shuffle(passageGroups) : [...passageGroups];
        const s3Questions = [];
        let rGlobalNum = 1;

        activePassages.forEach((group, pIdx) => {
            const pQuestions = shouldShuffle ? shuffle(group.questions) : [...group.questions];
            pQuestions.forEach((qData) => {
                const num = rGlobalNum++;
                let finalOpts = [...qData.opts];
                let finalAns = qData.ans;
                if (shouldShuffle) {
                    const shuffled = shuffleOptionsAndRemap(qData.opts, qData.ans);
                    finalOpts = shuffled.options;
                    finalAns = shuffled.correctIndex;
                }

                s3Questions.push({
                    id: `toefl_r${num}_${Math.random().toString(36).substr(2, 6)}`,
                    prompt: `Soal ${num} (Naskah Bacaan ${pIdx + 1}):\n${qData.p}`,
                    options: finalOpts,
                    correctIndex: finalAns,
                    explanation: qData.exp,
                    passage: group.passage
                });
            });
        });

        return {
            title: 'TOEFL ITP Official Complete Examination (150 Soal Lengkap)',
            durationMinutes: 115,
            sections: [
                {
                    id: 'section_1',
                    name: 'Section 1: Listening Comprehension',
                    icon: '🎧',
                    durationMinutes: 35,
                    description: '50 Pertanyaan percakapan pendek (Part A), dialog panjang (Part B), dan kuliah ilmiah (Part C) dengan audio penutur asli.',
                    questions: s1Questions
                },
                {
                    id: 'section_2',
                    name: 'Section 2: Structure & Written Expression',
                    icon: '✍️',
                    durationMinutes: 25,
                    description: '50 Soal tata bahasa akademis: 25 melengkapi kalimat (Part A) dan 25 analisis kesalahan bergaris bawah A, B, C, D (Part B).',
                    questions: s2Questions
                },
                {
                    id: 'section_3',
                    name: 'Section 3: Reading Comprehension',
                    icon: '📖',
                    durationMinutes: 55,
                    description: '50 Soal pemahaman teks bacaan akademis ilmiah dari 5 naskah ilmiah mendalam.',
                    passage: activePassages[0].passage,
                    questions: s3Questions
                }
            ]
        };
    };

    // Default static object (also regenerable dynamically whenever user starts test)
    window.TOEFL_TEST_DATA = window.generateToeflExamData(false);

    // Official TOEFL ITP Scaled Score Calculation (310 - 677 Scale & iBT 0 - 120 Scale)
    window.calculateToeflScore = function(results) {
        const calcSectionScaled = (correct, total, minScaled = 31, maxScaled = 68) => {
            if (!total || total === 0) return minScaled;
            const ratio = Math.min(1, Math.max(0, correct / total));
            return Math.round(minScaled + (ratio * (maxScaled - minScaled)));
        };

        const s1Score = calcSectionScaled(results.section1.correct, results.section1.total, 31, 68);
        const s2Score = calcSectionScaled(results.section2.correct, results.section2.total, 31, 68);
        const s3Score = calcSectionScaled(results.section3.correct, results.section3.total, 31, 67);

        // Official TOEFL ITP Scaling Formula: ((S1 + S2 + S3) * 10) / 3
        const itpTotal = Math.round(((s1Score + s2Score + s3Score) * 10) / 3);
        const ibtEquivalent = Math.min(120, Math.max(0, Math.round(((itpTotal - 310) / (677 - 310)) * 120)));

        let bandName = '';
        let recommendation = '';

        if (itpTotal >= 600) {
            bandName = 'Advanced High / TOEFL Mastery (C1-C2)';
            recommendation = 'Skor luar biasa! Sangat memenuhi syarat untuk beasiswa bergengsi dunia (LPDP, Fulbright, Chevening, AAS) dan program pascasarjana internasional.';
        } else if (itpTotal >= 550) {
            bandName = 'Upper Intermediate / High Proficiency (B2)';
            recommendation = 'Hasil sangat baik! Memenuhi standar pendaftaran S2 dalam negeri dan sebagian besar universitas internasional.';
        } else if (itpTotal >= 500) {
            bandName = 'Intermediate Proficiency (B1-B2)';
            recommendation = 'Bagus! Sudah berada di ambang batas lulus persyaratan kelulusan universitas dan BUMN.';
        } else if (itpTotal >= 450) {
            bandName = 'Elementary to Intermediate (A2-B1)';
            recommendation = 'Fondasi sudah ada. Perlu memperkuat subject-verb agreement, inversion, dan perbendaharaan academic vocabulary.';
        } else {
            bandName = 'Novice / Basic (A1-A2)';
            recommendation = 'Disarankan untuk menyelesaikan modul kurikulum dasar di LinguaSphere terlebih dahulu.';
        }

        return {
            itpTotal,
            ibtEquivalent,
            s1Score,
            s2Score,
            s3Score,
            bandName,
            recommendation
        };
    };
})();
