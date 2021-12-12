var esquerdo = document.getElementsByClassName('left')[0].addEventListener('click',previous)
var direito = document.getElementsByClassName('right')[0].addEventListener('click',next)
var imagem = document.getElementsByClassName('imgMac')[0]

function previous(){
imagem.innerHTML="<img src='../imac.png'>"
}

function next(){
imagem.innerHTML="<img src='../macbook.png'>"
    }