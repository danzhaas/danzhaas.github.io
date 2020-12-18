//  ██████╗ ██╗      ██████╗ ██████╗  █████╗ ██╗     
// ██╔════╝ ██║     ██╔═══██╗██╔══██╗██╔══██╗██║     
// ██║  ███╗██║     ██║   ██║██████╔╝███████║██║     
// ██║   ██║██║     ██║   ██║██╔══██╗██╔══██║██║     
// ╚██████╔╝███████╗╚██████╔╝██████╔╝██║  ██║███████╗
//  ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝


// SCROLLSPY
$('body').scrollspy({ target: '#navbar-collapse' })


// ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
// ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
// ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
// ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
// ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
// ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝


//CARD-FLIP
function flip(cardId) {
    const thisCard = document.querySelector(cardId);
    var face;
    thisCard.classList.contains("flipped") ? face = "1" : face = "0";
    const reverse = 1 - face;
    thisCard.children[reverse].classList.toggle("d-none");
    thisCard.classList.toggle('flipped');
    setTimeout(function () { thisCard.children[face].classList.toggle("d-none") }, 500);    // To address problem of anchors on the reverse side being activated on click from the front, the side of the card facing backwards gets display = none 
}


// GENERATE CARDS
var cardTemplate, iconsTemplate;

function populateTemplate(project) {
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
                <div id="${project.id}-icons">
                </div>
                <p class="card-text m-0">${project.desc}</p>
                <div class="d-flex flex-row justify-content-around">
                    <a role="button" class="btn btn-sm" href="${project.button1.href}" target="_blank" ${project.button1.attribute} >
                        ${project.button1.text}
                    </a>
                    <a role="button" class="btn btn-sm" href="${project.button2.href}" target="_blank">
                        ${project.button2.text}
                    </a>
                </div>
            </div>
        </div>
    `
}

function generateIcons(icons) {
    iconsTemplate="";
    icons.forEach(function(iconName) {
        var iconRef=allDevIcons.filter((icon) => icon.name===iconName);
        if (iconRef.length === 1) {
            iconsTemplate=iconsTemplate.concat(`<img class="dev-icon" src="${iconRef[0].svg}" data-toggle="tooltip" title="${iconRef[0].name}"></img>`)
        } else {
            iconsTemplate=iconsTemplate.concat(`<span class="dev-icon badge badge-info">${iconName}</span>`)
        }
    });
}

function buildCard(project) {
    var cardContainer = document.createElement("div");  
    cardContainer.classList="card-container col-12 col-md-6 col-xl-4";  
    cardContainer.innerHTML = cardTemplate;     
    document.getElementById("cards").appendChild(cardContainer);  
    var iconTarget = $(`#${project.id}-icons`); 
    iconTarget[0].innerHTML = iconsTemplate;  
}

function generateCard(project) {
    populateTemplate(project);
    generateIcons(project.devIcons);
    buildCard(project);
}

myProjects.forEach(generateCard);


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
var w = "600";
var h = "375";
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


//  █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗
// ██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝
// ███████║██████╔╝██║   ██║██║   ██║   ██║   
// ██╔══██║██╔══██╗██║   ██║██║   ██║   ██║   
// ██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║   
// ╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   


//RESUME MODAL

document.getElementById("resume-icon").addEventListener("click", () => $('#resumeModal').modal('toggle'));


//GENERATE BADGES

function generateBadges(listString, badgeColor, targetSelector) {
    const badgeArray = listString.split(", ").map(text => "<div class='badge-container zoom'><span class='badge badge-"+badgeColor+" mr-1'>" +text + "</span></div>");
    $(targetSelector).append(badgeArray)
}

generateBadges(devBadges, "primary", $(".dev-badges"));
generateBadges(designBadges, "info", $(".design-badges"));
generateBadges(databaseBadges, "success", $(".database-badges"));
generateBadges(languagesBadges, "secondary", $(".languages-badges"));
generateBadges(osBadges, "dark", $(".os-badges"))

var clickcounter = 0;
document.querySelectorAll(".badge").forEach(badge => badge.addEventListener("click", (event) => {
    badge.classList.toggle("barrel-roll");
    clickcounter++;
    // console.log(event);
    // if (clickcounter>3) {
    //     const explosionGif = document.createElement('img');
    //     explosionGif.setAttribute('id','explosion');
    //     setTimeout(function () { explosionGif.setAttribute('style','display:none') }, 500);
    //     badge.parentElement.replaceChild(explosionGif, badge);
    //     setTimeout(function () { alert("What have you done?") }, 1500)
    // } 
}))