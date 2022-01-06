const parent = document.querySelector("#parent");
const btn = document.querySelector("#btn");
const hexCode = document.querySelector("#hex-code");
const copyCode = document.querySelector('#copy');

function generateHexColorCode() {
    let arr = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ];
    let str = '#';
    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * 16);
        str += arr[randomValue];
    }
    return str;
}

btn.addEventListener("click", function() {
    let generatedCode = generateHexColorCode();
    parent.style.backgroundColor = generatedCode;
    hexCode.textContent = generatedCode;
    hexCode.style.color = generatedCode;

});

function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("Copied to your clipboard, the Hex Code: " + text);
}

copyCode.addEventListener('click', function() {
    let elementText = hexCode.textContent;
    copyText(elementText);
})


const btnRed = document.querySelector('#btnRed');
const btnBlack = document.querySelector('#btnBlack');
const btnBlue = document.querySelector('#btnBlue');
const btnGreen = document.querySelector('#btnGreen');
const btnyellow = document.querySelector('#btnYellow');
const btnyOrange = document.querySelector('#btnOrange');
const btnPurple = document.querySelector('#btnPurple');

btnRed.onclick = function() {
    parent.style.backgroundColor = 'red';
    hexCode.textContent = 'ff0000';
    hexCode.style.color = 'ff0000';
}
btnBlack.onclick = function() {
    parent.style.backgroundColor = '#000000';
    hexCode.textContent = '#000000';
    hexCode.style.color = '#000000';
}
btnBlue.onclick = function() {
    parent.style.backgroundColor = '#0000ff';
    hexCode.textContent = '#0000ff';
    hexCode.style.color = '#0000ff';
}
btnGreen.onclick = function() {
    parent.style.backgroundColor = '#00ff00';
    hexCode.textContent = '#00ff00';
    hexCode.style.color = '#00ff00';
}
btnyellow.onclick = function() {
    parent.style.backgroundColor = '#ffff00';
    hexCode.textContent = '#ffff00';
    hexCode.style.color = '#ffff00';
}
btnyOrange.onclick = function() {
    parent.style.backgroundColor = '#ffa500';
    hexCode.textContent = '#ffa500';
    hexCode.style.color = '#ffa500';
}
btnPurple.onclick = function() {
    parent.style.backgroundColor = '#800080';
    hexCode.textContent = '#800080';
    hexCode.style.color = '#800080';
}