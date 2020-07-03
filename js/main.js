
// $(document).ready(()=>{
//     $('.menu-btn').click(()=>{
//         $('.nav').toggleClass('nav-expand')
//     })
// })

window.addEventListener('load', () => {
    const body = document.querySelector('body')
    const menu_btn = document.querySelector('.menu-btn')
    const nav = document.querySelector('.nav')
    const make_req = document.querySelectorAll('button')
    const sublinks = document.querySelector('.sub-links')
    const sub_link = document.querySelectorAll('.sub-link')
    const req_form_container = document.querySelector('.req_form_container')
    const drop_down = document.querySelector('.drop-down')
    const link = document.querySelectorAll('.link')
    const service = document.getElementById('service')

    let requests = ['Risk Assessments','27002 Controls Implementation','Independent Audits',
                    'Awareness and Training','Management Reviews','Continual Improvement Planning']


    setTimeout(function () {
        let viewheight = window.innerHeight;
        let viewwidth = window.innerWidth;
        let viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
    },300);

    menu_btn.addEventListener('click', () => {
        nav.classList.toggle('nav-expand')
        menu_btn.classList.toggle('menu-open')
    })
    drop_down.addEventListener('click',()=>{
        drop_down.classList.toggle('up')
        sublinks.classList.toggle('drop')
    })
    

    for(let i=0;i<make_req.length;i++){
        make_req[i].addEventListener('click',(e)=>requestService(e,i))
    }
    for(let i=0;i<make_req.length;i++){
        sub_link[i].addEventListener('click',(e)=>requestService(e,i))
    }


    function requestService(btn,i) {
       
            req_form_container.style.display = 'block'
            req_form_container.innerHTML = `
                <button class="req_back"><img src="./assets/styleicons/cross.svg" class="cross" alt=""></button>
                <h2>Fill the form to get ${requests[i]} service</h2>
                <form class="req-form" action="" method="POST">
                    <div class="half_width field req-f"><input class="input" type="text" name="name" id="Name"
                            placeholder="Name"></div>
                    <div class="half_width field req-f"><input class="input" type="text" name="phone" id="Phone"
                            placeholder="Phone"></div>
                    <div class="half_width field req-f"><input class="input" type="text" name="email" id="Email"
                            placeholder="Email"></div>
                    <div class="half_width field req-f"><input class="input" type="text" name="organization" id="organization"
                            placeholder="Organisation"></div>
                    <div class="full_width field req-f"><input class="input" type="text" name="subject" id="company"
                            placeholder="Subject"></div>
                    <div class="full_width field req-f"><textarea name="message" id="about_product"
                            placeholder="Write a message ..."></textarea></div>
                    <div class="full_width field"><button class="submit_btn">Submit Request</button>
                    </div>
                </form>
                `
            let req_back = document.querySelectorAll('.req_back')
            req_back.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    req_form_container.style.display = ' none'
                    req_form_container.innerHTML = ''
                })
            })
    }





















})