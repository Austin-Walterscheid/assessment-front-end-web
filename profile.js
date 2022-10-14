function colorev(col) {
    col.preventDefault()

    alert(`Green!!`)
}

function placeev(plc) {
    plc.preventDefault()

    alert(`Thailand`)
}

function ritualev(rit) {
    rit.preventDefault()

    alert(`The Sauna`)
}

let form = document.querySelector(`#color`)
let place = document.querySelector(`#place`)
let ritual = document.querySelector(`#ritual`)


form.addEventListener(`click`, colorev)
place.addEventListener(`click`, placeev)
ritual.addEventListener(`click`, ritualev)
