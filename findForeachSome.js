var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]

  // El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.

// El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.

var algunArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop"
  })
  console.log(algunArticulo)

/* find() : Devuelve el primer elemento del array que cumpla con la condición dada
foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
filter() : Devuelve todos los elementos del array que cumplan con la condición dada
*/  

articulos.forEach(function (articulo) {
  console.log(articulo)
})

articulos.forEach(function (articulo) {
    console.log(articulo.nombre)
  })

  articulos.forEach(function (articulo) {
    console.log(articulo.costo)
  })

// solo valida si alguno de los artículos cumple con la condición establecida

var existeArticulo = articulos.some(function (articulo) {
    return articulo.costo <= 700
  })
  
  existeArticulo

  