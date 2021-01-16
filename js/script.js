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
                <img class="card-img rounded-0" src="${project.imageSrc}"
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
    cardContainer.classList="card-container col-12 col-md-6 col-xl-4 px-lg-0";  
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


//  █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗
// ██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝
// ███████║██████╔╝██║   ██║██║   ██║   ██║   
// ██╔══██║██╔══██╗██║   ██║██║   ██║   ██║   
// ██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║   
// ╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   


// ACCORDION
$('.collapse').collapse();


//RESUME MODAL

document.getElementById("resume-icon").addEventListener("click", () => $('#resumeModal').modal('toggle'));


//GENERATE BADGES

function generateBadges(listString, badgeColor, nothing) {
    const badgeArray = listString.split(", ").map(text => "<div class='badge-container zoom'><span class='badge badge-"+badgeColor+" mr-1'>" +text + "</span></div>");
    switch (listString) {
        case devBadges:
            targetSelector = ".dev-badges";
            break;
        case designBadges:
            targetSelector = ".design-badges";
            break;
        case databaseBadges:
            targetSelector = ".database-badges";
            break;
        case languagesBadges:
            targetSelector = ".languages-badges";
            break;
        case osBadges:
            targetSelector = ".os-badges";
    }
    $(targetSelector).append(badgeArray)
}

generateBadges(devBadges, "primary");
generateBadges(designBadges, "info");
generateBadges(databaseBadges, "success");
generateBadges(languagesBadges, "secondary");
generateBadges(osBadges, "dark")

document.querySelectorAll(".badge").forEach(badge => badge.addEventListener("mouseover", (event) => {
    badge.classList.toggle("barrel-roll");
}))


// TESTING msg
// input: 
const testMessage = {
    "name":"Dan",
    "email":"danzhaas@gmail.com",
    "formMessage":"Hi there!"
};

//to connect the two, 
//send testMessage as body of HTTP req on 
$('#submit-btn').addEventListener('click', async () => {
    try {
        const res = await 
        
        alert(res.msg)
    }
    catch {
        alert("Uh oh")
    }
})

document.addEventListener('submit', e => {

    // Store reference to form to make later code easier to read
    const form = e.target;
    
    // fetch(form.action, {
    //   method: form.method,
    //   body: new FormData(form)
    // })

    try {

    }
    catch {
        alert("Uh oh")
    }
    // Prevent the default form submit
    e.preventDefault();

});
