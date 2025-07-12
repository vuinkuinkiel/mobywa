const isAndroid = /Android/i.test(navigator.userAgent);
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

const approvedFingerprints = {
    // Add your pre-approved fingerprints here
    "eyJ1c2VyQWdlbnQiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTMxLjAuMC4wIFNhZmFyaS81MzcuMzYgRWRnLzEzMS4wLjAuMCIsImxhbmd1YWdlIjoicGwiLCJwbGF0Zm9ybSI6IldpbjMyIiwicmVzb2x1dGlvbiI6IjE1MzZ4ODY0IiwiY29sb3JEZXB0aCI6MjQsInRpbWV6b25lIjoiRXVyb3BlL1dhcnNhdyIsInRvdWNoUG9pbnRzIjowLCJ2ZW5kb3IiOiJHb29nbGUgSW5jLiJ9": true,
    "eyJ1c2VyQWdlbnQiOiJNb3ppbGxhLzUuMCAoaVBob25lOyBDUFUgaVBob25lIE9TIDE4XzAgbGlrZSBNYWMgT1MgWCkgQXBwbGVXZWJLaXQvNjA1LjEuMTUgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzE4LjAgTW9iaWxlLzE1RTE0OCBTYWZhcmkvNjA0LjEiLCJsYW5ndWFnZSI6InBsLVBMIiwicGxhdGZvcm0iOiJpUGhvbmUiLCJyZXNvbHV0aW9uIjoiMzc1eDgxMiIsImNvbG9yRGVwdGgiOjI0LCJ0aW1lem9uZSI6IkV1cm9wZS9XYXJzYXciLCJ0b3VjaFBvaW50cyI6NSwidmVuZG9yIjoiQXBwbGUgQ29tcHV0ZXIsIEluYy4ifQ==": true,
    "eyJ1c2VyQWdlbnQiOiJNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgMTA7IEspIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTAuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzYiLCJsYW5ndWFnZSI6InBsLVBMIiwicGxhdGZvcm0iOiJMaW51eCBhcm12ODEiLCJyZXNvbHV0aW9uIjoiMzkzeDg3MyIsImNvbG9yRGVwdGgiOjI0LCJ0aW1lem9uZSI6IkV1cm9wZS9XYXJzYXciLCJ0b3VjaFBvaW50cyI6NSwidmVuZG9yIjoiR29vZ2xlIEluYy4ifQ==": true,
    "eyJ1c2VyQWdlbnQiOiJNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgMTA7IEspIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFNhbXN1bmdCcm93c2VyLzI3LjAgQ2hyb21lLzEyNS4wLjAuMCBNb2JpbGUgU2FmYXJpLzUzNy4zNiIsImxhbmd1YWdlIjoicGwtUEwiLCJwbGF0Zm9ybSI6IkxpbnV4IGFybXY4MSIsInJlc29sdXRpb24iOiIzNjB4NzA1IiwiY29sb3JEZXB0aCI6MjQsInRpbWV6b25lIjoiRXVyb3BlL1dhcnNhdyIsInRvdWNoUG9pbnRzIjo1LCJ2ZW5kb3IiOiJHb29nbGUgSW5jLiJ9": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
    "4": true,
};

function verifyFingerprint(fingerprint) {
    return approvedFingerprints[fingerprint] === true;
}

function generateFingerprint() {
    if (!isAndroid && !isIOS) {
        return null; // Only allow mobile devices
    }

    const components = {
        // Basic device info
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        resolution: `${screen.width}x${screen.height}`,
        colorDepth: screen.colorDepth,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        touchPoints: navigator.maxTouchPoints,
        vendor: navigator.vendor,
        // iOS specific
        isIOS: isIOS,
        // Device specific
        canvas: generateCanvasFingerprint(),
        webgl: generateWebGLFingerprint(),
        audio: generateAudioFingerprint()
    };

    return btoa(JSON.stringify(components));
}

function generateCanvasFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;
    
    // Add text with different styling
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125,1,62,20);
    ctx.fillStyle = "#069";
    ctx.fillText("mObywatel2.0", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("mObywatel2.0", 4, 17);
    
    return canvas.toDataURL();
}

function generateWebGLFingerprint() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return null;
    
    return {
        vendor: gl.getParameter(gl.VENDOR),
        renderer: gl.getParameter(gl.RENDERER),
        version: gl.getParameter(gl.VERSION)
    };
}

function generateAudioFingerprint() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const analyser = audioContext.createAnalyser();
        const gain = audioContext.createGain();
        oscillator.connect(analyser);
        analyser.connect(gain);
        gain.connect(audioContext.destination);
        oscillator.start(0);
        const data = new Float32Array(analyser.frequencyBinCount);
        analyser.getFloatFrequencyData(data);
        oscillator.stop();
        audioContext.close();
        return data.slice(0, 10).join(',');
    } catch(e) {
        return null;
    }
}

