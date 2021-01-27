//  ██████╗ ██╗      ██████╗ ██████╗  █████╗ ██╗     
// ██╔════╝ ██║     ██╔═══██╗██╔══██╗██╔══██╗██║     
// ██║  ███╗██║     ██║   ██║██████╔╝███████║██║     
// ██║   ██║██║     ██║   ██║██╔══██╗██╔══██║██║     
// ╚██████╔╝███████╗╚██████╔╝██████╔╝██║  ██║███████╗
//  ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝


// SCROLLSPY
$('body').scrollspy({ target: '#navbar-collapse' });


// ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
// ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
// ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
// ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
// ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
// ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝


//CARD-FLIP
// function flip(cardId) {
//     const thisCard = document.querySelector(cardId);
//     var face;
//     thisCard.classList.contains("flipped") ? face = "1" : face = "0";
//     const reverse = 1 - face;
//     thisCard.children[reverse].classList.toggle("d-none");
//     thisCard.classList.toggle('flipped');
//     setTimeout(function () { thisCard.children[face].classList.toggle("d-none") }, 500);    // To address problem of anchors on the reverse side being activated on click from the front, the side of the card facing backwards gets display = none 
// }


// GENERATE CARDS
var cardTemplate, iconsTemplate;

function populateTemplate(project) {

    cardTemplate = `
        <div id="${project.id}-card" class="project card mb-3">
            <div class="row g-0">

                <div class="col-md-8">
                    <div class="front zoom">
                        <a href='${project.button1.href}' target='_blank'>
                            <img class="card-img d-md-none" src="${project.thumbnailSrc}"
                                alt="${project.altText}" />
                            <img class="d-none d-md-block card-img rounded-0" src="${project.imageSrc}"
                                alt="${project.altText}" />
                        </a>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card-body">
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
    cardContainer.classList="card-container col-12";  
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


//  ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
// ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
// ██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
// ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
// ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   


function sendForm (formSize) {
    const formValues = {
        "name":document.querySelector('#name-'+formSize).value,
        "email":document.querySelector('#email-'+formSize).value,
        "formMessage":document.querySelector('#formMessage-'+formSize).value
    };
    $.ajax({
        url:'https://danzhaas-github-io-back-end.herokuapp.com/api/messages/',
        type:"POST",
        data:formValues,
        success: function() {
            alert("Message received, thank you. I will get back to you within 3 business days.")
        },
        error: function() {
            alert("Server error.  Try again later or email me directly at danzhaas@gmail.com .")
        }
    });
};

$('#form-large').submit(function(e) {
    e.preventDefault(); // prevents form from submitting
    sendForm("l");
})


$('#form-small').submit(function(e) {
    e.preventDefault(); // prevents form from submitting
    sendForm("s");
})
