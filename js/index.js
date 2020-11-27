import {
  getInputValues,
  clearInputs,
  renderItemList,
  addDressToPage,
  getInputBrand,
  searchBrandInput,
} from './dom_util.js'


const submitButton = document.getElementById('submit-button')
const searchButton = document.querySelector('#search-button')
const cancelButton = document.querySelector('#cancel-button')
const sortButton = document.querySelector('#sort-button')
const countPriceButton = document.querySelector('#count-button')
const countPriceOutput = document.querySelector('#count-price')

let dresses = []

const addDress = ({brand, color, price, country, gender, size, season}) => {
  const generatedId = uuid.v1()
  
  const newDress = {
    id: generatedId,
    brand,
    color,
    price,
    country, 
    gender, 
    size, 
    season,}
  
  dresses.push(newDress)
  
  addDressToPage(newDress)
  }

submitButton.addEventListener('click', event => {

  event.preventDefault()
  
  const {brand, color, price, country, gender, size, season} = getInputValues()
  
  clearInputs()
  
  addDress({
    brand,
    color,
    price,
    country,
    gender, 
    size, 
    season,})
  
  // alert("Dress has been created")
    })

  sortButton.addEventListener('click', event => {

    event.preventDefault()

    dresses.sort(function(a, b) {
      return b.size - a.size;
    });
  renderItemList(dresses)
  })

  searchButton.addEventListener('click', event =>{

    event.preventDefault()

    const brand = getInputBrand();
    const foundDresses = dresses.filter(dress => dress.brand.search(brand) !== -1)

    renderItemList(foundDresses)
  })

  cancelButton.addEventListener('click', event => { 
    event.preventDefault()
    searchBrandInput.value = ''
    renderItemList(dresses)
})

countPriceButton.addEventListener('click', event => {

  event.preventDefault();

  const sum = dresses.reduce((acc, dress) =>{
  return acc += +dress.price
  }, 0)

  countPriceOutput.textContent = sum;

})
 

renderItemList(dresses)
