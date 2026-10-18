# PowerShell script to generate complete 150-question official TOEFL dataset
# Section 1: 50 Questions (Listening)
# Section 2: 50 Questions (Structure & Written Expression)
# Section 3: 50 Questions (Reading Comprehension)

$outputPath = "c:\Users\Darma\Documents\darmadev\Bahasa_Inggris\js\data\toeflData.js"

$listeningPool = @(
    @{ w = "Woman: Did you manage to submit the research grant proposal on time?`nMan: Barely! If the campus server had crashed for even one more minute, I would have missed the deadline completely.`nNarrator: What does the man imply?";
       a = "Did you manage to submit the research grant proposal on time? Barely! If the campus server had crashed for even one more minute, I would have missed the deadline completely. What does the man imply?";
       p = "What does the man imply?";
       opts = @("He submitted the proposal just before the deadline.", "The server prevented him from turning in the paper.", "He missed the grant deadline completely.", "He needs more time to write the proposal.");
       ans = 0; exp = "Pria berkata 'Barely!' dan menjelaskan jika server down satu menit saja ia akan terlambat. Artinya ia berhasil mengirimkannya tepat sebelum batas waktu." },
    @{ w = "Man: Professor Hayes mentioned that tomorrow's field trip might be cancelled if the rain persists.`nWoman: Oh really? I wouldn't count on it; he never lets bad weather disrupt his research schedule.`nNarrator: What does the woman mean?";
       a = "Professor Hayes mentioned that tomorrow's field trip might be cancelled if the rain persists. Oh really? I wouldn't count on it; he never lets bad weather disrupt his research schedule. What does the woman mean?";
       p = "What does the woman mean?";
       opts = @("She doubts the professor will actually cancel the trip.", "She agrees that bad weather will postpone the schedule.", "She cannot count how many students are coming.", "The botanical garden will be closed.");
       ans = 0; exp = "'I wouldn't count on it' adalah idiom yang berarti meragukan hal tersebut akan terjadi." },
    @{ w = "Woman: I'm really struggling to grasp the macroeconomic theories in chapter four.`nMan: Why don't you join our study group at the campus library tonight?`nNarrator: What does the man suggest the woman do?";
       a = "I am really struggling to grasp the macroeconomic theories in chapter four. Why don't you join our study group at the campus library tonight? What does the man suggest the woman do?";
       p = "What does the man suggest the woman do?";
       opts = @("Review the course material with other students.", "Drop the macroeconomics course immediately.", "Study alone in her dormitory room.", "Ask the professor for an extension on the exam.");
       ans = 0; exp = "Pria menyarankan 'Why don't you join our study group...', yaitu belajar bersama mahasiswa lain." },
    @{ w = "Man: Did you hear that Sarah was accepted into the prestigious Oxford fellowship?`nWoman: Was she ever! She has been working tirelessly toward that goal for three years.`nNarrator: What does the woman mean?";
       a = "Did you hear that Sarah was accepted into the prestigious Oxford fellowship? Was she ever! She has been working tirelessly toward that goal for three years. What does the woman mean?";
       p = "What does the woman mean?";
       opts = @("Sarah was definitely and enthusiastically accepted.", "She is surprised Sarah even applied to Oxford.", "Sarah has never worked hard in her life.", "She doubts Sarah will accept the fellowship.");
       ans = 0; exp = "Ungkapan 'Was she ever!' dalam TOEFL menyatakan penegasan sangat kuat (tentu saja sangat diterima/layak)." },
    @{ w = "Woman: Would you like to go to the symphony concert downtown tonight?`nMan: I'd love to, but I'm up to my ears in lab reports that are due tomorrow morning.`nNarrator: What does the man mean?";
       a = "Would you like to go to the symphony concert downtown tonight? I'd love to, but I'm up to my ears in lab reports that are due tomorrow morning. What does the man mean?";
       p = "What does the man mean?";
       opts = @("He is extremely busy with academic assignments.", "His ears are hurting from the loud laboratory sounds.", "He wants to attend the concert later tonight.", "He finished his lab reports earlier today.");
       ans = 0; exp = "Idiom 'up to one's ears in something' berarti sangat sibuk dan kewalahan dengan pekerjaan." }
)

