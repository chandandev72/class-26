const item = 0;
while (item > 10){
    item++
}

for (const item = 1; item <=15;item++){
    console.log(item);
}

for(const item of Arrays){
  console.log(item);
} 

const details = {
    name : 'chandan',
    id : '479772',
    age : 20,
    website : 'eshikon.com'

}

const keys = Object.keys(details)
for(const key of keys){
    console.log(key);
}
 
const values = Object.values(details);
console.log(values); 


const keyvalue =Object.entries(details);
console.log(keyvalue);


Object.seal(details);
details.age = 30;
console.log(details);

details.newtaik = 'bangladesh'
console.log(details);


Object.seal(details);
details.newtaik = 'bangladesh'; 
details.age = 30;
console.log(details);


delete details.name;
console.log(details);


// key values = ke value Pair

for ( const item in details) {
    console.log(item);
}

const letters = new Set(["a","b","c","d",60]);
console.log(letters);

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ])

  console.log(fruits);
  

 