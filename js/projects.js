import * as Util from './util.js'
import data from './data.js'

const blog_card = Util.eleQRY('.blog-card')
const blogs = Util.eleQRY('.blog-list')

function setInfo(data,id) {

    blog_card.innerHTML = `

    <button style="display:none;" class="minimize"><i class="fas fa-expand-alt"></i></button>
    <div class="blog-post-info">
        <div class="blog-post-date" style.>
            <span>${ id>9?id+1:`0${id+1}`}</span>
        </div>
        <h3 class="blog-title">${data[id]._study}</h3>
        <p class="blog-p">${data[id]._intro}</p>
        <button class="read-more">Read More <i class="fas fa-expand-alt"></i></button>
    </div>

`
    let more_info = Util.eleQRY('.read-more')
    let minimize = Util.eleQRY('.minimize')
    let blog_p = Util.eleQRY('.blog-p')

    more_info.addEventListener('click', (e) => {
        Util.addStyel(blog_card,'blog-card-2dry')
        Util.addStyel(blogs,'blog-list-2dry')
        Util.set_style(more_info,{opacity:0})
        setTimeout(()=> Util.set_style(more_info,{display:'none'}) ,500)
        minimize.style.display = 'inline'
        blog_p.innerHTML = data[id]._detail
    })
    minimize.addEventListener('click',()=>{
        Util.rmvStyel(blog_card,'blog-card-2dry')
        Util.rmvStyel(blogs,'blog-list-2dry')
        Util.set_style(more_info,{display:'block'})
        setTimeout(()=> Util.set_style(more_info,{opacity:1}) ,10)
        minimize.style.display = 'none'
        blog_p.innerHTML = data[id]._intro
    })

}

setInfo(data,0)