// ====================================================================
// LinguaSphere English Minigame Arcade (LinguaGames)
// Interactive Gamified Learning: Match Blitz, Speed Rush, & Scramble Master
// ====================================================================

class MiniGamesController {
    constructor() {
        this.activeMode = 'match'; // 'match' | 'rush' | 'scramble'
        this.selectedLevel = 'ALL'; // 'ALL' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1'
        this.STORAGE_KEY = 'linguasphere_minigames_v2';
        this.stats = this.loadStats();

        // Game 1: Match Blitz State
        this.match = {
            cards: [],
            flippedIndices: [],
            moves: 0,
            matchesFound: 0,
            combo: 1,
            maxCombo: 1,
            timer: 0,
            timerHandle: null,
            isLocked: false
        };

        // Game 2: Speed Rush State
        this.rush = {
            timeLeft: 60,
            score: 0,
            combo: 0,
            maxCombo: 0,
            totalAnswered: 0,
            correctCount: 0,
            currentQuestion: null,
            timerHandle: null,
            isRunning: false
        };

        // Game 3: Scramble Master State
        this.scramble = {
            currentWord: null,
            targetSlots: [],
            letterTiles: [],
            streak: 0,
            wordsSolved: 0,
            hintUsed: false
        };

        this.boundKeyHandler = null;
    }

