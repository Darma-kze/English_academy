// Web Audio API Acoustic Feedback & Speech Controller
// Clean, elegant, non-cartoonish UI sounds and clear pronunciation

class SoundController {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.initAudioContext();
    }

    initAudioContext() {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
            this.ctx = new AudioCtx();
        }
    }

    resumeAudio() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playTone(freq, type = 'sine', duration = 0.18, gainValue = 0.08, delay = 0) {
        if (!this.enabled || !this.ctx) return;
        this.resumeAudio();

        setTimeout(() => {
            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = type;
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

                gain.gain.setValueAtTime(gainValue, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start();
                osc.stop(this.ctx.currentTime + duration);
            } catch (e) {
                console.warn('Audio playback error:', e);
            }
        }, delay * 1000);
    }

    // Elegant harmonic confirmation tone (soft marimba/bell tone)
    playCorrect() {
        this.playTone(587.33, 'sine', 0.15, 0.08, 0);       // D5
        this.playTone(880.00, 'sine', 0.28, 0.09, 0.08);    // A5
    }

    // Gentle low cue for incorrect (subtle, non-jarring)
    playWrong() {
        this.playTone(293.66, 'sine', 0.16, 0.06, 0);       // D4
        this.playTone(246.94, 'sine', 0.22, 0.06, 0.1);     // B3
    }

    // Crisp subtle tap
    playClick() {
        this.playTone(900, 'sine', 0.04, 0.03, 0);
    }

    // Session completion acoustic harmonic chord
    playFanfare() {
        const notes = [440, 554.37, 659.25, 880];
        notes.forEach((freq, idx) => {
            this.playTone(freq, 'sine', 0.35, 0.08, idx * 0.08);
        });
    }

    playStreak() {
        this.playTone(523.25, 'sine', 0.15, 0.06, 0);
        this.playTone(659.25, 'sine', 0.22, 0.07, 0.08);
    }
}

class SpeechController {
    constructor() {
        this.synth = window.speechSynthesis;
        this.voice = null;
        this.initVoice();
    }

    initVoice() {
        if (!this.synth) return;
        const setVoice = () => {
            const voices = this.synth.getVoices();
            this.voice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Zira') || v.name.includes('David'))) 
                      || voices.find(v => v.lang.startsWith('en')) 
                      || null;
        };

        setVoice();
        if (this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = setVoice;
        }
    }

    speak(text, slow = false) {
        if (!this.synth) return;
        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        if (this.voice) {
            utterance.voice = this.voice;
        }
        utterance.lang = 'en-US';
        utterance.rate = slow ? 0.7 : 0.95;
        utterance.pitch = 1.0;
        this.synth.speak(utterance);
    }

    stop() {
        if (this.synth) {
            this.synth.cancel();
        }
    }
}

window.soundCtrl = new SoundController();
window.speechCtrl = new SpeechController();
