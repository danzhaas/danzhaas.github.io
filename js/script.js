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
}
squareCard('.card-container');


//GENERATE BADGES
function generateBadges(listString, badgeColor, targetSelector) {
    const badgeArray = listString.split(", ").map(text => "<span class='badge badge-"+badgeColor+" mr-1 zoom'>" +text + "</span>");
    $(targetSelector).append(badgeArray)
}

generateBadges(devBadges, "primary", $(".dev-badges"));
generateBadges(designBadges, "info", $(".design-badges"));
generateBadges(databaseBadges, "success", $(".database-badges"));
generateBadges(languagesBadges, "secondary", $(".languages-badges"));
generateBadges(osBadges, "dark", $(".os-badges"))


//OPEN DISTRACTION TIMER WITH APPROPRIATE SIZE
// Code from https://accessify.com/tools-and-wizards/accessibility-tools/pop-up-window-generator/default.php
function addEvent(elm, evType, fn, useCapture) {
    if(elm.addEventListener) {
        elm.addEventListener(evType, fn, useCapture);
        return true;
    } else if (elm.attachEvent) {
        var r = elm.attachEvent('on' + evType, fn);
        return r;
    } else {
        elm['on' + evType] = fn;
    }
}
var newWindow = null;
function closeWin(){
    if (newWindow != null){
        if(!newWindow.closed)
            newWindow.close();
    }
}
function popUpWin(url, type, strWidth, strHeight){
    closeWin();
    type = type.toLowerCase();
    if (type == "fullscreen"){
        strWidth = screen.availWidth;
        strHeight = screen.availHeight;
    }
    var tools="";
    if (type == "standard") tools = "resizable,toolbar=yes,location=yes,scrollbars=yes,menubar=yes,width="+strWidth+",height="+strHeight+",top=0,left=0";
    if (type == "console" || type == "fullscreen") tools = "resizable,toolbar=no,location=no,scrollbars=no,width="+strWidth+",height="+strHeight+",left=0,top=0";
    newWindow = window.open(url, "newWin", tools);
    newWindow.focus();
}
function doPopUp(e)
{
//set defaults - if nothing in rel attrib, these will be used
var t = "standard";
var w = "780";
var h = "580";
//look for parameters
attribs = this.rel.split(" ");
if (attribs[1]!=null) {t = attribs[1];}
if (attribs[2]!=null) {w = attribs[2];}
if (attribs[3]!=null) {h = attribs[3];}
//call the popup script
popUpWin(this.href,t,w,h);
//cancel the default link action if pop-up activated
if (window.event) 
    {
    window.event.returnValue = false;
    window.event.cancelBubble = true;
    } 
else if (e) 
    {
    e.stopPropagation();
    e.preventDefault();
    }
}
function findPopUps()
{
var popups = document.getElementsByTagName("a");
for (i=0;i<popups.length;i++)
    {
    if (popups[i].rel.indexOf("popup")!=-1)
        {
        // attach popup behaviour
        popups[i].onclick = doPopUp;
        // add popup indicator
        if (popups[i].rel.indexOf("noicon")==-1)
            {
            popups[i].style.backgroundImage = "url(pop-up.gif)";
            popups[i].style.backgroundPosition = "0 center";
            popups[i].style.backgroundRepeat = "no-repeat";
            popups[i].style.paddingLeft = "15px";
            }
        // add info to title attribute to alert fact that it's a pop-up window
        popups[i].title = popups[i].title + " [Opens in pop-up window]";
        }
    }
}
addEvent(window, "load", findPopUps, false);


//TOOLTIPS
// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// });