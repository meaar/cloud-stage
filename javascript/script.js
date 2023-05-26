const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.oncontextmenu = rightClick;

function rightClick(e) {
    e.preventDefault();
    let menu = document.getElementById("context");
    if (menu.style.display == "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
} 