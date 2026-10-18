// State Management & LocalStorage Persistence
class AppState {
    constructor() {
        this.STORAGE_KEY = 'linguasphere_user_data_v2';
        this.data = this.loadState();
        this.checkDayReset();
    }

    getDefaultState() {
        return {
            xp: 0,
            dailyXP: 0,
            dailyGoal: 50,
            streak: 1,
            lastActiveDate: new Date().toISOString().split('T')[0],
            gems: 150,
            theme: 'light',
            soundEnabled: true,
            unlockedLevels: [1], // Level 1 (A1) unlocked by default
            completedLessons: {}, // { 'l1_u1_s1': true, ... }
            diagnosticResult: null, // { level: 'B1', score: 75, date: '...' }
            toeflRecords: [],
            learnedWords: [],
            dailyDate: new Date().toISOString().split('T')[0]
        };
    }

    loadState() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                return { ...this.getDefaultState(), ...parsed };
            }
        } catch (e) {
            console.warn('Failed to load user state from localStorage', e);
        }
        return this.getDefaultState();
    }

    saveState() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
            this.notifyChange();
        } catch (e) {
            console.error('Failed to save state', e);
        }
    }

    checkDayReset() {
        const today = new Date().toISOString().split('T')[0];
        if (this.data.dailyDate !== today) {
            this.data.dailyDate = today;
            this.data.dailyXP = 0;

            const lastActive = new Date(this.data.lastActiveDate);
            const currentDate = new Date(today);
            const diffDays = Math.round((currentDate - lastActive) / (1000 * 60 * 60 * 24));

            if (diffDays > 1) {
                this.data.streak = 1;
            }
            this.saveState();
        }
    }

    addXP(amount) {
        this.data.xp += amount;
        this.data.dailyXP += amount;
        const today = new Date().toISOString().split('T')[0];
        if (this.data.lastActiveDate !== today) {
            this.data.streak += 1;
            this.data.lastActiveDate = today;
            window.soundCtrl?.playStreak();
        }
        this.saveState();
    }

    completeLesson(lessonId, xp = 20) {
        this.data.completedLessons[lessonId] = true;
        this.addXP(xp);
        this.data.gems += 15;
        this.saveState();
    }

    isLessonCompleted(lessonId) {
        return !!this.data.completedLessons[lessonId];
    }

    unlockUpToLevel(levelNum) {
        for (let i = 1; i <= levelNum; i++) {
            if (!this.data.unlockedLevels.includes(i)) {
                this.data.unlockedLevels.push(i);
            }
        }
        this.data.unlockedLevels.sort((a, b) => a - b);
        this.saveState();
    }

    saveDiagnosticResult(result) {
        this.data.diagnosticResult = result;
        if (result.levelCode === 'A1') this.unlockUpToLevel(1);
        else if (result.levelCode === 'A2') this.unlockUpToLevel(2);
        else if (result.levelCode === 'B1') this.unlockUpToLevel(3);
        else if (result.levelCode === 'B2') this.unlockUpToLevel(4);
        else if (result.levelCode === 'C1' || result.levelCode === 'C2') this.unlockUpToLevel(5);

        this.addXP(40);
        this.saveState();
    }

    saveToeflRecord(record) {
        this.data.toeflRecords.unshift(record);
        if (this.data.toeflRecords.length > 25) {
            this.data.toeflRecords.pop();
        }
        this.addXP(60);
        this.saveState();
    }

    toggleWordMastered(wordId) {
        const idx = this.data.learnedWords.indexOf(wordId);
        if (idx === -1) {
            this.data.learnedWords.push(wordId);
            this.addXP(3);
        } else {
            this.data.learnedWords.splice(idx, 1);
        }
        this.saveState();
        return this.data.learnedWords.includes(wordId);
    }

    isWordMastered(wordId) {
        return this.data.learnedWords.includes(wordId);
    }

    resetAll() {
        this.data = this.getDefaultState();
        this.saveState();
    }

    listeners = [];
    subscribe(callback) {
        this.listeners.push(callback);
    }

    notifyChange() {
        this.listeners.forEach(cb => cb(this.data));
    }
}

window.appState = new AppState();
