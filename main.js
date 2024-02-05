let elemSlot = document.getElementById("js-slot");
let elemTextSlot = document.getElementsByClassName("js-text-slot");
let elemButtonStart = document.getElementById("js-button-start");
let elemButtonStop = document.getElementById("js-button-stop");

elemButtonStart.onclick = ()=>{
    elemButtonStart.disabled = true;
    elemButtonStop.disabled = false;
    for (let text of elemTextSlot){
        text.classList.add("slot-mode");
        let duration = 1;
        text.style.animationDuration = `${duration}s`;
        text.style.animationIterationCount = "infinite";
    }
};

elemButtonStop.onclick = ()=>{
    elemButtonStop.disabled = true;
    setTimeout(() => {
        let unit = -24;
        let rand = unit*Math.trunc(Math.random()*15);
        for (let text of elemTextSlot){
            text.classList.remove("slot-mode");
            text.style.transform = `translateY(${rand}px)`;
        }
        elemButtonStart.disabled = false;
    }, 2000);
};

let registerSkill = (skillList)=>{
    let skillNum = 10;
    for (let i=0; i<skillNum*3; i++){
        let elem = document.createElement("p");
        elem.setAttribute("class", "js-text-slot");
        elem.textContent = skillList[i%5];
        elemSlot.appendChild(elem);
    }
};