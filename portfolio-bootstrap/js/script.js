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
    //BUG:
    //It has been noted that buttons on left side of the back cannot be clicked because the front is more superficial 
    //according to the DOM even though it is rendered deep to the back.  
    //SOLUTION:
    //To fix this, the reverse side of the card should have display = none once it is underneath the other side and is not seen anyway.  
    const thisCard = document.querySelector(cardId);
    //identify current face and reverse sides as front or back class.  to align with children nodes, front is 0, back is 1
    var face;
    thisCard.classList.contains("flipped") ? face = "1" : face = "0";
    const reverse = 1 - face;
    // //toggle display on for reverse side
    thisCard.children[reverse].classList.toggle("d-none");
    // //flip card
    thisCard.classList.toggle('flipped');
    // //wait 0.5 seconds for animation to complete before toggling new reverse side display off 
    setTimeout(function () { thisCard.children[face].classList.toggle("d-none") }, 500);
}


//RESUME MODAL
document.getElementById("resume-thumbnail").addEventListener("click", () => $('#resumeModal').modal('toggle'));


//CARD DIMENSIONS
function squareCard(cardId) {
    var cardWidth = $(cardId).width();
    $(cardId).css({
        'height': cardWidth + 'px'
    });
    $(cardId + ' > .front').css({
        'height': cardWidth + 'px',
        'width': cardWidth + 'px'
    });
    $(cardId + ' > .back').css({
        'height': cardWidth + 'px',
        'width': cardWidth + 'px'
    });
}

squareCard('.card-container')