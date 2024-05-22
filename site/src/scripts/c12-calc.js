const setupC12Calc = () => {
    const form = document.querySelector('form');
    const balanceInput = form.querySelector('.balance');
    const daysInput = form.querySelector('.days');
    const result = document.querySelector('.result h3 span');
    const increaseList = document.querySelector('.increase-list');
    const accordion = document.querySelector('#section-calc .accordion')
    const accordionContent = document.querySelector('#section-calc .accordion-content')
    const accordionContainer = document.querySelector('#section-calc .accordion-container')
    
    balanceInput.addEventListener('input', showFinal);
    daysInput.addEventListener('input', showFinal);
    
    function showFinal() {
      const starting = Number(balanceInput.value);
      const days = Number(daysInput.value);
      const percentageIncrease = 0.12;
      let totalIncrease = 0;
    
      // Clear previous list items
      increaseList.innerHTML = '';
      
      if(!balanceInput.value == '') {
        accordionContainer.style.display = "block";
      } else {
        accordion.classList.remove('is-open')
        accordionContent.style.height = '0';
        accordionContainer.style.display = "none";
      }
    
      for (let i = 1; i <= days; i++) {
        const increase = starting * percentageIncrease;
        totalIncrease += increase;
    
        // Create list item and append to increaseList
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>Day ${i}:</span> $${totalIncrease.toFixed(2)}`;
        increaseList.appendChild(listItem);
      }
    
      // Display total increase
      result.textContent = totalIncrease.toFixed(2);
    }
  
}

export default {
    setupC12Calc
}
