window.addEventListener('load', () => {
    const timeline = gsap.timeline({ defaults: { duration: .7 } })

    timeline
        .from('.about-info',{y:'-30%',ease:'bounce'})
        .from('.about-info h1', { y: '100%',opacity:0},.5)
        .from('.about-info p', { y: '15%',opacity:0 })
        .from('.video-design', { x: '15%',opacity:0 },2)
        .from('.my-video', { scale:.7,opacity:0},2)

        
        
})