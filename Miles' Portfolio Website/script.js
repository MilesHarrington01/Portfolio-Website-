const openMenu = () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.style.right = '0';
    hamburgerMenu.style.transitionDuration = '500ms';

    
}

const closeMenu = () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.style.right = '-1200px';
    hamburgerMenu.style.transitionDuration = '500ms';
}