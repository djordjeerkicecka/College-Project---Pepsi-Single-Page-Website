// Navigation Toggle Functions Start 

var navigationWrapper = $(".navbar")[0];

// Toggle navigation 
function ExpandNavbar() {
    if(navigationWrapper.className.indexOf("navbar-expand") == -1 ) {
        navigationWrapper.className += " navbar-expand";
    }else {
        navigationWrapper.className = navigationWrapper.className.replace(" navbar-expand", "");
    }
}

// Close navigation when a link is clicked and devise when screen is under 576 px width
function CloseNavbar() { 
    if(navigationWrapper.className.indexOf("navbar-expand") != -1  && isMobile) {
        navigationWrapper.className = navigationWrapper.className.replace(" navbar-expand", "");
    }
}

// Navigation Toggle Functions End 
var cardHeads = $(".card-head");

function ExpandCard(CardNumber) {
    var cardParent = $(cardHeads[CardNumber]).parent();

    //console.log(cardParent[0]);

    if(cardParent[0].className.indexOf("card-expand") == -1) {
        cardParent[0].className += " card-expand";
    }else {
        cardParent[0].className = cardParent[0].className.replace(" card-expand", "");
    }
}
