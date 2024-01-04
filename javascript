const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function deleteDisplay(){
    display.value = display.value.slice(0,-1);

}
function clearDisplay(){
    display.value = "";
}
function applyPercentage(){
    display.value = eval(display.value) / 100;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Syntax Error"
    }

}
