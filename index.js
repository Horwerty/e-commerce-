const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

 
//   var addToCartButtons = document.getElementById('orderBtn');
//  for (var i = 0; i < addToCartButtons.lenght; i++){
//     var button = addToCartButtons[i]
//     button.addEventListener('click', orderIt())
//  }

//  function orderIt(event) {
//   var button = event.target
//  };

// const item = document.getElementById('itemDiv');
// const quantity = document.getElementById('inp');
// const dprice = document.getElementById('priceDiv');
// const Title = document.getElementById('name1');
// const Title2 = document.getElementById('name2');
// const unitPrice = document.getElementById('price');
// const unitPrice2 = document.getElementById('price2')
// const rtotal = document.getElementById('totalPrice');
// console.log(rtotal);




// function cartIt() {

//   if (cartIt() == Title) {
//     item.innerHTML = Title.innerHTML;
//     quantity.value = 1;
//     dprice.textContent = unitPrice.innerHTML;
//   }

  // if (cartIt() == Title2) {
  //   item.innerHTML = Title2.innerHTML;
  //   quantity.value = 1;
  //   dprice.textContent = unitPrice2.innerHTML;
  // }
  
// };


// function checkIt() {
//   rtotal.innerHTML = '$' + quantity.value * dprice.textContent;
// }

let orderItBtns = document.querySelectorAll('.buyBtn');
let itemName = document.querySelector('#itemDiv');
let itemPrice = document.getElementById('priceDiv');
let itemCard = document.querySelector('.lineOne');
let quantee = document.querySelector('#inp');
let totalMoni = document.querySelector('#totalPrice');
let remuvs = document.querySelectorAll('.delBtn');


// console.log(itemCard);

orderItBtns.forEach((orderItBtn, i) => {
  orderItBtn.addEventListener('click', addToCart)
});

remuvs.forEach((remuv, i) => {
  remuv.addEventListener('click', removeNow)
});


function addToCart() {
  console.log("added");
  let parent = this.parentElement;
  itemName.innerHTML = parent.children[1].innerHTML;
  itemPrice.innerHTML = "$" + parent.children[2].innerHTML;
  
  let itemContainer = document.createElement('tr');
  //console.log(itemName.innerHTML);
  itemContainer.innerHTML = `<tr>
  <td><div class="" id="itemDiv">${itemName.innerHTML}</div></td>
  <td><input type="number" id="inp" value="1"></td>
  
  <td><div id="priceDiv">${itemPrice.innerHTML}</div></td>
  <td><button class = "delBtn">Remove</button></td>
</tr>`

itemCard.appendChild(itemContainer);


// console.log(itemCard);

};

// console.log(remuvs);

function removeNow() {

  let parent = this.parentElement;
  parent.parentElement.remove();

};


