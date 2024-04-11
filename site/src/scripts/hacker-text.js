const hackerText = () => {
    const textToHack = document.querySelectorAll('[data-text="hacked"]');
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for(const hackedText of textToHack) {
        hackedText.setAttribute('data-value', hackedText.textContent);

        hackedText.onmouseover = event => {
            let iterations = 0;

            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(index < iterations) {
                    return event.target.dataset.value[index];   
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
                if(iterations >= event.target.dataset.value.length) clearInterval(interval);
                iterations += 1 / 3;
            }, 50);
        }
    }
}

export default {
    hackerText
}