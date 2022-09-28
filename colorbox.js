let redBtnEl = document.getElementById("red")
let yellowBtnEl = document.getElementById("yellow")
let blueBtnEl = document.getElementById("blue")
let whiteBtnEl = document.getElementById("white")
let boxEl = document.getElementById("box")
let colorArray = []
redBtnEl.onclick = function() {
    boxEl.style.backgroundColor = "red"
    let color = boxEl.value
    console.log(color)
    colorArray.push(redBtnEl.textContent)
    console.log(colorArray)
}
yellowBtnEl.onclick = function() {
    boxEl.style.backgroundColor = "yellow"
    colorArray.push(yellowBtnEl.textContent)
    console.log(colorArray)
}
blueBtnEl.onclick = function() {
    boxEl.style.backgroundColor = "blue"
    colorArray.push(blueBtnEl.textContent)
    console.log(colorArray)
}
whiteBtnEl.onclick = function() {
    boxEl.style.backgroundColor = "white"
    colorArray.push(whiteBtnEl.textContent)
    console.log(colorArray)
}
let redoColor=""
let undoBtnEl = document.getElementById("undo")
undoBtnEl.onclick = function() {
    let lengthOfArr = (colorArray.length)
    let undoColorIndex = (lengthOfArr - 1)-1
    if (undoColorIndex === -1) {
        undoColorIndex = 0
    }
    console.log(undoColorIndex)
    let undoColor = colorArray[undoColorIndex]
    console.log(undoColor)
    redoColor=colorArray.pop()
   
    boxEl.style.backgroundColor = undoColor
   

}

let redoBtnEl = document.getElementById("redo")
redoBtnEl.onclick=function(){
    boxEl.style.backgroundColor=redoColor
}