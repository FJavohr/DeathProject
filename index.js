let one = document.querySelector('.non-fumction-numners-1');
let two = document.querySelector('.non-fumction-numners-2');
let three = document.querySelector('.non-fumction-numners-3');
let fourth = document.querySelector('.non-fumction-numners-4');
let line = document.querySelector('.daught-line');
one.onclick = function () {
 line.style.width = '25%'
 this.classList.toggle('non-function-realise-color')
}
two.onclick = function () {
 line.style.width = '50%'
 one.style.backgroundColor = 'white';
 this.classList.toggle('non-function-realise-color')
}
three.onclick = function () {
line.style.width = '75%'
two.style.backgroundColor = 'white'
this.classList.toggle('non-function-realise-color')

}
fourth.onclick = function () {
 line.style.width = '100%'
 three.style.backgroundColor = 'white'
 this.classList.toggle('non-function-realise-color')
}