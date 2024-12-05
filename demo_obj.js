let a={
    name:"sudha",
    age:22
}
console.log(a);
//acesing objects
console.log(a["name"]);
console.log(a.age);
//update
a["name"]="radhe radhe";
console.log(a["name"]);
console.log(a);
//so we can state that objects are mutable
delete a.age;
console.log(a);
//adding to the object
a.age="INFINITY";
console.log(a);

