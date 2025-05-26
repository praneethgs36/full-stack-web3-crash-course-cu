const connectButton = document.getElementById("connectButton");

function connect() {
    if (typeof window.ethereum) != "undefined") {
        console.log("hi");
    } else {
        connectButton.innerHTML = "Please install Metamask";
    }
}


connectButton.onclick = connect();