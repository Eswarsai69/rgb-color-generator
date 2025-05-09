let redSlider=document.getElementById("red-slider");
let greenSlider=document.getElementById("green-slider");
let blueSlider=document.getElementById("blue-slider");

let redSpan=document.getElementById("red-span");
let greenSpan=document.getElementById("green-span");
let blueSpan=document.getElementById("blue-span");

let colorBox=document.getElementById("color-box");
let copyValues=document.getElementById("copy-values");

redSlider.addEventListener("input",updateColor);
greenSlider.addEventListener("input",updateColor);
blueSlider.addEventListener("input",updateColor);

let storeValues=`rgb(0,0,0)`;
function updateColor(){
    let redValue=redSlider.value;
    let greenValue=greenSlider.value;
    let blueValue=blueSlider.value;
    let colors=`rgb(${redValue},${greenValue},${blueValue})`;
    colorBox.style.backgroundColor=colors;

    redSpan.textContent=redValue;
    greenSpan.textContent=greenValue;
    blueSpan.textContent=blueValue;

    storeValues=`rgb(${redValue},${greenValue},${blueValue})`;
}

copyValues.addEventListener("click",function(){
    navigator.clipboard.writeText(storeValues);
    let notification=document.createElement("div");
    notification.textContent=`RGB values Copied: ${storeValues}`;
    notification.className="dialog-box";
    document.body.appendChild(notification);
    setTimeout(()=>notification.remove(),3000);
});