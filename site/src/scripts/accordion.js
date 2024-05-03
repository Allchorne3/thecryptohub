class Accordion {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            console.warn(`No accordion container has been found on the ${window.location.href} page`);
            return;
        }
        this.setupAccordion();
    }

    getContentHeight(accordion) {
        const accordionInner = accordion.querySelector('.accordion-content_inner');
        if (accordion.classList.contains('is-open')) return 0;
        return accordionInner.getBoundingClientRect().height;
    }

    updateAccordion(accordion, height) {
        const accordionContent = accordion.querySelector('.accordion-content');
        accordion.classList.toggle('is-open');
        accordionContent.style.height = `${height}px`;
    }

    setupAccordion() {
        this.container.addEventListener('click', (e) => {
            const accordionHeader = e.target.closest('.accordion-header');
            if (!accordionHeader) return;
            const accordion = accordionHeader.parentElement.parentElement;
            const height = this.getContentHeight(accordion);
            this.updateAccordion(accordion, height);
        });
    }
}

export default Accordion;
