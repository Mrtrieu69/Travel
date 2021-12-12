
// Title move arrow
const blockAnimations = document.querySelectorAll(".block-animation")

var x = 0
var z = 1

function moveArrow(){
    x += z
    if(x === 4 || x === -4){
        z *= -1
    }
    if(z > 0){
        y = Math.sqrt(16 - Math.pow(x, 2))
    }else if(z < 0){
        y = -Math.sqrt(16 - Math.pow(x, 2))

    }
    blockAnimations.forEach(blockAnimation =>{
        blockAnimation.style.transform = `matrix(1, 0, 0, 1, ${x}, ${y})`
    })
}

setInterval(moveArrow, 150)

// Slide show

const backGroundSlides = document.querySelectorAll(".about-section__item")
const lenght_slides = backGroundSlides.length



var k = 0;
var setInterVal = setInterval(next, 6000)

function next(){
    k++
    if(k === lenght_slides){
        k = 0
    }
    for(let j = 0; j < lenght_slides; j++){
        backGroundSlides[j].style.display = "none"
    }
    backGroundSlides[k].style.display = "block"
    clearInterval(setInterVal)
    setInterVal = setInterval(next, 6000)
}

function prev(){
    k--
    if(k === -1){
        k = lenght_slides - 1
    }
    for(let j = 0; j < lenght_slides; j++){
        backGroundSlides[j].style.display = "none"
    }
    backGroundSlides[k].style.display = "block"
    clearInterval(setInterVal)
    setInterVal = setInterval(next, 6000)
}



// Scroll Top
const scrollTop = document.querySelector(".scroll-top")

scrollTop.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

// Modal
const modal = document.querySelector(".modal")
const modayLayout = document.querySelector(".modal-layout")
const modalClose = document.querySelector(".modal-close")
const playBtn = document.querySelector(".introduce-section__video-play")


playBtn.addEventListener("click",()=>{
    modal.style.display = "flex"
})

modayLayout.addEventListener("click",()=>{
    modal.style.display = "none"
})

modalClose.addEventListener("click",()=>{
    modal.style.display = "none"
})


// Countdown
const minute = document.querySelector(".sale-section__countdown-minute")
const second = document.querySelector(".sale-section__countdown-second")
const checkNowBtn = document.querySelector(".sale-section__countdown-check a")
var countDown = setInterval(printTime, 1000)

function printTime(){
    var min = parseInt(minute.textContent)
    var sec = parseInt(second.textContent)

    sec--
    if(sec === -1){
        sec = 59
        min--
    }

    if(sec < 10){
        second.innerHTML = `0${sec}`
        minute.innerHTML = `0${min}`
    }else{
        second.innerHTML = `${sec}`
        minute.innerHTML = `0${min}`
    }
    if(min === 0 && sec === 0){
        clearInterval(countDown)
    }
}


// Sidebar open
const sidebarIcon = document.querySelector(".header-sidebar-mobile-icon")
const sidebar = document.querySelector(".header-sidebar-mobile")
const sidebarClose = document.querySelector(".header-sidebar-mobile__close")

sidebarIcon.addEventListener("click",()=>{
    sidebar.style.display = "block"
})

sidebarClose.addEventListener("click",()=>{
    sidebar.style.display = "none"
})