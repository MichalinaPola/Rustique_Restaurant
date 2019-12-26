// for making the header menu interactive
var $navLinks = document.querySelectorAll(".has-hover-menu");

function displayHoverMenu(event) {
    var $anchor = event.target;
    var $hoverMenu = $anchor.parentNode.querySelector(".hover-menu");
    if ($hoverMenu !== null) {
        $hoverMenu.classList.add("is-visible");
    }
}

function hideHoverMenu(event) {
    console.log(event);
    var $anchor = event.target;
    var $hoverMenu = $anchor.querySelector(".hover-menu");
    if ($hoverMenu !== null) {
        $hoverMenu.classList.remove("is-visible");
    }
}

for (var i = 0; i < $navLinks.length; i++) {
    var $anchor = $navLinks[i];
    $anchor.addEventListener("mouseover", displayHoverMenu);
}

for (var i = 0; i < $navLinks.length; i++) {
    var $anchor = $navLinks[i].parentNode;
    $anchor.addEventListener("mouseleave", hideHoverMenu);
}