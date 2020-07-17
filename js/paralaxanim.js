// const container = document.querySelector('.container')
// let inc = 2
// let rot = 1
// let prev_scroll = 0
// container.addEventListener('scroll',()=>{
//     const timeline = gsap.timeline({ defaults: { duration: .5 } })
//     if(container.scrollTop-prev_scroll>0){    
//         timeline
//             .to('.gmtry', { y:-inc,rotation:rot,ease:'ease-in-out'})
//             prev_scroll = container.scrollTop
//             inc+=2
//             rot+=5
//     }else{
        
//         timeline
//             .to('.gmtry', { y:inc,rotation:-rot,ease:'ease-in-out'})
//             prev_scroll = container.scrollTop
//             inc-=2
//             rot-=1
           
//     }
    
// })