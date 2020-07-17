import * as Util from './util.js'
const timeline = gsap.timeline({ defaults: { duration: .7 } })
     timeline
         .from('header', { y: '-100%', ease: 'ease-in-out' })
         .from('.title h1', { opacity: 0,webkitFilter:"blur(10px)",ease: 'ease-in-out',scale:1.05 })//ease: 'elastic'
         .from('.title h2', { y: '25%', opacity: 0, duration: .5 })
         .from('.title p', { y: '25%', opacity: 0, duration: .5 })
         .from('.title a', { y: '25%', opacity: 0, duration: .5 })
         .from('.style-icon-1:nth-of-type(1)',{x:'-40%',opacity:1},2)
         .from('.style-icon-1:nth-of-type(2)',{x:'40%',opacity:1},2)
