function changeTabName() {
    let input = document.getElementById("");
    let newTabName = input.value;
    document.title = newTabName;
    localStorage.setItem("tabName", newTabName);
}

function toggleAboutBlank() {
    if (localStorage.getItem("aboutblank") === "active") {
        document.body.addEventListener()
    }
}

function aboutblank() {
    let win = window.open();
    let url = window.location.href;
    let iframe = win.document.createElement('iframe');
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url
    win.document.appendChild(iframe);
}


function customBgChanger() {
    let url = document.getElementById("");
    localStorage.setItem("BackgroundImage", url);
    window.location.reload;
}