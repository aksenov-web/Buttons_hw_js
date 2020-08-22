let main_field = document.getElementById('main-field');
let i = 42;
let plus_button = document.getElementById('plus_button');
let color = document.getElementById('colors');
let screen = document.getElementById('screen');
let colorOne = "yellow";
let colorTwo = "blue";
let n = 0;
let buttons = main_field.getElementsByTagName('button');

screen.value = color.value;

/*colorPick;
function colorPick() {
  color.addEventListener('click', function(){
    screen.value = color.value;
    console.log(color.value);
  })

  }
*/


//Button plus
plus_button.addEventListener('click', function(){
  i = i + 1;
  green(i);
})

// 42 buttons
for (let i = 1; i <= 42; i++) {
  green(i);
}



function colorLoop(n) {
  setTimeout(function() {
    let buttonTypeOne = document.getElementsByClassName('eachThird');
    for (buttons of buttonTypeOne) {
      if (n % 2 == 0) {
      buttons.style.background = "purple";
      }
      else {
        buttons.style.background = "orange";
      }
    }
    colorLoop(++n);
  }, 1000);
}
colorLoop(0);

function green(i) {
  let buttons = document.createElement('button');
  main_field.appendChild(buttons);
  buttons.textContent = i;

  if (buttons.textContent % 2 == 0) {
    buttons.style.background = colorTwo;
  }
  if (i % 3 == 0) {
    buttons.style.background = colorOne;
    buttons.classList.add("eachThird");
    buttons.addEventListener('click', function(){
      let green_button_encrease = Number(buttons.textContent) + 1;
      buttons.textContent = green_button_encrease;
      if (buttons.textContent % 2 == 0) {
    buttons.style.background = colorTwo;
      }
      else {
        buttons.style.background = colorOne;
      }
    })}
  else {
    buttons.classList.add("eachOneTwo");
  }
  if (buttons.textContent % 2 == 0) {
    buttons.style.background = colorTwo;
  }
}

/*function func1 (button) {
  for (let i = 0; i < 42; i) {
    i +=3;
    let nth = i;
    let cell = document.querySelector('button:nth-child(' + nth + ')');
    cell.style.background = "green";

    console.log(func1);
}}
func1();
*/
