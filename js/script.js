document.addEventListener('DOMContentLoaded', () => {
    // PRELOADER
    // const sectionsContent = document.querySelectorAll('section');
    // const loaderContainer = document.querySelector('#preloader');
    // const loaderPercents = document.querySelector('#percents');
    // let sectionIncrement = 0;

    // sectionsContent.forEach((section, sectionIndex) => {
    //     section.addEventListener('load', () => {
    //         sectionIncrement++;
    
    //         loaderPercents.innerHTML = (sectionIncrement * 100) / sectionsContent.length;

    //         if (sectionIncrement === sectionsContent.length) {
    //             loaderContainer.classList.add('preloader__hide');
    //             loaderPercents.innerHTML = 100;
    //         }
    //     });
    //     console.log(section)
    // });

    // document.addEventListener('load', () => {
    //     sectionsContent.forEach((section, sectionIndex) => {
    //         console.log(section)
    //     });
    // });


    // PRELOADER
    
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

    // Projects Buttons

    // const projectButtons = document.querySelectorAll('[data-projectsBtn]');
    // const projectDetails = document.querySelector('.projects-details');
    // const closeButton = document.querySelector('.close-button');

    // projectButtons.forEach((button) => {
    //     button.addEventListener('click', () => {
    //         projectDetails.style.display = 'block';
    //         projectDetails.classList.add('fadeIn');
    //         console.log(button)
    //     });
    // });

    // closeButton.addEventListener('click', () => {
    //     projectDetails.style.display = 'none';
    //     projectDetails.classList.remove('fadeIn');
    // });

    // /Projects Buttons


});