import * as Util from './util.js'

function btnEfct() {
    const buttons = Util.eleQRYAll('button')
    const link1 = Util.eleQRY('.title a')
    console.log(link1)
    const sp_links = [link1,Util.eleQRY('.learn-more a')]
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            console.log('click')
            let ripples = Util.crtEle('span')
            Util.addStyel(ripples, 'ripple')
            Util.set_style(ripples, { left: `50%`, top: `50%` })
            e.target.appendChild(ripples)
            setTimeout(() => {
                ripples.remove()
            }, 500)
        })
    })
    console.log(sp_links)
    // sp_links.forEach(link=>{
    //     link.addEventListener('click',()=>{
    //         console.log('click')
    //         let ripples = Util.crtEle('span')
    //         Util.addStyel(ripples, 'ripple2')
    //         Util.set_style(ripples, { left: `50%`, top: `50%` })
    //         e.target.appendChild(ripples)
    //         setTimeout(() => {
    //             ripples.remove()
    //         }, 500)
    //     })
    // })
    
}

export{btnEfct}