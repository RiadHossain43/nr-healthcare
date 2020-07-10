import * as Util from './util.js'

function btnEfct() {
    const buttons = Util.eleQRYAll('button')
    const link1 = Util.eleQRY('.title a')
    // console.log(link1)
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
}






export{btnEfct}