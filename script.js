
    const container = document.querySelector('.container');
    for (let i = 1; i <= 10; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.setProperty('--i', i);
        container.appendChild(circle);
    }
