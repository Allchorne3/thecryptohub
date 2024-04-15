import Dividers from "./dividers.js";
import HackedText from "./hacker-text.js"
import Modal from './modal';
import setupSwiper from './swiper';
import Animations from './animations';
import Tabs from './tabs';
import InlineSVG from "./utils/js-inlinesvg"

document.addEventListener('DOMContentLoaded', () => {
	InlineSVG.init({
		svgSelector: 'img.svg',
		initClass: 'js-inlinesvg',
	}, () => {
		document.addEventListener('scroll', () => {
			addIsScrolledToHTML(25)
		})

		const form = document.querySelector('form')
		
		form?.addEventListener('submit', event => {
			event.preventDefault()
			const input = event.target.querySelector('input[name="name"]')
			const value = input.value.trim()
			console.log(DOMPurify.sanitize(value))
		})

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
		Dividers.setupDividerAnimations()
		HackedText.hackerText()
		Modal.setupModal()
		Animations.setupAnimations()
		Tabs.setupTabs()
		
		setupSwiper('.mvp-swiper', { 
			slidesPerView: 1,
			breakpoints: {
				699: {
					slidesPerView: 2,
				},
				1049: {
					slidesPerView: 3,
				},
				1249: {
					slidesPerView: countSwiperSlides('.mvp-swiper'),
				}
			},
		})
		setupSwiper('.avoid-swiper', { 
			slidesPerView: 1,
			breakpoints: {
				699: {
					slidesPerView: 2,
				},
				1049: {
					slidesPerView: 3,
				}
			},
		})
		setupSwiper('.trust-swiper', { 
			slidesPerView: 1,
			breakpoints: {
				699: {
					slidesPerView: 2,
				},
				899: {
					slidesPerView: 3,
				},
				1049: {
					slidesPerView: countSwiperSlides('.trust-swiper'),
				}
			},
		})
	})
})

const addIsScrolledToHTML = (scrolled = 0) => {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	scrollTop > scrolled ? document.documentElement.classList.add('is-scrolled') : document.documentElement.classList.remove('is-scrolled')
}

function countSwiperSlides(container) {
	return document.querySelectorAll(`${container} .swiper-slide`).length;
}
