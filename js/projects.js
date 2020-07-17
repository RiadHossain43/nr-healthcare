import * as Util from './util.js'
import data from './data.js'

const blog_card = Util.eleQRY('.blog-card')
const blogs = Util.eleQRY('.blog-list')

function setInfo(data, id) {

    blog_card.innerHTML = `
    
    <img class="stdy_bg" src="./assets/styleicons/bgvector.svg" alt="">
    <button class="minimize"><i class="fas fa-compress-alt"></i></button>
    <div class="blog-post-info">
        <div class="blog-post-date" style.>
            <h1>${ id > 9 ? id + 1 : `0${id + 1}`}.</h1>
            <img class="case_num" src="./assets/casestd_icons/case_${id+1}.svg" alt="">
        </div>
        <h3 class="blog-title">${data[id]._study}</h3>
        <p class="blog-p">${data[id]._intro}</p>
        <a href="#ref_div" class="read-more">Read More <i class="fas fa-expand-alt"></i></a>
    </div>

`
    let more_info = Util.eleQRY('.read-more')
    let minimize = Util.eleQRY('.minimize')
    let blog_p = Util.eleQRY('.blog-p')

    more_info.addEventListener('click', (e) => {
        Util.addStyel(blog_card, 'blog-card-2dry')
        Util.addStyel(blogs, 'blog-list-2dry')
        Util.set_style(more_info, { opacity: 0 })
        setTimeout(() => Util.set_style(more_info, { display: 'none' }), 500)
        minimize.style.display = 'inline'
        blog_p.innerHTML = data[id]._detail
    })
    minimize.addEventListener('click', () => {
        Util.rmvStyel(blog_card, 'blog-card-2dry')
        Util.rmvStyel(blogs, 'blog-list-2dry')
        Util.set_style(more_info, { display: 'inline-block' })
        setTimeout(() => Util.set_style(more_info, { opacity: 1 }), 10)
        minimize.style.display = 'none'
        blog_p.innerHTML = data[id]._intro
    })

}


function list_studies() {
    const list_cont = Util.eleQRY('.blog-list')
    const case_logo = ['./assets/partners/nhs.svg','./assets/partners/katlas.jpg',]
    for (let i = 0; i < data.length; i++) {
        let study = Util.crtEle('div')
        Util.addStyel(study, 'blog-list-blog')
        Util.addStyel(study, 'flex-row')
        study.innerHTML = `
        
            <div class="blog-list-date">
                <p>${ i > 9 ? i + 1 : `0${i + 1}`}</p>
            </div>
            
            <div class="blog-list-blog-content">
                <h3 class="blog-list-blog-title">${data[i]._study}<img class='case_icon'src="./assets/casestd_icons/case.svg" alt=""></h3>
                <img class="case_logo" src="${case_logo[i]}" alt="">
                <a href="#ref_div" class="blog-list-expand"><i class="fas fa-angle-double-right"></i></a>
            </div>
        
        `
    //     < p class="blog-list-blog-p" > Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //     Quis molestias, earum repudiandae quos, distinctio laudantium,
    // </p >
            list_cont.appendChild(study)
    }
    let selet_study = Util.eleQRYAll('.blog-list-expand')

    setInfo(data, 0)
    for (let i = 0; i < selet_study.length; i++) {
        selet_study[i].addEventListener('click', () => {
            setInfo(data, i)
        })
    }
}

list_studies()
