var userInfo = {
  name: "Eric",
  age: 32,
  location: "North America"
};

// Use `Object.values` and `forEach` to iterate through keys
Object.keys(userInfo).forEach(key => console.log(key));
console.log("+++++++++++++++")

console.log(Object.keys(userInfo))
console.log("+++++++++++++++")
console.log("+++++++++++++++")
var keyarr=Object.keys(userInfo)
keyarr.forEach(function(element){
  console.log(element)
})

console.log("+++++++++++++++")
console.log("+++++++++++++++")
// Use `Object.values` and `forEach` to iterate through values
Object.values(userInfo).forEach(value => console.log(value));

console.log("=================")
console.log(Object.values(userInfo))
console.log("=================")
console.log("=================")
var keyarr=Object.values(userInfo)
keyarr.forEach(function(element){
  console.log(element)
})

console.log("=================")
console.log("=================")


// Use `Object.entries` and `forEach` to iterate through keys and values
Object.entries(userInfo).forEach(([key, value]) => console.log(`Key: ${key} and Value ${value}`));

console.log("=================")
console.log(Object.entries(userInfo))
console.log("=================")
console.log("=================")
var keyarr=Object.entries(userInfo)
keyarr.forEach(function(key){
  console.log(`Key: ${key[0]} and Value ${key[1]}`)
})

console.log("=================")
console.log("=================")




// Array of objects
var users = [
  { name: "Eric", age: 32, location: "North America" },
  { name: "Sally", age: 23, location: "Europe" },
  { name: "Cassandra", age: 27, location: "North America" }];

// Loop through array of objects then each object
users.forEach((user) => {
  console.log(user);
  console.log("@@@@@@@@@@@@@@@@@@@")
  // Get the entries for each object in the array
  Object.entries(user).forEach(([key, value]) => {
    // Log the key and value
    console.log(`Key: ${key} and Value ${value}`);
  });
});