const backdrop = document.querySelector('.backdrop');
const mobileNavigation = document.querySelector('.mobile-navigation');
const sideDrawerToggle = document.querySelector('.hamburger-icon');

let isOpened = false;

const closeMobileNavigationHandler = () => {
    isOpened = false;
    backdrop.classList.remove('open');
    mobileNavigation.classList.remove('open');
    sideDrawerToggle.classList.remove('clicked');
    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 300);
}

const openMobileNavigationHandler = () => {
    if (isOpened) return closeMobileNavigationHandler();
    isOpened = true;
    backdrop.style.display = 'block';
    mobileNavigation.classList.add('open');
    sideDrawerToggle.classList.add('clicked');
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 10);
}

sideDrawerToggle.addEventListener('click', openMobileNavigationHandler);
mobileNavigation.addEventListener('click', closeMobileNavigationHandler);
backdrop.addEventListener('click', closeMobileNavigationHandler);