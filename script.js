// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Exercise 1
//Logging names
names.forEach (name => {
    console.log(name)
  })
 
//Logging provinces  
provinces.forEach (province =>{
    console.log(province)
  })

//Logging provinces for each name
names.forEach ((name, index) => {
    console.log(`${name} (${provinces[index]})`)
  })

//Exercise 2
  const provinceUppercase = provinces.map(province => province.toUpperCase());
  console.log(provinceUppercase);

//Exercise 3
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//Exercise 4
  const sortedProvinces = [...provinces].sort();
  console.log(sortedProvinces);

//Exercise 5
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces);

//Exercise 6
  const containsS = names.map(name => name.includes('S') || name.includes('s'));
  console.log(containsS);

//Exercise 7
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

//Advanced Exercises 
//Exercise 1
console.log(products.map(({ product }) => product));

//Exercise 2
console.log(products.filter(({ product }) => product.length <= 5));

//Exercise 3
console.log(
    products
      .filter(({ price }) => !isNaN(price) && price !== '' && String(price).length > 0)
      .reduce((total, { price }) => total + Number(price), 0)
  );

//Exercise 4
console.log(products.reduce((acc, { product }) => acc + product, ''));

//Exercise 5
const result = products
  .filter(({ price }) => !isNaN(price) && price !== '' && String(price) !== ' ')
  .reduce((acc, { product, price }) => {
    const numericPrice = Number(price);
    if (numericPrice > acc.highest.price) {
      acc.highest = { product, price: numericPrice };
    }
    if (numericPrice < acc.lowest.price) {
      acc.lowest = { product, price: numericPrice };
    }
    return acc;
  }, {
    highest: { product: '', price: -Infinity },
    lowest: { product: '', price: Infinity }
  });

  console.log(`Highest: ${result.highest.product}. Lowest: ${result.lowest.product}.`);

//Exercise 6
console.log(products.map(({ product, price }) => ({ name: product, cost: price })));