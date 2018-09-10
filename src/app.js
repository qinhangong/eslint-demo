document.write('hello eslint')

const root = document.querySelector('#root')
const a = 1
const b = 3
root.onclick = function () {
    switch (a) {
        case 1:
            console.log(1)
            break
        case 2:
            console.log(2)
            break
        default:
            break
    }
}

console.log(b)
