// ====================================================================
// LinguaSphere Academy Application Controller
// Orchestrates Curriculum Roadmap, Interactive Exercises, Placement Test, TOEFL Simulator & Flashcards
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------
    // 1. Navigation & View Routing
    // ----------------------------------------------------------------
    const navButtons = document.querySelectorAll('.nav-item-btn');
    const viewPanels = document.querySelectorAll('.view-panel');

    function switchView(viewId) {
        window.soundCtrl?.playClick();
        viewPanels.forEach(p => p.classList.remove('active'));
        navButtons.forEach(b => b.classList.remove('active'));

        const targetPanel = document.getElementById(viewId);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }

        const activeBtn = document.querySelector(`.nav-item-btn[data-view="${viewId}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        if (viewId === 'path-view') renderLearningPath();
        else if (viewId === 'toefl-view') renderToeflDashboard();
        else if (viewId === 'vocab-view') {
            if (window.miniGamesCtrl) window.miniGamesCtrl.init();
        }
        else if (viewId === 'profile-view') renderProfileStats();
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const viewId = btn.getAttribute('data-view');
            switchView(viewId);
        });
    });

    document.getElementById('btn-quick-placement-prompt')?.addEventListener('click', () => {
        switchView('placement-view');
    });

    // ----------------------------------------------------------------
    // 2. Theme & Sound Controls
    // ----------------------------------------------------------------
    const themeBtn = document.getElementById('btn-toggle-theme');
    const themeIcon = document.getElementById('theme-icon');
    const themeLabel = document.getElementById('theme-label');

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            themeIcon.textContent = '☀️';
            themeLabel.textContent = 'Mode Terang';
        } else {
            themeIcon.textContent = '🌙';
            themeLabel.textContent = 'Mode Gelap';
        }
        window.appState.data.theme = theme;
        window.appState.saveState();
    }

    applyTheme(window.appState.data.theme || 'light');

    themeBtn?.addEventListener('click', () => {
        const nextTheme = window.appState.data.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        window.soundCtrl?.playClick();
    });

    const soundBtn = document.getElementById('btn-toggle-sound');
    const soundIcon = document.getElementById('sound-icon');
    const soundLabel = document.getElementById('sound-label');

    function updateSoundUi() {
        const enabled = window.appState.data.soundEnabled;
        window.soundCtrl.enabled = enabled;
        soundIcon.textContent = enabled ? '🔊' : '🔇';
        soundLabel.textContent = enabled ? 'Audio: Aktif' : 'Audio: Nonaktif';
    }
    updateSoundUi();

    soundBtn?.addEventListener('click', () => {
        window.appState.data.soundEnabled = !window.appState.data.soundEnabled;
        window.appState.saveState();
        updateSoundUi();
    });

    // Top Bar Stats Update
    function updateTopBar() {
        const d = window.appState.data;
        document.getElementById('top-streak-count').textContent = `${d.streak} Hari`;
        document.getElementById('top-xp-count').textContent = `${d.xp} XP`;

        let levelCode = 'A1';
        if (d.diagnosticResult && d.diagnosticResult.levelCode) {
            levelCode = d.diagnosticResult.levelCode;
        } else {
            const completedIds = Object.keys(d.completedLessons || {});
            let maxCompletedLevel = 1;
            completedIds.forEach(id => {
                if (id.startsWith('l5')) maxCompletedLevel = Math.max(maxCompletedLevel, 5);
                else if (id.startsWith('l4')) maxCompletedLevel = Math.max(maxCompletedLevel, 4);
                else if (id.startsWith('l3')) maxCompletedLevel = Math.max(maxCompletedLevel, 3);
                else if (id.startsWith('l2')) maxCompletedLevel = Math.max(maxCompletedLevel, 2);
            });
            const codes = ['A1', 'A2', 'B1', 'B2', 'C1'];
            levelCode = codes[maxCompletedLevel - 1] || 'A1';
        }
        document.getElementById('top-cefr-badge').textContent = `Tingkat ${levelCode}`;

        // Update Top Bar User Account Pill
        const currentUser = window.appState.getCurrentUser();
        const topAvatar = document.getElementById('top-user-avatar');
        const topName = document.getElementById('top-user-name');
        const topEmail = document.getElementById('top-user-email');
        if (topAvatar) {
            topAvatar.textContent = currentUser.avatarInitials;
            topAvatar.style.background = currentUser.avatarColor;
        }
        if (topName) topName.textContent = currentUser.name;
        if (topEmail) topEmail.textContent = currentUser.email;
    }
    window.appState.subscribe(updateTopBar);
    updateTopBar();

    // ----------------------------------------------------------------
    // 3. CURRICULUM SYLLABUS ROADMAP (Modern Course List)
    // ----------------------------------------------------------------
    let selectedLevelTab = 1;

    function renderLearningPath() {
        const tabsContainer = document.getElementById('level-tabs-container');
        const unitsContainer = document.getElementById('units-container');
        if (!tabsContainer || !unitsContainer) return;

        // Render level selector tabs
        tabsContainer.innerHTML = '';
        window.CURRICULUM_DATA.forEach(lvl => {
            const isUnlocked = window.appState.data.unlockedLevels.includes(lvl.levelNumber);
            const tabBtn = document.createElement('button');
            tabBtn.className = `level-tab-btn ${lvl.levelNumber === selectedLevelTab ? 'active' : ''}`;
            tabBtn.innerHTML = `
                <span>${lvl.code}</span>
                <span>• Level ${lvl.levelNumber}</span>
                ${isUnlocked ? '' : '🔒'}
            `;
            tabBtn.onclick = () => {
                selectedLevelTab = lvl.levelNumber;
                window.soundCtrl?.playClick();
                renderLearningPath();
            };
            tabsContainer.appendChild(tabBtn);
        });

        const currentLevelData = window.CURRICULUM_DATA.find(l => l.levelNumber === selectedLevelTab) || window.CURRICULUM_DATA[0];

        // Update hero banner
        document.getElementById('path-level-title').textContent = currentLevelData.title;
        document.getElementById('path-level-desc').textContent = currentLevelData.subtitle;

        // Render Unit Cards
        unitsContainer.innerHTML = '';
        const isLevelUnlocked = window.appState.data.unlockedLevels.includes(currentLevelData.levelNumber);

        currentLevelData.units.forEach(unit => {
            const unitCard = document.createElement('div');
            unitCard.className = 'unit-syllabus-card';

            const header = document.createElement('div');
            header.className = 'unit-card-header';
            header.innerHTML = `
                <div class="unit-header-info">
                    <h3>${unit.title}</h3>
                    <p>${unit.description}</p>
                </div>
                <div class="track-badge">
                    ${unit.lessons.length} Sesi Pembelajaran
                </div>
            `;
            unitCard.appendChild(header);

            const lessonsGroup = document.createElement('div');
            lessonsGroup.className = 'lessons-list-group';

            unit.lessons.forEach((lesson, lIdx) => {
                const row = document.createElement('div');
                row.className = 'lesson-row-item';

                const isCompleted = window.appState.isLessonCompleted(lesson.id);

                let statusIconHtml = '';
                let statusClass = 'locked';
                let btnHtml = '';

                if (isLevelUnlocked) {
                    if (isCompleted) {
                        statusClass = 'completed';
                        statusIconHtml = '✓';
                        btnHtml = `<button class="btn-modern btn-outline" style="font-size: 0.85rem; padding: 6px 14px;">Tinjau Materi ➔</button>`;
                    } else {
                        statusClass = 'active';
                        statusIconHtml = `${lIdx + 1}`;
                        btnHtml = `<button class="btn-modern btn-primary" style="font-size: 0.85rem; padding: 6px 14px;">Mulai Sesi ➔</button>`;
                    }
                } else {
                    statusClass = 'locked';
                    statusIconHtml = '🔒';
                    btnHtml = `<button class="btn-modern btn-outline" disabled style="font-size: 0.85rem; padding: 6px 14px;">Terkunci</button>`;
                }

                row.innerHTML = `
                    <div class="lesson-meta-left">
                        <div class="lesson-status-icon ${statusClass}">
                            ${statusIconHtml}
                        </div>
                        <div class="lesson-info-text">
                            <h4>${lesson.title}</h4>
                            <span>${lesson.questions.length} Butir Soal • +${lesson.xp} XP</span>
                        </div>
                    </div>
                    <div>
                        ${btnHtml}
                    </div>
                `;

                if (isLevelUnlocked) {
                    row.style.cursor = 'pointer';
                    row.onclick = () => startLesson(lesson, currentLevelData);
                } else {
                    row.style.opacity = '0.6';
                    row.onclick = () => {
                        window.soundCtrl?.playWrong();
                        alert('Tingkat ini belum terbuka. Anda dapat membukanya dengan menyelesaikan tingkat sebelumnya atau melalui Tes Penempatan.');
                    };
                }

                lessonsGroup.appendChild(row);
            });

            unitCard.appendChild(lessonsGroup);
            unitsContainer.appendChild(unitCard);
        });
    }

    // ----------------------------------------------------------------
    // 4. INTERACTIVE EXERCISE ENGINE
    // ----------------------------------------------------------------
    let activeLesson = null;
    let activeLessonLevel = null;
    let currentQuestionIdx = 0;
    let currentQuestion = null;
    let userSelection = null;
    let selectedWordChips = [];
    let matchedPairsCount = 0;
    let selectedMatchingPair = { en: null, id: null };
    let correctAnswersCount = 0;

    const exerciseModal = document.getElementById('exercise-modal');
    const lessonFinishModal = document.getElementById('lesson-finish-modal');
    const exerciseProgressBar = document.getElementById('lesson-progress-bar');
    const exercisePromptBubble = document.getElementById('exercise-prompt-bubble');
    const exerciseInteractionBody = document.getElementById('exercise-interaction-body');
    const exerciseAudioBar = document.getElementById('exercise-audio-bar');
    const btnAudioSpeak = document.getElementById('btn-exercise-audio');
    const btnAudioSlow = document.getElementById('btn-exercise-audio-slow');
    const exerciseBottomBar = document.getElementById('exercise-bottom-bar');
    const feedbackInfo = document.getElementById('feedback-info');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackTip = document.getElementById('feedback-tip');
    const btnExerciseAction = document.getElementById('btn-exercise-action');

    function startLesson(lesson, levelData) {
        // Deep clone so base curriculum dataset remains pristine
        const clonedQuestions = JSON.parse(JSON.stringify(lesson.questions));

        // 1. Shuffle the order of the 15 questions
        for (let i = clonedQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [clonedQuestions[i], clonedQuestions[j]] = [clonedQuestions[j], clonedQuestions[i]];
        }

        // 2. Scramble choices for multiple choice / listen / blank questions & word bank trays
        clonedQuestions.forEach(q => {
            if (Array.isArray(q.options) && q.options.length > 1) {
                const origIdx = (q.correctIndex !== undefined) ? q.correctIndex : 0;
                const items = q.options.map((opt, i) => ({ opt, isCorrect: i === origIdx }));
                for (let i = items.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [items[i], items[j]] = [items[j], items[i]];
                }
                q.options = items.map(it => it.opt);
                q.correctIndex = items.findIndex(it => it.isCorrect);
            }
            if (q.type === 'word_bank' && Array.isArray(q.words)) {
                for (let i = q.words.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [q.words[i], q.words[j]] = [q.words[j], q.words[i]];
                }
            }
        });

        activeLesson = {
            ...lesson,
            questions: clonedQuestions
        };
        activeLessonLevel = levelData;
        currentQuestionIdx = 0;
        correctAnswersCount = 0;

        exerciseModal.classList.add('active');
        renderLessonQuestion();
    }

    document.getElementById('btn-exit-lesson')?.addEventListener('click', () => {
        if (confirm('Apakah Anda ingin menutup sesi pembelajaran ini?')) {
            exerciseModal.classList.remove('active');
            window.speechCtrl?.stop();
        }
    });

    function renderLessonQuestion() {
        if (!activeLesson || currentQuestionIdx >= activeLesson.questions.length) {
            finishLesson();
            return;
        }

        currentQuestion = activeLesson.questions[currentQuestionIdx];
        userSelection = null;
        selectedWordChips = [];
        matchedPairsCount = 0;
        selectedMatchingPair = { en: null, id: null };

        // Reset Bottom Bar
        exerciseBottomBar.className = 'exercise-bottom-bar';
        feedbackInfo.style.display = 'none';
        btnExerciseAction.disabled = true;
        btnExerciseAction.textContent = 'Periksa Jawaban';
        btnExerciseAction.onclick = checkLessonAnswer;

        // Progress bar & counter
        const progressPct = ((currentQuestionIdx) / activeLesson.questions.length) * 100;
        exerciseProgressBar.style.width = `${progressPct}%`;
        document.getElementById('session-counter-badge').textContent = `Soal ${currentQuestionIdx + 1} / ${activeLesson.questions.length}`;

        document.getElementById('exercise-heading').textContent = getHeadingForType(currentQuestion.type);
        exercisePromptBubble.textContent = currentQuestion.prompt;

        // Audio controls
        if (currentQuestion.audioText) {
            exerciseAudioBar.style.display = 'flex';
            btnAudioSpeak.onclick = () => window.speechCtrl.speak(currentQuestion.audioText, false);
            btnAudioSlow.onclick = () => window.speechCtrl.speak(currentQuestion.audioText, true);
            setTimeout(() => window.speechCtrl.speak(currentQuestion.audioText, false), 250);
        } else {
            exerciseAudioBar.style.display = 'none';
        }

        exerciseInteractionBody.innerHTML = '';

        if (currentQuestion.type === 'choice' || currentQuestion.type === 'listen' || currentQuestion.type === 'blank') {
            renderChoiceQuestion();
        } else if (currentQuestion.type === 'word_bank') {
            renderWordBankQuestion();
        } else if (currentQuestion.type === 'matching') {
            renderMatchingQuestion();
        }
    }

    function getHeadingForType(type) {
        switch (type) {
            case 'choice': return 'Pilih Jawaban yang Tepat';
            case 'listen': return 'Listening & Pemahaman';
            case 'word_bank': return 'Penyusunan Struktur Kalimat';
            case 'matching': return 'Pencocokan Kosakata';
            case 'blank': return 'Pengisian Kalimat Rumpang';
            default: return 'Latihan Terstruktur';
        }
    }

    function renderChoiceQuestion() {
        const container = document.createElement('div');
        container.className = 'choice-grid';

        currentQuestion.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'choice-card';
            card.innerHTML = `
                <div class="choice-key">${String.fromCharCode(65 + idx)}</div>
                <div>${opt}</div>
            `;
            card.onclick = () => {
                window.soundCtrl?.playClick();
                document.querySelectorAll('.choice-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                userSelection = idx;
                btnExerciseAction.disabled = false;
            };
            container.appendChild(card);
        });

        exerciseInteractionBody.appendChild(container);
    }

    function renderWordBankQuestion() {
        const dropZone = document.createElement('div');
        dropZone.className = 'sentence-drop-zone';

        const tray = document.createElement('div');
        tray.className = 'word-bank-tray';

        currentQuestion.words.forEach((word, idx) => {
            const chip = document.createElement('button');
            chip.className = 'word-chip';
            chip.textContent = word;

            chip.onclick = () => {
                window.soundCtrl?.playClick();
                if (chip.classList.contains('used')) {
                    chip.classList.remove('used');
                    const dropped = dropZone.querySelector(`[data-origin-idx="${idx}"]`);
                    if (dropped) dropZone.removeChild(dropped);
                    selectedWordChips = selectedWordChips.filter(w => w.idx !== idx);
                } else {
                    chip.classList.add('used');
                    const droppedChip = document.createElement('button');
                    droppedChip.className = 'word-chip';
                    droppedChip.textContent = word;
                    droppedChip.dataset.originIdx = idx;
                    droppedChip.onclick = () => {
                        window.soundCtrl?.playClick();
                        chip.classList.remove('used');
                        dropZone.removeChild(droppedChip);
                        selectedWordChips = selectedWordChips.filter(w => w.idx !== idx);
                        btnExerciseAction.disabled = selectedWordChips.length === 0;
                    };
                    dropZone.appendChild(droppedChip);
                    selectedWordChips.push({ word, idx });
                }
                btnExerciseAction.disabled = selectedWordChips.length === 0;
            };

            tray.appendChild(chip);
        });

        exerciseInteractionBody.appendChild(dropZone);
        exerciseInteractionBody.appendChild(tray);
    }

    function renderMatchingQuestion() {
        const grid = document.createElement('div');
        grid.className = 'matching-container';

        const pairs = currentQuestion.pairs;
        const enWords = pairs.map(p => p.en).sort(() => Math.random() - 0.5);
        const idWords = pairs.map(p => p.id).sort(() => Math.random() - 0.5);

        const colLeft = document.createElement('div');
        colLeft.style.display = 'flex';
        colLeft.style.flexDirection = 'column';
        colLeft.style.gap = '10px';

        const colRight = document.createElement('div');
        colRight.style.display = 'flex';
        colRight.style.flexDirection = 'column';
        colRight.style.gap = '10px';

        enWords.forEach(w => {
            const card = document.createElement('div');
            card.className = 'matching-card';
            card.textContent = w;
            card.dataset.en = w;
            card.onclick = () => selectMatchingCard('en', w, card);
            colLeft.appendChild(card);
        });

        idWords.forEach(w => {
            const card = document.createElement('div');
            card.className = 'matching-card';
            card.textContent = w;
            card.dataset.id = w;
            card.onclick = () => selectMatchingCard('id', w, card);
            colRight.appendChild(card);
        });

        grid.appendChild(colLeft);
        grid.appendChild(colRight);
        exerciseInteractionBody.appendChild(grid);
    }

    function selectMatchingCard(side, text, elem) {
        if (elem.classList.contains('matched')) return;
        window.soundCtrl?.playClick();

        document.querySelectorAll(`.matching-card[data-${side}]`).forEach(c => c.classList.remove('selected'));
        elem.classList.add('selected');
        selectedMatchingPair[side] = { text, elem };

        if (selectedMatchingPair.en && selectedMatchingPair.id) {
            const enText = selectedMatchingPair.en.text;
            const idText = selectedMatchingPair.id.text;

            const isMatch = currentQuestion.pairs.some(p => p.en === enText && p.id === idText);

            if (isMatch) {
                window.soundCtrl?.playCorrect();
                selectedMatchingPair.en.elem.className = 'matching-card matched';
                selectedMatchingPair.id.elem.className = 'matching-card matched';
                matchedPairsCount++;

                if (matchedPairsCount >= currentQuestion.pairs.length) {
                    btnExerciseAction.disabled = false;
                    checkLessonAnswer(true);
                }
            } else {
                window.soundCtrl?.playWrong();
                selectedMatchingPair.en.elem.classList.remove('selected');
                selectedMatchingPair.id.elem.classList.remove('selected');
            }

            selectedMatchingPair = { en: null, id: null };
        }
    }

    function checkLessonAnswer(isMatchAutoCorrect = false) {
        let isCorrect = false;

        if (isMatchAutoCorrect === true || currentQuestion.type === 'matching') {
            isCorrect = true;
        } else if (currentQuestion.type === 'word_bank') {
            const assembled = selectedWordChips.map(c => c.word).join(' ');
            const target = currentQuestion.correctWords.join(' ');
            isCorrect = (assembled === target);
        } else {
            isCorrect = (userSelection === currentQuestion.correctIndex);
        }

        feedbackInfo.style.display = 'flex';

        if (isCorrect) {
            window.soundCtrl?.playCorrect();
            exerciseBottomBar.className = 'exercise-bottom-bar feedback-correct';
            feedbackIcon.textContent = '✓';
            feedbackTitle.textContent = 'Jawaban Tepat';
            feedbackTip.innerHTML = (currentQuestion.tip || 'Analisis tata bahasa Anda sudah benar.').replace(/\n/g, '<br>');
            correctAnswersCount++;
        } else {
            window.soundCtrl?.playWrong();
            exerciseBottomBar.className = 'exercise-bottom-bar feedback-wrong';
            feedbackIcon.textContent = '✕';
            feedbackTitle.textContent = 'Kurang Tepat';

            let correctText = '';
            if (currentQuestion.type === 'word_bank') {
                correctText = currentQuestion.correctWords.join(' ');
            } else {
                correctText = currentQuestion.options[currentQuestion.correctIndex];
            }
            feedbackTip.innerHTML = `<strong>Kunci Jawaban:</strong> "${correctText}"<br>${(currentQuestion.tip || '').replace(/\n/g, '<br>')}`;
        }

        btnExerciseAction.textContent = 'Lanjutkan ➔';
        btnExerciseAction.disabled = false;
        btnExerciseAction.onclick = () => {
            currentQuestionIdx++;
            renderLessonQuestion();
        };
    }

    function finishLesson() {
        exerciseModal.classList.remove('active');
        const xpEarned = activeLesson.xp || 20;
        const totalQ = activeLesson.questions.length;
        const accuracy = Math.round((correctAnswersCount / totalQ) * 100);

        window.appState.completeLesson(activeLesson.id, xpEarned);

        window.soundCtrl?.playFanfare();
        window.confetti?.fire(90);

        document.getElementById('finish-xp-val').textContent = `+${xpEarned} XP`;
        document.getElementById('finish-acc-val').textContent = `${accuracy}%`;

        lessonFinishModal.classList.add('active');

        document.getElementById('btn-finish-lesson-continue').onclick = () => {
            lessonFinishModal.classList.remove('active');
            renderLearningPath();
        };
    }

    // ----------------------------------------------------------------
    // 5. DIAGNOSTIC / PLACEMENT TEST CONTROLLER
    // ----------------------------------------------------------------
    let placementIdx = 0;
    let placementScore = 0;
    let placementSelection = null;
    let activePlacementList = [];

    const introScreen = document.getElementById('placement-intro-screen');
    const runnerScreen = document.getElementById('placement-runner');
    const resultScreen = document.getElementById('placement-result-screen');
    const btnNextPlacement = document.getElementById('btn-next-placement');

    function preparePlacementTestData() {
        const cloned = JSON.parse(JSON.stringify(window.PLACEMENT_TEST_DATA));
        cloned.forEach(q => {
            if (Array.isArray(q.options) && q.options.length > 1) {
                const origIdx = (q.correctIndex !== undefined) ? q.correctIndex : 0;
                const items = q.options.map((opt, i) => ({ opt, isCorrect: i === origIdx }));
                for (let i = items.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [items[i], items[j]] = [items[j], items[i]];
                }
                q.options = items.map(it => it.opt);
                q.correctIndex = items.findIndex(it => it.isCorrect);
            }
        });
        return cloned;
    }

    document.getElementById('btn-start-placement')?.addEventListener('click', () => {
        window.soundCtrl?.playClick();
        activePlacementList = preparePlacementTestData();
        placementIdx = 0;
        placementScore = 0;
        introScreen.style.display = 'none';
        resultScreen.style.display = 'none';
        runnerScreen.style.display = 'block';
        renderPlacementQuestion();
    });

    document.getElementById('btn-retake-placement')?.addEventListener('click', () => {
        window.soundCtrl?.playClick();
        introScreen.style.display = 'block';
        resultScreen.style.display = 'none';
        runnerScreen.style.display = 'none';
    });

    function renderPlacementQuestion() {
        if (!activePlacementList.length) activePlacementList = preparePlacementTestData();
        if (placementIdx >= activePlacementList.length) {
            finishPlacementTest();
            return;
        }

        const q = activePlacementList[placementIdx];
        placementSelection = null;
        btnNextPlacement.disabled = true;

        document.getElementById('placement-q-category').textContent = q.category;
        const totalCount = activePlacementList.length;
        document.getElementById('placement-q-counter').textContent = `Soal ${placementIdx + 1} dari ${totalCount}`;
        const pct = ((placementIdx) / totalCount) * 100;
        document.getElementById('placement-progress-bar').style.width = `${pct}%`;

        const audioBox = document.getElementById('placement-audio-box');
        if (q.hasAudio) {
            audioBox.style.display = 'block';
            document.getElementById('btn-placement-listen').onclick = () => window.speechCtrl.speak(q.audioText, false);
            document.getElementById('btn-placement-slow').onclick = () => window.speechCtrl.speak(q.audioText, true);
            setTimeout(() => window.speechCtrl.speak(q.audioText, false), 300);
        } else {
            audioBox.style.display = 'none';
        }

        document.getElementById('placement-prompt-text').textContent = q.prompt;

        const optContainer = document.getElementById('placement-options-container');
        optContainer.innerHTML = '';

        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = 'choice-card';
            card.innerHTML = `<div class="choice-key">${String.fromCharCode(65 + idx)}</div><div>${opt}</div>`;
            card.onclick = () => {
                window.soundCtrl?.playClick();
                document.querySelectorAll('#placement-options-container .choice-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                placementSelection = idx;
                btnNextPlacement.disabled = false;
            };
            optContainer.appendChild(card);
        });
    }

    btnNextPlacement?.addEventListener('click', () => {
        const q = activePlacementList[placementIdx];
        if (placementSelection === q.correctIndex) {
            placementScore++;
        }
        placementIdx++;
        renderPlacementQuestion();
    });

    function finishPlacementTest() {
        runnerScreen.style.display = 'none';
        resultScreen.style.display = 'block';

        const rec = window.getCEFRRecommendation(placementScore, window.PLACEMENT_TEST_DATA.length);

        window.appState.saveDiagnosticResult({
            score: placementScore,
            total: window.PLACEMENT_TEST_DATA.length,
            levelCode: rec.levelCode,
            title: rec.title,
            date: new Date().toLocaleDateString('id-ID')
        });

        window.soundCtrl?.playFanfare();
        window.confetti?.fire(100);

        document.getElementById('rep-cefr-badge').textContent = rec.title;
        document.getElementById('rep-cefr-badge').style.background = rec.color;
        document.getElementById('rep-badge-emoji').textContent = rec.badge;
        document.getElementById('rep-level-name').textContent = rec.levelName;
        document.getElementById('rep-description').textContent = rec.description;
        document.getElementById('rep-score-val').textContent = `${placementScore} / ${window.PLACEMENT_TEST_DATA.length}`;
        const pct = Math.round((placementScore / window.PLACEMENT_TEST_DATA.length) * 100);
        document.getElementById('rep-percent-val').textContent = `${pct}%`;

        document.getElementById('rep-strengths').textContent = rec.strengths.join(' ');
        document.getElementById('rep-areas').textContent = rec.areasToFocus.join(' ');

        document.getElementById('btn-jump-to-recommended').onclick = () => {
            selectedLevelTab = rec.recommendedLevelNum;
            switchView('path-view');
        };
    }

    // ----------------------------------------------------------------
    // 6. TOEFL PRACTICE SIMULATOR CONTROLLER
    // ----------------------------------------------------------------
    let toeflQuestionsList = [];
    let toeflCurrentQIdx = 0;
    let toeflUserAnswers = {};
    let toeflFlaggedQuestions = {};
    let toeflTimerInterval = null;
    let toeflSecondsLeft = 25 * 60;

    const toeflDashboard = document.getElementById('toefl-dashboard-screen');
    const toeflExam = document.getElementById('toefl-exam-screen');
    const toeflResult = document.getElementById('toefl-result-screen');
    const toeflTimerDisplay = document.getElementById('toefl-timer-display');

    function renderToeflDashboard() {
        const histContainer = document.getElementById('toefl-history-container');
        if (!histContainer) return;

        const records = window.appState.data.toeflRecords || [];
        if (records.length === 0) {
            histContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem; font-style: italic;">Belum ada data latihan. Selesaikan tes pertama Anda untuk melihat laporan skor.</p>';
            return;
        }

        histContainer.innerHTML = records.map(r => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border-radius: var(--radius-sm); background: var(--bg-surface-alt); margin-bottom: 8px; border: 1px solid var(--border-color);">
                <div>
                    <strong>Skor TOEFL ITP: ${r.itpTotal}</strong>
                    <span style="font-size: 0.85rem; color: var(--text-secondary); margin-left: 8px;">(${r.bandName})</span>
                    <div style="font-size: 0.78rem; color: var(--text-muted);">${r.date}</div>
                </div>
                <div style="font-weight: 700; color: var(--primary);">
                    iBT: ${r.ibtEquivalent}/120
                </div>
            </div>
        `).join('');
    }

    window.startToeflSection = function(secIndex) {
        const freshExam = window.generateToeflExamData(true);
        startToeflExam([freshExam.sections[secIndex]], false);
    };

    document.getElementById('btn-start-full-toefl')?.addEventListener('click', () => {
        const freshExam = window.generateToeflExamData(true);
        startToeflExam(freshExam.sections, true);
    });

    document.getElementById('btn-quick-toefl-practice')?.addEventListener('click', () => {
        const freshExam = window.generateToeflExamData(true);
        startToeflExam(freshExam.sections, false);
    });

    function startToeflExam(sections, timed = true) {
        window.soundCtrl?.playClick();
        toeflQuestionsList = [];

        const activeSections = sections || window.generateToeflExamData(true).sections;

        activeSections.forEach(sec => {
            sec.questions.forEach(q => {
                toeflQuestionsList.push({
                    ...q,
                    sectionName: sec.name,
                    sectionId: sec.id,
                    passage: q.passage || sec.passage
                });
            });
        });

        toeflCurrentQIdx = 0;
        toeflUserAnswers = {};
        toeflFlaggedQuestions = {};
        if (timed) {
            if (sections.length === 1) {
                toeflSecondsLeft = (sections[0].durationMinutes || 35) * 60;
            } else {
                toeflSecondsLeft = 115 * 60; // 115 minutes for official 150-question test
            }
        } else {
            toeflSecondsLeft = 0;
        }

        toeflDashboard.style.display = 'none';
        toeflResult.style.display = 'none';
        toeflExam.style.display = 'block';

        if (toeflTimerInterval) clearInterval(toeflTimerInterval);

        if (timed) {
            toeflTimerDisplay.parentElement.style.display = 'flex';
            updateTimerDisplay();
            toeflTimerInterval = setInterval(() => {
                toeflSecondsLeft--;
                updateTimerDisplay();
                if (toeflSecondsLeft <= 0) {
                    clearInterval(toeflTimerInterval);
                    alert('Waktu ujian TOEFL telah berakhir.');
                    finishToeflExam();
                }
            }, 1000);
        } else {
            toeflTimerDisplay.parentElement.style.display = 'none';
        }

        renderToeflQuestion();
    }

    function updateTimerDisplay() {
        const m = Math.floor(toeflSecondsLeft / 60);
        const s = toeflSecondsLeft % 60;
        toeflTimerDisplay.textContent = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    function renderToeflQuestion() {
        const q = toeflQuestionsList[toeflCurrentQIdx];
        if (!q) return;

        document.getElementById('toefl-current-section-name').textContent = q.sectionName;

        const palette = document.getElementById('toefl-question-palette');
        palette.innerHTML = '';
        toeflQuestionsList.forEach((item, idx) => {
            const btn = document.createElement('button');
            const isAnswered = toeflUserAnswers[item.id] !== undefined;
            const isCurrent = idx === toeflCurrentQIdx;
            const isFlagged = !!toeflFlaggedQuestions[item.id];

            btn.className = `palette-btn ${isCurrent ? 'current' : (isAnswered ? 'answered' : '')}`;
            if (isFlagged) btn.style.borderColor = 'var(--warning)';
            btn.textContent = idx + 1;
            btn.onclick = () => {
                toeflCurrentQIdx = idx;
                renderToeflQuestion();
            };
            palette.appendChild(btn);
        });

        const passageBox = document.getElementById('toefl-reading-passage-box');
        if (q.passage) {
            passageBox.style.display = 'block';
            document.getElementById('passage-title').textContent = q.passage.title;
            document.getElementById('passage-text').textContent = q.passage.text;
        } else {
            passageBox.style.display = 'none';
        }

        const audioPlayerBox = document.getElementById('toefl-audio-player-box');
        const transcriptText = document.getElementById('toefl-transcript-text');
        if (q.audioScript) {
            audioPlayerBox.style.display = 'block';
            transcriptText.style.display = 'none';
            transcriptText.textContent = q.speakerText || q.audioScript;

            document.getElementById('btn-play-toefl-audio').onclick = () => {
                window.soundCtrl?.playClick();
                window.speechCtrl.speak(q.audioScript, false);
            };

            document.getElementById('btn-toggle-transcript').onclick = () => {
                transcriptText.style.display = transcriptText.style.display === 'none' ? 'block' : 'none';
            };
        } else {
            audioPlayerBox.style.display = 'none';
        }

        const underlinedBox = document.getElementById('toefl-underlined-box');
        if (q.underlinedSentence) {
            underlinedBox.style.display = 'block';
            let formatted = q.underlinedSentence.replace(/\[([A-D]):\s([^\]]+)\]/g, (match, letter, word) => {
                return `<u style="text-decoration-thickness: 2px; text-decoration-color: var(--primary); cursor: pointer;" title="Pilihan ${letter}"><strong>(${letter})</strong> ${word}</u>`;
            });
            underlinedBox.innerHTML = formatted;
        } else {
            underlinedBox.style.display = 'none';
        }

        document.getElementById('toefl-question-prompt').textContent = q.prompt;

        const optContainer = document.getElementById('toefl-options-container');
        optContainer.innerHTML = '';

        q.options.forEach((opt, idx) => {
            const card = document.createElement('div');
            card.className = `choice-card ${toeflUserAnswers[q.id] === idx ? 'selected' : ''}`;
            card.innerHTML = `<div class="choice-key">${String.fromCharCode(65 + idx)}</div><div>${opt}</div>`;
            card.onclick = () => {
                window.soundCtrl?.playClick();
                toeflUserAnswers[q.id] = idx;
                renderToeflQuestion();
            };
            optContainer.appendChild(card);
        });

        const btnPrev = document.getElementById('btn-prev-toefl');
        const btnNext = document.getElementById('btn-next-toefl');
        const btnFinish = document.getElementById('btn-finish-toefl');

        btnPrev.disabled = toeflCurrentQIdx === 0;

        if (toeflCurrentQIdx === toeflQuestionsList.length - 1) {
            btnNext.style.display = 'none';
            btnFinish.style.display = 'inline-flex';
        } else {
            btnNext.style.display = 'inline-flex';
            btnFinish.style.display = 'none';
        }
    }

    document.getElementById('btn-flag-question')?.addEventListener('click', () => {
        const q = toeflQuestionsList[toeflCurrentQIdx];
        if (!q) return;
        toeflFlaggedQuestions[q.id] = !toeflFlaggedQuestions[q.id];
        renderToeflQuestion();
    });

    document.getElementById('btn-prev-toefl')?.addEventListener('click', () => {
        if (toeflCurrentQIdx > 0) {
            toeflCurrentQIdx--;
            renderToeflQuestion();
        }
    });

    document.getElementById('btn-next-toefl')?.addEventListener('click', () => {
        if (toeflCurrentQIdx < toeflQuestionsList.length - 1) {
            toeflCurrentQIdx++;
            renderToeflQuestion();
        }
    });

    document.getElementById('btn-finish-toefl')?.addEventListener('click', () => {
        const answeredCount = Object.keys(toeflUserAnswers).length;
        const total = toeflQuestionsList.length;
        if (answeredCount < total) {
            if (!confirm(`Anda baru menjawab ${answeredCount} dari ${total} soal. Apakah Anda yakin ingin mengakhiri sesi ujian sekarang?`)) {
                return;
            }
        }
        if (toeflTimerInterval) clearInterval(toeflTimerInterval);
        finishToeflExam();
    });

    function finishToeflExam() {
        toeflExam.style.display = 'none';
        toeflResult.style.display = 'block';

        let s1Correct = 0, s1Total = 0;
        let s2Correct = 0, s2Total = 0;
        let s3Correct = 0, s3Total = 0;

        toeflQuestionsList.forEach(q => {
            const userPick = toeflUserAnswers[q.id];
            const isCorrect = userPick === q.correctIndex;

            if (q.sectionId === 'section_1') {
                s1Total++;
                if (isCorrect) s1Correct++;
            } else if (q.sectionId === 'section_2') {
                s2Total++;
                if (isCorrect) s2Correct++;
            } else if (q.sectionId === 'section_3') {
                s3Total++;
                if (isCorrect) s3Correct++;
            }
        });

        const scoreObj = window.calculateToeflScore({
            section1: { correct: s1Correct, total: s1Total || 1 },
            section2: { correct: s2Correct, total: s2Total || 1 },
            section3: { correct: s3Correct, total: s3Total || 1 }
        });

        window.appState.saveToeflRecord({
            itpTotal: scoreObj.itpTotal,
            ibtEquivalent: scoreObj.ibtEquivalent,
            bandName: scoreObj.bandName,
            date: new Date().toLocaleDateString('id-ID')
        });

        window.soundCtrl?.playFanfare();
        window.confetti?.fire(100);

        document.getElementById('toefl-final-scaled-score').textContent = scoreObj.itpTotal;
        document.getElementById('toefl-ibt-score').textContent = `${scoreObj.ibtEquivalent} / 120`;
        document.getElementById('toefl-band-name').textContent = scoreObj.bandName;
        document.getElementById('rep-toefl-s1').textContent = scoreObj.s1Score;
        document.getElementById('rep-toefl-s2').textContent = scoreObj.s2Score;
        document.getElementById('rep-toefl-s3').textContent = scoreObj.s3Score;
        document.getElementById('toefl-feedback-text').textContent = scoreObj.recommendation;

        renderToeflReviewList('ALL');
    }

    let toeflReviewFilter = 'ALL';
    document.getElementById('btn-filter-all-ans')?.addEventListener('click', () => {
        toeflReviewFilter = 'ALL';
        document.getElementById('btn-filter-all-ans').classList.add('active');
        document.getElementById('btn-filter-wrong-ans').classList.remove('active');
        renderToeflReviewList('ALL');
    });

    document.getElementById('btn-filter-wrong-ans')?.addEventListener('click', () => {
        toeflReviewFilter = 'WRONG';
        document.getElementById('btn-filter-wrong-ans').classList.add('active');
        document.getElementById('btn-filter-all-ans').classList.remove('active');
        renderToeflReviewList('WRONG');
    });

    function renderToeflReviewList(filter) {
        const container = document.getElementById('toefl-review-list-container');
        if (!container) return;
        container.innerHTML = '';

        toeflQuestionsList.forEach((q, idx) => {
            const userPick = toeflUserAnswers[q.id];
            const isCorrect = userPick === q.correctIndex;

            if (filter === 'WRONG' && isCorrect) return;

            const card = document.createElement('div');
            card.style.background = isCorrect ? 'var(--bg-surface-alt)' : 'var(--danger-subtle)';
            card.style.border = `1px solid ${isCorrect ? 'var(--border-color)' : 'var(--danger-border)'}`;
            card.style.borderRadius = 'var(--radius-md)';
            card.style.padding = '18px';

            const userText = userPick !== undefined ? q.options[userPick] : '(Tidak dijawab)';
            const correctText = q.options[q.correctIndex];

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <strong>Soal ${idx + 1} - ${q.sectionName}</strong>
                    <span style="font-weight: 700; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
                        ${isCorrect ? '✓ Benar' : '✕ Salah'}
                    </span>
                </div>
                <div style="font-size: 0.95rem; margin-bottom: 8px; font-weight: 600;">${q.prompt}</div>
                <div style="font-size: 0.88rem; margin-bottom: 4px;">
                    Jawaban Anda: <span style="font-weight: 600; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">${userText}</span>
                </div>
                ${!isCorrect ? `<div style="font-size: 0.88rem; color: var(--success); font-weight: 600; margin-bottom: 6px;">Kunci Jawaban: ${correctText}</div>` : ''}
                <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 10px; font-size: 0.85rem; color: var(--text-secondary); margin-top: 8px;">
                    <strong>📖 Pembahasan:</strong> ${q.explanation}
                </div>
            `;

            container.appendChild(card);
        });
    }

    document.getElementById('btn-back-toefl-menu')?.addEventListener('click', () => {
        toeflDashboard.style.display = 'block';
        toeflResult.style.display = 'none';
        renderToeflDashboard();
    });

    document.getElementById('btn-retake-toefl-fresh')?.addEventListener('click', () => {
        const freshExam = window.generateToeflExamData(true);
        startToeflExam(freshExam.sections, true);
    });

    // ----------------------------------------------------------------
    // 7. VOCABULARY & FLASHCARDS CONTROLLER
    // ----------------------------------------------------------------
    // 7. ENGLISH MINIGAMES ARCADE INTEGRATION
    function renderCurrentVocab() {
        if (window.miniGamesCtrl) {
            window.miniGamesCtrl.init();
        }
    }
    window.renderCurrentVocab = renderCurrentVocab;

    // ----------------------------------------------------------------
    // 8. PROFILE & ANALYTICS CONTROLLER
    // ----------------------------------------------------------------
    function renderProfileStats() {
        const d = window.appState.data;
        document.getElementById('prof-streak-count').textContent = `${d.streak} Hari 🔥`;
        document.getElementById('prof-total-xp').textContent = `${d.xp} XP`;
        document.getElementById('prof-vocab-count').textContent = `${d.learnedWords.length} Kata`;

        const diagBadge = document.getElementById('profile-cefr-badge');
        if (d.diagnosticResult) {
            diagBadge.textContent = `${d.diagnosticResult.title} (${d.diagnosticResult.score}/${d.diagnosticResult.total})`;
        } else {
            diagBadge.textContent = `Semua Tingkat Terbuka (A1 - C1)`;
        }

        const dailyGoal = d.dailyGoal || 50;
        const currentDailyXP = d.dailyXP || 0;
        const dailyPct = Math.min(100, Math.round((currentDailyXP / dailyGoal) * 100));

        document.getElementById('prof-daily-label').textContent = `${currentDailyXP} / ${dailyGoal} XP hari ini`;
        document.getElementById('prof-daily-percent').textContent = `${dailyPct}%`;
        document.getElementById('prof-daily-progress').style.width = `${dailyPct}%`;

        // Update Profile Account Card Details
        const currentUser = window.appState.getCurrentUser();
        const profAvatar = document.getElementById('prof-user-avatar');
        const profName = document.getElementById('prof-user-name');
        const profEmail = document.getElementById('prof-user-email');
        const profCardEmail = document.getElementById('prof-card-email-label');

        if (profAvatar) {
            profAvatar.textContent = currentUser.avatarInitials;
            profAvatar.style.background = currentUser.avatarColor;
        }
        if (profName) profName.textContent = currentUser.name;
        if (profEmail) profEmail.textContent = currentUser.email;
        if (profCardEmail) profCardEmail.textContent = currentUser.email;
    }

    window.confirmResetData = function() {
        if (confirm('Apakah Anda yakin ingin mereset seluruh data riwayat pembelajaran Anda?')) {
            window.appState.resetAll();
            window.soundCtrl?.playWrong();
            renderProfileStats();
            renderLearningPath();
            updateTopBar();
            alert('Semua data progres telah direset.');
        }
    };

    // ----------------------------------------------------------------
    // 9. AUTHENTICATION & PASSWORD MANAGEMENT CONTROLLER
    // ----------------------------------------------------------------
    const authModal = document.getElementById('auth-modal');
    const authAlertBox = document.getElementById('auth-alert-box');
    const btnOpenAuth = document.getElementById('btn-open-auth-modal');
    const topUserPill = document.getElementById('top-user-pill');
    const btnCloseAuth = document.getElementById('btn-close-auth-modal');

    function showAuthAlert(message, isSuccess = false) {
        if (!authAlertBox) return;
        authAlertBox.style.display = 'block';
        authAlertBox.style.background = isSuccess ? 'var(--success-subtle)' : 'var(--danger-subtle)';
        authAlertBox.style.color = isSuccess ? 'var(--success)' : 'var(--danger)';
        authAlertBox.style.border = `1px solid ${isSuccess ? 'var(--success-border)' : 'var(--danger-border)'}`;
        authAlertBox.textContent = message;
    }

    function hideAuthAlert() {
        if (authAlertBox) authAlertBox.style.display = 'none';
    }

    function openAuthModal(defaultTab = 'login') {
        if (!authModal) return;
        hideAuthAlert();
        switchAuthTab(defaultTab);
        authModal.style.display = 'flex';
        window.soundCtrl?.playClick();
    }

    function closeAuthModal() {
        if (!authModal) return;
        authModal.style.display = 'none';
        hideAuthAlert();
    }

    function switchAuthTab(tabName) {
        hideAuthAlert();
        document.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.auth-form-panel').forEach(f => {
            f.style.display = 'none';
            f.classList.remove('active');
        });

        const activeBtn = document.getElementById(`tab-btn-${tabName}`);
        const activeForm = document.getElementById(`form-auth-${tabName}`);
        const subtitle = document.getElementById('auth-modal-subtitle');

        if (activeBtn) activeBtn.classList.add('active');
        if (activeForm) {
            activeForm.style.display = 'block';
            activeForm.classList.add('active');
        }

        if (subtitle) {
            if (tabName === 'login') {
                subtitle.textContent = 'Masuk dengan akun email Anda untuk melanjutkan dan menyimpan seluruh progres pembelajaran.';
            } else if (tabName === 'register') {
                subtitle.textContent = 'Daftarkan akun email Anda secara gratis untuk mendapatkan kurikulum lengkap Level 1 s.d. Level 5.';
            } else if (tabName === 'reset') {
                subtitle.textContent = 'Atur ulang kata sandi akun email Anda dengan mudah dan aman.';
            }
        }
    }

    // Header User Profile Pill -> Go to Profile View
    if (topUserPill) {
        topUserPill.onclick = () => {
            window.soundCtrl?.playClick();
            switchView('profile-view');
        };
    }
    if (btnOpenAuth) btnOpenAuth.onclick = () => openAuthModal('login');
    if (btnCloseAuth) btnCloseAuth.onclick = closeAuthModal;

    const btnProfSwitch = document.getElementById('btn-prof-switch-account');
    if (btnProfSwitch) btnProfSwitch.onclick = () => openAuthModal('login');

    const btnProfLogout = document.getElementById('btn-prof-logout');
    if (btnProfLogout) {
        btnProfLogout.onclick = () => {
            const user = window.appState.getCurrentUser();
            if (confirm(`Apakah Anda yakin ingin keluar dari akun ${user.email}?`)) {
                window.appState.logout();
                window.soundCtrl?.playClick();
                openAuthModal('login');
            }
        };
    }

    // Close when clicking modal backdrop
    if (authModal) {
        authModal.onclick = (e) => {
            if (e.target === authModal) closeAuthModal();
        };
    }

    // Auth Tab buttons
    document.querySelectorAll('.auth-tab-btn').forEach(btn => {
        btn.onclick = () => {
            window.soundCtrl?.playClick();
            switchAuthTab(btn.dataset.authTab);
        };
    });

    const linkForgot = document.getElementById('link-forgot-pwd');
    if (linkForgot) {
        linkForgot.onclick = () => {
            window.soundCtrl?.playClick();
            switchAuthTab('reset');
        };
    }

    const linkBackLogin = document.getElementById('link-back-to-login');
    if (linkBackLogin) {
        linkBackLogin.onclick = () => {
            window.soundCtrl?.playClick();
            switchAuthTab('login');
        };
    }

    // Quick demo account fill button
    const btnFillDemo = document.getElementById('btn-fill-demo-account');
    if (btnFillDemo) {
        btnFillDemo.onclick = () => {
            window.soundCtrl?.playClick();
            document.getElementById('login-email').value = 'darma@gmail.com';
            document.getElementById('login-password').value = 'password123';
        };
    }

    // Eye toggle button handlers
    document.querySelectorAll('.btn-toggle-eye').forEach(btn => {
        btn.onclick = () => {
            window.soundCtrl?.playClick();
            const targetId = btn.dataset.target;
            const input = document.getElementById(targetId);
            if (!input) return;

            if (input.type === 'password') {
                input.type = 'text';
                btn.textContent = '🙈';
            } else {
                input.type = 'password';
                btn.textContent = '👁️';
            }
        };
    });

    // Password strength calculations
    function calculateStrength(pwd) {
        if (!pwd || pwd.length < 6) return 'none';
        let score = 0;
        if (pwd.length >= 6) score++;
        if (pwd.length >= 8) score++;
        if (/[A-Z]/.test(pwd) || /[0-9]/.test(pwd)) score++;
        if (/[^A-Za-z0-9]/.test(pwd)) score++;

        if (score <= 1) return 'weak';
        if (score === 2) return 'medium';
        return 'strong';
    }

    const inputNewPwd = document.getElementById('input-new-pwd');
    const profStrengthBar = document.getElementById('prof-pwd-strength-bar');
    const profStrengthText = document.getElementById('prof-pwd-strength-text');

    if (inputNewPwd && profStrengthBar && profStrengthText) {
        inputNewPwd.oninput = () => {
            const val = inputNewPwd.value;
            const strength = calculateStrength(val);
            profStrengthBar.className = `pwd-strength-bar ${strength}`;
            if (strength === 'weak') {
                profStrengthText.textContent = 'Lemah (Coba tambah angka/simbol)';
                profStrengthText.style.color = 'var(--danger)';
            } else if (strength === 'medium') {
                profStrengthText.textContent = 'Sedang (Cukup baik)';
                profStrengthText.style.color = 'var(--warning)';
            } else if (strength === 'strong') {
                profStrengthText.textContent = 'Kuat (Sangat aman)';
                profStrengthText.style.color = 'var(--success)';
            } else {
                profStrengthText.textContent = 'Minimal 6 karakter';
                profStrengthText.style.color = 'var(--text-muted)';
            }
        };
    }

    // 1. Submit Form Login
    const formLogin = document.getElementById('form-auth-login');
    if (formLogin) {
        formLogin.onsubmit = () => {
            const email = document.getElementById('login-email').value;
            const pwd = document.getElementById('login-password').value;

            const res = window.appState.login(email, pwd);
            if (res.success) {
                window.soundCtrl?.playFanfare();
                showAuthAlert(res.message, true);
                setTimeout(() => {
                    closeAuthModal();
                    updateTopBar();
                    renderProfileStats();
                    renderLearningPath();
                }, 500);
            } else {
                window.soundCtrl?.playWrong();
                showAuthAlert(res.message, false);
            }
        };
    }

    // 2. Submit Form Register
    const formRegister = document.getElementById('form-auth-register');
    if (formRegister) {
        formRegister.onsubmit = () => {
            const name = document.getElementById('reg-name').value;
            const email = document.getElementById('reg-email').value;
            const pwd = document.getElementById('reg-password').value;
            const confirmPwd = document.getElementById('reg-confirm-password').value;

            if (pwd !== confirmPwd) {
                window.soundCtrl?.playWrong();
                showAuthAlert('Konfirmasi kata sandi tidak cocok dengan kata sandi baru!', false);
                return;
            }

            const res = window.appState.register(name, email, pwd);
            if (res.success) {
                window.soundCtrl?.playFanfare();
                window.confetti?.fire(80);
                showAuthAlert(res.message, true);
                setTimeout(() => {
                    closeAuthModal();
                    updateTopBar();
                    renderProfileStats();
                    renderLearningPath();
                }, 700);
            } else {
                window.soundCtrl?.playWrong();
                showAuthAlert(res.message, false);
            }
        };
    }

    // 3. Submit Form Reset Password
    const formReset = document.getElementById('form-auth-reset');
    if (formReset) {
        formReset.onsubmit = () => {
            const email = document.getElementById('reset-email').value;
            const newPwd = document.getElementById('reset-new-password').value;
            const confirmPwd = document.getElementById('reset-confirm-password').value;

            if (newPwd !== confirmPwd) {
                window.soundCtrl?.playWrong();
                showAuthAlert('Konfirmasi kata sandi tidak cocok!', false);
                return;
            }

            const res = window.appState.resetPassword(email, newPwd);
            if (res.success) {
                window.soundCtrl?.playCorrect();
                showAuthAlert(res.message, true);
                setTimeout(() => {
                    switchAuthTab('login');
                    document.getElementById('login-email').value = email;
                    document.getElementById('login-password').value = newPwd;
                    showAuthAlert('Kata sandi berhasil diatur ulang! Silakan klik Masuk.', true);
                }, 800);
            } else {
                window.soundCtrl?.playWrong();
                showAuthAlert(res.message, false);
            }
        };
    }

    // 4. Change Password Form (Inside Profile View)
    const formChangePwd = document.getElementById('form-change-password');
    const profPwdAlert = document.getElementById('prof-pwd-alert');

    function showProfPwdAlert(msg, isSuccess = false) {
        if (!profPwdAlert) return;
        profPwdAlert.style.display = 'block';
        profPwdAlert.style.background = isSuccess ? 'var(--success-subtle)' : 'var(--danger-subtle)';
        profPwdAlert.style.color = isSuccess ? 'var(--success)' : 'var(--danger)';
        profPwdAlert.style.border = `1px solid ${isSuccess ? 'var(--success-border)' : 'var(--danger-border)'}`;
        profPwdAlert.textContent = msg;
    }

    if (formChangePwd) {
        formChangePwd.onsubmit = () => {
            const currPwd = document.getElementById('input-curr-pwd').value;
            const newPwd = document.getElementById('input-new-pwd').value;
            const confirmPwd = document.getElementById('input-confirm-new-pwd').value;

            if (newPwd !== confirmPwd) {
                window.soundCtrl?.playWrong();
                showProfPwdAlert('Konfirmasi kata sandi tidak cocok dengan kata sandi baru!', false);
                return;
            }

            const res = window.appState.changePassword(currPwd, newPwd);
            if (res.success) {
                window.soundCtrl?.playCorrect();
                showProfPwdAlert(res.message, true);
                document.getElementById('input-curr-pwd').value = '';
                document.getElementById('input-new-pwd').value = '';
                document.getElementById('input-confirm-new-pwd').value = '';
                if (profStrengthBar) profStrengthBar.className = 'pwd-strength-bar';
                if (profStrengthText) profStrengthText.textContent = 'Kekuatan Sandi';
            } else {
                window.soundCtrl?.playWrong();
                showProfPwdAlert(res.message, false);
            }
        };
    }
    // ----------------------------------------------------------------
    // 10. FULL-SCREEN LOGIN GATEWAY CONTROLLER
    // ----------------------------------------------------------------
    const loginScreen = document.getElementById('login-screen');
    const appWorkspace = document.getElementById('app-workspace');
    const gateAlertBox = document.getElementById('gate-auth-alert-box');

    function showGateAlert(message, isSuccess = false) {
        if (!gateAlertBox) return;
        gateAlertBox.style.display = 'block';
        gateAlertBox.style.background = isSuccess ? 'var(--success-subtle)' : 'var(--danger-subtle)';
        gateAlertBox.style.color = isSuccess ? 'var(--success)' : 'var(--danger)';
        gateAlertBox.style.border = `1px solid ${isSuccess ? 'var(--success-border)' : 'var(--danger-border)'}`;
        gateAlertBox.textContent = message;
    }

    function hideGateAlert() {
        if (gateAlertBox) gateAlertBox.style.display = 'none';
    }

    function switchGateAuthTab(tabName) {
        hideGateAlert();
        document.querySelectorAll('#login-screen .auth-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('#login-screen .auth-form-panel').forEach(f => {
            f.style.display = 'none';
            f.classList.remove('active');
        });

        const activeBtn = document.getElementById(`gate-tab-btn-${tabName}`);
        const activeForm = document.getElementById(`form-gate-${tabName}`);
        const gateTitle = document.getElementById('auth-gate-title');
        const gateDesc = document.getElementById('auth-gate-desc');

        if (activeBtn) activeBtn.classList.add('active');
        if (activeForm) {
            activeForm.style.display = 'block';
            activeForm.classList.add('active');
        }

        if (gateTitle && gateDesc) {
            if (tabName === 'login') {
                gateTitle.textContent = 'Selamat Datang!';
                gateDesc.textContent = 'Silakan masuk dengan alamat email Anda untuk mulai belajar.';
            } else if (tabName === 'register') {
                gateTitle.textContent = 'Buat Akun Baru';
                gateDesc.textContent = 'Daftarkan email Anda untuk membuka kurikulum Level 1 s.d. Level 5 secara gratis.';
            } else if (tabName === 'reset') {
                gateTitle.textContent = 'Lupa Kata Sandi';
                gateDesc.textContent = 'Atur ulang kata sandi akun email Anda dengan cepat dan aman.';
            }
        }
    }

    function checkAuthGate() {
        const isAuth = window.appState.isAuthenticated();
        if (isAuth) {
            if (loginScreen) loginScreen.style.display = 'none';
            if (appWorkspace) appWorkspace.style.display = 'flex';
            renderLearningPath();
            updateTopBar();
            renderProfileStats();
        } else {
            if (loginScreen) loginScreen.style.display = 'flex';
            if (appWorkspace) appWorkspace.style.display = 'none';
            switchGateAuthTab('login');
        }
    }

    // Gate Tab Buttons
    document.querySelectorAll('#login-screen .auth-tab-btn').forEach(btn => {
        btn.onclick = () => {
            window.soundCtrl?.playClick();
            switchGateAuthTab(btn.dataset.authTab);
        };
    });

    const gateLinkForgot = document.getElementById('gate-link-forgot-pwd');
    if (gateLinkForgot) {
        gateLinkForgot.onclick = () => {
            window.soundCtrl?.playClick();
            switchGateAuthTab('reset');
        };
    }

    const gateLinkBackLogin = document.getElementById('gate-link-back-login');
    if (gateLinkBackLogin) {
        gateLinkBackLogin.onclick = () => {
            window.soundCtrl?.playClick();
            switchGateAuthTab('login');
        };
    }

    // Gate Quick Demo Button
    const btnGateFillDemo = document.getElementById('btn-gate-fill-demo');
    if (btnGateFillDemo) {
        btnGateFillDemo.onclick = () => {
            window.soundCtrl?.playClick();
            const emailInput = document.getElementById('gate-login-email');
            const pwdInput = document.getElementById('gate-login-password');
            if (emailInput) emailInput.value = 'darma@gmail.com';
            if (pwdInput) pwdInput.value = 'password123';
        };
    }

    // Gate Login Submission
    const formGateLogin = document.getElementById('form-gate-login');
    if (formGateLogin) {
        formGateLogin.onsubmit = () => {
            const email = document.getElementById('gate-login-email').value;
            const pwd = document.getElementById('gate-login-password').value;

            const res = window.appState.login(email, pwd);
            if (res.success) {
                window.soundCtrl?.playFanfare();
                showGateAlert(res.message, true);
                setTimeout(() => {
                    checkAuthGate();
                }, 600);
            } else {
                window.soundCtrl?.playWrong();
                showGateAlert(res.message, false);
            }
        };
    }

    // Gate Register Submission
    const formGateRegister = document.getElementById('form-gate-register');
    if (formGateRegister) {
        formGateRegister.onsubmit = () => {
            const name = document.getElementById('gate-reg-name').value;
            const email = document.getElementById('gate-reg-email').value;
            const pwd = document.getElementById('gate-reg-password').value;
            const confirmPwd = document.getElementById('gate-reg-confirm-password').value;

            if (pwd !== confirmPwd) {
                window.soundCtrl?.playWrong();
                showGateAlert('Konfirmasi kata sandi tidak cocok!', false);
                return;
            }

            const res = window.appState.register(name, email, pwd);
            if (res.success) {
                window.soundCtrl?.playFanfare();
                window.confetti?.fire(90);
                showGateAlert(res.message, true);
                setTimeout(() => {
                    checkAuthGate();
                }, 700);
            } else {
                window.soundCtrl?.playWrong();
                showGateAlert(res.message, false);
            }
        };
    }

    // Gate Reset Password Submission
    const formGateReset = document.getElementById('form-gate-reset');
    if (formGateReset) {
        formGateReset.onsubmit = () => {
            const email = document.getElementById('gate-reset-email').value;
            const newPwd = document.getElementById('gate-reset-new-password').value;
            const confirmPwd = document.getElementById('gate-reset-confirm-password').value;

            if (newPwd !== confirmPwd) {
                window.soundCtrl?.playWrong();
                showGateAlert('Konfirmasi kata sandi tidak cocok!', false);
                return;
            }

            const res = window.appState.resetPassword(email, newPwd);
            if (res.success) {
                window.soundCtrl?.playCorrect();
                showGateAlert(res.message, true);
                setTimeout(() => {
                    switchGateAuthTab('login');
                    const loginEmail = document.getElementById('gate-login-email');
                    const loginPwd = document.getElementById('gate-login-password');
                    if (loginEmail) loginEmail.value = email;
                    if (loginPwd) loginPwd.value = newPwd;
                    showGateAlert('Kata sandi berhasil direset! Silakan klik Masuk.', true);
                }, 750);
            } else {
                window.soundCtrl?.playWrong();
                showGateAlert(res.message, false);
            }
        };
    }

    // Override Profile Logout to route back to Login Screen
    if (btnProfLogout) {
        btnProfLogout.onclick = () => {
            const user = window.appState.getCurrentUser();
            if (confirm(`Apakah Anda yakin ingin keluar dari akun ${user.email}?`)) {
                window.appState.logout();
                window.soundCtrl?.playClick();
                checkAuthGate();
            }
        };
    }

    // Initialize View based on Auth Gate Status
    checkAuthGate();
});
