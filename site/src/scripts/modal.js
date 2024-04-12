const setupModal = () => {
    const modalButton = document.querySelector('.jsModalButton')
    const modalCloseButton = document.querySelector('.jsModalClose')
    const modalOverlay = document.querySelector('.modal-overlay')

    if(!modalOverlay) {
        console.warn("No modal can be found")
        return
    }
    
    modalButton.addEventListener('click', function () {
        document.body.classList.add('modal-is-open')
    })
    
    modalCloseButton.addEventListener('click', function () {
        document.body.classList.remove('modal-is-open')
    })
    
    modalOverlay.addEventListener('click', e => {
        if(!e.target.closest('.modal')) {
            document.body.classList.remove('modal-is-open')
        }
    })

    document.addEventListener('keydown', event => {
        if(event.key === 'Escape') {
            document.body.classList.remove('modal-is-open')
        }
    })
}

export default {
    setupModal
}