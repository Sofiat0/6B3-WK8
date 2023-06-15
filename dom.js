const heading = document.querySelector('h1')

heading.innerText = `Dora said 
" old men plant tree whose shed they will never 
live to sit under"`

heading.style.color = '#800'

const list1 = document.querySelector('ul li:nth-of-type(2)')

list1.style.background = 'tomato'

const list = document.querySelectorAll('li')
list[0].innerText = 'frontend web development with Next JS'
list[1].innerText = 'Backend development with Djanjo'
list[1].style.background = 'cyan'

const zero1 = document.querySelectorAll('#no-code')[1]
zero1.style.backgroundcolor = 'skyblue'
zero1.style.padding = '3em'
zero1.style.letterSpacing = '20px'
const zero = document.getElementById('no-code')

const zeroCode = document.getElementsByClassName('no-code')
zeroCode[0].style.borderbottom = '15px dashed pink'
zeroCode[1].style.borderbottom = '10px ridge magenta'
