// Update Clock
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

// Search redirection logic (optional enhancement)
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && this.value.trim() !== "") {
        // Form will submit naturally to Google
    }
});

// Initialize
// setInterval(updateTime, 100000);
updateTime();

// Slow down the gradient even more after 5 seconds
window.onload = () => {
    setTimeout(() => {
        document.querySelector('.gradient-bg').style.animationDuration = '120s';
        document.querySelector('.gradient-bg').style.animationIterationCount = 'infinite';
        document.querySelector('.gradient-bg').style.animationTimingFunction = 'linear';
    }, 14000); // Transitions to idle state after the 'forwards' animation ends
};