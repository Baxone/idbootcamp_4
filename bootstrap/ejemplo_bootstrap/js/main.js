const take = document.querySelector('#take')
take.addEventListener('click', onClick)


function onClick(event) {
    document.body.innerHTML += `<div class="alert alert-warning alert-dismissible fade show position-absolute top-50 start-50" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
}