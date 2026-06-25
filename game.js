let numbers = ["green",
    "red","black","red","black","red","black","red","black","red","black","black","red",
    "black","red","black","red","black","red","red","black","red","black","red","black",
    "red","black","red","black","black","red","black","red","black","red","black","red",
    "green"];

let regions = {
    0 : {x1:179, y1:45, x2:360, y2:89, betType:"single", payout:35},
    1 : {x1:180, y1:90, x2:240, y2:142, betType:"single", payout:35},
    2 : {x1:240, y1:90, x2:300, y2:142, betType:"single", payout:35},
    3 : {x1:300, y1:90, x2:360, y2:142, betType:"single", payout:35},
    4 : {x1:180, y1:142, x2:240, y2:194, betType:"single", payout:35},
    5 : {x1:240, y1:142, x2:300, y2:194, betType:"single", payout:35},
    6 : {x1:300, y1:142, x2:360, y2:194, betType:"single", payout:35},
    7 : {x1:180, y1:194, x2:240, y2:246, betType:"single", payout:35},
    8 : {x1:240, y1:194, x2:300, y2:246, betType:"single", payout:35},
    9 : {x1:300, y1:194, x2:360, y2:246, betType:"single", payout:35},
    10 : {x1:180, y1:246, x2:240, y2:298, betType:"single", payout:35},
    11 : {x1:240, y1:246, x2:300, y2:298, betType:"single", payout:35},
    12 : {x1:300, y1:246, x2:360, y2:298, betType:"single", payout:35},
    13 : {x1:180, y1:298, x2:240, y2:350, betType:"single", payout:35},
    14 : {x1:240, y1:298, x2:300, y2:350, betType:"single", payout:35},
    15 : {x1:300, y1:298, x2:360, y2:350, betType:"single", payout:35},
    16 : {x1:180, y1:350, x2:240, y2:402, betType:"single", payout:35},
    17 : {x1:240, y1:350, x2:300, y2:402, betType:"single", payout:35},
    18 : {x1:300, y1:350, x2:360, y2:402, betType:"single", payout:35},
    19 : {x1:180, y1:402, x2:240, y2:454, betType:"single", payout:35},
    20 : {x1:240, y1:402, x2:300, y2:454, betType:"single", payout:35},
    21 : {x1:300, y1:402, x2:360, y2:454, betType:"single", payout:35},
    22 : {x1:180, y1:454, x2:240, y2:506, betType:"single", payout:35},
    23 : {x1:240, y1:454, x2:300, y2:506, betType:"single", payout:35},
    24 : {x1:300, y1:454, x2:360, y2:506, betType:"single", payout:35},
    25 : {x1:180, y1:506, x2:240, y2:558, betType:"single", payout:35},
    26 : {x1:240, y1:506, x2:300, y2:558, betType:"single", payout:35},
    27 : {x1:300, y1:506, x2:360, y2:558, betType:"single", payout:35},
    28 : {x1:180, y1:558, x2:240, y2:610, betType:"single", payout:35},
    29 : {x1:240, y1:558, x2:300, y2:610, betType:"single", payout:35},
    30 : {x1:300, y1:558, x2:360, y2:610, betType:"single", payout:35},
    31 : {x1:180, y1:610, x2:240, y2:662, betType:"single", payout:35},
    32 : {x1:240, y1:610, x2:300, y2:662, betType:"single", payout:35},
    33 : {x1:300, y1:610, x2:360, y2:662, betType:"single", payout:35},
    34 : {x1:180, y1:662, x2:240, y2:714, betType:"single", payout:35},
    35 : {x1:240, y1:662, x2:300, y2:714, betType:"single", payout:35},
    36 : {x1:300, y1:662, x2:360, y2:714, betType:"single", payout:35},
    "column1" : {x1:180, y1:714, x2:240, y2:766, betType:"column1", payout:12},
    "column2" : {x1:240, y1:714, x2:300, y2:766, betType:"column2", payout:12},
    "column3" : {x1:300, y1:714, x2:360, y2:766, betType:"column3", payout:12},
    "firstthird1" :  {x1:10,  y1:663, x2:67,  y2:680, x3:67,  y3:732, x4:10,  y4:716, betType:"firstthird", payout:2 },
    "firstthird2" :  {x1:474, y1:692, x2:535, y2:678, x3:535, y3:731, x4:475, y4:742, betType:"firstthird", payout:2 },
    "secondthird1" : {x1:67,  y1:681, x2:122, y2:697, x3:121, y3:748, x4:67,  y4:732, betType:"secondthird", payout:2 },
    "secondthird2" : {x1:416, y1:706, x2:474, y2:693, x3:474, y3:743, x4:417, y4:756, betType:"secondthird", payout:2 },
    "thirdthird1" :  {x1:123, y1:696, x2:121, y2:748, x3:178, y3:764, x4:180, y4:713, betType:"thirdthird", payout:2 },
    "thirdthird2" :  {x1:357, y1:718, x2:416, y2:705, x3:417, y3:757, x4:358, y4:769, betType:"thirdthird", payout:2 },
    "high"  : {x1:10,  y1:134, x2:180, y2:88,  x3:179, y3:299, x4:11,  y4:310, betType:"high",  payout:1 },
    "low"   : {x1:358, y1:89,  x2:536, y2:133, x3:536, y3:317, x4:358, y4:300, betType:"low",   payout:1 },
    "even"  : {x1:11,  y1:310, x2:180, y2:299, x3:180, y3:508, x4:10,  y4:488, betType:"even",  payout:1 },
    "odd"   : {x1:358, y1:300, x2:535, y2:316, x3:535, y3:496, x4:358, y4:510, betType:"odd",   payout:1 },
    "black" : {x1:10,  y1:487, x2:179, y2:506, x3:180, y3:713, x4:10,  y4:665, betType:"black", payout:1 },
    "red"   : {x1:358, y1:510, x2:534, y2:496, x3:534, y3:680, x4:358, y4:717, betType:"red",   payout:1 },
}

