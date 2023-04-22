let cards = document.querySelectorAll('.product');
const sortItems = document.querySelectorAll('.sort-item');
for (let sortItem of sortItems) {
    sortItem.addEventListener('click', function(){
    const order = [...cards].sort( function (a, b) {
    let raitingA = +a.querySelector(sortItem.dataset.sort).innerHTML;
    let raitingB = +b.querySelector(sortItem.dataset.sort).innerHTML;
  
    return raitingB - raitingA;
  });
    for (let i = 0; i < order.length; i++){
      order[i].style.order = i;
    }
  });
  }
  let hashtags = document.querySelectorAll('.hashtag')
  for(let hashtag of hashtags){
    hashtag.addEventListener('click', function(){
      for(let card of cards){
        card.classList.remove('visually-hidden')
      }
      if(hashtag.innerText.toLowerCase() == 'all'){
        return;
      }
      for(let card of cards){
        let cardHashtag =card.dataset.hashtag.toLowerCase().split(/[ ,]+/)
        if(cardHashtag.includes(hashtag.innerText.toLowerCase())){
        }
        else{
          card.classList.add('visually-hidden');
        }
      }
  });
  }
  let search = document.querySelector('#search');
  search.addEventListener('input', function(event){
    for(let card of cards){
      card.classList.remove('visually-hidden');
    }
    for(let card of cards){
      if(card.innerText.toLowerCase().includes(search.value.toLowerCase())){
  
      }
      else{
        card.classList.add('visually-hidden')
      }
    }
  }) 
function changeImage1() {
    var image = document.getElementById('myImage1');
    if (image.src.match("img/tick.svg")) {image.src = "img/icon_cart_simple (1).svg";}
    else {image.src = "img/tick.svg";}
}
function changeImage2() {
  var image = document.getElementById('myImage2');
  if (image.src.match("img/tick.svg")) {image.src = "img/icon_cart_simple (1).svg";}
  else {image.src = "img/tick.svg";}
}
function changeImage3() {
  var image = document.getElementById('myImage3');
  if (image.src.match("img/tick.svg")) {image.src = "img/icon_cart_simple (1).svg";}
  else {image.src = "img/tick.svg";}
}
function changeImage4() {
  var image = document.getElementById('myImage4');
  if (image.src.match("img/tick.svg")) {image.src = "img/icon_cart_simple (1).svg";}
  else {image.src = "img/tick.svg";}
}
function changeImage5() {
  var image = document.getElementById('myImage5');
  if (image.src.match("img/tick.svg")) {image.src = "img/icon_cart_simple (1).svg";}
  else {image.src = "img/tick.svg";}
}
function changeImage6() {
  var image = document.getElementById('myImage6');
  if (image.src.match("img/tick.svg")) {image.src = "img/icon_cart_simple (1).svg";}
  else {image.src = "img/tick.svg";}
}
function changeImage7() {
  var image = document.getElementById('myImage7');
  if (image.src.match("img/tick.svg")) {image.src = "img/icon_cart_simple (1).svg";}
  else {image.src = "img/tick.svg";}
}
function changeImage8() {
  var image = document.getElementById('myImage8');
  if (image.src.match("img/tick.svg")) {image.src = "img/icon_cart_simple (1).svg";}
  else {image.src = "img/tick.svg";}
}
function changeImage9() {
  var image = document.getElementById('myImage9');
  if (image.src.match("img/tick.svg")) {image.src = "img/icon_cart_simple (1).svg";}
  else {image.src = "img/tick.svg";}
}