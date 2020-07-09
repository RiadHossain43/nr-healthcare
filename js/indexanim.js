const timeline = gsap.timeline({ defaults: { duration: .7 } })

    //  timeline
    //      .from('header', { y: '-100%', ease: 'bounce' })
    //      .from('.title h1', { x: '-5%', opacity: 0, ease: 'elastic' })
    //      .from('.title h2', { y: '25%', opacity: 0, duration: .5 })
    //      .from('.title p', { y: '25%', opacity: 0, duration: .5 })
    //      .from('.title a', { y: '25%', opacity: 0, duration: .5 })
    //      .from('.brand-name a',{y:'120%',rotation:720})
    //      .from('.style-icon-1:nth-of-type(1)',{x:'-40%',opacity:1},2)
    //      .from('.style-icon-1:nth-of-type(2)',{x:'40%',opacity:1},2)

    timeline
        .fromTo('header', { y: '-100%' }, { y: '0', ease: 'bounce' })
        .fromTo('.title h1', { x: '-5%', opacity: 0 }, { x: '0%', opacity: 1, ease: 'elastic' })
        .fromTo('.title h2', { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, duration: .5 })
        .fromTo('.title p', { y: '25%', opacity: 0 }, { y: '0%', opacity: 1, duration: .5 })
        .fromTo('.title a', { y: '25%', opacity: 0 }, { y: '0%', opacity: 1, duration: .5 })
        .fromTo('.brand-name a', { y: '120%', rotation: 720 }, { y: '0%', rotation: 0 })
        .fromTo('.style-icon-1:nth-of-type(1)', { x: '-40%', opacity: 1 }, 2)
        .fromTo('.style-icon-1:nth-of-type(2)', { x: '40%', opacity: 1 }, 2)