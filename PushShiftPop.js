// Put: agregar articulos al final

var articulos = [
    { nombre: 'Bici', stock: 20, costo: 3000 },
    { nombre: 'TV', stock: 30, costo: 2500 },
    { nombre: 'Libro', stock: 24, costo: 320 },
    { nombre: 'Celular', stock: 4, costo: 10000 },
    { nombre: 'laptop', stock: 13, costo: 20000 },
    { nombre: 'teclado', stock: 33, costo: 500 },
    { nombre: 'audifonos', stock: 50, costo: 1700 }
  ];
  
  //PUSH(). agrega item al final del array
  articulos.push({ nombre: 'mouse', stock: 100, costo: 180});

  // shift borra el primer registro del vector

  articulos.shift()

  //pop elimina el último elemento

  articulos.pop()