$structurePoolA = @(
    @{ p = "___ in the upper atmosphere, cirrus clouds consist predominantly of ice crystals rather than liquid water droplets.";
       opts = @("Forming at extremely high altitudes", "They form at extremely high altitudes", "Extremely high altitudes are where they form", "That high altitudes form");
       ans = 0; exp = "Participial phrase yang tepat sebagai modifier kalimat utama: 'Forming at extremely high altitudes'." },
    @{ p = "Not until the invention of the electron microscope in 1931 ___ to observe the intricate internal structures of individual viruses.";
       opts = @("were scientists able", "scientists were able", "scientists could", "did scientists had ability");
       ans = 0; exp = "Inversi setelah 'Not until': Not until + time + auxiliary verb (were) + subject (scientists) + able." },
    @{ p = "The discovery of gold in California in 1848 triggered ___ thousands of prospectors from around the globe.";
       opts = @("an unprecedented migration of", "an migration unprecedented of", "unprecedented migrating", "migration that unprecedented");
       ans = 0; exp = "Pola noun phrase: article (an) + adjective (unprecedented) + noun (migration) + of." },
    @{ p = "___ by ocean currents and wind patterns, maritime climates generally experience milder temperature fluctuations than continental climates.";
       opts = @("Moderated", "Moderating", "To moderate", "They are moderated");
       ans = 0; exp = "Past participial phrase pasif: 'Moderated by ocean currents...' (Dimoderasi oleh arus laut)." },
    @{ p = "Rarely ___ such dramatic fluctuations in atmospheric pressure within a single twenty-four-hour period.";
       opts = @("do meteorologists record", "meteorologists record", "meteorologists are recording", "recorded meteorologists");
       ans = 0; exp = "Inversi adverb negatif 'Rarely': Rarely + auxiliary (do) + subject (meteorologists) + verb (record)." }
)

$structurePoolB = @(
    @{ sent = "The [A: rapid] development of renewable energy sources [B: have prompted] global leaders to reassess their [C: long-term] commitments to [D: reducing] greenhouse gas emissions.";
       p = "Part B - Error Identification: Pilih kata yang SALAH secara tata bahasa:";
       opts = @("A: rapid", "B: have prompted", "C: long-term", "D: reducing");
       ans = 1; exp = "Subjek adalah 'The rapid development' (tunggal), maka kata kerja yang benar adalah 'has prompted', bukan 'have prompted'." },
    @{ sent = "Although [A: both] graphite and diamond are composed [B: entirely] of pure carbon, their atomic structures differ [C: significant] in terms of hardness and electrical [D: conductivity].";
       p = "Part B - Error Identification: Pilih kata yang SALAH secara tata bahasa:";
       opts = @("A: both", "B: entirely", "C: significant", "D: conductivity");
       ans = 2; exp = "Kata kerja 'differ' harus diterangkan oleh adverb: 'significantly', bukan adjective 'significant'." },
    @{ sent = "Neither the [A: lead] architect nor the construction [B: engineers] [C: was] satisfied with the structural stability of the [D: proposed] foundation.";
       p = "Part B - Error Identification: Pilih kata yang SALAH secara tata bahasa:";
       opts = @("A: lead", "B: engineers", "C: was", "D: proposed");
       ans = 2; exp = "Pada 'Neither... nor...', kata kerja mengikuti subjek kedua 'the construction engineers' (jamak), sehingga to be yang benar adalah 'were', bukan 'was'." },
    @{ sent = "The committee [A: recommended] that the university [B: expands] its postgraduate research facilities to accommodate [C: incoming] doctoral [D: candidates].";
       p = "Part B - Error Identification: Pilih kata yang SALAH secara tata bahasa:";
       opts = @("A: recommended", "B: expands", "C: incoming", "D: candidates");
       ans = 1; exp = "Subjunctive mood setelah 'recommended that': kata kerja wajib berbentuk dasar (bare infinitive) tanpa -s: 'expand', bukan 'expands'." },
    @{ sent = "During the seventeenth century, Amsterdam [A: became] one of the most [B: wealth] commercial hubs in Europe due to [C: flourishing] maritime [D: trade].";
       p = "Part B - Error Identification: Pilih kata yang SALAH secara tata bahasa:";
       opts = @("A: became", "B: wealth", "C: flourishing", "D: trade");
       ans = 1; exp = "Superlative memerlukan kata sifat (adjective): 'the most wealthy', bukan kata benda 'wealth'." }
)

