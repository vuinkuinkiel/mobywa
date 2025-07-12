let deferredPrompt;
const CACHE_NAME = 'app-cache-v1';

// Device detection
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const isAndroid = /Android/.test(navigator.userAgent);

// Cache resources for both platforms
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/dowod_files/main.css',
                // Platform specific resources
                ...(isAndroid ? ['/android-specific.css'] : []),
                ...(isIOS ? ['/ios-specific.css'] : [])
            ]);
        })
    );
});

// Optimized fetch for both platforms
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) return response;
                return fetch(event.request).then(response => {
                    if (!response || response.status !== 200) return response;
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                });
            })
    );
});

// Cross-platform install prompt
self.addEventListener('beforeinstallprompt', (event) => {
    if (isIOS) return; // iOS handles installation differently
    event.preventDefault();
    deferredPrompt = event;
    showInstallButton();
});

function showInstallButton() {
    try {
        const installButton = document.getElementById('install-button');
        if (!installButton) return;

        // Show install button based on platform
        if (isAndroid) {
            installButton.style.display = 'block';
            installButton.textContent = 'Install Android App';
        } else if (isIOS) {
            installButton.style.display = 'block';
            installButton.textContent = 'Add to Home Screen';
        } else {
            installButton.style.display = 'none';
        }

        installButton.addEventListener('click', async () => {
            if (isAndroid && deferredPrompt) {
                try {
                    await deferredPrompt.prompt();
                    const choice = await deferredPrompt.userChoice;
                    console.log(`User ${choice.outcome} the Android install prompt`);
                    deferredPrompt = null;
                } catch (error) {
                    console.error('Android install error:', error);
                }
            } else if (isIOS) {
                // Show iOS-specific installation instructions
                alert('To install: tap Share > Add to Home Screen');
            }
        });
    } catch (error) {
        console.error('showInstallButton error:', error);
    }
}
