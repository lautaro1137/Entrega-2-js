const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Ejercicio 1
console.log("Punto A-----------------------------------------------");
const pizzasImpar = pizzas.filter((pizza) => {
  return pizza.id % 2 !== 0;
});

pizzasImpar.forEach((pizza) => {
  console.log("La " + pizza.nombre + " es impar");
});

// Ejercicio 2
console.log("Punto B----------------------------------------------");
const pizzasMenosDe600 = pizzas.filter((pizza) => pizza.precio < 600);

if (pizzasMenosDe600.length > 0) {
  pizzasMenosDe600.forEach((pizza) => {
    console.log("La " + pizza.nombre + " cuesta menos de 600");
  });
}

//Ejercicio 3
console.log("Punto C-----------------------------------------------");

pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre} - Precio: $${pizza.precio}`);
});

//Ejercicio 4
console.log("Punto D------------------------------------------------");
pizzas.forEach((pizza) => {
  console.log(pizza.nombre + ":");
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(ingrediente);
  });
  console.log("-------------------");
});
