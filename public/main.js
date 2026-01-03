document.addEventListener('DOMContentLoaded', () => {
    // Fade in Navbar
    gsap.to("#navbar", { opacity: 1, duration: 2, delay: 0.5 });

    // Simple Typewriter Simulation for the Terminal Header
    const text = document.getElementById('typewriter');
    let originalText = text.innerText;
    text.innerText = "";
    let i = 0;

    function type() {
        if (i < originalText.length) {
            text.innerText += originalText.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
});