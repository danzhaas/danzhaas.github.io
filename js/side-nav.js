let ii=localStorage.getItem("ii");
if (ii!=="1") {
    ii=0;
} 
if (ii=="1") {
    closeNav();
}
    
function openCloseToggle() {
    if (ii==0) {
        closeNav();        
    } else {
        openNav();        
    };
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("ii", ii);
    }
}

function openNav() {
    document.getElementById
    ("mySidenav").style.left = "0";
    ii=0;
}

function closeNav() {
    document.getElementById
    ("mySidenav").style.left = "-15vw";
    ii=1;
}