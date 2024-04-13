import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const setupAnimations = () => {
    const heroBody = document.querySelector('.hero-body')

    
    gsap.to(document.querySelector('.hero'), { padding: '2.5rem', duration: 1.25, ease: "power1.out" })
    if(window.matchMedia("(max-width: 649px)").matches) {
        gsap.to(document.querySelector('.hero'), { padding: '1rem', duration: 1.25, ease: "power1.out" })
    }
    
    gsap.to(document.querySelector('.hero-body'), { borderRadius: '2.5rem', duration: 1.25, ease: "power1.out"})
    gsap.to(document.querySelector('.hero-body .svg'), { opacity: '1', y: 0, duration: .6, ease: "power1.out", delay: .8})
    gsap.to(document.querySelector('.hero-body h1'), { opacity: '1', y: 0, duration: .6, ease: "power1.out", delay: .95})
    gsap.to(document.querySelector('.hero-body p'), { opacity: '1', y: 0, duration: .6, ease: "power1.out", delay: 1.1})
        
    gsap.timeline({
        scrollTrigger: {
            trigger: heroBody, // Use the divider as the trigger
            start: 'top top', // Start the animation when the top of the path reaches the bottom of the viewport
            end: 'center 20%', // End the animation when the bottom of the path reaches the top of the viewport
            scrub: 1 // Add a delay of 1 second to the animation
        }
    })
    .to(document.querySelector('body'), {
        backgroundImage: "linear-gradient(90deg, #191c27, #25293d, #191c27)", // Set the 'd' attribute in the svg to be the value of finalPath
        ease: "none" // Remove easing since the scrub will add a smooth delay
    })

    gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector('#section-mvp'), // Use the divider as the trigger
            start: 'top top', // Start the animation when the top of the path reaches the bottom of the viewport
            end: 'bottom top', // End the animation when the bottom of the path reaches the top of the viewport
            scrub: 1 // Add a delay of 1 second to the animation
        }
    })
    .to(document.querySelector('body'), {
        backgroundImage: "linear-gradient(90deg, #191c27, #401010, #191c27)", // Set the 'd' attribute in the svg to be the value of finalPath
        ease: "none" // Remove easing since the scrub will add a smooth delay
    })

    gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector('#section-avoid'), // Use the divider as the trigger
            start: '80% top', // Start the animation when the top of the path reaches the bottom of the viewport
            end: 'center top', // End the animation when the bottom of the path reaches the top of the viewport
            scrub: 1 // Add a delay of 1 second to the animation
        }
    })
    .to(document.querySelector('body'), {
        backgroundImage: "linear-gradient(90deg, #191c27, #25293d, #191c27)", // Set the 'd' attribute in the svg to be the value of finalPath
        ease: "none" // Remove easing since the scrub will add a smooth delay
    })
} 
    
export default {
    setupAnimations
}