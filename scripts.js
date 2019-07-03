window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    var bg = document.getElementById("pc-nav");
    var link = document.getElementsByClassName("pc-link");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        bg.style.background = "rgb(51, 51, 51)";
        for(var i = 0; i < link.length; i++){
            link[i].style.color = "rgb(255, 255, 255)";
        }
    }

    else {
        bg.style.background = "rgba(0, 0, 0, 0)";
        for(var i = 0; i < link.length; i++){
            link[i].style.color = "rgb(255, 255, 255)";
        }
    }
}

function hoverFb(element){
    element.setAttribute('src', 'images/facebook-yellow.png');
}

function unhoverFb(element){
    element.setAttribute('src', 'images/facebook.png');
}

function hoverTw(element){
    element.setAttribute('src', 'images/twitter-yellow.png');
}

function unhoverTw(element){
    element.setAttribute('src', 'images/twitter.png');
}

function hoverIg(element){
    element.setAttribute('src', 'images/instagram-yellow.png');
}

function unhoverIg(element){
    element.setAttribute('src', 'images/instagram.png');
}
