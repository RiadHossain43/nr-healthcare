import * as Anim from './anim.js'

let set_style = (elem, styles) => Object.assign(elem.style, styles)
window.addEventListener('load', () => {
    const body = document.querySelector('body')
    const menu_btn = document.querySelector('.menu-btn')
    const nav = document.querySelector('.nav')
    const make_req = document.querySelectorAll('.make_req')
    const sublinks = document.querySelector('.sub-links')
    const sub_link = document.querySelectorAll('.sub-link')
    const req_form_container = document.querySelector('.req_form_container')
    const drop_down = document.querySelector('.drop-down')
    const link = document.querySelectorAll('.link')
    const service = document.getElementById('service')

    

    let requests = ['Risk Assessments', '27002 Controls Implementation', 'Independent Audits',
        'Awareness and Training', 'Management Reviews', 'Continual Improvement Planning','Transformation']


    setTimeout(function () {
        let viewheight = window.innerHeight;
        let viewwidth = window.innerWidth;
        let viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
    }, 300);

    let menu_open = false
    menu_btn.addEventListener('click', () => {
        if(!menu_open){
            gsap.from('.link',{duration:1,opacity:0,x:'-10%',delay:.3,stagger:.2})
            menu_open = true
        }else menu_open =false
        nav.classList.toggle('nav-expand')
        menu_btn.classList.toggle('menu-open')
       
    })
    drop_down.addEventListener('click', () => {
        drop_down.classList.toggle('up')
        sublinks.classList.toggle('drop')
    })


    for (let i = 0; i < make_req.length; i++) {
        make_req[i].addEventListener('click', (e) => requestService(e, i))
    }
    // for (let i = 0; i < sub_link.length; i++) {
    //     sub_link[i].addEventListener('click', (e) => requestService(e, i))
    // }


    function requestService(btn, i) {
       
        set_style(req_form_container, { display: 'none', opacity: 0 })
        setTimeout(() => {
            set_style(req_form_container, { opacity: 1, height: '85vh' })
        }, 20)

        req_form_container.innerHTML = `
                <button class="req_back"><img src="./assets/styleicons/cross.svg" class="cross" alt=""></button>
                <h2>Fill the form to get ${requests[i]} service</h2>
                <form class="req-form" action ="" method="POST">
                    <div class="half_width field req-f"><input class="input" type="text" name="name" id="Name"
                            placeholder="Name"></div>
                    <div class="half_width field req-f"><input class="input" type="text" name="phone" id="Phone"
                            placeholder="Phone"></div>
                    <div class="full_width field req-f"><input class="input" type="text" name="email" id="Email"
                            placeholder="Email"></div>
                    <div class="full_width field req-f"><input class="input" type="text" name="organization" id="organization"
                            placeholder="Organisation"></div>
                    <div class="full_width field req-f"><input class="input" type="hidden" name="subject" id="company"
                            placeholder="Subject" value="Service request for ${requests[i]}"></div>
                    <div class="full_width field req-f"><textarea name="notes" id="about_product"
                            placeholder="Write short notes ..."></textarea></div>
                    <div class="full_width field"><button class="submit_btn">Submit Request</button>
                    </div>
                </form>
                `
        let req_back = document.querySelectorAll('.req_back')
        let req_form = document.querySelector('.req-form')
        req_form.setAttribute('action','service_request.php')
        req_back.forEach(btn => {
            btn.addEventListener('click', (e) => {
                set_style(req_form_container, { height: '0%', opacity: 0 })
                setTimeout(() => {
                    set_style(req_form_container, { display: 'none' })
                }, 200)
                req_form_container.innerHTML = ''
            })
        })

    }

    
    Anim.btnEfct()














})