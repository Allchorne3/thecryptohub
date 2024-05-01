import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

const setupAnimations = () => {
    const title = new SplitType('h1', { types: 'lines' })

	gsap.to('.line', {
		y: 0,
        opacity: 1,
		stagger: .1,
		duration: .5,
		ease: "expoScale(0.5,7,none)",
	})
} 
    
export default {
    setupAnimations
}