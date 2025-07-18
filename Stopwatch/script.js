let display = document.getElementById("display");

let milliseconds = document.getElementById("milliseconds");
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes"); 
let hours = document.getElementById("hours");

let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let timer = null;
let ms=0;
let sec = 0;
let min = 0;
let hr = 0;

startbtn.addEventListener("click", ()=>{
    if (timer !== null) 
        return;   // Prevent multiple intervals from being set parallely and gets stacked
    timer = setInterval(()=>{
        ms++;
        if(ms>99){
            ms=0;
            sec++;
        }
        if(sec>59){
            sec=0;
            min++;
            if(min>59){
                min=0;
                hr++;
            }
            if(hr>23){
                hr=0;
                min=0;
                sec=0;
            }
        }
        updateDisplay();
    },10)
})

stopbtn.addEventListener("click",()=>{
    clearInterval(timer);
    timer = null;
})
resetbtn.addEventListener("click",()=>{
    clearInterval(timer);
    timer = null;
    sec = 0;
    min = 0;
    hr = 0;
    ms=0;
    updateDisplay();
})
function updateDisplay() {
    milliseconds.innerText = ms<10 ? "0" + ms : ms;
    seconds.innerText = sec<10 ? "0" + sec : sec;
    minutes.innerText = min<10 ? "0" + min : min;
    hours.innerText = hr<10 ? "0" + hr : hr;
}


