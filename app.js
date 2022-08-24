// variables
const input = document.getElementById("input-el")
const button = document.getElementById("btn")
const unitBox1 = document.getElementById("m-f")
const unitBox2 = document.getElementById("l-g")
const unitBox3 = document.getElementById("k-p")
let sentence = ""


// event listeners and functions
button.addEventListener("click", function() {
    unitBox1.innerHTML = "<h4>Length (Meter/Feet)</h4>"
    unitBox2.innerHTML = "<h4>Volume (Liters/Gallons)</h4>"
    unitBox3.innerHTML = "<h4>Mass (Kilograms/Pounds)</h4>"
    if (input.value > 0) {
        convertLength(input.value)
        convertVolume(input.value)
        convertMass(input.value)
    }
})

function convertLength(val) {
    const metersToFeet = val * 3.281
    const feetToMeters = val / 3.281
    sentence = `<p> ${val} meters = ${metersToFeet.toFixed(3)} feet  <span>|</span>  ${val} feet = ${feetToMeters.toFixed(3)} meters </p>`
    unitBox1.innerHTML += sentence
}

function convertVolume(val) {
    const litersToGal = val * 0.264
    const galToLiters = val / 0.264
    sentence = `<p> ${val} liters = ${litersToGal.toFixed(3)} gallons  <span>|</span>  ${val} gallons = ${galToLiters.toFixed(3)} liters </p>`
    unitBox2.innerHTML += sentence
}

function convertMass(val) {
    const kgToPounds = val * 2.204
    const poundsToKg = val / 2.204
    sentence = `<p> ${val} kilos = ${kgToPounds.toFixed(3)} pounds <span>|</span>  ${val} pounds = ${poundsToKg.toFixed(3)} kilos </p>`
    unitBox3.innerHTML += sentence
}