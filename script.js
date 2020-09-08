let main_field = document.getElementById('main-field');
let i = 42;
let plus_button = document.getElementById('plus_button');
let selColor = document.getElementById('colors');
let selColorTwo = document.getElementById('colors_2');
let screen = document.getElementById('screen');
let screenTwo = document.getElementById('screen_2');
let colorOne = "Blue";
let colorTwo = "Green";
let n = 0;
let r = 1000;
let buttons = main_field.getElementsByTagName('button');
let rate_up = document.getElementById('rate_up');
let rate_down = document.getElementById('rate_down');
let state = true;

//Button plus
plus_button.addEventListener('click', function(){
  try {
    if (state == false) {
      throw 'Out of out';
        }
    createButton(++i);
  }
  catch(e) {
    //alert("!");
    console.log(e);
  }
})

// 42 buttons
for (let i = 1; i <= 42; i++) {
  createButton(i);
}

selColor.style.display = 'none';
selColorTwo.style.display = 'none';
screen.style.display = 'none';
screenTwo.style.display = 'none';

function colorLoop(n) {
  setTimeout(function() {
    //colorPick;
    //colorPickTwo;
    let buttonTypeOne = document.getElementsByClassName('eachThird');
    for (buttons of buttonTypeOne) {
      if (n % 2 == 0) {
        buttons.classList.remove("btn-dark", "btn-info");
        buttons.classList.add("btn-danger");
        //buttons.style.width = '145px';
        //console.log(colorOne);
        state = false;
      }
      else {
        buttons.classList.remove("btn-danger", "btn-info");
        buttons.classList.add("btn-dark");
        //buttons.style.width = '250px';
        //console.log(colorTwo);
        state = true;
      }
    }
    colorLoop(++n);
  }, r);
}
colorLoop(0);


/*function colorPick() {
  let selectText = selColor.options[selColor.selectedIndex].text;
  colorOne = selectText;
  screen.value = selectText;
  }

function colorPickTwo() {
  let selectText = selColorTwo.options[selColorTwo.selectedIndex].text;
  colorTwo = selectText;
  screenTwo.value = selectText;
  }
*/
function createButton(i) {
  let buttons = document.createElement('button');
  buttons.classList.add("btn", "btn-secondary")
  main_field.appendChild(buttons);
  buttons.textContent = i;

  if (buttons.textContent % 2 == 0) {
    //buttons.style.background = colorTwo;
  }
  if (i % 3 == 0) {
    //buttons.style.background = colorOne;
    buttons.classList.add("eachThird");
    buttons.addEventListener('click', function(){
      let green_button_encrease = Number(buttons.textContent) + 1;
      buttons.textContent = green_button_encrease;
      if (buttons.textContent % 2 == 0) {
    //buttons.style.background = colorTwo;
      }
      else {
        //buttons.style.background = colorOne;
      }
    })}
  else {
    buttons.classList.add("eachOneTwo");
  }
  if (buttons.textContent % 2 == 0) {
   buttons.classList.add("btn-info");
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
