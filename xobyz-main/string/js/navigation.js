// Handle page transitions and reloads
document.addEventListener('DOMContentLoaded', () => {
    // Check if coming from index.html
    const fromIndex = document.referrer.includes('index.html');
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    // Handle iOS specific page load issues
    if (isIOS && fromIndex && !sessionStorage.getItem('pageLoaded')) {
        sessionStorage.setItem('pageLoaded', 'true');
        window.location.reload(true);
    }

    // Clear session on fresh visit
    if (!document.referrer) {
        sessionStorage.clear();
    }
});