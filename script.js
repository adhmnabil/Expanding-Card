let panners = document.querySelectorAll('.panners')

panners.forEach( (panel)=>{
panel.addEventListener('click', ()=>{
    remove()
    panel.classList.add('active')
})
})
function remove() {
    panners.forEach(panel =>{
        panel.classList.remove('active')
    })
}