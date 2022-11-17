var popup
var el1


if (localStorage.getItem("blur")) {
    popup = localStorage.getItem("popup")

    el1 =document.getElementById(popup)
    if (el1 != null){
        localStorage.removeItem("blur")
        document.getElementById(popup).style.display = "block"
        const blur_items = document.querySelectorAll('.blur')
        blur_items.forEach(function (blur_item){
            blur_item.style.filter = "blur(8px)"
        })

    }
}