



var el = document.getElementById("fig1")
if (el!=null){
    el.onclick = function () {
        window.location.href = 'themes.html';
    }
}
else {
    var el1 =document.getElementById("popup6")
    if (el1 != null){
        document.getElementById("popup6").style.display = "block"
        document.getElementById('blur1').style.filter = "blur(8px)"
        document.getElementById('blur2').style.filter = "blur(8px)"
        document.getElementById('blur3').style.filter = "blur(8px)"

    }
}

// document.getElementById("fig2").onclick = function(){
//     // navigate to new page
//     window.location.href = 'themes.html';
// }
//
// document.getElementById("fig3").onclick = function(){
//     // navigate to new page
//     window.location.href = 'themes.html';
// }
//
// document.getElementById("fig4").onclick = function(){
//     // navigate to new page
//     window.location.href = 'themes.html';
// }
//
// document.getElementById("fig5").onclick = function(){
//     // navigate to new page
//     window.location.href = 'themes.html';
//}