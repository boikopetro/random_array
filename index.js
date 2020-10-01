document.querySelector('.button').onclick = function(){
    const len = document.querySelector('.length').value;
    const min = document.querySelector('.min').value;
    const max = document.querySelector('.max').value;
    const randomArray = [];
    for(let i = 0; i < len; i++) {
    randomArray.push(randomInteger(min, max))
    } 
    alert(randomArray)
}

function randomInteger(min, max) {
  const rand = min + Math.random() * (max  - min);
  return Math.floor(rand);
}