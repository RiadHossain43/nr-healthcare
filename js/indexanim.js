// gsap.from('header',{duration:1, y:'-100%',ease:'bounce'})
// gsap.from('.link',{duration:1,opacity:0,delay:1,stagger:.2})

const timeline = gsap.timeline({defaults:{duration:.7}})
// const menu_btn = document.querySelector('.menu-btn')
timeline
.from('header',{y:'-100%',ease:'bounce'})
.from('.title h1',{x:'-5%',opacity:0,ease:'elastic'})
.from('.title h2',{y:'25%',opacity:0,duration:.5})
.from('.title p',{y:'25%',opacity:0,duration:.5})
.from('.title a',{y:'25%',opacity:0,duration:.5})