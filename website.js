
/* side menu pop up */
let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')

btn.onclick = function () {
    sidebar.classList.toggle('active')
};

/* music page */
const faders = document.querySelectorAll('.fade-in') /* any thing with a class of fade-in will be selected */
/* to slow down the fade in */
const sliders = document.querySelectorAll(".slide-in")
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px" /* To fade in the columns when they are 100px from the bottom of the page */
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        }else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});