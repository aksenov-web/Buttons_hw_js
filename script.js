let main_field = document.getElementById('main-field');
let i = 42;
let plus_button = document.getElementById('plus_button');
let color = document.getElementsByClassName('colors');
let colorOne = "yellow";
let colorTwo = "blue";
let n = 0;


//Button plus
plus_button.addEventListener('click', function(){
  i = i + 1;
  green(i);
})

// 42 buttons
for (let i = 1; i <= 42; i++) {
  green(i);
}
console.log(color);


function green(i) {
  let buttons = document.createElement('button');
  main_field.appendChild(buttons);
  buttons.textContent = i;

  if (buttons.textContent % 2 == 0) {
    buttons.style.background = colorTwo;
  }
  if (i % 3 == 0) {
    buttons.style.background = colorOne;
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
