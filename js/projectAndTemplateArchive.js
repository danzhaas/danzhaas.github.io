// THESE ARCHIVED ON 1/22/2021

//Dev Connector
const dev = {
    name:"Dev Connector",
    id:"dev",
    imageSrc:"images/dev-tile-500.jpg",
    devIcons:[
        "Node.js","Express","MongoDB","React", "React Router","Javascript"
    ],
    desc:'Social network full stack web application.  Features authentication, use of async/await, and Redux.',
    button1: {
        text:"Live Version",
        href:"https://dev-connector-dzh.herokuapp.com/"
    },
    button2:{
        text:"See My Code",
        href:"http://github.com/danzhaas/dev-connector"
    }
}


//Barkr
const barkr = {
    name:"Barkr",
    id:"barkr",
    imageSrc:"images/barkr-tile-500.jpg",
    devIcons:[
        "React","React Router","Reactstrap","Javascript","Bootstrap","HTML","CSS"
    ],
    desc:'My "pet project": a companion to your companion. Share your best friend with the world on this dog social network.',
    button1: {
        text:"Live Version",
        href:"https://danzhaas.github.io/barkr-react/"
    },
    button2:{
        text:"See Code",
        href:"http://github.com/danzhaas/barkr-react"
    }
}


//distractionTimer
const distractionTimer = {
    name:"Distraction Timer",
    id:"timer",
    imageSrc:"images/timer-tile-500.jpg",
    devIcons:[
        "Gatsby","React","React Google Charts","Javascript","Bootstrap","HTML","CSS","Sass"
    ],
    desc:'A productivity tool to measure and chart how much time you are distracted during a task.',
    button1: {
        text:"Live Version",
        href:"https://danzhaas.github.io/Focus-Suite",
        attribute: 'rel="popup console 600 375"'
    },
    button2:{
        text:"See Code",
        href:"https://github.com/danzhaas/danzhaas.github.io/tree/source/project-adhd/distraction-timer"
    }
}


//Killifish Classic
const killi = {
    name:"Killifish Classic",
    id:"killi",
    imageSrc:"images/killi-tile-500.jpg",
    devIcons:[
        "jQuery","Javascript","HTML","CSS","less"
    ],
    desc:'An event page for an aquarium convention. The design incorporates the palette of beautifully bright colors of these fish.',
    button1: {
        text:"Live Version",
        href:"https://danzhaas.github.io/killifish-classic/"
    },
    button2:{
        text:"See Code",
        href:"http://github.com/danzhaas/danzhaas.github.io/tree/master/killifish-classic"
    }
}


//Lorem Ipsum Cancer Studies
const LICS = {
    name:"Lorem Ipsum Cancer Studies",
    id:"LICS",
    imageSrc:"images/LICS-tile-500.jpg",
    devIcons:[
        "jQuery","Bootstrap","HTML","CSS"
    ],
    desc:'A university medical research study site. UI designed around user stories for participants, scientists, and sponsors.',
    button1: {
        text:"Live Version",
        href:"https://danzhaas.github.io/lorem-ipsum-cancer-studies/index.html"
    },
    button2:{
        text:"See Code",
        href:"https://github.com/danzhaas/danzhaas.github.io/tree/master/lorem-ipsum-cancer-studies"
    }
}


// My Portfolio
const portfolio = {
    name:"My Portfolio",
    id:"portfolio",
    imageSrc:"images/portfolio-tile-500.jpg",
    devIcons:[
        "Node.js","Express","MongoDB","jQuery","Javascript","Bootstrap","Sass","CSS","HTML"
    ],
    desc:"You're looking at it.  Visit my Trello board to see how I used the natural planning model and a Kanban board to create this project.",
    button1: {
        text:"Trello Board",
        href:"https://trello.com/b/pXxa9X5h/danzhaasgithubio"
    },
    button2:{
        text:"See Code",
        href:"https://github.com/danzhaas/danzhaas.github.io/tree/master/index.html"
    }
}


// List of Projects
const myProjects = [dev, barkr, distractionTimer, killi, LICS, portfolio];


// CARD FLIP TEMPLATE
function populateTemplate(project) {
var archivedCardTemplate = `
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