let resultDiv = document.getElementById("result"); 
let rouletteDiv = document.getElementById("rouletteImage");
let moneyDiv = document.getElementById("money");
let chipCanvas = document.getElementById("chip");
let chipCtx = chipCanvas.getContext("2d");

let chipRadius = 15;

let betNumberInput = document.getElementById("betNumber");
let betAmountInput = document.getElementById("betAmount");

let generateButton = document.getElementById("gen");

let startMoney = 1000;

let bet = "";
let betAmount = 0;

window.onload = (event) => {
    rouletteDiv.addEventListener("pointerdown",placeBet);
    rouletteDiv.addEventListener("pointermove",checkForRegion);
    let rouletteImg = document.getElementById("rouletteImg");
    chipCanvas.width =  rouletteImg.width;
    chipCanvas.height = rouletteImg.height;
    clearBets();
    clearInputs();
    moneyDiv.innerHTML = `Your current money is ${startMoney}`;
    drawChip(100,100);
    //drawGrid();
};

function mousePosition(e){
    let rect = e.target.getBoundingClientRect();
    mouseX = Math.round(e.clientX - rect.left);
    mouseY = Math.round(e.clientY - rect.top);
    //console.log(`x:${mouseX}, y:${mouseY}`);
    drawChip(mouseX,mouseY);
    checkRegion(mouseX, mouseY);
}

function checkForRegion(e){
    mousePosition(e);
}

function placeBet(e){
    mousePosition(e);
}

function clearCanvas(canvas){
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
}

function drawChip(x, y){
    clearCanvas(chipCanvas);
    chipCtx.beginPath();
    chipCtx.arc(x, y, chipRadius, 0, 2 * Math.PI);
    chipCtx.fillStyle = "red";
    chipCtx.fill();
    chipCtx.lineWidth = 4;
    chipCtx.strokeStyle = "blue";
    chipCtx.stroke();
    chipCtx.closePath();
}

function checkRegion(x, y){
    for (let [key, value] of Object.entries(regions)) {
        let points = [];
        for (let [key2, value2] of Object.entries(value)) {
            points.push(value2);
        }
        if (checkPoints(x, y, points, chipRadius, key)){
            //console.log(key);
            highlightRegion(points);
            break;
        }
    }

}

function highlightRegion(points){
    chipCtx.fillStyle = "rgb(0 255 0 / 50%)";
    if (points.length == 4){
        let width = points[2] - points[0];
        let height = points[3] - points[1];
        chipCtx.fillRect(points[0], points[1], width, height);
    }else{
        let region = new Path2D();
        region.moveTo(points[0], points[1]);
        for (let i = 2; i < points.length; i += 2){
            region.lineTo(points[i], points[i + 1]);
        }
        region.lineTo(points[0], points[1]);
        region.closePath();
        chipCtx.fill(region);
    }
}

function checkPoints(x, y, points, radiues = chipRadius, key){
    if (points.length == 4){
        if (x >= points[0] && y >= points[1] && x < points[2] && y < points[3]) return true;
    }else{
        if(checkIfPointinQuadliteral(x, y, points, key)) return true;
    }
}

function checkIfPointinQuadliteral(x, y, points, key){
    let isInside = false;
    for (let i = 0; i < points.length; i += 2){
        let j = (i + 2) % points.length;
        let vertex1 = {x: points[i] , y: points[i + 1]};
        let vertex2 = {x: points[j] , y: points[j + 1]};
        let higher = vertex1.y;
        let lower = vertex2.y;
        if (vertex2.y < higher){
            higher = vertex2.y;
            lower = vertex1.y;
        }
        if ((y >= higher && y < lower) && (x <= vertex1.x && x <= vertex2.x)) isInside = !isInside;
    }
    return isInside;
}

// function drawGrid(){
//     let sizeX = 60;
//     let sizeY = 52;
//     let startX = 180;
//     let startY = 90;
//     chipCtx.lineWidth = 1;
//     let run = 1;

//     for (let y = 0; y < 12; y++){
//         let currentY = startY + y * sizeY;
//         for (let x = 0; x < 3; x++){
//             let currentX = startX + x * sizeX;
//             chipCtx.rect(currentX, currentY, sizeX, sizeY);
//             console.log(`${run} : {x1:${currentX}, y1:${currentY}, x2:${currentX + sizeX}, y2:${currentY + sizeY}},`);
//             run++;
//             chipCtx.stroke();

//         }
//     }
// }




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
            case  "betFirstColumn" :
                bet = {
                    betType : "tt",
                    payout : 2,
                };
                break
            case  "betFirstColumn" :
                bet = {
                    betType : "tt",
                    payout : 2,
                };
                break
            case  "betFirstColumn" :
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

