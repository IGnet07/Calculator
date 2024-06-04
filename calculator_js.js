
const display = document.getElementById("display");

function appendTodisplay(input){
display.value += input;

}
function ClearDisplay(){
    display.value ="";
}
// Function of the calculate and Detect the Invalid Equation and handl it
function Calculat(){
    
        try{
            display.value=eval(display.value)
        }
        catch(error){
            display.value="Error"
        }
}
