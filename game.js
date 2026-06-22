let numbers = ["green",
    "red","black","red","black","red","black","red","black","red","black","black","red",
    "black","red","black","red","black","red","red","black","red","black","red","black",
    "red","black","red","black","black","red","black","red","black","red","black","red",
    "green"];

let resultDiv = document.getElementById("result"); 
let rouletteDiv = document.getElementById("rouletteImage");
let chipCanvas = document.getElementById("chip");
let chipCtx = chipCanvas.getContext("2d");

let generateButton = document.getElementById("gen");

let bet = "";

window.onload = (event) => {
    rouletteDiv.addEventListener("pointerdown",mousePosition);
    let rouletteImg = document.getElementById("rouletteImg");
    chipCanvas.width =  rouletteImg.width;
    chipCanvas.height = rouletteImg.height;
    clearBets();
    drawChip(100,100);

};

function mousePosition(e){
    let rect = e.target.getBoundingClientRect();
    mouseX = Math.round(e.clientX - rect.left);
    mouseY = Math.round(e.clientY - rect.top);
    console.log(`X:${mouseX} Y:${mouseY}`);
    drawChip(mouseX,mouseY);
}

function clearCanvas(canvas){
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
}

function drawChip(x, y){
    clearCanvas(chipCanvas);
    chipCtx.beginPath();
    chipCtx.arc(x, y, 20, 0, 2 * Math.PI);
    chipCtx.fillStyle = "red";
    chipCtx.fill();
    chipCtx.lineWidth = 4;
    chipCtx.strokeStyle = "blue";
    chipCtx.stroke();
    chipCtx.closePath();
}

function clearBets(){
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkBoxes.length; i++){
        checkBoxes[i].checked = false;
    }
    generateButton.disabled = true;
}

function makeBet(checkBox){
    clearBets();
    checkBox.checked = true;
    let betId = checkBox.id;

    switch(betId){
            case "betBlack" :
                bet = "black";
                break
            case "betRed" :
                bet = "red";
                break
            case "betOdd" :
                bet = "odd";
                break
            case "betEven" :
                bet = "even";
                break
            case "betFirstHalf" :
                bet = "fh";
                break
            case "betSecondHalf" :
                bet = "sh";
                break
            case "betFirstThird" :
                bet = "ft";
                break
            case "betSecondThird" :
                bet = "st";
                break
            case  "betThirdThird" :
                bet = "tt";
                break
    }
    console.log(bet);
    generateButton.disabled = false;
}


function genResult(){
    let spin = STATIC_RNG.nextRange(0,37);
    let evenOdd = "green";
    let color = numbers[spin];
    let half = "green";
    let third = "green";
    let column = "green";

    if (spin != 0 && spin != 37){
        if (spin % 2 == 0) evenOdd = "even"; else evenOdd = "odd";
        if (spin < 19) half = "fh"; else half = "sh";
        if (spin < 13) third = "ft"; else if (spin < 25) third = "st"; else third = "tt";
        if (spin % 3 == 1) column = "fc"; else if (spin % 3 == 2) column = "sc"; else column = "tc";
        resultDiv.innerHTML = `Number spinned: ${spin} it is ${color} and ${evenOdd} and ${half} half and ${third} third and ${column} column.`;
    }else{
        let number = "0";
        if (spin == 37) number = "00";
        resultDiv.innerHTML = `Number spinned: ${number} it is ${color} and neither odd or even.`;
    }
    
    let result = [spin, evenOdd, color, half, third, column];
    let win = false;

    for(let entry of result){
        if (bet == entry) win = true;
    }

    console.log(win);

    
}

