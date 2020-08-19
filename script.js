let main_field = document.getElementById('main-field');



for (let i = 1; i < 43; i++) {
  let buttons = document.createElement('button');
  main_field.appendChild(buttons);
  buttons.textContent = i;
  if (i % 3) {
    buttons.style.background = "";
  }
  else {
    buttons.style.background = "green";
    buttons.addEventListener('click', function(){
      let green = i++;
      buttons.textContent = green;
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
