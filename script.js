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
names.forEach ((name, province) => {
    console.log('${name} (${provinces[index]})')
  })

  