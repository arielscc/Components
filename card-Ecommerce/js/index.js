var imagen = document.getElementById('foto');
var color = document.getElementById('color');

function colorVerde(){
    imagen.src = "img/shoes_green.png";
    color.style.setProperty('--bg-pseudo', '#0b0')
}
function colorVioleta(){
    imagen.src = "img/shoes_purple.png"
    color.style.setProperty('--bg-pseudo', '#6214df')
}
function colorRosado(){
    imagen.src = "img/shoes_pink.png"
    color.style.setProperty('--bg-pseudo', '#fc06d2')
}
function colorAzul(){
    imagen.src = "img/shoes_blue.png"
    color.style.setProperty('--bg-pseudo', '#0080f7')
}
function colorRojo(){
    imagen.src = "img/shoes_red.png"
    color.style.setProperty('--bg-pseudo', '#d3192e')
}

