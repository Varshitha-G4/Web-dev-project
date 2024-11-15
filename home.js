window.onscroll=function(){
    changeHeaderBG()
};

function changeHeaderBG(){
    var header=document.querySelector(".header");
    if (window.scrollY>50){
        header.classList.add("opaque-header")
    }
    else {
        header.classList.remove("opaque-header")
    }
}
