function checkSafety() {

fetch("https://dummy-safewalk-backend.onrender.com/safety")
.then(response => response.json())
.then(data => {
document.getElementById("result").innerText =
"Safety Score: " + data.score + " - " + data.message;
});

}