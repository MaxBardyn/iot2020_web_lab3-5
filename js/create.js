import {
  clearInputs,
  getInputValues,
} from './dom_util.js'

import {
  postDress,
} from './api.js'

const submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', event => {

  event.preventDefault()
  
  const {brandName, color, priceInUAH, countryOfManufacturer, size, season} = getInputValues()
  
  clearInputs()
  
  postDress({
    brandName,
    color,
    priceInUAH,
    countryOfManufacturer,
    size, 
    season,})
  
  alert('Dress has been created')
  })