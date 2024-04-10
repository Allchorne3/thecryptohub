import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Dividers from "./dividers.js";
import HackedText from "./hacker-text.js"

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        addIsScrolledToHTML(25)
    })

    // Animations
    gsap.to(document.querySelector('.hero'), { padding: '2.5rem', duration: 1.25, ease: "power1.out" })
    gsap.to(document.querySelector('.hero-body'), { borderRadius: '2.5rem', duration: 1.25, ease: "power1.out"})
    gsap.to(document.querySelector('.hero-body svg'), { opacity: '1', y: 0, duration: .6, ease: "power1.out", delay: .8})
    gsap.to(document.querySelector('.hero-body h1'), { opacity: '1', y: 0, duration: .6, ease: "power1.out", delay: .95})
    gsap.to(document.querySelector('.hero-body p'), { opacity: '1', y: 0, duration: .6, ease: "power1.out", delay: 1.1})

    const heroBody = document.querySelector('.hero-body')
        
    gsap.timeline({
        scrollTrigger: {
            trigger: heroBody, // Use the divider as the trigger
            start: 'top top', // Start the animation when the top of the path reaches the bottom of the viewport
            end: 'center 20%', // End the animation when the bottom of the path reaches the top of the viewport
            scrub: 1 // Add a delay of 1 second to the animation
        }
    })
    .to(document.querySelector('body'), {
        backgroundColor: "#F5F1EC", // Set the 'd' attribute in the svg to be the value of finalPath
        ease: "none" // Remove easing since the scrub will add a smooth delay
    })

    // gsap.to(document.querySelector('body'), { duration: .6, ease: "power1.out", delay: 1.1})

    // Run functions
    Dividers.setupDividerAnimations()
    HackedText.hackerText()
})

const addIsScrolledToHTML = (scrolled = 0) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollTop > scrolled ? document.documentElement.classList.add('is-scrolled') : document.documentElement.classList.remove('is-scrolled')
}

