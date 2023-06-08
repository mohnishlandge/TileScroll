import { preloadImages, preloadFonts } from './utils';
import LocomotiveScroll from 'locomotive-scroll';

const backtopEl = document.querySelector('.backtop');
const headerEl = document.querySelector('#header');

// Preload  images and fonts
Promise.all([preloadImages('.tiles__line-img'), preloadFonts('rmd7deq')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');

    // Initialize the Locomotive scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true, smoothMobile: false,
        direction: 'horizontal',
        inertia: 0.8,
    });

    backtopEl.addEventListener('click', () => scroll.scrollTo(headerEl));
});