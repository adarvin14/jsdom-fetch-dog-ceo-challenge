console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(){
    fetchImages()
    fetchBreeds()
    updateDropdown()
})

function fetchImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => renderImage(dogs))
}

function renderImage(image) {
    const dogImgs = document.getElementById("dog-image-container")
    image.message.forEach(image => {
        const img = document.createElement("img")
        img.src = image
        dogImgs.appendChild(img)
    })
}

function fetchBreeds() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => {
            breeds = Object.keys(data.message)
            showBreeds(breeds)
        })
}

function showBreeds() {
    const breedsList = document.getElementById('dog-breeds')
    breedsList.innerHTML = ''
    breeds.forEach(breed => {
        const li = document.createElement("li")
        li.innerText = breed
        breedsList.appendChild(li)
        li.addEventListener('click', updateColor)
    });
}

function updateColor() {
    e.target.style.color = "blue"
}

function updateDropdown() {
    let drop = document.getElementById("breed-dropdown");
    drop.addEventListener('change', updateBreeds);
}