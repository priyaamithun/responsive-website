
function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "button-menu") {
        x.className += "responsive";
    } else {
        x.className = "button-menu";
    }
}
