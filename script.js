const modal = document.getElementById('modal')

const openButton = document.getElementById('openButton')

const closeButton = document.getElementById('closeButton')

openButton.onclick = function () {
  modal.classList.add('show')
}

closeButton.onclick = function () {
  modal.classList.remove('show')
}
