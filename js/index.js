import { 
  getAllDresses,
  deleteDress,
} from './api.js'

import {
  EDIT_BUTTON_PREFIX,
  REMOVE_BUTTON_PREFIX,
  renderItemList,
  getInputBrand,
  searchBrandInput,
} from './dom_util.js'

const searchButton = document.querySelector('#search-button')
const cancelButton = document.querySelector('#cancel-button')
const sortButton = document.querySelector('#sort-button')
const countPriceButton = document.querySelector('#count-button')
const countPriceOutput = document.querySelector('#count-price')

let dresses = []

const refetchAllDresses = async () => {
  const allDresses = await getAllDresses()
  
  dresses = allDresses

  renderItemList(dresses, onEditItem, onRemoveItem)
}

  const onRemoveItem = element => {
    const itemId = element.target.id.replace(REMOVE_BUTTON_PREFIX, '');
    deleteDress(itemId).then(refetchAllDresses)
  }

  const onEditItem = async element => {
    const itemId = element.target.id.replace(EDIT_BUTTON_PREFIX, '')
    onclick = () => {
        location.href = `edit.html?id=${itemId}`
    }
}  

sortButton.addEventListener('click', event => {

    event.preventDefault()

    dresses.sort(function(a, b) {
      return b.size - a.size;
    });
  renderItemList(dresses, onEditItem, onRemoveItem)
  })

searchButton.addEventListener('click', event =>{

    event.preventDefault()

    const brand = getInputBrand();
    const foundDresses = dresses.filter(dress => dress.brandName.search(brand) !== -1)

    renderItemList(foundDresses, onEditItem, onRemoveItem)
  })

cancelButton.addEventListener('click', event => { 
    event.preventDefault()
    searchBrandInput.value = ''
    renderItemList(dresses, onEditItem, onRemoveItem)
})

countPriceButton.addEventListener('click', event => {

  event.preventDefault()

  const sum = dresses.reduce((acc, dress) =>{
  return acc += +dress.priceInUAH
  }, 0)

  countPriceOutput.textContent = sum

})
 
refetchAllDresses()
