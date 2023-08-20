//console.log("Esto debe aparecer en la consola");

const h1 = document.querySelector('h1');

const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito'); // . porque es una clase
const pid = document.querySelector('#pid'); // # porque es un id
const input = document.querySelector('input');

const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const boton = document.querySelector('#Calcular');
const resultado = document.querySelector('#resultado');

const boton2 = document.querySelector('#Calcular2');
const formulario = document.querySelector('#Formulario');

//console.log(input.value)

console.log({h1, p, parrafito, pid, input});

h1.innerHTML="Dominando el JS"; //deja colocar texto y código HTML
h1.innerText ="Dominando el JS v2"; // solo deja colocar texto

const atributo=h1.getAttribute('class'); //leer atributos de los elementos del HTML
console.log(atributo) 

h1.setAttribute('class','rojo'); //colocar un valor a un atributo

h1.classList.add('azul'); // adicionar una clase al elemento

input.value="Hola Camilo";

const img=document.createElement('img'); // se crea un nuevo elemento de HTML tipo imagen 


img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png'); // se define el atributo de la imagen para que se conecte a través de src a una url.

//console.log(img);

pid.append(img);

/////////////////////////////////////////////////////////////////////////////////

boton2.addEventListener('click',EjecutarBoton);

function EjecutarBoton(){

    resultado.innerText="El resultado es "+ " "+input1.value+input2.value;
}

formulario.addEventListener('submit',EjecutarBoton); // submit es el evento que ocurre cuando se ejecuta un formulario

