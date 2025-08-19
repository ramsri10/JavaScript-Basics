let city = "salem"

console.log(`I live in   ${city} city`)
console.log(typeof city)

let marks = 85

console.log(marks +10);
console.log(typeof marks)

let isWeekend =true
console.log(typeof isWeekend);

if (isWeekend) {
    console.log("Relax");
    
    
}else
    console.log("work");
    

//var → ignores block {} and can be accessed outside (function-scoped).can redeclare and reassign

//let → restricted to the block {} where it is defined, cant redeclare & we can reassign. can be reassigned but not redeclared in the same scope.

//const → block-scoped, cannot be reassigned, but if it’s an object/array, its contents can be changed.
