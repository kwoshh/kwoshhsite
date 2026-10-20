let binValue

const b1 = document.getElementById("c4");
const b2 = document.getElementById("c3");
const b4 = document.getElementById("c2");
const b8 = document.getElementById("c1");
const countButton = document.getElementById("count_button");
const countP = document.getElementById("value");


countButton.onclick = function() {
    binValue = 0;

    if (b1.checked) {
        binValue += 1;
    }
    if (b2.checked) {
        binValue += 2;
    }
    if (b4.checked) {
        binValue += 4;
    }
    if (b8.checked) {
        binValue += 8
    }

    countP.textContent = binValue + "!!";
}

