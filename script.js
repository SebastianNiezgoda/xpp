function pokazZdjecie() {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ''; // Usuń wszystko z wnętrza diva
    var img = document.createElement("img");
    img.src = "https://i.pinimg.com/originals/c5/52/8e/c5528e6c4bb0a0ed0b7a3fcf127c68a2.gif";
    img.alt = "Animacja GIF";
    img.style.width = "100vw";
    img.style.height = "100vh";
    resultDiv.appendChild(img); // Dodaj animację GIF do diva
    document.getElementById("audio").play();
    var buttons = document.querySelectorAll("#options button");
    buttons.forEach(function(button) {
        button.style.display = "none";
    });
}
function pokazZdjecie1() {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ''; // Usuń wszystko z wnętrza diva
    var img = document.createElement("img");
    img.src = "https://media3.giphy.com/media/lPMSxygwKx7dOuEoGZ/giphy.gif";
    img.alt = "Animacja GIF";
    img.style.width = "100vw";
    img.style.height = "100vh";
    resultDiv.appendChild(img); // Dodaj animację GIF do diva
    document.getElementById("audio1").play();
    var buttons = document.querySelectorAll("#options button");
    buttons.forEach(function(button) {
        button.style.display = "none";
    });
}