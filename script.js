function like(id){
    var el = document.querySelector(`#${id}`)
    console.log(el.innerHTML)
    el.innerHTML++
}