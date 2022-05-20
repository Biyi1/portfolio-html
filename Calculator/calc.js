let output = document.getElementById("screen")

function display(numbr){
    output.value += numbr;
}

function Clear(){
    output.value = "";
}

function Delete(){
    output.value = output.value.slice(0, -1);
}

function calculate(){
    try {
        output.value = eval(output.value);
    } catch (error) {
        alert("Wrong Combo")
    }
}