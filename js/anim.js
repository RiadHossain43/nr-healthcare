import * as Util from './util.js'

function btnEfct() {
    const buttons = Util.eleQRYAll('button')

    buttons.forEach(btn => {
        
        btn.addEventListener('click', function (e) {
            console.log('click')
            let X = e.clientX - e.target.offsetLeft
            let Y = e.clientY - e.target.offsetTop
            // console.log(X,Y)
            let ripples = Util.crtEle('span')
            Util.addStyel(ripples, 'ripple')
            Util.set_style(ripples, { left: `${X}px`, top: `${Y}px` })
            e.target.appendChild(ripples)
            setTimeout(() => {
                ripples.remove()
            }, 500)
        })
    })
}

export{btnEfct}