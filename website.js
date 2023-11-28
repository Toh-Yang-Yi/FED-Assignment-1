
/* side menu pop up */
hamburger = document.querySelector(".hamburger") /* to select objects with hamburger as their classes */
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar"); /* select objects with nav-bar as their class */
    navBar.classList.toggle("active") /* Make the dropdown effect when the user clicks on the hamburger bar */
}
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