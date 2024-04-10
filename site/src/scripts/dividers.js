import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const setupDividerAnimations = () => {
    const pathsToAnimate = document.querySelectorAll('[element="path-to-animate"]')

    // Error handling
    if(pathsToAnimate.length === 0) { 
        console.warn('There are no dividers found on this page');
        return;
    }

    pathsToAnimate.forEach(path => {
        // Grab the final path data from the svg
        const finalPath = path.getAttribute('final-path')
        
        gsap.timeline({
            scrollTrigger: {
                trigger: path, // Use the divider as the trigger
                start: 'top bottom', // Start the animation when the top of the path reaches the bottom of the viewport
                end: 'bottom top', // End the animation when the bottom of the path reaches the top of the viewport
                scrub: 1 // Add a delay of 1 second to the animation
            }
        })
        .to(path, {
            attr: { d: finalPath }, // Set the 'd' attribute in the svg to be the value of finalPath
            ease: "none" // Remove easing since the scrub will add a smooth delay
        })
    })
}

export default {
    setupDividerAnimations
}