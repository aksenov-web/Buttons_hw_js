let main_field = document.getElementById('main-field');
let i = 42;
let plus_button = document.getElementById('plus_button');
plus_button.addEventListener('click', function(){
  i = i + 1;
  green();

})

for (let i = 1; i <= 42; i++) {
  green();
}
function green() {
  let buttons = document.createElement('button');
  main_field.appendChild(buttons);
  buttons.textContent = i;
  if (i % 3) {
    buttons.style.background = "";
  }
  else {
    buttons.style.background = "green";
    buttons.addEventListener('click', function(){
      let green_button_encrease = Number(buttons.textContent) + 1;
      buttons.textContent = green_button_encrease;
    })}
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
