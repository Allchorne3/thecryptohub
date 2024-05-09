const setupAccordion = () => {
    const accordionContainer = document.querySelector('.accordion-container')

    if(!accordionContainer) {
        console.warn(`No accordion has been found! on the ${window.location.href} page`)
        return;
    }

    // Function to calculate the height of the accordion when opened
    function getContentHeight(accordion) {
        const accordionInner = accordion.querySelector('.accordion-content_inner') 
        if(accordion.classList.contains('is-open')) return 0
        return accordionInner.getBoundingClientRect().height
    }

    // Function to update the accordion. To open the accordion and apply the correct height
    function updateAccordion(accordion, height) {
        const accordionContent = accordion.querySelector('.accordion-content')
        // Update the accordion to open/close
        accordion.classList.toggle('is-open')
        accordionContent.style.height = `${height}px`
    }

    accordionContainer.addEventListener('click', e => {
        const accordionHeader = e.target.closest('.accordion-header')
        if(!accordionHeader) return

        const accordion = accordionHeader.parentElement.parentElement
        const height = getContentHeight(accordion)
        updateAccordion(accordion, height)
    })
}

export default {
    setupAccordion
}
