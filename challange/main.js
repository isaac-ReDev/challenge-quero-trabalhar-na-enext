const potionList       = document.querySelector(".potion-list");
const btnShowMenu      = document.querySelector('[data-btn="btn-show-menu"]');
const btnCloseLightBox = document.querySelector('[data-js-btn-close-lightBox]');

const lightBox    = document.querySelector(".light-box");

const BAG = []

const potionJson = {
    "potions": {
      "1": {
        "id": 1, 
        "name": "Aging Potion",
        "image": "../assets/products/aging-potion.png",
        "price": 29.99,
        "effect": "Causes the drinker to advance in age",
        "ingredients": [
          "Red Wine",
          "Prune Juice",
          "Hairy Fungus",
          "Tortoise Shell",
          "Caterpillar",
          "Bat Tongue"
        ]
      },
      "2": {
        "id": 2,
        "name": "Bulgeye Potion",
        "image": "../assets/products/bulgeye-potion.png",
        "price": 19.99,
        "effect": "It affects one's eyes, causing them to swell",
        "ingredients": [
          "Beetle eyes",
          "Eel eyes"
        ]
      },
      "3": {
        "id": 3,
        "name": "Dragon Tonic",
        "image": "../assets/products/dragon-tonic.png",
        "price": 64.99,
        "effect": "A tonic used to cure sick dragons",
        "ingredients": [
          "Eagle Owl feathers",
          "Peacock feathers",
          "Giant Purple Toad warts"
        ]
      },
      "4": {
        "id": 4,
        "name": "Love Potion",
        "image": "../assets/products/love-potion.png",
        "price": 29.99,
        "effect": "The one who drinks it falls deeply in love with the first person they see",
        "ingredients": [
          "Petals from a red rose",
          "Essence of violet",
          "Canary flight and down feathers",
          "Newt eyes"
        ]
      },
      "5": {
        "id": 5,
        "name": "Polyjuice Potion",
        "image": "../assets/products/polyjuice-potion.png",
        "price": 99.99,
        "effect": "Allows the drinker to assume the form of someone else",
        "ingredients": [
          "Lacewing flies",
          "Leeches",
          "Powdered bicorn horn",
          "Knotgrass",
          "Fluxweed",
          "Shredded Boomslang skin"
        ]
      },
      "6": {
        "id": 6,
        "name": "Sleeping Draught",
        "image": "../assets/products/sleeping-draught.png",
        "price": 29.99,
        "effect": "Causes the drinker to fall almost instantaneously into a deep but temporary sleep",
        "ingredients": [
          "Sprigs of Lavender",
          "Measures of Standard Ingredient",
          "Blobs of Flobberworm Mucus",
          "Valerian sprigs"
        ]
      }
    }
}


const createElement = (elementName, attributes) => {
    const newElementCriated = document.createElement(elementName);
    const atributesAsArrey = Object.entries(attributes);

    atributesAsArrey.forEach( ([key, value]) => {
        newElementCriated.setAttribute(key, value)
    } )
    return newElementCriated

}
// let inde =0;
for(let inde = 0; inde<6; ){
  inde++  
    // let curretnIndex = potionJson.potions[1]
   potionList.innerHTML += `
   <li class="potion-item " data-potion-id="${potionJson.potions[inde].id}">
    <img class="potion-img" src="${potionJson.potions[inde].image}" alt="potion">
    <p class="potion-name"> ${potionJson.potions[inde].name} <span class="potin-price">$${potionJson.potions[inde].price}</span></p>
    </li>   
    `
}




// function createNewElementForPitionList(i){
//     const li = createElement("li", {
//         class: "pition-item",
//         "data-portion-id": `${potionJson.potions[i1].id}`
    
//     })
//     const imgPotion = createElement("img", {
//         src: `${potionJson.potions[i].image}`,
//         alt: "potion",
//         class: "potion-img"
    
//     })

//     return li.appendChild(imgPotion)
    
// }

 //     //* criando elemento li
