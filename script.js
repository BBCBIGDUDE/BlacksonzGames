let isPanicMode = false;

function togglePanic() {
    const overlay = document.getElementById('panic-overlay');
    if (!isPanicMode) {
        overlay.style.display = 'block';
        document.title = "Biology - Wikipedia";
        isPanicMode = true;
    } else {
        overlay.style.display = 'none';
        document.title = "Bio Project Notes";
        isPanicMode = false;
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === '`') { 
        togglePanic();
    }
});

window.addEventListener('blur', () => {
    if (isPanicMode) {
        setTimeout(() => {
            window.focus();
        }, 100);
    }
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = "Google Docs - Biology";
    } else {
        document.title = isPanicMode ? "Biology - Wikipedia" : "Bio Project Notes";
    }
});