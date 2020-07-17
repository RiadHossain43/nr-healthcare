const container = document.querySelector('.container')

let rot = 1
let prev_scroll = 0
container.addEventListener('scroll',()=>{
    const timeline = gsap.timeline({ defaults: { duration: .5 } })

    timeline
    .to('.gmtry', { rotation:rot,ease:'ease-in-out'})
    prev_scroll = container.scrollTop
    rot+=5
    
})