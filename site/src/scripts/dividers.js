import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const setupDividerAnimations = () => {
    const pathsToAnimate = document.querySelectorAll('[element="path-to-animate"')

    pathsToAnimate.forEach(path => {
        // Grab the final path data from the svg
        const finalPath = path.getAttribute('final-path')
        
        gsap.timeline({
            scrollTrigger: {
                trigger: path,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        })
        .to(path, {
            attr: { d: finalPath },
            ease: "none"
        })
    })
}

export default {
    setupDividerAnimations
}