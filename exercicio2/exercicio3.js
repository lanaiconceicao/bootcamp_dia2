let products = [
  { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
  { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
  { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
  { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
  { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
  { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
  { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
  { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
  { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
  { name: 'Monitor', price: 200, quantity: 3, colors: [] },
];

// 1. Adicione um novo produto ao array com as mesmas propriedades dos produtos existentes.

const addProduct = (name, price, quantity, colors) => {
  products.push({name, price, quantity, colors});
  console.log(products);
}

addProduct("Mouse", 109, 30, ["white", "black"]);

// ==========================================================================================

// 2. Remova os produtos fora de estoque da matriz.

const removeProductsOutOfStock = () => {
  const outOfStock = products.filter((item) => {
    return item.quantity !== 0
  });
  console.log(outOfStock);
}

removeProductsOutOfStock();

// ==========================================================================================

// 3. Imprima no console a soma do estoque de todos os produtos.

const sumOfStock = () => {
  const sum = products.reduce((acc, {quantity}) => {
    return acc + quantity
  }, 0);
  console.log(sum);
}

sumOfStock();

// ==========================================================================================

// 4. Imprima produtos com preço superior a um determinado valor.

const priceGreaterThan = (value) => {
  const greater = products.filter((item) => {
    return item.price > value
  });
  console.log(greater);
}

priceGreaterThan(1000);

// ==========================================================================================

// 5. Imprima o nome de todos os produtos que tenham a letra ‘o’ em seu nome.

const nameContainsO = () => {
  const containsO = products.filter((item) => {
    return item.name.includes("o")
  });
  console.log(containsO);
}

nameContainsO();
