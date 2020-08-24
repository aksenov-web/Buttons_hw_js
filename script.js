let main_field = document.getElementById('main-field');
let i = 42;
let plus_button = document.getElementById('plus_button');
let selColor = document.getElementById('colors');
let selColorTwo = document.getElementById('colors_2');
let screen = document.getElementById('screen');
let screenTwo = document.getElementById('screen_2');
let colorOne = "yellow";
let colorTwo = "purple";
let n = 0;
let r = 1000;
let buttons = main_field.getElementsByTagName('button');
let rate_up = document.getElementById('rate_up');
let rate_down = document.getElementById('rate_down');

//Button plus
plus_button.addEventListener('click', function(){
  i = i + 1;
  main_field.style.background = "darkgray";
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
        buttons.style.background = colorOne;
        //buttons.style.width = '145px';
      }
      else {
        buttons.style.background = colorTwo;
        //buttons.style.width = '250px';
      }
    }
    colorLoop(++n);
  }, r);
}
colorLoop(0);


function colorPick() {
  let selectText = selColor.options[selColor.selectedIndex].text;
  colorOne = selectText;
  screen.value = selectText;
  }

function colorPickTwo() {
  let selectText = selColorTwo.options[selColorTwo.selectedIndex].text;
  colorTwo = selectText;
  screenTwo.value = selectText;
  }

function green(i) {
  let buttons = document.createElement('button');
  main_field.appendChild(buttons);
  buttons.textContent = i;

  if (buttons.textContent % 2 == 0) {
    buttons.style.background = colorTwo;
    buttons.style.color = "red";
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
 rate_up.addEventListener('click', function(){
   r = r - 200;
   console.log(r);
 })
rate_down.addEventListener('click', function(){
   r = r + 200;
  console.log(r);
 })

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
