let div = document.querySelector('div')
// document.addEventListener('click', function (e) {
//   //   console.log(e.pageX)
//   div.style.top = e.pageY + 'px'
//   div.style.left = e.pageX + 'px'
// })
let move = false
div.addEventListener('mousedown', function () {
  move = true
})
document.addEventListener('mousemove', function (e) {
  if (move) {
    div.style.top = e.clientY + 'px'
    div.style.left = e.clientX + 'px'
  }
})
div.addEventListener('mouseup', function () {
  move = false
})
