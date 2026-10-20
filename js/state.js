// State Management, Multi-Account Authentication & LocalStorage Persistence
class AppState {
    constructor() {
        this.STORAGE_KEY = 'linguasphere_user_data_v2';
        this.ACCOUNTS_KEY = 'linguasphere_accounts_v3';
        this.ACTIVE_EMAIL_KEY = 'linguasphere_active_email_v3';
        this.SESSION_KEY = 'linguasphere_session_auth_v3';

        this.accounts = this.loadAccounts();
        this.activeEmail = this.loadActiveEmail();

        // Ensure active account exists and has valid learning data
        if (!this.accounts[this.activeEmail]) {
            const firstEmail = Object.keys(this.accounts)[0] || 'darma@gmail.com';
            this.activeEmail = firstEmail;
        }

        this.data = this.accounts[this.activeEmail].data;
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
            unlockedLevels: [1, 2, 3, 4, 5], // All levels (1-5) unlocked directly
            completedLessons: {}, // { 'l1_u1_s1': true, ... }
            diagnosticResult: null, // { level: 'B1', score: 75, date: '...' }
            toeflRecords: [],
            learnedWords: [],
            dailyDate: new Date().toISOString().split('T')[0]
        };
    }

    loadAccounts() {
        try {
            const raw = localStorage.getItem(this.ACCOUNTS_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
                    // Ensure all accounts have all levels unlocked and valid data
                    Object.keys(parsed).forEach(email => {
                        parsed[email].data = { ...this.getDefaultState(), ...(parsed[email].data || {}) };
                        parsed[email].data.unlockedLevels = [1, 2, 3, 4, 5];
                    });
                    return parsed;
                }
            }
        } catch (e) {
            console.warn('Failed to load accounts from localStorage', e);
        }

        // Check if there is existing state from earlier session to migrate
        let legacyData = this.getDefaultState();
        try {
            const legacyRaw = localStorage.getItem(this.STORAGE_KEY);
            if (legacyRaw) {
                legacyData = { ...this.getDefaultState(), ...JSON.parse(legacyRaw) };
                legacyData.unlockedLevels = [1, 2, 3, 4, 5];
            }
        } catch (e) {
            console.warn('Legacy data parse error', e);
        }

        // Initialize default primary account (Darma)
        const initialAccounts = {
            'darma@gmail.com': {
                name: 'Darma',
                email: 'darma@gmail.com',
                password: 'password123',
                createdAt: new Date().toLocaleDateString('id-ID'),
                avatarColor: '#4f46e5',
                data: legacyData
            }
        };

        try {
            localStorage.setItem(this.ACCOUNTS_KEY, JSON.stringify(initialAccounts));
        } catch (e) {
            console.error('Failed to initialize accounts in storage', e);
        }

        return initialAccounts;
    }

    saveAccounts() {
        try {
            localStorage.setItem(this.ACCOUNTS_KEY, JSON.stringify(this.accounts));
        } catch (e) {
            console.error('Failed to save accounts to localStorage', e);
        }
    }

    loadActiveEmail() {
        try {
            const email = localStorage.getItem(this.ACTIVE_EMAIL_KEY);
            if (email && this.accounts[email.toLowerCase()]) {
                return email.toLowerCase();
            }
        } catch (e) {
            console.warn('Failed to load active email', e);
        }
        return 'darma@gmail.com';
    }

    saveActiveEmail() {
        try {
            localStorage.setItem(this.ACTIVE_EMAIL_KEY, this.activeEmail);
        } catch (e) {
            console.error('Failed to save active email', e);
        }
    }

    getCurrentUser() {
        const user = this.accounts[this.activeEmail];
        if (!user) {
            return {
                name: 'Tamu',
                email: 'guest@linguasphere.com',
                createdAt: 'Hari ini',
                avatarInitials: 'T',
                avatarColor: '#4f46e5'
            };
        }
        const nameParts = (user.name || 'User').trim().split(' ');
        const initials = nameParts.length > 1
            ? (nameParts[0][0] + nameParts[1][0]).toUpperCase()
            : nameParts[0].substring(0, 2).toUpperCase();

        return {
            name: user.name,
            email: user.email,
            createdAt: user.createdAt || 'Hari ini',
            avatarInitials: initials,
            avatarColor: user.avatarColor || '#4f46e5'
        };
    }

    isAuthenticated() {
        return localStorage.getItem(this.SESSION_KEY) === 'true';
    }

    setAuthenticated(isAuth) {
        localStorage.setItem(this.SESSION_KEY, isAuth ? 'true' : 'false');
    }

    getAllAccounts() {
        return Object.values(this.accounts).map(acc => ({
            name: acc.name,
            email: acc.email,
            createdAt: acc.createdAt,
            isActive: acc.email === this.activeEmail
        }));
    }

    // --- Authentication & Password Management ---

    register(name, email, password) {
        const cleanName = (name || '').trim();
        const cleanEmail = (email || '').trim().toLowerCase();
        const cleanPwd = (password || '').trim();

        if (!cleanName) {
            return { success: false, message: 'Nama lengkap wajib diisi!' };
        }
        if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
            return { success: false, message: 'Format alamat email tidak valid!' };
        }
        if (cleanPwd.length < 6) {
            return { success: false, message: 'Kata sandi minimal 6 karakter!' };
        }
        if (this.accounts[cleanEmail]) {
            return { success: false, message: 'Alamat email ini sudah terdaftar! Silakan pilih Masuk.' };
        }

        // Available avatar colors
        const colors = ['#4f46e5', '#0284c7', '#059669', '#d97706', '#9333ea', '#e11d48'];
        const avatarColor = colors[Math.floor(Math.random() * colors.length)];

        // Create new account with individual fresh learning data (all 5 levels open)
        const newUser = {
            name: cleanName,
            email: cleanEmail,
            password: cleanPwd,
            createdAt: new Date().toLocaleDateString('id-ID'),
            avatarColor: avatarColor,
            data: this.getDefaultState()
        };

        this.accounts[cleanEmail] = newUser;
        this.saveAccounts();

        // Switch to this new user
        this.activeEmail = cleanEmail;
        this.data = newUser.data;
        this.setAuthenticated(true);
        this.saveActiveEmail();
        this.saveState();
        this.notifyChange();

        return { success: true, message: `Akun berhasil didaftarkan! Selamat datang, ${cleanName}.` };
    }

    login(email, password) {
        const cleanEmail = (email || '').trim().toLowerCase();
        const cleanPwd = (password || '').trim();

        if (!cleanEmail) {
            return { success: false, message: 'Alamat email wajib diisi!' };
        }
        if (!this.accounts[cleanEmail]) {
            return { success: false, message: 'Alamat email ini belum terdaftar. Silakan daftar akun baru.' };
        }

        const user = this.accounts[cleanEmail];
        if (user.password !== cleanPwd) {
            return { success: false, message: 'Kata sandi salah! Periksa kembali atau gunakan Lupa Kata Sandi.' };
        }

        // Switch active user session
        this.activeEmail = cleanEmail;
        this.data = user.data || this.getDefaultState();
        this.data.unlockedLevels = [1, 2, 3, 4, 5];
        this.setAuthenticated(true);
        this.saveActiveEmail();
        this.saveState();
        this.checkDayReset();
        this.notifyChange();

        return { success: true, message: `Selamat datang kembali, ${user.name}!` };
    }

    logout() {
        this.setAuthenticated(false);
        this.notifyChange();
        return { success: true, message: 'Anda telah berhasil keluar dari akun.' };
    }

    switchAccount(email) {
        const cleanEmail = (email || '').trim().toLowerCase();
        if (this.accounts[cleanEmail]) {
            this.activeEmail = cleanEmail;
            this.data = this.accounts[cleanEmail].data || this.getDefaultState();
            this.data.unlockedLevels = [1, 2, 3, 4, 5];
            this.saveActiveEmail();
            this.saveState();
            this.checkDayReset();
            this.notifyChange();
            return { success: true, message: `Beralih ke akun ${this.accounts[cleanEmail].name}` };
        }
        return { success: false, message: 'Akun tidak ditemukan' };
    }

    changePassword(oldPassword, newPassword) {
        const user = this.accounts[this.activeEmail];
        if (!user) {
            return { success: false, message: 'Sesi akun tidak valid.' };
        }

        const cleanOld = (oldPassword || '').trim();
        const cleanNew = (newPassword || '').trim();

        if (!cleanOld) {
            return { success: false, message: 'Kata sandi saat ini wajib diisi!' };
        }
        if (user.password !== cleanOld) {
            return { success: false, message: 'Kata sandi saat ini salah! Mohon periksa kembali.' };
        }
        if (cleanNew.length < 6) {
            return { success: false, message: 'Kata sandi baru minimal 6 karakter!' };
        }
        if (cleanOld === cleanNew) {
            return { success: false, message: 'Kata sandi baru harus berbeda dengan kata sandi lama!' };
        }

        user.password = cleanNew;
        this.saveAccounts();
        this.notifyChange();

        return { success: true, message: 'Kata sandi berhasil diperbarui! Simpan kata sandi baru Anda.' };
    }

    resetPassword(email, newPassword) {
        const cleanEmail = (email || '').trim().toLowerCase();
        const cleanNew = (newPassword || '').trim();

        if (!cleanEmail) {
            return { success: false, message: 'Alamat email wajib diisi!' };
        }
        if (!this.accounts[cleanEmail]) {
            return { success: false, message: 'Alamat email ini tidak terdaftar dalam sistem LinguaSphere.' };
        }
        if (cleanNew.length < 6) {
            return { success: false, message: 'Kata sandi baru minimal 6 karakter!' };
        }

        this.accounts[cleanEmail].password = cleanNew;
        this.saveAccounts();

        return { success: true, message: 'Kata sandi Anda berhasil diperbarui! Silakan masuk dengan kata sandi baru.' };
    }

    // --- State Persistence & Sync ---

    saveState() {
        try {
            // Sync to the active account object
            if (this.accounts[this.activeEmail]) {
                this.accounts[this.activeEmail].data = this.data;
                this.saveAccounts();
            }

            // Also keep current state in STORAGE_KEY
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
        for (let i = 1; i <= 5; i++) {
            if (!this.data.unlockedLevels.includes(i)) {
                this.data.unlockedLevels.push(i);
            }
        }
        this.data.unlockedLevels.sort((a, b) => a - b);
        this.saveState();
    }

    saveDiagnosticResult(result) {
        this.data.diagnosticResult = result;
        this.unlockUpToLevel(5);
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
