const div= document.getElementById('dog-image-container')
const ul= document.getElementById('dog-breeds')
const dropdown= document.getElementById('breed-dropdown')
let breedNames

fetch('https://dog.ceo/api/breeds/image/random/4"')
.then(r => r.json())
.then(obj => {
    const arrayOfImages= obj.message
    arrayOfImages.forEach(imgLink => {
        const img= document.createElement('img')
        img.textContent= imgLink
        div.append(img)
    })
})

fetch('https://dog.ceo/api/breeds/list/all')
.then(r => r.json())
.then(obj => {
    const objOfBreeds= obj.message
    breedNames= Object.keys(objOfBreeds)
    breedNames.forEach(breedName => {
        const li= document.createElement('li')
        li.textContent= breedName
        ul.append(li)
        li.addEventListener('click', changeColor)
    })
})

dropdown.addEventListener('change', (e) => {
    ul.innerHTML= ''
    const dropdownLetter= e.target.value
    breedNames.forEach(breedName => {
        if (dropdownLetter === breedName[0]) {
            const li= document.createElement('li')
            li.textContent= breedName
            ul.append(li)
            li.addEventListener('click', changeColor)
        }
    })
})

function changeColor(e) {
    e.target.style.color= 'green'
}