//  const li = createElement("li", {
//     class: "pition-item",
//     "data-portion-id": `${potionJson.potions[i].id}`

// })
// const imgPotion = createElement("img", {
//     src: `${curretnIndex.image}`,
//     alt: "potion",   
//     class: "potion-img"

// })
// const pPotion = createElement("p", {
//     innerHTML: `${curretnIndex.name}`,
//     class: "potion-name"

    
// })
// //* adicionado innetHtml


// const spanPotion = createElement("p", {
//     innerHTML: `${curretnIndex.price}`,
//     class: "potin-price"

// })

// li.appendChild(imgPotion)
// li.appendChild(pPotion)
// li.appendChild(spanPotion)

// potionList.appendChild(li)

//** ADD EVENT LISTENERS */

//* show menu on click 
btnShowMenu.addEventListener("click", () => {
  const menubar = document.querySelector(".hidden-in-smartphone");
  if(menubar.style.display === "flex"){
    menubar.style.display = "none"
  }else{
    menubar.style.display = "flex"
  }
  
  
})

//*  event on click in the icon X */
btnCloseLightBox.addEventListener("click", () => {
  showLightBox("none")
} )

//* active lightBox 
potionList.addEventListener("click", (event) => {
  const eventTarget = event.target
  const potionCard = eventTarget.className === "potion-item";
  const potionImg = eventTarget.className === "potion-img";
  const potionP = eventTarget.className === "potion-name";
  //* Get attribute special data-potion-id 
  const dataPotionId = eventTarget.parentNode.getAttribute("data-potion-id");

  if( potionCard || potionImg || potionP ){
    // console.log(dataPotionId)
    for(let i in potionJson.potions){
      if(potionJson.potions[i].id == dataPotionId){
          // console.log(potionJson.potions[i])
          desiredPotion(dataPotionId);
          showLightBox("flex")
          //* function add To bag */
          const btnAdd = document.querySelector(".btn-add-to-card");
          btnAdd.addEventListener("click",() =>{
            addToBag()
          } )

      }
    }  

  }

} )


//* show lightbox
function showLightBox(state){
  lightBox.style.display = state;
}


//* show desired potion */
function desiredPotion(idPotion){
  const potionContainer = document.querySelector(".show-here-a-potion");
  potionContainer.innerHTML = `
  <li class="potion-item " data-potion-id="${potionJson.potions[idPotion].id}">
   <img class="potion-img" src="${potionJson.potions[idPotion].image}" alt="potion"/>
   <div class="potion-description">
    <b>${potionJson.potions[idPotion].name}</b>
    <b><strong>Use/effect:</strong></b>
    <p>${potionJson.potions[idPotion].effect}</p>
    <p> <b>ingredients:</b> </p>
    <span class="list-ingredients" >${returnIngredients(idPotion)}</span>
    <p><b>Price:</b>
      <p class="potin-price">${potionJson.potions[idPotion].price}</p>
    </p>
    <button class="btn-add-to-card"><b>Add To card </b></button>
   </div>
    
   </li>   
   `
}



function returnIngredients(id ){
  const potionIngredients = potionJson.potions[id].ingredients
  const NewUlOfIngredients = document.createElement("ul")
  const NewLiOfIngredients = document.createElement("li")
  const ingredientsLenght = potionJson.potions[id].ingredients.length

  for(let i =0; i < ingredientsLenght; i++ ){
      // console.log(potionIngredients[i])
      // console.log(potionIngredients[i])
      NewUlOfIngredients.innerHTML += `
        <li class="ingredients" >${potionIngredients[i]}</li>
      `
      


  }
  // console.log(NewUlOfIngredientschildNodes)
  // console.log(NewUlOfIngredients
  // console.log(NewUlOfIngredients)
 
  return NewUlOfIngredients.outerHTML
}

function addToBag(){
  const bag = document.querySelector(".bag-item-counter")
  let bagLenght = BAG.length + 1;
  BAG.push(1)

  bag.innerHTML = `BAG:${bagLenght}`
  
}