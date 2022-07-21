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

// ==========================================================================================

// Usando a array acima, crie uma função para cada um dos seguintes requisitos:

// ==========================================================================================

// 1. Adicione um ID exclusivo a cada produto começando em 1.

const addId = () => {
 products.map((item, index) => {
   item.id = index + 1;
 });
}
addId();
// ==========================================================================================

// 2. Imprima o nome de cada um dos produtos no console.

const printName = () => {
  products.map((item) => {
    console.log(item.name);
  });
}

// ==========================================================================================

// 3. Imprima no console o produto com o id 3.

const getId3 = () => {
  const getAllIds = products.filter((item) => item.id === 3)
  console.log(getAllIds)
}

getId3();

// ==========================================================================================

// 4. Imprima no console os produtos com a cor “black”.

const getProductColorBack = () => {
  const blackColor = products.filter((item) => {
    return item.colors.includes("black");
  });
  console.log(blackColor);
}

getProductColorBack();

// ==========================================================================================

// 5. Imprima no console os produtos que não possuem cor.

const productsWithoutColor = () => {
  const withoutColor = products.filter((item) => {
    return item.colors.length === 0;
  });
  console.log(withoutColor);
}

productsWithoutColor();
