import Modal from 'Scripts/modal';
import Animations from 'Scripts/animations';
import InlineSVG from "Utils/js-inlinesvg"
import Accordion from 'Scripts/accordion'

document.addEventListener('DOMContentLoaded', () => {
	InlineSVG.init({
		svgSelector: 'img.svg',
		initClass: 'js-inlinesvg',
	}, () => {
		document.addEventListener('scroll', () => {
			addIsScrolledToHTML(25)
		})
		addIsScrolledToHTML(25)

		// Mobile nav
		const hamburger = document.querySelector('.navbar-burger')
		const menuItem = document.querySelectorAll('#nav li')

		hamburger.addEventListener('click', e => {
			document.documentElement.classList.toggle('has-menu-active');
		})

		menuItem.forEach(item => {
			item.addEventListener('click', () => {
				document.documentElement.classList.remove('has-menu-active');
			})
		})

		// Run functions
		Modal.setupModal()
		Animations.setupAnimations()
		Accordion.setupAccordion();

		const handleMouseMove = e => {
			const { currentTarget: target } = e;
			
			const rect = target.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			
			target.style.setProperty("--mouse-x", `${x}px`);
			target.style.setProperty("--mouse-y", `${y}px`);
		}

		  // Create a loop to iterate over the cards
		for (const card of document.querySelectorAll(".glared")) {
			card.onmousemove = e => handleMouseMove(e);
		}
	})
})

const addIsScrolledToHTML = (scrolled = 0) => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	scrollTop > scrolled ? document.documentElement.classList.add('is-scrolled') : document.documentElement.classList.remove('is-scrolled')
}
