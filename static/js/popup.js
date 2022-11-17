
var popupsToggle = document.querySelectorAll('.open-popup'), popupClose = document.querySelectorAll('.close');

popupsToggle.forEach(function(item){
    item.addEventListener("click", function () {
        var popupName = item.getAttribute('data-popup')
        document.getElementById(popupName).style.display = "block"
        const blur_items = document.querySelectorAll('.blur')
        blur_items.forEach(function (blur_item){
            blur_item.style.filter = "blur(8px)"
        })




    })
})

popupClose.forEach(function(item){
    item.addEventListener("click", function () {
        var popup = item.closest('.modal')
        popup.style.display = "none"
        const blur_items = document.querySelectorAll('.blur')
        blur_items.forEach(function (blur_item){
            blur_item.style.filter = "blur(0px)"
        })
    })
})

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        const blur_items = document.querySelectorAll('.blur')
        blur_items.forEach(function (blur_item){
            blur_item.style.filter = "blur(0px)"
        })
    }
}

window.addEventListener('touchstart', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        const blur_items = document.querySelectorAll('.blur')
        blur_items.forEach(function (blur_item){
            blur_item.style.filter = "blur(0px)"
        })
    }
})



