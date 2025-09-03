//1st
let s='Helllo World'

let sp=s.split(' ')

console.log(`The length of the second string is ${sp[0].length}`);

//2nd
let word =" fly me to the moon "

let wp=word.trim().split(' ')

let last =wp[wp.length-1]
console.log(`The Last word is ${last} is ${last.length}`);

//3rd

function isAnagram(arr1,arr2) {

    if(arr1.length != arr2.length)
        return false
    arr1=arr1.trim().toLowerCase()
    arr2=arr2.trim().toLowerCase()

  let sorted1= arr1.split('').sort().join('')
let sorted2= arr2.split('').sort().join('')
    
return sorted1===sorted2
    
}

console.log(isAnagram('silent','listen'));
console.log(isAnagram('hello','hellow'));

