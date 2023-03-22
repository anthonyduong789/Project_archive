// let date = new Date("March 21, 2023 00:13:30")

// document.getElementById("date_label").innerHTML = date
const myLabel = document.getElementById("date_label");
const myButton = document.getElementById("start/stop");
let a = 0;
let q = false;
start();

function start(){
    myButton.addEventListener("click", control)
    function control(){
        if(q == false){
            referesh = setInterval(update, 100)
            q = true
        }
        else if(q == true){
            reset();
            q = false;
        }
    }
    function update(){
        a+=1;
        myLabel.innerHTML = a; 

    }
    function reset(){
        a = 0;
        clearInterval(referesh)
        myLabel.innerHTML = a;
        
    }

}
