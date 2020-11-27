const itemsContainer = document.querySelector('#items-container')


const brandInput = document.querySelector('#brand-input')
const colorInput = document.querySelector('#color-input')
const priceInput = document.querySelector('#price-input')
const countryInput = document.querySelector('#country-input')
const gendeerInput = document.querySelector('#gender-input')
const sizeInout = document.querySelector('#size-input')
const seasonInput = document.querySelector('#season-input')

export const searchBrandInput = document.querySelector('#search-input')

const getItemId = id => `item-${id}`

const dressTemplate = ({id, brand, color, price, country, gender, size, season}) =>`
<li id="${getItemId(id)}">
  <p class="item__price">Brand name: ${brand}</p>
  <p class="item__color">Color: ${color}</p>
  <p class="item__price">Price: ${price}</p>
  <p class="item__country">Country: ${country}</p>
  <p class="item__gender">Gender: ${gender}</p>
  <p class="item__size">Size: ${size}</p>
  <p class="item__season">Season: ${season}</p>

  
</li>`

export const getInputValues = () =>{
  return {
    brand : brandInput.value,
    color : colorInput.value,
    price : priceInput.value,
    country : countryInput.value,
    gender : gendeerInput.value,
    size : sizeInout.value,
    season : seasonInput.value,
  }
}

export const clearInputs = () =>{
  brandInput.value = ''
  colorInput.value = ''
  priceInput.value = ''
  countryInput.value = ''
  gendeerInput.value = ''
  sizeInout.value = ''
  seasonInput.value = ''
}

export const addDressToPage = ({id, brand, color, price, country, gender, size, season}) => {
  itemsContainer.insertAdjacentHTML(
    'afterbegin',
    dressTemplate({id, brand, color, price, country, gender, size, season})
  )
}
export const renderItemList = items => {
  itemsContainer.innerHTML = ''

  for(const item of items) {
    addDressToPage(item)
  }
}

export const getInputBrand = () => {
  return searchBrandInput.value
}
