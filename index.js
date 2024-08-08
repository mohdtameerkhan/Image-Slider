let gallery = document.querySelector('.gallery')
let next = document.querySelector('#next-btn')
let back = document.querySelector('#back-btn')


gallery.addEventListener('wheel',evt=>{
    gallery.scrollLeft += evt.deltaY;   
})

next.addEventListener('click',e=>{
    gallery.style.scrollBehavior = 'smmooth'
    gallery.scrollLeft += 900;
})

back.addEventListener('click',e=>{
     gallery.style.scrollBehavior = 'smmooth'
    gallery.scrollLeft -= 900;
})