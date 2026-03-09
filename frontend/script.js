function checkSafety() {

fetch("http://127.0.0.1:5000/safety")
.then(response => response.json())
.then(data => {
document.getElementById("result").innerText =
"Safety Score: " + data.score + " - " + data.message;
});

}