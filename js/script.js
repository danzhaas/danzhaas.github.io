// ███╗   ███╗██╗   ██╗    ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗███████╗
// ████╗ ████║╚██╗ ██╔╝    ██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝██╔════╝
// ██╔████╔██║ ╚████╔╝     ███████╗██║     ██████╔╝██║██████╔╝   ██║   ███████╗
// ██║╚██╔╝██║  ╚██╔╝      ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   ╚════██║
// ██║ ╚═╝ ██║   ██║       ███████║╚██████╗██║  ██║██║██║        ██║   ███████║
// ╚═╝     ╚═╝   ╚═╝       ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚══════╝

// SCROLLSPY
$('body').scrollspy({ target: '#navbar-collapse' })

//CARD-FLIP
function flip(cardId) {
    // Reverse side of the card should have display = none once it is underneath the other side and is not seen anyway so anchors cannot be clicked from reverse.
    const thisCard = document.querySelector(cardId);
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


// //CARD DIMENSIONS
// function squareCard(cardId) {
//     var cardWidth = $(cardId).width();
//     $(cardId).css({
//         'height': cardWidth + 'px'
//     });
//     $(cardId + ' > div').css({
//         'height': cardWidth + 'px',
//         'width': cardWidth + 'px'
//     });
// }
// squareCard('.card-container');


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


// CARD TEMPLATE

var cardTemplate;

function makeTemplate(project) {
    cardTemplate = `
    <div id="${project.id}-card" class="card project-card border-0 mx-auto" onclick="flip('#${project.id}-card')"
        tabindex=0>
        <div class="front zoom">
            <img class="card-img" src="${project.imageSrc}"
                alt="${project.altText}" />
        </div>
        <div
            class="back zoom px-2 py-4 p-md-3 d-flex flex-column justify-content-between d-none zoom">
            <h2 class="card-title m-0">${project.name}</h2>
            <div id="${project.id}DevIcons">
                <img src="images/svg/react.svg"></img>
                <img src="images/svg/js.svg"></img>
                <img src="images/svg/bootstrap.svg"></img>
                <img src="images/svg/html.svg"></img>
                <img src="images/svg/css.svg"></img>
                <span class="badge badge-danger">React Router</span>
                <span class="badge badge-info">Reactstrap</span>
            </div>
            <p class="card-text m-0">My "pet project": a companion to your companion. Share your
                best friend with the world on this dog social network.</p>
            <div class="d-flex flex-row justify-content-around">
                <a role="button" class="btn btn-sm" href="http://github.com/danzhaas/barkr-react"
                    target="_blank">
                    View Code at Github
                </a>
                <a role="button" class="btn btn-sm" href="https://danzhaas.github.io/barkr-react/"
                    target="_blank">
                    Live Version
                </a>
            </div>
        </div>
    </div>
    `
}

// function generateDevIcons(array, targetSelector) {
//     array.map(icon =>          //This is where it gets fucked
//     $(targetSelector).append(badgeArray)
// }

myProjects.map(project => {
    makeTemplate(project);
    var cardContainer = document.createElement("div");
    cardContainer.classList="card-container col-12 col-md-6 col-xl-4";
    cardContainer.innerHTML = cardTemplate;
    document.getElementById("cards").appendChild(cardContainer);
    // generateDevIcons(project.devIcons, `${project.id}DevIcons`);
})


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


// TOOLTIPS
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});



//  ██████╗ ████████╗██╗  ██╗███████╗██████╗ ███████╗    ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗███████╗
// ██╔═══██╗╚══██╔══╝██║  ██║██╔════╝██╔══██╗██╔════╝    ██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝██╔════╝
// ██║   ██║   ██║   ███████║█████╗  ██████╔╝███████╗    ███████╗██║     ██████╔╝██║██████╔╝   ██║   ███████╗
// ██║   ██║   ██║   ██╔══██║██╔══╝  ██╔══██╗╚════██║    ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   ╚════██║
// ╚██████╔╝   ██║   ██║  ██║███████╗██║  ██║███████║    ███████║╚██████╗██║  ██║██║██║        ██║   ███████║
//  ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝    ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚══════╝

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