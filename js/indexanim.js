
window.addEventListener('load', () => {
    const timeline = gsap.timeline({ defaults: { duration: .7 } })

    timeline
        .from('header', { y: '-100%', ease: 'bounce' })
        .from('.title h1', { x: '-5%', opacity: 0, ease: 'elastic' })
        .from('.title h2', { y: '25%', opacity: 0, duration: .5 })
        .from('.title p', { y: '25%', opacity: 0, duration: .5 })
        .from('.title a', { y: '25%', opacity: 0, duration: .5 })
})