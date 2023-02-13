// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navigation  
var navigation = document.getElementById("navigation");

// Get the offset position of the navigation   
var sticky = navigation.offsetTop;

// Add the sticky class to the navigation   when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navigation.classList.add("sticky")
    } else {
        navigation.classList.remove("sticky");
    }
}