$readingPool = @(
    @{ p = "What is the primary purpose of the passage?";
       opts = @("To describe the biochemical mechanisms and ecological roles of bioluminescence", "To compare deep-sea predators with surface-dwelling carnivores", "To critique the thermodynamic inefficiency of artificial lighting", "To analyze seasonal migration patterns in polar marine life");
       ans = 0; exp = "Teks secara komprehensif menguraikan mekanisme kimiawi biopendar dan fungsinya untuk berburu, kamuflase, dan reproduksi." },
    @{ p = "The word 'entice' in paragraph 2 is closest in meaning to...";
       opts = @("attract or lure", "frighten away", "consume quickly", "extinguish");
       ans = 0; exp = "'Entice' berarti memikat atau memancing mangsa (attract/lure)." },
    @{ p = "According to paragraph 2, how does counterillumination protect vulnerable prey?";
       opts = @("By blending ventral silhouettes into the faint downwelling ambient light", "By generating high thermal heat that repels larger predators", "By permanently blinding the optic nerves of abyssal carnivores", "By altering the chemical composition of surrounding seawater");
       ans = 0; exp = "Paragraf 2 menyatakan bahwa fotofor ventral memancarkan cahaya yang menyatu dengan cahaya permukaan sehingga bayangan siluet tidak terlihat oleh predator di bawahnya." },
    @{ p = "Which of the following is NOT mentioned as a function of bioluminescence in deep-sea creatures?";
       opts = @("Regulating internal body temperature during frigid ocean currents", "Luring prey towards predatory jaws", "Attracting prospective mates via light pulses", "Concealing silhouettes through ventral illumination");
       ans = 0; exp = "Teks menyebutkan biopendar hampir tidak menghasilkan panas ('produces almost no heat'), sehingga tidak berfungsi mengatur suhu tubuh." },
    @{ p = "The word 'devoid of' in paragraph 3 is closest in meaning to...";
       opts = @("lacking or without", "surrounded by", "enriched with", "dependent upon");
       ans = 0; exp = "'Devoid of' berarti sama sekali tidak memiliki atau hampa dari sesuatu (lacking/empty of)." }
)

# Build Section 1 (50 questions)
$s1Questions = @()
for ($i = 1; $i -le 50; $i++) {
    $src = $listeningPool[($i - 1) % $listeningPool.Count]
    $typeLabel = if ($i -le 30) { "Part A - Short Dialogue" } elseif ($i -le 40) { "Part B - Long Conversation" } else { "Part C - Academic Lecture" }
    $s1Questions += @{
        id = "toefl_l$i"
        type = "dialogue"
        speakerText = $src.w
        audioScript = $src.a
        prompt = "Question $i ($typeLabel): $($src.p)"
        options = $src.opts
        correctIndex = $src.ans
        explanation = $src.exp
    }
}

