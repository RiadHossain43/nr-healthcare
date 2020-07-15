import * as Util from './util.js'
const blog_card = Util.eleQRY('.blog-card')
const blogs = Util.eleQRY('.blog-list')

function setInfo() {

    blog_card.innerHTML = `
    <button style="display:none;" class="minimize"><i class="fas fa-expand-alt"></i></button>
    <div class="blog-post-info">
    <div class="blog-post-date">
        <span>Sunday</span>
        <span>27 cot,2020</span>
    </div>
    <h3 class="blog-title">Blog Title</h3>
    <p class="blog-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quis molestias, earum repudiandae quos, distinctio laudantium,
        sit dolores aliquam exercitationem consectetur a incidunt dolorum
    </p>
    <button class="read-more">Read More <i class="fas fa-expand-alt"></i></button>
    </div>

`
    let more_info = Util.eleQRY('.read-more')
    let minimize = Util.eleQRY('.minimize')

    more_info.addEventListener('click', (e) => {
        Util.addStyel(blog_card,'blog-card-2dry')
        Util.addStyel(blogs,'blog-list-2dry')
        Util.set_style(more_info,{opacity:0})
        setTimeout(()=> Util.set_style(more_info,{display:'none'}) ,500)
        minimize.style.display = 'inline'
    })
    minimize.addEventListener('click',()=>{
        Util.rmvStyel(blog_card,'blog-card-2dry')
        Util.rmvStyel(blogs,'blog-list-2dry')
        Util.set_style(more_info,{display:'block'})
        setTimeout(()=> Util.set_style(more_info,{opacity:1}) ,10)
        minimize.style.display = 'none'
    })

}
setInfo()