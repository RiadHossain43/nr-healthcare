
const timeline = gsap.timeline({defaults:{duration:.7}})

timeline
    .from('.service-detail h1',{y:'-100%'})
    .from('.service-detail p',{y:'15%',opacity:0})
    // .from('.title h2',{y:'25%',opacity:0,duration:.5})
    // .from('.title p',{y:'25%',opacity:0,duration:.5})
    // .from('.title a',{y:'25%',opacity:0,duration:.5})