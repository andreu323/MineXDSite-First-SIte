var image_data = {
    "0":["game3.png","Mine XD Place </br> minecraft server"],
}
var selected = "0"


window.addEventListener("load", function(event) {
    var child = document.getElementsByClassName('container_scroll')[0];
    var backgraund = document.getElementsByClassName('header')[0];
    var title = backgraund.getElementsByClassName("backgraundheader")[0].getElementsByClassName("game_title")[0];
    for (var i = 0; i < Object.keys(image_data).length; i++) {
        var image = document.createElement("div");
        image.classList.add('i');
        child.appendChild(image);
        var im = image;
        im.style.backgroundImage = "url("+image_data[i][0]+")"
        if(i == selected){
            im.className = "i_selected"
            
            backgraund.style.backgroundImage = "url("+image_data[i][0]+")"
            title.innerHTML = image_data[i][1]
        }
        im.addEventListener("click",function(event){
            var im = event.target
            var child = document.getElementsByClassName('container_scroll')[0].children;
            var index = Array.prototype.indexOf.call(child, im);
            console.log(backgraund);
            child[selected].className = "i"
            selected = index
            backgraund.style.backgroundImage = "url("+image_data[index][0]+")"
            im.className = "i_selected"
            title.innerHTML = image_data[index][1]
        })
     }
     [].slice.apply(child).filter(is_gif_image).map(freeze_gif);
});
$(document).ready(function() { 
    var $winwidth = $(window).width();
    $("header").attr({
        width: $winwidth
    });
    $(window).bind("resize", function(){ 
        var $winwidth = $(window).width();
        $("header").attr({
            width: $winwidth
        });
     });
}); 