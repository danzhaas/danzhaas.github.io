// INITIALIZE PARALLAX
document.addEventListener('DOMContentLoaded', function() {
    const vn = document.querySelectorAll('.viewport');
    const va = Array.from(vn);
    for (i=0; i<va.length; i++) {
        console.log(i)
        initializeParallax(va[i]);
    }
});

// SCROLLSPY
$('#inner-body').scrollspy({ target: '#navbar-collapse' })

// CAROUSEL INDICATOR TAG
//purpose: add carousel custom indicators
//activate appropriate indicators for viewport size depending on media breakpoint
var smallViewportStatus = window.matchMedia("(max-width: 768px)")
function tagIndicators(smallViewportStatus) {
    if (smallViewportStatus.matches) {
        //screen is xs or sm.  query the .ci-sm elements
        customCarouselIndicators = $('.ci-xs-sm')
    } else {
        //screen is md or larger.  tag the #carousel-indicators group
        customCarouselIndicators = $('.ci')
    }
}
// console.log(customCarouselIndicators);
$('#carouselControls').on('slide.bs.carousel', function (e) {
    customCarouselIndicators[e.from].classList.remove("active");
    customCarouselIndicators[e.to].classList.add("active");
})
tagIndicators(smallViewportStatus);   // Call listener function at run time
smallViewportStatus.addListener(tagIndicators) // Attach listener function on state changes


//RESUME MODAL
document.getElementById("resume-thumbnail").addEventListener("click", () => $('#resumeModal').modal('toggle'));


//randomly-chosen z-adjectives
// const zArray = ["zaftig", "zairean", "zairese", "zambian", "zany", "zapotec", "zealous", "zenithal", "zero", "zeroth", "zestful", "zesty", "zigzag", "zillion", "zimbabwean", "zionist", "zippy", "zodiacal", "zoftig", "zoic", "zolaesque", "zonal", "zonary", "zoological", "zoonotic", "zoophagous", "zoroastrian", "zygodactyl", "zygomatic", "zygomorphic", "zygomorphous", "zygotic", "zymoid", "zymolytic", "zymotic"];
// const randNum = Math.floor(Math.random() * zArray.length);
// const randZWord = zArray[randNum];
// document.querySelector("#zStandsFor").innerHTML = `The Z stands for ${randZWord}!`;