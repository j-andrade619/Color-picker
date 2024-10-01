window.onload = function () {
    initColorPicker();
};

function initColorPicker() {
    let colorBox = document.getElementById('color-box');
    let rgb = {
        red: document.getElementById('red'),
        green: document.getElementById('green'),
        blue: document.getElementById('blue'),
    };
    let colorPickers = document.getElementsByClassName('picker');
    setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(colorBox, colors, pickerElements) {
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerLen; i++) {
        pickerElements[i].addEventListener('change', () => {
            let red = colors.red.value;
            let green = colors.green.value;
            let blue = colors.blue.value;
            setBoxBGColor(colorBox, red, green, blue);
            setDisplayValues(red, green, blue);
        });
    }
}

function setBoxBGColor(colorBox, red, green, blue) {
    let rgbval = [red, green, blue].join(',');
    colorBox.style.backgroundColor = "rgb(" + rgbval + ")";
}

function setDisplayValues(red, green, blue) {
    let redval = document.getElementById("redval");
    let greenval = document.getElementById("greenval");
    let blueval = document.getElementById("blueval");

    redval.innerText = red;
    greenval.innerText = green;
    blueval.innerText = blue;
}

//Nothing worked until after the first part of the first video. Everything worked and now nothing is defined. /
