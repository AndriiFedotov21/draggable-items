const  draggableItem = document.querySelector('.draggable-item');
const itemHolders = [...document.querySelectorAll('.item-holder')]
const text = document.querySelector('.text-to-appear')

draggableItem.ondragstart = function () {
    text.style = `display: none;`
    setTimeout(() => {
        this.classList.add('hide')}, 0)
}
draggableItem.ondragend = function () {
    this.classList.remove('hide')
}

itemHolders.forEach( (item) => {
    item.ondragover = function (event) {
        event.preventDefault()
    }
    item.ondragenter = function () {
        this.classList.add('hovered')
    }
    item.ondragleave = function () {
        this.classList.remove('hovered')
    }
    item.ondrop = function () {
        text.style = `display: block;`
        this.append(draggableItem)
    }
})