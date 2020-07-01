
// $(document).ready(()=>{
//     $('.menu-btn').click(()=>{
//         $('.nav').toggleClass('nav-expand')
//     })
// })

window.addEventListener('load',()=>{
    const menu_btn = document.querySelector('.menu-btn')
    const nav = document.querySelector('.nav')
    const make_req = document.querySelectorAll('button')
    const req_form_container = document.querySelector('.req_form_container')
    const req_back = document.querySelectorAll('.req_back')
    menu_btn.addEventListener('click',()=>{
        nav.classList.toggle('nav-expand')
        menu_btn.classList.toggle('menu-open')
    })

    make_req.forEach( btn => {
        btn.addEventListener('click',function(e){
            req_form_container.style.display = 'block'
        })
    })
    req_back.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            e.target.parentElement.style.display = ' none'
        })
    })





})