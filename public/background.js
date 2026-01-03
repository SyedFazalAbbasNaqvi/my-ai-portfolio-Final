let scene, camera, renderer, orbs = [];
const params = { speed: 1 };

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('agentic-bg'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create 3-4 Intelligence Orbs
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const colors = [0x00F2FF, 0x7000FF, 0x00F2FF];

    for(let i=0; i<3; i++) {
        const material = new THREE.MeshBasicMaterial({ 
            color: colors[i], 
            transparent: true, 
            opacity: 0.4 
        });
        const orb = new THREE.Mesh(geometry, material);
        orb.position.set(Math.random()*10 - 5, Math.random()*10 - 5, -5);
        orbs.push(orb);
        scene.add(orb);
    }

    camera.position.z = 5;

    // The 5-Second Motion Rule
    gsap.to(params, {
        speed: 0,
        duration: 5,
        delay: 1,
        ease: "power2.out"
    });

    // Fade in Nav
    gsap.to("#navbar", { opacity: 1, duration: 2, delay: 0.5 });

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    orbs.forEach((orb, i) => {
        orb.position.x += Math.sin(Date.now() * 0.001 + i) * 0.01 * params.speed;
        orb.position.y += Math.cos(Date.now() * 0.001 + i) * 0.01 * params.speed;
    });
    renderer.render(scene, camera);
}

init();