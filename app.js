const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions () {
    // change active button class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(e) {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
        })
        
    }

    // Sections active class

}

PageTransitions();

function scrollFunction() {
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(e) {           
            let id = e.target.dataset.id;
            //console.log(id);
            var element = document.getElementById(id);
            element.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'center'
            });
        });
    }
}

scrollFunction();