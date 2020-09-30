// SCROLLSPY
$('body').scrollspy({ target: '#navbar-collapse' })

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
squareCard('.card-container');
// squareCard('#timer-card');


//TOOLTIPS
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// $('#resume-thumbnail').tooltip('show');


//BADGES
//1. Dev badges
// const devBadges = "MongoDB, Express, React, Node.js, Gatsby, Redux, JQuery, Javascript, Bootstrap, LESS, SASS, CSS, HTML, NPM, React Native, Github, Browser Developer Tools";

// function generateBadges(listString, targetId) = {
//     const array1 = listString.split(", ");
//     const array2 = array1.map(text => <span>{text}</span>);
//     $(targetId).append(array2)
// }
