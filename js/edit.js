import {
  clearInputs,
  getInputValues,
} from './dom_util.js'

import {
  updateDress,
} from './api.js'

const submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', event => {

  event.preventDefault()

  const substrings = window.location.search.substring(1).split('=')
  const itemId = substrings[1]

  const {brandName, color, priceInUAH, countryOfManufacturer, size, season} = getInputValues()

  // clearInputs()

  updateDress(itemId, {
    brandName,
    color,
    priceInUAH,
    countryOfManufacturer, 
    size, 
    season,
  })

  alert('Dress has been edited')
})