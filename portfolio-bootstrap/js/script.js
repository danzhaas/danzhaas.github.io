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
document.getElementById("resume-icon").addEventListener("click", () => $('#resumeModal').modal('toggle'));

//CARD DIMENSIONS
function squareCard(cardId) {
    var cardWidth = $(cardId).width();
    $(cardId).css({
        'height': cardWidth + 'px'
    });
    $(cardId + ' > div').css({
        'height': cardWidth + 'px',
        'width': cardWidth + 'px'
    });
    // $(cardId + ' > .front').css({
    //     'height': cardWidth + 'px',
    //     'width': cardWidth + 'px'
    // });
    // $(cardId + ' > .back').css({
    //     'height': cardWidth + 'px',
    //     'width': cardWidth + 'px'
    // });
    // console.log( document.getElementById("LICS2-card") )
    // console.log( $(cardId + ' > .front').css )
    // console.log( $(cardId + ' > .back').css)
}
squareCard('.card-container');
// $(window).resize(squareCard('.card-container'))

//TOOLTIPS
// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// });

function generateBadges(listString, badgeColor, targetSelector) {
    const badgeArray = listString.split(", ").map(text => "<span class='badge badge-"+badgeColor+" mr-1'>" +text + "</span>");
    $(targetSelector).append(badgeArray)
}

// generateBadges(devBadges, "primary", $("#dev-badges"));
// generateBadges(designBadges, "info", $("#dev-badges"));
// generateBadges(databaseBadges, "success", $("#dev-badges"));
// generateBadges(languagesBadges, "secondary", $("#dev-badges"));
// generateBadges(osBadges, "dark", $("#dev-badges"))
generateBadges(devBadges, "primary", $(".dev-badges"));
generateBadges(designBadges, "info", $(".design-badges"));
generateBadges(databaseBadges, "success", $(".database-badges"));
generateBadges(languagesBadges, "secondary", $(".languages-badges"));
generateBadges(osBadges, "dark", $(".os-badges"))
