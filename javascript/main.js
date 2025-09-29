let inp = document.querySelector(".container input")

let buttons = document.querySelectorAll(".buttons button");

inp.oninput = ()=>{
    filter_inp()
}

function filter_inp(){
    inp.value = inp.value.replace( /[^0-9+\-*/().÷×−]/g ,"")
}

buttons.forEach((but)=>{
    but.onclick = ()=>{
        if (but.classList.contains("submit")){
            inp.value = eval(`${translate(inp.value)}`);
        }else if(but.classList.contains("clear")){
            inp.value = "";
        }else{
            inp.value += but.textContent;
            filter_inp()

        }
        inp.focus()
    }
})
function translate(text){
    return text.replace("×", "*").replace("÷", "/")
}

window.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        document.querySelector(".submit").click()
    }
});