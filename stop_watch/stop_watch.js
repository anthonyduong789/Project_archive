// let date = new Date("March 21, 2023 00:13:30")

// document.getElementById("date_label").innerHTML = date
const myLabel = document.getElementById("date_label");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
let a = 0;
let q = false;
start();

function start(){
    startButton.addEventListener("click", control)
    resetButton.addEventListener("click", reset)
    function control(){
        if(q == false){
            referesh = setInterval(update, 1)
            q = true
        }
        else if(q == true){
            stop();
            q = false;
        }
    }
    function update(){
        a+=1;
        myLabel.innerHTML = formatTime(a); 

    }
    function reset(){
        a = 0;
        stop()
    }
    function stop(){
        clearInterval(referesh)
        myLabel.innerHTML = formatTime(a);
        
    }
    function formatTime(total_seconds){
        let seconds = total_seconds % 60;
        let minutes = Math.floor((total_seconds/60)%60);
        let hours = Math.floor(((total_seconds/60)/60));
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);
        
        return `${hours}:${minutes}:${seconds}`;
    }

    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
    }
