document.addEventListener('DOMContentLoaded', () => {
    // Button to Top
    const scrollToTopBtn = document.querySelector('#scrollToTopBtn');
    const wrapper = document.querySelector('.wrapper');

    scrollToTopBtn.addEventListener('click', scrollToTop);

    function scrollToTop() {
        wrapper.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    wrapper.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;

        if (wrapper.scrollTop > windowHeight / 2) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // /Button to Top

    // Projects Buttons

    const projectsBtn = document.querySelectorAll('.projectsBtn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    projectsBtn.forEach((button) => {
        button.addEventListener('click', () => {
            const buttonAttr = button.getAttribute('data-projectsBtn');
            const modal = document.getElementById(buttonAttr);
            modal.style.display = 'block';
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            const target = e.target;

            if(target === modal) {
                modal.style.display = 'none';
            }
        });
    });  

    // /Projects Buttons

    // Add <br> for 425px widthScreen 
    
    function addBrTagIfScreenWidthIs425px() {
        if(window.innerWidth <= 425) {
            const br = document.createElement('br');
            const greetingSecondForBr = document.querySelector('.forBr');

            greetingSecondForBr.appendChild(br);
        }
    }

    window.addEventListener('load', addBrTagIfScreenWidthIs425px);
    // window.addEventListener('resize', addBrTagIfScreenWidthIs425px);
    
    // /Add <br> for 425px widthScreen 

});