let eleID = id => document.getElementById(id)

let eleCls = cls => document.getElementsByClassName(cls)

let set_style = (elem, styles) => Object.assign(elem.style, styles)

let crtEle = ele => document.createElement(ele)

let addStyel = (ele,style)=> ele.classList.add(style) 

let eleQRY = qry => document.querySelector(qry)

let eleQRYAll = qry => document.querySelectorAll(qry)

let scroll_check = ele =>{
    let ele_bound = ele.getBoundingClientRect()
    if (ele_bound.top <= window.innerHeight * .75) {
        return true
    }else return false
}
function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

export{
    eleID,eleCls,set_style,crtEle,addStyel,eleQRY,eleQRYAll,scroll_check,sound
}