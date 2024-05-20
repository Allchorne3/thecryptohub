const setupC12Calc = () => {
    const form = document.querySelector('form')
    const balanceInput = form.querySelector('.balance')
    const daysInput = form.querySelector('.days')
    const result = document.querySelector('.result h3 span')

    if(!form) {
        console.warn("No C12 can be found!")
        return
    }
    
    balanceInput.addEventListener('input', (e) =>  showFinal())
    daysInput.addEventListener('input', (e) => showFinal())
    
    const earn = (starting, days) => {
        let balance = starting
        const percent = 0.12
        
        for (let i = 0; i < days; i++) {
            balance += balance * percent
            console.log(`Day ${i + 1}: $${balance.toFixed(2)}`)
        }
        
        return balance
    }

    const showFinal = () => {
        const starting = Number(balanceInput.value)
        const days = Number(daysInput.value)
        const earnings = earn(starting, days)
        result.textContent = `$${earnings.toFixed(2)}`
    }
}

export default {
    setupC12Calc
}