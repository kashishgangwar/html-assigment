let textBox = document.getElementById("textBox");
let count = document.getElementById("count");
let max = 100;

textBox.addEventListener("input", function () {
    let remaining = max - textBox.value.length;
    count.textContent = "Characters left: " + remaining;

    // Color change
    if (remaining > 50) {
        count.className = "green";
    } else if (remaining > 20) {
        count.className = "orange";
    } else {
        count.className = "red";
    }
});