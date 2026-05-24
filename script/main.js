let inp = document.querySelector(".container input")
let history = document.querySelector(".container .history")
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

            let result = eval(`${translate(inp.value)}`)
            result = parseFloat(result.toFixed(5))
            try{

                if(result == "Infinity"){
                inp.value = "∞"
            }else if(isNaN(result)){
                inp.value = "Error"
                history.textContent = ""
            }
            else{
                history.textContent = inp.value;
                inp.value = result;
            }
            } catch(e){
                console.log(e)
                inp.value = "Error"
                history.textContent = ""
            }
            
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