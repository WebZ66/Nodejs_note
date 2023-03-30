const btn = document.createElement('button')
btn.innerHTML = '按钮'
document.body.appendChild(btn)
console.log('123')
btn.addEventListener('click', function () {
  let div = document.querySelector('div')
  div.style.backgroundColor = 'red'
})
