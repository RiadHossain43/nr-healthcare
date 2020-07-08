window.addEventListener('load', () => {
    const timeline = gsap.timeline({ defaults: { duration: .7 } })

    timeline
        .from('.service-detail h1', { y: '-100%' })
        .from('.service-detail p', { y: '15%', opacity: 0 })
        .from('.style-icon-1:nth-of-type(1)', { x: '-40%', opacity: 1 }, 2)
        .from('.style-icon-1:nth-of-type(2)', { x: '40%', opacity: 1 }, 2)
})