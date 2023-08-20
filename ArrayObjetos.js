const array=[1,'5','Camilo',25];

const object = {
    name: "goku",
    age: 110,
    poder: "Kamehame haaaaaaaaaa",
    debilidad: "Jeringas",
}

function ImprimirPrimero(arr){
    console.log(arr[0])
}

function ImprimirCadaElemento(arr){
    
    for(let i=0;i<arr.length;i++){
        
        console.log(arr[i])

    }
    
}

// convertir un objeto a un vector
const ObjetoVector=Object.values(object)

function ImprimirCadaElementoObjeto(obj){

    const ObjetoVector=Object.values(obj)
    
    for(let i=0;i<ObjetoVector.length;i++){
        
        console.log(ObjetoVector[i])

    }
    
}

const objeto={
    paso1:'Identificar el riesgo',
    paso2:'Estructurar el riesgo',
    paso3:'Valorar el riesgo'
}

let DescripcionPaso=paso1



function DescribirPaso(DescripcionPaso){
   if (objeto[DescripcionPaso]){
    console.log(objeto[DescripcionPaso])
   } else{
     console.warn("El paso no existe")
   }
}