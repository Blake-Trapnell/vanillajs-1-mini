console.log (`Hello World`)
let count = 0
const element = document.getElementById('count')

let increase = ()=> {
    count++
    console.log(count)
    element.innerText = count
}
function decrease () {
    count--
    console.log(count)
    element.innerText = count
}
function reset() {
    count = 0
    console.log(count)
    element.innerHTML = `<mark>${count}</mark>`
}
let selectTheme = theme => {
    console.log(theme)
    document.getElementsByTagName('body')[0].className = theme
    document.getElementsByTagName('main')[0].className = theme
    const buttons = document.getElementsByTagName("button")
    for (let i =0; 0 < buttons.length; i++) {
        buttons[i].className = theme;
    }

}