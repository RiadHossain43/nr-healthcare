
// $(document).ready(()=>{
//     $('.menu-btn').click(()=>{
//         $('.nav').toggleClass('nav-expand')
//     })
// })

window.addEventListener('load',()=>{
    const menu_btn = document.querySelector('.menu-btn')
    const nav = document.querySelector('.nav')

    menu_btn.addEventListener('click',()=>{
        nav.classList.toggle('nav-expand')
        menu_btn.classList.toggle('menu-open')
    })





})