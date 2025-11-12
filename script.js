// Cache the DOM
var button = document.getElementById("button")

var nume = document.getElementById("nume")

var prenume = document.getElementById("prenume")

var img = document.querySelector("img")

var asteptari = document.getElementById("asteptari")

var body = document.querySelector("body")





// Add eventlisteners
button.addEventListener("click", altaViata)



// Define function
function altaViata() {

nume.innerHTML = "Software Engineer"
prenume.innerHTML = "Microsoft"
asteptari.innerHTML = "<ul><li>cashu</li><li>cicniar lou adica pa burta</li><li>tigru bengalez oficial</li><li>libertate finaciara schema piramidala owner</li><li>casa masa una alta ca tot omu</li></ul>"

img.src = "images/lion.jpg"
img.style.opacity = "53%"
img.style.width = "600px"
img.style.height = "600px"
}