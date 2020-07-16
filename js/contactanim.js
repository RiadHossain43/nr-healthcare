const timeline = gsap.timeline({ defaults: { duration: .7 } })

timeline
    .from('.hire-title', { y: '100%', ease: 'bounce' })
    .from('.hire p', { y: '100%', opacity: 0, ease: 'elastic' })
    .from('#send_msg',{scale:.8,opacity:0},.7)
    .from('.field',{y:'50%',opacity:0,stagger:.3})
    .from('.email-hero',{y:'60%',x:'60%', opacity:0,stagger:.3},2)
    .from('.contact-style',{y:'40%',opacity:0,ease:'bounce'})
    .from('.inline-mail',{rotation:720,duration:.5})