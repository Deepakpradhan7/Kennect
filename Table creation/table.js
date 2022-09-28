let userInputHeaderEl = document.getElementById("header")
let userInputRowEl = document.getElementById("row")
let createBtnEl = document.getElementById("createBtn")

let tableContainerEl = document.getElementById("tableContainer")

createBtnEl.onclick = function() {
    let headerText = userInputHeaderEl.value
    let rowText = userInputRowEl.value
    let headerSpan = document.createElement("span")
    headerSpan.classList.add("header-style")
    let rowSpan = document.createElement("span")
    rowSpan.classList.add("row-style")
    let headerRowContainerEl = document.createElement("div")
    headerRowContainerEl.classList.add("header-row-container")
    headerSpan.textContent = headerText
    rowSpan.textContent = rowText
    headerRowContainerEl.appendChild(headerSpan)
    headerRowContainerEl.appendChild(rowSpan)
    tableContainerEl.appendChild(headerRowContainerEl)
    userInputHeaderEl.value = ""
    userInputRowEl.value = ""
}
