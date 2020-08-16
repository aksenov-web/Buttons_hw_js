let main_field = document.getElementById('main-field');
let buttons = document.createElement('button');

for (let i = 0; i < 42; i++) {
  main_field.appendChild(
    buttons.cloneNode()
  );
}

function func1 (button) {
  for (let i = 0; i < 42; i) {
    i +=3;
    let nth = i;
    let cell = document.querySelector('button:nth-child(' + nth + ')');
    cell.style.background = "green";
    console.log(func1);
}}
func1();