/* --- piano.js: Lógica de Sonido --- */

document.addEventListener("DOMContentLoaded", () => {
    
    const keys = document.querySelectorAll(".key");
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // Notas musicales
    const notes = {
        "C": 261.63,  // Do
        "C#": 277.18,
        "D": 293.66,  // Re
        "D#": 311.13,
        "E": 329.63,  // Mi
        "F": 349.23,  // Fa
        "F#": 369.99,
        "G": 392.00,  // Sol
        "G#": 415.30,
        "A": 440.00,  // La
        "A#": 466.16,
        "B": 493.88   // Si
    };

    function playSound(note) {
        if (!notes[note]) return;

        // generador de sonido
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = "triangle"; 
        oscillator.frequency.setValueAtTime(notes[note], audioCtx.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.6, audioCtx.currentTime + 0.02); 
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5); 

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 1.5);
    }

    // Evento
    keys.forEach(key => {
        key.addEventListener("mousedown", () => {
            const note = key.getAttribute("data-note");
            playSound(note);
            
            key.style.transform = "scale(0.95) translateY(2px)";
            setTimeout(() => key.style.transform = "", 150);
        });
    });

    // Mapeo de teclado
    const keyboardMap = {
        "a": "C", "w": "C#", "s": "D", "e": "D#", "d": "E",
        "f": "F", "t": "F#", "g": "G", "y": "G#", "h": "A", "u": "A#", "j": "B"
    };

    document.addEventListener("keydown", (e) => {
        const note = keyboardMap[e.key];
        if (note && !e.repeat) {
            const keyElement = document.querySelector(`.key[data-note="${note}"]`);
            if (keyElement) {
                const event = new Event('mousedown');
                keyElement.dispatchEvent(event);
            }
        }
    });
});