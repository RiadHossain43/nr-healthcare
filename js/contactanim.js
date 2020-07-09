const timeline = gsap.timeline({ defaults: { duration: .7 } })
const cont_style_cont = document.querySelector('.contact-style-container')
cont_style_cont.style.height = `${document.querySelector('main').offsetHeight}px`

timeline
    .from('.hire-title', { y: '100%', ease: 'bounce' })
    .from('.hire p', { y: '100%', opacity: 0, ease: 'elastic' })
    .from('#send_msg',{scale:.8,opacity:0},.7)
    .from('.field',{y:'50%',opacity:0,stagger:.3})
    .from('.email-hero',{y:'10%',x:'10%',opacity:0,stagger:.3},2)
    .from('.contact-style',{y:'40%',opacity:0,ease:'bounce'})