async function getBatteryInfo() {
    if ('getBattery' in navigator) {
        const battery = await navigator.getBattery();
        return {
            level: battery.level,
            charging: battery.charging
        };
    }
    return null;
}

function getFontList() {
    const fonts = ['Arial', 'Times New Roman', 'Courier', 'Verdana', 'Georgia'];
    return fonts.filter(font => document.fonts.check(`12px "${font}"`));
}

function verifyDevice(callback) {
    const currentFingerprint = generateFingerprint();
    const storedFingerprint = localStorage.getItem('deviceFingerprint');
    
    if (!storedFingerprint) {
        localStorage.setItem('deviceFingerprint', currentFingerprint);
        callback(true);
        return;
    }
    
    callback(currentFingerprint === storedFingerprint);
}

function checkDeviceAccess() {
    if (!isAndroid && !isIOS) {
        document.body.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2>Dostęp tylko z urządzeń mobilnych</h2>
                <p>Ta aplikacja jest dostępna tylko na urządzeniach mobilnych.</p>
                <div class="watermark">
                    xObywatel • <a href="https://discord.gg/jQcVyeJKQm">Discord</a>
                </div>
            </div>`;
        return false;
    }
    return true;
}

function checkInstallationAndDevice() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                        window.navigator.standalone || 
                        document.referrer.includes('android-app://');

    verifyDevice((isValidDevice) => {
        if (!isValidDevice) {
            document.body.style.display = 'none';
            const message = document.createElement('div');
            message.innerHTML = `
                <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #f5f6fb;">
                    <div style="text-align: center; padding: 20px; background: white; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h2 style="color: #064792; margin-bottom: 10px;">Brak dostępu</h2>
                        <p style="color: #666;">Nie masz uprawnień do wyświetlenia tej strony.</p>
                        <div style="margin-top: 20px; font-size: 12px; color: #999; opacity: 0.7;">
                            xObywatel • <a href="https://discord.gg/jQcVyeJKQm" style="color: #064792; text-decoration: none;">Discord</a>
                        </div>
                    </div>
                </div>`;
            document.body.parentNode.insertBefore(message, document.body);
            return;
        }

        if (!isStandalone && !isAndroid) {
            document.body.style.display = 'none';
            const message = document.createElement('div');
            message.innerHTML = `
                <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #f5f6fb; z-index: 99999; display: flex; align-items: center; justify-content: center; text-align: center; font-family: 'Inter', sans-serif;">
                    <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 90%; display: flex; flex-direction: column; align-items: center;">
                        <div style="display: flex; justify-content: center; width: 100%; margin-bottom: 20px;">
                            <img src="dowod_files/favoicon.ico" style="width: 64px; height: 64px;" alt="Logo">
                        </div>
                        <h2 style="font-family: 'Inter', sans-serif; font-weight: 600; margin: 0;">Wymagane dodanie do ekranu głównego</h2>
                        <div style="margin: 20px 0; color: #666; font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.5;">
                            ${isIOS ? 
                                'Aby kontynuować:<br>1. Kliknij ikonę "Udostępnij"<br>2. Wybierz "Dodaj do ekranu głównego"<br>3. Otwórz aplikację z ekranu głównego' : 
                                'Aby kontynuować:<br>1. Kliknij menu (3 kropki)<br>2. Wybierz "Dodaj do ekranu głównego"<br>3. Otwórz aplikację z ekranu głównego'}
                        </div>
                        <div style="margin-top: 20px; font-size: 12px; color: #999; opacity: 0.7;">
                            xObywatel • <a href="https://discord.gg/jQcVyeJKQm" style="color: #064792; text-decoration: none;">Discord</a>
                        </div>
                    </div>
                </div>`;
            document.body.parentNode.insertBefore(message, document.body);
            return;
        }

        document.body.style.display = 'block';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (!checkDeviceAccess()) return;
    checkInstallationAndDevice();
});

// Block print and save
window.addEventListener('beforeprint', (e) => e.preventDefault());
// window.onbeforeunload = () => '';  // Remove or comment this line

// Add platform specific handling
if (isAndroid) {
    // Clear any existing beforeunload handlers
    window.onbeforeunload = null;
    
    // Prevent new beforeunload handlers
    window.addEventListener('beforeunload', (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        delete e.returnValue;
    }, true);
}

// Block image dragging and copying
document.addEventListener('DOMContentLoaded', () => {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('dragstart', (e) => e.preventDefault());
        images[i].addEventListener('contextmenu', (e) => e.preventDefault());
        images[i].style.userSelect = 'none';
        images[i].style.webkitUserSelect = 'none';
    }
});