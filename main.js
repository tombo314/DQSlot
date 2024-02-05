let elemTextSlot = document.getElementsByClassName("js-text-slot");
let elemButtonStart = document.getElementById("js-button-start");
let elemButtonStop = document.getElementById("js-button-stop");

elemButtonStart.onclick = ()=>{
    for (let text of elemTextSlot){
        text.classList.add("slot-move");
    }
};

elemButtonStop.onclick = ()=>{
    for (let text of elemTextSlot){
        text.classList.remove("slot-move");
    }
};