    loadStats() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            if (raw) return JSON.parse(raw);
        } catch (e) {
            console.warn('Failed to load minigame stats', e);
        }
        return {
            gamesPlayed: 0,
            xpEarned: 0,
            matchBestMoves: 999,
            rushHighScore: 0,
            scrambleSolved: 0
        };
    }

    saveStats() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.stats));
            this.updateStatsHUD();
        } catch (e) {
            console.error('Failed to save minigame stats', e);
        }
    }

    getWordPool() {
        const pool = window.VOCAB_DATA || [];
        if (this.selectedLevel === 'ALL') return pool;
        return pool.filter(w => w.level === this.selectedLevel);
    }

    init() {
        this.updateStatsHUD();
        this.bindGlobalEvents();
        this.switchMode(this.activeMode);
    }

    updateStatsHUD() {
        const xpEl = document.getElementById('mg-hud-xp');
        const highEl = document.getElementById('mg-hud-highscore');
        const solvedEl = document.getElementById('mg-hud-solved');

        if (xpEl) xpEl.textContent = `${this.stats.xpEarned} XP`;
        if (highEl) highEl.textContent = `${this.stats.rushHighScore} Poin`;
        if (solvedEl) solvedEl.textContent = `${this.stats.scrambleSolved} Kata`;
    }

    bindGlobalEvents() {
        // Mode Selector Tabs
        document.querySelectorAll('.game-nav-tab').forEach(btn => {
            btn.onclick = () => {
                const mode = btn.dataset.gameMode;
                window.soundCtrl?.playClick();
                this.switchMode(mode);
            };
        });

        // Level Filter Buttons
        document.querySelectorAll('.game-level-btn').forEach(btn => {
            btn.onclick = () => {
                const level = btn.dataset.gameLevel;
                window.soundCtrl?.playClick();
                this.filterLevel(level);
            };
        });
    }

    switchMode(mode) {
        this.activeMode = mode;
        this.cleanupTimers();

        // Update Nav UI
        document.querySelectorAll('.game-nav-tab').forEach(b => {
            b.classList.toggle('active', b.dataset.gameMode === mode);
        });

        // Show/hide game panels
        const panelMatch = document.getElementById('game-panel-match');
        const panelRush = document.getElementById('game-panel-rush');
        const panelScramble = document.getElementById('game-panel-scramble');

        if (panelMatch) panelMatch.style.display = mode === 'match' ? 'block' : 'none';
        if (panelRush) panelRush.style.display = mode === 'rush' ? 'block' : 'none';
        if (panelScramble) panelScramble.style.display = mode === 'scramble' ? 'block' : 'none';

        if (mode === 'match') {
            this.startMatchBlitz();
        } else if (mode === 'rush') {
            this.showRushLobby();
        } else if (mode === 'scramble') {
            this.startScrambleMaster();
        }
    }

    filterLevel(level) {
        this.selectedLevel = level;
        document.querySelectorAll('.game-level-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.gameLevel === level);
        });

        if (this.activeMode === 'match') {
            this.startMatchBlitz();
        } else if (this.activeMode === 'rush') {
            if (this.rush.isRunning) this.startSpeedRush();
        } else if (this.activeMode === 'scramble') {
            this.startScrambleMaster();
        }
    }

    cleanupTimers() {
        if (this.match.timerHandle) {
            clearInterval(this.match.timerHandle);
            this.match.timerHandle = null;
        }
        if (this.rush.timerHandle) {
            clearInterval(this.rush.timerHandle);
            this.rush.timerHandle = null;
        }
        if (this.boundKeyHandler) {
            window.removeEventListener('keydown', this.boundKeyHandler);
            this.boundKeyHandler = null;
        }
    }

    // ================================================================
    // GAME 1: WORD MATCH BLITZ (Memory Match Card Grid)
    // ================================================================
    startMatchBlitz() {
        this.cleanupTimers();
        const pool = this.getWordPool();
        if (pool.length < 6) return;

        // Pick 6 random words
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        const chosen = shuffled.slice(0, 6);

        // Build 12 cards
        let cards = [];
        chosen.forEach((w, idx) => {
            cards.push({
                cardId: `c_${idx}_en`,
                pairId: idx,
                type: 'en',
                text: w.word,
                phonetic: w.phonetic,
                isMatched: false,
                isFlipped: false
            });
            cards.push({
                cardId: `c_${idx}_id`,
                pairId: idx,
                type: 'id',
                text: w.translation.split('/')[0].trim(),
                isMatched: false,
                isFlipped: false
            });
        });

        // Shuffle cards
        cards.sort(() => 0.5 - Math.random());

        this.match = {
            cards: cards,
            flippedIndices: [],
            moves: 0,
            matchesFound: 0,
            combo: 1,
            maxCombo: 1,
            timer: 0,
            timerHandle: null,
            isLocked: false
        };

        // Start timer
        this.match.timerHandle = setInterval(() => {
            this.match.timer++;
            const timerEl = document.getElementById('match-timer-val');
            if (timerEl) {
                const m = Math.floor(this.match.timer / 60);
                const s = this.match.timer % 60;
                timerEl.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
            }
        }, 1000);

        this.renderMatchBlitz();
    }

    renderMatchBlitz() {
        const grid = document.getElementById('match-cards-grid');
        const movesEl = document.getElementById('match-moves-val');
        const pairsEl = document.getElementById('match-pairs-val');
        const comboEl = document.getElementById('match-combo-badge');

        if (movesEl) movesEl.textContent = this.match.moves;
        if (pairsEl) pairsEl.textContent = `${this.match.matchesFound} / 6`;
        if (comboEl) {
            comboEl.textContent = `Combo x${this.match.combo} 🔥`;
            comboEl.style.display = this.match.combo > 1 ? 'inline-flex' : 'none';
        }

        if (!grid) return;
        grid.innerHTML = '';

        this.match.cards.forEach((card, index) => {
            const cardEl = document.createElement('div');
            cardEl.className = `match-card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''} type-${card.type}`;
            cardEl.id = `match-card-${index}`;

            cardEl.innerHTML = `
                <div class="match-card-inner">
                    <div class="match-card-front">
                        <span class="card-back-icon">🌐</span>
                        <span class="card-back-hint">${card.type === 'en' ? 'EN' : 'ID'}</span>
                    </div>
                    <div class="match-card-back">
                        <span class="card-type-tag">${card.type === 'en' ? 'English' : 'Arti ID'}</span>
                        <div class="card-term-text">${card.text}</div>
                        ${card.phonetic ? `<div class="card-term-phonetic">${card.phonetic}</div>` : ''}
                    </div>
                </div>
            `;

            cardEl.onclick = () => this.handleCardClick(index);
            grid.appendChild(cardEl);
        });
    }

    handleCardClick(index) {
        if (this.match.isLocked) return;
        const card = this.match.cards[index];
        if (card.isMatched || card.isFlipped) return;

        window.soundCtrl?.playClick();
        card.isFlipped = true;
        this.match.flippedIndices.push(index);

        const cardEl = document.getElementById(`match-card-${index}`);
        if (cardEl) cardEl.classList.add('flipped');

        // Pronounce English card
        if (card.type === 'en') {
            window.speechCtrl.speak(card.text, false);
        }

        if (this.match.flippedIndices.length === 2) {
            this.match.moves++;
            const movesEl = document.getElementById('match-moves-val');
            if (movesEl) movesEl.textContent = this.match.moves;

            const [idx1, idx2] = this.match.flippedIndices;
            const c1 = this.match.cards[idx1];
            const c2 = this.match.cards[idx2];

            if (c1.pairId === c2.pairId && c1.type !== c2.type) {
                // MATCH!
                this.match.isLocked = true;
                setTimeout(() => {
                    c1.isMatched = true;
                    c2.isMatched = true;
                    this.match.matchesFound++;
                    this.match.combo++;
                    if (this.match.combo > this.match.maxCombo) {
                        this.match.maxCombo = this.match.combo;
                    }

                    // Award XP
                    const earnedXP = 10 * Math.min(this.match.combo, 4);
                    window.appState.addXP(earnedXP);
                    this.stats.xpEarned += earnedXP;
                    this.saveStats();

                    window.soundCtrl?.playCorrect();

                    const el1 = document.getElementById(`match-card-${idx1}`);
                    const el2 = document.getElementById(`match-card-${idx2}`);
                    if (el1) el1.classList.add('matched');
                    if (el2) el2.classList.add('matched');

                    const pairsEl = document.getElementById('match-pairs-val');
                    const comboEl = document.getElementById('match-combo-badge');
                    if (pairsEl) pairsEl.textContent = `${this.match.matchesFound} / 6`;
                    if (comboEl) {
                        comboEl.textContent = `Combo x${this.match.combo} 🔥`;
                        comboEl.style.display = 'inline-flex';
                    }

                    this.match.flippedIndices = [];
                    this.match.isLocked = false;

                    // Check Victory
                    if (this.match.matchesFound === 6) {
                        this.finishMatchBlitz();
                    }
                }, 400);
            } else {
                // MISMATCH
                this.match.isLocked = true;
                this.match.combo = 1;
                const comboEl = document.getElementById('match-combo-badge');
                if (comboEl) comboEl.style.display = 'none';

                window.soundCtrl?.playWrong();

                const el1 = document.getElementById(`match-card-${idx1}`);
                const el2 = document.getElementById(`match-card-${idx2}`);
                if (el1) el1.classList.add('shake');
                if (el2) el2.classList.add('shake');

                setTimeout(() => {
                    if (el1) {
                        el1.classList.remove('flipped', 'shake');
                        c1.isFlipped = false;
                    }
                    if (el2) {
                        el2.classList.remove('flipped', 'shake');
                        c2.isFlipped = false;
                    }
                    this.match.flippedIndices = [];
                    this.match.isLocked = false;
                }, 800);
            }
        }
    }

    finishMatchBlitz() {
        this.cleanupTimers();
        window.soundCtrl?.playFanfare();
        window.triggerConfetti();

        // Bonus XP
        const bonusXP = 40;
        window.appState.addXP(bonusXP);
        this.stats.xpEarned += bonusXP;
        this.stats.gamesPlayed++;
        if (this.match.moves < this.stats.matchBestMoves) {
            this.stats.matchBestMoves = this.match.moves;
        }
        this.saveStats();

        // Show Modal
        const modal = document.getElementById('game-result-modal');
        const titleEl = document.getElementById('res-modal-title');
        const descEl = document.getElementById('res-modal-desc');
        const starsEl = document.getElementById('res-modal-stars');
        const statsEl = document.getElementById('res-modal-stats-grid');

        let stars = '⭐⭐⭐';
        if (this.match.moves > 14) stars = '⭐';
        else if (this.match.moves > 9) stars = '⭐⭐';

        if (titleEl) titleEl.textContent = '🎉 Luar Biasa! Semua Pasangan Ditemukan';
        if (descEl) descEl.textContent = 'Anda berhasil melatih ingatan kosakata bahasa Inggris dengan sempurna!';
        if (starsEl) starsEl.textContent = stars;
        if (statsEl) {
            statsEl.innerHTML = `
                <div class="res-stat-card">
                    <span class="res-stat-val">${this.match.moves}</span>
                    <span class="res-stat-lbl">Langkah</span>
                </div>
                <div class="res-stat-card">
                    <span class="res-stat-val">${this.match.timer}s</span>
                    <span class="res-stat-lbl">Waktu</span>
                </div>
                <div class="res-stat-card">
                    <span class="res-stat-val">x${this.match.maxCombo}</span>
                    <span class="res-stat-lbl">Max Combo</span>
                </div>
                <div class="res-stat-card">
                    <span class="res-stat-val">+${bonusXP + 60}</span>
                    <span class="res-stat-lbl">Total XP</span>
                </div>
            `;
        }

        if (modal) modal.style.display = 'flex';
    }

    // ================================================================
    // GAME 2: SPEED WORD RUSH (60s Fast-Paced Quiz)
    // ================================================================
    showRushLobby() {
        const lobby = document.getElementById('rush-lobby-view');
        const arena = document.getElementById('rush-arena-view');
        if (lobby) lobby.style.display = 'block';
        if (arena) arena.style.display = 'none';

        const btnStart = document.getElementById('btn-start-speed-rush');
        if (btnStart) {
            btnStart.onclick = () => {
                window.soundCtrl?.playClick();
                this.startSpeedRush();
            };
        }
    }

    startSpeedRush() {
        this.cleanupTimers();
        const lobby = document.getElementById('rush-lobby-view');
        const arena = document.getElementById('rush-arena-view');
        if (lobby) lobby.style.display = 'none';
        if (arena) arena.style.display = 'block';

        this.rush = {
            timeLeft: 60,
            score: 0,
            combo: 0,
            maxCombo: 0,
            totalAnswered: 0,
            correctCount: 0,
            currentQuestion: null,
            timerHandle: null,
            isRunning: true
        };

        this.updateRushHUD();
        this.loadNextRushQuestion();

        this.rush.timerHandle = setInterval(() => {
            this.rush.timeLeft--;
            this.updateRushTimerBar();

            if (this.rush.timeLeft <= 0) {
                this.finishSpeedRush();
            }
        }, 1000);
    }

    updateRushHUD() {
        const scoreEl = document.getElementById('rush-score-val');
        const comboEl = document.getElementById('rush-combo-val');
        if (scoreEl) scoreEl.textContent = this.rush.score;
        if (comboEl) {
            comboEl.textContent = `Combo x${this.rush.combo} ⚡`;
            comboEl.className = this.rush.combo >= 3 ? 'rush-combo-badge active' : 'rush-combo-badge';
        }
    }

    updateRushTimerBar() {
        const timerText = document.getElementById('rush-timer-text');
        const bar = document.getElementById('rush-progress-bar');
        if (timerText) timerText.textContent = `${this.rush.timeLeft}s`;
        if (bar) {
            const pct = Math.max(0, Math.min(100, (this.rush.timeLeft / 60) * 100));
            bar.style.width = `${pct}%`;
            if (this.rush.timeLeft <= 10) {
                bar.style.background = 'var(--danger)';
            } else if (this.rush.timeLeft <= 25) {
                bar.style.background = 'var(--warning)';
            } else {
                bar.style.background = 'linear-gradient(90deg, #4f46e5, #06b6d4)';
            }
        }
    }

    loadNextRushQuestion() {
        const pool = this.getWordPool();
        if (pool.length < 4) return;

        const target = pool[Math.floor(Math.random() * pool.length)];
        const distractors = pool.filter(w => w.id !== target.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

        const choices = [
            { text: target.translation.split('/')[0].trim(), isCorrect: true },
            ...distractors.map(d => ({ text: d.translation.split('/')[0].trim(), isCorrect: false }))
        ].sort(() => 0.5 - Math.random());

        this.rush.currentQuestion = {
            target: target,
            choices: choices
        };

        const wordEl = document.getElementById('rush-target-word');
        const phonEl = document.getElementById('rush-target-phonetic');
        const typeEl = document.getElementById('rush-target-type');
        const optionsContainer = document.getElementById('rush-options-grid');
        const btnAudio = document.getElementById('btn-rush-audio');

        if (wordEl) wordEl.textContent = target.word;
        if (phonEl) phonEl.textContent = target.phonetic;
        if (typeEl) typeEl.textContent = target.type;

        if (btnAudio) {
            btnAudio.onclick = () => window.speechCtrl.speak(target.word);
        }

        // Auto speak target word
        window.speechCtrl.speak(target.word);

        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            choices.forEach((choice, idx) => {
                const btn = document.createElement('button');
                btn.className = 'btn-rush-option';
                btn.innerHTML = `
                    <span class="rush-opt-key">${String.fromCharCode(65 + idx)}</span>
                    <span class="rush-opt-text">${choice.text}</span>
                `;
                btn.onclick = () => this.handleRushAnswer(choice.isCorrect, btn);
                optionsContainer.appendChild(btn);
            });
        }
    }

    handleRushAnswer(isCorrect, buttonEl) {
        if (!this.rush.isRunning) return;
        this.rush.totalAnswered++;

        if (isCorrect) {
            this.rush.correctCount++;
            this.rush.combo++;
            if (this.rush.combo > this.rush.maxCombo) this.rush.maxCombo = this.rush.combo;

            // Bonus score + bonus time
            const points = 100 + (this.rush.combo * 20);
            this.rush.score += points;
            this.rush.timeLeft = Math.min(60, this.rush.timeLeft + 2); // +2s bonus!

            // Add XP directly
            const xp = 5 + Math.min(this.rush.combo, 5);
            window.appState.addXP(xp);
            this.stats.xpEarned += xp;

            window.soundCtrl?.playCorrect();
            if (buttonEl) buttonEl.classList.add('correct');

            this.updateRushHUD();
            this.updateRushTimerBar();

            setTimeout(() => this.loadNextRushQuestion(), 280);
        } else {
            this.rush.combo = 0;
            this.rush.score = Math.max(0, this.rush.score - 40);

            window.soundCtrl?.playWrong();
            if (buttonEl) buttonEl.classList.add('wrong');

            const card = document.getElementById('rush-question-card');
            if (card) {
                card.classList.add('shake');
                setTimeout(() => card.classList.remove('shake'), 400);
            }

            this.updateRushHUD();
            setTimeout(() => this.loadNextRushQuestion(), 450);
        }
    }

    finishSpeedRush() {
        this.cleanupTimers();
        this.rush.isRunning = false;

        window.soundCtrl?.playFanfare();
        if (this.rush.score >= 500) window.triggerConfetti();

        // Update high score
        if (this.rush.score > this.stats.rushHighScore) {
            this.stats.rushHighScore = this.rush.score;
        }
        this.stats.gamesPlayed++;
        this.saveStats();

        const modal = document.getElementById('game-result-modal');
        const titleEl = document.getElementById('res-modal-title');
        const descEl = document.getElementById('res-modal-desc');
        const starsEl = document.getElementById('res-modal-stars');
        const statsEl = document.getElementById('res-modal-stats-grid');

        const acc = this.rush.totalAnswered > 0
            ? Math.round((this.rush.correctCount / this.rush.totalAnswered) * 100)
            : 0;

        let stars = '⭐⭐⭐';
        if (this.rush.score < 400) stars = '⭐';
        else if (this.rush.score < 800) stars = '⭐⭐';

        if (titleEl) titleEl.textContent = '⚡ Waktu Habis! Hasil Tantangan Kilat';
        if (descEl) descEl.textContent = `Refleks kosakata Anda sangat luar biasa dengan total ${this.rush.correctCount} jawaban benar!`;
        if (starsEl) starsEl.textContent = stars;
        if (statsEl) {
            statsEl.innerHTML = `
                <div class="res-stat-card">
                    <span class="res-stat-val">${this.rush.score}</span>
                    <span class="res-stat-lbl">Skor Akhir</span>
                </div>
                <div class="res-stat-card">
                    <span class="res-stat-val">${acc}%</span>
                    <span class="res-stat-lbl">Akurasi (${this.rush.correctCount}/${this.rush.totalAnswered})</span>
                </div>
                <div class="res-stat-card">
                    <span class="res-stat-val">x${this.rush.maxCombo}</span>
                    <span class="res-stat-lbl">Max Combo</span>
                </div>
                <div class="res-stat-card">
                    <span class="res-stat-val">${this.stats.rushHighScore}</span>
                    <span class="res-stat-lbl">Rekor Tertinggi</span>
                </div>
            `;
        }

        if (modal) modal.style.display = 'flex';
    }

    // ================================================================
    // GAME 3: SCRAMBLE MASTER (Anagram Builder & Spelling)
    // ================================================================
    startScrambleMaster() {
        this.cleanupTimers();
        const pool = this.getWordPool();
        if (pool.length === 0) return;

        // Pick random word
        const target = pool[Math.floor(Math.random() * pool.length)];
        this.scramble.currentWord = target;
        this.scramble.hintUsed = false;

        const letters = target.word.toUpperCase().split('');
        this.scramble.targetSlots = letters.map((ch, idx) => ({
            char: ch,
            slotIndex: idx,
            filledTileId: null
        }));

        // Scramble letters
        let tilePool = letters.map((ch, idx) => ({
            tileId: `tile_${idx}`,
            char: ch,
            isPlaced: false,
            placedSlot: null
        }));

        // Ensure it's not identical to original
        let shuffled = [...tilePool].sort(() => 0.5 - Math.random());
        if (shuffled.map(t => t.char).join('') === target.word.toUpperCase() && letters.length > 2) {
            shuffled.reverse();
        }
        this.scramble.letterTiles = shuffled;

        this.renderScrambleMaster();
        this.bindScrambleKeyboard();
    }

    renderScrambleMaster() {
        const word = this.scramble.currentWord;
        if (!word) return;

        const meaningEl = document.getElementById('scramble-meaning-text');
        const typeEl = document.getElementById('scramble-type-badge');
        const phoneticEl = document.getElementById('scramble-phonetic-text');
        const slotsGrid = document.getElementById('scramble-slots-row');
        const tilesPool = document.getElementById('scramble-tiles-pool');
        const btnAudio = document.getElementById('btn-scramble-audio');
        const streakEl = document.getElementById('scramble-streak-badge');
        const exampleEl = document.getElementById('scramble-example-banner');

        if (meaningEl) meaningEl.textContent = word.translation;
        if (typeEl) typeEl.textContent = word.type;
        if (phoneticEl) phoneticEl.textContent = word.phonetic;
        if (streakEl) streakEl.textContent = `Runtutan: ${this.scramble.streak} Kata ⭐`;
        if (exampleEl) exampleEl.style.display = 'none';

        if (btnAudio) {
            btnAudio.onclick = () => window.speechCtrl.speak(word.word);
        }

        // Render target slots
        if (slotsGrid) {
            slotsGrid.innerHTML = '';
            this.scramble.targetSlots.forEach((slot, slotIdx) => {
                const slotEl = document.createElement('div');
                slotEl.className = `scramble-slot ${slot.filledTileId ? 'filled' : 'empty'}`;
                slotEl.id = `scramble-slot-${slotIdx}`;

                if (slot.filledTileId) {
                    const tile = this.scramble.letterTiles.find(t => t.tileId === slot.filledTileId);
                    slotEl.textContent = tile ? tile.char : '';
                    slotEl.title = 'Klik untuk mengembalikan huruf';
                    slotEl.onclick = () => this.unplaceTileFromSlot(slotIdx);
                } else {
                    slotEl.textContent = '';
                }
                slotsGrid.appendChild(slotEl);
            });
        }

        // Render available letter tiles
        if (tilesPool) {
            tilesPool.innerHTML = '';
            this.scramble.letterTiles.forEach((tile) => {
                const tileBtn = document.createElement('button');
                tileBtn.className = `scramble-tile-btn ${tile.isPlaced ? 'placed' : ''}`;
                tileBtn.id = `scramble-tile-${tile.tileId}`;
                tileBtn.textContent = tile.char;
                tileBtn.disabled = tile.isPlaced;
                tileBtn.onclick = () => this.placeTileInNextSlot(tile.tileId);
                tilesPool.appendChild(tileBtn);
            });
        }

        // Actions
        const btnHint = document.getElementById('btn-scramble-hint');
        const btnShuffle = document.getElementById('btn-scramble-shuffle');
        const btnReset = document.getElementById('btn-scramble-reset');
        const btnSkip = document.getElementById('btn-scramble-skip');

        if (btnHint) btnHint.onclick = () => this.giveScrambleHint();
        if (btnShuffle) btnShuffle.onclick = () => this.shuffleUnplacedTiles();
        if (btnReset) btnReset.onclick = () => this.resetScrambleSlots();
        if (btnSkip) btnSkip.onclick = () => {
            window.soundCtrl?.playClick();
            this.startScrambleMaster();
        };
    }

    bindScrambleKeyboard() {
        if (this.boundKeyHandler) window.removeEventListener('keydown', this.boundKeyHandler);

        this.boundKeyHandler = (e) => {
            if (this.activeMode !== 'scramble') return;
            const key = e.key.toUpperCase();

            if (key === 'BACKSPACE') {
                e.preventDefault();
                // Find last filled slot
                for (let i = this.scramble.targetSlots.length - 1; i >= 0; i--) {
                    if (this.scramble.targetSlots[i].filledTileId) {
                        this.unplaceTileFromSlot(i);
                        break;
                    }
                }
            } else if (/^[A-Z]$/.test(key)) {
                // Find first unplaced tile matching key
                const matchTile = this.scramble.letterTiles.find(t => !t.isPlaced && t.char === key);
                if (matchTile) {
                    this.placeTileInNextSlot(matchTile.tileId);
                }
            }
        };

        window.addEventListener('keydown', this.boundKeyHandler);
    }

    placeTileInNextSlot(tileId) {
        const tile = this.scramble.letterTiles.find(t => t.tileId === tileId);
        if (!tile || tile.isPlaced) return;

        // Find first empty slot
        const emptySlot = this.scramble.targetSlots.find(s => !s.filledTileId);
        if (!emptySlot) return;

        window.soundCtrl?.playClick();
        tile.isPlaced = true;
        tile.placedSlot = emptySlot.slotIndex;
        emptySlot.filledTileId = tileId;

        this.renderScrambleMaster();
        this.checkScrambleCompletion();
    }

    unplaceTileFromSlot(slotIdx) {
        const slot = this.scramble.targetSlots[slotIdx];
        if (!slot || !slot.filledTileId) return;

        window.soundCtrl?.playClick();
        const tile = this.scramble.letterTiles.find(t => t.tileId === slot.filledTileId);
        if (tile) {
            tile.isPlaced = false;
            tile.placedSlot = null;
        }
        slot.filledTileId = null;

        this.renderScrambleMaster();
    }

    giveScrambleHint() {
        // Find first slot where tile is either empty or incorrect
        const targetWordChars = this.scramble.currentWord.word.toUpperCase().split('');
        let targetSlotIndex = -1;

        for (let i = 0; i < this.scramble.targetSlots.length; i++) {
            const slot = this.scramble.targetSlots[i];
            const neededChar = targetWordChars[i];
            if (!slot.filledTileId) {
                targetSlotIndex = i;
                break;
            } else {
                const currentTile = this.scramble.letterTiles.find(t => t.tileId === slot.filledTileId);
                if (!currentTile || currentTile.char !== neededChar) {
                    // Remove incorrect tile
                    this.unplaceTileFromSlot(i);
                    targetSlotIndex = i;
                    break;
                }
            }
        }

        if (targetSlotIndex === -1) return;

        const neededChar = targetWordChars[targetSlotIndex];
        // Find an unplaced tile with that char
        let availableTile = this.scramble.letterTiles.find(t => !t.isPlaced && t.char === neededChar);

        // If all matching tiles are mistakenly placed in later slots, unplace one
        if (!availableTile) {
            const mistakenlyPlaced = this.scramble.letterTiles.find(t => t.isPlaced && t.char === neededChar && t.placedSlot !== targetSlotIndex);
            if (mistakenlyPlaced) {
                this.unplaceTileFromSlot(mistakenlyPlaced.placedSlot);
                availableTile = mistakenlyPlaced;
            }
        }

        if (availableTile) {
            window.soundCtrl?.playClick();
            this.placeTileInNextSlot(availableTile.tileId);
        }
    }

    shuffleUnplacedTiles() {
        window.soundCtrl?.playClick();
        const unplaced = this.scramble.letterTiles.filter(t => !t.isPlaced);
        unplaced.sort(() => 0.5 - Math.random());

        // Re-inject unplaced in new order
        let unplacedIdx = 0;
        this.scramble.letterTiles = this.scramble.letterTiles.map(t => {
            if (t.isPlaced) return t;
            return unplaced[unplacedIdx++];
        });

        this.renderScrambleMaster();
    }

    resetScrambleSlots() {
        window.soundCtrl?.playClick();
        this.scramble.targetSlots.forEach(s => s.filledTileId = null);
        this.scramble.letterTiles.forEach(t => {
            t.isPlaced = false;
            t.placedSlot = null;
        });
        this.renderScrambleMaster();
    }

    checkScrambleCompletion() {
        const isAllFilled = this.scramble.targetSlots.every(s => s.filledTileId !== null);
        if (!isAllFilled) return;

        const assembledWord = this.scramble.targetSlots.map(s => {
            const tile = this.scramble.letterTiles.find(t => t.tileId === s.filledTileId);
            return tile ? tile.char : '';
        }).join('');

        const targetWord = this.scramble.currentWord.word.toUpperCase();

        if (assembledWord === targetWord) {
            // SUCCESS!
            window.soundCtrl?.playCorrect();
            window.triggerConfetti();

            this.scramble.streak++;
            this.scramble.wordsSolved++;
            this.stats.scrambleSolved++;

            const earnedXP = 25;
            window.appState.addXP(earnedXP);
            this.stats.xpEarned += earnedXP;
            this.saveStats();

            // Highlight slots
            document.querySelectorAll('.scramble-slot').forEach(el => el.classList.add('success'));

            // Show Example Banner
            const exampleEl = document.getElementById('scramble-example-banner');
            const exampleText = document.getElementById('scramble-example-text');
            if (exampleEl && exampleText) {
                exampleText.textContent = `"${this.scramble.currentWord.example}"`;
                exampleEl.style.display = 'block';
            }

            // Speak word
            window.speechCtrl.speak(this.scramble.currentWord.word);

            setTimeout(() => {
                this.startScrambleMaster();
            }, 2000);
        } else {
            // WRONG
            window.soundCtrl?.playWrong();
            document.querySelectorAll('.scramble-slot').forEach(el => el.classList.add('error'));
            setTimeout(() => {
                document.querySelectorAll('.scramble-slot').forEach(el => el.classList.remove('error'));
            }, 600);
        }
    }
}

// Global Instance
window.miniGamesCtrl = new MiniGamesController();
