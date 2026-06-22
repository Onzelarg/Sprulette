let numbers = ["green",
    "red","black","red","black","red","black","red","black","red","black","black","red",
    "black","red","black","red","black","red","red","black","red","black","red","black",
    "red","black","red","black","black","red","black","red","black","red","black","red",
    "green"];

let resultDiv = document.getElementById("result"); 
let rouletteDiv = document.getElementById("rouletteImage");
let moneyDiv = document.getElementById("money");
let chipCanvas = document.getElementById("chip");
let chipCtx = chipCanvas.getContext("2d");

let betNumberInput = document.getElementById("betNumber");
let betAmountInput = document.getElementById("betAmount");

let generateButton = document.getElementById("gen");

let startMoney = 1000;

let bet = "";
let betAmount = 0;

window.onload = (event) => {
    rouletteDiv.addEventListener("pointerdown",mousePosition);
    let rouletteImg = document.getElementById("rouletteImg");
    chipCanvas.width =  rouletteImg.width;
    chipCanvas.height = rouletteImg.height;
    clearBets();
    clearInputs();
    moneyDiv.innerHTML = `Your current money is ${startMoney}`;
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

function clearInputs(){
    betAmountInput.value = "";
    betNumberInput.value = "";
}

function makeBetAmount(){
    betAmount = parseInt(betAmountInput.value);
    moneyDiv.innerHTML = `Your current money is ${startMoney} and your bet is ${betAmount}`;
    checkForSpin();
}

function makeBet(checkBox){
    clearBets();
    checkBox.checked = true;
    let betId = checkBox.id;

    switch(betId){
            case "betBlack" :
                bet = {
                    betType : "black",
                    payout : 1,
                };
                break
            case "betRed" :
                bet = {
                    betType : "red",
                    payout : 1,
                };
                break
            case "betOdd" :
                bet = {
                    betType : "odd",
                    payout : 1,
                };
                break
            case "betEven" :
                bet = {
                    betType : "even",
                    payout : 1,
                };
                break
            case "betFirstHalf" :
                bet = {
                    betType : "fh",
                    payout : 1,
                };
                break
            case "betSecondHalf" :
                bet = {
                    betType : "sh",
                    payout : 1,
                };
                break
            case "betFirstThird" :
                bet = {
                    betType : "ft",
                    payout : 2,
                };
                break
            case "betSecondThird" :
                bet = {
                    betType : "st",
                    payout : 2,
                };
                break
            case  "betThirdThird" :
                bet = {
                    betType : "tt",
                    payout : 2,
                };
                break
            case "betNumber" :
                bet = {
                    betType : "single",
                    payout : 35,
                    betNumber : betNumberInput.value,
                }
    }
    console.log(bet);
    checkForSpin();
}

function checkForSpin(){
    if (bet != "" && betAmount != 0) generateButton.disabled = false;
}


function genResult(){
    let spin = STATIC_RNG.nextRange(0,37);
    startMoney -= betAmount;
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

    if (bet.betType != "single"){
        for(let entry of result){
            if (bet.betType == entry) win = true;
        }
    }else if (spin == bet.betNumber) win = true;

    console.log(win);
    if (win){ 
        let winAmount = (betAmount * bet.payout) + betAmount;
        resultDiv.innerHTML += `<br> You win! Payout: ${winAmount}`; 
        startMoney += winAmount;
    }else {
        resultDiv.innerHTML += "<br> You lose!";
    }

    moneyDiv.innerHTML = `Your current money is ${startMoney}`;

    
}

