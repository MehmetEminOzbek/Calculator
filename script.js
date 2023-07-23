
// ! Now Ready Calculate 

const display = document.querySelector("#calculator-input");
let lastChar = display.value.slice(0);;

function addToDisplay(value) {
    if (display.value === "0") {
        display.value = "";
    }
    display.value += value;
    if (!lastChar.includes('+')) lastChar -= '+';
    if (!lastChar.includes('-')) lastChar -= '-';
    if (!lastChar.includes('*')) lastChar -= '*';
    if (!lastChar.includes('/')) lastChar -= '';
    

}

function clearDisplay() {
  display.value = "0";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  var result = eval(display.value);
  display.value = result;
}


// ! Demo

/* const screen = document.querySelector("#calculator-input");
const keys = document.querySelector(".calculator-keys");

let screenValue = '0';

updateScreen();

function updateScreen(){
    screen.value = screenValue;
}

keys.addEventListener('click',function(e){
    console.log('click', e.target);
    const element = e.target;

    if(element.tagName !== 'BUTTON') return;
    if(element.classList.contains('operator')){
        console.log('operator',element.value);
        return;
    }
    if(element.classList.contains('decimal')){
        console.log('decimal',element.value);
        return;
    }
    if(element.classList.contains('clear')){
        console.log('clear',element.value);
        return;
    }
   //  console.log('number',element.value)
   inputNumber(element.value);
   updateScreen();
});

function inputNumber(num){
    screenValue = screenValue ==='0'? num: screenValue + num;

} */