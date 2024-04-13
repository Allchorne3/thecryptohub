import Dividers from "./dividers.js";
import HackedText from "./hacker-text.js"
import Modal from './modal';
import setupSwiper from './swiper';
import Animations from './animations';

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        addIsScrolledToHTML(25)
    })

    const form = document.querySelector('form')
    
    form.addEventListener('submit', event => {
        event.preventDefault()
        const input = event.target.querySelector('input[name="name"]')
        const value = input.value.trim()
        console.log(DOMPurify.sanitize(value))
    })

    // Run functions
    Dividers.setupDividerAnimations()
    HackedText.hackerText()
    Modal.setupModal()
    Animations.setupAnimations()

    setupSwiper('.mvp-swiper', { slidesPerView: 4, loop: true })
    setupSwiper('.avoid-swiper', { slidesPerView: 3, loop: true })
    setupSwiper('.trust-swiper', { slidesPerView: 3, loop: true })
})

const addIsScrolledToHTML = (scrolled = 0) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollTop > scrolled ? document.documentElement.classList.add('is-scrolled') : document.documentElement.classList.remove('is-scrolled')
}

