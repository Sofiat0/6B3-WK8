const li1 = document.querySelector ('li:first-of-type(1)')
li1.innerText = 'Adetutu'

const li2 = document.querySelector ('li:nth-of-type(3)')
li2.innerText = 'victor'

const li3 = document.querySelector ('li:nth-of-type(5)')
li3.innerText = 'tayo'

const list = document.querySelectorAll ('.left li')
list[1].innerText = 'jide'
list[3].innerText = 'tife'
list[5].innerText = 'joshua'
const rightEven = document.getElementsByClassName('even')
rightEven[0].textContent = 'darasimi'
rightEven[1].textContent = 'kola'
rightEven[2].textContent = 'benedict'

const leftOdd = document.getElementsByTagName('li')
leftOdd[6].innerText ='sofiat'
leftOdd[8].innerText ='Damilare'
leftOdd[10].innerText ='precious'

const right = document.getElementsByClassName('right')[0]
right.computedStyleMap.backgroundColor = '#12d'
const left = document.getElementsByClassName('right')[0]
left.computedStyleMap.backgroundColor = '#800'