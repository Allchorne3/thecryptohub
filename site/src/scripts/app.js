import Modal from 'Scripts/modal';
import Animations from 'Scripts/animations';
import InlineSVG from "Utils/js-inlinesvg"
import Accordion from 'Scripts/accordion'
import setupSwiper from './swiper';

document.addEventListener('DOMContentLoaded', () => {
	let lastScrollTop = 0;
	const header = document.querySelector('#header');

	document.addEventListener('scroll', () => {
		addIsScrolledToHTML(25)

		let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
		if (currentScroll > lastScrollTop) {
			// scrolling down
			header.classList.remove('is-active')
		} else {
			// scrolling up
			header.classList.add('is-active')
		}
		lastScrollTop = currentScroll;
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

	// Swipers
	setupSwiper('.trust-swiper', { 
		slidesPerView: 1,
		breakpoints: {
			699: {
				slidesPerView: countSwiperSlides('.trust-swiper') < 2 ? 1 : 2,
			},
			899: {
				slidesPerView: countSwiperSlides('.trust-swiper') < 3 ? countSwiperSlides('.trust-swiper') : 3,
			},
			1049: {
				slidesPerView: countSwiperSlides('.trust-swiper') > 1 ? countSwiperSlides('.trust-swiper') : 1,
			}
		},
	})

	const accordion = document.querySelectorAll('.accordion')
	
	accordion.forEach(item => {
		if(item.classList.contains('is-open')) {
			console.log("opened")
		}
	})


	// Run functions
	Modal.setupModal()
	Animations.setupAnimations()
	const accordionChamps = new Accordion('#section-champs');
	const accordionAvoid = new Accordion('#section-avoid');

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

const addIsScrolledToHTML = (scrolled = 0) => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	scrollTop > scrolled ? document.documentElement.classList.add('is-scrolled') : document.documentElement.classList.remove('is-scrolled')
}

function countSwiperSlides(container) {
	return document.querySelectorAll(`${container} .swiper-slide`).length;
}
