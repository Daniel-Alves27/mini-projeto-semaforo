let cores = [
    "img/desligado.png",
    "img/vermelho.png",
    "img/amarelo.png",
    "img/verde.png"
];

let interval = setInterval(()=>{
    imgSemaforo.src = cores[1]
},1900);    
let interval2 = setInterval(()=>{
    imgSemaforo.src = cores[2]
},2000) 
let interval3 = setInterval(()=>{
    imgSemaforo.src = cores[3]
},2100)

const desligar = document.getElementById("desligar");
desligar.addEventListener("click", () => {
    let imgSemaforo = document.getElementById("imagem__item");
    imgSemaforo.src = cores[0];
    clearInterval(interval)
    clearInterval(interval2)
    clearInterval(interval3)
});

const vermelho = document.getElementById("vermelho");
vermelho.addEventListener("click", () => {
    let imgSemaforo = document.getElementById("imagem__item");
    imgSemaforo.src = cores[1];
});

const amarelo = document.getElementById("amarelo");
amarelo.addEventListener("click", () => {
    let imgSemaforo = document.getElementById("imagem__item");
    imgSemaforo.src = cores[2];
});

const verde = document.getElementById("verde");
verde.addEventListener("click", () => {
    let imgSemaforo = document.getElementById("imagem__item");
    imgSemaforo.src = cores[3];
});


const automatico = document.getElementById("automatico");
    automatico.addEventListener("click", () => {
        let imgSemaforo = document.getElementById("imagem__item");  
            interval = setInterval(()=>{
                imgSemaforo.src = cores[3]
            },2900);    
            interval2 = setInterval(()=>{
                imgSemaforo.src = cores[2]
            },3100) 
            interval3 = setInterval(()=>{
                imgSemaforo.src = cores[1]
            },3300) 
})  
    

