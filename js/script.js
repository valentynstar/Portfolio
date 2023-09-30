window.addEventListener('DOMContentLoaded', () => {
    // Background animation 

    // function toggleBackground() {
    //     const sections = document.getElementsByTagName('section');

    //     for(let i = 0; i < sections.length; i++) {
    //         const section = sections[i];
    //         const isWaveBackground = section.classList.contains('wave-background');

    //         if(!isWaveBackground) {
    //             section.classList.add('wave-background');
    //         } else {
    //             section.classList.remove('wave-background');
    //         }
    //     }

    // }

    // setInterval(toggleBackground, 5000);

    // /Background animation 
    
    
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


});