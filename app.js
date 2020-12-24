const navSlide = () => {
    const bridge = document.querySelector('.bridge');
    const nav = document.querySelector('.nav-links');

    bridge.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
}

const app = () => {
    navSlide();
}
