var imagem=document.getElementsByClassName('imagem')[0]
imagem.addEventListener('mouseenter',trocarimagem) 
imagem.addEventListener('mouseout', voltarimagem)
function trocarimagem(){
    imagem.setAttribute('src','pavlov.png')          
}
function voltarimagem(){
    imagem.setAttribute('src','cerebro.png')
}
var skinner=document.getElementById('skinner')
skinner.addEventListener('mouseenter', mostrarskinner)
skinner.addEventListener('mouseout', mostrarcerebro)
function mostrarskinner(){
   skinner.setAttribute('src', 'skinner.png')
}
function mostrarcerebro(){
 skinner.setAttribute('src', 'cerebro.png')
}
var freud=document.getElementById('freud')
freud.addEventListener('mouseenter', mostrarfreud)
freud.addEventListener('mouseout', mostrarcerebro1)
function mostrarfreud(){
    freud.setAttribute('src', 'freud.png')
}
function mostrarcerebro1(){
    freud.setAttribute('src', 'cerebro.png')
}
var imagem1=document.getElementById('imagem1')
imagem1.addEventListener('mouseenter',trocarimagem1) 
imagem1.addEventListener('mouseout', voltarimagem1)
function trocarimagem1(){
    imagem1.setAttribute('src','silveira.png')          
}
function voltarimagem1(){
    imagem1.setAttribute('src','cerebro.png')
}
var imagem2=document.getElementById('imagem2')
imagem2.addEventListener('mouseenter',trocarimagem2) 
imagem2.addEventListener('mouseout', voltarimagem2)
function trocarimagem2(){
    imagem2.setAttribute('src','piaget.png')          
}
function voltarimagem2(){
    imagem2.setAttribute('src','cerebro.png')
}
function voltarimagem1(){
    imagem1.setAttribute('src','cerebro.png')
}
var imagem3=document.getElementById('imagem3')
imagem3.addEventListener('mouseenter',trocarimagem3) 
imagem3.addEventListener('mouseout', voltarimagem3)
function trocarimagem3(){
    imagem3.setAttribute('src','jung.png')          
}
function voltarimagem3(){
    imagem3.setAttribute('src','cerebro.png')
}