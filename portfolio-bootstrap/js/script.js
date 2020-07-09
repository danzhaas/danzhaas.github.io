//carousel custom indicators
const customCarsouselIndicators = $('.carousel-indicator');
console.log(customCarsouselIndicators);
$('#carouselControls').on('slide.bs.carousel', function (e) {
    customCarsouselIndicators[e.from].classList.remove("active");
    customCarsouselIndicators[e.to].classList.add("active");
})

//resume modal 
document.getElementById("resume-thumbnail").addEventListener("click", () => $('#resumeModal').modal('toggle'));

//randomly-chosen z-adjectives
// const zArray = ["zaftig", "zairean", "zairese", "zambian", "zany", "zapotec", "zealous", "zenithal", "zero", "zeroth", "zestful", "zesty", "zigzag", "zillion", "zimbabwean", "zionist", "zippy", "zodiacal", "zoftig", "zoic", "zolaesque", "zonal", "zonary", "zoological", "zoonotic", "zoophagous", "zoroastrian", "zygodactyl", "zygomatic", "zygomorphic", "zygomorphous", "zygotic", "zymoid", "zymolytic", "zymotic"];
// const randNum = Math.floor(Math.random() * zArray.length);
// const randZWord = zArray[randNum];
// document.querySelector("#zStandsFor").innerHTML = `The Z stands for ${randZWord}!`;