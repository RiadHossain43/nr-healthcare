
const timeline = gsap.timeline({defaults:{duration:.7}})

timeline
    .from('.service-detail h1',{y:'-100%'})
    .from('.service-detail p',{y:'15%',opacity:0})