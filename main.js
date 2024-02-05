let elemSlot = document.getElementById("js-slot");
let elemTextSlot = document.getElementsByClassName("js-text-slot");
let elemButtonStart = document.getElementById("js-button-start");

elemButtonStart.onclick = ()=>{
    elemButtonStart.disabled = true;
    for (let text of elemTextSlot){
        text.classList.add("slot-mode");
        let duration = 1;
        text.style.animationDuration = `${duration}s`;
        text.style.animationIterationCount = "infinite";
    }

    setTimeout(() => {
        let unit = -24;
        let rand = unit*(10+Math.trunc(Math.random()*10));
        for (let text of elemTextSlot){
            text.classList.remove("slot-mode");
            text.style.transform = `translateY(${rand}px)`;
        }
        elemButtonStart.disabled = false;
    }, 4000);
};

let registerSkill = (skillList)=>{
    let skillNum = 10;
    for (let i=0; i<skillNum*3; i++){
        if (i==2){
            let elem = document.createElement("div");
            elem.setAttribute("class", "hit");
            elemSlot.appendChild(elem);
        }
        let elem = document.createElement("p");
        elem.setAttribute("class", "js-text-slot");
        elem.textContent = skillList[i%skillNum];
        elemSlot.appendChild(elem);
    }
};

let skillList = [
    "メラ",
    "ヒャド",
    "ギラ",
    "バギ",
    "イオ",
    "ドルマ",
    "デイン",
    "ザキ",
    "ルカニ",
    "ホイミ"
];
registerSkill(skillList);