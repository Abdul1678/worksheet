let fruits = ["apple", "banana", "cherry"];

// using length
console.log(fruits.length);

// using push method
 fruits.push("orange");
console.log(fruits);

// The pop method
const  removedFruit = fruits.pop();
console.log(fruits);
console.log(removedFruit);

// the challenge Method
 fruits.push("mango", "rashberry")
 console.log(fruits.push);

 
// using the for loop
 for(let i= 0; i < fruits.length; i++){
    console.log(fruits[i]);
 }
 
 for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
  }
  
  //  how many times apple appears in the friuts array
let numOfApple = 0;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "apple") {
    numOfApple++;
  }
}
console.log(numOfApple);

const cart =[];
cart.push("phones", "hoodies", "shorts");
console.log(cart);


const  cartRemoved = cart.pop();
console.log(cart);
console.log(cartRemoved);
console.log(cart.length);
