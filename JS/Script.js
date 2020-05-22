window.addEventListener('load', start);
var valRange = null;
var podcast1 = document.getElementById('podcast1');
var podcast2 = document.getElementById('podcast2');
var podcast3 = document.getElementById('podcast3');
var podcast4 = document.getElementById('podcast4');
var podcast5 = document.getElementById('podcast5');
var podcast6 = document.getElementById('podcast6');
function start() {
  valRange = document.getElementById('inputRange');
  valRange.addEventListener('input', rangeChange);
}

function rangeChange() {
  podcast1.classList.add('item-hide');
  podcast2.classList.add('item-hide');
  podcast3.classList.add('item-hide');
  podcast4.classList.add('item-hide');
  podcast5.classList.add('item-hide');
  podcast6.classList.add('item-hide');
  if (valRange.value === '90') {
    podcast1.classList.remove('item-hide');
  } else if (valRange.value === '120') {
    podcast2.classList.remove('item-hide');
  } else if (valRange.value === '170') {
    podcast3.classList.remove('item-hide');
  } else if (valRange.value === '190') {
    podcast4.classList.remove('item-hide');
  } else if (valRange.value === '230') {
    podcast5.classList.remove('item-hide');
  } else if (valRange.value === '270') {
    podcast6.classList.remove('item-hide');
  }
}
