
var popupsToggle = document.querySelectorAll('.open-popup'), popupClose = document.querySelectorAll('.close');

popupsToggle.forEach(function(item){
    item.addEventListener("click", function () {
        var popupName = item.getAttribute('data-popup')
        document.getElementById(popupName).style.display = "block"
        document.getElementById('blur1').style.filter = "blur(8px)"
        document.getElementById('blur2').style.filter = "blur(8px)"
        document.getElementById('blur3').style.filter = "blur(8px)"
    })
})

popupClose.forEach(function(item){
    item.addEventListener("click", function () {
        var popup = item.closest('.modal')
        popup.style.display = "none"
        document.getElementById('blur1').style.filter = "blur(0px)"
        document.getElementById('blur2').style.filter = "blur(0px)"
        document.getElementById('blur3').style.filter = "blur(0px)"
    })
})

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.getElementById('blur1').style.filter = "blur(0px)"
        document.getElementById('blur2').style.filter = "blur(0px)"
        document.getElementById('blur3').style.filter = "blur(0px)"
    }
}

window.addEventListener('touchstart', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.getElementById('blur1').style.filter = "blur(0px)"
        document.getElementById('blur2').style.filter = "blur(0px)"
        document.getElementById('blur3').style.filter = "blur(0px)"
    }
})



