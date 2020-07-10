
const timeline = gsap.timeline({ defaults: { duration: .7 } })
     timeline
        .from('.partner-heroimg-cont img', { opacity: 0, duration: .5 },.3)
        .from('.partners-title', { y: '25%', opacity: 0, duration: .5 })
        .from('.pt-des-style', { y:'-50%',rotationX:-90, opacity: 0, duration: .5 })
        
        