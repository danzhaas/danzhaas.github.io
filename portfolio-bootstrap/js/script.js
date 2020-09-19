// SCROLLSPY
$('body').scrollspy({ target: '#navbar-collapse' })

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


//CARD-FLIP
function flip(cardId) {
    $(cardId).toggleClass('flipped');
}

//RESUME MODAL
document.getElementById("resume-thumbnail").addEventListener("click", () => $('#resumeModal').modal('toggle'));