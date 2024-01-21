let recordButton = document.getElementById("");
let displayKeystroke = document.getElementById("");
let changeURL = document.getElementById("");
let eduinput = document.getElementById("");

let savedLink = localStorage.getItem("savedLink");
let savedKey = localStorage.getItem("savedKey");

function recordKeystroke(ks) {
    displayKeystroke.textContent = ks.key;
    if (ks.key !== " ") {
        document.removeEventListener("keydown", recordKeystroke);
        localStorage.setItem("savedKey", displayKeystroke.textContent);
        window.location.reload();
    } else {
        displayKeystroke.textContent = "Invalid key!"
    }
}

recordButton.addEventListener("click", function () {
    displayKeystroke.textContent = "(Enter a key)";
    document.addEventListener("keydown", recordKeystroke);
});

changeURL.addEventListener("click", function () {
    if (eduinput.value !== "") {
        localStorage.setItem("savedLink", eduinput.value);
        window.location.reload();
    } else {
        alert('Can not set a blank link.');
    }
});

function keyPressed(event) {
    if (event.key === savedKey) {
        if (savedLink.includes("https://")) {
            window.location.href = savedLink;
        } else {
            window.location.href = "https://" + savedLink;
        }
    }
}

document.addEventListener("keydown", keyPressed);