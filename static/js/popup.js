
var popupsToggle = document.querySelectorAll('.open-popup'), popupClose = document.querySelectorAll('.close');

popupsToggle.forEach(function(item){
    item.addEventListener("click", function () {
        var popupName = item.getAttribute('data-popup')
        document.getElementById(popupName).style.display = "block"
    })
})

popupClose.forEach(function(item){
    item.addEventListener("click", function () {
        var popup = item.closest('.modal')
        popup.style.display = "none"
    })
})

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

window.addEventListener('touchstart', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
})


