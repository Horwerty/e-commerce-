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
const btn = document.getElementsByClassName('order-item');
let itemName = document.querySelector('#itemDiv h4');
let itemPrice = document.getElementById('priceDiv');

console.log(itemName);



orderItBtns.forEach((orderItBtn, i ) => {
  orderItBtn.addEventListener('click', addToCart)
});

function addToCart() {
  let parent = this.parentElement;

  itemName.innerHTML = parent.children[1].innerHTML;
  itemPrice.innerHTML = parent.children[2].innerHTML;

  console.log(parent.children[1].innerHTML)
}
  
//   // element.addEventListener('click', () => {
//   //    let btn_parent = btn.parentElement;
//   //    let itemName = btn_parent.children[1].innerText;
//   //    let itemPrice = btn_parent.children[2].innerText;
//   // });

// );

// for(let i = 0; i < orderIt.length; i++){
//   orderIt[i] = btn
//   btn.addEventListener('click', addToCart())  
// };  

// console.log(btn);

// function addToCart(event){
//   btn = event.target
//   let btn_parent = button.parentElement;
//   itemName.innerText = "Burger A";
//   itemPrice.innerText = btn_parent.children[0].innerHTML;

//   //console.log(button);
// };

// for(let i = 0; i < orderIt.length; i++){

//   orderIt[i].addEventListener('click', addToCart());
  
// };

// function addToCart(event) {
//   btn = event.target;
//   
// }
