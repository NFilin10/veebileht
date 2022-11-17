

var el

function popup(element, html, popup) {
    el = document.getElementById(element)
    if (el!=null){
        el.onclick = function () {
            localStorage.setItem("blur", "yes")
            localStorage.setItem("popup", popup)
            window.location.href = './templates/' + html;
        }
    }
}