import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const setupAnimations = () => {
    const heroBody = document.querySelector('.hero-body')

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