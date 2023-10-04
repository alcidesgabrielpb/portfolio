window.addEventListener('scroll', () => {
    let header = document.querySelector('#header');
    let transitionArea = document.querySelector('#about');
    let transitionBorder = document.querySelector('.hello-message');

    if(window.scrollY <= transitionBorder.offsetTop) {
        header.style.boxShadow = 'none';
        console.log('oi')
    } else {
        header.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.1)';
    }

        if(window.scrollY >= transitionArea.offsetTop) {
        header.classList.add('header-background-2');
        header.classList.remove('header-background-1');
    } else {
        header.classList.add('header-background-1');
        header.classList.remove('header-background-2');
    }
    
})