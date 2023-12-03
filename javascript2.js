/* side menu pop up */
function SideMenu() {
    /* to select objects with hamburger as their classes */
    const hamburger = document.querySelector(".hamburger") 
    hamburger.onclick = function() {
        /* select objects with nav-bar as their class */
        navBar = document.querySelector(".nav-bar"); 
        /* Make the dropdown effect when the user clicks on the hamburger bar by selecting the active class */
        navBar.classList.toggle("active") 
    };
}
/* music page */
function musicpage(){
    /* anything with a class of fade-in will be selected */
    const faders = document.querySelectorAll('.fade-in') 
    /* to slow down the fade in */
    const sliders = document.querySelectorAll(".slide-in")
    const appearOptions = {
        threshold: 0,
        /* To fade in the columns when they are 100px from the bottom of the page */
        rootMargin: "0px 0px -250px 0px" 
    };
    /* IntersectionObserver to handle the fading in of elements */
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            }else {
                /* add appear class to the element */
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);
    // Observe elements with the class fade-in
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    // Observe elements with the class slide-in 
    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });
};
//call function SideMenu() and musicpage()
SideMenu()
musicpage()
/* code for music play button */
function playorpause_audio() {
    var audio = document.getElementById('audio');
    // To check if the audio is paused
    if (audio.paused) {
        audio.play();
    } else if (audio.play) {
        audio.pause();
    }
}
// select the element with the class neon button
var button = document.querySelector('.neon-button');
//add EventListener to call the funtion when a user click on the button
if (button) {
    button.addEventListener('click', playorpause_audio());
} else {
    console.error("Button not found in the document.");
}
