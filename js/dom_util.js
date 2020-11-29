export const REMOVE_BUTTON_PREFIX = 'remove-button-';
export const EDIT_BUTTON_PREFIX = 'edit-button-';

const itemsContainer = document.querySelector('#items-container')

const brandInput = document.querySelector('#brand-input')
const colorInput = document.querySelector('#color-input')
const priceInput = document.querySelector('#price-input')
const countryInput = document.querySelector('#country-input')
const sizeInout = document.querySelector('#size-input')
const seasonInput = document.querySelector('#season-input')

export const searchBrandInput = document.querySelector('#search-input')

const getItemId = id => `item-${id}`

const dressTemplate = ({id, brandName, color, priceInUAH, countryOfManufacturer, size, season}) =>`
<li id="${getItemId(id)}">
  <p class="item__price">Brand name: ${brandName}</p>
  <p class="item__color">Color: ${color}</p>
  <p class="item__price">Price: ${priceInUAH}</p>
  <p class="item__country">Country: ${countryOfManufacturer}</p>
  <p class="item__size">Size: ${size}</p>
  <p class="item__season">Season: ${season}</p>
  <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="item__buttons-edit">Edit</button>
  <button id="${REMOVE_BUTTON_PREFIX}${id}" type="button" class="item__buttons-delete">Remove</button>
</li>`

export const getInputValues = () =>{
  return {
    brandName : brandInput.value,
    color : colorInput.value,
    priceInUAH : priceInput.value,
    countryOfManufacturer : countryInput.value,
    size : sizeInout.value,
    season : seasonInput.value,
  }
}

export const clearInputs = () =>{
  brandInput.value = ''
  colorInput.value = ''
  priceInput.value = ''
  countryInput.value = ''
  sizeInout.value = ''
  seasonInput.value = ''
}

export const addDressToPage = ({id, brandName, color, priceInUAH, countryOfManufacturer, size, season}, onEditItem, onRemoveItem) => {
  itemsContainer.insertAdjacentHTML(
    'afterbegin',
    dressTemplate({id, brandName, color, priceInUAH, countryOfManufacturer, size, season}, onEditItem, onRemoveItem)
  )

  const editButton = document.querySelector(`#${EDIT_BUTTON_PREFIX}${id}`)
  const deletedButton = document.querySelector(`#${REMOVE_BUTTON_PREFIX}${id}`)

  editButton.addEventListener('click', onEditItem)
  deletedButton.addEventListener('click', onRemoveItem)
}

export const renderItemList = (items, onEditItem, onRemoveItem) => {
  itemsContainer.innerHTML = ''

  for(const item of items) {
    addDressToPage(item, onEditItem, onRemoveItem)
  }
}

export const getInputBrand = () => {
  return searchBrandInput.value
}