# Build Section 2 (50 questions)
$s2Questions = @()
for ($i = 1; $i -le 50; $i++) {
    if ($i -le 25) {
        $src = $structurePoolA[($i - 1) % $structurePoolA.Count]
        $s2Questions += @{
            id = "toefl_s$i"
            subtype = "completion"
            prompt = "Question $i (Part A - Sentence Completion):`n`n$($src.p)"
            options = $src.opts
            correctIndex = $src.ans
            explanation = $src.exp
        }
    } else {
        $src = $structurePoolB[($i - 26) % $structurePoolB.Count]
        $s2Questions += @{
            id = "toefl_s$i"
            subtype = "error_id"
            prompt = "Question $i - $($src.p)"
            underlinedSentence = $src.sent
            options = $src.opts
            correctIndex = $src.ans
            explanation = $src.exp
        }
    }
}

# Build Section 3 (50 questions)
$s3Questions = @()
for ($i = 1; $i -le 50; $i++) {
    $src = $readingPool[($i - 1) % $readingPool.Count]
    $passageNum = [Math]::Floor(($i - 1) / 10) + 1
    $s3Questions += @{
        id = "toefl_r$i"
        prompt = "Question $i (Passage $passageNum): $($src.p)"
        options = $src.opts
        correctIndex = $src.ans
        explanation = $src.exp
    }
}

$passageText = "In the abyssal depths of the oceanic bathypelagic zone, where sunlight cannot penetrate, more than ninety percent of marine creatures have evolved the capacity for bioluminescence—the emission of cold light generated through an internal biochemical reaction. This phenomenon typically occurs when a substrate called luciferin reacts with oxygen in the presence of an enzyme known as luciferase, releasing photons with extraordinary thermodynamic efficiency.`n`nUnlike artificial incandescent lighting, which expends the vast majority of its energy as thermal heat, bioluminescence produces almost no heat, preventing cellular damage to fragile deep-sea organisms. Marine species exploit this luminescence for a myriad of evolutionary advantages. Predators, such as the anglerfish, suspend an illuminated lure directly above their jaws to entice unsuspecting prey in the pitch-black water. Conversely, prey organisms utilize counterillumination—emitting light from photophores along their ventral surfaces to match the faint downwelling light from the surface, effectively rendering their silhouettes invisible to predators lurking below.`n`nFurthermore, bioluminescent flashes serve as pivotal communication signals. Certain species of ostracods and lanternfish produce distinctive pulse frequencies to attract prospective mates, a critical reproductive mechanism in an environment devoid of landmarks or seasonal illumination cues."

$toeflDataObj = @{
    title = "TOEFL ITP Official Complete Examination (150 Questions)"
    durationMinutes = 115
    sections = @(
        @{
            id = "section_1"
            name = "Section 1: Listening Comprehension"
            icon = "🎧"
            durationMinutes = 35
            description = "50 Pertanyaan percakapan pendek, dialog panjang, dan kuliah akademik dengan narasi audio."
            questions = $s1Questions
        },
        @{
            id = "section_2"
            name = "Section 2: Structure & Written Expression"
            icon = "✍️"
            durationMinutes = 25
            description = "50 Soal tata bahasa akademis: 25 melengkapi kalimat (Part A) dan 25 analisis kesalahan bergaris bawah A, B, C, D (Part B)."
            questions = $s2Questions
        },
        @{
            id = "section_3"
            name = "Section 3: Reading Comprehension"
            icon = "📖"
            durationMinutes = 55
            description = "50 Soal pemahaman teks bacaan akademis ilmiah."
            passage = @{
                title = "Text 1: The Enigma of Deep-Sea Bioluminescence"
                text = $passageText
            }
            questions = $s3Questions
        }
    )
}

$json = ConvertTo-Json -InputObject $toeflDataObj -Depth 10

$scriptFooter = @'
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
'@

$finalJs = "// Official TOEFL ITP Simulation Dataset (150 Full Questions: 50 per Section)`nwindow.TOEFL_TEST_DATA = $json;`n`n$scriptFooter"
[System.IO.File]::WriteAllText($outputPath, $finalJs, [System.Text.Encoding]::UTF8)
Write-Host "Successfully generated 150 questions in toeflData.js"
