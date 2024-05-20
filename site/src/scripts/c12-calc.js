const setupC12Calc = () => {
    const form = document.querySelector('form')
    const balanceInput = form.querySelector('.balance')
    const daysInput = form.querySelector('.days')
    const result = document.querySelector('.result h3 span')
    
    balanceInput.addEventListener('input', () => showFinal())
    daysInput.addEventListener('input', () => showFinal())
    
    const calc = (starting, days) => {
      // Initial values
      let initialAmount = starting;
      let percentageIncrease = 0.12;
    
      // Calculate 12% of the initial amount
      let increase = initialAmount * percentageIncrease;
    
      // Multiply the increase by 12
      let totalIncrease = increase * days;
    
      // Add the initial amount
      let finalAmount = totalIncrease + initialAmount;
      
      return finalAmount;
    }
    
    const showFinal = () => {
      const starting = Number(balanceInput.value)
      const days = Number(daysInput.value)
      const calculate = calc(starting, days)
      result.textContent = calculate.toFixed(2)
    }
}

export default {
    setupC12Calc
}
